# Context

Background on the team and the system. Written as an internal note.

## Team

- Two developers. There is no dedicated operations person.
- Deploys are manual today. Whoever is deploying tells the other person first.

## Users

- A handful of recruiters open the signals page every day.
- A short outage is acceptable. Wrong or missing data is not, because recruiters act on
  what they see.

## Environments and releases

- `main` is production. It should be deployable at all times.
- `staging` is the pre-production gate. Work goes to `staging` first, then is promoted
  to `main`.
- Recruiters often keep the page open in a tab for days. The previous version of the
  frontend may still be running in their browsers after a release, so the database must
  stay compatible with it during a release.
- When a release includes backend changes, the backend must be live before the frontend
  that depends on it.

## Data sources

- The page shows signals from a number of publishers (for example Private Equity
  International, Private Equity Wire UK, AltAssets and Guardian Business). The list of
  RSS feeds the team follows is in the repository.
- Some feeds occasionally change format or go down without notice.
- Firecrawl (optional extra): the RSS feeds do not cover everything the recruiters care
  about. Which sources to add and how to use Firecrawl for them is up to you.

## Budget and tools

- Free tiers only. No paid services.
- Cloudflare (Workers or Pages) for hosting and the scheduled job.
- Supabase (Postgres) for storage.

## History

- The scheduled collector was added late in the project.
- Feed items are small, so the team has not worried about storage so far.
- The collector keeps each raw feed entry next to the parsed signal on purpose, so
  parsing mistakes can be fixed later by re-processing without fetching the feed again.

## Out of scope

- Redesigning the UI.
- Switching databases or hosting providers.
- Adding user accounts or login.
