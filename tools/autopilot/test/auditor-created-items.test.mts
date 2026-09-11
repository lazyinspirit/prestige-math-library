import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import {
  writeAuditorCreatedBaseline,
  certifyAuditorCreatedItems,
  loadAuditorCreatedCertifications,
} from '../../auditor-created-items.mjs';
import { itemHashJudge } from '../../item-hash.mjs';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const item = (id: string) => `---\nid: ${id}\nkind: lemma\ntitle: "${id}"\nstatus: draft\ndeps: []\njustified_by: []\nforward_refs: []\n---\n\n## Statement\n\n${id}.\n\n## Proof\n\nImmediate.\n`;

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'auditor-created-'));
  for (const dir of ['items', 'research', 'research/r-dispatch']) mkdirSync(join(root, dir), { recursive: true });
  writeFileSync(join(root, 'items', 'lem-base.md'), item('lem-base'));
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
    { id: 'page-a', category: 'cat', items: [{ id: 'lem-base', deps: [] }] },
  ]));
  writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), JSON.stringify({
    version: 1, contracts: { 'lem-base': { risk: 'low' } },
  }));
  return root;
}

function recoveryFixture(t: any, step = 7) {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeAuditorCreatedBaseline(root, 'r', step);
  const itemPath = join(root, 'items/lem-created.md');
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const contractPath = join(root, 'research/r-batch-1.proof-contracts.json');
  writeFileSync(itemPath, item('lem-created'));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest[0].items.push({ id: 'lem-created', deps: [] });
  writeFileSync(manifestPath, JSON.stringify(manifest));
  writeFileSync(contractPath, JSON.stringify({ contracts: { 'lem-created': { risk: 'low' } } }));
  const at = new Date('2025-01-01T00:00:05.000Z');
  for (const path of [itemPath, manifestPath, contractPath]) utimesSync(path, at, at);
  const resultPath = join(root, 'research/r-dispatch/recovery.result.json');
  const result = (label: string, changes: any = {}) => writeFileSync(resultPath, JSON.stringify({
    run: 'r', role: 'alpha-adjudicate', ok: true, label, covers: [],
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z', ...changes,
  }));
  return { root, result };
}

for (const label of ['repair-8-a-round-1', 'cross-group-z-round-12',
  'adjudicate-closure-recovery-a-1', 'repair-8-round-2', 'adjudicate-closure-recovery-3']) {
  test(`Step 7 certifies its legitimate recovery dispatch ${label}`, t => {
    const f = recoveryFixture(t); f.result(label);
    const receipt = certifyAuditorCreatedItems(f.root, 'r', 7);
    assert.equal(receipt.items.length, 1);
    assert.equal(receipt.items[0].author_result, 'recovery.result.json');
    assert.equal(receipt.items[0].judge_sha256, itemHashJudge(item('lem-created')));
  });
}

test('Step-7 recovery recognition rejects malformed labels, wrong roles and invalid provenance', t => {
  const f = recoveryFixture(t);
  for (const label of ['repair-8-a-round-0', 'repair-8-aa-round-1', 'repair-8-a-round-01',
    'repair-8-a-round-1-extra', 'prefix-cross-group-a-round-1', 'cross-group-round-1',
    'cross-group-A-round-1', 'cross-group-a-round-x', 'adjudicate-closure-recovery-aa-1',
    'adjudicate-closure-recovery-a-0', 'adjudicate-closure-recovery-a-1-extra']) {
    f.result(label);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/, label);
  }
  for (const changes of [{ role: 'alpha' }, { role: 'tool' }, { role: 'final-adjudicator' },
    { run: 'other' }, { ok: false }, { covers: ['2'] },
    { started_at: '2025-01-01T00:00:09.000Z' }, { ended_at: '2025-01-01T00:00:04.999Z' }]) {
    f.result('repair-8-a-round-1', changes);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/, JSON.stringify(changes));
  }
});

for (const step of [5, 8]) test(`Step ${step} cannot use Step-7 recovery provenance`, t => {
  const f = recoveryFixture(t, step);
  for (const label of ['repair-8-a-round-1', 'cross-group-a-round-1', 'adjudicate-closure-recovery-a-1']) {
    f.result(label);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', step), new RegExp(`no successful Step ${step}`));
  }
});

