// One explicitly referred draft-page prose correction at the initial drained
// join. This authenticates native authority; it never edits sources or state.
import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { frontmatterList } from './frontmatter-list.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';
import { reviewCorrectionLedgerAppend } from './step5-owner-review-correction.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const digest = value => hash(JSON.stringify(value));
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const need = (ok, why) => { if (!ok) throw Error('owner page correction: ' + why); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const explanation = value => typeof value === 'string' && value.trim().length >= 40;
const evidenceRow = row => row && explanation(row.reason) && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url => typeof url === 'string' && /^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const fm = text => /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[0];
const scalar = (text, field) => new RegExp('^' + field + ':\\s*["\']?([A-Za-z0-9_-]+)["\']?\\s*$', 'm').exec(fm(text) ?? '')?.[1];
const workflow = (root, run) => join(root, 'research', run + '-step5-v2');
export const pageCorrectionPhase = 'page-correction-initial';
export const pageCorrectionProgressPath = (root, run, round) => join(workflow(root, run), pageCorrectionPhase + '-' + round + '-progress.json');
const label = round => 'step5-v2-' + pageCorrectionPhase + '-r' + round + '-u1';
const artifact = (root, run, round, suffix) => join(workflow(root, run), label(round) + suffix);

function files(root, directory) {
  const result = [];
  const visit = path => {
    if (!existsSync(path)) return;
    for (const entry of readdirSync(path, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const child = join(path, entry.name);
      need(!entry.isSymbolicLink(), 'source symlink is not a regular carrier: ' + relative(root, child));
      if (entry.isDirectory()) visit(child);
      else if (entry.isFile() && entry.name.endsWith('.md')) result.push(relative(root, child));
    }
  };
  visit(join(root, directory)); return result;
}
export function pageCorrectionSources(root) {
  return Object.fromEntries([...files(root, 'items'), ...files(root, 'library')].sort()
    .map(path => [path, hash(readFileSync(join(root, path)))]));
}
export function pageCorrectionProtected(root, run) {
  const dir = workflow(root, run), paths = readdirSync(dir)
    .filter(name => !name.startsWith(pageCorrectionPhase + '-') && !name.startsWith('step5-v2-' + pageCorrectionPhase + '-')
      && (name.endsWith('.json') || name.endsWith('.task.md'))).map(name => join(dir, name));
  for (const name of readdirSync(join(root, 'research'))) if (name.startsWith(run + '-batch-')
    && /^[1-9][0-9]*\.(?:pages|proof-contracts)\.json$/.test(name.slice((run + '-batch-').length)))
    paths.push(join(root, 'research', name));
  for (const name of ['defect-ledger.jsonl', run + '-judge.jsonl', run + '-adjudications.jsonl']) {
    const path = join(root, 'research', name); if (existsSync(path)) paths.push(path);
  }
  return Object.fromEntries(paths.sort().map(path => [relative(root, path), hash(readFileSync(path))]));
}
function binding(root, run, evidence) {
  const research = realpathSync(join(root, 'research'));
  return ref => {
    need(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256), 'invalid run-local evidence reference');
    const path = resolve(root, ref.path), rel = relative(research, realpathSync(path));
    need(!isAbsolute(rel) && !rel.startsWith('..') && rel.startsWith(run + '-'), 'evidence escapes run-local research');
    need(hash(readFileSync(path)) === ref.sha256, 'bound evidence changed: ' + ref.path);
    evidence[path] = ref.sha256; return path;
  };
}
function retained(root, path, bound) {
  return bound({ path: relative(root, path), sha256: hash(readFileSync(path)) });
}
export function assertPageCorrectionStage(root, run, round) {
  const state = read(join(root, '.physics-autopilot', run, 'state.json'));
  need(state.run === run && state.stage === '5.1-adjudicate' && !state.finishedAt
    && !state.stages?.['5.1-adjudicate']?.doneAt, 'outside the live initial pre-collection stage');
  need(state.dispatches && typeof state.dispatches === 'object' && !Array.isArray(state.dispatches)
    && Object.values(state.dispatches).every(row => row && (!row.startedAt || row.endedAt)), 'native writers have not drained');
  need(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared metadata writer active');
  const dir = workflow(root, run);
  need(!existsSync(join(dir, 'initial-' + round + '-collected.json'))
    && !existsSync(join(dir, 'certification-impact-initial-' + round + '.json')), 'parent collection or certification is immutable');
  if (existsSync(join(dir, 'certification.json'))) {
    const cert = read(join(dir, 'certification.json'));
    need(cert.phase !== 'impact-initial' || cert.round !== round, 'initial round is already certified');
  }
}

function pageOwnership(root, run, request, bound) {
  const { subject, page_path: path, batch } = request;
  need(typeof subject === 'string' && /^[a-z0-9][a-z0-9-]*$/.test(subject)
    && typeof batch === 'string' && /^[1-9][0-9]*$/.test(batch), 'invalid page identity or batch');
  need(!existsSync(join(root, 'items', subject + '.md')), 'page subject collides with an item identity');
  const manifests = readdirSync(join(root, 'research')).filter(name => name.startsWith(run + '-batch-')
    && /^[1-9][0-9]*\.pages\.json$/.test(name.slice((run + '-batch-').length)));
  const matches = [];
  for (const name of manifests) {
    const data = read(join(root, 'research', name)), pages = Array.isArray(data) ? data : data.pages;
    need(Array.isArray(pages), 'invalid current run manifest');
    for (const page of pages) if (page.id === subject) matches.push({ page, name });
  }
  need(matches.length === 1 && matches[0].name === run + '-batch-' + batch + '.pages.json', 'page has no unique current-run batch owner');
  const page = matches[0].page;
  need(typeof page.category === 'string' && /^[a-z0-9-]+$/.test(page.category)
    && path === 'library/' + page.category + '/' + subject + '.md', 'page path differs from its exact manifest owner');
  retained(root, join(root, 'research', matches[0].name), bound);
  const carriers = files(root, 'library').filter(file => scalar(readFileSync(join(root, file), 'utf8'), 'page') === subject);
  need(equal(carriers, [path]), 'page has no unique regular canonical carrier');
  const text = readFileSync(join(root, path), 'utf8');
  need(scalar(text, 'status') === 'draft' && scalar(text, 'library') === 'physics', 'page is not a native draft physics carrier');
  const imports = join(root, 'research', 'math-imports.json');
  if (existsSync(imports)) need(!read(imports).files?.some(row => row.path === path), 'imported page is read-only');
  const frontierPath = join(workflow(root, run), 'frontier.json'), frontier = read(frontierPath); validateFrontier(frontier);
  need(frontier.run === run, 'wrong original frontier'); retained(root, frontierPath, bound);
  const members = (page.items ?? []).map(row => typeof row === 'string' ? row : row.id);
  const owned = frontier.batches.find(row => row.id === batch)?.items ?? [];
  need(members.length > 0 && new Set(members).size === members.length && members.every(id => owned.includes(id)), 'page members are outside their frozen original batch');
  const inventory = [...frontmatterList(text, 'items'), ...frontmatterList(text, 'examples')];
  need(inventory.length === members.length && equal([...inventory].sort(), [...members].sort()), 'page inventory differs from its manifest');
  return { text, members };
}

export function pageCorrectionRequest(root, run, phase, round, { continuation = false } = {}) {
  if (phase !== 'initial') return null;
  root = resolve(root);
  const dir = workflow(root, run), pointerPath = join(dir, 'owner-page-correction-request.json');
  if (!existsSync(pointerPath)) return null;
  const pointer = read(pointerPath), evidence = {}, bound = binding(root, run, evidence);
  need(pointer.version === 1 && pointer.run === run && (!pointer.state_dir || pointer.state_dir === '.physics-autopilot/' + run), 'invalid root advertisement');
  const requestPath = bound(pointer.request), request = read(requestPath);
  need(dirname(requestPath) === dir && /^owner-page-correction-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
    && requestPath !== pointerPath, 'request is not immutable workflow evidence');
  need(request.version === 1 && request.run === run && request.reviewer === '/root'
    && request.phase === 'initial' && request.round === round && round === 1,
    'invalid explicit root page request');
  assertPageCorrectionStage(root, run, round);
  const ownership = pageOwnership(root, run, request, bound);
  const records = read(bound(request.root_finding?.record)), record = Array.isArray(records) && records.length === 1 ? records[0] : records;
  need(record?.run === run && record.subject === request.subject && record.defect_id === request.root_finding?.defect_id
    && record.disposition === 'open' && record.caught_by_role === 'owner', 'not an OPEN canonical owner page finding');
  const ledger = readFileSync(join(root, 'research', 'defect-ledger.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
  const rows = ledger.filter(row => row.defect_id === record.defect_id);
  need(rows.length === 1 && equal(rows[0], record) && !ledger.some(row => Array.isArray(row.supersedes)
    ? row.supersedes.includes(record.defect_id) : row.supersedes === record.defect_id), 'page finding absent, duplicated, changed or superseded');
  const beforePath = bound(request.before_source), before = readFileSync(beforePath, 'utf8');
  need(sha(request.before_raw_sha256) && hash(readFileSync(beforePath)) === request.before_raw_sha256
    && scalar(before, 'page') === request.subject && fm(before) === fm(ownership.text), 'invalid genuine page before guard');
  if (!continuation) need(readFileSync(join(root, request.page_path)).equals(readFileSync(beforePath)), 'current page drifted from its genuine before bytes');
  const originalPath = bound(request.native_outcome), report = read(originalPath), originalLabel = 'step5-v2-initial-r' + round + '-u' + request.batch;
  need(originalPath === join(dir, originalLabel + '.json') && report.run === run && report.phase === 'initial'
    && report.round === round && String(report.unit) === request.batch, 'wrong original native page referral');
  const originalPackPath = retained(root, join(dir, 'initial-' + round + '.json'), bound), originalPack = read(originalPackPath);
  need(originalPack.version === 2 && originalPack.run === run && originalPack.phase === 'initial'
    && originalPack.round === round && originalPack.repair_scope === 'frontier'
    && Array.isArray(originalPack.assignments?.[request.batch])
    && originalPack.assignments[request.batch].some(tuple => ownership.members.includes(tuple.id))
    && report.input_sha256 === digest(originalPack), 'page referral does not belong to its original frozen native assignment');
  const task = retained(root, join(dir, originalLabel + '.task.md'), bound);
  need(readFileSync(task, 'utf8').includes(originalPackPath), 'original native task lacks its pack');
  const dispatch = read(retained(root, join(root, 'research', run + '-dispatch', 'alpha-adjudicate-' + originalLabel + '.result.json'), bound));
  need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-adjudicate' && dispatch.label === originalLabel
    && dispatch.model === MODELS.sol61.id && dispatch.provider_effort === 'high' && equal(dispatch.covers, [request.batch])
    && typeof dispatch.ended_at === 'string' && !Number.isNaN(Date.parse(dispatch.ended_at)), 'original page referrer lacks completed native authority');
  const referrals = report.repair_notes?.page_uses?.filter(row => row.path === request.page_path) ?? [];
  need(referrals.length === 1 && referrals[0].disposition === 'refer_page_owner'
    && explanation(referrals[0].affected_use) && explanation(referrals[0].reason), 'missing exact native page-owner referral');
  const digestPath = bound(request.batch_digest), batchDigest = read(digestPath);
  need(digestPath === join(root, 'research', run + '-batch-' + request.batch + '-step5-context.json')
    && equal(batchDigest.batches?.map(String), [request.batch]) && batchDigest.pages_read?.includes(request.subject)
    && batchDigest.concerns?.filter(row => row.id === request.subject && explanation(row.concern)).length === 1
    && (report.supporting_evidence?.[relative(root, digestPath)] ?? report.supporting_evidence?.[digestPath]) === request.batch_digest.sha256,
    'page concern lacks its exact native batch digest');
  need(typeof request.scientific_owner === 'string' && /^\/root\/[A-Za-z0-9_/-]+$/.test(request.scientific_owner), 'missing original scientific owner');
  const science = read(bound(request.scientific_proposal));
  const findings = science.scientific_findings?.filter(row => row.id === request.subject) ?? [];
  const proposals = science.proposals?.filter(row => row.id === request.subject) ?? [];
  need(science.run === run && science.scientific_owner === request.scientific_owner && findings.length === 1
    && explanation(findings[0].confirmation) && proposals.length === 1, 'proposal lacks original scientific-owner page confirmation');
  const proposal = proposals[0];
  need(proposal.source_file === request.page_path && String(proposal.batch) === request.batch
    && proposal.native_source_write_done === false && proposal.native_review_done === false && proposal.certification_or_gate_credit === false
    && equal(proposal.exact_native_finding, referrals[0]) && proposal.guards?.current_source_raw_sha256 === request.before_raw_sha256
    && proposal.native_report?.source_file === relative(root, originalPath) && proposal.native_report.raw_sha256 === request.native_outcome.sha256
    && proposal.source_preimage?.archive === request.before_source.path && proposal.source_preimage.raw_sha256 === request.before_raw_sha256,
    'scientific proposal differs from the actual referral or current before page');
  const candidatePath = bound({ path: proposal.candidate_file, sha256: proposal.candidate_raw_sha256 });
  bound({ path: proposal.patch_file, sha256: proposal.patch_sha256 });
  need(Array.isArray(proposal.source_excerpt_edits) && proposal.source_excerpt_edits.length === 1, 'only one exact confirmed prose excerpt may be corrected');
  const edit = proposal.source_excerpt_edits[0], offset = before.indexOf(edit.source_excerpt, fm(before).length);
  need(typeof edit.source_excerpt === 'string' && edit.source_excerpt.length > 0 && typeof edit.proposed_replacement === 'string'
    && edit.source_excerpt !== edit.proposed_replacement && offset >= 0 && before.indexOf(edit.source_excerpt, offset + 1) < 0,
    'scientific proposal is not one unique body excerpt');
  const expected = before.slice(0, offset) + edit.proposed_replacement + before.slice(offset + edit.source_excerpt.length);
  need(readFileSync(candidatePath, 'utf8') === expected && fm(expected) === fm(before), 'candidate exceeds the exact proposed prose correction');
  return { request: { path: requestPath, sha256: pointer.request.sha256 }, payload: request, evidence,
    expected_page_sha256: hash(readFileSync(candidatePath)), record };
}

export function pageCorrectionReview(root, run, round) {
  const pack = read(join(workflow(root, run), pageCorrectionPhase + '-' + round + '.json'));
  const sources = pageCorrectionSources(root), path = pack.page_path;
  need(pack.version === 1 && pack.run === run && pack.phase === pageCorrectionPhase && pack.round === round
    && path && sources[path], 'missing frozen page-only review assignment');
  return { id: pack.subject, path, post_sha256: sources[path],
    review_context_sha256: digest({ request: pack.request, subject: pack.subject, sources }) };
}
export function pageCorrectionConsumers(root, subject) {
  return [...files(root, 'items'), ...files(root, 'library')].flatMap(path => {
    const text = readFileSync(join(root, path), 'utf8'), id = scalar(text, path.startsWith('items/') ? 'id' : 'page');
    if (id === subject) return [];
    const links = [...text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(match => match[1]);
    return links.includes(subject) || frontmatterList(text, 'requires').includes(subject)
      ? [{ id, path, kind: path.startsWith('items/') ? 'item' : 'page' }] : [];
  }).sort((a, b) => a.path.localeCompare(b.path));
}

export function pageCorrectionCompletion(root, run, round, context) {
  const dir = workflow(root, run), progressPath = pageCorrectionProgressPath(root, run, round), progress = read(progressPath);
  const evidence = { ...context.evidence }, bound = binding(root, run, evidence);
  need(progress.version === 1 && progress.run === run && progress.phase === 'initial' && progress.round === round
    && equal(progress.request, context.request), 'page progress differs from frozen root authority');
  for (const [path, value] of Object.entries(progress.evidence ?? {})) bound({ path: relative(root, path), sha256: value });
  for (const [path, value] of Object.entries(context.evidence)) need(progress.evidence?.[path] === value, 'page progress omits original authority');
  const packPath = join(dir, pageCorrectionPhase + '-' + round + '.json'), taskPath = artifact(root, run, round, '.task.md');
  need(sha(progress.evidence?.[packPath]) && sha(progress.evidence?.[taskPath]), 'page pack or task is not frozen in progress');
  const pack = read(packPath), reportPath = artifact(root, run, round, '.json'), report = read(reportPath);
  need(pack.version === 1 && pack.run === run && pack.phase === pageCorrectionPhase && pack.round === round
    && pack.repair_scope === 'one-referred-draft-page-prose' && pack.subject === context.payload.subject
    && pack.page_path === context.payload.page_path && equal(pack.request, context.request)
    && equal(pack.payload, context.payload) && pack.expected_page_sha256 === context.expected_page_sha256,
    'page-only pack differs from authenticated root authority');
  const current = pageCorrectionSources(root), changed = [...new Set([...Object.keys(pack.before_sources), ...Object.keys(current)])]
    .filter(path => pack.before_sources[path] !== current[path]);
  need(equal(changed, [pack.page_path]) && current[pack.page_path] === pack.expected_page_sha256,
    'changed-source set is not exactly the authorized page prose correction');
  need(pack.before_sources[pack.page_path] === context.payload.before_raw_sha256, 'page before snapshot is not authentic');
  const protectedNow = pageCorrectionProtected(root, run), workflowPrefix = relative(root, dir) + '/';
  // A failed parent attempt may already have created genuine child collection
  // receipts. Preserve every original workflow byte, and the complete metadata
  // inventory, without treating later native output files as source changes.
  need(Object.entries(pack.before_protected).every(([path, value]) => protectedNow[path] === value
      ||path==='research/defect-ledger.jsonl'&&reviewCorrectionLedgerAppend(root,run,value))
    && equal(Object.keys(protectedNow).filter(path => !path.startsWith(workflowPrefix)),
      Object.keys(pack.before_protected).filter(path => !path.startsWith(workflowPrefix))),
    'original reports, tuples, ledger or owning metadata changed during page-only repair');
  need(equal(pack.consumers, pageCorrectionConsumers(root, pack.subject)), 'page consumer inventory changed');
  need(report.version === 1 && report.run === run && report.phase === pageCorrectionPhase && report.round === round
    && String(report.unit) === '1' && report.input_sha256 === digest(pack)
    && ['decisions', 'reviews', 'created_items', 'downstream'].every(field => Array.isArray(report[field]) && report[field].length === 0),
    'page child cannot invent item reviews, tuples, prerequisites or downstream assignments');
  const currentReview = pageCorrectionReview(root, run, round), review = report.page_review;
  need(review && evidenceRow(review) && review.disposition === 'repaired'
    && Object.entries(currentReview).every(([field, value]) => review[field] === value), 'missing fresh exact current native page review');
  need(Array.isArray(report.consumer_reviews) && report.consumer_reviews.length === pack.consumers.length
    && pack.consumers.every(consumer => report.consumer_reviews.filter(row => row.id === consumer.id && row.path === consumer.path
      && row.kind === consumer.kind && row.disposition === 'unaffected' && evidenceRow(row)).length === 1), 'missing exact unaffected page-consumer review');
  const resolutions = report.root_finding_resolutions;
  need(Array.isArray(resolutions) && resolutions.length === 1 && resolutions[0].defect_id === context.record.defect_id
    && resolutions[0].status === 'fixed' && equal(resolutions[0].subjects, [pack.subject]) && evidenceRow(resolutions[0]),
    'missing typed explicit native page finding resolution');
  const dispatchPath = join(root, 'research', run + '-dispatch', 'alpha-repair-' + label(round) + '.result.json');
  const dispatch = read(dispatchPath);
  need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-repair' && dispatch.label === label(round)
    && dispatch.model === MODELS.sol61.id && dispatch.provider_effort === 'high'
    && equal(dispatch.covers, [pageCorrectionPhase + ':1']) && typeof dispatch.ended_at === 'string'
    && !Number.isNaN(Date.parse(dispatch.ended_at)), 'page child lacks completed Sol 6.1 high native authority');
  const supporting = report.supporting_evidence ?? {};
  need(supporting && typeof supporting === 'object' && !Array.isArray(supporting), 'invalid page support evidence');
  for (const [path, value] of Object.entries(supporting)) bound({ path: relative(root, isAbsolute(path) ? path : resolve(root, path)), sha256: value });
  for (const path of [progressPath, reportPath, dispatchPath]) retained(root, path, bound);
  // Current page bytes remain a live guard through parent gates/certification.
  evidence[join(root, pack.page_path)] = currentReview.post_sha256;
  return { version: 1, run, phase: pageCorrectionPhase, round, request: context.request, subject: pack.subject,
    page_path: pack.page_path, before_raw_sha256: pack.before_sources[pack.page_path], post_raw_sha256: currentReview.post_sha256,
    page_review: review, consumer_reviews: report.consumer_reviews, root_finding_resolution: resolutions[0], evidence,
    item_source_changes: [], original_judge_tuples_changed: false, canonical_ledger_closure: false, recertification: false };
}

export function verifyPageCorrectionReplay(root, run, round, parent) {
  const metadata = parent.native_page_correction;
  if (!metadata) return;
  const dir = workflow(root, run), receiptPath = join(dir, pageCorrectionPhase + '-' + round + '-collected.json');
  need(parent.evidence?.[receiptPath] === hash(readFileSync(receiptPath)), 'parent does not bind its immutable page receipt');
  const receipt = read(receiptPath), packPath = join(dir, pageCorrectionPhase + '-' + round + '.json');
  need(parent.evidence[packPath] === hash(readFileSync(packPath)), 'parent does not bind its frozen page assignment');
  const pack = read(packPath);
  need(receipt.version === 1 && receipt.run === run && receipt.phase === pageCorrectionPhase && receipt.round === round
    && equal(receipt.request, metadata.request) && receipt.subject === metadata.subject && receipt.page_path === metadata.page_path
    && equal(receipt.page_review, metadata.page_review) && equal(receipt.root_finding_resolution, metadata.root_finding_resolution)
    && receipt.post_raw_sha256 === pack.expected_page_sha256 && equal(pack.request, receipt.request),
    'parent page correction differs from its genuine frozen child receipt');
  // Root closes findings by appending successors. Require the actual original
  // canonical records, without rerunning OPEN/unsuperseded intake on history.
  const requests = [metadata.request, ...(parent.native_owner_finding_corrections ? [parent.native_owner_finding_corrections.request] : []),
    ...(parent.native_review_correction ? [parent.native_review_correction.request] : [])];
  const refs = [];
  for (const requestRef of requests) {
    need(parent.evidence[requestRef.path] === requestRef.sha256 && hash(readFileSync(requestRef.path)) === requestRef.sha256,
      'parent lost its immutable original root request');
    const request = read(requestRef.path);
    refs.push(...(request.entries ? request.entries.map(entry => entry.root_finding) : [request.runtime_finding??request.root_finding]));
  }
  const ledger = readFileSync(join(root, 'research', 'defect-ledger.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
  for (const finding of refs) {
    const path = resolve(root, finding.record.path);
    need(parent.evidence[path] === finding.record.sha256 && hash(readFileSync(path)) === finding.record.sha256,
      'parent lost the original canonical finding record');
    const data = read(path), record = Array.isArray(data) && data.length === 1 ? data[0] : data;
    const rows = ledger.filter(row => row.defect_id === finding.defect_id);
    need(record?.defect_id === finding.defect_id && rows.length === 1 && equal(rows[0], record),
      'original canonical finding history was removed, duplicated or rewritten');
  }
  const state = read(join(root, '.physics-autopilot', run, 'state.json'));
  need(state.run === run, 'wrong replay run state');
  if (state.stage === '5.1-adjudicate' && !state.stages?.['5.1-adjudicate']?.doneAt) {
    const expected = { ...pack.before_sources, [pack.page_path]: receipt.post_raw_sha256 };
    need(equal(pageCorrectionSources(root), expected), 'current source changed after native page-parent collection');
    const now = pageCorrectionReview(root, run, round);
    need(receipt.page_review.post_sha256 === now.post_sha256 && receipt.page_review.review_context_sha256 === now.review_context_sha256,
      'page-parent current review context is stale');
  }
}
