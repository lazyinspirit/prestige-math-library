// boundary-audit's template clustering must survive a quoted middle, and a
// `checked` row must be inspectable too.
//
// WHY. frontier-13's worst defect class: 2,169 of 3,144 boundary rows were
// `not_applicable`, one rationale recurring 124 times, and two false rows each
// hid a confirmed-fatal defect. The tool built against that class found ZERO
// clusters on frontier-14's 2,328 real rows — because the templated wrapper
// embeds quoted proof-step or title text ('The move "…" neither divides nor
// indexes …'), so every normalised key was unique and no cluster could ever
// form. And frontier-14's three fatal-concealing rows were marked `checked`,
// a status both detectors skipped entirely.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { itemHashGuard } from '../../item-hash.mjs';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const contractsWith = (rows: object) => {
  const p = join(mkdtempSync(join(tmpdir(), 'ba-')), 'contracts.json');
  writeFileSync(p, JSON.stringify({ contracts: rows }));
  return p;
};

test('template reviews bind item and row, reject boilerplate, and do not hide bad step citations', () => {
  const dir = mkdtempSync(join(tmpdir(), 'ba-reviewed-'));
  const records: any = {};
  const reasons = [
    'The identity matrix calculation explicitly evaluates its sole diagonal entry.',
    'For the empty indexing family the displayed union has no members by definition.',
    'The scalar homomorphism sends the multiplicative identity to the specified unit.',
  ];
  for (let i = 0; i < 3; i++) {
    const id = `thm-boundary-fixture-${i}`;
    const text = `---\nid: ${id}\n---\n## Statement\nA fixture claim.\n## Proof\n1.1 The displayed value equals the unit. [given]\n`;
    writeFileSync(join(dir, `${id}.md`), text);
    const row: any = { case: 'one', status: 'checked', evidence: `Step 1.1 covers $x=${i}$.` };
    row.template_review = { upheld: true, by: 'fixture-reviewer', reason: reasons[i],
      item_sha256: itemHashGuard(text), row_sha256: createHash('sha256').update(JSON.stringify({
        case: row.case, status: row.status, text: row.evidence,
      })).digest('hex') };
    records[id] = { boundaries: [row] };
  }
  const file = join(dir, 'contracts.json');
  const check = () => { writeFileSync(file, JSON.stringify({ contracts: records }));
    return run([file, '--items-dir', dir, '--json', '--fail-on-template', '--fail-on-contradicted']); };
  let result = check();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(JSON.parse(result.stdout).summary.template_clusters_upheld_by_review, 1);
  const rows: any[] = Object.values(records).map((r: any) => r.boundaries[0]);
  rows[0].template_review.item_sha256 = 'stale';
  assert.equal(check().status, 1, 'stale proof must reopen review');
  rows[0].template_review.item_sha256 = itemHashGuard(`---\nid: thm-boundary-fixture-0\n---\n## Statement\nA fixture claim.\n## Proof\n1.1 The displayed value equals the unit. [given]\n`);
  rows[0].evidence = 'Step 9.9 covers $x=0$.';
  rows[0].template_review.row_sha256 = createHash('sha256').update(JSON.stringify({ case: 'one', status: 'checked', text: rows[0].evidence })).digest('hex');
  assert.ok(JSON.parse(check().stdout).contradicted.length > 0, 'review must not hide nonexistent proof steps');
  for (const row of rows) row.template_review.reason = 'All the necessary cases have been examined and are completely correct.';
  assert.ok(JSON.parse(check().stdout).templates.length > 0, 'generic copied reviews must remain candidates');
});

const run = (args: string[]) => spawnSync(process.execPath,
  [join(REPO, 'tools', 'boundary-audit.mjs'), ...args],
  { cwd: REPO, encoding: 'utf8', timeout: 60_000 });

const templated = contractsWith({
  'thm-alpha': { boundaries: [{ case: 'one', status: 'not_applicable',
    reason: 'The move "products over the index set collapse" neither divides nor indexes anything in thm-alpha.' }] },
  'thm-beta': { boundaries: [{ case: 'one', status: 'not_applicable',
    reason: 'The move "the closure operator is idempotent here" neither divides nor indexes anything in thm-beta.' }] },
  'thm-gamma': { boundaries: [{ case: 'one', status: 'not_applicable',
    reason: 'The move "each fibre meets the diagonal once" neither divides nor indexes anything in thm-gamma.' }] },
});

test('a templated wrapper with unique quoted middles still clusters', () => {
  const r = run([templated, '--json']);
  const out = JSON.parse(r.stdout);
  assert.ok(out.templates.length >= 1,
    'three rows sharing a wrapper differ only inside quotes and formed no cluster');
  assert.equal(out.templates[0].members, 3);
});

test('--fail-on-template turns a cluster into a failing gate', () => {
  const r = run([templated, '--fail-on-template']);
  assert.notEqual(r.status, 0, 'clusters were reported but the gate exited 0');
});

test('a checked row crediting a proof step that does not exist is a candidate', () => {
  // items/lem-cauchy-bounded.md is the house exemplar; its proof has no step 9.7.
  const contracts = contractsWith({
    'lem-cauchy-bounded': { boundaries: [{ case: 'zero', status: 'checked',
      reason: 'The zero case is handled at step 9.7, where the bound is rebuilt.' }] },
  });
  const r = run([contracts, '--json']);
  const out = JSON.parse(r.stdout);
  assert.ok(out.contradicted.some((c: any) => c.id === 'lem-cauchy-bounded' && /9\.7/.test(c.why)),
    'a checked row crediting a nonexistent step passed both detectors');
});

test('the stage table fails on templates, not only on contradictions', async () => {
  const mod = await import('../stages/mathlib.mts');
  const st = mod.stages.find((s: any) => s.id === '5-author');
  const g = st.gates({ run: 'frontier-14', repo: REPO }).find((x: any) => x.id === 'boundary-audit');
  const argv: string[] = typeof g.argv === 'function' ? g.argv() : g.argv;
  assert.ok(argv.includes('--fail-on-template'),
    'the boundary gate reports template reuse and then exits 0 over it');
});
