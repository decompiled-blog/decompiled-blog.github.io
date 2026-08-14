# Decompiled

> Taking things apart to see how they work.

Personal technical blog built with [Astro](https://astro.build), deployed to GitHub Pages.

## Setup

```bash
npm install
npm run dev        # localhost:4321
npm run build      # builds to ./dist
```

## Writing a post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your post title"
description: "A short description shown in the post list."
date: 2025-02-01
tags: ["tag1", "tag2"]
readingTime: 8
---

Your content here. Supports:
- Markdown
- Code blocks with syntax highlighting
- LaTeX math: $E = mc^2$ or display math:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

That's it. The post will appear automatically in the blog list.

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to Settings → Pages → Source → **GitHub Actions**
3. Push to `main` - the workflow in `.github/workflows/deploy.yml` handles the rest

## Customising

| What | Where |
|------|-------|
| Colours / fonts | `src/styles/global.css` - edit the `:root` variables |
| Nav links | `src/layouts/Base.astro` |
| About page | `src/pages/about.astro` |
| Projects | `src/pages/projects.astro` |
| Site URL | `astro.config.mjs` - update `site` |
