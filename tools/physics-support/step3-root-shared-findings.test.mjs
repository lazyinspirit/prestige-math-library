// Synthetic approvals are in-memory only; no production receipt is authored.
import test from 'node:test';
import assert from 'node:assert/strict';
import {rootSharedFinding, digest, hashObject, decisionCore} from './step3-root-shared-findings.mjs';
function fixture({differentRaw = false, unbound = false, sameBatch = false} = {}) {
  const run = 'demo', subject = 'lem-supplier', files = {}, inputs = {};
  const path = name => `research/${run}-${name}.json`;
  const bind = (path, object) => {files[path] = typeof object === 'string' ? object : JSON.stringify(object);
    const sha256 = digest(files[path]); inputs[path] = sha256; return {path, sha256};};
  const frozen = (obligation, severity, index) => ({obligation, id: subject, defect: 'ill-formed', severity,
    location: 'Statement', ...(unbound ? {observation_basis: 'unbound', observed_sha256: null}
      : {observed_source: {snapshot: 'current', item_sha256: (index && differentRaw ? 'b' : 'a').repeat(64)}, observed_sha256: String(index + 1).repeat(64)})});
  const findings = [frozen('reader:50:2', 'fatal', 0), frozen(`refuter:${sameBatch ? '50' : '61'}:2`, unbound ? 'nonfatal' : 'fatal', 1)];
  const decisions = findings.map((f, i) => ({obligation: f.obligation, id: subject, route: i ? 'flagged' : 'reader',
    verdict: 'confirmed_fatal', defect_ids: ['one-defect'], repair_confidence: 1,
    ...(unbound ? {historical_delta_unknown: true, owner_resolution: 'Historical unbound limitation retained. '.repeat(4)} : {})}));
  const participants = decisions.map((d, i) => {
    const batch = d.obligation.split(':')[1], reports = ['reader-findings', 'refute'].map(name => bind(path(`${name}-${batch}`), {original: name, batch}));
    return {batch, route: d.route, obligation: d.obligation,
      decision_path: path(`alpha-batch-${batch}-3a-decisions`), frozen_finding_sha256: hashObject(findings[i]),
      decision_core_sha256: hashObject(decisionCore(d)), report_guards: reports};
  });
  for (const p of participants) {
    const batch = p.batch, f = findings.filter(x => x.obligation.split(':')[1] === batch);
    p.scope_guard = bind(path(`step3-scope-${batch}`), {run, batch,
      reader_report_sha256: p.report_guards[0].sha256, refuter_report_sha256: p.report_guards[1].sha256,
      reader_findings: f.filter(x => x.obligation.startsWith('reader:')), refuter_findings: f.filter(x => x.obligation.startsWith('refuter:'))});
    files[p.decision_path] = JSON.stringify({decisions: decisions.filter(d => d.obligation.split(':')[1] === batch)});
  }
  const source = 'Actual current repaired supplier excerpt one. '.repeat(4) + '\n' + 'Actual current repaired supplier excerpt two. '.repeat(4);
  files[`items/${subject}.md`] = source; const rawHash = digest(source); inputs[`items/${subject}.md`] = rawHash;
  const carrier = {item_sha256: rawHash, contract_sha256: 'c'.repeat(64), manifest_sha256: 'd'.repeat(64)};
  const row = {run, subject, defect_id: 'one-defect', caught_at_stage: '3a-adjudicate', disposition: 'fixed', severity: 'fatal', repair_confidence: 1,
    // A severity successor can preserve an original nonfatal observation.
    ...(unbound ? {supersedes: ['original-nonfatal-row']} : {}),
    adjudication_ref: participants.map(p => ({path: p.decision_path, obligation: p.obligation}))};
  const entry = {subject, canonical_defect_id: row.defect_id, canonical_row_sha256: hashObject(row), one_actual_defect: true,
    final_severity: 'fatal', rationale: 'Root independently determines that these exact original observations concern one actual supplier defect. '.repeat(2),
    participants, scientific_evidence: [bind(path('science-owner'), {actual: 'supplier review'}), bind(path('science-consumers'), {actual: 'consumer review'})],
    current_carrier_sha256: hashObject(carrier), current_source: {path: `items/${subject}.md`, sha256: rawHash},
    reviewed_source_excerpts: source.split('\n')};
  const receipt = {version: 1, run, reviewed_by: 'root', kind: 'root-adjudicated-shared-findings', inputs, findings: [entry]};
  const args = {run, prior: {...decisions[0], target: findings[0]}, decision: decisions[1], target: findings[1], canonicalRow: row,
    currentCarrier: carrier, readBytes: p => {if (!(p in files)) throw Error('missing'); return Buffer.from(files[p]);}};
  const seal = () => {files[path('step3-root-shared-findings')] = JSON.stringify(receipt);
    args.decision.root_shared_finding_receipt_sha256 = digest(files[path('step3-root-shared-findings')]);};
  seal(); return {args, receipt, entry, files, row, seal, participants};
}
for (const [name, options] of [['cross-group flagged supplier', {}], ['different native raw, same scientific defect', {differentRaw: true}],
  ['same-batch proof-only transition', {differentRaw: true, sameBatch: true}], ['unbound observations and severity successor', {unbound: true}]]) {
  test(name, () => {const f = fixture(options); assert.equal(rootSharedFinding(f.args), true);});
}
const mutations = {
  'missing root authority': f => {f.receipt.reviewed_by = 'worker';},
  'different actual subject': f => {f.entry.subject = 'lem-other';},
  'stale canonical ledger row': f => {f.row.evidence = 'changed';},
  'unreviewed extra adjudication ref': f => {f.row.adjudication_ref.push({path: 'other', obligation: 'reader:99:1'}); f.entry.canonical_row_sha256 = hashObject(f.row);},
  'missing participant': f => {f.entry.participants.pop();},
  'touched producer route': f => {f.entry.participants[0].route = 'touched';},
  'page synthetic route': f => {f.args.decision.route = 'page';},
  'different final verdict': f => {f.args.decision.verdict = 'confirmed_nonfatal';},
  'wrong final severity': f => {f.entry.final_severity = 'nonfatal';},
  'modified native finding': f => {f.args.target.evidence = 'invented';},
  'stale native report': f => {f.files[f.participants[0].report_guards[0].path] += ' ';},
  'decision semantics drift': f => {f.args.decision.same_defect_evidence = 'changed';},
  'fabricated decision core': f => {f.entry.participants[1].decision_core_sha256 = 'a'.repeat(64);},
  'current supplier drift': f => {f.files[f.entry.current_source.path] += ' ';},
  'current contract carrier drift': f => {f.args.currentCarrier.contract_sha256 = 'e'.repeat(64);},
  'single scientific evidence source': f => {f.entry.scientific_evidence.pop();},
  'report masquerades as scientific review': f => {f.entry.scientific_evidence[0] = f.participants[0].report_guards[0];},
  'unguarded scientific source': f => {delete f.receipt.inputs[f.entry.scientific_evidence[0].path];},
  'missing actual excerpt': f => {f.entry.reviewed_source_excerpts[0] = 'Not in the current actual source. '.repeat(5);},
  'duplicate excerpt': f => {f.entry.reviewed_source_excerpts[1] = f.entry.reviewed_source_excerpts[0];},
  'open scientific defect': f => {f.row.disposition = 'open'; f.entry.canonical_row_sha256 = hashObject(f.row);},
};
for (const [name, mutate] of Object.entries(mutations)) test(`reject ${name}`, () => {
  const f = fixture(); mutate(f); f.seal(); assert.equal(rootSharedFinding(f.args), false);
});
test('receipt pointer cannot be forged', () => {const f = fixture(); f.args.decision.root_shared_finding_receipt_sha256 = 'a'.repeat(64); assert.equal(rootSharedFinding(f.args), false);});

