# AGENTS.md — nextjs-contentlayer-template

A content-driven starter — **Next.js 14** (App Router) on **React 18** with
**Contentlayer2** (MDX), **Tailwind CSS 3**, and `next-themes` dark mode. Deployed
to **Netlify**.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build (Contentlayer runs via the Next plugin) |
| `npm run build:content` | Rebuild Contentlayer output only |
| `npm start` | Serve the production build |
| `npm run preview` | `build` then `start` |
| `npm run lint` / `lint:fix` | ESLint verify / autofix |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format:check` / `format:write` | Prettier verify / autofix |

## Content — Contentlayer2

- Source lives in **`content/`**; document types are defined in
  `contentlayer.config.js` — `Posts` (`content/posts/**/*.mdx`, requires `title` +
  `date`) and `Pages` (`content/pages/**/*.mdx`, requires `title`). Both expose
  computed `slug` / `slugAsParams`.
- **Import entries from the generated `contentlayer/generated` alias**, not the
  MDX files directly. A schema change means editing `contentlayer.config.js` and
  rebuilding (`build:content`, or a full `build`).
- Uses **`contentlayer2`** / **`next-contentlayer2`** (the maintained fork) — keep
  both on matching versions; don't swap back to the unmaintained originals.

## App

- App Router under **`app/`** — `layout.tsx`, `page.tsx`, `posts/`, and a
  `[...slug]/` catch-all that renders MDX pages by `slugAsParams`.
- **Dark mode** is `next-themes` (class strategy). Icons are **Lucide**.

## Conventions

- **TypeScript** — derive from Contentlayer's generated types; don't hand-write
  content types.
- **Formatting/lint is ESLint + Prettier** (flat config in `eslint.config.mjs`,
  `prettier.config.mjs`). Prettier sorts **imports**
  (`@ianvs/prettier-plugin-sort-imports`) and **Tailwind classes**
  (`prettier-plugin-tailwindcss`) — run `format:write` before committing.
- **Node 24** (`engines.node`).
- **Netlify deploy** (`netlify.toml`) — runs `@netlify/plugin-nextjs` (Netlify
  auto-installs it), publishes `.next`, `NODE_VERSION = 24`. Vercel Analytics was
  removed in the migration — don't reintroduce `@vercel/analytics`.

## Commits

**Commit messages are entirely lowercase** — including proper nouns and after
the `type:` prefix. Write `docs: update readme`, not `docs: update README`. Keep
the `type: summary` shape (`ci:`, `chore:`, `fix:`, …); only the casing rule is
added.

**Keep messages minimal** — a single `type: summary` line, imperative and to the
point. No body, footer, or trailing period unless the change genuinely needs
explaining.
