import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';
import { itemHashGuard } from '../../../../../tools/item-hash.mjs';
import { activeOwnershipRows } from '../../../../../tools/defect-ledger-ownership.mjs';

const root = process.cwd(), run = 'frontier-44-special-representation-examples-28-six-step';
const out = `research/${run}-owner-escalation-repairs/resume-20261011/klr/gate1`;
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hv = value => sha(JSON.stringify(canonical(value)));
const guards = {};
const mark = file => ({ path: file, sha256: guards[file] = sha(fs.readFileSync(file)) });
const read = file => { mark(file); return JSON.parse(fs.readFileSync(file)); };
mark('tools/step3-scope.mjs');
let code = fs.readFileSync('tools/step3-scope.mjs', 'utf8');
code = code.replace(/from '\.\/([^']+)'/g, (_, source) => `from '${pathToFileURL(path.join(root, 'tools', source))}'`);
code = code.replace('fail(`step3-scope: unknown command ${JSON.stringify(command)}`);',
  'export { liveFingerprints, currentDecisionCarrier, stabilizedObligations, pageCarrier, hashValue };');
const functionFile = `${out}/routing-native-functions.mjs`;
fs.writeFileSync(functionFile, code);
process.argv = ['node', functionFile, 'inspect-readonly', '--run', run, '--root', root];
const native = await import(pathToFileURL(path.resolve(functionFile)));
const dp = n => `research/${run}-alpha-batch-${n}-3a-decisions.json`;
const docs = Object.fromEntries([47, 48, 50].map(n => [n, read(dp(n))]));
const scopes = Object.fromEntries([47, 48, 50].map(n => [n, read(`research/${run}-step3-scope-${n}.json`)]));
for (const n of [46, 47, 48, 50]) {
  mark(`research/${run}-batch-${n}.pages.json`);
  mark(`research/${run}-batch-${n}.proof-contracts.json`);
}
mark(`research/${run}-step3-owner-repair-evidence.json`);
const ledgerPath = 'research/defect-ledger.jsonl'; mark(ledgerPath);
const ledger = fs.readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const errs = [], active = activeOwnershipRows(ledger, errs), byId = new Map(active.map(row => [row.defect_id, row]));
if (errs.length) throw Error(errs.join('\n'));
const targets = {}, live = {};
for (const n of [47, 48, 50]) {
  const batch = String(n), scope = scopes[n]; live[n] = native.liveFingerprints(batch);
  targets[n] = [...(scope.touched ?? []).map(id => ({ obligation: `touched:${batch}:${id}`, id, batch, route: 'touched', added: (scope.added ?? []).includes(id) })),
    ...(scope.pages_touched ?? []).map(id => ({ obligation: `page:${batch}:${id}`, id, batch, route: 'page', order_anchor: scope.page_order_anchors?.[id] ?? [] })),
    ...native.stabilizedObligations(batch, scope), ...(scope.reader_findings ?? []).map(finding => ({ ...finding, route: 'reader' })),
    ...(scope.refuter_findings ?? []).map(finding => ({ ...finding, route: 'flagged' }))];
}
const targetOf = (n, obligation) => {
  const target = targets[n].find(target => target.obligation === obligation);
  if (!target) throw Error('no genuine target ' + obligation);
  return target;
};
const decisionOf = (n, obligation) => {
  const decision = docs[n].decisions.find(decision => decision.obligation === obligation);
  if (!decision) throw Error('no original decision ' + obligation);
  return decision;
};
const sourceOf = (n, id) => {
  const item = `items/${id}.md`;
  if (fs.existsSync(item)) return { path: item, raw_sha256: mark(item).sha256, canonical_sha256: itemHashGuard(fs.readFileSync(item, 'utf8')) };
  const pages = read(`research/${run}-batch-${n}.pages.json`), page = pages.find(page => page.id === id);
  if (!page) throw Error('no source for ' + id);
  const file = `library/${page.category}/${id}.md`;
  return { path: file, raw_sha256: mark(file).sha256, canonical_sha256: itemHashGuard(fs.readFileSync(file, 'utf8')) };
};
const evidence = [mark(`${out}/routing-assessment.md`), mark(`research/${run}-alpha-batch-47-3a.md`), mark(`research/${run}-alpha-batch-50-3a.md`),
  mark(`research/${run}-owner-escalation-repairs/resume-20261011/klr/native-closure-assessment.md`),
  mark(`research/${run}-owner-escalation-repairs/resume-20261011/klr-labels/assessment.md`)];
