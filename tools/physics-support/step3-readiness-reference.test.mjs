// Synthetic fixtures only. Root approvals are simulated in memory, never issued.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sharedCausalRepair, digest, hashObject, decisionCore,
} from './step3-shared-causal-repair.mjs';

const run = 'fluid-dynamics-all-47-2026-10-23';
const subject = 'def-fd-quantity-and-frame-conventions';
const consumer = 'synthetic-reader4-consumer';
const path = name => `research/${run}-${name}.json`;
const explanation = 'Synthetic producer3 repair and frozen reader4 observation identify the same false missing-readiness sentence. A separately guarded dated readiness record contradicts that sentence, and the current synthetic source removes it without rewriting the historical observation.';

function makeFixture({ unbound = false } = {}) {
  const input = {};
  const bind = (name, value) => {
    const p = path(name);
    input[p] = JSON.stringify(value);
    return { path: p, sha256: digest(input[p]) };
  };
  const historicalPath = `research/${run}-synthetic-historical-source.md`;
  input[historicalPath] = '# Synthetic historical source\nThe current supplier readiness record is missing.\n';
  const historicalGuard = { path: historicalPath, sha256: digest(input[historicalPath]) };
  const frozen = {
    obligation: 'reader:4:1', id: subject, defect: 'citation-inaccurate',
    severity: 'nonfatal', location: 'Authoring status',
    subject_type: 'in-run-dependency', producer_batch: '3', consumer_id: consumer,
    observation_basis: unbound ? 'unbound' : 'current',
    observed_sha256: unbound ? null : historicalGuard.sha256,
    dependency_path: [{ id: consumer }, { id: subject }],
  };
  if (!unbound) frozen.observed_source = { snapshot: 'current', item_sha256: historicalGuard.sha256 };

  const oldId = 'synthetic-original-readiness-row';
  const canonicalId = 'synthetic-canonical-readiness-row';
  const primary = {
    obligation: `touched:3:${subject}`, id: subject, route: 'touched',
    verdict: 'amended_repair', repair_confidence: 1, defect_ids: [canonicalId],
  };
  const alias = {
    ...frozen, route: 'reader', verdict: 'confirmed_nonfatal', repair_confidence: 1,
    defect_ids: [canonicalId], same_defect_as: primary.obligation,
    same_defect_evidence: explanation, owner_resolution: explanation,
  };
  if (unbound) alias.historical_delta_unknown = true;
  const row = {
    defect_id: canonicalId, run, subject, caught_at_stage: '3a-adjudicate',
    disposition: 'fixed', severity: 'nonfatal', repair_confidence: 1,
    supersedes: [oldId],
    adjudication_ref: [
      { path: path('alpha-batch-3-3a-decisions'), obligation: primary.obligation },
      { path: path('alpha-batch-4-3a-decisions'), obligation: alias.obligation },
    ],
  };
  const currentPath = `items/${subject}.md`;
  input[currentPath] = '# Synthetic current source\nThe dated supplier readiness record is present.\n';
  const currentCarrier = {
    item_sha256: digest(input[currentPath]),
    contract_sha256: digest('synthetic contract'),
    manifest_sha256: digest('synthetic manifest'),
  };
  const scopeGuard = bind('step3-scope-3', { run, batch: '3', touched: [subject] });
  const consumerGuard = bind('step3-scope-4', {
    run, batch: '4', reader_findings: [frozen], refuter_findings: [],
  });
  const decisionGuard = bind('alpha-batch-3-3a-decisions', { run, decisions: [primary] });
  const immutable = [];
  for (const batch of ['3', '4']) {
    for (const name of [
      `reader-findings-${batch}`, `refute-${batch}`,
      `step3-hash-${batch}-pre`, `step3-hash-${batch}-post`,
    ]) immutable.push(bind(name, { synthetic: name }));
  }
  const originalGuard = bind('synthetic-original-row', { defect_id: oldId, run, subject });
  const readyGuard = bind('synthetic-ready-record', {
    run, item: 'def-fd-smooth-motion', decision: 'ready', at: '2026-10-22T19:46:20.450Z',
  });
  const causalGuard = bind('synthetic-causal-acceptance', {
    run, subject, accepted_by: 'root', one_actual_defect: true,
    merged_original_ids: [oldId], primary_obligation: primary.obligation,
    alias_obligations: [alias.obligation], same_literal_fault: explanation,
    status: 'IN-MEMORY TEST SIMULATION ONLY',
  });
  const e = {
    kind: 'single-historical-readiness-reference', canonical_defect_id: canonicalId,
    subject, canonical_row_sha256: hashObject(row), merged_original_ids: [oldId],
    one_actual_defect: true, causal_statement: explanation,
    original_ledger_row_guards: [originalGuard],
    primary: {
      batch: '3', obligation: primary.obligation, route: 'touched',
      scope_guard: scopeGuard, decision_guard: decisionGuard,
      decision_core_sha256: hashObject(decisionCore(primary)),
    },
    aliases: [{
      batch: '4', obligation: alias.obligation, route: 'reader', consumer_id: consumer,
      frozen_finding_sha256: hashObject(frozen), decision_core_sha256: hashObject(decisionCore(alias)),
    }],
    consumer_scope_guard: consumerGuard, immutable_guards: immutable,
    historical_source_guard: historicalGuard, ready_record_guard: readyGuard,
    causal_repair_receipt: causalGuard,
    final_scientific_reports: [
      bind('synthetic-science-report', { synthetic: 'source repair' }),
      bind('synthetic-consumer-report', { synthetic: 'consumer check' }),
    ],
    current_carrier_sha256: hashObject(currentCarrier),
  };
  const receipt = {
    version: 1, run, reviewed_by: 'root', kind: 'cross-group-shared-causal-repair', repairs: [e],
  };
  return { input, e, alias, primary, row, frozen, currentCarrier, receipt };
}

