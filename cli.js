#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const PKG_NAME = "readme-kit";

function getPackageComponentsDir() {
  const pkgRoot = path.dirname(require.resolve(PKG_NAME + "/package.json"));
  return path.join(pkgRoot, "components");
}

function getBuildPath() {
  const pkgRoot = path.dirname(require.resolve(PKG_NAME + "/package.json"));
  return path.join(pkgRoot, "build.js");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function cmdInit() {
  const cwd = process.cwd();
  const componentsDir = path.join(cwd, "components");
  ensureDir(componentsDir);

  const buildSrc = getBuildPath();
  const buildDest = path.join(cwd, "build.js");
  if (!fs.existsSync(buildDest)) {
    fs.copyFileSync(buildSrc, buildDest);
    console.log("Created build.js");
  } else {
    console.log("build.js already exists, skipping");
  }

  const pkgPath = path.join(cwd, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkg.scripts = pkg.scripts || {};
    if (!pkg.scripts.build) {
      pkg.scripts.build = "node build.js";
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");
      console.log('Added "build": "node build.js" to package.json');
    }
    if (!pkg.dependencies?.handlebars || !pkg.dependencies?.["simple-icons"]) {
      console.log("Running: npm install handlebars simple-icons");
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
  const componentsDir = path.join(cwd, "components");
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
  init              Create components/ and build.js in current directory
  add <name>        Add a component (e.g. add pill-badge)
  list              List available components`);
  process.exit(cmd ? 1 : 0);
}
