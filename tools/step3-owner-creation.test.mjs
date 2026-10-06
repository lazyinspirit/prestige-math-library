import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { writeAuditorBaseline, certifyAuditorItems, certifyCompletedAuditorItems } from './step3-auditor-items.mjs';
import { itemDecision, loadStep3, recordStep3 } from './step3-decisions.mjs';
import { loadStep3OwnerCreation, recordStep3OwnerCreation, step3OwnerCreationClaim, STEP3_OWNER_CREATION_POLICY } from './step3-owner-creation.mjs';

const sha = value => createHash('sha256').update(value).digest('hex');
const item = id => `---\nid: ${id}\nkind: lemma\nstatus: draft\ndeps: []\n---\n## Statement\n\n${id}.\n## Proof\n\nProof.\n`;
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'step3-owner-create-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const dir of ['items', 'research/r-dispatch']) mkdirSync(join(root, dir), { recursive: true });
  const write = (path, bytes) => writeFileSync(join(root, path), bytes);
  const pages = [{ id: 'page-a', kind: 'A', companion: 'page-b', category: 'cat', items: [{ id: 'lem-base', deps: [] }] },
    { id: 'page-b', kind: 'B', companion: 'page-a', category: 'cat', items: [] }];
  const manifests = () => {
    write('research/r-batch-1.pages.json', JSON.stringify(pages));
    utimesSync(join(root, 'research/r-batch-1.pages.json'), new Date('2025-01-01T00:00:12Z'), new Date('2025-01-01T00:00:12Z'));
  };
  write('items/lem-base.md', item('lem-base'));
  write('items/lem-preexisting.md', item('lem-preexisting'));
  manifests(); writeAuditorBaseline(root, 'r');
  const baselineBytes = readFileSync(join(root, 'research/r-step3-auditor-baseline.json'));
  const add = (id = 'lem-owner', deps = []) => {
    pages[0].items.push({ id, kind: 'lemma', title: id, statement: `${id}.`, deps });
    write(`items/${id}.md`, item(id)); manifests();
  };
  const decide = (id = 'lem-owner', deps = []) => {
    recordStep3(root, { run: 'r', phase: 'scope', page: 'page-a', owner: true, decision: 'proceed', reason: 'Reviewed current scope.' });
    return recordStep3(root, { run: 'r', phase: 'item', item: id, owner: true, decision: 'repaired', dependencies: deps, reason: 'Examined current proof inputs.' });
  };
  const evidence = (id = 'lem-owner', changes = {}) => {
    const claim = step3OwnerCreationClaim(loadStep3(root, 'r'), id);
    const receipt = { version: 1, policy: STEP3_OWNER_CREATION_POLICY, evidence_class: 'owner-spawned-creation', run: 'r', step: 3,
      id, owner: true, owner_identity: '/root', author: { identity: '/root/actual_author', timeline: {
        mode: 'unknown', after_baseline: true, reason: 'No retained exact launch or completion timestamps.' } },
      attested_at: new Date().toISOString(), reason: 'Local supplier assigned to a distinct owner helper.',
      owner_held_escalation: 'gap-123', baseline_sha256: sha(JSON.stringify(JSON.parse(baselineBytes))),
      baseline_file_sha256: sha(baselineBytes), ...claim, ...changes };
    const files = { assignment: `Run r item ${id}: /root assigned /root/actual_author to create this helper.`,
      authorship: `Run r item ${id}: /root/actual_author wrote claim ${claim.claim_sha256}; item bytes ${claim.item_file_sha256}.`,
      escalation: 'Run r: owner held gap-123 requires a local supplier.' };
    receipt.sources = Object.entries(files).map(([role, bytes]) => {
      const path = `research/${id}-${role}.md`; write(path, bytes); return { role, path, sha256: sha(bytes) };
    });
    const path = `research/${id}-creation-evidence.json`; write(path, JSON.stringify(receipt));
    return { receipt, path };
  };
  const native = (id = 'lem-native') => {
    add(id); const file = join(root, `items/${id}.md`);
    utimesSync(file, new Date('2025-01-01T00:00:05Z'), new Date('2025-01-01T00:00:05Z'));
    write('research/r-dispatch/alpha-high-native.result.json', JSON.stringify({ run: 'r', role: 'alpha-high', ok: true,
      label: 'step3b-a-0123456789abcdef', covers: ['1'], started_at: '2025-01-01T00:00:00Z', ended_at: '2025-01-01T00:00:10Z' }));
  };
  return { root, write, pages, manifests, add, decide, evidence, native, baselineBytes };
}

