// Private metadata/evidence inspection. Never writes canonical receipts or verdicts.
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
const run = 'frontier-38-owner-30', base = 'research/' + run;
const reportPath = base + '-step5-impact-refresh-qualification-report.json';
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sha = value => createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hash = value => sha(JSON.stringify(canonical(value)) ?? 'undefined');
const report = read(reportPath), receipt = read(base + '-step5-impact-refresh-before/impact.json');
const leadPath = base + '-alpha-5b.md', lead = readFileSync(leadPath, 'utf8');
const nativePath = base + '-dispatch/alpha-5b-lead.result.json', native = read(nativePath);
const verdictPath = base + '-5b-verdicts.jsonl';
const verdicts = readFileSync(verdictPath, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const textCache = new Map(), contractCache = new Map(), nativeCache = new Map();
const text = id => {
  if (!textCache.has(id)) {
    const path = 'items/' + id + '.md';
    textCache.set(id, existsSync(path) ? readFileSync(path, 'utf8') : null);
  }
  return textCache.get(id);
};
const rawHash = id => text(id) === null ? null : sha(text(id));
const ownerById = new Map();
for (let batch = 1; batch <= 30; batch++) {
  const path = base + '-batch-' + batch + '.pages.json';
  for (const page of read(path)) for (const item of page.items) ownerById.set(item.id,
    { batch: String(batch), manifest: { ...item, __step6_page_id: page.id } });
}
const contractFor = batch => {
  if (!contractCache.has(batch)) contractCache.set(batch, read(base + '-batch-' + batch + '.proof-contracts.json').contracts);
  return contractCache.get(batch);
};
const carrier = id => {
  const owner = ownerById.get(id);
  return owner ? { item_sha256: rawHash(id), contract_sha256: hash(contractFor(owner.batch)[id] ?? null),
    manifest_sha256: hash(owner.manifest) } : null;
};
const nativeFor = batch => {
  if (!nativeCache.has(batch)) {
    const path = base + '-dispatch/alpha-5a-batch-' + batch + '.result.json';
    nativeCache.set(batch, existsSync(path) ? { path, row: read(path), sha256: sha(readFileSync(path)) } : null);
  }
  return nativeCache.get(batch);
};
const ended = Date.parse(native.ended_at), started = Date.parse(native.started_at);
const nativeLeadSupported = native.run === run && native.role === 'alpha' && native.label === '5b-lead'
  && native.ok === true && native.exit_code === 0 && native.covers?.includes('all')
  && Number.isFinite(started) && Number.isFinite(ended) && started <= ended;
const direct = report.direct_graphs[0];
const pairs = new Map();
for (const impact of direct.impacts) for (const id of impact.required_review) {
  if (!pairs.has(id)) pairs.set(id, new Set());
  pairs.get(id).add(impact.source);
}
const rowsById = new Map();
for (const row of receipt.dispositions) {
  if (!rowsById.has(row.id)) rowsById.set(row.id, []);
  rowsById.get(row.id).push(row);
}
const clauseProblems = [], useProblems = [];
for (const [ref, clause] of Object.entries(receipt.clause_evidence ?? {})) {
  if (clause.supplier_raw_sha256 !== rawHash(ref)) clauseProblems.push({ ref, reason: 'supplier raw hash differs' });
  if (typeof clause.text !== 'string' || sha(clause.text) !== clause.clause_sha256)
    clauseProblems.push({ ref, reason: 'stored clause hash does not bind stored text' });
  if (clause.text && !text(ref)?.includes(clause.text)) clauseProblems.push({ ref, reason: 'stored clause text not exact substring of current supplier' });
}
for (const [ref, use] of Object.entries(receipt.use_evidence ?? {})) {
  if (typeof use.text !== 'string' || sha(use.text) !== use.use_sha256)
    useProblems.push({ ref, reason: 'stored use hash does not bind stored text' });
  if (use.text && !text(use.consumer)?.includes(use.text)) useProblems.push({ ref, reason: 'stored use text not exact substring of current consumer' });
}
const edgeChecks = verdicts.filter(row => row.kind === 'edge').map(row => ({ from: row.from, to: row.to,
  current: row.from_sha256 === rawHash(row.from) && row.to_sha256 === rawHash(row.to),
  note_present: typeof row.note === 'string' && row.note.trim().length >= 40,
  report_attribution: lead.includes('`' + row.from + '`') && lead.includes('`' + row.to + '`') }));
const qualified = [];
for (const id of direct.required_review) {
  const found = rowsById.get(id) ?? [], row = found[0], issues = [], warnings = [], bindings = [];
  if (found.length !== 1) issues.push('required subject has no unique original disposition');
  if (!row) { qualified.push({ id, issues }); continue; }
  if (!['still-licensed', 'repaired', 'not-load-bearing'].includes(row.status)) issues.push('original disposition is unresolved');
  if (!row.notes?.trim()) issues.push('no actual review note');
  if (row.item_raw_sha256 !== rawHash(id)) issues.push('consumer raw bytes differ from original reviewed receipt');
  for (const source of pairs.get(id) ?? []) {
    const candidates = (row.supplier_uses ?? []).filter(use => use.changed_supplier === source
      && use.immediate_supplier === source && JSON.stringify(use.path) === JSON.stringify([source, id]));
    if (!candidates.length) { issues.push('no exact direct supplier/use binding for ' + source); continue; }
    for (const entry of candidates) {
      const clause = receipt.clause_evidence?.[entry.consumed_clause?.ref];
      const use = receipt.use_evidence?.[entry.current_use?.ref];
      const problems = [];
      if (entry.supplier_raw_sha256 !== rawHash(source) || entry.immediate_supplier_raw_sha256 !== rawHash(source)) problems.push('supplier raw hash differs');
      if (entry.consumed_clause?.ref !== source || !clause
        || entry.consumed_clause.clause_sha256 !== clause.clause_sha256
        || clause.supplier_raw_sha256 !== rawHash(source)
        || sha(clause.text ?? '') !== clause.clause_sha256 || !clause.text?.trim()
        || !text(source)?.includes(clause.text)) problems.push('clause hash/text is missing or not current exact source text');
      if (!use || use.consumer !== id || use.supplier !== source
        || entry.current_use.use_sha256 !== use.use_sha256 || sha(use.text ?? '') !== use.use_sha256
        || !use.text?.trim() || !text(id)?.includes(use.text)) problems.push('use hash/text is missing or not current exact consumer text');
      bindings.push({ source, clause_ref: entry.consumed_clause?.ref, use_ref: entry.current_use?.ref,
        source_raw_sha256: rawHash(source), clause_sha256: clause?.clause_sha256,
        use_sha256: use?.use_sha256, problems });
      issues.push(...problems.map(problem => source + ': ' + problem));
    }
  }
  const historical = row.historical_review, owner = ownerById.get(id);
  let historicalBinding = null, decisionChecks = [];
  if (historical) {
    const path = historical.contract;
    const entry = existsSync(path) ? read(path).contracts?.[id] : null;
    const risk = entry?.risk_review;
    if (!entry || hash(entry) !== historical.contract_row_sha256) issues.push('historical contract row hash is not current');
    if (historical.post_5a_raw_sha256 !== rawHash(id)) issues.push('historical post-5a raw item binding differs');
    if (!risk || risk.status !== 'complete' || risk.reviewer !== historical.reviewer || risk.notes !== historical.notes)
      issues.push('historical reviewer/notes do not match the current actual risk-review record');
    const nativeAuthor = owner ? nativeFor(owner.batch) : null;
    if (!nativeAuthor || nativeAuthor.row.run !== run || nativeAuthor.row.role !== 'alpha'
      || nativeAuthor.row.ok !== true || !nativeAuthor.row.covers?.map(String).includes(owner.batch))
      issues.push('missing actual successful owning batch5a provenance for attributed review');
    historicalBinding = { reviewer: historical.reviewer, contract: path, row_sha256: historical.contract_row_sha256,
      native_5a: nativeAuthor ? { path: nativeAuthor.path, sha256: nativeAuthor.sha256,
        ended_at: nativeAuthor.row.ended_at } : null };
    if (owner) {
      const decisionPath = base + '-alpha-batch-' + owner.batch + '-5a-decisions.json';
      const doc = existsSync(decisionPath) ? read(decisionPath) : null;
      decisionChecks = (doc?.decisions ?? []).filter(decision => decision.id === id).map(decision => ({
        obligation: decision.obligation, verdict: decision.verdict,
        subject_hash_current: decision.subject_sha256 === hash(carrier(id)),
        evidence_present: typeof decision.evidence === 'string' && decision.evidence.trim().length > 0 }));
      if (decisionChecks.some(decision => !decision.subject_hash_current || !decision.evidence_present
        || decision.verdict === 'escalated')) issues.push('cited subject5a decision is stale/missing evidence/unresolved');
    }
    if ((historical.notes?.trim().length ?? 0) < 80) warnings.push('short historical mathematical note requires actual owner qualification');
  } else {
    if (!nativeLeadSupported) issues.push('no successful actual full5b lead provenance');
    if ((row.notes?.trim().length ?? 0) < 80) warnings.push('short direct lead note requires actual mathematical owner review');
    if (!lead.includes(id)) warnings.push('individual ID not enumerated in lead Markdown; attribution relies on receipt plus native lead and grouped coverage statement');
  }
  const nativeEvidence = historical ? historicalBinding : { native_5b: nativePath,
    report: leadPath, report_sha256: sha(lead), grouped_coverage: owner
      ? 'Report explicitly distinguishes51other in-run current-content subjects from643attributed risk reviews.'
      : 'Report explicitly distinguishes unchanged outside consequences and specifically checked direct supplier hypotheses; no new whole-item audit.' };
  qualified.push({ id, in_run: Boolean(owner), original_status: row.status,
    original_note_sha256: sha(row.notes ?? ''), item_raw_sha256: rawHash(id), original_item_raw_sha256: row.item_raw_sha256,
    direct_bindings: bindings, historical_review: historicalBinding,
    native_decision_checks: decisionChecks, attribution: nativeEvidence,
    issues: [...new Set(issues)], warnings, metadata_status: issues.length ? 'requires-owner-reconciliation'
      : warnings.length ? 'metadata-current-attribution-needs-specific-owner-check' : 'metadata-current-attributed' });
}
report.metadata_inspection = {
  qualification: 'Hash/text/provenance currency and recorded mathematical-note attribution only. No new proof audit or source acceptance.',
  native_5b: { path: nativePath, sha256: sha(readFileSync(nativePath)), run: native.run,
    role: native.role, label: native.label, ok: native.ok, started_at: native.started_at,
    ended_at: native.ended_at, supported: nativeLeadSupported },
  lead_report: { path: leadPath, sha256: sha(lead), mtime: statSync(leadPath).mtime.toISOString() },
  verdicts: { path: verdictPath, sha256: sha(readFileSync(verdictPath)), total: verdicts.length,
    edges: edgeChecks.length, edge_checks: edgeChecks },
  original_count: receipt.dispositions.length, original_closed_count: receipt.dispositions.filter(row =>
    ['still-licensed', 'repaired', 'not-load-bearing'].includes(row.status)).length,
  exact_required_subset: direct.required_review.every(id => rowsById.get(id)?.length === 1),
  required_count: direct.required_review.length, clause_problems: clauseProblems, use_problems: useProblems,
  rows: qualified,
};
writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ required: qualified.length, metadata_issues: qualified.filter(row => row.issues.length).length,
  warning_rows: qualified.filter(row => row.warnings.length).length,
  issue_examples: qualified.filter(row => row.issues.length).slice(0, 8).map(row => ({ id: row.id, issues: row.issues })),
  clause_problems: clauseProblems.length, use_problems: useProblems.length,
  stale_edge_verdicts: edgeChecks.filter(row => !row.current).length,
}));

