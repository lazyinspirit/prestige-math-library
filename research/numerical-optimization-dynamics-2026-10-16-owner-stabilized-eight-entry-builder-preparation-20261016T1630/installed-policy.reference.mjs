// Continuity of genuine native acceptance across authenticated review metadata.
// This policy supplies no review, origin certification, ledger or gate waiver.
import { readFileSync, existsSync, lstatSync } from 'node:fs';
import { resolve, join, isAbsolute, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { splitFrontmatter, sectionText, numberedProofSteps } from './facts-block.mjs';
import { yaml } from './pathway-lib.mjs';
import { loadAuditorCreatedCertifications } from './auditor-created-items.mjs';

export const STABILIZED_ACCEPTANCE_POLICY = 'step3-stabilized-source-identical-acceptance-continuity-v1';
export const OWNER_REPAIR_EVIDENCE_FREEZE_POLICY = 'step3-owner-repair-evidence-freeze-v1';
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const sha = x => createHash('sha256').update(x).digest('hex');
const hash = x => sha(JSON.stringify(canonical(x)) ?? 'undefined');
const same = (a, b) => hash(a) === hash(b);
const norm = x => String(x ?? '').replace(/\s+/g, ' ').trim();
const assert = (ok, message) => { if (!ok) throw Error(message); };
const readJSON = path => JSON.parse(readFileSync(path, 'utf8'));
const researchPath = (root, run, path) => {
  assert(typeof path === 'string' && !isAbsolute(path) && !path.includes('\\')
    && !path.split('/').some(part => part === '..' || part === '.' || part === '')
    && path.startsWith(`research/${run}-`), 'Expected plain own-run research evidence path');
  const absolute = resolve(root, path);
  for (let component = absolute; ; component = dirname(component)) {
    const stat = lstatSync(component);
    assert(!stat.isSymbolicLink() && (component === absolute ? stat.isFile() : stat.isDirectory()),
      'Evidence must use existing regular files/directories without any symlink component');
    if (dirname(component) === component) break;
  }
  return absolute;
};
const textRef = (root, run, ref) => {
  assert(/^[a-f0-9]{64}$/.test(ref?.sha256 ?? ''), 'Missing evidence raw hash');
  const bytes = readFileSync(researchPath(root, run, ref.path));
  assert(sha(bytes) === ref.sha256, 'Changed evidence: ' + ref.path);
  return bytes.toString('utf8');
};
const jsonRef = (root, run, ref) => JSON.parse(textRef(root, run, ref));
const successful = (result, run, batch) => result.run === run && result.role === 'alpha'
  && result.label === `3a-batch-${batch}` && Number.isInteger(result.attempt) && result.attempt >= 1
  && result.evidence_tag === `.attempt-${result.attempt}` && result.ok === true
  && result.exit_code === 0 && result.process_exit_code === 0 && result.timed_out !== true
  && result.covers?.map(String).includes(String(batch)) && result.terminal_summary?.task_completed === true
  && result.terminal_summary?.task_aborted === false && result.terminal_summary?.final_response_present === true
  && typeof result.session_id === 'string' && result.session_id.length > 0
  && Number.isFinite(Date.parse(result.started_at)) && Number.isFinite(Date.parse(result.ended_at))
  && Date.parse(result.ended_at) >= Date.parse(result.started_at);
function currentEntry(root, run, batch, id) {
  const manifest = readJSON(join(root, 'research', `${run}-batch-${batch}.pages.json`));
  const rows = (Array.isArray(manifest) ? manifest : manifest.pages ?? []).flatMap(page =>
    (page.items ?? []).filter(row => row?.id === id).map(row => ({ ...row, __step4_page_id: page.id })));
  assert(rows.length === 1, 'Expected unique current manifest row');
  const file = join(root, 'research', `${run}-batch-${batch}.proof-contracts.json`);
  return { row: rows[0], contract: readJSON(file).contracts?.[id], file };
}
function acceptedDocument(root, run, reference, obligation, id, decisionHash) {
  const doc = jsonRef(root, run, reference);
  assert(doc.run === run && Array.isArray(doc.decisions), 'Acceptance archive lacks explicit run');
  const matches = doc.decisions.filter(row => row.obligation === obligation && row.id === id);
  assert(matches.length === 1 && hash(matches[0]) === decisionHash, 'Acceptance archive decision differs');
  // Root-derived missing-run wrapper must retain exact authentic native object.
  if (doc.owner_archive_provenance) {
    const provenance = doc.owner_archive_provenance;
    assert(provenance.root_derived === true && typeof provenance.reason_missing_run_context === 'string'
      && provenance.reason_missing_run_context.length >= 80, 'Invalid ROOT-derived archive provenance');
    const original = jsonRef(root, run, provenance.original_document);
    assert(original.version === 1 && !Object.hasOwn(original, 'run') && original.group === provenance.original_group
      && original.decisions?.some(row => hash(row) === decisionHash), 'Wrapper does not retain actual original decision');
  }
  return matches[0];
}
function nativeReview(root, run, batch, id, evidence, verdicts, proofRequired = true) {
  assert(evidence?.result?.path === `research/${run}-dispatch/alpha-3a-batch-${batch}.result.json`
    && evidence.report?.path === `research/${run}-alpha-batch-${batch}-3a.md`
    && evidence.assignment?.path === `research/${run}-alpha-batch-${batch}-3a-order.task.md`, 'Wrong current native review paths');
  const stableText = textRef(root, run, evidence.result), result = JSON.parse(stableText);
  assert(successful(result, run, batch), 'Native stable result is not genuine complete success');
  assert(evidence.immutable_result?.path === `research/${run}-dispatch/alpha-3a-batch-${batch}${result.evidence_tag}.result.json`
    && textRef(root, run, evidence.immutable_result) === stableText
    && readFileSync(researchPath(root, run, evidence.immutable_result.path)).equals(
      readFileSync(researchPath(root, run, evidence.result.path))), 'Stable alias differs from actual immutable attempt result');
  const report = textRef(root, run, evidence.report);
  const assignment = textRef(root, run, evidence.assignment);
  assert(successful(result, run, batch) && assignment.includes(id), 'Native review not genuine complete coverage');
  const decision = acceptedDocument(root, run, evidence.decisions, evidence.obligation, id, evidence.decision_sha256);
  assert(verdicts.includes(decision.verdict) && decision.repair_confidence === 1, 'Wrong native review verdict/confidence');
  const liveDoc = readJSON(join(root, 'research', `${run}-alpha-batch-${batch}-3a-decisions.json`));
  assert((!Object.hasOwn(liveDoc, 'run') || liveDoc.run === run) && liveDoc.group === `batch-${batch}`
    && liveDoc.decisions?.filter(row => row.obligation === decision.obligation && row.id === id).length === 1, 'Wrong current native decision identity');
  const live = liveDoc.decisions.find(row => row.obligation === decision.obligation && row.id === id);
  // A later mechanical stamp changes only subject_sha256. Preserve all review fields.
  const withoutStamp = ({ subject_sha256: _stamp, ...row }) => row;
  assert(same(withoutStamp(live), withoutStamp(decision)), 'Native accepted decision changed beyond stamp');
  const witness = jsonRef(root, run, evidence.full_proof_review);
  assert(witness.version === 1 && witness.run === run && witness.id === id && witness.obligation === decision.obligation
    && witness.session_id === result.session_id && witness.accepted_decision_sha256 === hash(decision)
    && same(witness.native_result, evidence.result) && same(witness.native_report, evidence.report)
    && witness.mathematical_acceptance_source === 'actual-native-review'
    && witness.root_binding_only === true && typeof witness.report_excerpt === 'string'
    && witness.report_excerpt.trim().length >= 80 && report.includes(witness.report_excerpt), 'Missing genuine specific full-proof review binding');
  const source = readFileSync(join(root, 'items', id + '.md'), 'utf8');
  const parsed = splitFrontmatter(source), sourceMeta = yaml().parse(parsed.fm) ?? {};
  const proof = numberedProofSteps(parsed.body).map(({ id, claim }) => ({ id, claim }));
  assert(witness.source_raw_sha256 === sha(source) && same(witness.proof_steps ?? [], proof), 'Proof identity in actual review witness is stale');
  if (proofRequired) assert(proof.length > 0, 'Actual full proof acceptance is required');
  else if (!proof.length) assert(['algorithm', 'definition'].includes(sourceMeta.kind)
    && witness.interface_section === 'Definition' && sectionText(parsed.body, 'Definition')
    && norm(witness.interface_text) === norm(sectionText(parsed.body, 'Definition')), 'Actual complete supplier Definition review is required');
  return { result, decision, witness };
}
function reviewPreserved(oldEntry, current) {
  const before = oldEntry.risk_review, after = current.risk_review;
  if (!before || !after || after.status !== 'complete' || !String(after.notes ?? '').trim()) return false;
  const previousHistory = oldEntry.risk_review_history ?? [], history = current.risk_review_history ?? [];
  if (!Array.isArray(previousHistory) || !Array.isArray(history)
    || !previousHistory.every((row, i) => same(row, history[i]))) return false;
  const { notes: oldNotes, ...oldFields } = before, { notes: newNotes, ...newFields } = after;
  return same(before, after) || same(after.prior_review, before) || history.some(row => same(row, before))
    || same(oldFields, newFields) && typeof oldNotes === 'string' && typeof newNotes === 'string' && newNotes.startsWith(oldNotes);
}
function addedHelper(root, run, decision, target, before, evidence, reviewer) {
  assert(evidence, 'Added helper requires actual creator and independent review evidence');
  const reader = jsonRef(root, run, evidence.reader_post);
  assert(evidence.reader_post.path === `research/${run}-step3-hash-${target.batch}-post.json`
    && reader.version === 2 && reader.run === run && String(reader.batch) === target.batch && reader.label === 'post'
    && !reader.manifest?.includes(target.id) && !Object.hasOwn(reader.hashes ?? {}, target.id), 'Helper existed in immutable reader post');
  const creator = jsonRef(root, run, evidence.creator_result);
  assert(evidence.creator_result.path === `research/${run}-dispatch/alpha-3a-batch-${target.batch}.attempt-${creator.attempt}.result.json`
    && successful(creator, run, target.batch) && creator.session_id !== reviewer.result.session_id
    && Date.parse(creator.ended_at) < Date.parse(reviewer.result.started_at), 'Creator and later independent reviewer are not distinct genuine executions');
  const birth = jsonRef(root, run, evidence.birth_observations);
  const observation = birth.observations?.find(row => row.path === `items/${target.id}.md`);
  assert(birth.run === run && birth.observed_by === 'root' && birth.actual_creator?.attempt === creator.attempt
    && birth.actual_creator?.label === creator.label && birth.actual_creator?.ended_at === creator.ended_at
    && observation?.raw_sha256 === before.item_sha256 && observation.archive === evidence.creator_source.path
    && sha(textRef(root, run, evidence.creator_source)) === before.item_sha256, 'Actual creator/birth source does not match stabilized helper');
  const birthReport = birth.observations?.find(row => row.path === `research/${run}-alpha-batch-${target.batch}-3a.md`);
  const birthDecisions = birth.observations?.find(row => row.path === `research/${run}-alpha-batch-${target.batch}-3a-decisions.json`);
  const birthResult = birth.observations?.find(row => row.path === evidence.creator_result.path);
  assert(birthReport?.archive === evidence.creator_report?.path && birthReport.raw_sha256 === evidence.creator_report.sha256
    && birthDecisions?.archive === evidence.creator_decisions?.path && birthDecisions.raw_sha256 === evidence.creator_decisions.sha256
    && birthResult?.raw_sha256 === evidence.creator_result.sha256, 'Creator evidence differs from actual preserved birth observations');
  textRef(root, run, evidence.creator_report);
  const creatorDecisions = jsonRef(root, run, evidence.creator_decisions);
  assert((!Object.hasOwn(creatorDecisions, 'run') || creatorDecisions.run === run)
    && creatorDecisions.group === `batch-${target.batch}`, 'Wrong creator decisions archive');
  // The genuine creator may not yet have a post-reader decision for its own new
  // item; preserve its document without fabricating an independent verdict.
  assert(typeof decision.causal_subject === 'string' && decision.same_defect_as
    && Array.isArray(decision.defect_ids) && decision.defect_ids.length, 'Missing real added-helper causal repair identity');
  const certification = evidence.creation_certification;
  assert(certification?.path === `research/${run}-step3-auditor-certifications.json`, 'Wrong actual native creation certification path');
  if (Object.hasOwn(certification, 'required_current_native_certification')) {
    assert(certification.required_current_native_certification === true
      && Object.keys(certification).every(key => ['path', 'required_current_native_certification'].includes(key)),
      'Invalid deferred native certification requirement');
    // Native certification is produced by the actual first gate, never by this entry.
    researchPath(root, run, certification.path);
  } else jsonRef(root, run, certification);
  const certificates = loadAuditorCreatedCertifications(join(root, 'research', `${run}-step3-auditor-certifications.json`), { root, run, steps: [3] });
  assert(certificates.some(row => row.id === target.id && String(row.batch) === target.batch), 'Actual current native creation certification remains owed');
}

export function stabilizedSourceIdenticalAcceptanceContinuity(root, run, decision, target, before, current, entry) {
  if (!entry || entry.version !== 1 || entry.policy !== STABILIZED_ACCEPTANCE_POLICY || entry.run !== run
    || entry.id !== decision?.id || entry.obligation !== decision?.obligation) return false;
  try {
    const registry = readJSON(join(root, 'research', `${run}-step3-owner-repair-evidence.json`));
    assert(registry.version === 1 && registry.run === run
      && registry.stabilized_source_identical_acceptance_continuities?.some(row => same(row, entry)), 'Entry is not in actual canonical owner evidence');
    assert(decision.verdict === 'accepted_repair' && decision.repair_confidence === 1 && target?.stabilized === true
      && decision.id === target.id && typeof target.batch === 'string' && /^[1-9]\d*$/.test(target.batch)
      && target.route === 'touched' && !target.direct && typeof target.added === 'boolean'
      && target.obligation === `post-reader:${target.batch}:${target.id}` && entry.independent_execution_coverage_adopted === false,
    'Not exact stabilized native acceptance');
    assert(before?.item_sha256 && current?.item_sha256 === before.item_sha256
      && current.manifest_sha256 === before.manifest_sha256 && entry.target_sha256 === hash(target)
      && entry.stabilized_input_carrier_sha256 === hash(before) && entry.current_carrier_sha256 === hash(current), 'Carrier continuity differs');
    assert(entry.stabilized_input_snapshot?.path === `research/${run}-step3-hash-${target.batch}-pre-3a.json`, 'Wrong stabilized snapshot path');
    const snap = jsonRef(root, run, entry.stabilized_input_snapshot);
    assert(snap.version === 2 && snap.run === run && String(snap.batch) === target.batch && snap.label === 'pre-3a'
      && snap.manifest?.includes(target.id) && same(snap.hashes?.[target.id], before), 'Invalid stabilized input carrier');
    const readerPath = `research/${run}-step3-hash-${target.batch}-post.json`;
    const reader = readJSON(join(root, readerPath));
    const scope = readJSON(join(root, 'research', `${run}-step3-scope-${target.batch}.json`));
    const wasAdded = !(reader.manifest ?? []).includes(target.id);
    assert(reader.version === 2 && reader.run === run && String(reader.batch) === target.batch && reader.label === 'post'
      && scope.version === 2 && scope.run === run && String(scope.batch) === target.batch
      && !(scope.touched ?? []).includes(target.id) && !(scope.pages_touched ?? []).includes(target.id)
      && !same(reader.hashes?.[target.id], snap.hashes?.[target.id])
      && same(target, { obligation: `post-reader:${target.batch}:${target.id}`, id: target.id, batch: target.batch,
        stabilized: true, added: wasAdded, route: 'touched' }), 'Not actual native stabilized item obligation');
    const source = readFileSync(join(root, 'items', target.id + '.md'), 'utf8');
    assert(sha(source) === before.item_sha256, 'Source changed since actual accepted stabilized input');
    const { fm, body } = splitFrontmatter(source), meta = yaml().parse(fm) ?? {};
    const owned = currentEntry(root, run, target.batch, target.id);
    assert(owned.contract && hash(owned.contract) === current.contract_sha256 && hash(owned.row) === current.manifest_sha256
      && same(owned.row.deps ?? [], meta.deps ?? []), 'Actual current logical carrier differs');
    // Exact immutable manifest equality above preserves its valid original
    // compact summary; no unknown manifest delta or optional mirror expansion.
    const original = jsonRef(root, run, entry.input_contract_preimage).contracts?.[target.id];
    assert(original && hash(original) === before.contract_sha256, 'Original review/contract preimage is unauthenticated');
    const reviewFields = entry.allowed_review_fields;
    assert(Array.isArray(reviewFields) && new Set(reviewFields).size === reviewFields.length
      && reviewFields.every(field => ['risk_review', 'risk_review_history'].includes(field)), 'Arbitrary contract projection forbidden');
    const oldProjection = structuredClone(original), newProjection = structuredClone(owned.contract);
    for (const field of reviewFields) { delete oldProjection[field]; delete newProjection[field]; }
    assert(reviewPreserved(original, owned.contract), 'Actual prior review/history was not retained');
    const reviewer = nativeReview(root, run, target.batch, target.id, entry.native_review, ['accepted_repair']);
    assert(reviewer.decision.obligation === decision.obligation
      && same((({subject_sha256: _, ...d}) => d)(reviewer.decision), (({subject_sha256: _, ...d}) => d)(decision)), 'Wrong existing native acceptance');
    assert(Array.isArray(entry.supplier_quote_refreshes), 'Missing explicit quote refresh list');
    const pairs = new Set();
    for (const refresh of entry.supplier_quote_refreshes) {
      const key = JSON.stringify([refresh.fact, refresh.source, refresh.source_section]);
      assert(!pairs.has(key) && (meta.deps ?? []).includes(refresh.source), 'Duplicate or nonlogical supplier quote'); pairs.add(key);
      const matches = list => (list ?? []).map((citation, index) => ({ citation, index })).filter(({citation}) =>
        citation.fact === refresh.fact && citation.source === refresh.source && citation.source_section === refresh.source_section);
      const a = matches(oldProjection.citations), b = matches(newProjection.citations);
      assert(a.length === 1 && b.length === 1 && a[0].index === b[0].index, 'Citation pair changed or is ambiguous');
      const supplierText = readFileSync(join(root, 'items', refresh.source + '.md'), 'utf8');
      assert(textRef(root, run, refresh.supplier_source) === supplierText
        && sectionText(splitFrontmatter(supplierText).body, refresh.source_section)
        && norm(b[0].citation.quote) === norm(sectionText(splitFrontmatter(supplierText).body, refresh.source_section)), 'Not whole actual current supplier section');
      currentEntry(root, run, String(refresh.producer_batch), refresh.source);
      const supplierReview = nativeReview(root, run, String(refresh.producer_batch), refresh.source, refresh.native_review, ['accepted_repair', 'amended_repair'], false);
      assert(supplierReview.result.session_id === reviewer.result.session_id, 'Consumer reviewer did not own this actual supplier acceptance');
      delete a[0].citation.quote; delete b[0].citation.quote;
    }
    assert(same(oldProjection, newProjection), 'Unlisted mathematical or metadata contract change');
    if (target.added) addedHelper(root, run, decision, target, before, entry.added_helper_review, reviewer);
    else assert(entry.added_helper_review == null, 'Unexpected added origin evidence');
    const check = spawnSync(process.execPath, [join(root, 'tools', 'proof-contract.mjs'), owned.file,
      '--strict', '--items', target.id, '--json'], { cwd: root, encoding: 'utf8', timeout: 120000, maxBuffer: 8 * 1024 * 1024 });
    assert(check.status === 0 && !check.error, 'Actual strict contract validation failed');
    const result = JSON.parse(check.stdout);
    return result.ok === true && same(result.checked, [target.id]);
  } catch { return false; }
}

// Explicit opt-in close/verify freeze. This checks reference bytes only; it
// neither validates other policy semantics nor manufactures any review.
export function ownerRepairEvidenceClosure(root, run, { required = false } = {}) {
  const path = `research/${run}-step3-owner-repair-evidence.json`;
  if (!existsSync(join(root, path))) { assert(!required, 'Missing frozen owner repair evidence'); return {}; }
  const raw = readFileSync(researchPath(root, run, path)), doc = JSON.parse(raw.toString('utf8')); 
  assert(doc.version === 1 && doc.run === run, 'Invalid owner evidence registry');
  const out = { [path]: sha(raw) }, seen = new Set([path]);
  const visit = object => {
    if (Array.isArray(object)) { for (const child of object) visit(child); return; }
    if (!object || typeof object !== 'object') return;
    const references = [];
    if (Object.hasOwn(object, 'required_current_native_certification')) {
      assert(object.required_current_native_certification === true
        && object.path === `research/${run}-step3-auditor-certifications.json`
        && Object.keys(object).every(key => ['path', 'required_current_native_certification'].includes(key)),
        'Invalid required native certification artifact');
      // Close runs after the passed native gate; absence here must fail.
      const bytes = readFileSync(researchPath(root, run, object.path));
      references.push({ path: object.path, digest: sha(bytes) });
    }
    if (object.path && (object.sha256 !== undefined || object.raw_sha256 !== undefined)) {
      assert(object.sha256 === undefined || object.raw_sha256 === undefined || object.sha256 === object.raw_sha256, 'Conflicting evidence hashes');
      references.push({ path: object.path, digest: object.sha256 ?? object.raw_sha256 });
    }
    // Native birth observations bind their historical archive with raw_sha256.
    if (object.archive && object.raw_sha256 !== undefined) references.push({ path: object.archive, digest: object.raw_sha256 });
    for (const reference of references) if (typeof reference.path === 'string' && reference.path.startsWith(`research/${run}-`)) {
      const { path, digest } = reference;
      assert(/^[a-f0-9]{64}$/.test(digest), 'Invalid own-run evidence digest');
      const bytes = readFileSync(researchPath(root, run, path));
      assert(sha(bytes) === digest && (out[path] === undefined || out[path] === digest), 'Changed or conflicting frozen evidence');
      out[path] = digest;
      if (!seen.has(path)) {
        seen.add(path);
        if (path.endsWith('.json')) visit(JSON.parse(bytes.toString('utf8')));
      }
    }
    for (const child of Object.values(object)) visit(child);
  };
  visit(doc);
  return out;
}
