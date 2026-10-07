create table public.signals (
  id bigint generated always as identity primary key,
  source text not null,
  region text,
  title text not null,
  link text not null,
  summary text,
  published_at timestamptz,
  signal_type text,
  amount text,
  raw jsonb,
  created_at timestamptz not null default now()
);