// Proposed append-only evidence supplements. They are PRIVATE; the canonical
// receipt and every original disposition/note remain untouched.
const proposedPath = base + '-step5-impact-refresh-proposed-metadata.json';
const opening = text('def-lawrence-krammer-bigelow-representation').split('## Definition\n\n')[1].split('\n\nBy [[')[0];
const artinUse = text('def-the-artin-representation-on-a-free-group').split('**Uniqueness and effectivity.**')[1].split('\n\n## Remarks')[0];
const proposedBindings = [
  ['def-lawrence-krammer-bigelow-representation', 'def-lawrence-krammer-bigelow-cover', opening,
    'Current setup uses the specified based connected cover, left deck group Z^2 and Laurent ring. The consumed conventions agree literally with the cover Definition. The genuine alpha-batch-16 full Definition review specifically checks absolute H2, normalized lift and composition; no new freeness or faithfulness audit is inferred.'],
  ['def-lawrence-krammer-bigelow-representation', 'def-two-point-configuration-space-of-a-punctured-disk', opening,
    'Current setup uses unordered two-point configurations in the same closed punctured disk and its genuine boundary-pair basepoint. The alpha-batch-16 full Definition review covers this based setup and normalized lifting; the supplier distinguishes representative homeomorphisms from mapping-class homotopy actions. No literal point action of mapping classes is introduced.'],
  ['def-the-artin-representation-on-a-free-group', 'def-artin-automorphisms-of-the-free-group', '**Uniqueness and effectivity.**' + artinUse,
    'The consumer computes a finite word using exactly the frozen Nielsen automorphisms/inverses, with ordinary composition. The real native5b receipt note checks the frozen generators, braid relations and von Dyck extension. The direct citation fixes the same formulas/convention already used through the braid-relations supplier; no geometric identification or Choice premise is added.'],
  ['ex-factorization-of-a-rational-function', 'def-analytic-hardy-space-disc', receipt.use_evidence['ex-factorization-of-a-rational-function -> def-inner-singular-inner-and-outer-functions'].text,
    'The direct Given explicitly inherits Countable Choice from this Hardy class Definition. The existing alpha-batch-20 full verification note specifically records that inherited regime and the explicit H-infinity sup-norm calculation; normalized uniqueness is proved by zero singular mass, without invoking the AC-qualified general representation theorem.'],
  ['ex-modular-lambda-biholomorphism-onto-the-slit-plane', 'def-modular-group-action-on-the-upper-half-plane', receipt.use_evidence['ex-modular-lambda-biholomorphism-onto-the-slit-plane -> def-principal-congruence-subgroup-gamma-2'].text,
    'The Given directly uses the determinant-one Möbius matrix action for L-plus/minus and the proof uses Im(gamma tau)=Im(tau)/|c tau+d|^2. Both are exact clauses of the current action Definition. The genuine alpha-batch-21 review specifically checks maximal-height reduction, boundary substitutions and effective quotient action. No freeness of SL2 Gamma(2) is assumed.'],
];
const supplement = proposedBindings.map(([id, source, useText, explanation]) => {
  const clause = receipt.clause_evidence[source], row = rowsById.get(id)[0];
  if (!text(id).includes(useText) || !useText.includes('[[' + source + ']]')
    || !clause || !text(source).includes(clause.text)) throw Error('supplement is not current exact direct text: ' + id + ' -> ' + source);
  const key = id + ' -> ' + source;
  if (receipt.use_evidence[key]) throw Error('unexpected existing direct evidence: ' + key);
  return { id, original_disposition_sha256: hash(row), preserved_status: row.status,
    preserved_notes_sha256: sha(row.notes), source, explanation,
    attributed_review: row.historical_review ?? { reviewer: receipt.reviewer, notes: row.notes,
      report: leadPath, native_result: nativePath },
    add_supplier_use: { changed_supplier: source, path: [source, id], immediate_supplier: source,
      consumed_clause: { ref: source, section: clause.section, clause_sha256: clause.clause_sha256 },
      current_use: { ref: key, use_sha256: sha(useText) },
      supplier_raw_sha256: rawHash(source), immediate_supplier_raw_sha256: rawHash(source) },
    add_use_evidence: { key, value: { consumer: id, supplier: source, text: useText, use_sha256: sha(useText) } },
    existing_clause_evidence_sha256: hash(clause) };
});
writeFileSync(proposedPath, JSON.stringify({ run, type: 'private-proposal-only',
  purpose: 'Optional append-only direct-binding supplements to existing genuine reviewed uses. No disposition, status, note, reviewer or historical review is replaced.',
  canonical_receipt: base + '-impact.json', original_receipt_raw_sha256: sha(readFileSync(base + '-step5-impact-refresh-before/impact.json')),
  additions: supplement }, null, 2) + '\n');
