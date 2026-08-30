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

import { stages, MECHANICAL_REPAIRS, dispatchDriftRereview } from '../stages/mathlib.mts';
import { identityPlaceholders } from '../src/doctor.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'drift-review-check.mjs');

// ---------------------------------------------------------------- the gate

/** The world the gate reads, not just the report.
 *
 *  The gate began as a pure prose check and could say nothing about what the
 *  review DID — which is how a `requires` edge to an unbuilt page reached
 *  frontier-16 and blocked a whole track. It now reads `plan-spec.json` and
 *  `library/`, so a fixture with only a ledger and a report is no longer a
 *  model of anything it runs against. Every fixture carries all three, and the
 *  defaults are a consistent world: `beta-page` legitimately requires the
 *  published `gamma-page`, which sits below it.
 */
const SPEC_PAGES = [
  { id: 'gamma-page', kind: 'A', order: 3, requires: [] },
  { id: 'alpha-page', kind: 'A', order: 10, requires: [] },
  { id: 'alpha-page-examples', kind: 'B', order: 11, requires: [] },
  { id: 'beta-page', kind: 'A', order: 20, requires: ['gamma-page'] },
  { id: 'beta-page-examples', kind: 'B', order: 21, requires: [] },
];

function fixture(ledgerPages: any[] | null, report: string | null,
  { specPages = SPEC_PAGES, published = ['gamma-page'] }: { specPages?: any[]; published?: string[] } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'drift-'));
  mkdirSync(join(dir, 'research'));
  if (ledgerPages !== null) {
    writeFileSync(join(dir, 'research', 'demo-scope-ledger.json'),
      JSON.stringify({ run: 'demo', pages: ledgerPages }, null, 2));
  }
  if (report !== null) {
    writeFileSync(join(dir, 'research', 'demo-alpha-step0-drift.md'), report);
  }
  writeFileSync(join(dir, 'research', 'plan-spec.json'), JSON.stringify({ pages: specPages }, null, 2));
  mkdirSync(join(dir, 'library', 'demo'), { recursive: true });
  for (const id of published) {
    writeFileSync(join(dir, 'library', 'demo', `${id}.md`), `id: ${id}\nstatus: published\n`);
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

// A REPORT CLAIMING AN EDIT PRODUCES THE SAME FILE AS ONE THAT MADE IT. That is
// why drift-applied is verified against the spec, and drift-reordered has to be
// too: `drift-check-forward-edge` only walks the edges a drift-applied verdict
// names, so an unmade reorder passed unseen until this test.
test('drift-reordered is verified against the spec, not taken on trust', () => {
  const moved = SPEC_PAGES.map((p) => (p.id === 'alpha-page' ? { ...p, order: 30 } : p));

  // the reorder the report claims IS true of the spec
  const ok = fixture(PAGES, [
    '### alpha-page', 'moved above its prerequisite.',
    'VERDICT: drift-reordered — `alpha-page` (order 10 -> 30)',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'), { specPages: moved });
  assert.equal(check(ok).status, 0);
  rmSync(ok, { recursive: true, force: true });

  // the same report against a spec that was never edited
  const stale = fixture(PAGES, [
    '### alpha-page', 'moved above its prerequisite.',
    'VERDICT: drift-reordered — `alpha-page` (order 10 -> 30)',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'));
  const r = check(stale);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-not-reordered: alpha-page .* but .* carries order 10/);
  rmSync(stale, { recursive: true, force: true });

  // a reorder naming no move at all
  const vague = fixture(PAGES, [
    '### alpha-page', 'VERDICT: drift-reordered — moved it up a bit',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'));
  const v = check(vague);
  assert.equal(v.status, 1);
  assert.match(v.stderr, /drift-check-detail: alpha-page/);
  rmSync(vague, { recursive: true, force: true });
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

// ------------------------------------------- the edges, not just the prose
//
// frontier-16: the review read a design sentence saying CA-5 cites the FTA
// statement "once that predecessor is authored", and applied that conditional
// future citation as a present `requires` edge to a planned, unauthored page.
// validate-plan passed (backward edge, target has no item list); this gate
// passed (well-formed prose); and the citing page — plus the 23 pairs chaining
// through it — became unbuildable, discovered only by re-running `frontier`,
// which nothing does after step 0.

test('an edge to a page that is neither published nor built by this run fails', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: no-drift',
    '### beta-page', 'VERDICT: drift-applied — added delta-page (order 5)',
  ].join('\n'), {
    specPages: [...SPEC_PAGES.filter((p) => p.id !== 'beta-page'),
      { id: 'beta-page', kind: 'A', order: 20, requires: ['gamma-page', 'delta-page'] },
      { id: 'delta-page', kind: 'A', order: 5, requires: [] }],
    published: ['gamma-page'],   // delta-page is planned but unbuilt
  });
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-unbuildable-edge: beta-page requires `delta-page`/);
  assert.match(r.stderr, /neither published nor built by this run/);
  rmSync(dir, { recursive: true, force: true });
});

test('a page built by this run satisfies an edge, even though nothing is published yet', () => {
  // The run's own A pages are legitimate targets: they will exist when it ends.
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: no-drift',
    '### beta-page', 'VERDICT: drift-applied — added alpha-page (order 10)',
  ].join('\n'), {
    specPages: [...SPEC_PAGES.filter((p) => p.id !== 'beta-page'),
      { id: 'beta-page', kind: 'A', order: 20, requires: ['gamma-page', 'alpha-page'] }],
  });
  const r = check(dir);
  assert.equal(r.status, 0, r.stderr);
  rmSync(dir, { recursive: true, force: true });
});

test('a rescope verdict fails until its named target is materialised in the scope ledger', () => {
  const report = [
    '### alpha-page',
    'its real prerequisite is planned but unpublished, so build that foundation instead.',
    'VERDICT: drift-rescoped — build delta-page (order 5) instead',
    '### beta-page',
    'VERDICT: no-drift',
  ].join('\n');
  const specPages = [
    ...SPEC_PAGES,
    { id: 'delta-page', kind: 'A', order: 5, requires: [] },
    { id: 'delta-page-examples', kind: 'B', order: 6, requires: ['delta-page'] },
  ];

  const stale = fixture(PAGES, report, { specPages });
  const before = check(stale);
  assert.equal(before.status, 1);
  assert.match(before.stderr, /drift-check-not-materialised: delta-page/);
  rmSync(stale, { recursive: true, force: true });

  const applied = fixture([
    { id: 'delta-page', kind: 'A', batch: '1' },
    { id: 'delta-page-examples', kind: 'B', batch: '1' },
  ], report, { specPages });
  const after = check(applied);
  assert.equal(after.status, 0, after.stderr);
  rmSync(applied, { recursive: true, force: true });
});

test('a verdict claiming an edge the spec does not carry fails', () => {
  // A report claiming an edit it did not make produces the same file as one
  // that made it — the step-3 recheck's failure mode, one stage earlier.
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: no-drift',
    '### beta-page', 'VERDICT: drift-applied — added gamma-page (order 3), epsilon-page (order 4)',
  ].join('\n'), {
    specPages: [...SPEC_PAGES, { id: 'epsilon-page', kind: 'A', order: 4, requires: [] }],
    published: ['gamma-page', 'epsilon-page'],
  });
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-not-applied: beta-page reports adding `epsilon-page`/);
  rmSync(dir, { recursive: true, force: true });
});

