export interface Feed {
  name: string;
  url: string;
  region: string;
}

export const FEEDS: Feed[] = [
  { name: "PEI", url: "https://www.privateequityinternational.com/feed/", region: "London" },
  { name: "PE Wire UK", url: "https://www.privateequitywire.co.uk/feed/", region: "London" },
  { name: "AltAssets", url: "https://www.altassets.net/feed", region: "London" },
  { name: "Guardian Business", url: "https://www.theguardian.com/uk/business/rss", region: "London" },
  { name: "Reuters UK Business", url: "https://feeds.reuters.com/reuters/UKBusinessNews", region: "London" },
  { name: "PE News", url: "https://www.penews.com/rss", region: "New York" },
  { name: "FT Private Equity", url: "https://www.ft.com/private-equity?format=rss", region: "London" },
  { name: "Real Deals", url: "https://realdeals.eu.com/feed/", region: "London" },
  { name: "Sifted", url: "https://sifted.eu/feed", region: "Europe" },
  { name: "EU-Startups", url: "https://www.eu-startups.com/feed/", region: "Europe" },
];