test('reject manufactured source binding for an original unbound observation', () => {
  const f = fixture({unbound: true}), p = f.participants[1];
  const d = JSON.parse(f.files[p.decision_path]).decisions[0];
  d.observed_source = {snapshot: 'current', item_sha256: 'a'.repeat(64)};
  f.files[p.decision_path] = JSON.stringify({decisions: [d]});
  p.decision_core_sha256 = hashObject(decisionCore(d));
  Object.assign(f.args.decision, d); f.seal();
  assert.equal(rootSharedFinding(f.args), false);
});
test('reject omission of explicit original unbound limitation', () => {
  const f = fixture({unbound: true}), p = f.participants[1];
  const d = JSON.parse(f.files[p.decision_path]).decisions[0];
  delete d.historical_delta_unknown;
  f.files[p.decision_path] = JSON.stringify({decisions: [d]});
  p.decision_core_sha256 = hashObject(decisionCore(d));
  delete f.args.decision.historical_delta_unknown; f.seal();
  assert.equal(rootSharedFinding(f.args), false);
});

test('default verifier compares omitted optional observation fields without throwing', () => {
  const f = fixture(), p = f.participants[1];
  // A real decision may explicitly carry an undefined optional field while its
  // JSON/frozen native finding omits it. Native hashValue treats both alike.
  f.args.decision.producer_post_snapshot = undefined;
  assert.equal(hashObject(undefined), digest('undefined'));
  assert.equal(rootSharedFinding(f.args), true);
});