test('an applied edge pointing forward fails — reading order is the owner\'s', () => {
  const dir = fixture(PAGES, [
    '### alpha-page', 'VERDICT: drift-applied — added beta-page (order 20)',
    '### beta-page', 'VERDICT: no-drift',
  ].join('\n'), {
    specPages: [...SPEC_PAGES.filter((p) => p.id !== 'alpha-page'),
      { id: 'alpha-page', kind: 'A', order: 10, requires: ['beta-page'] }],
    published: ['gamma-page'],
  });
  const r = check(dir);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /drift-check-forward-edge: alpha-page \(order 10\) requires `beta-page` \(order 20\)/);
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

// THE DRIFT REVIEW IS ITS OWN STAGE, AHEAD OF THE BETAS (owner rulings,
// 2026-08-24). It used to be the `drift` unit of `1-scaffold`, running
// alongside the Betas. Once the Alpha could mint, reorder and rescope, a
// decision that changes WHICH PAGES THE RUN BUILDS could no longer be taken
// while ten Betas were already scaffolding against the old set — `drift-apply`
// refuses a scaffolded run, so the automation would have deadlocked on exactly
// the class of decision it was built to handle. These three tests pin the
// ordering, because a later edit that merges the stages back would restore the
// deadlock silently.
test('the drift review is a stage of its own, owed before any batch', () => {
  const { dir, ctx } = stageCtx();
  const ids = stages.map((s: any) => s.id);
  assert.ok(ids.indexOf('1-drift') >= 0, 'no 1-drift stage');
  assert.ok(ids.indexOf('1-drift') < ids.indexOf('1-scaffold'),
    '1-drift must precede 1-scaffold, or a rescope lands on scaffolded work');
  const drift: any = stages.find((s: any) => s.id === '1-drift');
  const scaffold: any = stages.find((s: any) => s.id === '1-scaffold');
  assert.deepEqual(drift.units(ctx), ['drift']);
  // The scaffold stage owes batches ONLY — a drift unit left here would let a
  // Beta start before the review that may rescope it.
  assert.deepEqual(scaffold.units(ctx), ['1', '2']);
  rmSync(dir, { recursive: true, force: true });
});

test('1-drift routes to an Alpha verification dispatch; 1-scaffold to Betas', () => {
  const { dir, ctx } = stageCtx();
  const drift: any = stages.find((s: any) => s.id === '1-drift');
  const [d] = drift.plan(ctx, ['drift']);
  assert.equal(d.label, 'drift-review');
  assert.equal(d.role, 'alpha');
  assert.equal(d.job, 'verification');
  assert.equal(d.brief, 'briefs/alpha-drift.md');
  assert.deepEqual(d.covers, ['drift']);

  const scaffold: any = stages.find((s: any) => s.id === '1-scaffold');
  const [b] = scaffold.plan(ctx, ['1']);
  assert.equal(b.label, 'batch-1');
  assert.equal(b.role, 'beta');
  assert.equal(b.job, 'scaffolding');
  rmSync(dir, { recursive: true, force: true });
});

test('each stage-1 pattern admits exactly its own result shape', () => {
  const drift: any = stages.find((s: any) => s.id === '1-drift');
  const scaffold: any = stages.find((s: any) => s.id === '1-scaffold');

  assert.ok(drift.pattern.test('alpha-drift-review.result.json'));
  // the drift review may not be satisfied by some other alpha result
  assert.ok(!drift.pattern.test('alpha-a.result.json'));
  assert.ok(!drift.pattern.test('alpha-drift-review.log'));
  // nor by a Beta's scaffold
  assert.ok(!drift.pattern.test('beta-batch-3.result.json'));

  assert.ok(scaffold.pattern.test('beta-batch-3.result.json'));
  // a fix-stage result must not count as scaffold coverage
  assert.ok(!scaffold.pattern.test('beta-fix-batch-3.result.json'));
  // and the drift review must no longer cover a scaffold unit
  assert.ok(!scaffold.pattern.test('alpha-drift-review.result.json'));
});

test('1-drift repairs a mint/rescope verdict mechanically, via drift-apply', () => {
  const drift: any = stages.find((s: any) => s.id === '1-drift');
  // The gate the repair hangs off, and the repair itself. An Alpha that wrote
  // manifests would be an Alpha driving a stage transition; the bookkeeping is
  // a function of files on disk, so it is code.
  assert.ok(MECHANICAL_REPAIRS['drift-review'], 'no mechanical repair for the drift gate');
  const argv = MECHANICAL_REPAIRS['drift-review']({ run: 'demo', repo: '/tmp' } as any);
  assert.deepEqual(argv, ['tools/drift-apply.mjs', '--run', 'demo']);
  // Two rounds, two DIFFERENT repairs: materialise the decision, then — if a
  // blocked verdict is what remains — send the stale report back to an Alpha.
  assert.equal(drift.maxFixRounds, 2);
});

// The deadlock this closes: a report failing the gate for a finding that is no
// longer true, with nothing able to rewrite it. The review had returned exit 0,
// so its unit stayed covered and no retry re-armed it.
test('a blocked verdict re-dispatches the drift review; other residue does not', () => {
  const started: any[] = [];
  const executor = { start: (_s: any, d: any) => started.push(d) };
  const args = { ctx: { run: 'demo', repo: '/tmp' }, executor, stage: {}, round: 2 };

  const gate = (output: string) => ({ id: 'drift-review', output });
  assert.equal(dispatchDriftRereview({ ...args, failure: gate('ERROR drift-check-blocked: p — x') }), true);
  assert.equal(started.length, 1);
  assert.equal(started[0].role, 'alpha');
  assert.equal(started[0].job, 'verification');
  assert.deepEqual(started[0].covers, ['drift']);
  assert.equal(started[0].brief, 'briefs/alpha-drift.md');
  assert.equal(started[0].label, 'drift-review-2');

  // An unbuildable edge is NOT the Alpha's to fix by re-reading: the target is
  // unpublished and unbuilt, and re-asking cannot change that.
  started.length = 0;
  assert.equal(dispatchDriftRereview({ ...args, failure: gate('ERROR drift-check-unbuildable-edge: p requires q') }), false);
  assert.equal(started.length, 0);

  // It must also see a blocked verdict arriving as an ADVISORY gate rather than
  // the primary failure, and must not fire on some other gate's output.
  assert.equal(dispatchDriftRereview({
    ...args,
    failure: { id: 'url-liveness', output: 'dead', advisory: [gate('ERROR drift-check-blocked: p — x')] },
  }), true);
  started.length = 0;
  assert.equal(dispatchDriftRereview({
    ...args, failure: { id: 'url-liveness', output: 'ERROR drift-check-blocked: not from the drift gate' },
  }), false);
  assert.equal(started.length, 0);
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
