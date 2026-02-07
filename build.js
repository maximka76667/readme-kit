const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

let simpleIcons;
try {
  simpleIcons = require("simple-icons");
} catch (_) {
  simpleIcons = null;
}

function getIconBySlug(slug) {
  if (!simpleIcons || !slug) return null;
  const icons = Object.values(simpleIcons).filter((x) => x && x.slug && x.path);
  return icons.find((i) => i.slug === slug) || null;
}

const TEMPLATE = "README.template.md";
const OUTPUT = "README.md";
const ASSETS_DIR = "readme-assets";
const COMPONENTS_DIR = path.join(__dirname, "components");

const template = fs.readFileSync(TEMPLATE, "utf8");
let svgCounter = 0;

function ensureAssetsDir() {
  const dir = path.join(__dirname, ASSETS_DIR);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

const result = template.replace(
  /<!--\s*component\s+([\w-]+)(?:\s+(.+?))?\s*-->/gs,
  (match, name, rest) => {
    const componentPath = path.join(COMPONENTS_DIR, `${name}.md`);
    if (!fs.existsSync(componentPath)) {
      console.warn(`Warning: component "${name}" not found`);
      return match;
    }
    const params = {};
    if (rest) {
      const pairRegex = /(\w+)=("([^"]*)"|(\S+))/g;
      let p;
      while ((p = pairRegex.exec(rest)) !== null) {
        params[p[1]] = p[3] !== undefined ? p[3] : p[4];
      }
    }

    if (params.icon) {
      const icon = getIconBySlug(String(params.icon).toLowerCase());
      if (icon) {
        params.iconPath = icon.path;
        params.iconColor = "#" + icon.hex;
      } else {
        params.iconPath = "";
        params.iconColor = "#64748b";
      }
    }

    params.isGradient = params.variant === "gradient";

    const source = fs.readFileSync(componentPath, "utf8");
    const fn = Handlebars.compile(source);
    const content = fn(params).trim();

    if (content.toLowerCase().startsWith("<svg")) {
      const assetsDir = ensureAssetsDir();
      const filename = `component-${svgCounter}.svg`;
      const filePath = path.join(assetsDir, filename);
      fs.writeFileSync(filePath, content, "utf8");
      svgCounter += 1;
      return `![](${ASSETS_DIR}/${filename})`;
    }

    return content;
  }
);

fs.writeFileSync(OUTPUT, result, "utf8");
console.log(`Wrote ${OUTPUT}`);
if (svgCounter > 0) console.log(`Wrote ${svgCounter} SVG(s) to ${ASSETS_DIR}/`);
