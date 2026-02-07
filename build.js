const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const TEMPLATE = 'README.template.md';
const OUTPUT = 'README.md';
const COMPONENTS_DIR = path.join(__dirname, 'components');

const template = fs.readFileSync(TEMPLATE, 'utf8');

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
      const source = fs.readFileSync(componentPath, 'utf8');
      const fn = Handlebars.compile(source);
      return fn(params).trim();
    }
  );

fs.writeFileSync(OUTPUT, result, 'utf8');
console.log(`Wrote ${OUTPUT}`);