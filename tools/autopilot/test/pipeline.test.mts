// OVERLAP GROUPS: does a unit move on without waiting for its siblings, and is
// anything that used to be checked over the whole level still checked over the
// whole level?
//
// Those are the two halves and only the first one is the feature. Serial stages
// make the slowest unit of a stage the start time of every unit of the next —
// six-hour authors gating four-hour readers — and the fix is worthless if it
// buys the time by letting a gate see a fraction of the level and report
// success. So every test below comes in that pair: something starts earlier,
// and something is still checked over everything.
//
// The fixture is a synthetic stage table driven through the real executor, in
// the shape of test/e2e.test.mts's harness. The gates are scripts that append
// their own id to a log, which is how "ran exactly once, at the group exit" is
// an assertion about a file rather than about a mock.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { State, statePath } from '../src/state.mts';
import { Reporter } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { validateStages } from '../src/spec.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';

// ---------------------------------------------------------------------------
// fixture
// ---------------------------------------------------------------------------

function fixture() {
  const repo = mkdtempSync(join(tmpdir(), 'ap-pipe-'));
  const dispatchDir = join(repo, 'dispatch');
  mkdirSync(dispatchDir, { recursive: true });

  const agent = join(repo, 'fake-agent.mjs');
  writeFileSync(agent, `
import { writeFileSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
const a = process.argv.slice(2);
const get = (n) => { const i = a.indexOf('--' + n); return i >= 0 ? a[i+1] : null; };
const label = get('label'), covers = (get('covers') || '').split(',').filter(Boolean);
appendFileSync(join('${dispatchDir}', 'calls.log'), label + '\\n');
writeFileSync(join('${dispatchDir}', get('role') + '-' + label + '.result.json'),
  JSON.stringify({ role: get('role'), label, run: get('run'), covers, ok: true }));
`);
  return { repo, dispatchDir, agent, gatesLog: join(repo, 'gates.log') };
}

/** A gate that records the fact that it ran. "Exactly once, at the group exit"
 *  is then a claim about a file, not about a spy. */
function loggingGate(fx: any, id: string, { ok = true } = {}) {
  const p = join(fx.repo, `gate-${id}.mjs`);
  writeFileSync(p, `
import { appendFileSync } from 'node:fs';
appendFileSync(${JSON.stringify(fx.gatesLog)}, '${id}\\n');
${ok ? `console.log('${id}: 1 checked');` : `console.error('ERROR ${id} refused');`}
process.exit(${ok ? 0 : 1});
`);
  return { id, argv: ['node', p] };
}

const gateRuns = (fx: any): string[] =>
  (existsSync(fx.gatesLog) ? readFileSync(fx.gatesLog, 'utf8') : '').trim().split('\n').filter(Boolean);

const calls = (fx: any): string[] =>
  (existsSync(join(fx.dispatchDir, 'calls.log')) ? readFileSync(join(fx.dispatchDir, 'calls.log'), 'utf8') : '')
    .trim().split('\n').filter(Boolean);

/** Write the result record a finished dispatch would have written. */
function cover(fx: any, role: string, label: string, units: string[]) {
  writeFileSync(join(fx.dispatchDir, `${role}-${label}.result.json`),
    JSON.stringify({ role, label, covers: units, ok: true }));
}

/**
 * The table under test: two pipelined stages and a barrier stage after them.
 *
 *   s1 --pipeline 'p'--> s2   |   s3 (no pipeline)
 */
