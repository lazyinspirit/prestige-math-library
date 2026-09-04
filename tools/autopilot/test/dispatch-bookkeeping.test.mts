// Dispatch bookkeeping, and the reporter that must never take the run down.
//
// WHY. The live frontier-14 state.json carries 18 dispatch records reading
// `attempt: 2, attempts: 0, endedAt: null, lastExitOk: null`, and the question
// was whether the CURRENT code can produce that or whether it is legacy from
// the old external engine.
//
// It can, and here is the mechanism. `attempts` is the retry-policy counter and
// `attempt` was a second copy of the same number computed by the caller. The
// owner's `retry` command resets `attempts` to 0 to re-arm a lane and never
// touched `attempt`, so the record disagreed with itself and the next dispatch
// announced "attempt 1" of what was really a third try. Both fields are now
// stamped from the one value `recordDispatchStart` computes, and `retry` resets
// both.
//
// `endedAt: null, lastExitOk: null` is a DIFFERENT thing and is not a bug: it
// means the engine process died while that dispatch was in flight, so nothing
// was alive to write the ending. A process that no longer exists cannot stamp
// its own record. It is harmless — nothing reads `endedAt`, `null` is the
// honest value for "unknown", and completion is recomputed from the repo's
// artifacts, which the state file explicitly is not the authority for. What the
// tests below pin is that no path through a LIVE engine leaves it that way.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, chmodSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
import { writeCommand } from '../src/control.mts';

const NO_GATES = 'fixture stage: the test assertions are the check';
const PASSING_GATE = { id: 'fixture-ok', argv: ['node', '-e', 'console.log("checked 1 thing")'] };

function fixture({ failUnits = [] as string[] } = {}) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-book-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir, { recursive: true });
  const agent = join(repo, 'fake-agent.mjs');
  writeFileSync(agent, `
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
const a = process.argv.slice(2);
const get = (n) => { const i = a.indexOf('--' + n); return i >= 0 ? a[i+1] : null; };
const label = get('label'), covers = (get('covers') || '').split(',').filter(Boolean);
const fail = ${JSON.stringify(failUnits)}.some((u) => covers.includes(String(u)));
writeFileSync(join('${dispatchDir}', get('role') + '-' + label + '.result.json'),
  JSON.stringify({ role: get('role'), label, run: get('run'), covers, ok: !fail }));
process.exit(fail ? 1 : 0);
`);
  return { repo, dispatchDir, agent };
}

const stages = () => [
  {
    id: 's1', label: 'first', units: () => ['1', '2'], pattern: /^worker-/,
    labelFor: (u: string) => `u${u}`, concurrency: 2,
    plan: (_ctx: any, pending: string[]) =>
      pending.map((u) => ({ role: 'worker', label: `u${u}`, job: 'authoring', covers: [u] })),
    gatesWaived: NO_GATES,
  },
  {
    id: 's2', label: 'second', units: () => ['all'], pattern: /^finisher-/, concurrency: 1,
    plan: () => [{ role: 'finisher', label: 'final', job: 'audit', covers: ['all'] }],
    gates: () => [PASSING_GATE],
  },
];

function makeExecutor(fx: any, extra: any = {}) {
  const stateDir = join(fx.repo, '.autopilot');
  const config: any = {
    run: 'testrun', repo: fx.repo, stateDir, dispatchDir: fx.dispatchDir,
    argv: ['true'], concurrency: 2, maxAttempts: 2, coversMap: {}, dispatchStaggerMs: 0, ...extra,
  };
  const state = new State(statePath(stateDir)).init('testrun');
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const adapter = makeExecAdapter({
    argv: ['node', fx.agent, '--role', '{role}', '--label', '{label}',
      '--run', '{run}', '--covers', '{covers}'],
    cwd: fx.repo,
  });
  return new Executor({ config, stages: stages(), adapter, state, reporter });
}

const settle = async (ex: any, n = 12) => {
  for (let i = 0; i < n; i += 1) {
    const r = await ex.tick();
    if (r === 'done' || r === 'blocked' || r === 'stopped') return r;
    await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
  }
  return 'working';
};

// ------------------------------------------------ recordDispatchEnd always stamps

test('every dispatch a live engine finishes carries endedAt and lastExitOk', async () => {
  const fx = fixture({ failUnits: ['2'] });   // one succeeds, one fails twice
  const ex = makeExecutor(fx);
  await settle(ex);
  const records = Object.entries<any>(ex.state.data.dispatches);
  assert.ok(records.length >= 2, 'the fixture must actually dispatch');
  for (const [key, d] of records) {
    assert.ok(d.endedAt, `${key}: endedAt was never stamped`);
    assert.equal(typeof d.lastExitOk, 'boolean', `${key}: lastExitOk left null on a finished dispatch`);
  }
  const ok = records.find(([k]) => k.includes('u1'))![1];
  const bad = records.find(([k]) => k.includes('u2'))![1];
  assert.equal(ok.lastExitOk, true);
  assert.equal(bad.lastExitOk, false, 'the failure path must stamp too, not only the success path');
});

