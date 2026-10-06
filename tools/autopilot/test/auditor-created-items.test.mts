import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync, rmSync, copyFileSync, symlinkSync, chmodSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

import {
  writeAuditorCreatedBaseline,
  certifyAuditorCreatedItems,
  loadAuditorCreatedCertifications,
  authorResultAllowed,
  recordOwnerRecertification,
  recordOwnerCreation,
  recordOwnerSourceArchive,
} from '../../auditor-created-items.mjs';
import { writeAuditorBaseline, certifyAuditorItems, registerOwnerPairSplit, ownerPairSplitScopes } from '../../step3-auditor-items.mjs';
import { recordStep3, loadStep3, scopeHash, scopeDecision } from '../../step3-decisions.mjs';
import { itemHashGuard, itemHashJudge } from '../../item-hash.mjs';

const REPO = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

const item = (id: string) => `---\nid: ${id}\nkind: lemma\ntitle: "${id}"\nstatus: draft\ndeps: []\njustified_by: []\nforward_refs: []\n---\n\n## Statement\n\n${id}.\n\n## Proof\n\nImmediate.\n`;
const sha = (value: string) => createHash('sha256').update(value).digest('hex');
const canonical = (value: any): any => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]))
    : value;
const hashValue = (value: any) => sha(JSON.stringify(canonical(value)) ?? 'undefined');

function writeStep5Evidence(root: string, id: string, evidencePath: string) {
  const text = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
  const pages = JSON.parse(readFileSync(join(root, 'research/r-batch-1.pages.json'), 'utf8'));
  const page = pages.find((entry: any) => entry.items?.some((value: any) => value.id === id));
  const manifestItem = page.items.find((value: any) => value.id === id);
  const contract = JSON.parse(readFileSync(join(root, 'research/r-batch-1.proof-contracts.json'), 'utf8'))
    .contracts[id];
  writeFileSync(evidencePath, [
    'Run: r', `Item: ${id}`,
    `item_file_sha256: ${sha(text)}`,
    `manifest_sha256: ${hashValue({ ...manifestItem, __step6_page_id: String(page.id) })}`,
    `contract_sha256: ${hashValue(contract)}`,
    'Independent review: no unresolved defect found.',
  ].join('\n'));
}

function writeStep5ManifestRepairEvidence(root: string, id: string, evidencePath: string,
  baselineManifestEntry: any, repairKind: string, review: any) {
  writeStep5Evidence(root, id, evidencePath);
  const text = readFileSync(evidencePath, 'utf8');
  const pages = JSON.parse(readFileSync(join(root, 'research/r-batch-1.pages.json'), 'utf8'));
  const page = pages.find((entry: any) => entry.items?.some((value: any) => value.id === id));
  const manifestItem = page.items.find((value: any) => value.id === id);
  const currentManifestEntry = { ...manifestItem, __step6_page_id: String(page.id) };
  const itemText = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
  const contract = JSON.parse(readFileSync(join(root, 'research/r-batch-1.proof-contracts.json'), 'utf8'))
    .contracts[id];
  const evidence = {
    version: 1, policy: 'step5-manifest-repair-evidence-v1', run: 'r', step: 5,
    id, page: String(page.id), batch: '1', repair_kind: repairKind,
    baseline_manifest_sha256: hashValue(baselineManifestEntry),
    current_manifest_sha256: hashValue(currentManifestEntry),
    baseline_manifest_entry: baselineManifestEntry,
    current_manifest_entry: currentManifestEntry,
    current_carriers: {
      item_file_sha256: sha(itemText),
      manifest_sha256: hashValue(currentManifestEntry),
      contract_sha256: hashValue(contract),
    },
    review,
  };
  writeFileSync(evidencePath, `${text}\n\n\`\`\`step5-manifest-repair\n${JSON.stringify(evidence, null, 2)}\n\`\`\`\n`);
}

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

function carriedStep7Fixture(t: any, { itemChanged = true, itemAt = '2025-01-01T00:00:25.000Z',
  step7Result = {} }: any = {}) {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeAuditorCreatedBaseline(root, 'r', 5);
  const id = 'lem-created';
  const itemPath = join(root, 'items', `${id}.md`);
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const contractPath = join(root, 'research/r-batch-1.proof-contracts.json');
  writeFileSync(itemPath, item(id));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  manifest[0].items.push({ id, deps: [] });
  writeFileSync(manifestPath, JSON.stringify(manifest));
  writeFileSync(contractPath, JSON.stringify({ contracts: { [id]: { risk: 'low' } } }));
  const step5At = new Date('2025-01-01T00:00:05.000Z');
  for (const path of [itemPath, manifestPath, contractPath]) utimesSync(path, step5At, step5At);
  writeFileSync(join(root, 'research/r-dispatch/step5.result.json'), JSON.stringify({
    run: 'r', role: 'alpha', ok: true, label: '5a-a', covers: ['1'],
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z',
  }));
  certifyAuditorCreatedItems(root, 'r', 5);
  writeAuditorCreatedBaseline(root, 'r', 7);
  const baselinePath = join(root, 'research/r-step7-auditor-baseline.json');
  const baseline = JSON.parse(readFileSync(baselinePath, 'utf8'));
  baseline.at = '2025-01-01T00:00:15.000Z';
  writeFileSync(baselinePath, JSON.stringify(baseline));
  writeFileSync(itemPath, itemChanged ? item(id).replace('Immediate.', 'Repaired proof.') : item(id));
  utimesSync(itemPath, new Date(itemAt), new Date(itemAt));
  writeFileSync(contractPath, JSON.stringify({ contracts: { [id]: { risk: 'high' } } }));
  const late = new Date('2025-01-01T00:00:35.000Z');
  utimesSync(contractPath, late, late);
  writeFileSync(join(root, 'research/r-dispatch/step7.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-adjudicate', ok: true, label: 'step7-a', covers: ['1'],
    started_at: '2025-01-01T00:00:20.000Z', ended_at: '2025-01-01T00:00:30.000Z',
    ...step7Result,
  }));
  const evidence = join(root, 'research/owner-lem-created.md');
  writeFileSync(evidence, 'lem-created: owner checked the repaired proof, manifest and late contract against current sources.');
  return { root, id, itemPath, manifestPath, contractPath, evidence };
}

function carriedStep5Fixture(t: any, { step5Result = {}, seedItem = null,
  seedManifestItem = null, removeBaseFromRun = false, id = 'lem-created' }: any = {}) {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const itemPath = join(root, 'items', `${id}.md`);
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const contractPath = join(root, 'research/r-batch-1.proof-contracts.json');
  const pages = JSON.parse(readFileSync(manifestPath, 'utf8'));
  Object.assign(pages[0], { kind: 'A', companion: 'page-b' });
  pages.push({ id: 'page-b', kind: 'B', companion: 'page-a', items: [] });
  if (removeBaseFromRun) pages[0].items = pages[0].items.filter((entry: any) => entry.id !== 'lem-base');
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeAuditorBaseline(root, 'r');
  const step3Baseline = JSON.parse(readFileSync(join(root, 'research/r-step3-auditor-baseline.json'), 'utf8'));
  const step3At = Date.parse(step3Baseline.at);
  const authoredAt = new Date(step3At + 5_000);
  writeFileSync(itemPath, seedItem ?? item(id));
  pages[0].items.push(seedManifestItem ?? { id, deps: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  const contracts = JSON.parse(readFileSync(contractPath, 'utf8'));
  contracts.contracts[id] = { risk: 'low' };
  writeFileSync(contractPath, JSON.stringify(contracts));
  for (const path of [itemPath, manifestPath, contractPath]) utimesSync(path, authoredAt, authoredAt);
  const step3Author = join(root, 'research/r-dispatch/alpha-high-author.result.json');
  writeFileSync(step3Author, JSON.stringify({ run: 'r', role: 'alpha-high',
    label: 'step3b-a-0123456789abcdef', covers: ['1'], ok: true,
    started_at: new Date(step3At).toISOString(), ended_at: new Date(step3At + 10_000).toISOString() }));
  certifyAuditorItems(root, 'r');

  writeAuditorCreatedBaseline(root, 'r', 5);
  const step5Baseline = JSON.parse(readFileSync(join(root, 'research/r-step5-auditor-baseline.json'), 'utf8'));
  const step5At = Date.parse(step5Baseline.at);
  const contractChangedAt = new Date(step5At + 5_000);
  contracts.contracts[id] = { risk: 'reviewed-low' };
  writeFileSync(contractPath, JSON.stringify(contracts));
  utimesSync(contractPath, contractChangedAt, contractChangedAt);
  const step5Author = join(root, 'research/r-dispatch/alpha-5a-a.result.json');
  writeFileSync(step5Author, JSON.stringify({ run: 'r', role: 'alpha', label: '5a-a',
    covers: ['1'], ok: true, started_at: new Date(step5At + 10_000).toISOString(),
    ended_at: new Date(step5At + 20_000).toISOString(), ...step5Result }));
  const evidence = join(root, 'research/owner-lem-created.md');
  writeStep5Evidence(root, id, evidence);
  const baselineItem = pages[0].items.find((entry: any) => entry.id === id);
  const baselineManifestEntry = { ...baselineItem, __step6_page_id: String(pages[0].id) };
  return { root, id, itemPath, manifestPath, contractPath, evidence, step5At, baselineManifestEntry };
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

test('Step 7 can first certify a carried item after a late contract repair with owner evidence', t => {
  const f = carriedStep7Fixture(t);
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/);
  recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'Reviewed the current Step-7 item, manifest entry and late contract repair.');
  const receipt = certifyAuditorCreatedItems(f.root, 'r', 7);
  assert.equal(receipt.items.length, 1);
  assert.equal(receipt.items[0].author_result, 'step7.result.json');
  assert.ok(receipt.items[0].owner_recertification?.sha256);
  assert.equal(loadAuditorCreatedCertifications(join(f.root,
    'research/r-step7-auditor-certifications.json')).length, 1);
  writeFileSync(f.evidence, 'tampered evidence');
  assert.throws(() => loadAuditorCreatedCertifications(join(f.root,
    'research/r-step7-auditor-certifications.json')), /invalid owner recertification/);
});

for (const [label, options] of [
  ['item written after the author dispatch', { itemAt: '2025-01-01T00:00:31.000Z' }],
  ['wrong author role', { step7Result: { role: 'tool' } }],
  ['wrong author label', { step7Result: { label: 'unrecognized-step7' } }],
  ['wrong batch coverage', { step7Result: { covers: ['2'] } }],
  ['failed author dispatch', { step7Result: { ok: false } }],
] as const) {
  test(`Step-7 first owner attestation rejects ${label}`, t => {
    const f = carriedStep7Fixture(t, options);
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
      'Review cannot replace missing author provenance.'), /no prior auditor-created certification.*eligible Step 7 owner bootstrap/);
  });
}