test('owner origin requires an ordinary current decision; it grants no auditor or scope bypass', t => {
  const f = fixture(t); f.add(); const e = f.evidence();
  recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /ordinary current owner repaired/);
  assert.equal(certifyCompletedAuditorItems(f.root, 'r').pending.length, 1);
  assert.equal(itemDecision(loadStep3(f.root, 'r'), 'lem-owner').closed, false);
  f.decide(); const certified = certifyAuditorItems(f.root, 'r');
  assert.deepEqual(certified.items, []); assert.deepEqual(certified.scopes, []);
  assert.equal(itemDecision(loadStep3(f.root, 'r'), 'lem-owner').closed, true);
  f.write('items/lem-owner.md', `${item('lem-owner')}\nLater proof repair.\n`);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /ordinary current owner repaired/);
  f.decide(); assert.deepEqual(certifyAuditorItems(f.root, 'r').items, []);
  assert.deepEqual(readFileSync(join(f.root, 'research/r-step3-auditor-baseline.json')), f.baselineBytes);
});

test('original and preexisting files cannot be owner-created additions', t => {
  const f = fixture(t);
  f.pages[0].items.push({ id: 'lem-preexisting', deps: [] }); f.manifests();
  for (const id of ['lem-base', 'lem-preexisting']) {
    const e = f.evidence(id);
    assert.throws(() => recordStep3OwnerCreation(f.root, 'r', id, e.path), /invalid owner creation attestation/);
  }
});

test('owner origin rejects stale sources, claim/home identity and mutated baseline bytes', t => {
  const f = fixture(t); f.add(); const e = f.evidence();
  recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path);
  f.write('research/lem-owner-authorship.md', 'Edited origin evidence.');
  assert.throws(() => loadStep3OwnerCreation(f.root, 'r', 'lem-owner'), /stale owner creation source/);
  f.write('research/lem-owner-authorship.md', `Run r item lem-owner: /root/actual_author wrote claim ${e.receipt.claim_sha256}; item bytes ${e.receipt.item_file_sha256}.`);
  f.pages[0].items.find(row => row.id === 'lem-owner').statement = 'A different claim.'; f.manifests();
  assert.throws(() => loadStep3OwnerCreation(f.root, 'r', 'lem-owner'), /stale owner creation claim/);
  f.pages[0].items.find(row => row.id === 'lem-owner').statement = 'lem-owner.'; f.manifests();
  f.write('research/r-step3-auditor-baseline.json', `${f.baselineBytes}\n`);
  assert.throws(() => loadStep3OwnerCreation(f.root, 'r', 'lem-owner'), /immutable baseline binding/);
});

test('registrar rejects invented native fields, same author and unsupported timeline', t => {
  const f = fixture(t); f.add();
  for (const change of [{ author_result: 'fake.result.json' }, { author: { identity: '/root', timeline: { mode: 'unknown', after_baseline: true, reason: 'Unknown' } } },
    { author: { identity: '/root/actual_author', timeline: { mode: 'known', started_at: '2000-01-01', ended_at: '2000-01-02' } } }]) {
    const e = f.evidence('lem-owner', change);
    assert.throws(() => recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path), /invalid owner creation attestation/);
  }
});

test('examined owner dependencies must include current declared dependencies', t => {
  const f = fixture(t); f.add('lem-owner', ['lem-base']); const e = f.evidence();
  recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path);
  f.decide('lem-owner', []);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /examined dependencies/);
  f.decide('lem-owner', ['lem-base']); assert.deepEqual(certifyAuditorItems(f.root, 'r').items, []);
  f.pages[0].items.find(row => row.id === 'lem-owner').deps = []; f.manifests();
  f.write('items/lem-owner.md', item('lem-owner').replace('deps: []', 'deps: [lem-base]'));
  f.decide('lem-owner', []);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /examined dependencies/);
  f.decide('lem-owner', ['lem-base']); assert.deepEqual(certifyAuditorItems(f.root, 'r').items, []);
});

test('late sibling inputs permit genuine native own-file origin; late new helpers cannot borrow it', t => {
  const f = fixture(t); f.native();
  f.pages[0].items.find(row => row.id === 'lem-native').deps = ['lem-base']; f.manifests();
  // The consumer remains in its genuine author window, but a supplier finishes later.
  f.write('items/lem-base.md', `${item('lem-base')}\nLate supplier.\n`);
  utimesSync(join(f.root, 'items/lem-base.md'), new Date('2025-01-01T00:00:12Z'), new Date('2025-01-01T00:00:12Z'));
  f.decide('lem-native', ['lem-base']);
  const native = certifyAuditorItems(f.root, 'r');
  assert.equal(native.items[0].id, 'lem-native'); assert.ok(native.items[0].author_result);
  assert.ok(native.items[0].owner_recertification);
  f.add('lem-late'); f.decide('lem-native', ['lem-base']);
  certifyCompletedAuditorItems(f.root, 'r');
  f.decide('lem-late');
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /lem-late: changed after its latest successful/);
  // Actual owner creation registration supplies honest distinct origin.
  const e = f.evidence('lem-late'); recordStep3OwnerCreation(f.root, 'r', 'lem-late', e.path);
  const after = certifyAuditorItems(f.root, 'r');
  assert.deepEqual(after.items.map(row => row.id), ['lem-native']);
  assert.equal(after.items[0].author_result, native.items[0].author_result);
  assert.equal(after.items[0].sha256, native.items[0].sha256);
});


