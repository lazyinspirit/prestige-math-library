// Explicit root findings obtain fresh native ownership, never outside write
// permission or invented judge tuples. This module only reads/authenticates.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { itemHashGuard } from './item-hash.mjs';
import { statementHash } from './step5-statement.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { isPublishedItem } from './published-repair-policy.mjs';
import { MODELS } from './models.mjs';
import { historicalInitialMetadataReferences } from './step5-initial-metadata-transition.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const need = (ok, message) => { if (!ok) throw Error('owner finding queue: ' + message); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const reason = value => typeof value === 'string' && value.trim().length >= 40;
const evidenceRow = row => row && reason(row.reason) && row.uncertain === false
  && Array.isArray(row.source_urls) && row.source_urls.every(url => typeof url === 'string' && /^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const key = row => [row?.id, row?.model, row?.context_sha256].join('\0');
const lanes = ['1', '2', '3'];
const adjudicationStage = phase => phase === 'initial' ? '5.1-adjudicate' : phase === 'repeat' ? '5.5-adjudicate' : null;
const queuePhase = phase => 'owner-finding-correction-' + phase;
const assignmentsFor = entries => Object.fromEntries(lanes.map(lane =>
  [lane, entries.filter(entry => entry.owner_lane === lane).map(entry => entry.subject)]));
function compareSets(actual, expected, message) {
  need(Array.isArray(actual) && actual.length === new Set(actual).size
    && equal([...actual].sort(), [...expected].sort()), message);
}
function binder(root, run, evidence) {
  const research = realpathSync(join(root, 'research'));
  return ref => {
    need(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256), 'invalid evidence reference');
    const path = resolve(root, ref.path), rel = relative(research, realpathSync(path));
    need(!isAbsolute(rel) && !rel.startsWith('..') && rel.startsWith(run + '-'), 'evidence is not run-local');
    need(hash(readFileSync(path)) === ref.sha256, 'bound evidence changed: ' + ref.path);
    evidence[path] = ref.sha256;
    return path;
  };
}
function retain(root, run, path, evidence, bound) {
  const rel = relative(root, path);
  need(!isAbsolute(rel) && !rel.startsWith('..'), 'native artifact escapes workspace');
  return bound({ path: rel, sha256: hash(readFileSync(path)) });
}
function nativeOutcome(root, run, phase, round, ref, evidence, bound) {
  const path = bound(ref), report = read(path), unit = String(report.unit), dir = join(root, 'research', run + '-step5-v2');
  const label = 'step5-v2-' + phase + '-r' + round + '-u' + unit;
  need(report.run === run && report.phase === phase && report.round === round
    && /^[1-9][0-9]*$/.test(unit) && path === join(dir, label + '.json'), 'wrong original native outcome');
  const packPath = retain(root, run, join(dir, phase + '-' + round + '.json'), evidence, bound);
  const taskPath = retain(root, run, join(dir, label + '.task.md'), evidence, bound);
  const dispatchPath = retain(root, run, join(root, 'research', run + '-dispatch', 'alpha-adjudicate-' + label + '.result.json'), evidence, bound);
  const pack = read(packPath), dispatch = read(dispatchPath);
  need(pack.version === 2 && pack.run === run && pack.phase === phase && pack.round === round
    && pack.repair_scope === 'frontier' && Array.isArray(pack.assignments?.[unit])
    && report.input_sha256 === hash(JSON.stringify(pack)), 'outcome is not about its frozen original pack');
  need(readFileSync(taskPath, 'utf8').includes(packPath), 'original task is not bound to its native pack');
  need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-adjudicate'
    && dispatch.label === label && dispatch.model === MODELS.sol61.id && dispatch.provider_effort === 'high'
    && equal(dispatch.covers, [unit]) && typeof dispatch.ended_at === 'string'
    && !Number.isNaN(Date.parse(dispatch.ended_at)), 'original native author has not completed with authorized identity');
  return { report, pack, unit };
}
function checkStage(root, run, phase, round, dir, statePath) {
  const state = read(statePath);
  const stage = adjudicationStage(phase);
  need(stage && state.run === run && state.stage === stage
    && !state.finishedAt && !state.stages?.[stage]?.doneAt,
    'queue is outside its live pre-collection native stage');
  need(state.dispatches && typeof state.dispatches === 'object' && !Array.isArray(state.dispatches)
    && Object.values(state.dispatches).every(row => row && (!row.startedAt || row.endedAt)), 'native writers have not drained');
  need(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared metadata writer active');
  need(!existsSync(join(dir, phase + '-' + round + '-collected.json'))
    && !existsSync(join(dir, 'certification-impact-' + phase + '-' + round + '.json')), 'parent collection or certification is already immutable');
  const latest = join(dir, 'certification.json');
  if (existsSync(latest)) {
    const cert = read(latest);
    need(cert.phase !== 'impact-' + phase || cert.round !== round, 'round already certified');
  }
}

// A retained advertisement is history only after its exact native collection
// was consumed and sealed by that wave's impact certificate. Never reinterpret
// a fresh wrong-wave request as absent, or bind old reviews to current sources.
function consumedEarlierQueue(root, run, phase, round, dir, pointer, requestPath, request, bound) {
  const earlier = request.phase === 'initial' ? phase === 'repeat'
    : request.phase === 'repeat' && phase === 'repeat' && request.round < round;
  need(earlier, 'advertised queue does not belong to an earlier consumed wave');
  const priorPhase = request.phase, priorRound = request.round, childPhase = queuePhase(priorPhase);
  const ref = { path: requestPath, sha256: pointer.request.sha256 };
  const progressPath = join(dir, childPhase + '-' + priorRound + '-progress.json');
  const packPath = join(dir, childPhase + '-' + priorRound + '.json');
  const childPath = join(dir, childPhase + '-' + priorRound + '-collected.json');
  const parentPath = join(dir, priorPhase + '-' + priorRound + '-collected.json');
  const certificate = read(join(dir, 'certification-impact-' + priorPhase + '-' + priorRound + '.json'));
  const { sha256: seal, ...payload } = certificate;
  need(certificate.version === 2 && certificate.run === run && certificate.phase === 'impact-' + priorPhase
    && certificate.round === priorRound && sha(seal) && hash(JSON.stringify(payload)) === seal,
    'historical queue certificate is not intact');
  const parent = read(parentPath), progress = read(progressPath), pack = read(packPath), child = read(childPath);
  const sealed = (path, expected) => {
    need(sha(expected), 'historical queue evidence lacks certificate binding: ' + path);
    if (certificate.evidence?.[path] === expected) bound({ path: relative(root, path), sha256: expected });
    else for (const ref of historicalInitialMetadataReferences(root, run, certificate, path, expected, parentPath)) bound(ref);
  };
  sealed(parentPath, hash(readFileSync(parentPath)));
  need(parent.version === 2 && parent.run === run && parent.phase === priorPhase && parent.round === priorRound
    && Array.isArray(parent.errors) && parent.errors.length === 0
    && equal(parent.native_owner_finding_corrections?.request, ref), 'historical parent did not consume this exact queue');
  for (const path of [requestPath, progressPath, packPath, childPath]) sealed(path, parent.evidence?.[path]);
  need(progress.version === 1 && progress.run === run && progress.phase === priorPhase && progress.round === priorRound
    && progress.correction_phase === childPhase && equal(progress.request, ref)
    && equal(progress.subjects, request.entries.map(entry => entry.subject))
    && equal(progress.assignments, assignmentsFor(request.entries))
    && progress.evidence && typeof progress.evidence === 'object' && !Array.isArray(progress.evidence)
    && progress.evidence[requestPath] === ref.sha256 && progress.evidence[packPath] === parent.evidence?.[packPath]
    && equal(pack.owner_finding_queue, { request: ref, payload: request }), 'historical queue progress or pack changed');
  for (const [path, expected] of Object.entries(progress.evidence)) {
    need(parent.evidence?.[path] === expected, 'historical queue input absent from consumed parent: ' + path);
    sealed(path, expected);
  }
  need(child.version === 2 && child.run === run && child.phase === childPhase && child.round === priorRound
    && Array.isArray(child.errors) && child.errors.length === 0 && child.post
    && equal(child.owner_finding_completion, parent.native_owner_finding_corrections.completion),
    'historical child collection is not the consumed completion');
  const reports = [];
  for (const lane of lanes) {
    const label = 'step5-v2-' + childPhase + '-r' + priorRound + '-u' + lane;
    const reportPath = join(dir, label + '.json');
    need(sha(progress.evidence[join(dir, label + '.task.md')]), 'historical queue lacks its frozen native task');
    const dispatchPath = join(root, 'research', run + '-dispatch', 'alpha-repair-' + label + '.result.json');
    for (const path of [reportPath, dispatchPath]) {
      need(child.evidence?.[path] === parent.evidence?.[path], 'historical child native evidence differs from parent');
      sealed(path, child.evidence?.[path]);
    }
    const dispatch = read(dispatchPath);
    need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-repair' && dispatch.label === label
      && dispatch.model === MODELS.sol61.id && dispatch.provider_effort === 'high'
      && equal(dispatch.covers, [childPhase + ':' + lane]) && typeof dispatch.ended_at === 'string'
      && !Number.isNaN(Date.parse(dispatch.ended_at)), 'historical queue lacks completed native authority');
    reports.push(read(reportPath));
  }
  const completion = ownerFindingCompletion(pack, reports, child.post,
    id => child.owner_finding_completion.reviews.find(row => row.id === id));
  need(equal(completion, child.owner_finding_completion), 'historical queue completion differs from original native reports');
}