function setup(mutate = () => {}, unbound = false) {
  const state = makeFixture({ unbound });
  mutate(state);
  const receiptPath = path('step3-cross-group-causal-repairs');
  state.input[receiptPath] = JSON.stringify(state.receipt);
  state.alias.shared_causal_receipt_sha256 = digest(state.input[receiptPath]);
  return sharedCausalRepair({
    run, prior: state.primary, decision: state.alias,
    target: { ...state.frozen, route: 'reader' }, canonicalRow: state.row,
    currentCarrier: state.currentCarrier,
    readBytes: p => {
      assert.ok(Object.hasOwn(state.input, p), `unguarded synthetic path: ${p}`);
      return Buffer.from(state.input[p]);
    },
  });
}

test('bound synthetic reader4 reuses one nonfatal producer3 repair row', () => {
  assert.equal(setup(), true);
});
test('unbound synthetic observation retains unknown history without fabricating source binding', () => {
  assert.equal(setup(() => {}, true), true);
});
test('unbound observation without unknown-history declaration rejects', () => {
  assert.equal(setup(s => { s.alias.historical_delta_unknown = false; }, true), false);
});
for (const [name, mutate] of [
  ['wrong alias', s => { s.e.aliases[0].obligation = 'reader:5:1'; }],
  ['fatal readiness reclassification', s => { s.row.severity = 'fatal'; s.e.canonical_row_sha256 = hashObject(s.row); }],
  ['extra alias', s => { s.e.aliases.push({ ...s.e.aliases[0], obligation: 'refuter:4:1' }); }],
  ['changed historical archive', s => { s.input[s.e.historical_source_guard.path] += ' '; }],
  ['missing historical archive', s => { delete s.e.historical_source_guard; }],
  ['stale readiness record', s => { s.input[s.e.ready_record_guard.path] += ' '; }],
  ['current source not fixed', s => { s.input[`items/${subject}.md`] += 'The current supplier readiness record is missing.'; }],
  ['stale source carrier', s => { s.currentCarrier.item_sha256 = 'f'.repeat(64); }],
  ['different original subject', s => { s.row.subject = 'other'; s.e.canonical_row_sha256 = hashObject(s.row); }],
]) test(`readiness4 rejects ${name}`, () => assert.equal(setup(mutate), false));
