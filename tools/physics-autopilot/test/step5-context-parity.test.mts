import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { externalContextReceipt, step5Escalations } from '../../physics-support/step5-escalations.mjs';
import { externalContextReceipt as mathContextReceipt } from '../../step5-escalations.mjs';
import { itemHashGuard } from '../../physics-support/item-hash.mjs';

const digest = (value: string) => createHash('sha256').update(value).digest('hex');
const canonical = (value: any): any => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hashValue = (value: any) => digest(JSON.stringify(canonical(value)));

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'physics-step5-context-'));
  const run = 'context-parity';
  for (const dir of ['research', 'items']) mkdirSync(join(root, dir));
  const put = (path: string, value: any) => writeFileSync(join(root, path), typeof value === 'string' ? value : JSON.stringify(value));
  const supplier = '---\nid: lem-published-supplier\nstatus: published\ndeps: []\n---\n## Statement\nUnder the explicit boundedness premise, the used clause holds.\n## Proof\nAn unrelated stronger clause retains a maintenance gap.\n';
  const consumer = '---\nid: thm-owned-consumer\nstatus: draft\ndeps: [lem-published-supplier]\n---\n## Given\nThe parameter is bounded on the selected compact interval.\n## Proof\nUse only the boundedness clause of the published supplier.\n';
  put('items/lem-published-supplier.md', supplier);
  put('items/thm-owned-consumer.md', consumer);
  const finding = { obligation: 'reader:1:1', id: 'lem-published-supplier', consumer_id: 'thm-owned-consumer', subject_type: 'published-dependency', evidence: 'The unconsumed stronger clause has a missing prerequisite.' };
  const scope = { version: 2, run, batch: '1', group: 'a', manifest_post: ['thm-owned-consumer'], reader_findings: [finding] };
  put(`research/${run}-batch-1.pages.json`, [{ id: 'owned-page', items: [{ id: 'thm-owned-consumer' }] }]);
  put(`research/${run}-step5-scope-1.json`, scope);
  put(`research/${run}-alpha-groups.json`, [{ label: 'a', covers: ['1'] }]);
  const reviewText = 'The exact used clause has been checked under the consumer premises; all its prerequisites are supplied, while the stronger outside claim remains unresolved.';
  put('research/context-review.md', reviewText);
  const maintenanceQuote = 'The published supplier stronger clause remains an open maintenance finding outside the owned consumer use, and this exact gap is neither repaired nor certified here.';
  put('research/published-consumer-supplier-ledger.md', maintenanceQuote);
  const decisionPath = `research/${run}-alpha-a-5a-decisions.json`;
  const ledgerRow: any = { defect_id: 'outside-gap', run, subject: finding.id, caught_at_stage: '5a-adjudicate', disposition: 'open', adjudication_ref: [{ path: decisionPath, obligation: finding.obligation }] };
  put('research/defect-ledger.jsonl', JSON.stringify(ledgerRow) + '\n');
  const entry: any = { obligation: finding.obligation, group: 'a', supplier_id: finding.id, consumer_id: finding.consumer_id, finding_sha256: hashValue(finding), supplier_math_sha256: itemHashGuard(supplier), consumer_math_sha256: itemHashGuard(consumer), used_clause: 'Under the explicit boundedness premise, the used clause holds.', premise_quotes: ['The parameter is bounded on the selected compact interval.'], review: { completed: true, confidence: 1, verdict: 'sound_under_explicit_consumer_premises', prerequisites: 'supplied', evidence: reviewText, evidence_refs: [{ path: 'research/context-review.md', sha256: digest(reviewText) }] }, maintenance: { path: 'research/published-consumer-supplier-ledger.md', disposition: 'open', quote: maintenanceQuote, defect_id: 'outside-gap' } };
  const decision: any = { id: finding.id, consumer_id: finding.consumer_id, obligation: finding.obligation, verdict: 'context_accepted', route: 'reader', repair_confidence: 1, defect_ids: [] };
  const saveDecision = () => put(decisionPath, { version: 1, run, group: 'a', decisions: [decision] });
  const saveContext = () => {
    const raw = JSON.stringify({ version: 1, run, reviewed_by: 'root', contexts: [entry] });
    put(`research/${run}-step5-owner-external-context.json`, raw);
    decision.context_receipt_sha256 = digest(raw);
    saveDecision();
  };
  saveContext();
  const current = externalContextReceipt(root, run, decision, finding, 'a');
  assert.equal(current.valid, true, current.error);
  decision.context_evidence = current.seal;
  saveDecision();
  return { root, run, put, entry, decision, finding, scope, ledgerRow, saveContext, saveDecision,
    check: () => externalContextReceipt(root, run, decision, finding, 'a'),
    cleanup: () => rmSync(root, { recursive: true, force: true }) };
}

function checkCase(name: string, mutate: (f: ReturnType<typeof fixture>) => void, error: RegExp) {
  test(name, () => {
    const f = fixture();
    try { mutate(f); const result = f.check(); assert.equal(result.valid, false); assert.match(result.error!, error); }
    finally { f.cleanup(); }
  });
}