const append = [], mapping = new Map(), shared = [], replacements = new Map();
const projectivity = read(`${out}/routing-projectivity-row.json`);
if (ledger.some(row => row.defect_id === projectivity.defect_id)) throw Error('proposed projectivity bundle already applied; stop and refresh strategy');
projectivity.item_sha256 = sourceOf(47, projectivity.subject).canonical_sha256;
append.push(projectivity);
for (const id of ['f44-six-b47-projectivity-cosets', 'f44-six-b47-projectivity-intertwiners', ...projectivity.supersedes]) mapping.set(id, projectivity.defect_id);
mapping.set('f44-six-b47-commutator-square', 'f44-six-b47-commutator-square-owner-linked-fixed');
const commutator = byId.get('f44-six-b47-commutator-square-owner-linked-fixed');
if (!commutator) throw Error('active commutator repair missing');

function bundle(primaryId, childIds, newId, reason, refs) {
  const originals = [primaryId, ...childIds].map(id => {
    const row = byId.get(id); if (!row) throw Error('active bundle source absent ' + id); return row;
  });
  if (ledger.some(row => row.defect_id === newId)) throw Error('bundle already exists ' + newId);
  if (originals.some(row => row.subject !== originals[0].subject || row.run !== run)) throw Error('cross-subject supersedes prohibited');
  const row = { ...structuredClone(originals[0]), defect_id: newId, at: new Date().toISOString(), supersedes: originals.map(row => row.defect_id),
    historical_owned_rows: originals, disposition: 'fixed', repair_confidence: 1, correction: reason,
    item_sha256: sourceOf(47, originals[0].subject).canonical_sha256,
    adjudication_ref: refs.map(obligation => ({ path: dp(47), obligation })),
    evidence: [...originals.flatMap(row => row.evidence ?? []), { path: `${out}/routing-assessment.md`, note: reason }] };
  append.push(row); for (const id of [primaryId, ...childIds]) mapping.set(id, newId);
  return row;
}
const jump = bundle('f44-six-b47-jump-prerequisites-owner-resolved-r1-20261011',
  ['f44-six-b47-jump-adjunction-citation', 'f44-six-b47-jump-absolute-citation'], 'f44-six-b47-jump-current-proof-and-citation-native-bundle-20261011',
  'The genuine refuter47:16 construction finding included the completed ancillary citation repairs as explicit history. This current same-subject ownership bundle preserves all three separately recorded physical defects, exact generic adjunction and maximal-tail absolute-simplicity suppliers, and completed rank-two/current jump proof under one native subject obligation. No source edit, new detection, coverage or repair round occurs.', ['refuter:47:16']);
const examplePage = bundle('f44-six-b47-page-symmetrizer', ['f44-six-b47-page-leaf-description'],
  'f44-six-b47-examples-symmetrizer-and-use-description-native-bundle-20261011',
  'The actual reader47:3 symmetrizer finding and its separately recorded ancillary page-use correction are both already fixed on the examples page. This same-subject ownership bundle retains their distinct fatal/nonfatal histories and genuine catcher, and binds reader47:3 plus refuter47:25 without inventing a supplemental gate observation.', ['reader:47:3', 'refuter:47:25']);

