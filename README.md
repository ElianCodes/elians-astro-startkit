# Elian's Astro Startkit

An opinionated Astro starter with SolidJS islands, Tailwind CSS v4, Biome, TypeScript strict mode, and a minimal layout already wired up.

## Create a project

```sh
pnpm create astro@latest --template eliancodes/elians-astro-startkit
```

## What's included

- Astro 6
- SolidJS via `@astrojs/solid-js`
- Tailwind CSS v4 through the Vite plugin
- Sitemap generation via `@astrojs/sitemap`
- Biome for linting and formatting
- TypeScript strict config
- Import aliases for `@components/*` and `@layouts/*`
- A basic layout with header, footer, global styles, and system dark mode support

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

## Available scripts

| Command | What it does |
| :--- | :--- |
| `pnpm dev` | Start the local Astro dev server |
| `pnpm start` | Alias for `pnpm dev` |
| `pnpm build` | Run `astro check` and build the site |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI commands |
| `pnpm format` | Format the codebase with Biome |
| `pnpm lint` | Lint the codebase with Biome |
| `pnpm check` | Run Biome checks with autofix enabled |

## Project structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BaseFooter.astro
│   │   ├── BaseHead.astro
│   │   ├── BaseHeader.astro
│   │   └── Counter.tsx
│   ├── layouts/
│   │   ├── Default.astro
│   │   └── PageSupportingDarkmode.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   └── styles/
│       └── global.css
├── astro.config.ts
├── biome.json
├── package.json
└── tsconfig.json
```

## Notes

- `src/pages/index.astro` shows the default layout plus a small Solid counter island.
- `src/layouts/PageSupportingDarkmode.astro` toggles the `dark` class based on the user's system preference.
- `src/styles/global.css` imports Tailwind and sets the base light/dark body colors.
- `astro.config.ts` includes the site URL, Solid integration, sitemap integration, and Tailwind's Vite plugin.

## TypeScript paths

This starter includes a couple of path aliases:

- `@components/*` -> `src/components/*`
- `@layouts/*` -> `src/layouts/*`

## License

[MIT](./LICENSE)