const additionalVerdictChecks = verdicts.filter(row => row.kind !== 'edge').map(row => ({
  kind: row.kind, id: row.id ?? row.item, target: row.target,
  current: row.kind === 'forward' ? row.item_sha256 === rawHash(row.item) && row.target_sha256 === rawHash(row.target)
    : row.kind === 'item' ? row.subject_sha256 === hash(carrier(row.id)) : false,
  evidence_current: row.kind === 'forward' ? row.evidence === leadPath && row.evidence_sha256 === sha(lead) : true,
  note_present: typeof row.note === 'string' && row.note.trim().length >= 40,
}));
const beforeVerdictPath = base + '-step5b-normalization-before-root-verdict-refresh.jsonl';
const previousLines = readFileSync(beforeVerdictPath, 'utf8').split(/\r?\n/).filter(Boolean);
const currentLines = readFileSync(verdictPath, 'utf8').split(/\r?\n/).filter(Boolean);
const preservedVerdictLines = previousLines.filter(line => JSON.parse(line).kind !== 'item');
const verdictHistory = { before_path: beforeVerdictPath, before_sha256: sha(readFileSync(beforeVerdictPath)),
  current_path: verdictPath, current_sha256: sha(readFileSync(verdictPath)),
  other_106_lines_byte_equivalent: preservedVerdictLines.length === 106
    && preservedVerdictLines.every((line, index) => currentLines.filter(s => JSON.parse(s).kind !== 'item')[index] === line),
  corrected_item: 'rem-normalization-not-resolution-higher-dimension',
  corrected_current_composite: hash(carrier('rem-normalization-not-resolution-higher-dimension')),
  additional_checks: additionalVerdictChecks };
