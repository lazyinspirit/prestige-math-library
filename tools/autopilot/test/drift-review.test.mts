// The step-0 drift review must be dispatchable and its gate must be able to
// fail.
//
// WHY. `autopilot plan` wrote the drift-review task file and printed
// "dispatched as the first audit node" — and for two days no stage dispatched
// it and no gate read its report. A never-invoked node: the review would
// silently not have happened on every future run, and the defect class it
// exists to catch (a track design requiring a prerequisite the spec never
// declared) was PRESENT in frontier-15's scope when this was found. These
// tests pin both halves: stage 1 owns the `drift` unit, and
// tools/drift-review-check.mjs rejects every degenerate report shape.
//
// Fixtures live in a temp dir with its own research/ subtree — never in the
// live namespace; a fixture the engine can read is an input, not a fixture.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import { stages } from '../stages/mathlib.mts';
import { identityPlaceholders } from '../src/doctor.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'drift-review-check.mjs');

// ---------------------------------------------------------------- the gate

/** A fixture repo: research/<run>-scope-ledger.json plus an optional report. */
function fixture(ledgerPages: any[] | null, report: string | null) {
  const dir = mkdtempSync(join(tmpdir(), 'drift-'));
  mkdirSync(join(dir, 'research'));
  if (ledgerPages !== null) {
    writeFileSync(join(dir, 'research', 'demo-scope-ledger.json'),
      JSON.stringify({ run: 'demo', pages: ledgerPages }, null, 2));
  }
  if (report !== null) {
    writeFileSync(join(dir, 'research', 'demo-alpha-step0-drift.md'), report);
  }
  return dir;
}

const check = (dir: string) => spawnSync(
  process.execPath, [TOOL, '--run', 'demo'],
  { cwd: dir, encoding: 'utf8', timeout: 60_000 });

const PAGES = [
  { id: 'alpha-page', kind: 'A', batch: '1' },
  { id: 'alpha-page-examples', kind: 'B', batch: '1' },
  { id: 'beta-page', kind: 'A', batch: '2' },
  { id: 'beta-page-examples', kind: 'B', batch: '2' },
];

test('a complete report with no blocked edges passes, and B pages are not demanded', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'read the design; closure covers it.', 'VERDICT: no-drift',
    '### beta-page', 'design names lower-order dep; applied.',
    'VERDICT: drift-applied — added gamma-page (order 3)',
  ].join('\n'));
  const r = check(dir);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /2 page\(s\) reviewed, 1 spec edit\(s\) applied/);
  rmSync(dir, { recursive: true, force: true });
});

test('a missing report fails — the review not having run is not a pass', () => {
  const dir = fixture(PAGES, null);
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-no-report/);
  rmSync(dir, { recursive: true, force: true });
});

test('an A page with no section fails by name', () => {
  const dir = fixture(PAGES, '### alpha-page\nVERDICT: no-drift\n');
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-missing-page: no `### beta-page`/);
  rmSync(dir, { recursive: true, force: true });
});

test('a drift-blocked verdict fails the gate — a blocked edge stops the run', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: no-drift',
    '### beta-page', 'VERDICT: drift-blocked — needs delta-page at HIGHER order 99',
  ].join('\n'));
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-blocked: beta-page/);
  rmSync(dir, { recursive: true, force: true });
});

test('two VERDICT lines in one section fail — exactly one is the contract', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: no-drift', 'VERDICT: drift-applied — added x (order 1)',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'));
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-verdict: alpha-page has 2/);
  rmSync(dir, { recursive: true, force: true });
});

test('a drift-applied verdict naming no edge fails', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: drift-applied —',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'));
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-detail: alpha-page/);
  rmSync(dir, { recursive: true, force: true });
});

test('an empty ledger fails rather than making every report complete', () => {
  const dir = fixture([], '### x\nVERDICT: no-drift\n');
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-empty-ledger/);
  rmSync(dir, { recursive: true, force: true });
});

// ---------------------------------------------------------------- the stage

/** ctx pointing at a fixture research dir with two batch manifests, so
 *  batches() returns ['1','2'] without touching the live namespace. */
function stageCtx() {
  const dir = mkdtempSync(join(tmpdir(), 'drift-stage-'));
  mkdirSync(join(dir, 'research'));
  for (const b of ['1', '2']) {
    writeFileSync(join(dir, 'research', `demo-batch-${b}.pages.json`), '[]');
  }
  return { dir, ctx: { run: 'demo', repo: dir, dispatchDir: join(dir, 'research', 'demo-dispatch') } };
}

test('stage 1 owes the drift unit ahead of every batch', () => {
  const { dir, ctx } = stageCtx();
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  assert.deepEqual(s1.units(ctx), ['drift', '1', '2']);
  rmSync(dir, { recursive: true, force: true });
});

test('stage 1 routes drift to an Alpha verification dispatch and batches to Betas', () => {
  const { dir, ctx } = stageCtx();
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  const plans = s1.plan(ctx, ['drift', '1']);
  const drift = plans.find((p: any) => p.label === 'drift-review');
  assert.equal(drift.role, 'alpha');
  assert.equal(drift.job, 'verification');
  assert.equal(drift.brief, 'briefs/alpha-drift.md');
  assert.deepEqual(drift.covers, ['drift']);
  const beta = plans.find((p: any) => p.label === 'batch-1');
  assert.equal(beta.role, 'beta');
  assert.equal(beta.job, 'scaffolding');
  rmSync(dir, { recursive: true, force: true });
});

test('stage 1 pattern admits exactly its two result shapes', () => {
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  assert.ok(s1.pattern.test('beta-batch-3.result.json'));
  assert.ok(s1.pattern.test('alpha-drift-review.result.json'));
  // a fix-stage result must not count as scaffold coverage
  assert.ok(!s1.pattern.test('beta-fix-batch-3.result.json'));
  // nor may the drift REVIEW be satisfied by some other alpha result
  assert.ok(!s1.pattern.test('alpha-a.result.json'));
  assert.ok(!s1.pattern.test('alpha-drift-review.log'));
});

// The template defect that blocked stage 1 on frontier-15: an identity
// placeholder inside a dispatched prompt. The doctor scan and the dispatcher
// share this token grammar; the test pins both the hit and the near-misses.
test('identityPlaceholders flags <n>/<k> and nothing else', () => {
  assert.deepEqual(identityPlaceholders('added <page-id> (order <n>)'), ['<n>']);
  assert.deepEqual(identityPlaceholders('wave <k> of the audit'), ['<k>']);
  // letters-only inside the brackets: hyphenated placeholders are legal prose
  assert.deepEqual(identityPlaceholders('<a-page-id> and <output> and (order N)'), []);
  assert.deepEqual(identityPlaceholders('plain n and k, no brackets'), []);
});

test('stage 1 declares the drift gate, and it names the run', () => {
  const { dir, ctx } = stageCtx();
  const s1: any = stages.find((s: any) => s.id === '1-scaffold');
  const g = s1.gates(ctx).find((g: any) => g.id === 'drift-review');
  assert.ok(g, 'no drift-review gate on stage 1');
  const argv = typeof g.argv === 'function' ? g.argv() : g.argv;
  assert.deepEqual(argv.slice(0, 2), ['node', 'tools/drift-review-check.mjs']);
  assert.ok(argv.includes('demo'));
  rmSync(dir, { recursive: true, force: true });
});
