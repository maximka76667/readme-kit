# readme-kit

Component-based READMEs—like shadcn, but for your README. Install components from the CLI, write a template, run build. Output works on GitHub (SVGs as images).

## Install

```sh
npm install readme-kit --SD
```

In your repo (e.g. your GitHub profile repo):

```sh
# Creates .readme-kit folder in your project
npx readme-kit init

# Adds component
npx readme-kit add <component-name>
```

The idea is that you can create your own components in .readme-kit/components and they will work with your setup, you just have to refer to them as file's name.
Also you can modify preinstalled components

```sh
# To build README.md use:
npm run build
```

## How it works

Important: you have to create README.template.md and basically the package designed to modify only this file and do not touch README.md itself.

- Placeholders like `<!-- component name key=value -->` are replaced at build time.
- Components are Handlebars templates; SVG output is written to readme-assets/ and inlined as ![](readme-assets/component-N.svg) so GitHub renders them.
- Icons come from the simple-icons package (installed with the project).

<!-- component icon-badge label=TypeScript icon=typescript href="https://www.typescriptlang.org" -->

<!-- component icon-badge label="JavaScript" icon=javascript variant=gradient -->

<!-- component tag-badge label="Open Source" width=100 -->

<!-- component tag-badge label="Open Source" icon=typescript width=100 variant=gradient -->

<!-- component title label="Technologies" width=250 -->

<!-- component title label="Technologies" width=250 color="#f59e0b" -->

<!-- component title label="Technologies" width=250 variant=gradient -->

<!-- component subtitle label="Technologies" width=250 -->

<!-- component subtitle label="Technologies" width=250 color="#f59e0b" -->

<!-- component subtitle label="You & me" width=250 color="#f59e0b" -->

<!-- component split-badge prefix="Email" label="maximgriven@gmail.com" width=220 splitPos=70 prefixX=35 labelX=145 color="#ef4444" -->
<!-- component split-badge prefix="LinkedIn" label="@maximgriven" width=180 splitPos=85 prefixX=42 labelX=132 color="#0a66c2" -->
