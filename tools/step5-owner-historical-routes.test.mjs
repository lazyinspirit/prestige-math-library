import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { historicalFindingHash, recordOwnerHistoricalRoutes, loadOwnerHistoricalRoutes, validateOwnerHistoricalRoutes } from './step5-owner-historical-routes.mjs';
import { itemHashGuard } from './item-hash.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'historical-route-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'research')); mkdirSync(join(root, 'items'));
  const put = (path, content) => { const bytes = typeof content === 'string' ? content : JSON.stringify(content); writeFileSync(join(root, path), bytes); return { path, sha256: sha(bytes) }; };
  const consumer = 'lem-consumer', producer = 'lem-producer';
  const original = `---\nid: ${consumer}\ndeps: [${producer}]\n---\nOriginal proof.\n`;
  const supplier = `---\nid: ${producer}\nstatus: draft\ndeps: []\n---\nProducer proof.\n`;
  const current = `---\nid: ${consumer}\ndeps: []\n---\nPersonally reviewed independent proof.\n`;
  put(`items/${consumer}.md`, current); put(`items/${producer}.md`, supplier);
  put('research/r-batch-1.pages.json', [{ id: 'page-consumer', items: [consumer] }]);
  put('research/r-batch-2.pages.json', [{ id: 'page-producer', items: [producer] }]);
  const producerCarrier = { item_sha256: sha(supplier), manifest_sha256: 'a'.repeat(64), contract_sha256: 'b'.repeat(64) };
  const producerPre = put('research/r-step5-hash-2-pre.json', { version: 2, run: 'r', batch: '2', label: 'pre', manifest: [producer], hashes: { [producer]: producerCarrier } });
  const pre = put('research/r-step5-hash-1-pre.json', { version: 2, run: 'r', batch: '1', label: 'pre', manifest: [consumer] });
  const post = put('research/r-step5-hash-1-post.json', { version: 2, run: 'r', batch: '1', label: 'post', manifest: [consumer] });
  const reader = put('research/r-reader-findings-1.json', { batch: '1', findings: [{ id: producer, consumer_id: consumer, subject_type: 'in-run-dependency' }] });
  const refuter = put('research/r-refute-1.json', { batch: '1', flagged: [] });
  const sources = [ { id: consumer, ...put('research/original-consumer.md', original) }, { id: producer, ...put('research/original-producer.md', supplier) } ];
  const finding = { obligation: 'reader:1:1', id: producer, consumer_id: consumer, subject_type: 'in-run-dependency', producer_batch: '2',
    dependency_path: sources.map(s => ({ id: s.id, item_sha256: s.sha256 })),
    producer_pre_snapshot: { ...producerPre, carrier: { producer_batch: '2', ...producerCarrier } } };
  const scope = { run: 'r', batch: '1', manifest_post: [consumer], reader_findings: [finding], refuter_findings: [], reader_report_sha256: reader.sha256, refuter_report_sha256: refuter.sha256 };
  put('research/r-step5-scope-1.json', scope);
  const guard = itemHashGuard(current);
  const review = put('research/current-owner-review.md', `r reader:1:1 ${consumer} ${producer} ${guard}: actual current proof and removed edges reviewed by owner.`);
  const row = { batch: '1', obligation: finding.obligation, finding_sha256: historicalFindingHash(finding), sources,
    reader_report: reader, refuter_report: refuter, consumer_pre_snapshot: pre, consumer_post_snapshot: post, producer_pre_snapshot: producerPre,
    current_proof_review: { owner: true, removed_edges_reviewed: true, no_unresolved_scope_dependency: true, consumer_guard_sha256: guard }, review };
  const doc = { version: 1, policy: 'owner-step5-historical-inrun-route-v1', run: 'r', step: 5, owner: true, owner_identity: '/root', at: new Date().toISOString(), reason: 'Personally reviewed actual proof repair removes redundant historical dependencies', routes: [row] };
  const evidence = 'research/owner-authorization.json'; put(evidence, doc);
  return { root, doc, row, scope, finding, put, evidence };
}
test('exact owner-reviewed historical path survives current edge removal without changing evidence', t => {
  const f = fixture(t), before = readFileSync(join(f.root, 'research/r-step5-scope-1.json'));
  assert.deepEqual(loadOwnerHistoricalRoutes(f.root, 'r'), []);
  const result = recordOwnerHistoricalRoutes(f.root, 'r', f.evidence);
  assert.equal(result.reused, false);
  assert.equal(loadOwnerHistoricalRoutes(f.root, 'r')[0].finding.dependency_path.length, 2);
  assert.equal(recordOwnerHistoricalRoutes(f.root, 'r', f.evidence).reused, true);
  assert.deepEqual(readFileSync(join(f.root, 'research/r-step5-scope-1.json')), before);
  f.doc.reason = 'Different authorization'; f.put(f.evidence, f.doc);
  assert.throws(() => recordOwnerHistoricalRoutes(f.root, 'r', f.evidence), /replace immutable/);
});
test('historical path rejects ownerless closure, tampering, wrong homes, reports, snapshots and missing original leg', t => {
  for (const mutate of [
    f => { f.doc.owner = false; },
    f => { f.doc.run = 'other'; },
    f => { f.row.current_proof_review.removed_edges_reviewed = false; },
    f => { f.row.finding_sha256 = '0'.repeat(64); },
    f => { f.row.sources[0].sha256 = '0'.repeat(64); },
    f => { f.put('research/original-consumer.md', 'Changed historical source'); },
    f => { f.put('research/r-batch-3.pages.json', [{ id: 'ambiguous', items: ['lem-producer'] }]); },
    f => { f.put('research/r-batch-2.pages.json', [{ id: 'wrong', items: [] }]); },
    f => { f.put('research/r-reader-findings-1.json', { invented: true }); },
    f => { f.put('research/r-refute-1.json', { invented: true }); },
    f => { f.put('research/r-step5-hash-2-pre.json', { invented: true }); },
    f => { f.put('research/r-step5-hash-1-pre.json', { version: 2, run: 'r', batch: '1', label: 'pre', manifest: [] }); f.row.consumer_pre_snapshot.sha256 = sha(readFileSync(join(f.root, 'research/r-step5-hash-1-pre.json'))); },
    f => { f.scope.manifest_post = []; f.put('research/r-step5-scope-1.json', f.scope); },
    f => { f.finding.dependency_path[0].id = 'lem-unassigned'; f.row.finding_sha256 = historicalFindingHash(f.finding); f.put('research/r-step5-scope-1.json', f.scope); },
    f => { f.put('items/lem-consumer.md', 'Changed current mathematics'); },
    f => { const link = f.put('research/original-consumer.md', '---\nid: lem-consumer\ndeps: []\n---\nOriginal missing edge.\n'); f.row.sources[0].sha256 = link.sha256; f.finding.dependency_path[0].item_sha256 = link.sha256; f.row.finding_sha256 = historicalFindingHash(f.finding); f.put('research/r-step5-scope-1.json', f.scope); },
  ]) {
    const f = fixture(t); mutate(f);
    assert.throws(() => validateOwnerHistoricalRoutes(f.root, 'r', f.doc));
  }
});

