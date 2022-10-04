# Blog

Just a repo for blog.

## :memo: Commit Emoji Convention

| Emoji         | Code            | Note                 |
| ------------- | --------------- | -------------------- |
| :tada:        | `:tada:`        | initial commit       |
| :new:         | `:new:`         | new post(s)          |
| :bug:         | `:bug:`         | fix bug(s) of blog   |
| :pencil2:     | `:pencil2:`     | modify post(s)       |
| :green_heart: | `:green_heart:` | fix CI problem(s)    |
| :hammer:      | `:hammer:`      | refactor(s)          |
| :lipstick:    | `:lipstick:`    | UI related update(s) |
| :memo:        | `:memo:`        | modify readme        |
| :arrow_up:    | `:arrow_up:`    | update dependencies  |

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
|:---------------------- |:------------------------------------------------ |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
