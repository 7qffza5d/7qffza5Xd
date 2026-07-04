# Personal site

Built with Astro. Homepage is a unified feed mixing essays and project
updates; essays are split by topic (CS, Linguistics, Personal Projects,
Other); Projects is case-study style; Notebook is a stub for whatever
you add later (reading log, notes, etc.).

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------- |
| `npm install`        | Install dependencies                        |
| `npm run dev`         | Start local dev server at `localhost:4321`  |
| `npm run build`       | Build production site to `./dist/`          |
| `npm run preview`     | Preview the build locally before deploying  |

## Adding content

- New essay: add a `.md` file to `src/content/essays/` with frontmatter
  (`title`, `date`, `topic`, `description`). `topic` must be one of
  `cs`, `linguistics`, `personal-projects`, `other`.
- New project: add a `.md` file to `src/content/projects/` with
  frontmatter (`title`, `date`, `description`, `tags`, optional
  `liveUrl`/`sourceUrl`, `status`).

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Astro, no config needed.
3. Every push to `main` redeploys automatically.

## Design notes

Palette, type, and the "gloss tag" signature element (the two-line
category labels styled after linguistic interlinear glossing) are all
defined in `src/styles/global.css`. Swap the placeholder site name in
`src/layouts/Base.astro` (`.wordmark`) whenever you land on one.
