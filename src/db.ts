export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
  ASSETS: Fetcher;
}

export interface SignalRow {
  publisher: string;
  region: string;
  title: string;
  link: string;
  summary: string;
  published_at: string | null;
  signal_type: string;
  amount: string | null;
  raw: unknown;
}

function headers(env: Env) {
  return {
    apikey: env.SUPABASE_SERVICE_KEY,
    Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
}

export async function insertRows(env: Env, rows: SignalRow[]) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/signals`, {
    method: "POST",
    headers: { ...headers(env), Prefer: "return=minimal" },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`insert failed: ${res.status}`);
}

export async function listSignals(env: Env) {
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/signals?select=*&order=published_at.desc`, {
    headers: headers(env),
  });
  if (!res.ok) throw new Error(`query failed: ${res.status}`);
  return res.json();
}