test('a dispatch whose adapter THROWS still records an end', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx);
  // an adapter that rejects is the `.catch` branch of the executor's promise
  (ex as any).adapter = { invoke: async () => { throw new Error('adapter exploded'); } };
  await settle(ex, 3);
  const records = Object.values<any>(ex.state.data.dispatches);
  assert.ok(records.length, 'nothing was dispatched');
  for (const d of records) {
    assert.ok(d.endedAt, 'a thrown dispatch left endedAt null');
    assert.equal(d.lastExitOk, false);
  }
});

// ---------------------------------------------------- attempt vs attempts

test('attempt and attempts are one number, stamped together', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-state-'));
  const st = new State(statePath(dir)).init('r');
  const first = st.recordDispatchStart('k', { stage: 's', role: 'w', label: 'l', covers: ['1'] } as any);
  assert.equal(first.attempts, 1);
  assert.equal(first.attempt, 1);
  const second = st.recordDispatchStart('k', { stage: 's', role: 'w', label: 'l', covers: ['1'] } as any);
  assert.equal(second.attempts, 2);
  assert.equal(second.attempt, 2);
  // a caller cannot override the counter with a stale meta field
  const third = st.recordDispatchStart('k',
    { stage: 's', role: 'w', label: 'l', covers: ['1'], attempt: 99 } as any);
  assert.equal(third.attempt, 3, 'meta must not be able to contradict the counter');
  assert.equal(third.attempts, 3);
});

test('a real dispatch records attempt == attempts on every try', async () => {
  const fx = fixture({ failUnits: ['2'] });
  const ex = makeExecutor(fx);
  await settle(ex);
  for (const [key, d] of Object.entries<any>(ex.state.data.dispatches)) {
    assert.equal(d.attempt, d.attempts, `${key}: attempt ${d.attempt} != attempts ${d.attempts}`);
  }
  const bad = Object.entries<any>(ex.state.data.dispatches).find(([k]) => k.includes('u2'))![1];
  assert.equal(bad.attempts, 2, 'maxAttempts=2 means two recorded attempts');
});

test('the owner retry command re-arms both fields, so the record cannot disagree', async () => {
  const fx = fixture({ failUnits: ['2'] });
  const ex = makeExecutor(fx);
  await settle(ex);
  const failed = Object.entries<any>(ex.state.data.dispatches).find(([k]) => k.includes('u2'))!;
  assert.equal(failed[1].attempts, 2, 'the fixture must leave a lane with a real attempt history');

  // handleControl(), NOT tick(). tick() applies the command and then immediately
  // re-dispatches, and that re-dispatch rewrites both fields — so a test that
  // ticks cannot see the state the command left behind, and passes against the
  // unfixed code. This is the exact state the live frontier-14 file is frozen in:
  // the engine stopped between the retry and the next dispatch.
  writeCommand(join(fx.repo, '.autopilot'), 'retry');
  ex.handleControl();

  for (const [key, d] of Object.entries<any>(ex.state.data.dispatches)) {
    assert.equal(d.attempt, d.attempts,
      `${key}: retry left attempt ${d.attempt} against attempts ${d.attempts} — `
      + 'this is exactly the frontier-14 anomaly');
  }
  assert.equal(ex.state.data.dispatches[failed[0]].attempts, 0, 'the lane must actually be re-armed');
});

test('retry reports an unfinished lane as unfinished, not as failed', () => {
  const fx = fixture();
  const ex = makeExecutor(fx);
  const said: string[] = [];
  ex.reporter = { notify: (_t: string, m: string) => said.push(m), event: () => ({}) };
  // one lane that genuinely failed, one the engine never saw finish
  ex.state.recordDispatchStart('a', { stage: 's1', role: 'worker', label: 'ua', covers: ['1'] } as any);
  ex.state.recordDispatchEnd('a', false);
  ex.state.recordDispatchStart('b', { stage: 's1', role: 'worker', label: 'ub', covers: ['2'] } as any);
  // and one that succeeded, which retry must leave alone
  ex.state.recordDispatchStart('c', { stage: 's1', role: 'worker', label: 'uc', covers: ['3'] } as any);
  ex.state.recordDispatchEnd('c', true);

  writeCommand(join(fx.repo, '.autopilot'), 'retry');
  ex.handleControl();

  const msg = said.find((m) => m.includes('armed a retry'))!;
  assert.ok(msg, `no retry notice: ${JSON.stringify(said)}`);
  assert.match(msg, /2 lane\(s\)/, 'the failed and the unfinished lane are both re-armed');
  assert.match(msg, /1 failed, 1 unfinished/,
    'lastExitOk === null is UNKNOWN, not failed; calling it failed is the same misreport in a new place');
  assert.equal(ex.state.data.dispatches.c.attempts, 1, 'a successful lane must not be re-armed');
});

