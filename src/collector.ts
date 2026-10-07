import { FEEDS, type Feed } from "./feeds";
import { parseFeed, type Entry } from "./parse";
import { classify, extractAmount } from "./classify";
import { insertRows, type Env, type SignalRow } from "./db";

function toRow(feed: Feed, entry: Entry): SignalRow {
  return {
    publisher: feed.name,
    region: feed.region,
    title: entry.title,
    link: entry.link,
    summary: entry.summary,
    published_at: entry.published ? new Date(entry.published).toISOString() : null,
    signal_type: classify(entry.title),
    amount: extractAmount(`${entry.title} ${entry.summary}`),
    raw: entry.raw,
  };
}

export async function collect(env: Env): Promise<number> {
  let total = 0;
  for (const feed of FEEDS) {
    const res = await fetch(feed.url, { headers: { "User-Agent": "signals-bot/1.0" } });
    const xml = await res.text();
    const rows = parseFeed(xml).map((entry) => toRow(feed, entry));
    await insertRows(env, rows);
    total += rows.length;
  }
  return total;
}