test('Step-7 first owner attestation requires earlier Step-5 provenance', t => {
  const f = carriedStep7Fixture(t);
  rmSync(join(f.root, 'research/r-step5-auditor-certifications.json'));
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'An author dispatch alone cannot establish a carried origin.'), /no prior auditor-created certification.*eligible Step 7 owner bootstrap/);
});

test('Step-7 first owner attestation stays bound to the exact current contract', t => {
  const f = carriedStep7Fixture(t);
  recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'Reviewed the current Step-7 item, manifest entry and late contract repair.');
  writeFileSync(f.contractPath, JSON.stringify({ contracts: { [f.id]: { risk: 'critical' } } }));
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/);
});

test('Step 7 first certifies a carried contract-only delta with owner-authored evidence', t => {
  const f = carriedStep7Fixture(t, { itemChanged: false,
    itemAt: '2025-01-01T00:00:05.000Z' });
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 7), /no successful Step 7/);
  rmSync(f.evidence);
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'Owner reviewed the current contract entry.'), /owner evidence must be a research file/);
  writeFileSync(f.evidence, 'lem-created: owner verified unchanged item and manifest, and reviewed the revised contract entry.');
  const recorded = recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'Owner reviewed the current contract entry after the successful Step-7 adjudication.');
  const owner = JSON.parse(readFileSync(recorded.path, 'utf8'));
  assert.equal(owner.owner, true);
  assert.equal(owner.basis, 'initial-step7-contract-only');
  assert.equal(owner.author_result, 'step7.result.json');
  const receipt = certifyAuditorCreatedItems(f.root, 'r', 7);
  assert.equal(receipt.items.length, 1);
  assert.equal(receipt.items[0].author_result, 'step7.result.json');
  assert.ok(receipt.items[0].owner_recertification?.sha256);
  writeFileSync(f.evidence, 'tampered evidence');
  assert.throws(() => loadAuditorCreatedCertifications(join(f.root,
    'research/r-step7-auditor-certifications.json')), /invalid owner recertification/);
});

test('Step 5 owner bootstrap certifies only a carried contract-only delta with exact review evidence', t => {
  const f = carriedStep5Fixture(t);
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 5), /no successful Step 5/);
  const recorded = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Owner review: checked the Step-3-authored item and current Step-5 contract entry together.');
  const owner = JSON.parse(readFileSync(recorded.path, 'utf8'));
  assert.equal(owner.owner, true);
  assert.equal(owner.basis, 'initial-step5-contract-only');
  assert.equal(owner.author_result, 'alpha-5a-a.result.json');
  const receipt = certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(receipt.items.length, 1);
  assert.equal(receipt.items[0].author_result, 'alpha-5a-a.result.json');
  assert.equal(receipt.items[0].origin_step, 3);
  assert.ok(receipt.items[0].owner_recertification?.sha256);
  assert.equal(loadAuditorCreatedCertifications(join(f.root,
    'research/r-step5-auditor-certifications.json')).length, 1);
  writeFileSync(f.evidence, `${f.id}: tampered after certification.`);
  assert.throws(() => loadAuditorCreatedCertifications(join(f.root,
    'research/r-step5-auditor-certifications.json')), /invalid owner recertification/);
});

test('Step 5 owner receipt stays bound to its original dispatch after a later batch dispatch', t => {
  const f = carriedStep5Fixture(t);
  recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Owner reviewed the exact current Step-5 contract entry.');
  certifyAuditorCreatedItems(f.root, 'r', 5);
  writeFileSync(join(f.root, 'research/r-dispatch/alpha-5b-lead.result.json'), JSON.stringify({
    run: 'r', role: 'alpha', label: '5b-lead', covers: ['all'], ok: true,
    started_at: new Date(f.step5At + 30_000).toISOString(),
    ended_at: new Date(f.step5At + 40_000).toISOString(),
  }));
  const moduleUrl = new URL('../../auditor-created-items.mjs', import.meta.url).href;
  const child = spawnSync(process.execPath, ['--input-type=module', '-e',
    `import { loadAuditorCreatedCertifications } from ${JSON.stringify(moduleUrl)};`
      + `const rows = loadAuditorCreatedCertifications(process.argv[1]);`
      + `process.stdout.write(rows[0].author_result);`,
    join(f.root, 'research/r-step5-auditor-certifications.json')], { encoding: 'utf8' });
  assert.equal(child.status, 0, child.stderr);
  assert.equal(child.stdout, 'alpha-5a-a.result.json');
});

test('Step 5 owner bootstrap certifies a late owner item repair without claiming dispatch authorship', t => {
  const f = carriedStep5Fixture(t);
  writeFileSync(f.itemPath, item(f.id).replace('Immediate.', 'Owner-reviewed repair.'));
  utimesSync(f.itemPath, new Date(f.step5At + 25_000), new Date(f.step5At + 25_000));
  writeStep5Evidence(f.root, f.id, f.evidence);
  const recorded = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Independent owner reviewed the repaired item and current contract against the exact Step-5 carriers.');
  const owner = JSON.parse(readFileSync(recorded.path, 'utf8'));
  assert.equal(owner.basis, 'initial-step5-item-repair');
  assert.equal(owner.author_result, 'alpha-5a-a.result.json');
  const receipt = certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(receipt.items[0].author_result, 'alpha-5a-a.result.json');
  assert.equal(receipt.items[0].origin_step, 3);
  assert.equal(receipt.items[0].judge_sha256, itemHashJudge(readFileSync(f.itemPath, 'utf8')));
  assert.equal(receipt.items[0].owner_recertification?.basis, 'initial-step5-item-repair');
  assert.ok(receipt.items[0].owner_recertification?.sha256);
  assert.equal(loadAuditorCreatedCertifications(join(f.root,
    'research/r-step5-auditor-certifications.json')).length, 1);
});

test('Step 5 owner bootstrap accepts a hash-proven source URL and locator repair only', t => {
  const oldSources = { references: [{ title: 'Source A', url: 'https://example.test/old', locator: 'Old locator' }] };
  const seedItem = item('lem-created').replace('deps: []',
    'deps: []\nsources:\n  references:\n    - title: "Source A"\n      url: "https://example.test/old"\n      locator: "Old locator"');
  const f = carriedStep5Fixture(t, { seedItem,
    seedManifestItem: { id: 'lem-created', deps: [], sources: oldSources } });
  const newSources = { references: [{ title: 'Source A', url: 'https://example.test/current', locator: 'Current locator' }] };
  writeFileSync(f.itemPath, seedItem.replace('https://example.test/old', 'https://example.test/current')
    .replace('Old locator', 'Current locator'));
  const pages = JSON.parse(readFileSync(f.manifestPath, 'utf8'));
  pages[0].items.find((entry: any) => entry.id === f.id).sources = newSources;
  writeFileSync(f.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(f.root, f.id, f.evidence, f.baselineManifestEntry,
    'source-reference-fields', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'sources.references[*].url,locator' });

  const recorded = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Independent owner reviewed the current item and source locators against the verified Step-5 manifest projection.');
  const owner = JSON.parse(readFileSync(recorded.path, 'utf8'));
  assert.equal(owner.basis, 'initial-step5-source-metadata-repair');
  assert.equal(certifyAuditorCreatedItems(f.root, 'r', 5).items[0].owner_recertification?.basis,
    'initial-step5-source-metadata-repair');
});