test('known timeline registration is immutable and checks the authored statement identity', t => {
  const f = fixture(t); f.add();
  const baseline = JSON.parse(f.baselineBytes);
  const e = f.evidence('lem-owner', { author: { identity: '/root/actual_author', timeline: {
    mode: 'known', started_at: baseline.at, ended_at: new Date().toISOString() } } });
  const registered = recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path);
  const bytes = readFileSync(registered.path);
  assert.equal(recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path).reused, true);
  assert.deepEqual(readFileSync(registered.path), bytes);
  e.receipt.reason = 'A replacement origin explanation.';
  f.write(e.path, JSON.stringify(e.receipt));
  assert.throws(() => recordStep3OwnerCreation(f.root, 'r', 'lem-owner', e.path), /refusing to replace/);
  f.write('items/lem-owner.md', item('lem-owner').replace('lem-owner.\n## Proof', 'Different theorem.\n## Proof'));
  assert.throws(() => loadStep3OwnerCreation(f.root, 'r', 'lem-owner'), /stale owner creation claim/);
  assert.deepEqual(readFileSync(registered.path), bytes);
});

test('successive actual owner repairs preserve genuine native origin through append-only history', t => {
  const f = fixture(t); f.native();
  const original = certifyAuditorItems(f.root, 'r');
  const id = 'lem-native', path = join(f.root, `items/${id}.md`);
  assert.equal(original.items[0].owner_recertification, undefined);
  const repair = n => {
    f.write(`items/${id}.md`, `${item(id)}\nActual proof repair ${n}.\n`);
    const at = new Date(`2025-01-01T00:00:${String(11 + n).padStart(2, '0')}Z`);
    utimesSync(path, at, at);
    f.decide(id);
    return certifyAuditorItems(f.root, 'r');
  };
  const first = repair(1), firstOwner = readFileSync(join(f.root, `research/r-step3b-owner-${id}.json`));
  const second = repair(2);
  assert.equal(second.items[0].author_result, original.items[0].author_result);
  assert.notEqual(second.items[0].sha256, first.items[0].sha256);
  assert.notEqual(second.items[0].owner_recertification.sha256, first.items[0].owner_recertification.sha256);
  const history = join(f.root, `research/r-step3b-owner-history-${id}/${first.items[0].owner_recertification.sha256}.json`);
  assert.deepEqual(readFileSync(history), firstOwner);
  assert.deepEqual(certifyAuditorItems(f.root, 'r').items, second.items);
  assert.deepEqual(readFileSync(history), firstOwner);
  const authorPath = join(f.root, 'research/r-dispatch/alpha-high-native.result.json');
  const authorBytes = readFileSync(authorPath), author = JSON.parse(authorBytes);
  for (const change of [{ ok: false }, { role: 'invented-owner-role' }, { label: 'forged-native-label' }]) {
    writeFileSync(authorPath, JSON.stringify({ ...author, ...change }));
    assert.throws(() => certifyAuditorItems(f.root, 'r'), /no successful Step 3/,
      'historical owner evidence never substitutes for a genuine successful native author');
  }
  writeFileSync(authorPath, authorBytes);
  // An unaudited next edit still fails, despite surviving native origin history.
  f.write(`items/${id}.md`, `${item(id)}\nAn unaccepted later proof change.\n`);
  assert.equal(itemDecision(loadStep3(f.root, 'r'), id).closed, false);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /changed after its latest successful/);
});

test('owner history is strict historical evidence, never a substitute for the current decision', t => {
  const f = fixture(t); f.native(); const id = 'lem-native';
  certifyAuditorItems(f.root, 'r');
  f.write(`items/${id}.md`, `${item(id)}\nOwner proof repair.\n`);
  utimesSync(join(f.root, `items/${id}.md`), new Date('2025-01-01T00:00:12Z'), new Date('2025-01-01T00:00:12Z'));
  f.decide(id); const certificate = certifyAuditorItems(f.root, 'r');
  // A new ordinary receipt automatically captures the actual old current file.
  recordStep3(f.root, { run: 'r', phase: 'item', item: id, owner: true, decision: 'repaired',
    dependencies: [], reason: 'A second actual examination of the stable current proof.' });
  rmSync(join(f.root, `research/r-step3b-owner-${id}.json`));
  assert.equal(itemDecision(loadStep3(f.root, 'r'), id).closed, false);
  assert.throws(() => certifyAuditorItems(f.root, 'r'), /prior owner repair is no longer current/);
  const history = join(f.root, `research/r-step3b-owner-history-${id}/${certificate.items[0].owner_recertification.sha256}.json`);
  f.write(history.replace(f.root + '/', ''), JSON.stringify({ ...JSON.parse(readFileSync(history)), reason: 'Forged replacement history.' }));
  assert.throws(() => itemDecision(loadStep3(f.root, 'r'), id), /invalid historical owner receipt digest/);
});
