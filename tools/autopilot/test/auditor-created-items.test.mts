import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync, rmSync, copyFileSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

import {
  writeAuditorCreatedBaseline,
  certifyAuditorCreatedItems,
  loadAuditorCreatedCertifications,
  authorResultAllowed,
  recordOwnerRecertification,
} from '../../auditor-created-items.mjs';
import { writeAuditorBaseline, certifyAuditorItems } from '../../step3-auditor-items.mjs';
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
  const result = (label: string, { file, ...changes }: any = {}) => writeFileSync(file
    ? join(root, 'research/r-dispatch', file) : resultPath, JSON.stringify({
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

test('an owner-held Step-7 contract repair can recertify an already auditor-created item', t => {
  const f = recoveryFixture(t);
  const evidence = join(f.root, 'research', 'owner-lem-created.md');
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, 'lem-created', evidence,
    'Reviewed the repaired contract'), /no prior auditor-created certification/);
  f.result('step7-a');
  const first = certifyAuditorCreatedItems(f.root, 'r', 7);
  const contractPath = join(f.root, 'research', 'r-batch-1.proof-contracts.json');
  writeFileSync(contractPath, JSON.stringify({ contracts: { 'lem-created': { risk: 'high' } } }));
  const afterDispatch = new Date('2025-01-01T00:00:11.000Z');
  utimesSync(contractPath, afterDispatch, afterDispatch);
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/);
  writeFileSync(evidence, 'lem-created: owner checked the revised risk contract and the exact item.');
  recordOwnerRecertification(f.root, 'r', 7, 'lem-created', evidence,
    'Owner-held gate repair: the revised contract was checked against the item.');
  const renewed = certifyAuditorCreatedItems(f.root, 'r', 7);
  assert.notEqual(renewed.items[0].contract_sha256, first.items[0].contract_sha256);
  assert.equal(renewed.items[0].author_result, first.items[0].author_result);
  assert.ok(renewed.items[0].owner_recertification?.sha256);
  const path = join(f.root, 'research', 'r-step7-auditor-certifications.json');
  assert.equal(loadAuditorCreatedCertifications(path).length, 1);
  writeFileSync(evidence, 'tampered evidence');
  assert.throws(() => loadAuditorCreatedCertifications(path), /invalid owner recertification/);
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
  const label = step === 5 ? '5a-a' : step === 7 ? 'step7-a' : 'step8-lead';
  const resultPath = join(root, 'research', 'r-dispatch', `alpha-${label}.result.json`);
  const author = { run: 'r', role: step === 7 ? 'alpha-adjudicate' : 'alpha', label, covers: ['1'], ok: true,
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
    const label = step === 5 ? '5a-a' : step === 7 ? 'step7-a' : 'step8-lead';
    const resultPath = join(root, 'research', 'r-dispatch', `alpha-${label}.result.json`);
    const author = { run: 'r', role: step === 7 ? 'alpha-adjudicate' : 'alpha', label, covers: ['1'], ok: true,
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

test('judge closure requires full current carriers without fabricating a verdict', t => {
  const f = recoveryFixture(t, 7), root = f.root, id = 'lem-created';
  f.result('step7-a', { file: 'origin.result.json' });
  certifyAuditorCreatedItems(root, 'r', 7);
  writeAuditorCreatedBaseline(root, 'r', 8);
  mkdirSync(join(root, 'tools'));
  copyFileSync(join(REPO, 'tools/level-coverage.mjs'), join(root, 'tools/level-coverage.mjs'));
  for (const module of ['models', 'judge-currency', 'step7-terminal-resolution',
    'context-hash-pool', 'auditor-created-items', 'item-hash', 'frontmatter-list'])
    symlinkSync(join(REPO, `tools/${module}.mjs`), join(root, `tools/${module}.mjs`));
  const manifest = join(root, 'scope.pages.json');
  const ledger = join(root, 'judge.jsonl');
  const certs = [7, 8].map(step => join(root, `research/r-step${step}-auditor-certifications.json`));
  const out = join(root, 'closure.json');
  writeFileSync(manifest, JSON.stringify([{ id: 'page', items: [{ id }] }]));
  writeFileSync(ledger, '');
  const check = () => spawnSync(process.execPath, [join(root, 'tools', 'level-coverage.mjs'),
    '--judge-only', '--verify-current-context', '--judge-ledger', ledger,
    '--run', 'r', '--auditor-certifications', certs.join(','), '--out', out, manifest],
  { cwd: root, encoding: 'utf8', timeout: 60_000 });
  let result = check();
  assert.equal(result.status, 0, result.stderr);
  const closure = JSON.parse(readFileSync(out, 'utf8'));
  assert.equal(closure.closed, true);
  assert.deepEqual(closure.auditor_certified, [id]);
  assert.equal(closure.verdicts_complete, 1);
  assert.deepEqual(closure.needs_rejudge, []);
  const contractPath = join(root, 'research/r-batch-1.proof-contracts.json');
  writeFileSync(contractPath, JSON.stringify({ contracts: { [id]: { risk: 'high' } } }));
  const changed = new Date('2025-01-01T00:00:15Z'); utimesSync(contractPath, changed, changed);
  result = check();
  assert.notEqual(result.status, 0, 'a contract-only change cannot borrow the old judge hash');
  assert.match(result.stderr, /stale Step 7 auditor-created certification carriers/);
  const blocked = JSON.parse(readFileSync(out, 'utf8'));
  assert.equal(blocked.closed, false);
  assert.equal(blocked.auditor_certification_blocked, true);
  assert.deepEqual(blocked.needs_rejudge, [], 'certification repair must not become self-review');
  f.result('receipts-fix-1', { role: 'alpha', started_at: '2025-01-01T00:00:11Z', ended_at: '2025-01-01T00:00:20Z' });
  certifyAuditorCreatedItems(root, 'r', 8);
  result = check();
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(readFileSync(out, 'utf8')).needs_rejudge, []);
  assert.equal(readFileSync(ledger, 'utf8'), '', 'certification never fabricates a judge verdict');
});

const emittedRoutes: [number, string, string[]][] = [
  [3, 'alpha-high', ['step3b-a-0123456789abcdef']],
  [5, 'alpha', ['5a-a', '5b-lead', 'gate-batch-1-a', 'gate-batch-2-all',
    '5a-gate-risk-report-1-a', '5a-gate-risk-report-2-unowned',
    '5a-gate-stage-stalemate-1', '5a-edge-step5-routing-1',
    '5b-gate-risk-report-1', '5b-edge-step5-cross-group-2']],
  [7, 'alpha-adjudicate', ['step7-a', 'step7-guard-a-round-1', 'step7-guard-review-round-2',
    'step7-preflight-a-1', 'step7-preflight-review-2', 'cross-group-a-round-1',
    'adjudicate-closure-recovery-a-1', 'adjudicate-closure-recovery-1', 'repair-8-a-round-1', 'repair-8-round-1']],
  [7, 'final-adjudicator', ['step7-fa-a-round-1']],
  [8, 'alpha', ['step8-lead', 'step8-changes-adjudicate-1', 'step8-carried-adjudicate-a-1',
    'step8-carried-adjudicate-1', 'step8-gate-adjudication-1', 'impact-close-1',
    'step8-close-adjudicate-1', 'step8-close-carried-a-1', 'step8-close-carried-1', 'receipts', 'receipts-fix-1']],
];

test('every emitted author-capable family is accepted only at its own stage and role', () => {
  for (const [ownStep, ownRole, labels] of emittedRoutes) for (const label of labels)
    for (const step of [3, 5, 7, 8, 9]) for (const role of ['alpha-high', 'alpha', 'alpha-adjudicate', 'final-adjudicator', 'tool'])
      assert.equal(authorResultAllowed(step, { ok: true, started_at: '2025-01-01', ended_at: '2025-01-02', covers: ['1'], role, label }),
        step === ownStep && role === ownRole, `${step}/${role}/${label}`);
});

test('generic, cross-step substrings and malformed author labels never establish provenance', () => {
  for (const label of ['5a-', '5b-anything', 'not-step7-malformed', 'rejudge', 'final-adjudication',
    'not-step8-malformed', 'step8-fix-step7-guard-1', 'impact-close', 'step7-aa',
    'step7-fa-a-round-0', 'step7-fa-a-round-01', 'step7-fa-a-round-1-extra',
    'step3b-a', 'step3b-aa-0123456789abcdef', 'step3b-a-0123456789abcdeg'])
    for (const step of [3, 5, 7, 8]) for (const role of ['alpha-high', 'alpha', 'alpha-adjudicate', 'final-adjudicator'])
      assert.equal(authorResultAllowed(step, { ok: true, started_at: '2025-01-01', ended_at: '2025-01-02', covers: ['1'], role, label }), false, `${step}/${role}/${label}`);
});

for (const step of [5, 7, 8]) test(`Step ${step} requires explicit array coverage and preserves legitimate global results`, t => {
  const f = recoveryFixture(t, step);
  const label = step === 5 ? '5a-a' : step === 7 ? 'step7-a' : 'step8-lead';
  const role = step === 7 ? 'alpha-adjudicate' : 'alpha';
  for (const covers of [undefined, null, 'all', '1', {}]) {
    f.result(label, { role, covers });
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', step), new RegExp(`no successful Step ${step}`));
  }
  for (const covers of [[], ['all'], ['1']]) {
    f.result(label, { role, covers });
    const receipt = certifyAuditorCreatedItems(f.root, 'r', step);
    assert.deepEqual(receipt.items.map(row => row.id), ['lem-created']);
    const path = join(f.root, `research/r-step${step}-auditor-certifications.json`);
    assert.equal(loadAuditorCreatedCertifications(path).length, 1);
    for (const invalid of [undefined, null, 'all']) {
      f.result(label, { role, covers: invalid });
      assert.throws(() => loadAuditorCreatedCertifications(path), /missing successful.*author-result provenance/);
    }
  }
});

test('canonical V2 rows cannot establish current or carried origin without their successful author result', t => {
  const f = recoveryFixture(t, 7); f.result('step7-a');
  certifyAuditorCreatedItems(f.root, 'r', 7);
  const receiptPath = join(f.root, 'research/r-step7-auditor-certifications.json');
  const original = readFileSync(receiptPath, 'utf8');
  writeAuditorCreatedBaseline(f.root, 'r', 8);
  f.result('receipts', { role: 'alpha', file: 'later.result.json' });
  for (const invalid of [{ role: 'tool' }, { role: 'alpha' }, { label: 'not-step7-malformed' },
    { run: 'other' }, { covers: ['2'] }, { ok: false }, { ended_at: '2024-01-01' }]) {
    f.result('step7-a', invalid);
    assert.throws(() => loadAuditorCreatedCertifications(receiptPath), /missing successful Step 7 author-result provenance/);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 8), /missing successful Step 7 author-result provenance/);
    assert.equal(readFileSync(receiptPath, 'utf8'), original, 'invalid provenance never overwrites old evidence');
  }
  rmSync(join(f.root, 'research/r-dispatch/recovery.result.json'));
  assert.throws(() => loadAuditorCreatedCertifications(receiptPath), /missing successful Step 7 author-result provenance/);
  f.result('step7-a');
  assert.equal(loadAuditorCreatedCertifications(receiptPath).length, 1);
});

for (const step of [5, 7, 8]) test(`Step ${step} rejects malformed historical guard hashes without weakening stamp neutrality`, t => {
  const f = recoveryFixture(t, step);
  f.result(step === 5 ? '5a-a' : step === 7 ? 'step7-a' : 'step8-lead',
    { role: step === 7 ? 'alpha-adjudicate' : 'alpha' });
  const receipt = certifyAuditorCreatedItems(f.root, 'r', step);
  const path = join(f.root, `research/r-step${step}-auditor-certifications.json`);
  const original = readFileSync(path, 'utf8');
  const touched = new Date('2040-01-01T00:00:00Z');
  utimesSync(join(f.root, 'items/lem-created.md'), touched, touched);
  for (const guard_sha256 of [undefined, null, '', 'a'.repeat(63), 'a'.repeat(65),
    'A'.repeat(64), 'g'.repeat(64), 17, {}, [receipt.items[0].guard_sha256]]) {
    const mutated = JSON.stringify({ ...receipt, items: [{ ...receipt.items[0], guard_sha256 }] });
    writeFileSync(path, mutated);
    assert.throws(() => loadAuditorCreatedCertifications(path), /stale.*certification carriers/);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', step), new RegExp(`no successful Step ${step}`));
    assert.equal(readFileSync(path, 'utf8'), mutated, 'strict refusal preserves the existing receipt');
  }
  writeFileSync(path, original);
  assert.equal(loadAuditorCreatedCertifications(path).length, 1);
  assert.deepEqual(certifyAuditorCreatedItems(f.root, 'r', step).items, receipt.items,
    'valid V2 evidence still survives harmless post-author touches');
});

for (const [before, after] of [[5, 7], [5, 8], [7, 8]]) for (const carrier of ['item', 'manifest', 'contract'])
  test(`Step ${after} refreshes a Step ${before} creation after a ${carrier}-only change, never originals`, t => {
    const f = recoveryFixture(t, before);
    f.result(before === 5 ? '5a-a' : 'step7-a', { role: before === 5 ? 'alpha' : 'alpha-adjudicate', file: 'origin.result.json' });
    certifyAuditorCreatedItems(f.root, 'r', before);
    const paths = [before, after].map(step => join(f.root, `research/r-step${step}-auditor-certifications.json`));
    const old = readFileSync(paths[0], 'utf8');
    writeAuditorCreatedBaseline(f.root, 'r', after);
    assert.deepEqual(certifyAuditorCreatedItems(f.root, 'r', after).items, []);
    const empty = readFileSync(paths[1], 'utf8');
    const changedPath = carrier === 'item' ? join(f.root, 'items/lem-created.md')
      : join(f.root, `research/r-batch-1.${carrier === 'manifest' ? 'pages' : 'proof-contracts'}.json`);
    if (carrier === 'item') writeFileSync(changedPath, `${item('lem-created')}\nA new proof detail.\n`);
    else {
      const doc = JSON.parse(readFileSync(changedPath, 'utf8'));
      if (carrier === 'manifest') doc[0].items[1].statement = 'Changed interface';
      else doc.contracts['lem-created'].risk = 'high';
      writeFileSync(changedPath, JSON.stringify(doc));
    }
    const changed = new Date('2025-01-01T00:00:15Z'); utimesSync(changedPath, changed, changed);
    assert.throws(() => loadAuditorCreatedCertifications(paths, { root: f.root, run: 'r' }), /stale/);
    assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', after), new RegExp(`no successful Step ${after}`));
    assert.equal(readFileSync(paths[0], 'utf8'), old);
    assert.equal(readFileSync(paths[1], 'utf8'), empty);
    const label = after === 7 ? 'step7-fa-a-round-1' : 'receipts';
    const author = { role: after === 7 ? 'final-adjudicator' : 'alpha', started_at: '2025-01-01T00:00:11Z', ended_at: '2025-01-01T00:00:20Z' };
    for (const invalid of [{ run: 'other' }, { covers: ['2'] }, { role: 'tool' },
      { started_at: '2025-01-01T00:00:15.500Z', ended_at: '2025-01-01T00:00:15Z' }]) {
      f.result(label, { ...author, ...invalid });
      assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', after), new RegExp(`no successful Step ${after}`));
      assert.equal(readFileSync(paths[1], 'utf8'), empty);
    }
    f.result(label, author);
    const refreshed = certifyAuditorCreatedItems(f.root, 'r', after);
    assert.deepEqual(refreshed.items.map(row => row.id), ['lem-created']);
    assert.equal(refreshed.items[0].origin_step, before);
    assert.equal(readFileSync(paths[0], 'utf8'), old);
    const loaded = loadAuditorCreatedCertifications(paths, { root: f.root, run: 'r' });
    assert.equal(loaded.length, 1); assert.equal(loaded[0].step, after);
    assert.throws(() => loadAuditorCreatedCertifications(paths, { root: f.root, run: 'other' }), /run/);
    assert.deepEqual(certifyAuditorCreatedItems(f.root, 'r', after).items, refreshed.items, 'restart reuses valid V2 rows');
    for (const mutation of [{ origin_step: after }, { origin_baseline_sha256: '0'.repeat(64) }, { batch: '2' }]) {
      writeFileSync(paths[1], JSON.stringify({ ...refreshed, items: [{ ...refreshed.items[0], ...mutation }] }));
      assert.throws(() => loadAuditorCreatedCertifications(paths, { root: f.root, run: 'r' }), /origin|provenance|carriers|promotion/);
    }
  });

for (const [before, after] of [[5, 7], [5, 8], [7, 8]]) for (const sibling of ['manifest', 'contract'])
  test(`Step ${after} cannot promote an unchanged Step ${before} item from a sibling ${sibling} write`, t => {
    const f = recoveryFixture(t, before);
    f.result(before === 5 ? '5a-a' : 'step7-a', { role: before === 5 ? 'alpha' : 'alpha-adjudicate', file: 'origin.result.json' });
    certifyAuditorCreatedItems(f.root, 'r', before);
    writeAuditorCreatedBaseline(f.root, 'r', after);
    const baselinePath = join(f.root, `research/r-step${after}-auditor-baseline.json`);
    const baseline = readFileSync(baselinePath, 'utf8');
    const path = join(f.root, `research/r-batch-1.${sibling === 'manifest' ? 'pages' : 'proof-contracts'}.json`);
    const doc = JSON.parse(readFileSync(path, 'utf8'));
    if (sibling === 'manifest') doc[0].items[0].statement = 'Sibling change';
    else doc.contracts['lem-base'] = { risk: 'high' };
    writeFileSync(path, JSON.stringify(doc));
    const at = new Date('2025-01-01T00:00:15Z'); utimesSync(path, at, at);
    f.result(after === 7 ? 'step7-a' : 'receipts', { role: after === 7 ? 'alpha-adjudicate' : 'alpha',
      started_at: '2025-01-01T00:00:11Z', ended_at: '2025-01-01T00:00:20Z' });
    const empty = certifyAuditorCreatedItems(f.root, 'r', after);
    assert.deepEqual(empty.items, []);
    assert.equal(readFileSync(baselinePath, 'utf8'), baseline);
    const earlierPath = join(f.root, `research/r-step${before}-auditor-certifications.json`);
    assert.equal(loadAuditorCreatedCertifications(earlierPath).length, 1);
    // Do not grandfather a false promotion produced by the former mtime-only
    // path, even when its canonical V2 row has a real later author result.
    const earlier = JSON.parse(readFileSync(earlierPath, 'utf8'));
    const laterPath = join(f.root, `research/r-step${after}-auditor-certifications.json`);
    writeFileSync(laterPath, JSON.stringify({ ...empty, items: [{ ...earlier.items[0],
      author_result: 'recovery.result.json', origin_step: before, origin_baseline_sha256: earlier.baseline_sha256 }] }));
    assert.throws(() => loadAuditorCreatedCertifications(laterPath), /no item-specific.*promotion delta/);
    assert.deepEqual(certifyAuditorCreatedItems(f.root, 'r', after).items, []);
  });

for (const step of [5, 7, 8]) for (const legacy of [false, true]) for (const carrier of ['item', 'manifest', 'contract'])
test(`Step ${step} ${legacy ? 'legacy' : 'new'} boundary admits no false Step-3 promotion (${carrier})`, t => {
  const root = fixture(); t.after(() => rmSync(root, { recursive: true, force: true }));
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(manifestPath, 'utf8'));
  Object.assign(pages[0], { kind: 'A', companion: 'page-b' });
  pages.push({ id: 'page-b', kind: 'B', companion: 'page-a', items: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeAuditorBaseline(root, 'r');
  pages[0].items.push({ id: 'lem-created', deps: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeFileSync(join(root, 'items/lem-created.md'), item('lem-created'));
  writeFileSync(join(root, 'research/r-dispatch/alpha-high-author.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'], ok: true,
    started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
  }));
  certifyAuditorItems(root, 'r');
  writeAuditorCreatedBaseline(root, 'r', step);
  const baselinePath = join(root, `research/r-step${step}-auditor-baseline.json`);
  if (legacy) {
    const old = JSON.parse(readFileSync(baselinePath, 'utf8'));
    delete old.item_carriers; writeFileSync(baselinePath, JSON.stringify(old));
  }
  const baseline = readFileSync(baselinePath, 'utf8');
  writeFileSync(join(root, 'research/r-dispatch/later.result.json'), JSON.stringify({
    run: 'r', role: step === 7 ? 'alpha-adjudicate' : 'alpha', ok: true, covers: ['1'],
    label: step === 5 ? '5b-lead' : step === 7 ? 'step7-a' : 'receipts',
    started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
  }));
  const contractsPath = join(root, 'research/r-batch-1.proof-contracts.json');
  const contracts = JSON.parse(readFileSync(contractsPath, 'utf8'));
  contracts.contracts['lem-base'].risk = 'high';
  writeFileSync(contractsPath, JSON.stringify(contracts));
  assert.deepEqual(certifyAuditorCreatedItems(root, 'r', step).items, [], 'sibling write cannot promote an unchanged Step-3 item');
  if (carrier === 'item') writeFileSync(join(root, 'items/lem-created.md'), `${item('lem-created')}\nLater author repair.\n`);
  else if (carrier === 'manifest') {
    pages[0].items[1].statement = 'Changed interface'; writeFileSync(manifestPath, JSON.stringify(pages));
  } else {
    contracts.contracts['lem-created'] = { risk: 'high' }; writeFileSync(contractsPath, JSON.stringify(contracts));
  }
  const receipt = certifyAuditorCreatedItems(root, 'r', step);
  assert.deepEqual(receipt.items.map(row => row.id), legacy ? [] : ['lem-created']);
  if (!legacy) assert.equal(receipt.items[0].origin_step, 3);
  assert.equal(loadAuditorCreatedCertifications(join(root, `research/r-step${step}-auditor-certifications.json`)).length, legacy ? 0 : 1);
  assert.equal(readFileSync(baselinePath, 'utf8'), baseline, 'legacy boundaries are never retroactively filled');
});

test('a legacy later boundary cannot promote even a changed Step-5 item without its own snapshot', t => {
  const f = recoveryFixture(t, 5);
  f.result('5a-a', { role: 'alpha', file: 'origin.result.json' });
  const first = certifyAuditorCreatedItems(f.root, 'r', 5);
  writeAuditorCreatedBaseline(f.root, 'r', 7);
  const path = join(f.root, 'research/r-step7-auditor-baseline.json');
  const legacy = JSON.parse(readFileSync(path, 'utf8')); delete legacy.item_carriers;
  writeFileSync(path, JSON.stringify(legacy));
  writeFileSync(join(f.root, 'items/lem-created.md'), `${item('lem-created')}\nA later repair.\n`);
  f.result('step7-a', { started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z' });
  assert.deepEqual(certifyAuditorCreatedItems(f.root, 'r', 7).items, []);
  const receipt = JSON.parse(readFileSync(join(f.root, 'research/r-step5-auditor-certifications.json'), 'utf8'));
  assert.deepEqual(receipt.items, first.items);
  assert.equal(JSON.parse(readFileSync(path, 'utf8')).item_carriers, undefined);
});
