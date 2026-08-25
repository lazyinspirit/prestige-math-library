// The rebuilt step 6 (owner, 2026-08-25): routing, per-batch independence, and
// the per-(gate, item) repair budget.
//
// WHAT THESE GUARD. Three properties, each of which was a live defect rather
// than a hypothetical:
//
//  * NO BATCH WAITS ON A SIBLING between step 5 and 6b. The first draft of the
//    stage table took ONE whole-level snapshot before `6a-read`, which is a
//    barrier by construction — the slowest author would have become the start
//    time of every reader. A test, not a comment, because the property is
//    invisible in the stage definitions unless you know what `pipeline` and
//    `cohort` do together.
//  * THE ADJUDICATOR'S QUEUE IS `touched u flagged` AND NOTHING ELSE. An
//    untouched, unflagged item going to an Alpha is the cost this rebuild
//    removes; a touched item NOT going is a defect escaping.
//  * ONE STUBBORN ITEM DOES NOT SPEND THE LEVEL'S BUDGET. The old stage-wide
//    counter was consumed one GATE per round, so four red gates exhausted three
//    rounds before reaching the fourth — twice on frontier-18.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

import { step6Stages } from '../stages/mathlib.step6.mts';
import { Executor } from '../src/executor.mts';

const REPO = join(import.meta.dirname, '..', '..', '..');

// --------------------------------------------------------------------------
// A stub of the gate builders `mathlib.mts` passes in. The factory must not
// declare gates of its own, so a stub is enough — and if the factory ever
// starts building one itself, these stubs stop matching and the test says so.
const gate = (id: string, argv: any, extra: any = {}) => ({ id, argv, ...extra });
const deps = {
  gate,
  repoWide: () => [gate('precheck', ['node', 'x']), gate('splice-verify', ['node', 'y'])],
  contractGates: (_c: any, o: any) => [gate('risk-report', ['node', 'r', ...(o?.reviewed ? ['--require-reviewed'] : [])])],
  coverageGates: () => [gate('coverage-1', ['node', 'c'])],
  policyItemGate: () => gate('content-policy-items', ['node', 'p']),
  urlGate: () => gate('url-liveness', ['node', 'u']),
  impactGate: () => gate('impact-audit', ['node', 'i']),
  batches: () => ['1', '2', '3'],
  alphaGroups: () => [{ label: 'a', covers: ['1', '2'] }, { label: 'b', covers: ['3'] }],
  alphaCohort: (_c: any, u: string) => (['1', '2'].includes(String(u)) ? ['1', '2'] : ['3']),
  resultPattern: (role: string, label: string) => new RegExp(`^${role}-(?:${role}-)?(?:${label})\\.result\\.json$`),
  touchesPath: (ctx: any) => `research/${ctx.run}-touches.json`,
  MECHANICAL_REPAIRS: { 'splice-verify': () => ['tools/splice-plan.mjs'] },
  mechanicalRepair: async () => ({ outcome: 'clean' }),
  isEdgeDecision: async () => false,
  dispatchEdgeAdjudication: () => {},
};

const stages = step6Stages(deps);
const byId = (id: string) => stages.find((s: any) => s.id === id)!;

// --------------------------------------------------------------------------
test('every stage from the baseline to adjudication is in the read pipeline', () => {
  for (const id of ['6a-baseline', '6a-read', '6a-split', '6a-refute', '6b-adjudicate']) {
    assert.equal(byId(id).pipeline, 'read',
      `${id} must carry pipeline:'read' or it becomes a whole-level barrier and every batch waits for the slowest author`);
  }
});

test('no stage between step 5 and 6b holds a batch for a sibling', () => {
  // The cohort is what decides waiting. A stage whose cohort is the whole batch
  // list holds every unit until every unit is ready, which is a barrier wearing
  // a pipeline label.
  for (const id of ['6a-baseline', '6a-split', '6a-refute']) {
    const s: any = byId(id);
    assert.equal(typeof s.cohort, 'function', `${id} must declare a cohort`);
    assert.deepEqual(s.cohort({}, '2'), ['2'],
      `${id} must cohort on its own batch alone — a wider cohort makes it wait on siblings`);
  }
  // 6b is the ONE exception and it is intentional: an Alpha dispatch declares
  // coverage of its whole group, so the group may not start until every batch
  // it will claim is ready. It still does not wait on another group.
  assert.deepEqual((byId('6b-adjudicate') as any).cohort({}, '1'), ['1', '2']);
  assert.deepEqual((byId('6b-adjudicate') as any).cohort({}, '3'), ['3']);
});