for (const label of ['gate-batch-1-a', 'gate-batch-12-z', 'gate-batch-2-all']) {
  test(`Step 5 certifies its legitimate gate-repair dispatch ${label}`, t => {
    const f = recoveryFixture(t, 5); f.result(label, { role: 'alpha' });
    const receipt = certifyAuditorCreatedItems(f.root, 'r', 5);
    assert.equal(receipt.items.length, 1);
    assert.equal(receipt.items[0].author_result, 'recovery.result.json');
    assert.equal(receipt.items[0].judge_sha256, itemHashJudge(item('lem-created')));
  });
}

test('Step-5 gate-repair recognition rejects malformed labels, wrong roles and invalid provenance', t => {
  const f = recoveryFixture(t, 5);
  for (const label of ['gate-batch-0-a', 'gate-batch-01-a', 'gate-batch-x-a', 'gate-batch-1-aa',
    'gate-batch-1-A', 'gate-batch-1-ALL', 'gate-batch-1-', 'gate-batch-1',
    'prefix-gate-batch-1-a', 'gate-batch-1-a-extra']) {
    f.result(label, { role: 'alpha' });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 5), /no successful Step 5/, label);
  }
  for (const changes of [{ role: 'alpha-adjudicate' }, { role: 'tool' }, { role: 'final-adjudicator' },
    { run: 'other' }, { ok: false }, { covers: ['2'] },
    { started_at: '2025-01-01T00:00:09.000Z' }, { ended_at: '2025-01-01T00:00:04.999Z' }]) {
    f.result('gate-batch-1-a', { role: 'alpha', ...changes });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 5), /no successful Step 5/, JSON.stringify(changes));
  }
});

for (const step of [7, 8]) test(`Step ${step} cannot use Step-5 gate-repair provenance`, t => {
  const f = recoveryFixture(t, step);
  for (const label of ['gate-batch-1-a', 'gate-batch-2-all']) {
    f.result(label, { role: 'alpha' });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', step), new RegExp(`no successful Step ${step}`));
  }
});

for (const label of ['receipts', 'receipts-fix-1']) {
  test(`Step 8 recertifies contract-only changes from the covering ${label} author`, t => {
    const f = recoveryFixture(t, 8);
    f.result('step8-lead', { role: 'alpha' });
    const first = certifyAuditorCreatedItems(f.root, 'r', 8);
    const receiptPath = join(f.root, 'research/r-step8-auditor-certifications.json');
    const before = readFileSync(receiptPath, 'utf8');
    const contractPath = join(f.root, 'research/r-batch-1.proof-contracts.json');
    writeFileSync(contractPath, JSON.stringify({ contracts: { 'lem-created': { risk: 'high' } } }));
    const changed = new Date('2025-01-01T00:00:10.500Z');
    utimesSync(contractPath, changed, changed);
    for (const changes of [{}, { role: 'alpha-adjudicate' }, { role: 'tool' }, { role: 'final-adjudicator' },
      { run: 'other' }, { ok: false }, { covers: ['2'] }, { started_at: '2025-01-01T00:00:14.000Z' }]) {
      // The empty change uses the old ending, before the contract-only write.
      f.result(label, { role: 'alpha', ...(Object.keys(changes).length
        ? { ended_at: '2025-01-01T00:00:20.000Z' } : {}), ...changes });
      assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 8), /no successful Step 8/);
      assert.equal(readFileSync(receiptPath, 'utf8'), before, 'refusal preserves the prior receipt');
    }
    f.result(label, { role: 'alpha', ended_at: '2025-01-01T00:00:11.000Z' });
    const current = certifyAuditorCreatedItems(f.root, 'r', 8);
    assert.equal(current.items[0].item_file_sha256, first.items[0].item_file_sha256);
    assert.notEqual(current.items[0].contract_sha256, first.items[0].contract_sha256);
    assert.notEqual(current.items[0].step5_subject_sha256, first.items[0].step5_subject_sha256);
    assert.equal(current.items[0].author_result, 'recovery.result.json');
  });
}