function pipelinedStages(fx: any, { units = ['1', '2'], g1 = true, g2 = true, cohort = null as any } = {}) {
  return [
    {
      id: 's1', label: 'first', pipeline: 'p', role: 'worker',
      units: () => units,
      pattern: /^worker-/,
      concurrency: 3,
      plan: (ctx: any, pending: string[]) =>
        pending.map((u) => ({ role: 'worker', label: `a${u}`, job: 'authoring', covers: [u] })),
      gates: () => [loggingGate(fx, 'g1', { ok: g1 })],
    },
    {
      id: 's2', label: 'second', pipeline: 'p', role: 'checker',
      units: () => units,
      pattern: /^checker-/,
      concurrency: 3,
      ...(cohort ? { cohort } : {}),
      plan: (ctx: any, pending: string[]) => {
        if (!cohort) return pending.map((u) => ({ role: 'checker', label: `b${u}`, job: 'audit', covers: [u] }));
        // A group-Alpha-shaped stage: one dispatch claims a whole cohort.
        const seen = new Set<string>();
        const out: any[] = [];
        for (const u of pending) {
          const c = cohort(null, u).map(String);
          const key = c.join('-');
          if (seen.has(key)) continue;
          seen.add(key);
          out.push({ role: 'checker', label: `b${key}`, job: 'audit', covers: c });
        }
        return out;
      },
      gates: () => [loggingGate(fx, 'g2', { ok: g2 })],
    },
    {
      id: 's3', label: 'after the group',
      units: () => ['all'],
      pattern: /^finisher-/,
      concurrency: 1,
      plan: () => [{ role: 'finisher', label: 'final', job: 'audit', covers: ['all'] }],
      gates: () => [loggingGate(fx, 'g3')],
    },
  ];
}

function makeExecutor(fx: any, stages: any, extra: any = {}) {
  const stateDir = join(fx.repo, '.autopilot');
  const config: any = {
    run: 'testrun', repo: fx.repo, stateDir, dispatchDir: fx.dispatchDir,
    argv: ['true'], concurrency: 3, maxAttempts: 2, coversMap: {},
    adoptCommand: false, ...extra,
  };
  const state = new State(statePath(stateDir)).init('testrun');
  const reporter = new Reporter({ dir: stateDir, intervalMs: 10 ** 9, sink: () => {} });
  const adapter = extra.hang
    ? { name: 'hang', describe: () => 'hang', invoke: () => new Promise<any>(() => {}) }
    : makeExecAdapter({
      argv: ['node', fx.agent, '--role', '{role}', '--label', '{label}',
        '--run', '{run}', '--covers', '{covers}'],
      cwd: fx.repo,
    });
  return new Executor({ config, stages, adapter, state, reporter });
}

const settle = async (ex: any, n = 16) => {
  for (let i = 0; i < n; i += 1) {
    const r = await ex.tick();
    if (r === 'done' || r === 'blocked' || r === 'stopped') return r;
    await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
  }
  return 'working';
};

const inflightAt = (ex: any, stageId: string) =>
  [...ex.inflight.values()].filter((d: any) => d.meta.stage === stageId);

// ---------------------------------------------------------------------------
// P1/P2 — a unit moves on while its siblings are still working
// ---------------------------------------------------------------------------

test('a unit enters the next pipelined stage while a sibling is still in flight at the previous one', async () => {
  // THE FEATURE. Serially this is exactly what the stage barrier forbade: s1 is
  // the current stage and has live work, so nothing else could start. Unit 1's
  // own work is finished, and unit 2's is not unit 1's business.
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx), { hang: true });

  cover(fx, 'worker', 'a1', ['1']);                       // unit 1 finished at s1
  let release: any;
  const held = new Promise((r) => { release = r; });      // unit 2 still running at s1
  ex.inflight.set('s1:a2', { promise: held, meta: { stage: 's1', role: 'worker', label: 'a2', covers: ['2'], attempt: 1 }, startedAt: Date.now() });

  assert.equal(await ex.tick(), 'working');

  const started = inflightAt(ex, 's2');
  assert.equal(started.length, 1, 's2 must start for the unit that is ready');
  assert.deepEqual(started[0].meta.covers, ['1']);
  assert.deepEqual(inflightAt(ex, 's1').map((d: any) => d.meta.label), ['a2'],
    'and must not start s2 for the unit still being worked on');
  release();
});