test('physics accepts only the current sealed owned use and retains the outside maintenance defect, matching math', () => {
  const f = fixture();
  try {
    assert.deepEqual(f.check(), mathContextReceipt(f.root, f.run, f.decision, f.finding, 'a'));
    assert.equal(f.check().defect_id, 'outside-gap');
    assert.deepEqual(step5Escalations(f.root, f.run), []);
    assert.equal(JSON.parse(readFileSync(join(f.root, 'research/defect-ledger.jsonl'), 'utf8')).disposition, 'open');
    f.decision.context_evidence.supplier_math_sha256 = 'forged'; f.saveDecision();
    assert.match(step5Escalations(f.root, f.run)[0], /context evidence is not sealed/);
  } finally { f.cleanup(); }
});
for (const id of ['lem-published-supplier', 'thm-owned-consumer']) checkCase(`rejects stale mathematics for ${id}`, f => {
  const path = `items/${id}.md`; f.put(path, readFileSync(join(f.root, path), 'utf8') + '\nChanged mathematical assertion.\n');
}, /mathematics changed/);
checkCase('rejects a forged legacy Alpha owner when the batch adjudicator is active', f => {
  f.put(`research/${f.run}-alpha-batch-1-5a-decisions.json`, { version: 1, run: f.run, group: 'batch-1', decisions: [f.decision] });
}, /wrong current decision owner/);
checkCase('rejects an unsupported supplier clause', f => { f.entry.used_clause = 'A stronger unsupported claim.'; f.saveContext(); }, /used clause or explicit consumer premises/);
checkCase('rejects missing explicit consumer premises', f => { f.entry.premise_quotes = ['An unstated premise.']; f.saveContext(); }, /used clause or explicit consumer premises/);
checkCase('rejects incomplete used-clause prerequisite review', f => { f.entry.review.prerequisites = 'missing'; f.saveContext(); }, /review is incomplete/);
checkCase('rejects changed evidence bytes', f => { f.put('research/context-review.md', 'Changed review evidence.'); }, /review evidence changed/);
checkCase('rejects certification of an in-frontier supplier', f => {
  f.put(`research/${f.run}-batch-1.pages.json`, [{ id: 'owned-page', items: [{ id: 'thm-owned-consumer' }, { id: 'lem-published-supplier' }] }]);
}, /not an outside published reader context/);
checkCase('rejects an outside draft supplier', f => {
  const path = 'items/lem-published-supplier.md'; const text = readFileSync(join(f.root, path), 'utf8').replace('status: published', 'status: draft');
  f.put(path, text); f.entry.supplier_math_sha256 = itemHashGuard(text); f.saveContext();
}, /mathematics changed/);
checkCase('rejects replacement of the original finding', f => { f.finding.evidence = 'Altered finding.'; }, /target differs from the original finding/);
checkCase('rejects closing the immutable outside maintenance defect', f => {
  f.ledgerRow.disposition = 'resolved'; f.put('research/defect-ledger.jsonl', JSON.stringify(f.ledgerRow) + '\n');
}, /original outside defect row is not retained/);


test('seals an explicit same-finding superseded binding row and retains both defects open', () => {
  const f = fixture();
  try {
    const prior = { ...f.ledgerRow, defect_id: 'original-binding' };
    f.ledgerRow.supersedes = [prior.defect_id];
    f.put('research/defect-ledger.jsonl', JSON.stringify(prior) + '\n' + JSON.stringify(f.ledgerRow) + '\n');
    const result = f.check();
    assert.equal(result.valid, true, result.error);
    assert.deepEqual(result.defect_ids, ['outside-gap', 'original-binding']);
    assert.deepEqual(result, mathContextReceipt(f.root, f.run, f.decision, f.finding, 'a'));
    f.decision.context_evidence = result.seal; f.saveDecision();
    assert.deepEqual(step5Escalations(f.root, f.run), []);
    assert.equal(prior.disposition, 'open');
    prior.disposition = 'resolved';
    f.put('research/defect-ledger.jsonl', JSON.stringify(prior) + '\n' + JSON.stringify(f.ledgerRow) + '\n');
    assert.equal(f.check().valid, false);
  } finally { f.cleanup(); }
});
for (const mismatch of ['subject', 'location', 'obligation', 'cycle', 'missing']) test(`rejects superseded row ${mismatch}`, () => {
  const f = fixture();
  try {
    const prior: any = { ...f.ledgerRow, defect_id: 'original-binding' };
    f.ledgerRow.supersedes = [prior.defect_id];
    if (mismatch === 'subject') prior.subject = 'another-supplier';
    if (mismatch === 'location') prior.location = 'another-clause';
    if (mismatch === 'obligation') prior.adjudication_ref = [{ ...prior.adjudication_ref[0], obligation: 'reader:1:2' }];
    if (mismatch === 'cycle') prior.supersedes = [f.ledgerRow.defect_id];
    f.put('research/defect-ledger.jsonl', (mismatch === 'missing' ? '' : JSON.stringify(prior) + '\n') + JSON.stringify(f.ledgerRow) + '\n');
    assert.equal(f.check().valid, false);
    assert.equal(mathContextReceipt(f.root, f.run, f.decision, f.finding, 'a').valid, false);
  } finally { f.cleanup(); }
});
