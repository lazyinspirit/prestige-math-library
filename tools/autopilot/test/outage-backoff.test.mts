// An external outage must not consume repair rounds.
//
// WHY. During the sonnet account limit on frontier-15 (2026-08-17), every
// judge-closure re-sweep was a guaranteed null — "You've hit your session
// limit · resets 12pm" — yet each re-sweep consumed one of 7-judge's two
// repair rounds. The stage exhausted on work that could never have succeeded
// and a person performed a stop → rounds-reset → restart to recover it. The
// budget exists to stop a NON-CONVERGING repair; an outage says nothing about
// convergence. These tests pin the rewrite: a hook that reports an outage gets
// its round refunded and a clock set; while the clock runs the hook stays
// un-fired and no round is spent; the classifier calls an outage only when
// every fresh null carries the signature.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { stages, judgeOutageSince, OUTAGE_SIGNATURE } from '../stages/mathlib.mts';
import { Executor } from '../src/executor.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const SONNET_LIMIT = "NO_CONTENT: You've hit your session limit · resets 12pm (Australia/Sydney)";
const UNPARSEABLE = 'UNPARSEABLE (567 chars): Flagged: step 1.1 asserts that a homomorphism killing 2';

function fixtureRepo() {
  const dir = mkdtempSync(join(tmpdir(), 'outage-'));
  mkdirSync(join(dir, 'research'));
  mkdirSync(join(dir, '.autopilot'));
  return dir;
}

function writeLedger(repo: string, rows: any[]) {
  writeFileSync(join(repo, 'research', 'demo-judge.jsonl'),
    rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
}

function executorAt(repo: string) {
  const config: any = { repo, stateDir: join(repo, '.autopilot'), run: 'demo', argv: ['true'], dispatchDir: join(repo, 'research', 'demo-dispatch'), coversMap: {}, adoptCommand: false };
  const state = new State(statePath(config.stateDir)).init('demo');
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: 60_000 });
  const adapter = makeExecAdapter({ argv: ['true'], cwd: repo });
  return new Executor({ config, stages, adapter, state, reporter });
}

// ---------------------------------------------------------------- signature

test('the signature matches the live outage messages and nothing else', () => {
  assert.ok(OUTAGE_SIGNATURE.test(SONNET_LIMIT), 'the sonnet session limit IS the outage');
  assert.ok(OUTAGE_SIGNATURE.test('HTTP 429 Too Many Requests'), 'a provider 429 is an outage');
  assert.ok(!OUTAGE_SIGNATURE.test(UNPARSEABLE), 'a prose verdict re-spends on a round, correctly');
  assert.ok(!OUTAGE_SIGNATURE.test('NO_CONTENT: OpenAI Codex v0.147.0'),
    'bare NO_CONTENT is a dead lane, not a busy one — waiting on it would wait forever');
});

// --------------------------------------------------------------- classifier

test('all fresh nulls carrying the signature is an outage; anything else is not', () => {
  const repo = fixtureRepo();
  const ctx: any = { repo, run: 'demo' };
  const before = '2026-08-17T02:00:00.000Z';
  const cut = '2026-08-17T03:00:00.000Z';
  const after = '2026-08-17T04:00:00.000Z';

  // every null since the cut carries the signature -> outage, reason quoted
  writeLedger(repo, [
    { id: 'a', model: 'm', keep: true, at: after },
    { id: 'b', model: 'm', keep: null, reason: SONNET_LIMIT, at: after },
    { id: 'c', model: 'm', keep: null, reason: SONNET_LIMIT, at: after },
  ]);
  assert.match(judgeOutageSince(ctx, cut) ?? '', /session limit/);

  // one non-outage null in the window -> a repair round is the right spend
  writeLedger(repo, [
    { id: 'b', model: 'm', keep: null, reason: SONNET_LIMIT, at: after },
    { id: 'c', model: 'm', keep: null, reason: UNPARSEABLE, at: after },
  ]);
  assert.equal(judgeOutageSince(ctx, cut), null);

  // outage nulls that predate the window are history, not evidence
  writeLedger(repo, [
    { id: 'b', model: 'm', keep: null, reason: SONNET_LIMIT, at: before },
    { id: 'c', model: 'm', keep: true, at: after },
  ]);
  assert.equal(judgeOutageSince(ctx, cut), null);

  // no ledger at all -> null, never a throw
  rmSync(join(repo, 'research', 'demo-judge.jsonl'));
  assert.equal(judgeOutageSince(ctx, cut), null);
  rmSync(repo, { recursive: true, force: true });
});

// ------------------------------------------------- executor refund + backoff