test('Step 5 source-metadata repair rejects an unverified baseline row or non-source field delta', t => {
  const oldSources = { references: [{ title: 'Source A', url: 'https://example.test/old', locator: 'Old locator' }] };
  const seedItem = item('lem-created').replace('deps: []',
    'deps: []\nsources:\n  references:\n    - title: "Source A"\n      url: "https://example.test/old"\n      locator: "Old locator"');
  const wrongBaseline = carriedStep5Fixture(t, { seedItem,
    seedManifestItem: { id: 'lem-created', deps: [], sources: oldSources } });
  const newSources = { references: [{ title: 'Source A', url: 'https://example.test/current', locator: 'Current locator' }] };
  writeFileSync(wrongBaseline.itemPath, seedItem.replace('https://example.test/old', 'https://example.test/current')
    .replace('Old locator', 'Current locator'));
  let pages = JSON.parse(readFileSync(wrongBaseline.manifestPath, 'utf8'));
  pages[0].items.find((entry: any) => entry.id === wrongBaseline.id).sources = newSources;
  writeFileSync(wrongBaseline.manifestPath, JSON.stringify(pages));
  const forgedBaseline = { ...wrongBaseline.baselineManifestEntry, title: 'Unverified baseline title' };
  writeStep5ManifestRepairEvidence(wrongBaseline.root, wrongBaseline.id, wrongBaseline.evidence,
    forgedBaseline, 'source-reference-fields', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'sources.references[*].url,locator' });
  assert.throws(() => recordOwnerRecertification(wrongBaseline.root, 'r', 5, wrongBaseline.id,
    wrongBaseline.evidence, 'A reconstructed baseline row must hash to the immutable Step-5 carrier.'),
  /eligible Step 5 owner bootstrap/);

  const extraField = carriedStep5Fixture(t, { seedItem,
    seedManifestItem: { id: 'lem-created', deps: [], sources: oldSources } });
  writeFileSync(extraField.itemPath, seedItem.replace('https://example.test/old', 'https://example.test/current')
    .replace('Old locator', 'Current locator'));
  pages = JSON.parse(readFileSync(extraField.manifestPath, 'utf8'));
  const currentEntry = pages[0].items.find((entry: any) => entry.id === extraField.id);
  currentEntry.sources = newSources;
  currentEntry.title = 'Unreviewed manifest title';
  writeFileSync(extraField.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(extraField.root, extraField.id, extraField.evidence,
    extraField.baselineManifestEntry, 'source-reference-fields', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'sources.references[*].url,locator' });
  assert.throws(() => recordOwnerRecertification(extraField.root, 'r', 5, extraField.id,
    extraField.evidence, 'Only source reference URL and locator values are allowed.'),
  /eligible Step 5 owner bootstrap/);

  const unsyncedItem = carriedStep5Fixture(t, { seedItem,
    seedManifestItem: { id: 'lem-created', deps: [], sources: oldSources } });
  const unsyncedSources = { references: [{ title: 'Source A', url: 'https://example.test/current', locator: 'Current locator' }] };
  writeFileSync(unsyncedItem.itemPath, seedItem.replace('Old locator', 'Current locator'));
  pages = JSON.parse(readFileSync(unsyncedItem.manifestPath, 'utf8'));
  pages[0].items.find((entry: any) => entry.id === unsyncedItem.id).sources = unsyncedSources;
  writeFileSync(unsyncedItem.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(unsyncedItem.root, unsyncedItem.id, unsyncedItem.evidence,
    unsyncedItem.baselineManifestEntry, 'source-reference-fields', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'sources.references[*].url,locator' });
  assert.throws(() => recordOwnerRecertification(unsyncedItem.root, 'r', 5, unsyncedItem.id,
    unsyncedItem.evidence, 'The source rows must mirror current item frontmatter.'),
  /eligible Step 5 owner bootstrap/);
});

test('Step 5 owner bootstrap accepts only reviewed additive dependency metadata repairs', t => {
  const f = carriedStep5Fixture(t, { removeBaseFromRun: true });
  writeFileSync(f.itemPath, item(f.id).replace('deps: []', 'deps:\n  - lem-base'));
  const pages = JSON.parse(readFileSync(f.manifestPath, 'utf8'));
  pages[0].items.find((entry: any) => entry.id === f.id).deps = ['lem-base'];
  writeFileSync(f.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(f.root, f.id, f.evidence, f.baselineManifestEntry,
    'dependency-addition', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'deps', reviewed_new_dependencies: ['lem-base'] });

  const recorded = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Independent owner reviewed the added dependency and current proof against the verified Step-5 manifest projection.');
  const owner = JSON.parse(readFileSync(recorded.path, 'utf8'));
  assert.equal(owner.basis, 'initial-step5-dependency-repair');
  assert.equal(certifyAuditorCreatedItems(f.root, 'r', 5).items[0].owner_recertification?.basis,
    'initial-step5-dependency-repair');
});

test('Step 5 dependency-metadata repair rejects unrelated manifest edits and unreviewed suppliers', t => {
  const unrelated = carriedStep5Fixture(t);
  writeFileSync(unrelated.itemPath, item(unrelated.id).replace('deps: []', 'deps:\n  - lem-base'));
  const pages = JSON.parse(readFileSync(unrelated.manifestPath, 'utf8'));
  const row = pages[0].items.find((entry: any) => entry.id === unrelated.id);
  row.deps = ['lem-base'];
  row.title = 'Unreviewed title';
  writeFileSync(unrelated.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(unrelated.root, unrelated.id, unrelated.evidence,
    unrelated.baselineManifestEntry, 'dependency-addition', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'deps', reviewed_new_dependencies: ['lem-base'] });
  assert.throws(() => recordOwnerRecertification(unrelated.root, 'r', 5, unrelated.id,
    unrelated.evidence, 'A dependency repair cannot include a title change.'),
  /eligible Step 5 owner bootstrap/);

  const unreviewed = carriedStep5Fixture(t);
  writeFileSync(unreviewed.itemPath, item(unreviewed.id).replace('deps: []', 'deps:\n  - lem-base'));
  const secondPages = JSON.parse(readFileSync(unreviewed.manifestPath, 'utf8'));
  secondPages[0].items.find((entry: any) => entry.id === unreviewed.id).deps = ['lem-base'];
  writeFileSync(unreviewed.manifestPath, JSON.stringify(secondPages));
  writeStep5ManifestRepairEvidence(unreviewed.root, unreviewed.id, unreviewed.evidence,
    unreviewed.baselineManifestEntry, 'dependency-addition', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      changed_fields: 'deps', reviewed_new_dependencies: [] });
  assert.throws(() => recordOwnerRecertification(unreviewed.root, 'r', 5, unreviewed.id,
    unreviewed.evidence, 'The new dependency must be included in the independent review.'),
  /eligible Step 5 owner bootstrap/);
});

test('Step 5 owner evidence must name the active run and exact current raw carriers', t => {
  const f = carriedStep5Fixture(t);
  writeFileSync(f.evidence, `${f.id}: item_file_sha256 ${'0'.repeat(64)}; run r.`);
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
    'Evidence intentionally carries a stale hash.'), /active run and every exact current carrier hash/);
});

test('Step 5 first owner certification rejects a changed manifest and missing Step-3 origin', t => {
  const itemChanged = carriedStep5Fixture(t);
  writeFileSync(itemChanged.itemPath, `${item('lem-created')}\nAn unreviewed proof change.\n`);
  assert.throws(() => recordOwnerRecertification(itemChanged.root, 'r', 5, itemChanged.id,
    itemChanged.evidence, 'A stale review cannot attest the changed item carrier.'),
  /Step-5 owner evidence must name the active run and every exact current carrier hash/);

  const manifestChanged = carriedStep5Fixture(t);
  const pages = JSON.parse(readFileSync(manifestChanged.manifestPath, 'utf8'));
  pages[0].items.find((entry: any) => entry.id === manifestChanged.id).title = 'Changed title';
  writeFileSync(manifestChanged.manifestPath, JSON.stringify(pages));
  writeStep5Evidence(manifestChanged.root, manifestChanged.id, manifestChanged.evidence);
  assert.throws(() => recordOwnerRecertification(manifestChanged.root, 'r', 5, manifestChanged.id,
    manifestChanged.evidence, 'A contract-only owner receipt cannot cover a changed manifest.'),
  /eligible Step 5 owner bootstrap/);

  const noOrigin = carriedStep5Fixture(t);
  rmSync(join(noOrigin.root, 'research/r-step3-auditor-certifications.json'));
  assert.throws(() => recordOwnerRecertification(noOrigin.root, 'r', 5, noOrigin.id,
    noOrigin.evidence, 'An owner review cannot invent missing Step-3 origin provenance.'),
  /eligible Step 5 owner bootstrap/);
});