const oldAdjustment = byId.get('f44-six-b50-adjustment-nonidentity');
if (!oldAdjustment) throw Error('current adjustment theorem row missing');
const adjustment = { ...structuredClone(oldAdjustment), defect_id: 'f44-six-b50-adjustment-factorization-inference-owner-linked-20261011',
  at: new Date().toISOString(), supersedes: [oldAdjustment.defect_id], historical_owned_rows: [oldAdjustment],
  item_sha256: sourceOf(50, oldAdjustment.subject).canonical_sha256,
  adjudication_ref: [{ path: dp(50), obligation: 'touched:50:thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment' }],
  correction: 'The theorem inference repair remains fixed and unchanged. Its original compound history included a distinct remark-subject source-comparison repair, now accurately owned by its own row. This successor preserves the theorem subject and the full original history; no cross-subject supersedes or new mathematical edit occurs.',
  evidence: [...oldAdjustment.evidence, { path: `${out}/routing-assessment.md`, note: 'Separate the theorem inference and remark literature-support native subjects while retaining their actual original Alpha detections and repairs.' }] };
append.push(adjustment); mapping.set(oldAdjustment.defect_id, adjustment.defect_id);
const remarkId = 'rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers';
const remarkObligation = `touched:50:${remarkId}`;
const remark = { defect_id: 'f44-six-b50-nonidentity-remark-source-comparison-owner-linked-20261011', run, at: new Date().toISOString(), group: 'batch-50', batch: '50',
  subject: remarkId, class: oldAdjustment.class, subclass: oldAdjustment.subclass, severity: oldAdjustment.severity, location: 'remark',
  caught_at_stage: oldAdjustment.caught_at_stage, caught_by_role: oldAdjustment.caught_by_role, disposition: 'fixed', repair_confidence: 1,
  item_sha256: sourceOf(50, remarkId).canonical_sha256,
  historical_compound_row: oldAdjustment,
  correction: 'The genuine original Alpha touched-remark decision separately supported the formerly unsupported nonidentity observation by the explicit Fayers e3/characteristic2/rank8 adjustment witness and restricted-label conjugate-sign dictionary. This row records that already completed repair on its actual remark subject, preserving the original catcher and observation. No new source reading by this routing agent or fresh source repair is claimed.',
  evidence: [...oldAdjustment.evidence.filter(entry => entry.note?.includes('Fayers')), { path: dp(50), note: 'The exact original touched-remark source-comparison decision is frozen in the guarded delta before field.' }, { path: `${out}/routing-assessment.md`, note: 'Current source retains the independent literature witness, rather than deriving nonidentity from unknown theorem entries.' }],
  adjudication_ref: [{ path: dp(50), obligation: remarkObligation }] };
append.push(remark);

function sharedEntry(row, bindings, reason) {
  const current = sourceOf(row.subject.startsWith('thm-cyclotomic') ? 47 : bindings[0].n, row.subject);
  return { id: row.subject, defect_id: row.defect_id, ledger_row_sha256: hv(row), current_path: current.path, current_raw_sha256: current.raw_sha256,
    reason, evidence, obligations: bindings.map(({ n, obligation }) => ({ obligation, target_sha256: hv(targetOf(n, obligation)) })) };
}
shared.push(sharedEntry(projectivity, [{ n: 47, obligation: 'refuter:47:9' }, { n: 47, obligation: 'refuter:47:10' }, { n: 48, obligation: 'reader:48:1' }, { n: 48, obligation: 'refuter:48:7' }],
  'The genuine batch48 compound observation contains both physical projectivity gaps separately caught in47:9 and47:10. One native same-subject ownership bundle preserves both histories and their actual completed construction, while this binding relates all four immutable targets without asserting that the original independent findings were identical or inventing execution coverage.'));
