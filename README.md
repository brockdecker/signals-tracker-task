# Signals Tracker

Collects private-equity news from RSS feeds and shows it as a table of signals.

Read `BRIEF.md` first, then `CONTEXT.md`.

## Layout

- `src/` Cloudflare Worker: collector, API and scheduled handler
- `web/` React + Vite frontend, served by the same Worker
- `supabase/migrations/` database schema

## Run locally

```bash
npm install
npm --prefix web install
```

Create a Supabase project, apply the migrations in `supabase/migrations/`, then put your
project URL and key in `wrangler.toml`.

```bash
npm run build
npm run dev
```

Open the address `wrangler dev` prints. Visiting `/api/collect` fetches the feeds once.

For frontend work with hot reload, run `npm run dev` in one terminal and `npm run web` in
another, then open the Vite address.

## Deploy

```bash
npm run deploy
```
