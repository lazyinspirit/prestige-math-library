import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
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