shared.push(sharedEntry(commutator, [{ n: 47, obligation: 'refuter:47:11' }, { n: 48, obligation: 'reader:48:2' }, { n: 48, obligation: 'refuter:48:8' }],
  'These genuine producer47 and foreign48 observations concern the same already repaired actual commutator comparison square. The active owner-linked successor preserves its history; the fresh exact target bindings reuse it without another physical defect row, new worker observation or new source repair.'));
shared.push(sharedEntry(examplePage, [{ n: 47, obligation: 'reader:47:3' }, { n: 47, obligation: 'refuter:47:25' }],
  'The genuine reader/refuter page symmetrizer observations identify the same original page-prose defect, and the reader separately records the completed ancillary use-description repair. The same-subject bundle preserves both physical correction histories; these actual target bindings avoid manufacturing a gate observation or changing historical detection fields.'));
const placement = byId.get('f44-six-b50-helper-placement');
if (!placement) throw Error('active helper-placement row absent');
shared.push(sharedEntry(placement, [{ n: 50, obligation: 'reader:50:4' }, { n: 50, obligation: 'refuter:50:1' }],
  'The genuine reader50:4 and refuter50:1 observations identify exactly the same missing four-helper A-page placement on the same original observed carrier. Their historically different source-class fields remain unchanged. Current page and manifest contain the actual helper inventory in assigned order; this exact owner bridge reuses the fixed row and creates no execution coverage.'));

const touchedAmend = new Set(['lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels', 'lem-reduction-of-characteristic-zero-simple-modules-modulo-p',
  'def-graded-adjustment-polynomials-in-positive-characteristic', 'thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment', remarkId]);
