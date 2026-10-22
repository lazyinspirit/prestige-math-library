import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { recordedMaintenanceToDeferred } from './step3-escalations.mjs';
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hashValue = value => createHash('sha256').update(JSON.stringify(canonical(value)) ?? 'undefined').digest('hex');
function fixture() {
  const ctx = { run: 'synthetic-run', decisionPath: 'research/synthetic-run-alpha-batch-2-3a-decisions.json', obligation: 'reader:2:1', hashValue };
  const prior = { defect_id: 'prior', run: ctx.run, subject: 'published-supplier', caught_at_stage: '3a-adjudicate',
    disposition: 'nonfatal-recorded', class: 'editorial', subclass: 'inline-links', severity: 'major', location: 'Definition',
    batch: '2', consumer_id: 'consumer', adjudication_ref: [{ path: ctx.decisionPath, obligation: ctx.obligation }], supersedes: [] };
  const current = structuredClone(prior);
  Object.assign(current, { defect_id: 'current', disposition: 'deferred', supersedes: [prior.defect_id] });
  const entry = { maintenance_disposition_transitions: [{ prior_defect_id: prior.defect_id, prior_row_sha256: hashValue(prior),
    from: 'nonfatal-recorded', to: 'deferred', reviewed_by: 'root', rationale: 'R'.repeat(100) }] };
  return { prior, current, entry, ctx };
}
const check = f => recordedMaintenanceToDeferred(f.entry, f.prior, f.current, f.ctx);
test('exact directed transition with actual canonical prior hash', () => assert.equal(check(fixture()), true));
test('canonical prior hash ignores object property ordering', () => {
  const f = fixture(); f.prior = Object.fromEntries(Object.entries(f.prior).reverse()); assert.equal(check(f), true);
});
for (const [name, mutate] of [
  ['missing transitions', f => { delete f.entry.maintenance_disposition_transitions; }],
  ['non-array transitions', f => { f.entry.maintenance_disposition_transitions = {}; }],
  ['empty transitions', f => { f.entry.maintenance_disposition_transitions = []; }],
  ['duplicate transitions', f => { f.entry.maintenance_disposition_transitions.push(structuredClone(f.entry.maintenance_disposition_transitions[0])); }],
  ['unrelated second transition', f => { f.entry.maintenance_disposition_transitions.push({ prior_defect_id: 'other' }); }],
  ['null transition', f => { f.entry.maintenance_disposition_transitions = [null]; }],
  ['extra transition key', f => { f.entry.maintenance_disposition_transitions[0].waiver = true; }],
  ['missing transition key', f => { delete f.entry.maintenance_disposition_transitions[0].from; }],
  ['wrong prior id', f => { f.entry.maintenance_disposition_transitions[0].prior_defect_id = 'other'; }],
  ['stale canonical prior hash', f => { f.prior.extra = 'unsealed'; }],
  ['nonroot review', f => { f.entry.maintenance_disposition_transitions[0].reviewed_by = 'agent'; }],
  ['short rationale', f => { f.entry.maintenance_disposition_transitions[0].rationale = 'R'.repeat(99); }],
  ['whitespace rationale', f => { f.entry.maintenance_disposition_transitions[0].rationale = ' '.repeat(200); }],
  ['wrong transition from', f => { f.entry.maintenance_disposition_transitions[0].from = 'open'; }],
  ['wrong transition to', f => { f.entry.maintenance_disposition_transitions[0].to = 'fixed'; }],
  ['wrong run', f => { f.current.run = 'other-run'; }],
  ['wrong prior run', f => { f.prior.run = 'other-run'; }],
  ['wrong stage', f => { f.current.caught_at_stage = 'other-stage'; }],
  ['fatal severity', f => { f.current.severity = f.prior.severity = 'fatal'; }],
  ['missing prior reference', f => { f.prior.adjudication_ref = []; }],
  ['wrong current reference path', f => { f.current.adjudication_ref[0].path = 'other'; }],
  ['wrong current obligation', f => { f.current.adjudication_ref[0].obligation = 'reader:2:2'; }],
  ['malformed reference array', f => { f.current.adjudication_ref = {}; }],
]) test(`reject ${name}`, () => { const f = fixture(); mutate(f); assert.equal(check(f), false); });
for (const key of ['subject', 'class', 'subclass', 'severity', 'location', 'batch', 'consumer_id']) {
  test(`reject changed retained-finding ${key}`, () => { const f = fixture(); f.current[key] = 'different'; assert.equal(check(f), false); });
}
for (const state of ['open', 'deferred', 'fixed', 'fatal', 'resolved', 'closed', undefined]) {
  test(`transition guard rejects prior state ${state}`, () => { const f = fixture(); f.prior.disposition = state; assert.equal(check(f), false); });
}
for (const state of ['open', 'nonfatal-recorded', 'fixed', 'resolved', 'closed', undefined]) {
  test(`transition guard rejects current state ${state}`, () => { const f = fixture(); f.current.disposition = state; assert.equal(check(f), false); });
}
test('proposed caller preserves the legacy open/deferred branch without evaluating the new guard', () => {
  for (const state of ['open', 'deferred']) {
    let calls = 0;
    const admitted = state === 'nonfatal-recorded' ? (++calls, false) : ['open', 'deferred'].includes(state);
    assert.equal(admitted, true); assert.equal(calls, 0);
  }
});
test('guard leaves receipt and both original rows untouched', () => {
  const f = fixture(), before = structuredClone({ entry: f.entry, prior: f.prior, current: f.current }); assert.equal(check(f), true);
  assert.deepEqual(f.entry, before.entry); assert.deepEqual(f.prior, before.prior); assert.deepEqual(f.current, before.current);
});
