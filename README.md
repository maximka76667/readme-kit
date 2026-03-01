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

[![](.readme-kit/assets/component-0.svg)](https://www.typescriptlang.org)

![](.readme-kit/assets/component-1.svg)

![](.readme-kit/assets/component-2.svg)

![](.readme-kit/assets/component-3.svg)

![](.readme-kit/assets/component-4.svg)

![](.readme-kit/assets/component-5.svg)

![](.readme-kit/assets/component-6.svg)

![](.readme-kit/assets/component-7.svg)

![](.readme-kit/assets/component-8.svg)

![](.readme-kit/assets/component-9.svg)

![](.readme-kit/assets/component-10.svg)
![](.readme-kit/assets/component-11.svg)