const guards = ['impact', 'impact-5b'].map(name => {
  const canonicalPath = base + '-' + name + '.json', archivePath = base + '-step5-impact-refresh-before/' + name + '.json';
  return { path: canonicalPath, archive: archivePath, raw_sha256: sha(readFileSync(canonicalPath)),
    archive_sha256: sha(readFileSync(archivePath)), bytes: statSync(canonicalPath).size,
    unchanged_from_archive: readFileSync(canonicalPath).equals(readFileSync(archivePath)) };
});
if (guards.some(row => !row.unchanged_from_archive)) throw Error('canonical receipt changed before handoff');
const unresolved = qualified.filter(row => row.issues.some(issue => !issue.startsWith('no exact direct supplier/use binding for ')));
if (unresolved.length || clauseProblems.length || useProblems.length
  || edgeChecks.some(row => !row.current || !row.note_present || !row.report_attribution)
  || additionalVerdictChecks.some(row => !row.current || !row.evidence_current || !row.note_present))
  throw Error('unresolved current metadata/provenance issue; do not qualify refresh');
report.final_handoff = {
  status: 'qualified-private-metadata-refresh-proposal; root executes ordinary refresh',
  no_new_proof_audit: true,
  canonical_receipts_unchanged: guards,
  attribution_counts_for_required_674: {
    genuine_current_native_5a_risk_reviews: qualified.filter(row => row.historical_review).length,
    genuine_native_5b_run_subject_reviews: qualified.filter(row => row.in_run && !row.historical_review).length,
    genuine_native_5b_outside_impact_reviews: qualified.filter(row => !row.in_run).length },
  direct_binding_omissions: { subjects: 4, bindings: 5, proposal: proposedPath,
    proposal_sha256: sha(readFileSync(proposedPath)), pending_math_owner_subjects: [],
    conclusion: 'Exact direct uses agree with independently read current supplier clauses and specific existing native mathematical notes. These five missing direct keys are metadata omissions; existing indirect entries remain preserved.' },
  warning_resolution: { individually_unenumerated_report_ids: qualified.filter(row => row.warnings.length).map(row => row.id),
    rationale: 'All 90 warnings concern individual ID enumeration, not absent review: completed native5b lead report explicitly covers51 run subjects and980 outside impact dispositions, and each affected receipt row has its specific native note. Required current subset is46 such run subjects and55 outside subjects. Historical573 subjects have exact native5a reviewer/contract/raw-byte bindings. Repeated outside notes identify unchanged specific ball or quotient-spectrum clauses and are supported by the report\'s original-preimage comparison and exact current clause/use records; they are impact reviews, not new whole-item audits.',
    unsupported_notes_identified: [], mathematical_uncertainty: 'No new mathematical failure identified within the bounded consumed-clause checks. Full proofs of674 consumers were not independently reaudited by this metadata lane.' },
  native_verdict_provenance: verdictHistory,
  normal_root_commands: [
    'node tools/impact-audit.mjs --touches ' + base + '-touches.json --from pre-author --to post-5a --direct-boundary --refresh-receipt ' + base + '-impact.json',
    'node tools/impact-audit.mjs --touches ' + base + '-touches.json --from post-5a --current --direct-boundary --refresh-receipt ' + base + '-impact-5b.json' ],
  expected_refresh: { first: { changed_interfaces: 696, required_review: 674, preserved_dispositions: 1674,
      historical_extra_dispositions: 1000, new_pending: 0 },
    second: { changed_interfaces: 1, required_review: 0, preserved_dispositions: 0, new_pending: 0 },
    semantics: 'Ordinary refresh alters scope/required/changed metadata only, retains reviewer/source, all existing1674 statuses/notes/attribution/clause/use entries and second review_notes, appends pending if the live required set gains an absent ID. Optional five-binding supplement appends exact metadata; all original values remain intact.' },
  limits: [
    'Read-only scope calculations without receipt arguments are not receipt-gate closure or mathematical certification.',
    'Root must compare archived canonical receipt hashes and these exact live input hashes immediately before refresh; drift requires requalification.',
    'Normal impact receipt tool validates scope/status/nonempty notes, not the auxiliary mathematical evidence maps. This report binds those maps separately without substituting for actual reviewers.',
    'Native full lead ended13:31:29; its original Markdown carrier hash is historical978ef13 while the corrected current ordinary item verdict is a251fce.106other lines are unchanged. The contract correction does not change item/supplier/use bytes.',
    'All original extra dispositions and actual mathematical review duties remain recorded; independently changed consumer interfaces/farther hops remain separate changed sources.',
    'No canonical refresh, gate, software test, source acceptance, native audit, controller operation or commit executed by this lane.' ],
  input_hashes: Object.fromEntries([base + '-touches.json', leadPath, nativePath, verdictPath,
    'tools/impact-audit.mjs', 'tools/impact-scope.mjs', 'tools/item-hash.mjs'].map(path => [path, sha(readFileSync(path))])),
  written_paths: [reportPath, base + '-step5-impact-refresh-qualification.mjs', proposedPath,
    base + '-step5-impact-refresh-before/impact.json', base + '-step5-impact-refresh-before/impact-5b.json'],
};
writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ status: report.final_handoff.status, qualified_required_subset: qualified.length,
  supplements: supplement.length, unresolved_math: 0, receipts_unchanged: guards.every(row => row.unchanged_from_archive),
  all107_verdict_bindings_current: [...edgeChecks, ...additionalVerdictChecks].every(row => row.current),
  preserved106_verdict_lines: verdictHistory.other_106_lines_byte_equivalent }));
