import fs from 'node:fs';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const { itemHashGuard } = await import(pathToFileURL(resolve('tools/item-hash.mjs')));
const { activeOwnershipRows } = await import(pathToFileURL(resolve('tools/defect-ledger-ownership.mjs')));
const run = 'frontier-44-special-representation-examples-28-six-step';
const base = `research/${run}-owner-escalation-repairs/resume-20261011`;
const out = `${base}/klr`;
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hv = value => sha(JSON.stringify(canonical(value)));
const guards = {};
const mark = path => ({ path, sha256: guards[path] = sha(fs.readFileSync(path)) });
const read = path => { mark(path); return JSON.parse(fs.readFileSync(path)); };
const decisionPaths = Object.fromEntries([47, 50].map(n => [n, `research/${run}-alpha-batch-${n}-3a-decisions.json`]));
const docs = Object.fromEntries([47, 50].map(n => [n, read(decisionPaths[n])]));
const ownerEvidencePath = `research/${run}-step3-owner-repair-evidence.json`;
mark(ownerEvidencePath);
const labelsReceiptPath = `${base}/root-application/klr-labels-closure-receipt.json`;
if (fs.existsSync(labelsReceiptPath)) mark(labelsReceiptPath);
const scopes = Object.fromEntries([47, 50].map(n => [n, read(`research/${run}-step3-scope-${n}.json`)]));
const manifests = Object.fromEntries([47, 50].map(n => [n, read(`research/${run}-batch-${n}.pages.json`)]));
const contracts = Object.fromEntries([47, 50].map(n => [n, read(`research/${run}-batch-${n}.proof-contracts.json`)]));
for (const n of [47, 50]) for (const phase of ['pre', 'post']) mark(`research/${run}-step3-hash-${n}-${phase}.json`);
const ledgerPath = 'research/defect-ledger.jsonl';
mark(ledgerPath);
const ledger = fs.readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const activeErrors = [];
const active = activeOwnershipRows(ledger, activeErrors);
if (activeErrors.length) throw Error(activeErrors.join('\n'));

const selected47 = ['refuter:47:1', 'refuter:47:2', 'refuter:47:4', 'refuter:47:5', 'refuter:47:6', 'refuter:47:7', 'refuter:47:8',
  'page:47:cyclotomic-klr-algebras-and-highest-weight-categorification', 'refuter:47:24'];
const selected50 = ['touched:50:def-graded-module-and-projective-grothendieck-groups-for-klr-towers'];
const selected = [...selected47.map(obligation => ({ n: 47, obligation })), ...selected50.map(obligation => ({ n: 50, obligation }))];
const evidencePaths = [`${out}/constructive-completion.md`, `${out}/focused-consumer-impacts.json`, `${out}/final-consumer-bindings.json`,
  `${out}/native-closure-assessment.md`, `${base}/klr-labels/assessment.md`, `${base}/klr-labels/focused-consumer-checks.json`,
  `${base}/root-application/source-repair-receipt.json`, `${base}/root-application/latest-metadata-receipt.json`,
  `${out}/explicit-source-checks.json`, `${out}/original-consumer-checks.json`];
