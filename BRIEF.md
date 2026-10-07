# Signals Tracker: Production Readiness Task

## The situation

You've joined a small team that runs a signals tracker for recruiters. It watches
news feeds for events such as fund closes, new funds, senior hires and acquisitions,
and shows them on a simple page. It was built quickly and vibecoded. It works on one
laptop locally, and the team wants it online so everyone can use it.

Your job is to make it production-ready and put it online.

## Time

There is no time limit. It might take you about 2 hours, depending on your experience.

## Core task

1. Read the code and decide what matters most.
2. Fix the issues you think are most important. Add tests where they help.
3. Set up CI (GitHub Actions or similar).
4. Deploy it on free tiers (Cloudflare and Supabase) in your own accounts.
5. Send us the repository link and the live URL.

You decide what to fix and in what order. You do not need to fix everything, and
not everything that looks odd is a problem.

## Optional: write-ups

If you want to explain your thinking, you can add:

- `REVIEW.md`: what you found, ranked by importance, what you fixed, what you left and why.
- `DEPLOY.md`: how you deployed, in what order, and how you would roll back.

These are optional. If you skip them, add 3-5 sentences to your submission email saying
what you found and what you think.

## Optional extra (1-2 hours)

Only attempt this if the core task is done.

Connect Firecrawl using your own free account and its API (500 free credits) and add
signals that RSS cannot cover (for example a fund's press-release page). Try to increase
coverage without losing too much accuracy. Show the new signals on the page, tagged by
type and without duplicates of items already coming from RSS. It is up to you which
Firecrawl features to use (search, scrape, crawl, extract) and which sources to add. Tell
us why you chose them.

## Ground rules

- **AI tools are welcome.** Tell us which ones you used and what for.
- Work through **branches and pull requests**. Please do not rewrite history or
  force-push. Build a proper deploy pipeline.
- Give each pull request a short description: what changed, why, and how you checked it.
- Use your own accounts for Cloudflare, Supabase and Firecrawl, or create new ones on the
  free plans. Everything must run on free tiers. Do not commit keys or passwords, and do not
  send us any credentials.
- Please do not share this task or your solution with anyone else.

## What we look at

The live URL, your repository and its commit history, your pull requests, and any
write-ups you include.

## How to submit

Reply to the email this task was sent from by `18.10.2026`. Earlier submissions will be
reviewed first.

Create your own **private** GitHub repository from this folder and add `brockdecker` as a
collaborator, so only we can read it. Please keep it private, even after you submit. Keep
your live URL running for at least 14 days after submitting. Free Supabase projects pause
when idle, so please check it is awake when you submit.

## Your data

We keep your name, email and submission only to evaluate your application. We delete them
after the hiring decision, or earlier if you ask us to.
