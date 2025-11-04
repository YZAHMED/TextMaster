# TextMaster

Modern React + TypeScript app for quick text editing and transformation.

## Tech
- Vite, React 18, TypeScript (strict)
- ESLint + Prettier
- Vitest + Testing Library; Playwright E2E
- Storybook for components
- GitHub Actions CI

## Quick start
```bash
npm i
npm run dev
```

## Scripts
- `dev`: start Vite dev server
- `build`: typecheck and build
- `preview`: preview production build
- `lint`: ESLint
- `test`: unit tests (Vitest)
- `e2e`: Playwright tests
- `storybook`: Storybook dev

## Folder structure
```
src/
  App.tsx
  main.tsx
  styles.css
```

## Notes
- Dark/light theme toggle
- Accessible controls and focus-friendly styles
- PWA manifest included