test('Step 8 rejects malformed receipt repair labels', t => {
  const f = recoveryFixture(t, 8);
  for (const label of ['receipts-fix-0', 'receipts-fix-01', 'receipts-fix-x', 'receipts-fix-',
    'receipts-fix-1-extra', 'prefix-receipts', 'receipts-extra', 'receipt']) {
    f.result(label, { role: 'alpha' });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 8), /no successful Step 8/, label);
  }
});

for (const step of [5, 7]) test(`Step ${step} cannot use Step-8 receipt-repair provenance`, t => {
  const f = recoveryFixture(t, step);
  for (const label of ['receipts', 'receipts-fix-1']) {
    f.result(label, { role: 'alpha' });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', step), new RegExp(`no successful Step ${step}`));
  }
});

test('auditor-created certification is baseline-exclusive, dispatch-backed, and hash-bound', () => {
  const root = fixture();
  writeAuditorCreatedBaseline(root, 'r', 8);
  const created = item('lem-created');
  writeFileSync(join(root, 'items', 'lem-created.md'), created);
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify([
    { id: 'page-a', category: 'cat', items: [
      { id: 'lem-base', deps: [] }, { id: 'lem-created', deps: ['lem-base'] },
    ] },
  ]));
  writeFileSync(join(root, 'research', 'r-batch-1.proof-contracts.json'), JSON.stringify({
    version: 1, contracts: { 'lem-base': { risk: 'low' }, 'lem-created': { risk: 'low' } },
  }));
  const authoredAt = new Date('2025-01-01T00:00:00.000Z');
  utimesSync(join(root, 'items', 'lem-created.md'), authoredAt, authoredAt);
  utimesSync(join(root, 'research', 'r-batch-1.pages.json'), authoredAt, authoredAt);
  writeFileSync(join(root, 'research', 'r-dispatch', 'alpha-step8-lead.result.json'), JSON.stringify({
    run: 'r', role: 'alpha', label: 'step8-lead', covers: ['all'], ok: true,
    started_at: '2020-01-01T00:00:00.000Z', ended_at: '2030-01-01T00:00:00.000Z',
  }));
  const receipt = certifyAuditorCreatedItems(root, 'r', 8);
  assert.deepEqual(receipt.items.map((row: any) => row.id), ['lem-created']);
  assert.equal(receipt.items[0].judge_sha256, itemHashJudge(created));

  writeFileSync(join(root, 'items', 'lem-created.md'), `${created}\nLater unreviewed edit.\n`);
  const staleAt = new Date('2040-01-01T00:00:00.000Z');
  utimesSync(join(root, 'items', 'lem-created.md'), staleAt, staleAt);
  assert.throws(() => certifyAuditorCreatedItems(root, 'r', 8), /no successful Step 8/);
});

test('an item file already present at the baseline cannot be relabelled auditor-created', () => {
  const root = fixture();
  writeFileSync(join(root, 'items', 'lem-preexisting.md'), item('lem-preexisting'));
  writeAuditorCreatedBaseline(root, 'r', 7);
  const manifest = JSON.parse(readFileSync(join(root, 'research', 'r-batch-1.pages.json'), 'utf8'));
  manifest[0].items.push({ id: 'lem-preexisting', deps: [] });
  writeFileSync(join(root, 'research', 'r-batch-1.pages.json'), JSON.stringify(manifest));
  writeFileSync(join(root, 'research', 'r-dispatch', 'alpha-adjudicate-step7-a.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-adjudicate', label: 'step7-a', covers: ['1'], ok: true,
    started_at: '2000-01-01T00:00:00.000Z', ended_at: '2100-01-01T00:00:00.000Z',
  }));
  assert.throws(() => certifyAuditorCreatedItems(root, 'r', 7), /existed on disk before Step 7/);
});