const evidence = [];
const explanations = {
  'refuter:47:1': 'Current Definition explicitly constructs graded 2-morphism spaces and all native typed relations: both adjunctions, both prescribed rank-one inverse branches, fake-bubble indices, finite slides, literal -1 curl and -2 cancellation sums, and the correctly handed mixed pair. The independently constructed flag model realizes this full presentation. The historical ill-formed presentation finding remains true against its original bytes.',
  'refuter:47:2': 'The independent oriented normal-form helper proves finite planar routing with crossing count primary, finite shorter-crossing corrections, generic free-root leading matching separation and independent bubble coefficients at fixed physical weight. It includes arbitrary oriented boundaries; its coefficient separation does not assume cyclotomic faithfulness. Current PBW/bubble original carrier consumes this complete supplier and preserves its full basis and joint-faithfulness Statement.',
  'refuter:47:4': 'The actual polynomial flag comparison helper defines the monic factor rings, four coefficient cups/caps, typed native T/S mates, generic-root interpolation matrices, quotient/remainder blocks, both five-equation inverse systems, and integral descent through universal projective modules. Current flag-model Proof4.1 consumes these explicit maps, rather than treating monic division as an unspecified inverse.',
  'refuter:47:5': 'The independent flag helper defines the integral parabolic trace and matrix trace, fixes the ordered-residue sign, constructs the relative cap using the perfect trace, and proves normalized Morita transport exactly to the old coefficient form and its Casimir. Its Q-transfer and companion cup identities prove the actual partial mixed pair. The complete terminal supplier additionally compares the separately distinguished actions through one ordinary downward cap lift; no simultaneous finite flag coefficient ring is assumed.',
  'refuter:47:6': 'The oriented normal-form/cap helper proves forced vacuum coefficients, the correctly typed crossed closure -a_i(x), the two parabolic double-coset reduction of every killed-upward factor, and marked-monic normalization including negative-weight retracts. It proves both ideal-intersection inclusions before projective equivalence. Current cap-off original Proof1.1-4.1 consumes those concrete calculations and retains arbitrary monic and all-field scope.',
  'refuter:47:7': 'Actual compatible Frobenius dual bases construct the A-bilinear T and finite B-central C, both bimodule triangle equations and the canonical first-adjoint comparison, then tensor them on all modules. The full terminal helper supplies all three matching patterns, and the wordtrace dual-basis rotation plus regular-generator comparison gives actual double mates with typed ratio t_ij/t_ji. ROOT installed the exact explicit strengthening. Current original coherent carrier consumes these constructed maps, not scalar flag traces or the commutator alone.',
  'refuter:47:8': 'Actual composed word adjunctions give the whole regular pairing B->DB{-t_beta}, including opposite corners. The full typed terminal comparison supplies raw ratio t_ij/t_ji; the intrinsic inversion weights have reciprocal adjacent ratio and make the form cyclic on every generator. Invertible diagonal rescaling preserves perfectness and degree -2def. Current original symmetry carrier retains its full all-field homogeneous and arbitrary-monic ungraded conclusions, with finite dimension and root strings supplied separately.',
};
const pageExplanation = 'The named original local foundation gaps are now physically supplied: explicit diagram/model/PBW/cap-off, actual bimodule second adjunction and full terminal comparison/symmetry, complete jump, unsigned right extraction/common-tensor recognition, and path-independent FIRST/RIGHT labels. The page places the full new helper chain before its consumers. Its all-field crystal assertion uses the generic categorical chain. Its global-basis paragraph remains expressly conditional on the parent generic geometric theorem in the exact normalized symmetric d_i=1 characteristic-zero same-Q regime. This resolves the named page-foundation defect and preserves the strongest scoped content; it does not accept the separate quasi/general geometric supplier branch, certify readiness, or remove its outstanding native hold.';
const native50Explanation = 'The actual Definition two-towers/F5 and Proof1.3-1.4 require the full standard level-one homogeneous symmetrizing trace. Current actual wordtrace and original symmetry supply exactly that premise, retaining finite dimension, trace degree, and graded block transport. The source Definition and its audit enrichment need no mathematical edit and use no raw unequal-crossing scalar. The original historically true missing-supplier observation is retained in the frozen before decision; current source adjudication is reviewed_no_defect with empty defect_ids as required by the native clean-change rule.';

const consumer = read(`${out}/focused-consumer-impacts.json`);
const finalBindings = { run, recorded_at: new Date().toISOString(), scope: 'same39 supplier consumers, current final source bytes; focused actual-use checks, not a new whole-item audit', items: [] };
for (const row of consumer.items) {
  const binding = mark(row.path);
  finalBindings.items.push({ id: row.id, path: row.path, raw_sha256: binding.sha256, canonical_sha256: itemHashGuard(fs.readFileSync(row.path, 'utf8')),
    focused_disposition: row.focused_disposition, actual_use_evidence: `${out}/focused-consumer-impacts.json`, label_actual_use_evidence: `${base}/klr-labels/focused-consumer-checks.json` });
}
fs.writeFileSync(`${out}/final-consumer-bindings.json`, JSON.stringify(finalBindings, null, 2) + '\n');
evidence.push(...evidencePaths.map(mark));

