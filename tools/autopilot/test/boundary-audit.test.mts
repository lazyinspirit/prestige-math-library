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

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const contractsWith = (rows: object) => {
  const p = join(mkdtempSync(join(tmpdir(), 'ba-')), 'contracts.json');
  writeFileSync(p, JSON.stringify({ contracts: rows }));
  return p;
};

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
