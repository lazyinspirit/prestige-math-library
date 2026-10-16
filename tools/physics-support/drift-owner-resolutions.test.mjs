import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { driftOwnerResolutionTemplate, validateDriftOwnerResolutions, driftResolutionPath, driftHash } from './drift-owner-resolutions.mjs';
const checker = new URL('./drift-review-check.mjs', import.meta.url).pathname;
function resolutionFixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'drift-owner-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['research/demo-dispatch', 'items', 'library/test']) mkdirSync(join(root, dir), { recursive: true });
  const write = (path, value) => writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
  const pages = [
    { id: 'selected', category: 'test', library: 'mathematics', kind: 'A', order: 2, requires: ['supplier'], items: [] },
    { id: 'selected-examples', category: 'test', library: 'mathematics', kind: 'B', order: 3, requires: ['selected'], items: [] },
  ];
  write('research/demo-scope-ledger.json', { run: 'demo', pages: pages.map(page => ({ id: page.id, kind: page.kind, batch: '1' })) });
  write('research/demo-batch-1.pages.json', pages);
  write('research/plan-spec.json', { pages: [...pages, { id: 'supplier', category: 'test', kind: 'P', order: 1, items: [] }] });
  write('library/test/supplier.md', '---\npage: supplier\nstatus: published\nitems: []\n---\n');
  write('research/demo-alpha-step1-drift.md', '# Native review\n\n### selected\n\nVERDICT: drift-blocked — missing supplier, owner action required.\n');
  const native = { run: 'demo', attempt: 1, role: 'alpha', label: 'drift-review', covers: ['drift'], ok: true };
  write('research/demo-dispatch/alpha-drift-review.attempt-1.result.json', native);
  write('research/demo-dispatch/alpha-drift-review.result.json', native);
  write('research/demo-owner-review.md', 'Fixture owner examined exact repaired supplier use and accepted the current prerequisite interface.');
  function template() { return driftOwnerResolutionTemplate(root, 'demo'); }
  function accept() {
    const receipt = template();
    receipt.inputs['research/demo-owner-review.md'] = (driftHash(readFileSync(join(root, 'research/demo-owner-review.md'))));
    Object.assign(receipt.resolutions[0], { decision: 'resolved', reason: 'Owner reviewed the exact repaired missing supplier and its affected consumer use.', evidence: ['research/demo-owner-review.md'] });
    return receipt;
  }
  function save(receipt) { write(driftResolutionPath('demo'), receipt); }
  const gate = (before = false) => spawnSync(process.execPath, [checker, '--run', 'demo', ...(before ? ['--before-apply'] : [])], { cwd: root, encoding: 'utf8' });
  return { root, write, pages, template, accept, save, gate };
}
const output = result => result.stdout + result.stderr;

test('explicit root disposition passes pre/post materialization checks while preserving native bytes', t => {
  const f = resolutionFixture(t);
  const report = readFileSync(join(f.root, 'research/demo-alpha-step1-drift.md'));
  const result = readFileSync(join(f.root, 'research/demo-dispatch/alpha-drift-review.result.json'));
  assert.equal(f.gate(true).status, 1);
  assert.throws(() => { f.save(f.template()); validateDriftOwnerResolutions(f.root, 'demo'); }, /substantive owner disposition/);
  f.save(f.accept());
  assert.deepEqual([...validateDriftOwnerResolutions(f.root, 'demo').resolved], ['selected']);
  for (const before of [true, false]) { const checked = f.gate(before); assert.equal(checked.status, 0, output(checked)); }
  assert.deepEqual(readFileSync(join(f.root, 'research/demo-alpha-step1-drift.md')), report);
  assert.deepEqual(readFileSync(join(f.root, 'research/demo-dispatch/alpha-drift-review.result.json')), result);
});

test('stale report, plan, evidence, section and native result are all rejected', t => {
  for (const changed of ['report', 'plan', 'evidence', 'section', 'result']) {
    const f = resolutionFixture(t), receipt = f.accept();
    if (changed === 'section') receipt.resolutions[0].section_sha256 = '0'.repeat(64);
    f.save(receipt);
    const paths = { report: 'research/demo-alpha-step1-drift.md', plan: 'research/plan-spec.json', evidence: 'research/demo-owner-review.md', result: 'research/demo-dispatch/alpha-drift-review.attempt-1.result.json' };
    if (paths[changed]) f.write(paths[changed], readFileSync(join(f.root, paths[changed]), 'utf8') + '\n');
    assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /stale/);
    assert.equal(f.gate(true).status, 1);
  }
});