for (const [label, step5Result] of [
  ['wrong role', { role: 'tool' }],
  ['wrong label', { label: 'unrecognized-step5' }],
  ['wrong batch', { covers: ['2'] }],
  ['failed dispatch', { ok: false }],
  ['dispatch before baseline', { started_at: '2020-01-01T00:00:00.000Z',
    ended_at: '2020-01-01T00:00:10.000Z' }],
] as const) {
  test(`Step-5 contract-only owner bootstrap rejects ${label}`, t => {
    const f = carriedStep5Fixture(t, { step5Result });
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
      'A contract-only bootstrap requires a successful post-baseline Step-5 dispatch.'),
    /eligible Step 5 owner bootstrap/);
  });
}

for (const [label, options] of [
  ['wrong adjudicator role', { step7Result: { role: 'tool' } }],
  ['wrong adjudicator label', { step7Result: { label: 'unrecognized-step7' } }],
  ['wrong batch coverage', { step7Result: { covers: ['2'] } }],
  ['failed adjudicator dispatch', { step7Result: { ok: false } }],
  ['dispatch predating the Step-7 baseline', { step7Result: {
    started_at: '2025-01-01T00:00:10.000Z', ended_at: '2025-01-01T00:00:14.000Z' } }],
] as const) {
  test(`Step-7 contract-only bootstrap rejects ${label}`, t => {
    const f = carriedStep7Fixture(t, { itemChanged: false,
      itemAt: '2025-01-01T00:00:05.000Z', ...options });
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
      'A changed contract still requires genuine Step-7 provenance.'), /eligible Step 7 owner bootstrap/);
  });
}

test('Step-7 contract-only bootstrap rejects changed item or manifest and unchanged contract', t => {
  const f = carriedStep7Fixture(t, { itemChanged: false,
    itemAt: '2025-01-01T00:00:05.000Z' });
  writeFileSync(f.itemPath, item(f.id).replace('Immediate.', 'Unreviewed proof change.'));
  utimesSync(f.itemPath, new Date('2025-01-01T00:00:05.000Z'), new Date('2025-01-01T00:00:05.000Z'));
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'A changed item cannot use contract-only provenance.'), /eligible Step 7 owner bootstrap/);
  writeFileSync(f.itemPath, item(f.id));
  const manifest = JSON.parse(readFileSync(f.manifestPath, 'utf8'));
  manifest[0].items.find((entry: any) => entry.id === f.id).deps = ['lem-base'];
  writeFileSync(f.manifestPath, JSON.stringify(manifest));
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'A changed manifest cannot use contract-only provenance.'), /eligible Step 7 owner bootstrap/);
  manifest[0].items.find((entry: any) => entry.id === f.id).deps = [];
  writeFileSync(f.manifestPath, JSON.stringify(manifest));
  writeFileSync(f.contractPath, JSON.stringify({ contracts: { [f.id]: { risk: 'low' } } }));
  assert.throws(() => recordOwnerRecertification(f.root, 'r', 7, f.id, f.evidence,
    'An unchanged contract needs no contract-only recertification.'), /eligible Step 7 owner bootstrap/);
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