for (const step of [5, 7, 8]) test(`Step ${step} contract-only changes require a covering author dispatch`, () => {
  const root = fixture();
  writeAuditorCreatedBaseline(root, 'r', step);
  const itemPath = join(root, 'items', 'lem-created.md');
  const manifestPath = join(root, 'research', 'r-batch-1.pages.json');
  const contractPath = join(root, 'research', 'r-batch-1.proof-contracts.json');
  const receiptPath = join(root, 'research', `r-step${step}-auditor-certifications.json`);
  writeFileSync(itemPath, item('lem-created'));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest[0].items.push({ id: 'lem-created', deps: [] });
  writeFileSync(manifestPath, JSON.stringify(manifest));
  const contracts = { contracts: { 'lem-created': { risk: 'low' } } };
  writeFileSync(contractPath, JSON.stringify(contracts));
  const authoredAt = new Date('2025-01-01T00:00:00.000Z');
  for (const path of [itemPath, manifestPath, contractPath]) utimesSync(path, authoredAt, authoredAt);
  const label = step === 5 ? '5a-a' : `step${step}-a`;
  const resultPath = join(root, 'research', 'r-dispatch', `alpha-${label}.result.json`);
  const author = { run: 'r', role: 'alpha', label, covers: ['1'], ok: true,
    started_at: '2024-12-31T00:00:00.000Z', ended_at: '2025-01-02T00:00:00.000Z' };
  writeFileSync(resultPath, JSON.stringify(author));
  const first = certifyAuditorCreatedItems(root, 'r', step);

  // A restart may reuse unchanged hash-bound evidence despite carrier touches.
  const later = new Date('2040-01-01T00:00:00.000Z');
  utimesSync(contractPath, later, later);
  assert.deepEqual(certifyAuditorCreatedItems(root, 'r', step).items, first.items);
  const currentReceipt = readFileSync(receiptPath, 'utf8');

  contracts.contracts['lem-created'].risk = 'high';
  writeFileSync(contractPath, JSON.stringify(contracts));
  utimesSync(contractPath, later, later);
  assert.throws(() => certifyAuditorCreatedItems(root, 'r', step), new RegExp(`no successful Step ${step}`));
  assert.equal(readFileSync(receiptPath, 'utf8'), currentReceipt, 'failure must preserve prior evidence');

  writeFileSync(resultPath, JSON.stringify({ ...author,
    started_at: '2039-12-31T00:00:00.000Z', ended_at: '2040-01-02T00:00:00.000Z' }));
  const refreshed = certifyAuditorCreatedItems(root, 'r', step);
  assert.notEqual(refreshed.items[0].contract_sha256, first.items[0].contract_sha256);
  assert.notEqual(refreshed.items[0].step5_subject_sha256, first.items[0].step5_subject_sha256);
  const current = readFileSync(receiptPath, 'utf8');
  const touchedAt = new Date('2050-01-01T00:00:00.000Z');
  utimesSync(contractPath, touchedAt, touchedAt);
  for (const identity of [{ run: 'other' }, { baseline_sha256: '0'.repeat(64) }]) {
    writeFileSync(receiptPath, JSON.stringify({ ...refreshed, ...identity }));
    assert.throws(() => certifyAuditorCreatedItems(root, 'r', step), new RegExp(`no successful Step ${step}`),
      'a receipt from another run or baseline cannot reuse the unchanged-hash path');
  }
  writeFileSync(receiptPath, current);
  assert.deepEqual(certifyAuditorCreatedItems(root, 'r', step).items, refreshed.items);
});