export function ownerFindingRequest(root, run, phase, round,
  { items, current, statements, dir, allowCompletedContinuation = false, currentReviewCallback = null }) {
  if (!adjudicationStage(phase)) return null;
  root = resolve(root); dir = resolve(dir);
  need(dir === join(root, 'research', run + '-step5-v2'), 'wrong workflow directory');
  const pointerPath = join(dir, 'owner-finding-queue-request.json');
  if (!existsSync(pointerPath)) return null;
  const pointer = read(pointerPath), evidence = {}, bound = binder(root, run, evidence);
  need(pointer.version === 1 && pointer.run === run, 'invalid root advertisement');
  need(resolve(root, pointer.state_dir ?? '.physics-autopilot/' + run) === join(root, '.physics-autopilot', run), 'wrong state directory');
  const requestPath = bound(pointer.request), request = read(requestPath);
  need(dirname(requestPath) === dir && /^owner-finding-queue-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath) !== basename(pointerPath), 'request must be immutable workflow evidence');
  need(request.version === 1 && request.run === run && request.reviewer === '/root'
    && adjudicationStage(request.phase) && Number.isSafeInteger(request.round) && request.round > 0
    && Number.isSafeInteger(round) && round > 0
    && Array.isArray(request.entries) && request.entries.length > 0, 'invalid explicit root finding queue');
  if (request.phase !== phase || request.round !== round) {
    consumedEarlierQueue(root, run, phase, round, dir, pointer, requestPath, request, bound);
    return null;
  }
  need(typeof allowCompletedContinuation === 'boolean', 'invalid continuation option');
  const frontierPath = join(dir, 'frontier.json'), frontier = read(frontierPath); validateFrontier(frontier);
  need(frontier.run === run, 'wrong frozen frontier'); retain(root, run, frontierPath, evidence, bound);
  const graph = new Map(items.map(row => [row.id, row]));
  const ledger = readFileSync(join(root, 'research', 'defect-ledger.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
  const seen = new Set(), findings = new Set(), originalDecisions = {};
  for (const entry of request.entries) {
    const id = entry.subject;
    need(typeof id === 'string' && frontier.ids.includes(id) && graph.has(id) && !isPublishedItem(root, id)
      && !seen.has(id) && lanes.includes(entry.owner_lane), 'unknown, published, repeated or unowned frontier subject');
    seen.add(id);
    need(['native-referral', 'owner-discovery', 'assigned-scope-restoration'].includes(entry.mode), 'missing explicit finding authority mode');
    const recordData = read(bound(entry.root_finding?.record));
    const record = Array.isArray(recordData) && recordData.length === 1 ? recordData[0] : recordData;
    need(record?.run === run && record.subject === id && record.defect_id === entry.root_finding?.defect_id
      && record.disposition === 'open' && record.caught_by_role === 'owner' && !findings.has(record.defect_id), 'not a distinct OPEN owner finding');
    findings.add(record.defect_id);
    const matches = ledger.filter(row => row.defect_id === record.defect_id);
    need(matches.length === 1 && equal(matches[0], record) && !ledger.some(row => Array.isArray(row.supersedes)
      ? row.supersedes.includes(record.defect_id) : row.supersedes === record.defect_id), 'finding is absent, duplicated, changed or superseded');
    if (entry.mode === 'assigned-scope-restoration') need(record.class === 'richness' && record.subclass === 'scope-drop', 'scope restoration needs a genuine scope-drop finding');
    const beforePath = bound(entry.before_source), before = readFileSync(beforePath);
    const source = readFileSync(join(root, 'items', id + '.md'));
    need(sha(entry.before_content_sha256) && sha(entry.before_statement_sha256)
      && itemHashGuard(before.toString('utf8')) === entry.before_content_sha256
      && statementHash(before.toString('utf8')) === entry.before_statement_sha256
      && itemHashGuard(source.toString('utf8')) === current[id]
      && statementHash(source.toString('utf8')) === statements[id], 'invalid current source or genuine before guards');
    if (!allowCompletedContinuation) need(source.equals(before) && current[id] === entry.before_content_sha256
      && statements[id] === entry.before_statement_sha256, 'first intake requires exact current before bytes');
    need(Array.isArray(entry.science) && entry.science.length > 0 && Array.isArray(entry.proposals)
      && entry.proposals.length > 0, 'missing genuine scientific evidence or proposal');
    entry.science.forEach(bound); entry.proposals.forEach(bound);
    const native = nativeOutcome(root, run, phase, round, entry.native_outcome, evidence, bound);
    const assigned = native.pack.assignments[native.unit].filter(row => row.id === id);
    if (entry.mode === 'owner-discovery') {
      need(typeof entry.scientific_owner === 'string' && /^\/root\/[A-Za-z0-9_/-]+$/.test(entry.scientific_owner)
        && entry.science.some(ref => equal(ref, entry.discovery)), 'owner-discovery must bind its original scientific owner and final discovery evidence');
      const discovery = read(bound(entry.discovery));
      need(discovery.run === run && (discovery.scientific_owner ?? discovery.owner) === entry.scientific_owner,
        'discovery does not identify the original scientific owner');
      // Native outcome is context only: deliberately require no invented edge.
    } else {
      need(native.report.downstream?.includes(id) || assigned.length === 1, 'no explicit native referral or actual rejected subject');
    }
    if (entry.mode === 'assigned-scope-restoration' || assigned.length) need(entry.original_tuple, 'assigned rejected subject needs explicit original-tuple reconciliation');
    if (entry.original_tuple) {
      const tuple = entry.original_tuple;
      need(tuple.id === id && tuple.keep === false && sha(tuple.context_sha256) && sha(tuple.item_sha256)
        && assigned.length === 1 && equal(assigned[0], tuple)
        && native.pack.rejected?.filter(row => equal(row, tuple)).length === 1, 'original tuple is not the actual frozen rejected assignment');
      const decisions = native.report.decisions?.filter(row => key(row) === key(tuple)) ?? [];
      need(decisions.length === 1 && evidenceRow(decisions[0]), 'missing authentic original decision');
      originalDecisions[id] = decisions[0];
    }
  }
  const stateDir = resolve(root, pointer.state_dir ?? '.physics-autopilot/' + run);
  need(stateDir === join(root, '.physics-autopilot', run), 'wrong state directory');
  const statePath = join(stateDir, 'state.json'); checkStage(root, run, phase, round, dir, statePath);
  const subjects = [...seen], assignments = assignmentsFor(request.entries);
  const context = { request: { path: requestPath, sha256: pointer.request.sha256 }, payload: request,
    evidence, subjects, assignments, statePath, originalDecisions };
  if (allowCompletedContinuation) {
    const activePhase = queuePhase(phase), progressPath = join(dir, activePhase + '-' + round + '-progress.json');
    need(existsSync(progressPath), 'missing frozen queue progress');
    const progress = read(progressPath);
    need(progress.version === 1 && progress.run === run && progress.phase === phase && progress.round === round
      && equal(progress.request, context.request) && equal(progress.subjects, subjects)
      && equal(progress.assignments, assignments) && progress.evidence && typeof progress.evidence === 'object', 'progress differs from the frozen root queue');
    for (const [path, hashValue] of Object.entries(evidence)) need(progress.evidence[path] === hashValue, 'original queue input missing from progress: ' + path);
    for (const [path, hashValue] of Object.entries(progress.evidence)) {
      const absolute = isAbsolute(path) ? path : resolve(root, path);
      bound({ path: relative(root, absolute), sha256: hashValue });
    }
    const packPath = join(dir, activePhase + '-' + round + '.json');
    need(sha(progress.evidence[packPath]), 'queue pack absent from frozen progress');
    const pack = read(packPath), reports = [];
    for (const lane of lanes) {
      const label = 'step5-v2-' + activePhase + '-r' + round + '-u' + lane;
      const taskPath = join(dir, label + '.task.md'), reportPath = join(dir, label + '.json');
      need(sha(progress.evidence[taskPath]) && existsSync(reportPath), 'missing frozen queue task or actual report');
      const dispatchPath = join(root, 'research', run + '-dispatch', 'alpha-repair-' + label + '.result.json');
      need(existsSync(dispatchPath), 'missing completed queue native dispatch');
      const dispatch = read(dispatchPath);
      need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-repair'
        && dispatch.label === label && dispatch.model === MODELS.sol61.id && dispatch.provider_effort === 'high'
        && equal(dispatch.covers, [activePhase + ':' + lane]) && typeof dispatch.ended_at === 'string'
        && !Number.isNaN(Date.parse(dispatch.ended_at)), 'queue lane lacks completed authorized native authority');
      reports.push(read(reportPath)); retain(root, run, reportPath, evidence, bound); retain(root, run, dispatchPath, evidence, bound);
    }
    context.completion = ownerFindingCompletion(pack, reports, current, currentReviewCallback);
    retain(root, run, progressPath, evidence, bound); context.continuation = true;
  }
  return context;
}

