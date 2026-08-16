// The checks that would have stopped frontier-14 finishing with open work.
//
// Every test here fails against the engine as it was. They are grouped by the
// defect each one closes, and the defect is named, because a test whose reason
// is not written down gets deleted the first time it is inconvenient.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { validateStages } from '../src/spec.mts';
import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

const CTX: any = { run: 'r', repo: '/tmp', dispatchDir: '/tmp' };
const base = (over: any = {}) => ({
  id: 's', label: 's', units: () => ['1'], pattern: /^x-/,
  plan: () => [], gates: () => [{ id: 'g', argv: ['true'] }], ...over,
});

// --------------------------------------------------------------------------
// RC2 — a stage with no gates cannot fail, and the terminal stage had none.
// --------------------------------------------------------------------------

test('a terminal stage with an empty gate list is refused', () => {
  const problems = validateStages([base({ id: '10-report', gates: () => [] })] as any, CTX);
  assert.ok(problems.length, 'a gateless terminal stage must not be accepted');
  assert.match(problems[0].message, /empty list|no `gates`/);
});

test('the terminal stage may not waive its gates, however good the reason', () => {
  const problems = validateStages([
    base({ id: '9-x' }),
    base({ id: '10-report', gates: undefined, gatesWaived: 'the report agent checks everything itself, honestly' }),
  ] as any, CTX);
  assert.ok(problems.some((p) => /TERMINAL/.test(p.message)),
    `expected the terminal-stage rule to fire, got ${JSON.stringify(problems)}`);
});

test('a non-terminal stage may waive, but must give a real reason', () => {
  const ok = validateStages([
    base({ id: 'a', gates: undefined, gatesWaived: 'readers only write reports; nothing on disk changes here' }),
    base({ id: 'b' }),
  ] as any, CTX);
  assert.deepEqual(ok, [], `a reasoned waiver is legal: ${JSON.stringify(ok)}`);

  const bare = validateStages([
    base({ id: 'a', gates: undefined, gatesWaived: 'nope' }),
    base({ id: 'b' }),
  ] as any, CTX);
  assert.ok(bare.length, 'a token reason is how a missing gate looks deliberate');
});

test('a gate built as a command string is refused', () => {
  // Every attempt to parse a command string in this engine produced a quoting
  // defect; the judge receipt took three tries and 33 re-dispatches.
  const problems = validateStages([base({ gates: () => [{ id: 'g', argv: 'node tools/x.mjs --flag "a b"' }] })] as any, CTX);
  assert.ok(problems.some((p) => /argv ARRAY/.test(p.message)));
});

test('the real mathlib table validates', async () => {
  const mod = await import('../stages/mathlib.mts');
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  const problems = validateStages(mod.stages as any, { run: 'frontier-14', repo, dispatchDir: join(repo, 'dispatch') });
  assert.deepEqual(problems, [], `the shipped pipeline must satisfy its own rules:\n${JSON.stringify(problems, null, 2)}`);
});

test('every stage after the judge sweep gates on judge closure', async () => {
  // The specific hole: step 7 cleared on "the sweep exited", and no stage after
  // it asked whether the mathematics was actually signed off. Naming the stages
  // rather than counting gates, so adding a stage without closure fails here.
  const mod = await import('../stages/mathlib.mts');
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  const ctx: any = { run: 'frontier-14', repo };
  const ids = mod.stages.map((s: any) => s.id);
  const after = ids.slice(ids.indexOf('7-judge'));
  const missing = after.filter((id) => {
    const st: any = mod.stages.find((s: any) => s.id === id);
    if (st.gatesWaived) return false;                       // snapshots, checked by artifacts
    const gates = (st.gates?.(ctx) ?? []).map((g: any) => g.id);
    return !gates.includes('judge-closure') && !gates.includes('level-coverage');
  });
  assert.deepEqual(missing, [], `stages after the sweep with no closure gate: ${missing.join(', ')}`);
});

test('the terminal stage gates on the whole-level receipt', async () => {
  const mod = await import('../stages/mathlib.mts');
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  const last: any = mod.stages[mod.stages.length - 1];
  const gates = (last.gates?.({ run: 'frontier-14', repo }) ?? []);
  const lc = gates.find((g: any) => g.id === 'level-coverage');
  assert.ok(lc, 'the last stage must run level-coverage; frontier-14 never ran it anywhere');
  assert.ok(lc.argv.includes('--verify-current-context'),
    'without --verify-current-context the gate checks verdicts against text that may have moved');
});

// --------------------------------------------------------------------------
// RC5 — onGateFailure existed, was called, and no stage implemented it;
// `fixRounds` was initialised and never read. A failing gate could only hold.
// --------------------------------------------------------------------------