function currentCarrier(n, id, target) {
  const page = manifests[n].find(page => page.id === id);
  if (page) {
    const { items, ...fields } = page;
    const path = `library/${page.category}/${page.id}.md`;
    const raw = mark(path).sha256;
    const carrier = { file_sha256: raw, manifest_sha256: hv(fields) };
    const order = items.map(it => typeof it === 'string' ? it : it.id);
    if (target.route === 'page') carrier.item_order = order.filter(id => (target.order_anchor ?? []).includes(id));
    return { path, carrier, anchored_page_context: { file_sha256: raw, manifest_sha256: hv(fields), item_order: order.filter(id => (scopes[n].page_order_anchors?.[page.id] ?? []).includes(id)) } };
  }
  const owner = manifests[n].flatMap(page => page.items.map(it => ({ it: typeof it === 'string' ? { id: it } : it, page }))).find(owner => owner.it.id === id);
  if (!owner) throw Error('absent current manifest subject ' + id);
  const path = `items/${id}.md`;
  return { path, carrier: { item_sha256: mark(path).sha256, contract_sha256: hv(contracts[n].contracts?.[id] ?? null), manifest_sha256: hv({ ...owner.it, __step4_page_id: owner.page.id }) } };
}
function targetFor(n, before) {
  if (before.route === 'page') return { obligation: before.obligation, id: before.id, batch: String(n), route: 'page', order_anchor: scopes[n].page_order_anchors?.[before.id] ?? [] };
  if (before.route === 'touched') return { obligation: before.obligation, id: before.id, batch: String(n), route: 'touched', added: (scopes[n].added ?? []).includes(before.id) };
  const finding = scopes[n].refuter_findings.find(finding => finding.obligation === before.obligation);
  if (!finding) throw Error('absent genuine native finding ' + before.obligation);
  return { ...finding, route: before.route };
}
const append = [], deltas = [], rowByOriginal = new Map(), reuse = [];
for (const { n, obligation } of selected) {
  const before = docs[n].decisions.find(row => row.obligation === obligation);
  if (!before || before.verdict !== 'escalated') throw Error('not exact remaining escalation ' + obligation);
  const target = targetFor(n, before);
  const current = currentCarrier(n, before.id, target);
  const paragraph = n === 50 ? native50Explanation : before.id === 'cyclotomic-klr-algebras-and-highest-weight-categorification' ? pageExplanation : explanations[obligation];
  if (!paragraph) throw Error('missing exact mathematics ' + obligation);
  let fixed = null;
  if (n === 47) {
    if (before.defect_ids.length !== 1) throw Error('unexpected defect multiplicity');
    const oldId = before.defect_ids[0];
    fixed = rowByOriginal.get(oldId);
    if (!fixed) {
      const original = active.find(row => row.run === run && row.defect_id === oldId);
      if (!original) throw Error('original active row missing ' + oldId);
      if (original.disposition === 'fixed') {
        fixed = original;
        reuse.push({ defect_id: oldId, action: 'reuse-existing-no-append', row_sha256: hv(original), row: original });
      } else {
        if (original.disposition !== 'open') throw Error('unexpected disposition ' + oldId);
        const newId = `${oldId}-owner-fixed-20261011`;
        if (ledger.some(row => row.defect_id === newId)) throw Error('fixed successor ID already exists ' + newId);
        fixed = { ...structuredClone(original), defect_id: newId, at: new Date().toISOString(), supersedes: [oldId], disposition: 'fixed', repair_confidence: 1,
          item_sha256: itemHashGuard(fs.readFileSync(current.path, 'utf8')),
          description: `Historical true finding retained. ${paragraph}`,
          evidence: [...(original.evidence ?? []), { path: `${out}/native-closure-assessment.md`, note: paragraph }, { path: `${out}/final-consumer-bindings.json`, note: 'Current exact supplier and39 consumer bindings; label actual-use evidence and separate holds preserved.' }] };
        append.push(fixed);
      }
      rowByOriginal.set(oldId, fixed);
    }
  }
  const replacement = { ...structuredClone(before), verdict: n === 50 ? 'reviewed_no_defect' : before.route === 'page' ? 'amended_repair' : 'confirmed_fatal',
    defect_ids: fixed ? [fixed.defect_id] : [], repair_confidence: 1, subject_sha256: hv(current.carrier), evidence: `OWNER current-source constructive resolution: ${paragraph} Evidence: ${out}/native-closure-assessment.md and final-consumer-bindings.json. Original native report/detection fields remain preserved; no new execution coverage or review rounds are claimed.`,
    owner_resolution: 'ROOT requested this guarded evidence proposal after reading the actual current constructive suppliers and applying the explicit mate/regular-generator strengthening. Historical observations and their original detection attribution remain immutable. This proposes complete physical resolution of the exact named local defect only; ROOT applies the native decision. No independent acceptance, gates, execution coverage, publishing, or reset of the exhausted repair rounds is supplied.' };
  if (n === 50) replacement.change_kind = 'audit_enrichment';
  if (before.id === 'cyclotomic-klr-algebras-and-highest-weight-categorification') {
    replacement.same_defect_as = before.route === 'page' ? 'refuter:47:24' : `page:47:${before.id}`;
    replacement.same_defect_evidence = 'The exact native page and refuter observations both identify the same physical Objective foundation overclaim on this page, caused by the same previously missing local diagram/symmetry/crystal/RIGHT-label suppliers. They are retained and resolved under one append-only successor with both genuine targets.';
  }
  if (target.owner_page_repair) { replacement.historical_delta_unknown = true; replacement.owner_resolution += ' Preserve the actual owner_page_repair unbound historical observation.'; }
  const issues = [];
  if (target.observed_sha256 && target.observed_sha256 === hv(current.carrier)) issues.push('current carrier unchanged from original observed target; prior applied repair bridge required');
  deltas.push({ obligation, decision_file: decisionPaths[n], before_file_sha256: guards[decisionPaths[n]], before_decision_sha256: hv(before), before,
    replacement, current_native_target: target, target_sha256: hv(target), current_native_carrier: current.carrier, anchored_page_context: current.anchored_page_context ?? null,
    current_source: { path: current.path, raw_sha256: guards[current.path], canonical_sha256: itemHashGuard(fs.readFileSync(current.path, 'utf8')) },
    issues, status: issues.length ? 'blocked-root-review' : 'ready-root-review' });
}
const nativeSign = active.find(row => row.defect_id === 'f44-six-b47-flag-native-sign' && row.run === run);
if (!nativeSign || nativeSign.disposition !== 'fixed') throw Error('already fixed native sign row missing');
reuse.push({ defect_id: nativeSign.defect_id, action: 'reuse-existing-no-append-no-decision-delta', row_sha256: hv(nativeSign), row: nativeSign });
const pageDeltas = deltas.filter(row => row.replacement.id === 'cyclotomic-klr-algebras-and-highest-weight-categorification');
const pageRow = append.find(row => row.subject === 'cyclotomic-klr-algebras-and-highest-weight-categorification');
const shared = [{ id: pageRow.subject, defect_id: pageRow.defect_id, ledger_row_sha256: hv(pageRow), current_path: pageDeltas[0].current_source.path,
  current_raw_sha256: pageDeltas[0].current_source.raw_sha256,
  reason: 'The genuine original page obligation and refuter47:24 identify exactly the same physical page-foundation overclaim. ROOT completed and examined its actual local supplier chain and label consumer construction. This entry binds both genuine target hashes under the same append-only fixed successor, preserves their original detection evidence, and grants no new native execution coverage or general quasi-branch acceptance.',
  evidence, obligations: pageDeltas.map(row => ({ obligation: row.obligation, target_sha256: row.target_sha256 })) }];

