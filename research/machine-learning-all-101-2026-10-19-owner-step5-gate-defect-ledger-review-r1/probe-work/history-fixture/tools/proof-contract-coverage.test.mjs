import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { proofContractCoverage } from './proof-contract-coverage.mjs';
import { gateDiagnostics } from './step5-gate-diagnostics.mjs';
const repo = fileURLToPath(new URL('../', import.meta.url));
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'proof-coverage-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'research']) mkdirSync(join(root, dir));
  const put = (file, value) => writeFileSync(join(root, file), typeof value === 'string' ? value : JSON.stringify(value));
  const rows = [{ id: 'demo-a', category: 'algebra', items: [{ id: 'thm-demo-one' }, { id: 'def-demo-two' }] }];
  put('research/demo-batch-1.pages.json', rows);
  put('items/thm-demo-one.md', '---\nid: thm-demo-one\n---\n## Statement\nClaim.\n## Proof\nArgument.\n');
  put('items/def-demo-two.md', '---\nid: def-demo-two\n---\n## Definition\nDefinition.\n');
  const contracts = { version: 1, scope: ['thm-demo-one'], contracts: { 'thm-demo-one': {} } };
  const save = () => put('research/demo-proof-contracts.json', contracts);
  save();
  return { root, put, rows, contracts, save, run: () => proofContractCoverage(root, 'demo', 'research/demo-proof-contracts.json') };
}
test('complete actual proof inventory passes without contracts for nonproof definitions', t => {
  const f = fixture(t), r = f.run();
  assert.equal(r.checked, 2);assert.deepEqual(r.proof_scope, ['thm-demo-one']);assert.equal(r.covered, 1);assert.deepEqual(r.errors, []);
});
test('a nonempty passing contract cannot hide an omitted proof in another batch', t => {
  const f = fixture(t);
  f.put('research/demo-batch-2.pages.json', [{ id: 'demo-b', category: 'algebra', items: [{ id: 'lem-demo-three' }] }]);
  f.put('items/lem-demo-three.md', '---\nid: lem-demo-three\n---\n## Proof\nAnother argument.\n');
  assert.deepEqual(f.run().errors.map(r => r.id), ['lem-demo-three']);
});
for (const part of ['scope', 'map']) test(`proof must occur in the contract ${part}`, t => {
  const f = fixture(t);
  if (part === 'scope') f.contracts.scope = [];else delete f.contracts.contracts['thm-demo-one'];
  f.save();assert.equal(f.run().errors[0].code, 'contract-missing-proof');
});
for (const heading of ['Refutation', 'Counterexample', 'Verification']) test(`${heading} counts as a supplied argument`, t => {
  const f = fixture(t);
  f.put('items/def-demo-two.md', `---\nid: def-demo-two\n---\n## ${heading}\nSupplied argument.\n`);
  assert.deepEqual(f.run().errors.map(r => r.id), ['def-demo-two']);
});
test('unrelated items and external suppliers do not become coverage subjects', t => {
  const f = fixture(t);f.put('items/thm-outside-item.md', '## Proof\nNot owned.\n');
  assert.equal(f.run().errors.length, 0);assert.equal(f.run().checked, 2);
});
for (const kind of ['empty', 'duplicate', 'missing-item', 'malformed-contract']) test(`${kind} inputs fail closed`, t => {
  const f = fixture(t);
  if (kind === 'empty') f.put('research/demo-batch-1.pages.json', []);
  if (kind === 'duplicate') f.put('research/demo-batch-2.pages.json', f.rows);
  if (kind === 'missing-item') { f.rows[0].items.push({ id: 'lem-absent-supplier' });f.put('research/demo-batch-1.pages.json', f.rows); }
  if (kind === 'malformed-contract') f.put('research/demo-proof-contracts.json', { version: 1, scope: [], contracts: [] });
  assert.throws(f.run);
});
for (const tool of ['tools/proof-contract-coverage.mjs', 'tools/physics-support/proof-contract-coverage.mjs']) test(`${tool} emits repairable item diagnostics`, t => {
  const f = fixture(t);delete f.contracts.contracts['thm-demo-one'];f.save();
  const r = spawnSync(process.execPath, [join(repo, tool), '--root', f.root, '--run', 'demo', '--contracts', 'research/demo-proof-contracts.json'], { encoding: 'utf8' });
  assert.equal(r.status, 1);assert.match(r.stderr, /ERROR contract-missing-proof \[thm-demo-one\]/);
  const [d] = gateDiagnostics([{ id: 'proof-contract-coverage', code: 1, output: r.stdout + r.stderr }], ['thm-demo-one', 'def-demo-two']);
  assert.deepEqual(d.subjects, ['thm-demo-one']);assert.equal(d.ownerHeld, false);
});

test('selected published proof omissions remain metadata obligations in native repair routing', async t => {
  const f = fixture(t);
  f.put('items/thm-demo-one.md', '---\nid: thm-demo-one\nstatus: published\ndeps: []\n---\n## Proof\nExisting published argument.\n');
  f.put('research/demo-judge.jsonl', '');
  const { initialize, prepareGateRepairPack } = await import('./step5-workflow.mjs');
  initialize(f.root, 'demo');
  const failure = { id: 'proof-contract-coverage', code: 1,
    output: 'ERROR contract-missing-proof [thm-demo-one]: missing merged contract' };
  const pack = prepareGateRepairPack(f.root, 'demo', 'gate', 1, [failure]);
  assert.deepEqual(Object.values(pack.assignments).flat(), [], 'no published mathematical edit assignment');
  const diagnostics = Object.values(pack.gateAssignments).flat();
  assert.equal(diagnostics.length, 1);assert.equal(diagnostics[0].ownerHeld, true);
  assert.match(diagnostics[0].failure.output, /thm-demo-one/);
});

test('physics proof-coverage diagnostics retain physical theorem ownership', async t => {
  const f = fixture(t), id = 'pthm-demo-physical';
  f.put('research/demo-batch-2.pages.json', [{ id: 'physical-page', category: 'electromagnetism', items: [{ id }] }]);
  f.put(`items/${id}.md`, `---\nid: ${id}\nkind: physics-theorem\n---\n## Proof\nSupplied physical argument.\n`);
  const r = spawnSync(process.execPath, [join(repo, 'tools/physics-support/proof-contract-coverage.mjs'),
    '--root', f.root, '--run', 'demo', '--contracts', 'research/demo-proof-contracts.json'], { encoding: 'utf8' });
  assert.equal(r.status, 1);
  const { gateDiagnostics: physicalDiagnostics } = await import('./physics-support/step5-gate-diagnostics.mjs');
  const [d] = physicalDiagnostics([{ id: 'proof-contract-coverage', code: 1, output: r.stdout + r.stderr }], [id, 'thm-demo-one', 'def-demo-two']);
  assert.deepEqual(d.subjects, [id]);assert.equal(d.ownerHeld, false);
});
