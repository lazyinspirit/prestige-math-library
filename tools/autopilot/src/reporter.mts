// Reporting: a status line on every meaningful event, a full report every N
// minutes whether or not anything happened.
//
// The heartbeat is not decoration. A long agent pipeline is mostly silence —
// six agents thinking for an hour produce no output at all — and silence is
// indistinguishable from a crash. The failure this prevents is the operator
// discovering four hours later that nothing has run since lunch. Reporting on
// a timer means "quiet" and "dead" look different, always.
//
// Two sinks, deliberately. `events.jsonl` is append-only machine-readable
// history, which is what a post-mortem needs; `status.md` is the current state
// overwritten in place, which is what a person glancing at the run needs. A
// single log serves neither well.
//
// What is NOT reported: rates. "41% of judgments were rejections" reads as a
// quality signal and is not one — on a previous build a 41% rejection rate
// yielded a 2.7% confirmed-fatal rate. Report what happened and what changed on
// disk; let the reader compute ratios if they want them.

import { appendFileSync, writeFileSync, mkdirSync } from 'node:fs';
import type { Snapshot } from './types.mts';
import { join } from 'node:path';

export class Reporter {
  dir: string; intervalMs: number; sink: (s: string) => void; now: () => number;
  lastReport = 0; eventsPath: string; statusPath: string;

  constructor({ dir, intervalMs = 20 * 60 * 1000, sink = console.log, now = () => Date.now() }: { dir: string; intervalMs?: number; sink?: (s: string) => void; now?: () => number }) {
    this.dir = dir;
    this.intervalMs = intervalMs;
    this.sink = sink;
    this.now = now;
    this.lastReport = 0;
    mkdirSync(dir, { recursive: true });
    this.eventsPath = join(dir, 'events.jsonl');
    this.statusPath = join(dir, 'status.md');
  }

  event(type: string, payload: Record<string, unknown> = {}): Record<string, unknown> {
    const row = { at: new Date(this.now()).toISOString(), type, ...payload };
    try { appendFileSync(this.eventsPath, JSON.stringify(row) + '\n'); } catch { /* logging must not kill a run */ }
    return row;
  }

  /** Emit an event AND surface it, for things a watching human should see now:
   *  a stage clearing, a lane dying, a gate failing, a blocker. */
  notify(type: string, message: string, payload: Record<string, unknown> = {}): void {
    this.event(type, { message, ...payload });
    this.sink(`[${type}] ${message}`);
  }

  due(): boolean { return this.now() - this.lastReport >= this.intervalMs; }

  /** The periodic report. Called on a timer and on demand; `force` is what the
   *  owner's `report` command uses so a status request never has to wait out
   *  the interval. */
  report(snapshot: Snapshot, { force = false }: { force?: boolean } = {}): boolean {
    if (!force && !this.due()) return false;
    this.lastReport = this.now();
    const text = renderStatus(snapshot, new Date(this.lastReport).toISOString());
    try { writeFileSync(this.statusPath, text); } catch { /* best effort */ }
    this.event('report', { stage: snapshot.stage?.id ?? null, running: snapshot.running?.length ?? 0 });
    this.sink(text);
    return true;
  }
}

export function renderStatus(s: Snapshot, at: string): string {
  const L = [];
  L.push(`# ${s.run} — ${s.done ? 'COMPLETE' : s.paused ? 'PAUSED' : 'running'}`);
  L.push('');
  L.push(`updated ${at}`);
  if (s.startedAt) L.push(`started ${s.startedAt}${s.elapsed ? ` · elapsed ${s.elapsed}` : ''}`);
  L.push('');

  L.push('## Stages');
  L.push('');
  for (const st of s.stages ?? []) {
    const mark = st.done ? '[x]' : st.current ? '[>]' : '[ ]';
    L.push(`${mark} ${String(st.id).padEnd(18)} ${st.why ?? ''}`);
  }
  L.push('');

  if (s.running?.length) {
    L.push('## In flight');
    L.push('');
    for (const r of s.running) {
      L.push(`- ${r.label}${r.covers?.length ? ` (covers ${r.covers.join(', ')})` : ''}${r.elapsed ? ` — ${r.elapsed}` : ''}${r.attempt > 1 ? ` — attempt ${r.attempt}` : ''}${r.external ? ' — running (observed)' : ''}`);
    }
    L.push('');
  } else if (!s.done) {
    L.push('## In flight');
    L.push('');
    L.push('- nothing running');
    L.push('');
  }

  if (s.blockers?.length) {
    L.push('## Blockers');
    L.push('');
    for (const b of s.blockers) L.push(`- **${b.stage}** — ${b.message} _(${b.at})_`);
    L.push('');
  }

  L.push('## Intervene');
  L.push('');
  L.push('```');
  L.push(`echo '{"command":"pause"}'  > ${s.controlPath ?? '.autopilot/control.json'}`);
  L.push(`echo '{"command":"resume"}' > ${s.controlPath ?? '.autopilot/control.json'}`);
  L.push('```');
  return L.join('\n') + '\n';
}

export function humanDuration(ms: number): string {
  if (!Number.isFinite(ms) || ms < 0) return '';
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h ? `${h}h${String(m).padStart(2, '0')}m` : `${m}m`;
}
