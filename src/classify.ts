export type SignalType = "Fund Close / Raise" | "Deal" | "Hire" | "Expansion";

export function classify(title: string): SignalType {
  const t = title.toLowerCase();
  if (/(raises|closes|first close|final close|fundrais)/.test(t)) return "Fund Close / Raise";
  if (/(acquire|acquisition|buyout|stake|takeover|sells|exit)/.test(t)) return "Deal";
  if (/(hires|appoints|names|joins|promotes)/.test(t)) return "Hire";
  return "Expansion";
}

export function extractAmount(text: string): string | null {
  const m = text.match(/([$€£])\s?(\d+(?:\.\d+)?)\s?(bn|billion|m|million|b)\b/i);
  if (!m) return null;
  const unit = m[3].toLowerCase().startsWith("b") ? "B" : "M";
  return `${m[1]}${m[2]}${unit}`;
}