test('Step-3 certification tolerates later shared-manifest rewrites but rejects later proof edits', t => {
  const root = fixture(); t.after(() => rmSync(root, { recursive: true, force: true }));
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(manifestPath, 'utf8'));
  Object.assign(pages[0], { kind: 'A', companion: 'page-b' });
  pages.push({ id: 'page-b', kind: 'B', companion: 'page-a', items: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeAuditorBaseline(root, 'r');

  const itemPath = join(root, 'items/lem-created.md');
  writeFileSync(itemPath, item('lem-created'));
  pages[0].items.push({ id: 'lem-created', deps: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  const authoredAt = new Date('2025-01-01T00:00:05.000Z');
  for (const path of [itemPath, manifestPath]) utimesSync(path, authoredAt, authoredAt);
  writeFileSync(join(root, 'research/r-dispatch/alpha-high-author.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-high', label: 'step3b-a-0123456789abcdef', covers: ['1'], ok: true,
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z',
  }));

  pages[1].title = 'Later sibling-page edit';
  writeFileSync(manifestPath, JSON.stringify(pages));
  utimesSync(manifestPath, new Date('2025-01-01T00:00:11.000Z'), new Date('2025-01-01T00:00:11.000Z'));
  assert.deepEqual(certifyAuditorItems(root, 'r').items.map((row: any) => row.id), ['lem-created']);

  writeFileSync(itemPath, `${item('lem-created')}\nUnreviewed later proof change.\n`);
  utimesSync(itemPath, new Date('2025-01-01T00:00:12.000Z'), new Date('2025-01-01T00:00:12.000Z'));
  assert.throws(() => certifyAuditorItems(root, 'r'), /changed after its latest successful Step 3/);
});

test('Step-3 recognizes only owner-rehomed legacy published anchors, never preexisting drafts or fake moves', t => {
  const setup = (t: any, { status = 'published', receipt = true, approvedBy = 'owner', toPage = 'page-a' } = {}) => {
    const root = fixture(); t.after(() => rmSync(root, { recursive: true, force: true }));
    const manifestPath = join(root, 'research/r-batch-1.pages.json');
    const pages = JSON.parse(readFileSync(manifestPath, 'utf8'));
    Object.assign(pages[0], { kind: 'A', companion: 'page-b' });
    pages.push({ id: 'page-b', kind: 'B', companion: 'page-a', items: [] });
    writeFileSync(manifestPath, JSON.stringify(pages));

    const id = 'def-legacy-published';
    writeFileSync(join(root, 'items', `${id}.md`),
      `---\nid: ${id}\nkind: definition\ntitle: "Legacy published item"\nstatus: ${status}\ndeps: []\n---\n\n## Statement\n\nLegacy item.\n`);
    writeAuditorBaseline(root, 'r');
    pages[0].items.push({ id, deps: [] });
    writeFileSync(manifestPath, JSON.stringify(pages));
    if (receipt) writeFileSync(join(root, 'research/r-rehomed.json'), JSON.stringify({
      version: 1, run: 'r', approved_by: approvedBy, approved_on: '2026-09-29',
      items: [{ id, from_page: 'old-page', to_page: toPage, reason: 'Owner-approved item re-home.' }],
    }));
    return { root, id };
  };

  const accepted = setup(t, {});
  assert.deepEqual(certifyAuditorItems(accepted.root, 'r').items, [],
    'the immutable baseline plus an exact owner re-home receipt recognizes the legacy published anchor');

  for (const [label, options] of [
    ['no owner receipt', { receipt: false }],
    ['unapproved receipt', { approvedBy: 'reviewer' }],
    ['wrong destination page', { toPage: 'another-page' }],
    ['preexisting draft despite a matching receipt', { status: 'draft' }],
  ] as const) {
    const f = setup(t, options);
    assert.throws(() => certifyAuditorItems(f.root, 'r'), /existed on disk before Step 3|Invalid owner re-home receipt/, label);
  }
});

test('Step-3 first certification pairs original author provenance with a current owner repair', t => {
  const root = fixture(); t.after(() => rmSync(root, { recursive: true, force: true }));
  const manifestPath = join(root, 'research/r-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(manifestPath, 'utf8'));
  Object.assign(pages[0], { kind: 'A', companion: 'page-b' });
  pages.push({ id: 'page-b', kind: 'B', companion: 'page-a', items: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeAuditorBaseline(root, 'r');

  const id = 'lem-created';
  const itemPath = join(root, `items/${id}.md`);
  pages[0].items.push({ id, deps: [] });
  writeFileSync(manifestPath, JSON.stringify(pages));
  writeFileSync(itemPath, item(id).replace('Immediate.', 'Owner-repaired proof.'));
  const repairedAt = new Date('2025-01-01T00:00:12.000Z');
  utimesSync(itemPath, repairedAt, repairedAt);
  recordStep3(root, { run: 'r', phase: 'scope', page: 'page-a', item: undefined,
    decision: 'proceed', reason: 'Owner approved the current scope containing the necessary local supplier.',
    owner: true, confidence: undefined, dependencies: undefined });
  recordStep3(root, { run: 'r', phase: 'item', page: undefined, item: id,
    decision: 'repaired', dependencies: [],
    reason: 'Owner checked the repaired proof and its current empty dependency closure.',
    owner: true, confidence: undefined });

  assert.throws(() => certifyAuditorItems(root, 'r'), /no successful Step 3/,
    'an owner repair cannot replace original author provenance');
  const authorLabel = 'step3b-a-0123456789abcdef';
  writeFileSync(join(root, 'research/r-dispatch/alpha-high-author.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-high', label: authorLabel, covers: ['1'], ok: true,
    started_at: '2025-01-01T00:00:00.000Z', ended_at: '2025-01-01T00:00:10.000Z',
  }));

  assert.throws(() => certifyAuditorItems(root, 'r'), /changed after its latest successful Step 3/,
    'a late owner-created file cannot borrow an old covering result as its origin');
  // Establish genuine native creation in its own write window before testing
  // later owner recertification against the immutable surviving native receipt.
  utimesSync(itemPath, new Date('2025-01-01T00:00:05.000Z'), new Date('2025-01-01T00:00:05.000Z'));
  certifyAuditorItems(root, 'r');
  writeFileSync(itemPath, `${item(id)}\nLater owner proof repair.\n`);
  utimesSync(itemPath, repairedAt, repairedAt);
  recordStep3(root, { run: 'r', phase: 'item', page: undefined, item: id,
    decision: 'repaired', dependencies: [], reason: 'Owner checked the later repaired proof.',
    owner: true, confidence: undefined });
  const receipt = certifyAuditorItems(root, 'r');
  assert.equal(receipt.items.length, 1);
  assert.equal(receipt.items[0].author_result, authorLabel);
  assert.ok(receipt.items[0].owner_recertification?.sha256);
  const reused = certifyAuditorItems(root, 'r');
  assert.deepEqual(reused.items[0].owner_recertification, receipt.items[0].owner_recertification,
    'a later certification pass must retain the owner repair binding');
  const certificationPath = join(root, 'research/r-step3-auditor-certifications.json');
  const unbound = JSON.parse(readFileSync(certificationPath, 'utf8'));
  delete unbound.items[0].owner_recertification;
  writeFileSync(certificationPath, JSON.stringify(unbound));
  const restored = certifyAuditorItems(root, 'r');
  assert.deepEqual(restored.items[0].owner_recertification, receipt.items[0].owner_recertification,
    'a current owner receipt restores a binding lost by an older certifier pass');
  rmSync(join(root, 'research/r-step3b-owner-lem-created.json'));
  assert.throws(() => certifyAuditorItems(root, 'r'), /prior owner repair is no longer current|changed after its latest successful Step 3/,
    'the original author result cannot silently replace a missing owner repair');
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
  for (const module of ['models', 'judge-currency', 'step7-adjudication-compat', 'step7-terminal-resolution',
    'step7-certification-consumer', 'step7-workflow', 'step7-rounds', 'context-hash-pool',
    'auditor-created-items', 'item-hash', 'frontmatter-list', 'published-repair-policy', 'content-policy-lib'])
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
  [5, 'alpha', ['5a-a', '5a-batch-1', '5a-batch-30', '5b-lead', 'gate-batch-1-a', 'gate-batch-2-all',
    '5a-gate-risk-report-1-a', '5a-gate-risk-report-2-unowned',
    '5a-gate-stage-stalemate-1', '5a-edge-step5-routing-1',
    '5b-gate-risk-report-1', '5b-edge-step5-cross-group-2']],
  [7, 'alpha-adjudicate', ['step7-a', 'step7-guard-a-round-1', 'step7-guard-review-round-2',
    'step7-preflight-a-1', 'step7-preflight-review-2', 'cross-group-a-round-1',
    'adjudicate-closure-recovery-a-1', 'adjudicate-closure-recovery-1', 'repair-8-a-round-1', 'repair-8-round-1',
    'step7-v2-initial-r1-u1', 'step7-v2-repeat-r12-u15']],
  [7, 'alpha-repair', ['step7-v2-impact-initial-r1-u1', 'step7-v2-impact-repeat-pass-2-r3-u2',
    'step7-v2-gate-r4-u3']],
  [7, 'final-adjudicator', ['step7-fa-a-round-1']],
  [8, 'alpha', ['step8-lead', 'step8-changes-adjudicate-1', 'step8-carried-adjudicate-a-1',
    'step8-carried-adjudicate-1', 'step8-gate-adjudication-1', 'impact-close-1',
    'step8-close-adjudicate-1', 'step8-close-carried-a-1', 'step8-close-carried-1', 'receipts', 'receipts-fix-1']],
];

test('every emitted author-capable family is accepted only at its own stage and role', () => {
  for (const [ownStep, ownRole, labels] of emittedRoutes) for (const label of labels)
    for (const step of [3, 5, 7, 8, 9]) for (const role of ['alpha-high', 'alpha', 'alpha-adjudicate', 'alpha-repair', 'final-adjudicator', 'tool'])
      assert.equal(authorResultAllowed(step, { ok: true, started_at: '2025-01-01', ended_at: '2025-01-02', covers: ['1'], role, label }),
        step === ownStep && role === ownRole, `${step}/${role}/${label}`);
});

test('generic, cross-step substrings and malformed author labels never establish provenance', () => {
  for (const label of ['5a-', '5a-batch-0', '5a-batch-01', '5a-batch-x', '5b-anything', 'not-step7-malformed', 'rejudge', 'final-adjudication',
    'not-step8-malformed', 'step8-fix-step7-guard-1', 'impact-close', 'step7-aa',
    'step7-fa-a-round-0', 'step7-fa-a-round-01', 'step7-fa-a-round-1-extra',
    'step3b-a', 'step3b-aa-0123456789abcdef', 'step3b-a-0123456789abcdeg'])
    for (const step of [3, 5, 7, 8]) for (const role of ['alpha-high', 'alpha', 'alpha-adjudicate', 'alpha-repair', 'final-adjudicator'])
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

function ownerCreationFixture(t: any) {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeAuditorCreatedBaseline(root, 'r', 5);
  const id = 'lem-owner-created', path = join(root, `items/${id}.md`);
  writeFileSync(path, item(id));
  const pagesPath = join(root, 'research/r-batch-1.pages.json');
  const pages = JSON.parse(readFileSync(pagesPath, 'utf8'));
  pages[0].items.push({ id, deps: [] });
  writeFileSync(pagesPath, JSON.stringify(pages));
  const text = readFileSync(path, 'utf8');
  const manifest_sha256 = hashValue({ id, deps: [], __step6_page_id: 'page-a' });
  const contract_sha256 = hashValue(null), item_file_sha256 = sha(text);
  writeFileSync(join(root, 'research/r-batch-1.proof-contracts.json'), JSON.stringify({ contracts: { [id]: null } }));
  const source = 'research/owner-source.md';
  const sourceText = `r ${id} /root/actual_repair escalation-a: authored after the stage baseline, on owner assignment to resolve this owner-held escalation. Exact interval unavailable.`;
  writeFileSync(join(root, source), sourceText);
  const receipt: any = {
    version: 1, policy: 'owner-spawned-step5-creation-v1', evidence_class: 'owner-spawned-creation',
    run: 'r', step: 5, id, page: 'page-a', batch: '1', owner: true, owner_identity: '/root',
    attested_at: new Date().toISOString(), reason: 'Necessary prerequisite repair',
    owner_held_escalation: 'escalation-a', author: { identity: '/root/actual_repair',
      timeline: { mode: 'unknown', after_baseline: true, reason: 'Exact author interval was not retained' } },
    baseline_sha256: sha(JSON.stringify(JSON.parse(readFileSync(join(root, 'research/r-step5-auditor-baseline.json'), 'utf8')))),
    carriers: { guard_sha256: itemHashGuard(text), judge_sha256: itemHashJudge(text),
      item_file_sha256, manifest_sha256, contract_sha256,
      step5_subject_sha256: hashValue({ item_sha256: item_file_sha256, manifest_sha256, contract_sha256 }) },
    sources: ['assignment', 'escalation', 'authorship'].map(role => ({ role, path: source, sha256: sha(sourceText) })),
  };
  const evidence = 'research/owner-attestation.json';
  const write = () => writeFileSync(join(root, evidence), JSON.stringify(receipt));
  write();
  return { root, id, path, receipt, evidence, write };
}

test('explicit owner-spawned creation remains distinct, source-bound and recertifiable', t => {
  const f = ownerCreationFixture(t);
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 5), /no successful/);
  recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
  const certified = certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(certified.items[0].author_result, undefined);
  assert.equal(certified.items[0].evidence_class, 'owner-spawned-creation');
  const certification = join(f.root, 'research/r-step5-auditor-certifications.json');
  assert.equal(loadAuditorCreatedCertifications(certification).length, 1);
  writeFileSync(f.path, item(f.id).replace('Immediate.', 'Owner repaired the argument.'));
  assert.throws(() => loadAuditorCreatedCertifications(certification), /stale Step 5/);
  assert.throws(() => certifyAuditorCreatedItems(f.root, 'r', 5), /explicit owner recertification/);
  const review = 'research/current-owner-evidence.md';
  writeStep5Evidence(f.root, f.id, join(f.root, review));
  recordOwnerRecertification(f.root, 'r', 5, f.id, review, 'Owner checked changed carriers');
  certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(loadAuditorCreatedCertifications(certification).length, 1);
  writeFileSync(join(f.root, 'research/owner-source.md'), 'Altered historical evidence');
  assert.throws(() => loadAuditorCreatedCertifications(certification), /stale owner creation source/);
});

test('owner creation rejects invented native identity, missing sources, stale hashes and preexistence', t => {
  for (const mutate of [
    (f: any) => { f.receipt.author_result = 'fictional.result.json'; },
    (f: any) => { f.receipt.independent_audit = { ok: true }; },
    (f: any) => { f.receipt.author.identity = '/root'; },
    (f: any) => { f.receipt.author.timeline.after_baseline = false; },
    (f: any) => { f.receipt.sources.pop(); },
    (f: any) => { f.receipt.sources[0].sha256 = '0'.repeat(64); },
    (f: any) => { f.receipt.carriers.item_file_sha256 = '0'.repeat(64); },
    (f: any) => { f.receipt.baseline_sha256 = '0'.repeat(64); },
    (f: any) => { f.receipt.sources[0].path = '../outside.md'; },
    (f: any) => { const p = join(f.root, 'research/r-step5-auditor-baseline.json');
      const b = JSON.parse(readFileSync(p, 'utf8')); b.existing_item_files.push(f.id);
      writeFileSync(p, JSON.stringify(b)); f.receipt.baseline_sha256 = sha(JSON.stringify(b)); },
  ]) {
    const f = ownerCreationFixture(t); mutate(f); f.write();
    assert.throws(() => recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence));
  }
});

test('later native promotion validates and preserves the owner-created Step-5 origin', t => {
  const f = ownerCreationFixture(t);
  recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
  certifyAuditorCreatedItems(f.root, 'r', 5);
  writeAuditorCreatedBaseline(f.root, 'r', 7);
  writeFileSync(f.path, item(f.id).replace('Immediate.', 'Native Step-7 repair.'));
  const now = Date.now();
  writeFileSync(join(f.root, 'research/r-dispatch/step7.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-adjudicate', ok: true, label: 'step7-a', covers: ['1'],
    started_at: new Date(now - 10000).toISOString(), ended_at: new Date(now + 10000).toISOString(),
  }));
  const later = certifyAuditorCreatedItems(f.root, 'r', 7);
  assert.equal(later.items[0].origin_step, 5);
  assert.equal(later.items[0].author_result, 'step7.result.json');
  assert.equal(loadAuditorCreatedCertifications([
    join(f.root, 'research/r-step5-auditor-certifications.json'),
    join(f.root, 'research/r-step7-auditor-certifications.json'),
  ]).length, 1);
  const originPath = join(f.root, 'research/r-step5-owner-creation-lem-owner-created.json');
  const origin = JSON.parse(readFileSync(originPath, 'utf8'));
  origin.author.identity = '/root/invented';
  writeFileSync(originPath, JSON.stringify(origin));
  assert.throws(() => loadAuditorCreatedCertifications(join(f.root,
    'research/r-step7-auditor-certifications.json')), /owner creation/);
});

function currentDefinitionReviewFixture(t: any, { ballLemma = false } = {}) {
  const id = ballLemma ? 'lem-euclidean-balls-are-bounded-c-one-domains' : 'lem-created';
  const kind = ballLemma ? 'lemma' : 'definition';
  const seedItem = item(id).replace('kind: lemma', `kind: ${kind}`);
  const f = carriedStep5Fixture(t, { id, seedItem, seedManifestItem: {
    id, kind, deps: [], statement: 'Old description' } });
  writeFileSync(f.itemPath, seedItem.replace('Immediate.', 'Current definition explanation.'));
  const pages = JSON.parse(readFileSync(f.manifestPath, 'utf8'));
  pages[0].items.find((x: any) => x.id === f.id).statement = 'Current description';
  writeFileSync(f.manifestPath, JSON.stringify(pages));
  writeStep5ManifestRepairEvidence(f.root, f.id, f.evidence, f.baselineManifestEntry,
    'current-definition-manifest-review', { current_item_and_contract_checked: true,
      current_manifest_matches_item: true, no_unresolved_defect: true,
      current_definition_and_direct_consumers_checked: true, direct_consumers: [] });
  const raw = readFileSync(f.evidence, 'utf8');
  const payload: any = JSON.parse(raw.match(/```step5-manifest-repair\n([\s\S]*?)\n```/)![1]);
  delete payload.baseline_manifest_entry;
  payload.historical_delta_unknown = true;
  payload.owner_authorization = { owner: true, reason: 'Owner explicitly authorized current definition review with historical uncertainty preserved' };
  const report = 'research/current-definition-review.md';
  const text = `r ${f.id}: ${payload.owner_authorization.reason}. Current definition and all direct consumers checked.`;
  writeFileSync(join(f.root, report), text);
  payload.sources = [{ path: report, sha256: sha(text) }];
  const write = () => writeFileSync(f.evidence, `${raw.split('```')[0]}\n\`\`\`step5-manifest-repair\n${JSON.stringify(payload)}\n\`\`\`\n`);
  write();
  return { ...f, payload, write };
}

test('explicit current-definition manifest review preserves unknown historical delta and genuine Step3 origin', t => {
  const f = currentDefinitionReviewFixture(t);
  const owner = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence, 'Actual current-content owner resolution');
  const receipt = JSON.parse(readFileSync(owner.path, 'utf8'));
  assert.equal(receipt.historical_delta_unknown, true);
  assert.equal(receipt.basis, 'initial-step5-current-definition-manifest-review');
  assert.equal(receipt.author_result, 'alpha-5a-a.result.json');
  const certificate = certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(certificate.items[0].origin_step, 3);
  assert.equal(loadAuditorCreatedCertifications(join(f.root, 'research/r-step5-auditor-certifications.json')).length, 1);
});

test('current-definition review rejects missing authority, origin, uncertainty, current hashes, sources and consumer coverage', t => {
  for (const mutate of [
    (f: any) => { f.payload.owner_authorization.owner = false; },
    (f: any) => { delete f.payload.historical_delta_unknown; },
    (f: any) => { f.payload.repair_kind = 'ordinary-unclassified-manifest-change'; },
    (f: any) => { f.payload.current_carriers.item_file_sha256 = '0'.repeat(64); },
    (f: any) => { f.payload.sources[0].sha256 = '0'.repeat(64); },
    (f: any) => { f.payload.review.direct_consumers = ['fictional-consumer']; },
    (f: any) => { f.payload.baseline_manifest_entry = f.baselineManifestEntry; },
    (f: any) => { rmSync(join(f.root, 'research/r-step3-auditor-certifications.json')); },
  ]) {
    const f = currentDefinitionReviewFixture(t); mutate(f); f.write();
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
      'Unverified review must not pass'), /eligible Step 5 owner bootstrap/);
  }
});


test('current-definition review cannot omit inline YAML dependencies or labelled wikilink consumers', t => {
  for (const consumer of [
    item('lem-inline-consumer').replace('deps: []', 'deps: [lem-created]'),
    item('lem-inline-consumer').replace('Immediate.', 'Uses [[ lem-created |the current definition]].'),
  ]) {
    const f = currentDefinitionReviewFixture(t);
    writeFileSync(join(f.root, 'items/lem-inline-consumer.md'), consumer);
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
      'Unreviewed consumer must prevent recertification'), /eligible Step 5 owner bootstrap/);
    f.payload.review.direct_consumers = ['lem-inline-consumer'];
    f.write();
    assert.ok(recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
      'Owner explicitly reviewed the complete actual consumer inventory').path);
  }
});


