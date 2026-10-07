import { collect } from "./collector";
import { listSignals, type Env } from "./db";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/items") {
      return json(await listSignals(env));
    }

    if (url.pathname === "/api/health") {
      return json({ status: "ok" });
    }

    if (url.pathname === "/api/collect") {
      const collected = await collect(env);
      return json({ collected });
    }

    return new Response("Not found", { status: 404 });
  },

  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(collect(env));
  },
};