test('duplicates, unknown/nonblocked subjects, invalid owners and missing evidence fail closed', t => {
  for (const mutate of [
    receipt => receipt.resolutions.push(receipt.resolutions[0]),
    receipt => receipt.resolutions[0].page = 'unknown',
    receipt => receipt.resolutions[0].page = 'selected-examples',
    receipt => receipt.authorizing_owner = 'worker',
    receipt => receipt.resolutions[0].evidence = ['research/not-bound.md'],
    receipt => receipt.resolutions[0].requires = [],
    receipt => receipt.inputs['../outside.md'] = '0'.repeat(64),
    receipt => receipt.native_result.path = 'research/demo-dispatch/alpha-drift-review.result.json',
  ]) {
    const f = resolutionFixture(t), receipt = f.accept(); mutate(receipt); f.save(receipt);
    assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /drift-owner-resolution/);
  }
});

test('scope changes cannot reuse owner disposition, and current ledger must match actual manifests', t => {
  const f = resolutionFixture(t); f.save(f.accept());
  f.write('research/demo-batch-1.pages.json', f.pages.slice(0, 1));
  assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /frontier/);
  f.write('research/demo-scope-ledger.json', { run: 'demo', pages: [{ id: 'selected', kind: 'A', batch: '1' }] });
  assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /scope changed/);
});

test('owner disposition cannot waive another blocked section or ordinary native report errors', t => {
  const f = resolutionFixture(t);
  f.write('research/demo-alpha-step1-drift.md', readFileSync(join(f.root, 'research/demo-alpha-step1-drift.md'), 'utf8') + '\n### other\nVERDICT: drift-blocked — independent unresolved prerequisite.\n');
  f.pages.push({ id: 'other', category: 'test', kind: 'A', order: 4, requires: [], items: [] });
  f.write('research/demo-batch-1.pages.json', f.pages);
  f.write('research/demo-scope-ledger.json', { run: 'demo', pages: f.pages.map(page => ({ id: page.id, kind: page.kind, batch: '1' })) });
  const spec = JSON.parse(readFileSync(join(f.root, 'research/plan-spec.json'), 'utf8')); spec.pages.push(f.pages[2]); f.write('research/plan-spec.json', spec);
  const partial = f.accept(); partial.resolutions = partial.resolutions.filter(row => row.page === 'selected'); f.save(partial);
  const checked = f.gate(true); assert.equal(checked.status, 1); assert.match(output(checked), /drift-check-blocked: other/);
  f.write('research/demo-alpha-step1-drift.md', readFileSync(join(f.root, 'research/demo-alpha-step1-drift.md'), 'utf8').replace('drift-blocked — independent unresolved prerequisite.', 'drift-applied — supplier (order 1)'));
  const unchanged = f.accept(); unchanged.resolutions = unchanged.resolutions.filter(row => row.page === 'selected'); f.save(unchanged);
  const ordinary = f.gate(true); assert.equal(ordinary.status, 1); assert.match(output(ordinary), /drift-check-not-applied: other/);
});


test('explicit current evidence obligations are bound without treating historical JSON hashes as current', t => {
  const f = resolutionFixture(t), receipt = f.accept();
  const leaf = 'research/demo-source-evidence.md', review = 'research/demo-nested-review.json';
  f.write(leaf, 'Concrete fixture source evidence.');
  const leafHash = driftHash(readFileSync(join(f.root, leaf)));
  f.write(review, { inputs: { [leaf]: '0'.repeat(64) }, qualification: 'Authentic historical source hash, not a current obligation.' });
  receipt.inputs[review] = driftHash(readFileSync(join(f.root, review)));
  receipt.resolutions[0].evidence = [review]; f.save(receipt);
  assert.ok(validateDriftOwnerResolutions(f.root, 'demo').resolved.has('selected'));
  receipt.resolutions[0].current_inputs = { [leaf]: leafHash }; f.save(receipt);
  assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /unbound current evidence/);
  receipt.inputs[leaf] = leafHash; f.save(receipt);
  assert.ok(validateDriftOwnerResolutions(f.root, 'demo').inputs.includes(leaf));
  f.write(leaf, 'Changed underlying evidence.');
  assert.throws(() => validateDriftOwnerResolutions(f.root, 'demo'), /stale evidence/);
});