const schema = fs.readFileSync('tools/defect-ledger.mjs', 'utf8');
const context = vm.createContext({});
vm.runInContext(schema.slice(schema.indexOf('const STAGES ='), schema.indexOf('function validate(rows, runFilter)')) + '\nglobalThis.validateNative=validateRow;', context);
const schemaErrors = append.flatMap(row => context.validateNative(row, new Set(), { allowFrontier20Legacy: false, allowFrontier29ValidateOnly: false }));
const ownershipErrors = [];
activeOwnershipRows([...ledger, ...append], ownershipErrors);
if (schemaErrors.length || ownershipErrors.length) throw Error([...schemaErrors, ...ownershipErrors].join('\n'));
const report = { run, status: 'guarded-evidence-only-root-proposal-not-applied', input_guards: guards,
  counts: { append_only_fixed_successors: append.length, exact_native_decision_deltas: deltas.length, shared_page_entries: shared.length, reused_existing_fixed_rows: reuse.length, focused_current_consumer_inventory: finalBindings.items.length },
  exact_obligations: selected.map(row => row.obligation), excluded_label_obligations_owned_by_labels_agent: ['refuter:47:16', 'refuter:47:17', 'refuter:47:18', 'refuter:47:19', 'refuter:47:20', 'refuter:47:21', 'refuter:47:22', 'refuter:47:23', 'touched:47:lem-cyclotomic-extension-of-scalars-respects-the-based-quotient'],
  structural_checks: { row_schema_errors: schemaErrors, append_only_ownership_errors: ownershipErrors, unchanged_observed_carriers: deltas.filter(row => row.issues.length).map(row => row.obligation), native50_clean_change_empty_defect_ids: true, page_route_uses_anchored_carrier: true, page_refuter_uses_unanchored_carrier: true },
  history_preserved: true, source_and_aggregate_application_performed: false, execution_coverage_added: false, historical_round_reset: false, gates_attempted: false,
  confidence_basis: 'Exact constructive proofs and prior focused supplier/consumer reading, root-applied explicit unit/counit strengthening, and current metadata/source hashes. Local mechanical checks are not mathematical acceptance.',
  unresolved_separate_holds: ['General quasi-R/tensor-bar branch and unrelated transitive geometric supplier/native obligations remain held. Page basis layer is conditional in its exact symmetric d_i=1 characteristic-zero same-Q scope; this packet does not certify global readiness.'] };