function currentBallLemmaReviewFixture(t: any) {
  const f = currentDefinitionReviewFixture(t, { ballLemma: true });
  f.payload.repair_kind = 'current-ball-lemma-manifest-review';
  delete f.payload.review.current_definition_and_direct_consumers_checked;
  f.payload.review.current_proof_suppliers_and_direct_consumers_checked = true;
  f.payload.proof_checks = {};
  for (const kind of ['precheck', 'rendercheck', 'strict-contract']) {
    const argv = kind === 'precheck' ? ['node', 'tools/tsx-run.mjs', 'tools/precheck.mts', `items/${f.id}.md`]
      : kind === 'rendercheck' ? ['node', 'tools/rendercheck.mjs', `items/${f.id}.md`]
      : ['node', 'tools/proof-contract.mjs', 'research/r-batch-1.proof-contracts.json', '--strict', '--items', f.id];
    const check = { version: 1, run: 'r', step: 5, id: f.id, kind, observed_at: new Date().toISOString(),
      exit_code: 0, argv, current_carriers: f.payload.current_carriers };
    const path = `research/current-${kind}-check.json`, bytes = JSON.stringify(check);
    writeFileSync(join(f.root, path), bytes);
    f.payload.proof_checks[kind] = { path, sha256: sha(bytes) };
  }
  f.write();
  return f;
}

