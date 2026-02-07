#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const PKG_NAME = "readme-kit";

function getPackageComponentsDir() {
  const pkgRoot = path.dirname(require.resolve(PKG_NAME + "/package.json"));
  return path.join(pkgRoot, ".readme-kit", "components");
}

function getBuildPath() {
  const pkgRoot = path.dirname(require.resolve(PKG_NAME + "/package.json"));
  return path.join(pkgRoot, ".readme-kit", "build.js");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const README_KIT_DIR = ".readme-kit";

function cmdInit() {
  const cwd = process.cwd();
  const rootDir = path.join(cwd, README_KIT_DIR);
  const componentsDir = path.join(rootDir, "components");
  ensureDir(componentsDir);

  const buildSrc = getBuildPath();
  const buildDest = path.join(rootDir, "build.js");
  if (!fs.existsSync(buildDest)) {
    fs.copyFileSync(buildSrc, buildDest);
    console.log("Created .readme-kit/build.js");
  } else {
    console.log(".readme-kit/build.js already exists, skipping");
  }

  const pkgPath = path.join(cwd, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkg.scripts = pkg.scripts || {};
    const buildScript = `node ${README_KIT_DIR}/build.js`;
    if (pkg.scripts.build !== buildScript) {
      pkg.scripts.build = buildScript;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");
      console.log(`Set "build": "${buildScript}" in package.json`);
    }
    if (!pkg.dependencies?.handlebars || !pkg.dependencies?.["simple-icons"]) {
      console.log("Run: npm install handlebars simple-icons");
    }
  }

  console.log(`Init done. Add components with: ${PKG_NAME} add <name>`);
}

function cmdAdd(name) {
  if (!name) {
    console.error(`Usage: ${PKG_NAME} add <component-name>`);
    process.exit(1);
  }

  const sourceDir = getPackageComponentsDir();
  const sourceFile = path.join(sourceDir, `${name}.md`);
  if (!fs.existsSync(sourceFile)) {
    const list = fs
      .readdirSync(sourceDir)
      .map((f) => path.basename(f, ".md"))
      .join(", ");
    console.error(`Component "${name}" not found. Available: ${list}`);
    process.exit(1);
  }

  const cwd = process.cwd();
  const componentsDir = path.join(cwd, README_KIT_DIR, "components");
  ensureDir(componentsDir);
  const destFile = path.join(componentsDir, `${name}.md`);
  fs.copyFileSync(sourceFile, destFile);
  console.log(`Added component: ${name}`);
}

function cmdList() {
  const sourceDir = getPackageComponentsDir();
  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".md"));
  const names = files.map((f) => path.basename(f, ".md"));
  console.log("Available components:\n  " + names.join("\n  "));
}

const cmd = process.argv[2];
const arg = process.argv[3];

if (cmd === "init") cmdInit();
else if (cmd === "add") cmdAdd(arg);
else if (cmd === "list") cmdList();
else {
  console.log(`Usage: ${PKG_NAME} <command> [options]
        Commands:
          init              Create .readme-kit/ with components/ and build.js
          add <name>        Add a component into .readme-kit/components/
          list              List available components`);
}