const deltas = [], preserved = [];
for (const n of [47, 50]) for (const before of docs[n].decisions) {
  const target = targetOf(n, before.obligation), carrier = native.currentDecisionCarrier(before, target, live[n]);
  if (!carrier) throw Error('empty actual current carrier ' + before.obligation);
  const replacement = structuredClone(before), changes = [];
  const currentSha = native.hashValue(carrier);
  if (replacement.subject_sha256 !== currentSha) { replacement.subject_sha256 = currentSha; changes.push('native carrier current source/contract/manifest hash refresh'); }
  replacement.defect_ids = (replacement.defect_ids ?? []).map(id => {
    const replacementId = mapping.get(id) ?? id;
    if (replacementId !== id) changes.push(`active native ownership ${id} -> ${replacementId}`);
    return replacementId;
  });
  if (n === 50 && before.id === remarkId) { replacement.defect_ids = [remark.defect_id]; changes.push('actual remark-subject source-comparison row'); }
  let pre = null, post = null;
  if (target.route === 'touched' || target.route === 'page') {
    const labels = target.stabilized ? ['post', 'pre-3a'] : ['pre', 'post'];
    const key = target.route === 'page' ? 'page_hashes' : 'hashes';
    const values = labels.map(label => read(`research/${run}-step3-hash-${target.batch}-${label}.json`)[key]?.[target.id]);
    [pre, post] = values.map(value => target.route === 'page' ? native.pageCarrier(value, target.order_anchor) : value);
    if (n === 50 && touchedAmend.has(before.id) && replacement.verdict === 'accepted_repair'
      && currentSha !== native.hashValue(post)) {
      if (currentSha === native.hashValue(pre)) throw Error('current touched carrier reverted to pre ' + before.obligation);
      replacement.verdict = 'amended_repair'; changes.push('retained reader repair plus actual later owner source/contract/metadata carrier amendment');
    }
  }
  if (before.obligation === 'refuter:47:9' || before.obligation === 'refuter:47:10') {
    replacement.same_defect_as = before.obligation === 'refuter:47:9' ? 'refuter:47:10' : 'refuter:47:9';
    replacement.same_defect_evidence = 'One truthful native ownership bundle contains both distinct original comparison/intertwiner gaps and their actual completed projectivity construction, with both original observations preserved separately and exact shared target binding. This is ownership consolidation, not a claim that the original physical findings were identical.';
    changes.push('explicit genuine compound producer-target binding');
  }
  if (before.obligation === 'refuter:47:11') {
    replacement.same_defect_as = 'reader:48:2';
    replacement.same_defect_evidence = 'The exact foreign reader observation and producer refuter47:11 concern the same actual repaired commutator square, retained under its active fixed successor and fresh owner target binding.';
  }
  const sharedFor = shared.find(entry => entry.obligations.some(binding => binding.obligation === before.obligation));
  if (sharedFor && ['reader:47:3', 'refuter:47:25', 'reader:50:4', 'refuter:50:1'].includes(before.obligation)) {
    replacement.same_defect_evidence = 'The exact genuine reader/refuter observations identify the same original repaired page/inventory defect; the owner bridge preserves their original source-class/observed-byte fields and binds both actual targets to the existing or accurately bundled fixed subject row.';
    changes.push('fresh exact owner-shared page finding binding');
  }
  if (!changes.length && replacement.same_defect_as === before.same_defect_as && replacement.same_defect_evidence === before.same_defect_evidence) {
    preserved.push({ obligation: before.obligation, decision_sha256: hv(before) }); continue;
  }
  replacement.owner_resolution = `${typeof before.owner_resolution === 'string' ? before.owner_resolution + ' ' : ''}Current owner routing reconciliation preserves the genuine original repair and frozen observations. ${changes.join('; ')}. No new source repair, original worker coverage, independent acceptance, synthetic gate/origin or refunded round is claimed. See ${out}/routing-assessment.md.`;
  deltas.push({ obligation: before.obligation, decision_file: dp(n), before_file_sha256: guards[dp(n)], before_decision_sha256: hv(before), before, replacement,
    current_native_target: target, target_sha256: hv(target), current_native_carrier: carrier, current_source: sourceOf(n, before.id),
    pre_reader_carrier: pre, reader_result_carrier: post, changes, status: 'guarded-root-review-only' });
  replacements.set(before.obligation, replacement);
}
const schema = fs.readFileSync('tools/defect-ledger.mjs', 'utf8'), context = vm.createContext({});
vm.runInContext(schema.slice(schema.indexOf('const STAGES ='), schema.indexOf('function validate(rows, runFilter)')) + '\nglobalThis.rowCheck=validateRow;', context);
const schemaErrors = append.flatMap(row => context.rowCheck(row, new Set(), { allowFrontier20Legacy: false, allowFrontier29ValidateOnly: false }));
const ownershipErrors = []; activeOwnershipRows([...ledger, ...append], ownershipErrors);
if (schemaErrors.length || ownershipErrors.length) throw Error([...schemaErrors, ...ownershipErrors].join('\n'));
const report = { run, kind: 'guarded-evidence-only-routing-reconciliation-not-applied', input_guards: guards,
  counts: { append_only_ownership_rows: append.length, batch47_50_decision_deltas: deltas.length, preserved_unchanged_decisions: preserved.length, owner_shared_entries: shared.length },
  schema_errors: schemaErrors, ownership_errors: ownershipErrors, preserved, exact_delta_obligations: deltas.map(row => row.obligation),
  native_gate_attempted: false, coverage_or_origins_added: false, rounds_reset: false,
  batch48_decisions_applied_or_proposed_here: false,
  current_carrier_function_source: 'Actual tools/step3-scope.mjs liveFingerprints/currentDecisionCarrier, copied verbatim except absolute imports and read-only exports; owning live batch supplied for finding targets without batch.',
  serial_refresh_required_after_contract_or_source_application: true };
for (const [name, value] of Object.entries({ 'routing-append-array.json': append, 'routing-guarded-decision-delta-array.json': deltas,
  'routing-owner-shared-entries.json': shared, 'routing-integration-report.json': report })) fs.writeFileSync(`${out}/${name}`, JSON.stringify(value, null, 2) + '\n');
console.log(JSON.stringify(report.counts));