test('exact ball-lemma owner review binds current proof checks and preserves historical uncertainty separately', t => {
  const f = currentBallLemmaReviewFixture(t);
  const result = recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence, 'Owner reviewed the exact ball proof and consumers');
  const receipt = JSON.parse(readFileSync(result.path, 'utf8'));
  assert.equal(receipt.basis, 'initial-step5-current-ball-lemma-manifest-review');
  assert.equal(receipt.historical_delta_unknown, true);
  assert.equal(certifyAuditorCreatedItems(f.root, 'r', 5).items[0].origin_step, 3);
});

test('ball-lemma review rejects unsupported kinds, missing proof checks, unreviewed consumers and stale current hashes', t => {
  for (const mutate of [
    (f: any) => { f.payload.current_manifest_entry.kind = 'theorem'; },
    (f: any) => { delete f.payload.proof_checks.precheck; },
    (f: any) => { f.payload.proof_checks.rendercheck.sha256 = '0'.repeat(64); },
    (f: any) => { f.payload.current_carriers.contract_sha256 = '0'.repeat(64); },
    (f: any) => { f.payload.review.current_proof_suppliers_and_direct_consumers_checked = false; },
    (f: any) => { writeFileSync(join(f.root, 'items/lem-unreviewed.md'),
      item('lem-unreviewed').replace('deps: []', `deps: [${f.id}]`)); },
  ]) {
    const f = currentBallLemmaReviewFixture(t); mutate(f); f.write();
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, f.evidence,
      'No proof or consumer evidence may be omitted'), /eligible Step 5 owner bootstrap/);
  }
  const other = currentDefinitionReviewFixture(t);
  other.payload.repair_kind = 'current-ball-lemma-manifest-review'; other.write();
  assert.throws(() => recordOwnerRecertification(other.root, 'r', 5, other.id, other.evidence,
    'Ball-lemma authorization cannot cover another subject'), /eligible Step 5 owner bootstrap/);
});


function splitFixture(t: any) {
  const root = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const path = join(root, 'research/r-batch-1.pages.json');
  const pages = [
    { id: 'page-a', kind: 'A', companion: 'page-b', items: [{ id: 'lem-base', deps: [] }, { id: 'lem-moved', deps: [] }] },
    { id: 'page-b', kind: 'B', companion: 'page-a', items: [] },
  ];
  writeFileSync(path, JSON.stringify(pages));
  writeAuditorBaseline(root, 'r');
  const baselinePath = join(root, 'research/r-step3-auditor-baseline.json');
  const baselineBytes = readFileSync(baselinePath, 'utf8');
  const moved = pages[0].items.pop();
  const current = [...pages, { id: 'page-c', kind: 'A', companion: 'page-d', items: [moved] },
    { id: 'page-d', kind: 'B', companion: 'page-c', items: [] }];
  const write = () => writeFileSync(path, JSON.stringify(current));
  write();
  const reason = 'Owner authorized conserving all items across the two pairs';
  const evidence = 'research/split-authorization.json';
  const bytes = JSON.stringify({ version: 1, run: 'r', owner: true, action: 'step3-owner-pair-split',
    from_page: 'page-a', new_pages: ['page-a', 'page-c'], reason });
  writeFileSync(join(root, evidence), bytes);
  const input = { from_page: 'page-a', new_pages: ['page-a', 'page-c'],
    authorization: { owner: true, reason, evidence, evidence_sha256: sha(bytes) } };
  return { root, current, write, baselinePath, baselineBytes, input };
}

test('owner pair split supplements both scopes without moving the immutable inventory', t => {
  const f = splitFixture(t);
  const registered = registerOwnerPairSplit(f.root, 'r', f.input);
  assert.deepEqual(registered.split.items.map((row: any) => row.id), ['lem-base', 'lem-moved']);
  assert.equal(registered.split.items.find((row: any) => row.id === 'lem-moved').page, 'page-c');
  assert.equal(readFileSync(f.baselinePath, 'utf8'), f.baselineBytes);
  assert.deepEqual(ownerPairSplitScopes(f.root, 'r').map((row: any) => row.page), ['page-a', 'page-c']);
  assert.throws(() => registerOwnerPairSplit(f.root, 'r', f.input), /replace an existing/);
});

test('owner pair split refuses losses, additions, fabricated authorization and baseline tampering', t => {
  for (const mutate of [
    (f: any) => { f.current[2].items = []; f.write(); },
    (f: any) => { f.current[2].items.push({ id: 'lem-added', deps: [] }); f.write(); },
    (f: any) => { f.current[0].items.push(f.current[2].items[0]); f.write(); },
    (f: any) => { f.input.authorization.owner = false; },
    (f: any) => { f.input.authorization.evidence_sha256 = '0'.repeat(64); },
    (f: any) => { f.input.authorization.reason = 'Invented authorization'; },
  ]) {
    const f = splitFixture(t); mutate(f);
    assert.throws(() => registerOwnerPairSplit(f.root, 'r', f.input));
    assert.equal(readFileSync(f.baselinePath, 'utf8'), f.baselineBytes);
  }
  const f = splitFixture(t);
  registerOwnerPairSplit(f.root, 'r', f.input);
  writeFileSync(f.baselinePath, f.baselineBytes + '\n');
  assert.throws(() => ownerPairSplitScopes(f.root, 'r'), /immutable baseline binding/);
});

test('new split pair certifies auditor additions while original items retain their evidence class', t => {
  const f = splitFixture(t);
  registerOwnerPairSplit(f.root, 'r', f.input);
  const before = scopeHash(loadStep3(f.root, 'r'), 'page-c');
  recordStep3(f.root, { run: 'r', phase: 'scope', page: 'page-c', owner: true,
    decision: 'proceed', reason: 'Owner approved the split scope' });
  f.current[2].items.push({ id: 'lem-added', deps: [] } as any);
  f.current[0].items.push({ id: 'lem-added-retained', deps: [] }); f.write();
  writeFileSync(join(f.root, 'items/lem-added.md'), item('lem-added'));
  writeFileSync(join(f.root, 'items/lem-added-retained.md'), item('lem-added-retained'));
  writeFileSync(join(f.root, 'research/r-dispatch/alpha-high-retained.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-high', label: 'step3b-pair-page-a-0123456789abcdef', covers: ['page-a'], ok: true,
    started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
  }));
  writeFileSync(join(f.root, 'research/r-dispatch/alpha-high-split.result.json'), JSON.stringify({
    run: 'r', role: 'alpha-high', label: 'step3b-pair-page-c-0123456789abcdef', covers: ['page-c'], ok: true,
    started_at: '2000-01-01T00:00:00Z', ended_at: '2100-01-01T00:00:00Z',
  }));
  const receipt = certifyAuditorItems(f.root, 'r');
  assert.deepEqual(receipt.items.map((row: any) => row.id), ['lem-added', 'lem-added-retained']);
  assert.equal(receipt.scopes.find((row: any) => row.page === 'page-c').baseline_sha256, before);
  assert.equal(scopeDecision(loadStep3(f.root, 'r'), 'page-c').closed, true);
  assert.equal(readFileSync(f.baselinePath, 'utf8'), f.baselineBytes);
  f.current[2].items = f.current[2].items.filter((row: any) => row.id !== 'lem-moved'); f.write();
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /item mapping changed/);
});


test('registration permits unrelated author additions but rejects stealing another baseline pair item', t => {
  for (const steal of [false, true]) {
    const f = splitFixture(t);
    const baseline: any = JSON.parse(f.baselineBytes);
    baseline.items.push({ id: 'lem-unrelated', page: 'page-e', batch: '1' });
    baseline.scopes.push({ page: 'page-e', sha256: '1'.repeat(64) });
    writeFileSync(f.baselinePath, JSON.stringify(baseline));
    f.current.push({ id: 'page-e', kind: 'A', companion: 'page-f', items: [
      { id: 'lem-unrelated', deps: [] }, { id: 'lem-unrelated-added', deps: [] }] } as any,
      { id: 'page-f', kind: 'B', companion: 'page-e', items: [] } as any);
    if (steal) {
      f.current[4].items.shift(); f.current[2].items.push({ id: 'lem-unrelated', deps: [] } as any);
    }
    f.write();
    if (steal) assert.throws(() => registerOwnerPairSplit(f.root, 'r', f.input), /unrelated original item/);
    else assert.equal(registerOwnerPairSplit(f.root, 'r', f.input).split.items.length, 2);
  }
});

