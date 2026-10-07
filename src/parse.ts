import { XMLParser } from "fast-xml-parser";

export interface Entry {
  title: string;
  link: string;
  summary: string;
  published: string | undefined;
  raw: unknown;
}

const parser = new XMLParser({ ignoreAttributes: false });

function text(value: any): string {
  if (typeof value === "string") return value;
  return value?.["#text"] ?? "";
}

export function parseFeed(xml: string): Entry[] {
  const doc = parser.parse(xml);
  const items = doc?.rss?.channel?.item ?? doc?.feed?.entry ?? [];
  const list = Array.isArray(items) ? items : [items];

  return list.map((item: any) => ({
    title: text(item.title).trim(),
    link: typeof item.link === "string" ? item.link : item.link?.["@_href"] ?? text(item.guid),
    summary: text(item.description ?? item.summary ?? item["content:encoded"]),
    published: item.pubDate ?? item.published ?? item.updated,
    raw: item,
  }));
}