test('cohort: a stage whose dispatch covers several units waits for all of them', async () => {
  // A group Alpha owns up to three batches and its one result file declares
  // coverage of all of them. Starting it when two of the three are done would
  // record work on a batch nobody has looked at.
  const fx = fixture();
  const cohort = (_ctx: any, u: string) => (['1', '2'].includes(String(u)) ? ['1', '2'] : ['3', '4']);
  const ex = makeExecutor(fx, pipelinedStages(fx, { units: ['1', '2', '3', '4'], cohort }), { hang: true });

  cover(fx, 'worker', 'a1', ['1']);
  cover(fx, 'worker', 'a3', ['3']);
  for (const u of ['2', '4']) {
    ex.inflight.set(`s1:a${u}`, { promise: new Promise(() => {}), meta: { stage: 's1', role: 'worker', label: `a${u}`, covers: [u], attempt: 1 }, startedAt: Date.now() });
  }

  await ex.tick();
  assert.equal(inflightAt(ex, 's2').length, 0,
    'half a cohort finished is not a cohort finished');

  // Unit 2 lands; its cohort {1,2} is now complete and may go, {3,4} may not.
  cover(fx, 'worker', 'a2', ['2']);
  ex.inflight.delete('s1:a2');
  await ex.tick();
  const started = inflightAt(ex, 's2');
  assert.equal(started.length, 1);
  assert.deepEqual(started[0].meta.covers, ['1', '2']);
});

test('the group budgets a lane it shares, rather than letting each stage fill it', async () => {
  // Two stages of one group on the same dispatcher lane. `concurrency` bounds a
  // stage; serially that bounds the lane too, because only one stage is ever
  // live. In a group it stops doing so: two stages at 2 is 4 against a cap of 2.
  //
  // The arrangement is deliberate. One unit is still owed at s1 and two are
  // ready at s2, so a correct engine overlaps the stages (which is the feature)
  // and admits exactly one of the two ready units (which is the cap).
  const fx = fixture();
  const stages: any = pipelinedStages(fx, { units: ['1', '2', '3'] });
  stages[0].role = 'beta'; stages[0].concurrency = 2;
  stages[1].role = 'beta'; stages[1].concurrency = 2;
  stages[0].plan = (ctx: any, pending: string[]) =>
    pending.map((u) => ({ role: 'beta', label: `a${u}`, job: 'authoring', covers: [u] }));
  stages[1].plan = (ctx: any, pending: string[]) =>
    pending.map((u) => ({ role: 'beta', label: `b${u}`, job: 'audit', covers: [u] }));
  const ex = makeExecutor(fx, stages, { hang: true });

  cover(fx, 'worker', 'a1', ['1']);
  cover(fx, 'worker', 'a2', ['2']);                       // units 1,2 ready for s2; 3 still owed at s1

  await ex.tick();
  assert.equal(inflightAt(ex, 's1').length, 1, 's1 still owes unit 3');
  assert.equal(inflightAt(ex, 's2').length, 1,
    's2 overlaps s1, and takes ONE of its two ready units because the lane already holds one');
  assert.equal(ex.inflight.size, 2, `the beta lane cap is 2, got ${ex.inflight.size}`);
  assert.ok([...ex.inflight.values()].every((d: any) => d.meta.role === 'beta'));
});

// ---------------------------------------------------------------------------
// The half that is not the feature: the level join
// ---------------------------------------------------------------------------

test('no member gate runs until every member of the group is unit-complete', async () => {
  // Serially, s1's gates ran the moment s1's last unit landed. In a group they
  // must not: s2 is still working, and a repo-wide gate declared by s1 would be
  // reading a level that is half written.
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx));

  await ex.tick();                                        // dispatch s1 for 1 and 2
  await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
  assert.deepEqual(gateRuns(fx), [], 'nothing is complete yet');

  await ex.tick();                                        // s1 complete, s2 dispatched
  assert.deepEqual(inflightAt(ex, 's2').map((d: any) => d.meta.label).sort(), ['b1', 'b2'],
    's2 must have started');
  assert.deepEqual(gateRuns(fx), [],
    "s1's gates must not run while its group still has work — this is the level-scope guarantee");
  await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
});

test('every member gate runs exactly once, at the group exit, before the next stage', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx));
  assert.equal(await settle(ex), 'done');

  assert.deepEqual(gateRuns(fx), ['g1', 'g2', 'g3'],
    'each gate exactly once, in stage order — never once per unit');

  const order = calls(fx);
  assert.equal(order[order.length - 1], 'final',
    'the non-pipelined stage runs last, after the whole group and its gates');
});