function legacyAnnotationsFixture(annotate) {
  const f = fixture();
  for (const p of f.participants) {
    const scope = JSON.parse(f.files[p.scope_guard.path]);
    const list = p.route === 'reader' ? scope.reader_findings : scope.refuter_findings;
    const original = list.find(x => x.obligation === p.obligation);
    delete original.observed_source; delete original.observed_sha256;
    delete original.observation_basis; delete original.dependency_path;
    p.frozen_finding_sha256 = hashObject(original);
    f.files[p.scope_guard.path] = JSON.stringify(scope);
    p.scope_guard.sha256 = digest(f.files[p.scope_guard.path]);
    f.receipt.inputs[p.scope_guard.path] = p.scope_guard.sha256;
    const file = JSON.parse(f.files[p.decision_path]), d = file.decisions.find(x => x.obligation === p.obligation);
    Object.assign(d, {observation_basis: 'unbound', observed_source: null,
      historical_delta_unknown: true, owner_resolution: 'Original native report had no observed byte binding; this dependency path is an owner contextual trace only.',
      dependency_path: [{id: 'thm-owner-consumer'}, {id: 'lem-supplier'}]});
    annotate?.(d);
    f.files[p.decision_path] = JSON.stringify(file);
    p.decision_core_sha256 = hashObject(decisionCore(d));
    if (p.obligation === f.args.prior.obligation) {Object.assign(f.args.prior, d); f.args.prior.target = original;}
    else {Object.assign(f.args.decision, d); f.args.target = original;}
  }
  f.seal(); return f;
}
test('legacy frozen findings allow explicitly unbound owner annotations and contextual trace', () => {
  assert.equal(rootSharedFinding(legacyAnnotationsFixture().args), true);
});
for (const [name, mutate] of [
  ['invented source bytes', d => {d.observed_source = {snapshot: 'current', item_sha256: 'a'.repeat(64)};}],
  ['invented current basis', d => {d.observation_basis = 'current';}],
  ['context trace without unknown limit', d => {delete d.historical_delta_unknown;}],
  ['invented source carrier', d => {d.producer_carrier_at_split = {item_sha256: 'a'.repeat(64)};}],
]) test(`legacy annotations reject ${name}`, () => {
  assert.equal(rootSharedFinding(legacyAnnotationsFixture(mutate).args), false);
});
