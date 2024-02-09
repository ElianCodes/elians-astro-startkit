# Astro Starter Kit: Elian Edition

An Astro starter kit with all Elian's opinions pre-installed; Sorry not sorry 🤷‍♂️

```sh
pnpm create astro@latest --template eliancodes/elians-astro-startkit
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── assets/
│   └── components/
│   │   └── BaseFooter.astro
│   │   └── BaseHead.astro
│   │   └── BaseHeader.astro
│   └── layouts/
│   │   └── Default.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro or UI components, same for `src/layouts` and `src/assets`.

Any static assets, like images, can be placed in the `public/` directory.

Even though I'll probably use a Content Collection in any website I build or design, I decided to not include it here, since it might bring a bit too much overhead.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`    | Get help using the Astro CLI                     |
| `pnpm format`          | Checks and applies formatting to `./src/`        |
| `pnpm lint`            | Lints and checks all files in `./src/`           |
| `pnpm check`           | Both lints and formats files in `./src/`         |

## 👀 Want to learn more about Astro?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

Have any questions about this stack / starter kit in perticular? Feel free to open a discussion on GitHub here.

## What's included?

### Astro

duh..

### UnoCSS

UnoCSS is an instant atomic CSS engine built by Antfu, I chose this over Tailwind, since it offers familiar syntax (Tailwind style), but adds a few options extra that I like to use, like icons.

[Read more about UnoCSS here](https://unocss.dev/)

### SolidJS

SolidJS, an amazing UI library with familiar syntax to React, but with some improvements, like signals.

[Read more about Solid here](https://www.solidjs.com/)

<small>sidenote: I did __not__ include [Nanostores](https://github.com/nanostores/nanostores) in this starter kit, since I don't typically need state management, but know that it's an easy add-on, in case you need it.</small>

### Biome

I use Biome for linting and formatting. It removes quite a bit of complication in setting up linting and formatting. Although that it doesn't support `.html` and `.css` (and thus supersets like `.astro`), I believe in the project and am very excited about it's future.

Make sure to also set it as the default formatter for this project in your IDE, or run the `lint` and `format` commands regularly

[Read more about Biome here](https://biomejs.dev/)

### TypeScript

While I totally respect people not using TypeScript, I do. So I included it here, applying the `strict` config settings that Astro offers.

#### `tsconfig.json`

I typically set up my `tsconfig.json` file with some default paths, so I also did that here.

- `@components/Counter` will refer to `src/components/Counter.tsx`
- `@layouts/Layout.astro` refers to `src/layouts/Layout.astro`

You get the point.

### Remote development

While most people (including me), tend to use their local machines for development, not everyone does, or is able to. I know that this starter kit is opinionated, but that doesn't have to mean to not be inclusive.

## TODO

- Make nightly open PR instead of commit