test('exact historical owner source archive permits genuine canonical updates without changing origin', t => {
  const f = ownerCreationFixture(t);
  const source = 'research/owner-source.md';
  recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
  const originPath = join(f.root, `research/r-step5-owner-creation-${f.id}.json`);
  const originalOrigin = readFileSync(originPath), originalSource = readFileSync(join(f.root, source));
  const certificate = join(f.root, 'research/r-step5-auditor-certifications.json');
  certifyAuditorCreatedItems(f.root, 'r', 5);
  const archive = recordOwnerSourceArchive(f.root, 'r', 5, f.id, source, '/root', 'Preserve actual escalation before genuine owner resolution');
  assert.equal(archive.reused, false);
  assert.deepEqual(readFileSync(archive.archive), originalSource);
  assert.equal(recordOwnerSourceArchive(f.root, 'r', 5, f.id, source, '/root', 'Same historical source').reused, true);
  writeFileSync(join(f.root, source), 'Genuine updated owner resolution');
  assert.equal(loadAuditorCreatedCertifications(certificate).length, 1);
  assert.equal(certifyAuditorCreatedItems(f.root, 'r', 5).items.length, 1);
  assert.deepEqual(readFileSync(originPath), originalOrigin);
  assert.throws(() => recordOwnerSourceArchive(f.root, 'r', 5, f.id, source, '/root', 'Too late'), /before archive/);
  writeFileSync(f.path, item(f.id).replace('Immediate.', 'Changed current proof.'));
  assert.throws(() => loadAuditorCreatedCertifications(certificate), /stale Step 5/);
});

test('archive command rejects changed, unbound, cross-run and non-Step-5 sources', t => {
  const f = ownerCreationFixture(t);
  recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
  assert.throws(() => recordOwnerSourceArchive(f.root, 'other', 5, f.id, 'research/owner-source.md', '/root', 'Reason'));
  assert.throws(() => recordOwnerSourceArchive(f.root, 'r', 7, f.id, 'research/owner-source.md', '/root', 'Reason'));
  assert.throws(() => recordOwnerSourceArchive(f.root, 'r', 5, f.id, 'research/unbound.md', '/root', 'Reason'));
  assert.throws(() => recordOwnerSourceArchive(f.root, 'r', 5, f.id, 'research/owner-source.md', '', 'Reason'));
  writeFileSync(join(f.root, 'research/owner-source.md'), 'Already changed');
  assert.throws(() => recordOwnerSourceArchive(f.root, 'r', 5, f.id, 'research/owner-source.md', '/root', 'Reason'), /stale owner creation source/);
});

test('archive bytes, receipt identity and immutable-origin binding fail closed on tamper', t => {
  for (const mutate of [
    (f: any, a: any) => writeFileSync(a.archive, 'Fabricated archive'),
    (f: any, a: any) => { const row = JSON.parse(readFileSync(a.path, 'utf8')); row.run = 'other'; writeFileSync(a.path, JSON.stringify(row)); },
    (f: any, a: any) => { const row = JSON.parse(readFileSync(a.path, 'utf8')); row.origin.sha256 = '0'.repeat(64); writeFileSync(a.path, JSON.stringify(row)); },
    (f: any, a: any) => { const row = JSON.parse(readFileSync(a.path, 'utf8')); row.source.path = 'research/different-source.md'; writeFileSync(a.path, JSON.stringify(row)); },
    (f: any, a: any) => { const row = JSON.parse(readFileSync(a.path, 'utf8')); row.archive.path = '../outside.md'; writeFileSync(a.path, JSON.stringify(row)); },
    (f: any, a: any) => { const path = join(f.root, `research/r-step5-owner-creation-${f.id}.json`); const row = JSON.parse(readFileSync(path, 'utf8')); row.reason += ' changed'; writeFileSync(path, JSON.stringify(row)); },
  ]) {
    const f = ownerCreationFixture(t);
    recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
    certifyAuditorCreatedItems(f.root, 'r', 5);
    const a = recordOwnerSourceArchive(f.root, 'r', 5, f.id, 'research/owner-source.md', '/root', 'Preserve original');
    // Make files writable solely to model deliberate tampering with immutable artifacts.
    chmodSync(a.archive, 0o600); chmodSync(a.path, 0o600);
    mutate(f, a);
    writeFileSync(join(f.root, 'research/owner-source.md'), 'Genuine updated resolution');
    assert.throws(() => loadAuditorCreatedCertifications(join(f.root, 'research/r-step5-auditor-certifications.json')));
  }
});

test('owner creation can explicitly recertify a completed contract review before first stage certification', t => {
  const f = ownerCreationFixture(t);
  const contractPath = join(f.root, 'research/r-batch-1.proof-contracts.json');
  const contracts = JSON.parse(readFileSync(contractPath, 'utf8'));
  contracts.contracts[f.id] = { risk_review: { status: 'open' } };
  writeFileSync(contractPath, JSON.stringify(contracts));
  f.receipt.carriers.contract_sha256 = hashValue(contracts.contracts[f.id]);
  f.receipt.carriers.step5_subject_sha256 = hashValue({ item_sha256: f.receipt.carriers.item_file_sha256,
    manifest_sha256: f.receipt.carriers.manifest_sha256, contract_sha256: f.receipt.carriers.contract_sha256 });
  f.write();
  recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
  const originPath = join(f.root, `research/r-step5-owner-creation-${f.id}.json`);
  const immutableOrigin = readFileSync(originPath);
  contracts.contracts[f.id].risk_review.status = 'complete';
  writeFileSync(contractPath, JSON.stringify(contracts));
  const evidence = 'research/owner-current-before-first-cert.md';
  writeStep5Evidence(f.root, f.id, join(f.root, evidence));
  const receipt = recordOwnerRecertification(f.root, 'r', 5, f.id, evidence, 'Owner personally checked the current proof and completed contract risk review');
  const recorded = JSON.parse(readFileSync(receipt.path, 'utf8'));
  assert.equal(recorded.author_result, undefined);
  assert.equal(recorded.basis, undefined);
  assert.equal(recorded.owner_creation.path, `research/r-step5-owner-creation-${f.id}.json`);
  assert.equal(recordOwnerRecertification(f.root, 'r', 5, f.id, evidence, 'Same reviewed content').reused, true);
  const certificate = certifyAuditorCreatedItems(f.root, 'r', 5);
  assert.equal(certificate.items[0].author_result, undefined);
  assert.equal(certificate.items[0].evidence_class, 'owner-spawned-creation');
  assert.equal(certificate.items[0].owner_recertification.path, `research/${receipt.path.split('/').at(-1)}`);
  assert.equal(loadAuditorCreatedCertifications(join(f.root, 'research/r-step5-auditor-certifications.json')).length, 1);
  assert.deepEqual(readFileSync(originPath), immutableOrigin);
});

test('pre-certificate owner recertification rejects missing origin, source tamper, wrong home and stale evidence', t => {
  for (const mutate of [
    (f: any) => rmSync(join(f.root, `research/r-step5-owner-creation-${f.id}.json`)),
    (f: any) => writeFileSync(join(f.root, 'research/owner-source.md'), 'Altered source'),
    (f: any) => { const p = join(f.root, `research/r-step5-owner-creation-${f.id}.json`); const origin = JSON.parse(readFileSync(p, 'utf8')); origin.baseline_sha256 = '0'.repeat(64); writeFileSync(p, JSON.stringify(origin)); },
    (f: any) => { const p = join(f.root, 'research/r-batch-1.pages.json'); const pages = JSON.parse(readFileSync(p, 'utf8')); pages[0].id = 'different-home'; writeFileSync(p, JSON.stringify(pages)); },
    (f: any) => { const p = join(f.root, 'research/r-batch-1.pages.json'); const pages = JSON.parse(readFileSync(p, 'utf8')); pages[0].items = pages[0].items.filter((row: any) => row.id !== f.id); writeFileSync(p, JSON.stringify(pages)); writeFileSync(join(f.root, 'research/r-batch-2.pages.json'), JSON.stringify([{ id: 'page-a', items: [{ id: f.id, deps: [] }] }])); },
    (f: any) => writeFileSync(join(f.root, 'research/early-current.md'), `${f.id} r stale hashes`),
  ]) {
    const f = ownerCreationFixture(t);
    recordOwnerCreation(f.root, 'r', 5, f.id, f.evidence);
    const evidence = 'research/early-current.md';
    writeStep5Evidence(f.root, f.id, join(f.root, evidence));
    mutate(f);
    assert.throws(() => recordOwnerRecertification(f.root, 'r', 5, f.id, evidence, 'Actual owner review'));
  }
});