for (const step of [5, 7, 8]) for (const mode of ['legacy', 'post-end']) {
  test(`Step ${step} rejects ${mode} provenance until a fresh dispatch covers the contract`, () => {
    const root = fixture();
    writeAuditorCreatedBaseline(root, 'r', step);
    const baselinePath = join(root, 'research', `r-step${step}-auditor-baseline.json`);
    const baseline = readFileSync(baselinePath, 'utf8');
    const itemPath = join(root, 'items', 'lem-created.md');
    const manifestPath = join(root, 'research', 'r-batch-1.pages.json');
    const contractPath = join(root, 'research', 'r-batch-1.proof-contracts.json');
    const receiptPath = join(root, 'research', `r-step${step}-auditor-certifications.json`);
    writeFileSync(itemPath, item('lem-created'));
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    manifest[0].items.push({ id: 'lem-created', deps: [] });
    writeFileSync(manifestPath, JSON.stringify(manifest));
    writeFileSync(contractPath, JSON.stringify({ contracts: { 'lem-created': { risk: 'low' } } }));
    const authoredAt = new Date('2025-01-01T00:00:05.000Z');
    for (const path of [itemPath, manifestPath, contractPath]) utimesSync(path, authoredAt, authoredAt);
    const label = step === 5 ? '5a-a' : `step${step}-a`;
    const resultPath = join(root, 'research', 'r-dispatch', `alpha-${label}.result.json`);
    const author = { run: 'r', role: 'alpha', label, covers: ['1'], ok: true,
      started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z' };
    writeFileSync(resultPath, JSON.stringify(author));
    certifyAuditorCreatedItems(root, 'r', step);

    writeFileSync(contractPath, JSON.stringify({ contracts: { 'lem-created': { risk: 'high' } } }));
    const changedAt = new Date('2025-01-01T00:00:10.500Z');
    utimesSync(contractPath, changedAt, changedAt);
    const coveringAuthor = { ...author, ended_at: '2025-01-01T00:00:11.000Z' };
    if (mode === 'legacy') {
      // Reproduce a v1 receipt: its hashes include the later contract, but the
      // old certifier never checked that carrier against the actual dispatch.
      writeFileSync(resultPath, JSON.stringify(coveringAuthor));
      const legacy = certifyAuditorCreatedItems(root, 'r', step);
      legacy.policy = 'auditor-created-stage-bypass-v1';
      writeFileSync(receiptPath, JSON.stringify(legacy));
      writeFileSync(resultPath, JSON.stringify(author));
      assert.throws(() => loadAuditorCreatedCertifications(receiptPath), /Invalid auditor-created/);
    }
    const before = readFileSync(receiptPath, 'utf8');
    assert.throws(() => certifyAuditorCreatedItems(root, 'r', step), new RegExp(`no successful Step ${step}`));
    assert.equal(readFileSync(receiptPath, 'utf8'), before, 'failed revalidation preserves the old receipt');
    assert.equal(readFileSync(baselinePath, 'utf8'), baseline, 'migration cannot move the original boundary');

    writeFileSync(resultPath, JSON.stringify(coveringAuthor));
    const refreshed = certifyAuditorCreatedItems(root, 'r', step);
    assert.equal(refreshed.policy, 'auditor-created-stage-bypass-v2');
    assert.equal(loadAuditorCreatedCertifications(receiptPath).length, 1);
    assert.equal(readFileSync(baselinePath, 'utf8'), baseline);
  });
}

test('judge closure counts a current auditor-created receipt without fabricating a verdict', () => {
  const root = mkdtempSync(join(tmpdir(), 'auditor-closure-'));
  const id = 'def-algebra-of-subsets';
  const source = readFileSync(join(REPO, 'items', `${id}.md`), 'utf8');
  const manifest = join(root, 'scope.pages.json');
  const ledger = join(root, 'judge.jsonl');
  const cert = join(root, 'cert.json');
  const out = join(root, 'closure.json');
  writeFileSync(manifest, JSON.stringify([{ id: 'page', items: [{ id }] }]));
  writeFileSync(ledger, '');
  writeFileSync(cert, JSON.stringify({
    version: 1, run: 'r', step: 8, policy: 'auditor-created-stage-bypass-v2',
    items: [{ id, judge_sha256: itemHashJudge(source), author_result: 'alpha-step8-lead.result.json' }],
  }));
  const result = spawnSync(process.execPath, [join(REPO, 'tools', 'level-coverage.mjs'),
    '--judge-only', '--verify-current-context', '--judge-ledger', ledger,
    '--auditor-certifications', cert, '--out', out, manifest],
  { cwd: REPO, encoding: 'utf8', timeout: 60_000 });
  assert.equal(result.status, 0, result.stderr);
  const closure = JSON.parse(readFileSync(out, 'utf8'));
  assert.equal(closure.closed, true);
  assert.deepEqual(closure.auditor_certified, [id]);
  assert.equal(closure.verdicts_complete, 1);
  assert.deepEqual(closure.needs_rejudge, []);
});