function supplementalFixture(t) {
  const f = fixture(t), second = structuredClone(f.finding);
  second.obligation = 'reader:1:2';
  f.scope.reader_findings.push(second);
  f.put('research/r-step5-scope-1.json', f.scope);
  const report = f.put('research/r-reader-findings-1.json', { batch: '1', findings: [f.finding, second] });
  f.scope.reader_report_sha256 = report.sha256; f.row.reader_report = report;
  f.put('research/r-step5-scope-1.json', f.scope);
  f.put(f.evidence, f.doc);
  const extra = structuredClone(f.doc);
  extra.reason = 'Actual additional exact original finding';
  extra.routes[0].obligation = second.obligation;
  extra.routes[0].finding_sha256 = historicalFindingHash(second);
  extra.routes[0].review = f.put('research/second-owner-review.md', `r reader:1:2 lem-consumer lem-producer ${extra.routes[0].current_proof_review.consumer_guard_sha256} exact current owner proof review`);
  const extraEvidence = 'research/additional-authorization.json'; f.put(extraEvidence, extra);
  return { ...f, second, extra, extraEvidence };
}
test('explicit immutable supplement preserves original registry and loads disjoint actual findings', t => {
  const f = supplementalFixture(t);
  const original = recordOwnerHistoricalRoutes(f.root, 'r', f.evidence);
  const before = readFileSync(original.path);
  assert.throws(() => recordOwnerHistoricalRoutes(f.root, 'r', f.extraEvidence), /replace immutable/);
  const added = recordOwnerHistoricalRoutes(f.root, 'r', f.extraEvidence, { supplement: true });
  assert.match(added.path, /supplement-[a-f0-9]{64}\.json$/);
  assert.equal(added.reused, false);
  assert.equal(recordOwnerHistoricalRoutes(f.root, 'r', f.extraEvidence, { supplement: true }).reused, true);
  assert.deepEqual(loadOwnerHistoricalRoutes(f.root, 'r').map(row => row.finding.obligation), ['reader:1:1', 'reader:1:2']);
  assert.deepEqual(readFileSync(original.path), before);
});
test('supplements reject absent original, overlap, foreign run and changed source/current proof bindings', t => {
  const missing = supplementalFixture(t);
  assert.throws(() => recordOwnerHistoricalRoutes(missing.root, 'r', missing.extraEvidence, { supplement: true }), /requires original/);
  for (const mutate of [
    f => { f.extra.routes = structuredClone(f.doc.routes); },
    f => { f.extra.run = 'other'; },
    f => { f.extra.routes[0].finding_sha256 = '0'.repeat(64); },
    f => { f.extra.routes[0].sources[0].sha256 = '0'.repeat(64); },
    f => { f.extra.routes[0].producer_pre_snapshot.sha256 = '0'.repeat(64); },
    f => { f.extra.routes[0].current_proof_review.consumer_guard_sha256 = '0'.repeat(64); },
    f => { f.put('items/lem-consumer.md', 'Changed current mathematics'); },
  ]) {
    const f = supplementalFixture(t); recordOwnerHistoricalRoutes(f.root, 'r', f.evidence);
    mutate(f); f.put(f.extraEvidence, f.extra);
    assert.throws(() => recordOwnerHistoricalRoutes(f.root, 'r', f.extraEvidence, { supplement: true }));
  }
});
test('supplement loading rejects content/name tamper, forged overlap and changed original registry evidence', t => {
  for (const mutate of [
    (f, added) => { const doc = JSON.parse(readFileSync(added.path)); doc.reason += ' altered'; writeFileSync(added.path, JSON.stringify(doc)); },
    (f, added) => { const copy = structuredClone(f.doc); const path = join(f.root, 'research', `r-step5-owner-historical-inrun-routes-supplement-${historicalFindingHash(copy)}.json`); writeFileSync(path, JSON.stringify(copy)); },
    (f, added) => { f.put('research/original-consumer.md', 'Tampered old full source'); },
    (f, added) => { f.put('research/r-reader-findings-1.json', { fabricated: true }); },
    (f, added) => { f.put('research/r-step5-hash-2-pre.json', { fabricated: true }); },
  ]) {
    const f = supplementalFixture(t); recordOwnerHistoricalRoutes(f.root, 'r', f.evidence);
    const added = recordOwnerHistoricalRoutes(f.root, 'r', f.extraEvidence, { supplement: true });
    chmodSync(added.path, 0o600); mutate(f, added);
    assert.throws(() => loadOwnerHistoricalRoutes(f.root, 'r'));
  }
});