test('an outage report refunds the round and sets a clock; the clock gates the hook', async () => {
  const repo = fixtureRepo();
  const ex: any = executorAt(repo);
  const ctx: any = { repo, run: 'demo' };
  let fired = 0;
  let outage = true;
  const stage: any = {
    id: 'x-test', maxFixRounds: 2,
    onGateFailure: () => {
      fired += 1;
      return outage ? { outage: { reason: 'session limit', retryAfterMs: 60 } } : undefined;
    },
  };
  const failure: any = { id: 'g', ok: false, why: 'w' };

  // round spent, hook fired, then REFUNDED: the budget is intact, the clock set
  assert.equal(await ex.spendRepairRound(stage, failure, ctx, 'gate g failed'), 'spent');
  assert.equal(fired, 1);
  const st = ex.state.stage('x-test');
  assert.equal(st.fixRounds, 0, 'the outage round is refunded');
  assert.ok(st.backoffUntil, 'a clock is set instead');

  // while the clock runs: no fire, no spend, and NOT exhaustion
  assert.equal(await ex.spendRepairRound(stage, failure, ctx, 'gate g failed'), 'waiting');
  assert.equal(fired, 1, 'the hook must not fire during backoff');
  assert.equal(st.fixRounds, 0);

  // clock passed, lane recovered: the round spends normally
  await new Promise((r) => setTimeout(r, 80));
  outage = false;
  assert.equal(await ex.spendRepairRound(stage, failure, ctx, 'gate g failed'), 'spent');
  assert.equal(fired, 2);
  assert.equal(st.fixRounds, 1, 'a non-outage round consumes budget');
  assert.equal(st.backoffUntil, null, 'the clock is cleared once elapsed');
  rmSync(repo, { recursive: true, force: true });
});

test('prevRoundAt hands each round the previous round\'s start instant', async () => {
  const repo = fixtureRepo();
  const ex: any = executorAt(repo);
  const ctx: any = { repo, run: 'demo' };
  const seen: any[] = [];
  const stage: any = {
    id: 'x-prev', maxFixRounds: 3,
    onGateFailure: ({ prevRoundAt }: any) => { seen.push(prevRoundAt); },
  };
  const failure: any = { id: 'g', ok: false, why: 'w' };
  await ex.spendRepairRound(stage, failure, ctx, 'gate g failed');
  await ex.spendRepairRound(stage, failure, ctx, 'gate g failed');
  assert.equal(seen[0], null, 'round 1 has no predecessor');
  assert.ok(typeof seen[1] === 'string' && seen[1] <= new Date().toISOString(),
    'round 2 receives round 1\'s start stamp');
  rmSync(repo, { recursive: true, force: true });
});

test('the budget still exhausts on genuine failures', async () => {
  const repo = fixtureRepo();
  const ex: any = executorAt(repo);
  const ctx: any = { repo, run: 'demo' };
  const stage: any = { id: 'x-cap', maxFixRounds: 1, onGateFailure: () => {} };
  const failure: any = { id: 'g', ok: false, why: 'w' };
  assert.equal(await ex.spendRepairRound(stage, failure, ctx, 'gate g failed'), 'spent');
  assert.equal(await ex.spendRepairRound(stage, failure, ctx, 'gate g failed'), 'none',
    'past the cap the caller stamps exhaustion and blocks, as before');
  rmSync(repo, { recursive: true, force: true });
});

// ------------------------------------------- the async lane: 8-rejudge's hook

test('8-rejudge reports the previous round\'s outage instead of re-dispatching into it', async () => {
  const repo = fixtureRepo();
  const ctx: any = { repo, run: 'demo' };
  const cut = '2026-08-17T03:00:00.000Z';
  const after = '2026-08-17T04:00:00.000Z';
  writeFileSync(join(repo, 'research', 'demo-judge-closure.json'), JSON.stringify({
    closed: false, needs_rejudge: ['thm-x'],
  }));
  const started: any[] = [];
  const executor = { start: (_s: any, p: any) => started.push(p) };
  const s8: any = stages.find((s: any) => s.id === '8-rejudge');

  // the previous round's sweep produced only outage nulls -> report, no dispatch
  writeLedger(repo, [{ id: 'thm-x', model: 'm', keep: null, reason: SONNET_LIMIT, at: after }]);
  const r1 = await s8.onGateFailure({ ctx, executor, stage: s8, round: 2, prevRoundAt: cut,
    failure: { id: 'judge-closure', ok: false, why: '' } });
  assert.match(r1?.outage?.reason ?? '', /session limit/);
  assert.equal(started.length, 0, 'never dispatch a sweep into a known outage');

  // a non-outage null -> the normal rejudge round dispatches
  writeLedger(repo, [{ id: 'thm-x', model: 'm', keep: null, reason: UNPARSEABLE, at: after }]);
  const r2 = await s8.onGateFailure({ ctx, executor, stage: s8, round: 2, prevRoundAt: cut,
    failure: { id: 'judge-closure', ok: false, why: '' } });
  assert.equal(r2?.outage, undefined);
  assert.equal(started.length, 1);
  assert.equal(started[0].label, 'rejudge-round-2');

  // round 1 has no predecessor window and must dispatch, not classify
  started.length = 0;
  const r3 = await s8.onGateFailure({ ctx, executor, stage: s8, round: 1, prevRoundAt: null,
    failure: { id: 'judge-closure', ok: false, why: '' } });
  assert.equal(r3?.outage, undefined);
  assert.equal(started.length, 1);
  rmSync(repo, { recursive: true, force: true });
});