test('a failing gate on the FIRST member still blocks the group exit', async () => {
  // The discriminating case. Serially a red g1 stopped s2 from ever running.
  // Pipelined, s2 has already run — so the only thing standing between a bad
  // level and the barrier stage is that the join refuses to clear.
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx, { g1: false }));
  assert.equal(await settle(ex), 'blocked');

  assert.deepEqual(calls(fx).filter((c) => c.startsWith('b')).sort(), ['b1', 'b2'],
    's2 ran, because per-unit progression does not wait for a gate');
  assert.ok(!calls(fx).includes('final'),
    'and the barrier stage after the group did NOT run');
  assert.ok(ex.state.data.blockers.some((b: any) => /s1: gate g1 failed/.test(b.message)),
    `the blocker must name the stage that declared the gate: ${JSON.stringify(ex.state.data.blockers)}`);
  assert.ok(!gateRuns(fx).includes('g3'));
});

test('a failing gate on the LAST member blocks the group exit too', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx, { g2: false }));
  assert.equal(await settle(ex), 'blocked');
  assert.ok(ex.state.data.blockers.some((b: any) => /s2: gate g2 failed/.test(b.message)));
  assert.ok(!calls(fx).includes('final'));
});

test('a non-pipelined stage waits for every dispatch in the group ahead of it', async () => {
  // The barrier is between GROUPS, and it is still a barrier. With both member
  // stages unit-complete but one dispatch still live, the join may not run and
  // s3 may not start.
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx), { hang: true });
  for (const u of ['1', '2']) { cover(fx, 'worker', `a${u}`, [u]); cover(fx, 'checker', `b${u}`, [u]); }

  let release: any;
  const held = new Promise((r) => { release = r; });
  ex.inflight.set('s2:extra', { promise: held, meta: { stage: 's2', role: 'checker', label: 'extra', covers: [], attempt: 1 }, startedAt: Date.now() });

  assert.equal(await ex.tick(), 'working');
  assert.deepEqual(gateRuns(fx), [], 'the join must not run over a group that is still working');
  assert.equal(inflightAt(ex, 's3').length, 0, 's3 must not start');

  release();
  ex.inflight.delete('s2:extra');
  await ex.tick();
  assert.deepEqual(gateRuns(fx), ['g1', 'g2'], 'and it runs the moment the group drains');
});

test('a skipped member does not hold the group and does not have its gates run', async () => {
  const fx = fixture();
  const ex = makeExecutor(fx, pipelinedStages(fx));
  ex.state.stage('s1').skipped = true;
  ex.state.save();
  assert.equal(await settle(ex), 'done');
  assert.deepEqual(gateRuns(fx), ['g2', 'g3']);
  assert.ok(!calls(fx).some((c) => c.startsWith('a')), 'a skipped stage dispatches nothing');
});

// ---------------------------------------------------------------------------
// Serial behaviour is unchanged where no pipeline is declared
// ---------------------------------------------------------------------------

test('with no pipeline declared the stage barrier and per-stage gates are exactly as before', async () => {
  const fx = fixture();
  const stages: any = pipelinedStages(fx);
  delete stages[0].pipeline; delete stages[1].pipeline;

  const ex = makeExecutor(fx, stages);
  await ex.tick();
  await Promise.allSettled([...ex.inflight.values()].map((d: any) => d.promise));
  await ex.tick();
  assert.deepEqual(gateRuns(fx), ['g1'], "a serial stage gates as soon as ITS units are done");
  assert.ok(!calls(fx).some((c) => c.startsWith('b')), 's2 waits for s1 to clear');
  assert.equal(await settle(ex), 'done');
  assert.deepEqual(gateRuns(fx), ['g1', 'g2', 'g3']);
});

// ---------------------------------------------------------------------------
// The spec refuses a table that says something it does not mean
// ---------------------------------------------------------------------------