function repairFixture(maxFixRounds: number) {
  const repo = mkdtempSync(join(tmpdir(), 'ap-repair-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir, { recursive: true });
  const stateDir = join(repo, '.autopilot');

  // A gate that fails until a marker file appears — a repair that converges.
  const gateScript = join(repo, 'gate.mjs');
  writeFileSync(gateScript, `
    import { existsSync } from 'node:fs';
    if (existsSync('${join(repo, 'fixed')}')) { console.log('1 checked'); process.exit(0); }
    console.error('ERROR still broken'); process.exit(1);
  `);

  const agent = join(repo, 'agent.mjs');
  writeFileSync(agent, `
    import { writeFileSync } from 'node:fs';
    const a = process.argv.slice(2);
    const get = (n) => { const i = a.indexOf('--' + n); return i >= 0 ? a[i+1] : null; };
    writeFileSync('${join(dispatchDir, '')}' + get('role') + '-' + get('label') + '.result.json',
      JSON.stringify({ role: get('role'), label: get('label'), covers: ['all'], ok: true }));
  `);

  const rounds: number[] = [];
  const stages: any = [{
    id: 'only', label: 'only', units: () => ['all'], pattern: /^w-/,
    concurrency: 1,
    plan: () => [{ role: 'w', label: 'work', job: 'authoring', covers: ['all'] }],
    gates: () => [{ id: 'converge', argv: ['node', gateScript] }],
    maxFixRounds,
    onGateFailure: async ({ executor, stage, round }) => {
      rounds.push(round);
      // Third round fixes it, so a cap of 3 converges and a cap of 1 does not.
      if (round >= 3) writeFileSync(join(repo, 'fixed'), 'ok');
      executor.start(stage, { role: 'fixer', label: `fix-${round}`, job: 'authoring', covers: ['all'] });
    },
  }];

  const state = new State(statePath(stateDir)).init('t');
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const adapter = makeExecAdapter({
    argv: ['node', agent, '--role', '{role}', '--label', '{label}', '--covers', '{covers}'],
    cwd: repo,
  });
  const ex = new Executor({
    config: { run: 't', repo, stateDir, dispatchDir, argv: ['true'], concurrency: 1, maxAttempts: 5, coversMap: {}, adoptCommand: false } as any,
    stages, adapter, state, reporter,
  });
  return { ex, rounds, repo };
}

const settle = async (ex: any, n = 20) => {
  for (let i = 0; i < n; i += 1) {
    const r = await ex.tick();
    if (r === 'done' || r === 'blocked' || r === 'stopped') return r;
    await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
  }
  return 'working';
};

test('a failing gate dispatches repair work and re-runs until it passes', async () => {
  const { ex, rounds } = repairFixture(3);
  assert.equal(await settle(ex), 'done');
  assert.deepEqual(rounds, [1, 2, 3], 'the hook must fire once per round, not once ever');
});

test('the repair loop stops at the cap instead of spending forever', async () => {
  // The hook used to fire only when the blocker MESSAGE was new. A gate failing
  // the same way produces the same message, so it fired once and deadlocked.
  // Unbounded firing is the opposite failure, and this is the bound.
  const { ex, rounds } = repairFixture(1);
  assert.equal(await settle(ex), 'blocked');
  assert.deepEqual(rounds, [1]);
  assert.ok(ex.state.data.blockers.some((b: any) => /gate converge failed/.test(b.message)),
    'and it must leave a blocker a person can read');
});

// --------------------------------------------------------------------------
// RC1 — a gate whose input is absent used to report success.
// --------------------------------------------------------------------------

test('the closure receipt names the work, so a later stage can dispatch from it', () => {
  // frontier-14's step 8 named its 23 rejudge targets in a markdown table. The
  // rejudge never ran, because nothing downstream can read a table.
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  if (!existsSync(join(repo, 'tools/level-coverage.mjs'))) return;
  const src = readFileSync(join(repo, 'tools/level-coverage.mjs'), 'utf8');
  for (const key of ['needs_rejudge', 'unadjudicated', 'open_fatal', 'closed']) {
    assert.ok(src.includes(key), `the closure receipt must name ${key}`);
  }
});

// --------------------------------------------------------------------------
// The Alpha assignment: a judged partition, mechanically validated.
// --------------------------------------------------------------------------

test('the alpha-groups gate rejects an avoidable category split', async () => {
  // The defect this stage exists for: chunking the sorted batch list gave one
  // Alpha three unrelated subjects and split topology across two Alphas, so
  // neither could see the cross-references among its own pages.
  const { execFileSync } = await import('node:child_process');
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  if (!existsSync(join(repo, 'tools/alpha-groups.mjs'))) return;

  const path = join(repo, 'research', 'frontier-14-alpha-groups.json');
  if (!existsSync(path)) return;
  const saved = readFileSync(path, 'utf8');
  const run = () => {
    try { execFileSync('node', ['tools/alpha-groups.mjs', '--run', 'frontier-14'], { cwd: repo, encoding: 'utf8' }); return { ok: true, out: '' }; }
    catch (e: any) { return { ok: false, out: `${e.stdout ?? ''}${e.stderr ?? ''}` }; }
  };

  try {
    // topology is batches 2, 3 and 7 — three batches, and the cap is three, so
    // it fits in one Alpha. Splitting it must fail.
    writeFileSync(path, JSON.stringify([
      { label: 'a', covers: ['1', '2', '3'], rationale: 'positional chunking, which is what this replaces' },
      { label: 'b', covers: ['4', '5', '6'], rationale: 'positional chunking, which is what this replaces' },
      { label: 'c', covers: ['7'], rationale: 'positional chunking, which is what this replaces' },
    ], null, 2));
    const bad = run();
    assert.equal(bad.ok, false, 'an avoidable category split must fail the gate');
    assert.match(bad.out, /alpha-groups-category-split/);

    // Every batch must be owned exactly once.
    writeFileSync(path, JSON.stringify([
      { label: 'a', covers: ['2', '3', '7'], rationale: 'topology kept whole, which is the point of the rule' },
    ], null, 2));
    assert.equal(run().ok, false, 'leaving batches unassigned must fail');

    // A partition with no stated reason cannot be reviewed.
    writeFileSync(path, JSON.stringify([
      { label: 'a', covers: ['2', '3', '7'] },
      { label: 'b', covers: ['1', '4'] },
      { label: 'c', covers: ['5', '6'] },
    ], null, 2));
    assert.equal(run().ok, false, 'a group with no rationale must fail');

    writeFileSync(path, saved);
    assert.equal(run().ok, true, 'and the sound assignment passes');
  } finally {
    writeFileSync(path, saved);
  }
});