export function ownerFindingCompletion(pack, reports, current, currentReviewCallback) {
  const queue = pack.owner_finding_queue, request = queue?.payload;
  need(queue?.request && isAbsolute(queue.request.path) && sha(queue.request.sha256)
    && hash(readFileSync(queue.request.path)) === queue.request.sha256
    && equal(read(queue.request.path), request), 'queue pack lacks its exact immutable root request');
  const root = resolve(dirname(queue.request.path), '../..');
  need(request?.version === 1 && request.reviewer === '/root' && adjudicationStage(request.phase)
    && pack.version === 2 && pack.run === request.run && pack.phase === queuePhase(request.phase)
    && pack.round === request.round && pack.repair_scope === 'frontier' && !pack.rejected
    && equal(pack.units, lanes) && equal(pack.assignments, assignmentsFor(request.entries)), 'wrong frozen native queue assignment');
  need(typeof currentReviewCallback === 'function' && Array.isArray(reports) && reports.length === 3, 'missing fresh native queue reviews');
  const subjects = request.entries.map(entry => entry.subject);
  compareSets(subjects, [...new Set(subjects)], 'queue repeats a subject');
  const changed = [...new Set([...Object.keys(pack.before ?? {}), ...Object.keys(current)])]
    .filter(id => pack.before?.[id] !== current[id]);
  compareSets(changed, subjects, 'changed-source set is not exactly the authorized queue subjects');
  const reviews = [], decisions = [], resolutions = [];
  for (const lane of lanes) {
    const laneReports = reports.filter(report => String(report.unit) === lane);
    need(laneReports.length === 1, 'missing or duplicate native queue lane');
    const report = laneReports[0], entries = request.entries.filter(entry => entry.owner_lane === lane);
    need(report.run === pack.run && report.phase === pack.phase && report.round === pack.round
      && report.input_sha256 === hash(JSON.stringify(pack)) && Array.isArray(report.decisions) && report.decisions.length === 0
      && Array.isArray(report.created_items) && report.created_items.length === 0, 'queue cannot invent ordinary tuples or prerequisites');
    compareSets((report.reviews ?? []).map(row => row.id), entries.map(entry => entry.subject), 'queue lane reviewed an unassigned or missing subject');
    compareSets((report.root_finding_resolutions ?? []).map(row => row.defect_id), entries.map(entry => entry.root_finding.defect_id), 'queue root resolutions do not match its lane');
    const adjudications = report.scientific_correction_adjudications ?? [];
    compareSets(adjudications.map(row => row.id), entries.filter(entry => entry.original_tuple).map(entry => entry.subject), 'invented or missing original-tuple reconciliation');
    for (const entry of entries) {
      const id = entry.subject, review = report.reviews.find(row => row.id === id), now = currentReviewCallback(id);
      need(pack.frontier_ids?.includes(id) && pack.before?.[id] === entry.before_content_sha256
        && pack.before_statements?.[id] === entry.before_statement_sha256
        && current[id] !== entry.before_content_sha256 && review.disposition === 'repaired' && evidenceRow(review)
        && review.post_sha256 === current[id] && sha(review.review_context_sha256)
        && now?.post_sha256 === current[id] && review.review_context_sha256 === now.review_context_sha256,
        'missing genuine repair and fresh exact current review: ' + id);
      const resolution = report.root_finding_resolutions.find(row => row.defect_id === entry.root_finding.defect_id);
      need(resolution.status === 'fixed' && equal(resolution.subjects, [id]) && evidenceRow(resolution), 'missing typed explicit root resolution: ' + id);
      reviews.push(review); resolutions.push(resolution);
      if (entry.original_tuple) {
        const decision = adjudications.find(row => row.id === id);
        const allowed = new Set(['id', 'model', 'context_sha256', 'outcome', 'defect_type', 'reason', 'uncertain', 'source_urls', 'familiar', 'evidence']);
        need(Object.keys(decision).every(field => allowed.has(field))
          && (!Object.hasOwn(decision, 'evidence') || reason(decision.evidence))
          && key(decision) === key(entry.original_tuple)
          && evidenceRow(decision) && ['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'].includes(decision.outcome)
          && (decision.outcome !== 'confirmed_fatal' || ['logic', 'dependency_citation', 'other'].includes(decision.defect_type)), 'not an exact fresh original-tuple decision');
        const originalPath = resolve(root, entry.native_outcome.path);
        need(hash(readFileSync(originalPath)) === entry.native_outcome.sha256, 'original outcome changed');
        const originals = read(originalPath).decisions.filter(row => key(row) === key(entry.original_tuple));
        need(originals.length === 1 && (originals[0].outcome !== 'false_positive' || decision.outcome === 'false_positive'),
          'distinct consumer repair cannot convert its preserved false-positive original objection');
        decisions.push(decision);
      }
    }
  }
  return { request: queue.request, subjects, reviews, decisions, effective_decisions: decisions,
    root_finding_resolutions: resolutions, source_review: true, canonical_ledger_closure: false, recertification: false };
}