const CTX: any = { run: 'r', repo: '/tmp', dispatchDir: '/tmp' };
const bare = (over: any = {}) => ({
  id: 's', label: 's', units: () => ['1'], pattern: /^x-/,
  plan: () => [], gates: () => [{ id: 'g', argv: ['true'] }], ...over,
});

test('a pipelined stage that does not declare its lane is refused', () => {
  const problems = validateStages([bare({ id: 'a', pipeline: 'p' }), bare({ id: 'b' })] as any, CTX);
  assert.ok(problems.some((p) => /must declare `role`/.test(p.message)),
    `expected the lane rule to fire, got ${JSON.stringify(problems)}`);
});

test('a pipeline name reused non-contiguously is refused, not silently split in two', () => {
  const problems = validateStages([
    bare({ id: 'a', pipeline: 'p', role: 'w' }),
    bare({ id: 'b' }),
    bare({ id: 'c', pipeline: 'p', role: 'w' }),
  ] as any, CTX);
  assert.ok(problems.some((p) => /not contiguous/.test(p.message)),
    `expected the contiguity rule to fire, got ${JSON.stringify(problems)}`);
});

test('a cohort that is not a function is refused', () => {
  const problems = validateStages([
    bare({ id: 'a', pipeline: 'p', role: 'w', cohort: ['1', '2'] }), bare({ id: 'b' }),
  ] as any, CTX);
  assert.ok(problems.some((p) => /`cohort` must be a function/.test(p.message)));
});

// ---------------------------------------------------------------------------
// The shipped table: which stages overlap is an owner decision, so assert it
// ---------------------------------------------------------------------------

test('the mathlib table declares exactly two overlap groups, over exactly these stages', async () => {
  const mod = await import('../stages/mathlib.mts');
  const byPipeline = new Map<string, string[]>();
  for (const s of mod.stages as any[]) {
    if (!s.pipeline) continue;
    byPipeline.set(s.pipeline, [...(byPipeline.get(s.pipeline) ?? []), s.id]);
  }
  assert.deepEqual([...byPipeline.keys()].sort(), ['read', 'scaffold']);
  assert.deepEqual(byPipeline.get('scaffold'), ['3-review', '3-fix', '3-recheck']);
  assert.deepEqual(byPipeline.get('read'), ['5-author', '6a-read', '6b-adjudicate']);
});

test('the do-not-relax stages are still barriers', async () => {
  // The snapshots, the splice, the cross-level audit, the judge sweep, step 8,
  // step 9 and the report. `4-baseline`, `6b-baseline` and `8-baseline` exist
  // BECAUSE a stage boundary is the only place their ordering can be guaranteed;
  // `6c-cross` edits items and would stale a verdict cast beside it — 97 rows,
  // once. `1-scaffold` and `2-assign` are here for a different reason: see the
  // cohort test below.
  const mod = await import('../stages/mathlib.mts');
  const serial = ['1-scaffold', '2-assign', '4-splice', '4-baseline', '6b-baseline',
    '6c-cross', '7-judge', '8-baseline', '8-adjudicate', '8-rejudge',
    '9-scope', '9-receipt', '9-close', '10-contract-close', '10-snapshot-v2',
    '10-pathway-sync-v2', '10-pathway-seed-v2', '10-pathway-author-v2',
    '10-stamps-v2', '10-readiness-v2', '10-owner-report-v2', '10-close-v2'];
  for (const id of serial) {
    const st: any = (mod.stages as any[]).find((s) => s.id === id);
    assert.ok(st, `${id} is missing from the table`);
    assert.equal(st.pipeline, undefined, `${id} must not be pipelined`);
  }
});

