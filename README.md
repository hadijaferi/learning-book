# Frontend Learning Book

A Persian-first, static Next.js learning book about React rendering, engineering fundamentals and senior-level interviews.

## Stack

- Next.js App Router + React + TypeScript
- Static export to GitHub Pages (no server runtime)
- Zero runtime UI dependencies
- Existing educational HTML preserved under `src/content/chapters.ts`; new pages use React components

## Run locally

```bash
npm ci
npm run dev
```

Visit http://localhost:3000/frontend-learning-book/ .

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

The GitHub Actions workflow builds `out/` on pushes to `main`. In **Settings → Pages**, change **Source** from **Deploy from a branch** to **GitHub Actions** after merging the feature branch. URL remains https://hadijaferi.github.io/frontend-learning-book/ .

## Migration note

The legacy root `index.html` stays in place while the new app is reviewed. Section bodies are currently trusted static HTML from the existing book so the full technical content remains intact. Convert sections to accessible JSX/MDX components gradually, without introducing untrusted HTML. Do not connect user-generated content to `dangerouslySetInnerHTML`.