test('the whole-level barriers sit after 6b, never before it', () => {
  const order = stages.map((s: any) => s.id);
  const wholeLevel = ['6b-baseline', '6c-edges', '6c-cross'];
  const firstBarrier = Math.min(...wholeLevel.map((id) => order.indexOf(id)));
  assert.ok(order.indexOf('6b-adjudicate') < firstBarrier,
    'a whole-level stage before 6b-adjudicate would serialise the read pipeline');
  for (const id of wholeLevel) {
    assert.equal((byId(id) as any).pipeline, undefined, `${id} must not be pipelined`);
  }
});

test('both adjudicating stages take three tries per item, not per stage', () => {
  for (const id of ['6b-adjudicate', '6c-cross']) {
    const s: any = byId(id);
    assert.equal(s.perItemFixBudget, 3, `${id} must give each item three tries at each gate`);
    assert.equal(s.maxFixRounds, undefined,
      `${id} must NOT also set maxFixRounds — a stage-wide cap would bound it from the other direction `
      + 'and reinstate the one-gate-per-round arithmetic this replaces');
    assert.equal(typeof s.onGateFailure, 'function', `${id} must route its gate failures`);
  }
});

test('6c-cross has a failure route at all — it used to have none', () => {
  const s: any = byId('6c-cross');
  const ids = s.gates({ run: 'r' }).map((g: any) => g.id);
  assert.ok(ids.includes('cross-group-edges'), '6c must gate its own verdicts');
  assert.ok(ids.length > 5, '6c still runs the final whole-level battery');
  assert.equal(typeof s.onGateFailure, 'function');
});

test('the refuter stage is read-only by role and produces a gated artifact', () => {
  const s: any = byId('6a-refute');
  assert.equal(s.role, 'refuter');
  const plan = s.plan({ run: 'r' }, ['2']);
  assert.equal(plan[0].role, 'refuter');
  assert.equal(plan[0].brief, 'briefs/refuter.md');
  assert.equal(s.artifacts({ run: 'r' }, '2'), 'research/r-refute-2.json',
    'the refuters\' coverage was unverifiable until it had an artifact');
  assert.ok(s.gates({ run: 'r' }).some((g: any) => g.id === 'step6-collect'));
});

test('no stage waives its gates without a stated reason, and none waives silently', () => {
  for (const s of stages as any[]) {
    if (s.gatesWaived) {
      assert.ok(typeof s.gatesWaived === 'string' && s.gatesWaived.length > 60,
        `${s.id} waives its gates with too thin a reason`);
      assert.equal(s.gates, undefined, `${s.id} both waives and declares gates`);
    } else {
      assert.equal(typeof s.gates, 'function', `${s.id} must declare gates or waive them explicitly`);
      assert.ok(s.gates({ run: 'r' }).length > 0, `${s.id} produced an empty gate list`);
    }
  }
});

// --------------------------------------------------------------------------
// The id extractor. Getting this wrong in either direction is expensive: too
// loose and citation labels become "items" with their own budgets; too tight
// and every gate falls back to one shared counter.
test('item ids are read out of gate output, and citation labels are not', () => {
  const named = Executor.itemsNamedBy({
    id: 'proof-contract',
    ok: false,
    output: 'ERROR boundary-evidence-unanchored [thm-monotone-lattice-paths-in-a-rectangle]: items/x.md\n'
      + 'ERROR smoke-assertion-mismatch [lem-every-walk-in-a-simple-graph]: step [F1] cites [L3] at [step 2.1]',
  } as any);
  assert.deepEqual(named.sort(), [
    'lem-every-walk-in-a-simple-graph',
    'thm-monotone-lattice-paths-in-a-rectangle',
  ]);
});

test('a level-scoped gate names no item and falls back to one counter', () => {
  assert.deepEqual(Executor.itemsNamedBy({ id: 'validate-plan', ok: false, why: 'FAIL', output: 'FAIL' } as any), []);
});

