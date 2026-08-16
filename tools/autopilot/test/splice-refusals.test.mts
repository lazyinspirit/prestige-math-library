// A splice refusal is output, not failure — and the decision gets a lane.
//
// WHY. splice-plan correctly refuses to transcribe a `requires` edge the
// plan does not carry — but it exited 1, so the lane burned three attempts
// on the same deterministic refusal, and the adjudication its own message
// demanded ("an Alpha decides") had no dispatch route. frontier-15 hit this
// live with three legitimate backward edges. These tests pin the new
// contract: refusals exit 0 into an artifact, clean batches still splice,
// the refusing batch is withheld whole, the gate mode holds the stage, and
// stage 4 routes the failure to an adjudication Alpha.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import { stages } from '../stages/mathlib.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'splice-plan.mjs');

/** A fixture repo: a two-page spec, one clean batch, one refusing batch. */
function fixture() {
  const dir = mkdtempSync(join(tmpdir(), 'splice-'));
  mkdirSync(join(dir, 'research'));
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify({
    pages: [
      { order: 1, id: 'clean-page', kind: 'A', requires: [], items: [] },
      { order: 2, id: 'refusing-page', kind: 'A', requires: [], items: [] },
      { order: 0.5, id: 'target-page', kind: 'A', requires: [], items: [] },
    ],
  }, null, 2));
  writeFileSync(join(dir, 'research', 'demo-batch-1.pages.json'), JSON.stringify([
    { id: 'clean-page', kind: 'A', requires: [], items: [{ id: 'def-a' }] },
  ]));
  writeFileSync(join(dir, 'research', 'demo-batch-2.pages.json'), JSON.stringify([
    { id: 'refusing-page', kind: 'A', requires: ['target-page'], items: [{ id: 'def-b' }] },
  ]));
  return dir;
}

const run = (dir: string, args: string[]) => spawnSync(process.execPath, [TOOL, '--run', 'demo', ...args],
  { cwd: dir, encoding: 'utf8', timeout: 60_000 });

test('a refusal exits 0, splices the clean batch, withholds the refusing one', () => {
  const dir = fixture();
  const r = run(dir, ['--all']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /batch 2 WITHHELD/);
  // clean batch: receipt written, items spliced into the spec
  assert.ok(existsSync(join(dir, 'research', 'demo-splice-1.json')));
  assert.ok(!existsSync(join(dir, 'research', 'demo-splice-2.json')), 'a withheld batch gets no receipt');
  const spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  assert.equal(spec.pages.find((p: any) => p.id === 'clean-page').items.length, 1);
  assert.equal(spec.pages.find((p: any) => p.id === 'refusing-page').items.length, 0, 'withheld batch must not splice');
  // the artifact carries the edge
  const ref = JSON.parse(readFileSync(join(dir, 'research', 'demo-splice-refusals.json'), 'utf8'));
  assert.deepEqual(ref.refusals, [{ batch: '2', page: 'refusing-page', requires: ['target-page'] }]);
  rmSync(dir, { recursive: true, force: true });
});

test('the gate mode: 1 while edges pend, 2 when the splice never ran, 0 when clear', () => {
  const dir = fixture();
  assert.equal(run(dir, ['--refusals-gate']).status, 2, 'absent artifact is never a pass');
  run(dir, ['--all']);
  const pending = run(dir, ['--refusals-gate']);
  assert.equal(pending.status, 1);
  assert.match(pending.stderr, /splice-refusal: batch 2 refusing-page/);
  // adjudicate: the spec gains the edge; re-splice clears
  const spec = JSON.parse(readFileSync(join(dir, 'research', 'plan-spec.json'), 'utf8'));
  spec.pages.find((p: any) => p.id === 'refusing-page').requires = ['target-page'];
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify(spec, null, 2));
  assert.equal(run(dir, ['--all']).status, 0);
  assert.equal(run(dir, ['--refusals-gate']).status, 0);
  assert.ok(existsSync(join(dir, 'research', 'demo-splice-2.json')), 'the withheld batch splices after adjudication');
  rmSync(dir, { recursive: true, force: true });
});

test('real errors still exit 1 and write nothing', () => {
  const dir = fixture();
  // duplicate item id across two pages in one manifest
  writeFileSync(join(dir, 'research', 'demo-batch-1.pages.json'), JSON.stringify([
    { id: 'clean-page', kind: 'A', requires: [], items: [{ id: 'def-a' }] },
    { id: 'refusing-page', kind: 'A', requires: [], items: [{ id: 'def-a' }] },
  ]));
  const r = run(dir, ['--all']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /duplicate item id/);
  assert.ok(!existsSync(join(dir, 'research', 'demo-splice-1.json')));
  rmSync(dir, { recursive: true, force: true });
});

test('stage 4 routes the refusals gate to an adjudication Alpha', async () => {
  const s4: any = stages.find((s: any) => s.id === '4-splice');
  const ctx = { run: 'demo', repo: '/nonexistent' };
  assert.ok(s4.gates(ctx).some((g: any) => g.id === 'splice-refusals'));
  assert.equal(s4.maxFixRounds, 2);
  const started: any[] = [];
  await s4.onGateFailure({ ctx, executor: { start: (_s: any, p: any) => started.push(p) }, stage: s4, round: 1, failure: { id: 'splice-refusals', why: '' } });
  assert.equal(started.length, 1);
  assert.equal(started[0].job, 'adjudication');
  assert.equal(started[0].label, 'step4-adjudicate');
  // and every other failure id is left to the default blocker path
  await s4.onGateFailure({ ctx, executor: { start: (_s: any, p: any) => started.push(p) }, stage: s4, round: 1, failure: { id: 'validate-plan', why: '' } });
  assert.equal(started.length, 1);
});
