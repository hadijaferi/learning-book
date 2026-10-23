# Learning Book

A Persian-first software engineering learning resource covering React, Go, AI, and other topics over time.

## Stack

- Next.js App Router, React, and TypeScript for the website
- Static export to GitHub Pages (no server runtime)
- Educational content in `src/content/chapters.ts`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/learning-book/.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Pushes to `main` trigger the GitHub Actions Pages workflow, which builds and deploys `out/`.

Site: https://hadijaferi.github.io/learning-book/

The current content starts with React rendering, with room for Go, AI, and future engineering subjects.

## Content safety

Existing chapter markup is trusted static content. Migrate to JSX/MDX gradually; do not pass untrusted user content to `dangerouslySetInnerHTML`.