const labelObligations = new Set(report.excluded_label_obligations_owned_by_labels_agent);
report.preserve_existing_completed_decisions = docs[47].decisions.filter(row => labelObligations.has(row.obligation))
  .map(row => ({ obligation: row.obligation, verdict: row.verdict, decision_sha256: hv(row), current_decision: row }));
report.serial_refresh = {
  labels_closure_receipt: fs.existsSync(labelsReceiptPath) ? { path: labelsReceiptPath, sha256: guards[labelsReceiptPath] } : null,
  owner_evidence_current_full_file_guard: { path: ownerEvidencePath, sha256: guards[ownerEvidencePath] },
  current_full_batch47_decision_guard: { path: decisionPaths[47], sha256: guards[decisionPaths[47]] },
  existing_label_rows_and_owner_entries_preserved: true,
  proof_sources_rechecked_or_tests_repeated: false,
  scope: 'Refresh exact remaining10 target/carrier/full-file guards after serial root label closure; apply selected deltas only and append/merge without replacing unrelated decisions or owner entries.',
};
for (const [name, value] of Object.entries({ 'native-append-array.json': append, 'native-guarded-decision-delta-array.json': deltas,
  'native-owner-shared-defect-entries.json': shared, 'native-reused-fixed-rows.json': reuse, 'native-integration-report.json': report })) {
  fs.writeFileSync(`${out}/${name}`, JSON.stringify(value, null, 2) + '\n');
}
console.log(JSON.stringify(report.counts));
