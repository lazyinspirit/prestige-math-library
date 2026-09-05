// Persist counters, never transcript content, before the isolated home is removed.
import { createReadStream, readdirSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { join } from 'node:path';

export function findRollout(home, sessionId) {
  if (!home || !sessionId) return null;
  const pending = [join(home, 'sessions')];
  while (pending.length) {
    let entries;
    const dir = pending.pop();
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) pending.push(path);
      else if (entry.name.endsWith(`-${sessionId}.jsonl`)) return path;
    }
  }
  return null;
}

export async function readDispatchUsage(path, startedAt) {
  const unavailable = { available: false, reason: 'no token events retained' };
  if (!path) return { ...unavailable, reason: 'session rollout unavailable' };
  const fields = ['input_tokens', 'cached_input_tokens', 'output_tokens'];
  const usage = {
    available: true, scope: 'dispatch', source: 'rollout-token-events',
    input_tokens: 0, cached_input_tokens: 0, output_tokens: 0,
    observed_requests: 0, max_request_input_tokens: null,
    requests_over_272k: 0, compactions: 0,
  };
  let previous = null;
  let seen = false;
  try {
    const lines = createInterface({ input: createReadStream(path), crlfDelay: Infinity });
    for await (const line of lines) {
      let row;
      try { row = JSON.parse(line); } catch { continue; }
      const currentDispatch = Date.parse(row.timestamp) >= Date.parse(startedAt);
      if (row.type === 'compacted' && currentDispatch) usage.compactions++;
      if (row.type !== 'event_msg' || row.payload?.type !== 'token_count') continue;
      const info = row.payload.info;
      const total = info?.total_token_usage;
      if (!total || !fields.every((key) => Number.isFinite(total[key]))) continue;
      // Codex repeats the last token event when only rate limits change.
      const changed = !previous || fields.some((key) => total[key] !== previous[key]);
      if (currentDispatch && changed) {
        seen = true;
        for (const key of fields) {
          usage[key] += Math.max(0, total[key] - (previous?.[key] ?? 0));
        }
        const input = info.last_token_usage?.input_tokens;
        if (Number.isFinite(input)) {
          usage.observed_requests++;
          usage.max_request_input_tokens = Math.max(usage.max_request_input_tokens ?? 0, input);
          if (input > 272_000) usage.requests_over_272k++;
        }
      }
      // Reading pre-dispatch events establishes a baseline for resumed sessions.
      previous = total;
    }
  } catch {
    return { ...unavailable, reason: 'session rollout unreadable' };
  }
  return seen ? usage : { ...unavailable, compactions: usage.compactions };
}