test('a lane that never recorded an end is re-armed, and counted as unfinished, not failed', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-state-'));
  const st = new State(statePath(dir)).init('r');
  st.recordDispatchStart('k', { stage: 's', role: 'w', label: 'l', covers: ['1'] } as any);
  const d = st.data.dispatches.k;
  assert.equal(d.endedAt, null, 'a started-but-unfinished dispatch has no end');
  assert.equal(d.lastExitOk, null, 'and its outcome is unknown, not false');
});

// ------------------------------------------------------------------ reporter

test('a throwing console sink cannot take down the run loop', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const boom = () => { throw Object.assign(new Error('write EPIPE'), { code: 'EPIPE' }); };
  const r = new Reporter({ dir, sink: boom, intervalMs: 0 });
  assert.doesNotThrow(() => r.notify('dispatch', 'a lane started'),
    'notify must survive a closed stdout — a detached engine writes to a pipe');
  assert.doesNotThrow(() => r.report({ run: 'x', stages: [], running: [] } as any, { force: true }));
  // and the event still reached the durable sink
  const rows = readFileSync(join(dir, 'events.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  assert.ok(rows.some((x) => x.type === 'dispatch' && x.message === 'a lane started'));
});

test('an unwritable events file cannot take down the run loop', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const r = new Reporter({ dir, sink: () => {}, intervalMs: 0 });
  mkdirSync(join(dir, 'events.jsonl.d'), { recursive: true });
  (r as any).eventsPath = join(dir, 'events.jsonl.d');   // a directory: append throws
  assert.doesNotThrow(() => r.notify('gate', 'a gate failed'));
});

test('an unserialisable payload cannot take down the run loop', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const r = new Reporter({ dir, sink: () => {}, intervalMs: 0 });
  const circular: any = { name: 'cfg' };
  circular.self = circular;
  assert.doesNotThrow(() => r.notify('dispatch-failed', 'lane died', { cfg: circular }));
});

test('a snapshot that cannot render is reported, not thrown', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const r = new Reporter({ dir, sink: () => {}, intervalMs: 0 });
  const hostile: any = { run: 'x', get stages() { throw new Error('bad snapshot'); } };
  assert.doesNotThrow(() => r.report(hostile, { force: true }));
  assert.match(readFileSync(join(dir, 'status.md'), 'utf8'), /report failed to render/);
});

test('events.jsonl is append-only: nothing truncates it', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const r = new Reporter({ dir, sink: () => {}, intervalMs: 0 });
  for (let i = 0; i < 5; i += 1) r.notify('tick', `n${i}`);
  r.report({ run: 'x', stages: [], running: [] } as any, { force: true });
  for (let i = 5; i < 8; i += 1) r.notify('tick', `n${i}`);
  const rows = readFileSync(join(dir, 'events.jsonl'), 'utf8').trim().split('\n').map((l) => JSON.parse(l));
  assert.equal(rows.filter((x) => x.type === 'tick').length, 8, 'earlier rows were lost');
  assert.equal(rows[0].message, 'n0', 'the first row must survive every later write');
  // and the report goes to a DIFFERENT file
  assert.ok(existsSync(join(dir, 'status.md')));
  assert.notEqual((r as any).eventsPath, (r as any).statusPath);
});

test('large gate output keeps diagnostic head and tail without bloating events.jsonl', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ap-rep-'));
  const r = new Reporter({ dir, sink: () => {}, intervalMs: 0 });
  const output = `HEAD-${'x'.repeat(100_000)}-TAIL`;
  r.event('gate', { id: 'large', output });
  const line = readFileSync(join(dir, 'events.jsonl'), 'utf8').trim();
  const row = JSON.parse(line);
  assert.match(row.output, /^HEAD-/);
  assert.match(row.output, /characters omitted from event/);
  assert.match(row.output, /-TAIL$/);
  assert.ok(line.length < 35_000, 'one verbose gate must remain a small event row');
});

test('the source proves it: appendFileSync is the only writer of eventsPath', () => {
  const src = readFileSync(new URL('../src/reporter.mts', import.meta.url), 'utf8');
  const writes = [...src.matchAll(/(appendFileSync|writeFileSync)\(this\.(\w+)/g)]
    .map((m) => [m[1], m[2]]);
  for (const [fn, target] of writes) {
    if (target === 'eventsPath') assert.equal(fn, 'appendFileSync', 'eventsPath must only be appended to');
    if (target === 'statusPath') assert.equal(fn, 'writeFileSync', 'status.md is overwritten in place, by design');
  }
  assert.ok(writes.some(([, t]) => t === 'eventsPath'));
  assert.ok(chmodSync);
});
