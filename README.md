# TextMaster

TextMaster is a modern React + TypeScript single-page app for quick, privacy-first text editing and transformation. It ships with a polished UI, accessibility-minded controls, and a growing toolbelt of text utilities.

Live: `https://text.yaqoobahmed.com`  •  Author: `https://dev.yaqoobahmed.com`

## Features
- Fast, client-side text transformations (no server):
  - Case: UPPERCASE, lowercase, Title Case, Sentence case, toggle case
  - Whitespace: normalize spaces, trim lines, remove empty lines
  - Lines: dedupe, sort A→Z / Z→A
  - Text tools: reverse, remove punctuation, slugify, camelCase, snake_case
  - Clipboard: copy, paste (with browser permission)
  - Download text as a file
- Stats: words, characters, lines, sentences, estimated reading time, “Top words” histogram
- Dark/light theme toggle
- SEO-ready head tags and JSON‑LD; PWA manifest (maskable icons)
- Clean component API and readable utilities in `src/utils/text.ts`

## Tech stack
- React 18, TypeScript (strict)
- Vite + SWC
- ESLint + Prettier
- Vitest + Testing Library, Playwright (E2E)
- Storybook 8 (Vite)
- GitHub Actions (CI)
- Netlify (deploy + SPA redirects)

## Getting started
```bash
npm i
npm run dev
# open http://localhost:5173
```

Build and preview production output:
```bash
npm run build
npm run preview
```

## Scripts
- `dev` – Vite dev server
- `build` – production build via Vite
- `preview` – preview built app
- `lint` – ESLint
- `typecheck` – TypeScript project check
- `test` – unit tests with Vitest
- `test:ui` – watch mode test runner
- `e2e` – Playwright end-to-end tests
- `storybook` – run Storybook
- `build-storybook` – build Storybook static site

## Project structure
```
TextMaster/
  src/
    App.tsx
    main.tsx
    styles.css
    utils/
      text.ts          # all text utility functions
  .storybook/          # Storybook config
  tests/               # Playwright specs
  vite.config.ts
  vitest.config.ts
```

## Testing
- Unit tests (Vitest + Testing Library)
  - Run: `npm run test`
- E2E tests (Playwright)
  - Run: `npm run e2e` (requires the preview server to be available; CI handles this automatically)

## Storybook
```bash
npm run storybook
```
Use Storybook to develop and document components in isolation. The config is set up for Vite.

## CI/CD
GitHub Actions workflow runs on PRs and pushes to `main`:
- Lint, typecheck, unit tests (with coverage), and build.

## Deployment (Netlify)
Netlify configuration lives in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* -> /index.html 200`

If deploying manually, ensure `public/_redirects` exists with:
```
/*    /index.html   200
```

## SEO
- Canonical URL: `https://text.yaqoobahmed.com/`
- Open Graph + Twitter card tags
- JSON‑LD `WebApplication` schema with author info
- PWA `manifest.json` with maskable icons and theme color

## Accessibility
- Keyboard focusable controls and visible focus styles
- Buttons are disabled when actions are not applicable
- `aria-live` on stats for gentle updates

## Security & privacy
- All processing is client-side; no text is uploaded
- External resources minimized (bundled app; no third-party trackers)

## Local development notes
- Node 20 recommended (`.nvmrc` provided)
- Absolute imports can be enabled via TS path mapping if you expand the codebase

## Credits
Developed with ❤️ by [Yaqoob Ahmed](https://dev.yaqoobahmed.com).

---

If you have suggestions or find issues, feel free to open an issue or a PR.