test('no pipeline group starts before the batch assignment it depends on', async () => {
  // THE INVARIANT THAT KILLED THE FIRST VERSION OF THIS FEATURE. Every
  // group-Alpha stage waits on a cohort, and a cohort is the Alpha's ASSIGNED
  // batches — which `2-assign` writes mid-run. `alphaGroups` falls back to
  // positional chunking before then, and that fallback is exactly what the
  // assignment stage exists to overrule. A group whose first member ran before
  // `2-assign` would hold batches for the wrong siblings.
  const mod: any = await import('../stages/mathlib.mts');
  const ids = mod.stages.map((s: any) => s.id);
  const assignAt = ids.indexOf('2-assign');
  assert.ok(assignAt >= 0, '2-assign must exist');
  for (const s of mod.stages) {
    if (!s.cohort) continue;
    assert.ok(ids.indexOf(s.id) > assignAt, `${s.id} uses a cohort but is not after 2-assign`);
    // ...and no group it belongs to may reach back before the barrier either.
    const members = mod.stages.filter((x: any) => x.pipeline && x.pipeline === s.pipeline);
    for (const m of members) {
      assert.ok(ids.indexOf(m.id) > assignAt,
        `${m.id} shares a pipeline with ${s.id} but starts before 2-assign`);
    }
  }
});

test("the read group's join runs before the snapshot that closes the impact window", async () => {
  // `6b-baseline` is the `--to` endpoint of the 6c blast-radius diff, so it must
  // photograph text that already passed the group's gates. Stage order is what
  // guarantees it: no member of a group is done until the join is green, and the
  // snapshot stage is strictly later.
  const mod: any = await import('../stages/mathlib.mts');
  const ids = mod.stages.map((s: any) => s.id);
  const readMembers = mod.stages.filter((s: any) => s.pipeline === 'read').map((s: any) => s.id);
  const lastRead = Math.max(...readMembers.map((id: string) => ids.indexOf(id)));
  assert.ok(ids.indexOf('6b-baseline') > lastRead,
    'the post-6b snapshot must come after every member of the read group');
  assert.equal(mod.stages[lastRead + 1].id, '6b-baseline',
    'and immediately after, so nothing edits items between the join and the snapshot');
});

test('every pipelined stage in the shipped table names a dispatcher lane', async () => {
  const mod = await import('../stages/mathlib.mts');
  const repo = process.env.AUTOPILOT_TEST_REPO ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
  for (const s of (mod.stages as any[]).filter((x) => x.pipeline)) {
    assert.equal(typeof s.role, 'string', `${s.id} declares a pipeline but no role`);
  }
  assert.deepEqual(validateStages(mod.stages as any, { run: 'frontier-14', repo, dispatchDir: '/tmp' }), []);
});

test('a group Alpha stage waits for the ASSIGNED group, not the positional fallback', async () => {
  // `cohort` must be the SAME grouping the plan fans out with, or the engine
  // waits for one set of batches and dispatches over another. At and after
  // `2-assign` that grouping is the assignment on disk, and it is deliberately
  // not the positional chunking — chunking is what split topology across two
  // Alphas.
  const mod: any = await import('../stages/mathlib.mts');
  const repo = mkdtempSync(join(tmpdir(), 'ap-cohort-'));
  mkdirSync(join(repo, 'research'), { recursive: true });
  for (const n of [1, 2, 3, 4, 5]) writeFileSync(join(repo, 'research', `r-batch-${n}.pages.json`), '[]');
  const ctx = { run: 'r', repo, dispatchDir: join(repo, 'dispatch') };

  // Before 2-assign: the fallback, which no pipelined stage is allowed to reach.
  assert.deepEqual(mod.alphaGroups(ctx).map((g: any) => g.covers.map(String)),
    [['1', '2', '3'], ['4', '5']]);

  // After 2-assign: a partition that disagrees with the fallback on every batch.
  writeFileSync(join(repo, 'research', 'r-alpha-groups.json'), JSON.stringify({
    groups: [{ label: 'a', covers: ['1', '4'] }, { label: 'b', covers: ['2', '3', '5'] }],
  }));
  for (const id of ['3-review', '3-recheck', '6b-adjudicate']) {
    const st = mod.stages.find((s: any) => s.id === id);
    assert.equal(typeof st.cohort, 'function', `${id} must declare a cohort`);
    assert.deepEqual(st.cohort(ctx, '4'), ['1', '4'], `${id} cohort ignored the assignment`);
    assert.deepEqual(st.cohort(ctx, '2'), ['2', '3', '5']);
  }
});