// --------------------------------------------------------------------------
// The routing tool, end to end on a throwaway repo layout.
test('step6-scope routes touched, untouched and flagged exactly once each', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step6-'));
  try {
    mkdirSync(join(dir, 'research'), { recursive: true });
    mkdirSync(join(dir, 'items'), { recursive: true });
    mkdirSync(join(dir, 'tools'), { recursive: true });
    // The tool anchors paths to its own parent, so it has to live in the fixture.
    execFileSync('cp', [join(REPO, 'tools', 'step6-scope.mjs'), join(dir, 'tools')]);

    const ids = ['lem-a-b-c', 'thm-d-e-f', 'cex-g-h-i'];
    for (const id of ids) writeFileSync(join(dir, 'items', `${id}.md`), `original ${id}\n`);
    writeFileSync(join(dir, 'research', 'r-batch-1.pages.json'),
      JSON.stringify([{ id: 'page-a', kind: 'A', items: ids }]));
    writeFileSync(join(dir, 'research', 'r-alpha-groups.json'),
      JSON.stringify([{ label: 'a', covers: ['1'] }]));

    const run = (...a: string[]) =>
      execFileSync('node', [join(dir, 'tools', 'step6-scope.mjs'), ...a], { cwd: dir, encoding: 'utf8' });

    run('hash', '--run', 'r', '--batch', '1', '--label', 'pre');
    // The "reader" edits one item and adds nothing.
    writeFileSync(join(dir, 'items', 'thm-d-e-f.md'), 'repaired by the reader\n');
    run('hash', '--run', 'r', '--batch', '1', '--label', 'post');
    const split = run('split', '--run', 'r', '--batch', '1');
    assert.match(split, /1 touched by the reader, 2 untouched/);

    // A refuter flags one untouched item, and tries to flag the touched one.
    writeFileSync(join(dir, 'research', 'r-refute-1.json'), JSON.stringify({
      batch: '1', at: '2026-08-25T00:00:00Z', opened: ids,
      flagged: [{ id: 'cex-g-h-i' }, { id: 'thm-d-e-f' }],
    }));
    const collected = run('collect', '--run', 'r');
    assert.match(collected, /collected 1 flagged item/,
      'a flag on an item the reader already repaired must be ignored — it is text somebody else owns');

    const scope = JSON.parse(execFileSync('cat', [join(dir, 'research', 'r-step6-scope.json')], { encoding: 'utf8' }));
    const row = scope.batches['1'];
    assert.deepEqual(row.touched, ['thm-d-e-f']);
    assert.deepEqual(row.flagged, ['cex-g-h-i']);
    assert.deepEqual(row.untouched.sort(), ['cex-g-h-i', 'lem-a-b-c']);
    // Every item routed exactly once, and the adjudicator's queue is the union.
    assert.equal(row.touched.length + row.untouched.length, ids.length);
    const queue = new Set([...row.touched, ...row.flagged]);
    assert.equal(queue.size, 2);
    assert.ok(!queue.has('lem-a-b-c'), 'an untouched, unflagged item must go straight to the gates');

    assert.match(run('check', '--run', 'r', '--phase', 'adjudicate'), /3 item\(s\) routed, 2 owed/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a split refuses to guess when a hash file is missing', () => {
  const dir = mkdtempSync(join(tmpdir(), 'step6-'));
  try {
    mkdirSync(join(dir, 'research'), { recursive: true });
    mkdirSync(join(dir, 'items'), { recursive: true });
    mkdirSync(join(dir, 'tools'), { recursive: true });
    execFileSync('cp', [join(REPO, 'tools', 'step6-scope.mjs'), join(dir, 'tools')]);
    writeFileSync(join(dir, 'research', 'r-batch-1.pages.json'),
      JSON.stringify([{ id: 'p', kind: 'A', items: ['lem-a-b-c'] }]));
    assert.throws(
      () => execFileSync('node', [join(dir, 'tools', 'step6-scope.mjs'), 'split', '--run', 'r', '--batch', '1'],
        { cwd: dir, encoding: 'utf8', stdio: 'pipe' }),
      /no "pre" hash file/,
      'a missing baseline must stop the split, never default every item to one side');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
