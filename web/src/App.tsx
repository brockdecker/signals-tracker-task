import { useEffect, useState } from "react";

interface Signal {
  id: number;
  publisher: string;
  region: string | null;
  title: string;
  link: string;
  summary: string | null;
  published_at: string | null;
  signal_type: string | null;
  amount: string | null;
}

function formatDate(value: string | null) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function App() {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => {
        setSignals(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="page">
      <header className="header">
        <h1>Signals</h1>
        <p>{signals.length} signals</p>
      </header>

      {loading ? (
        <p className="empty">Loading...</p>
      ) : signals.length === 0 ? (
        <p className="empty">No signals yet.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Headline / Detail</th>
                <th>Region</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {signals.map((s) => (
                <tr key={s.id}>
                  <td className="mono">{formatDate(s.published_at)}</td>
                  <td>
                    <span className="pill">{s.signal_type ?? "Expansion"}</span>
                  </td>
                  <td className="amount">{s.amount ?? "-"}</td>
                  <td>
                    <div className="headline">{s.title}</div>
                    <div
                      className="detail"
                      dangerouslySetInnerHTML={{ __html: s.summary ?? "" }}
                    />
                  </td>
                  <td className="mono upper">{s.region}</td>
                  <td>
                    <a href={s.link} target="_blank">
                      {s.publisher}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
