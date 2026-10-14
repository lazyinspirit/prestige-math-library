// Root-requested, single-subject native scope restoration before adjudication
// collection. This authenticates authority; it never writes sources or receipts.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { itemHashGuard } from './item-hash.mjs';
import { statementHash } from './step5-statement.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { MODELS } from './models.mjs';

const raw = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const need = (ok, message) => { if (!ok) throw Error('adjudication scientific correction: ' + message); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const explanation = value => typeof value === 'string' && value.trim().length >= 40;
const evidenceRow = row => row && explanation(row.reason) && row.uncertain === false
  && Array.isArray(row.source_urls)
  && row.source_urls.every(url => typeof url === 'string' && /^https:\/\//.test(url))
  && (row.source_urls.length > 0 || row.familiar === true);
const tupleKey = row => [row?.id, row?.model, row?.context_sha256].join('\0');
const supported = phase => phase === 'repeat';
export const scientificCorrectionPhase = phase => 'scientific-correction-' + phase;
export const scientificCorrectionProgressPath = (dir, phase, round) =>
  join(dir, scientificCorrectionPhase(phase) + '-' + round + '-progress.json');

/** The original native result stays immutable. A root finding or a supplied
 * proposal alone is never source authority or a substitute for a native child. */
export function scientificCorrectionRequest(root, run, phase, round,
  { pack, reports, current, statements, items, dir, allowCompletedContinuation = false, currentReview = null }) {
  if (!supported(phase)) return null;
  root = resolve(root);
  dir = resolve(dir);
  need(dir === join(root, 'research', run + '-step5-v2'), 'wrong workflow directory');
  const pointerPath = join(dir, 'owner-adjudication-scientific-repair-request.json');
  if (!existsSync(pointerPath)) return null;
  const pointer = read(pointerPath), evidence = {};
  need(pointer.version === 1 && pointer.run === run, 'invalid root advertisement');
  const research = realpathSync(join(root, 'research'));
  const bound = ref => {
    need(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256),
      'invalid evidence reference');
    const path = resolve(root, ref.path), rel = relative(research, realpathSync(path));
    need(!isAbsolute(rel) && !rel.startsWith('..') && rel.startsWith(run + '-'),
      'evidence is not run-local');
    need(raw(readFileSync(path)) === ref.sha256, 'evidence changed: ' + ref.path);
    evidence[path] = ref.sha256;
    return path;
  };
  const requestPath = bound(pointer.request), request = read(requestPath);
  need(dirname(requestPath) === dir
    && /^owner-adjudication-scientific-repair-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath) !== basename(pointerPath), 'request must be immutable workflow evidence');
  // A consumed advertisement from an earlier round is harmless, never mutable.
  if (request.phase !== phase || request.round !== round) {
    const prior = scientificCorrectionProgressPath(dir, request.phase, request.round);
    need(existsSync(prior) && read(prior).request?.sha256 === pointer.request.sha256,
      'request targets another unconsumed round');
    return null;
  }
  need(request.version === 1 && request.run === run && request.reviewer === '/root'
    && supported(request.phase) && Number.isSafeInteger(round) && round > 0,
    'invalid root request');
  const id = request.subject, unit = request.unit;
  need(typeof id === 'string' && /^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/.test(id)
    && typeof unit === 'string' && unit.length > 0, 'invalid subject or original unit');
  const frontierPath = join(dir, 'frontier.json'), frontier = read(frontierPath);
  validateFrontier(frontier);
  need(frontier.run === run && frontier.ids.includes(id) && pack.repair_scope === 'frontier'
    && pack.frontier_ids?.includes(id), 'subject is outside frozen original frontier');
  evidence[frontierPath] = raw(readFileSync(frontierPath));
  const graph = new Map(items.map(row => [row.id, row]));
  need(graph.has(id), 'subject is absent from current library');
  const recordFile = bound(request.root_finding?.record), recordData = read(recordFile);
  const record = Array.isArray(recordData) && recordData.length === 1 ? recordData[0] : recordData;
  need(record && record.run === run && record.defect_id === request.root_finding?.defect_id
    && record.subject === id && record.class === 'richness' && record.subclass === 'scope-drop'
    && record.disposition === 'open' && record.caught_by_role === 'owner',
    'root finding must be the exact open owner scope-drop finding');
  const ledger = readFileSync(join(root, 'research', 'defect-ledger.jsonl'), 'utf8')
    .split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
  const records = ledger.filter(row => row.defect_id === record.defect_id);
  need(records.length === 1 && isDeepStrictEqual(records[0], record)
    && !ledger.some(row => Array.isArray(row.supersedes)
      ? row.supersedes.includes(record.defect_id) : row.supersedes === record.defect_id),
    'canonical finding is absent, duplicated, changed or superseded');
  const originalPackPath = bound(request.original_pack);
  const originalReportPath = bound(request.original_report);
  const originalTaskPath = bound(request.original_task);
  const originalDispatchPath = bound(request.original_dispatch);
  const label = 'step5-v2-' + phase + '-r' + round + '-u' + unit;
  need(originalPackPath === join(dir, phase + '-' + round + '.json')
    && originalReportPath === join(dir, label + '.json')
    && originalTaskPath === join(dir, label + '.task.md')
    && originalDispatchPath === join(root, 'research', run + '-dispatch', 'alpha-adjudicate-' + label + '.result.json'),
    'wrong original native evidence paths');
  need(isDeepStrictEqual(read(originalPackPath), pack) && pack.version === 2
    && pack.run === run && pack.phase === phase && pack.round === round
    && pack.adjudicationSchemaVersion === 1 && Array.isArray(pack.rejected),
    'original frozen adjudication pack differs');
  need(readFileSync(originalTaskPath, 'utf8').includes('Do not edit false-positive items.')
    && readFileSync(originalTaskPath, 'utf8').includes(originalPackPath),
    'missing authentic original assignment instructions');
  const report = read(originalReportPath);
  const sameUnit = reports.filter(row => String(row.unit) === unit);
  need(sameUnit.length === 1 && isDeepStrictEqual(sameUnit[0], report)
    && report.run === run && report.phase === phase && report.round === round
    && String(report.unit) === unit && report.input_sha256 === raw(JSON.stringify(pack)),
    'original report does not match the frozen pack');
  const dispatch = read(originalDispatchPath);
  need(dispatch.ok === true && dispatch.run === run && dispatch.role === 'alpha-adjudicate'
    && dispatch.label === label && dispatch.model === MODELS.sol61.id
    && dispatch.provider_effort === 'high'
    && Array.isArray(dispatch.covers) && dispatch.covers.length === 1 && String(dispatch.covers[0]) === unit
    && typeof dispatch.ended_at === 'string' && !Number.isNaN(Date.parse(dispatch.ended_at)),
    'original native author did not complete with authorized identity');
  const original = request.original_tuple;
  need(original && original.id === id && original.keep === false
    && typeof original.model === 'string' && sha(original.context_sha256) && sha(original.item_sha256)
    && Array.isArray(pack.assignments?.[unit])
    && pack.assignments[unit].filter(row => row.id === id).length === 1
    && pack.assignments[unit].filter(row => isDeepStrictEqual(row, original)).length === 1
    && pack.rejected.filter(row => isDeepStrictEqual(row, original)).length === 1,
    'request is not the exact actual assigned rejected tuple');
  // Authenticate the actual judge input bound by the native pack, rather than
  // manufacturing tuple fields from a later scope incident.
  need(pack.input_evidence && Object.keys(pack.input_evidence).length > 0, 'missing native judge input');
  let foundTuple = false;
  for (const [path, hash] of Object.entries(pack.input_evidence)) {
    const absolute = isAbsolute(path) ? path : resolve(root, path);
    const rel = relative(root, absolute);
    need(!isAbsolute(rel) && !rel.startsWith('..'), 'native input escapes workspace');
    const file = bound({ path: rel, sha256: hash });
    const input = read(file), verdicts = Array.isArray(input) ? input : input.verdicts;
    if (Array.isArray(verdicts) && verdicts.some(row => isDeepStrictEqual(row, original))) foundTuple = true;
  }
  need(foundTuple, 'actual native judge input does not contain the original tuple');
  const decisions = report.decisions?.filter(row => tupleKey(row) === tupleKey(original)) ?? [];
  const reviews = report.reviews?.filter(row => row.id === id) ?? [];
  need(decisions.length === 1 && evidenceRow(decisions[0])
    && ['confirmed_fatal', 'confirmed_nonfatal'].includes(decisions[0].outcome)
    && reviews.length === 1 && evidenceRow(reviews[0]) && reviews[0].disposition === 'repaired'
    && reviews[0].post_sha256 === request.narrowed_content_sha256,
    'original changed-carrier adjudication is not authenticated');
  const richPath = bound(request.rich_source), narrowedPath = bound(request.narrowed_source);
  const rich = readFileSync(richPath, 'utf8'), narrowed = readFileSync(narrowedPath, 'utf8');
  const source = readFileSync(join(root, 'items', id + '.md'));
  need(sha(request.rich_content_sha256) && sha(request.narrowed_content_sha256)
    && sha(request.rich_statement_sha256) && sha(request.narrowed_statement_sha256)
    && request.rich_content_sha256 === pack.before[id]
    && request.rich_statement_sha256 === pack.before_statements?.[id]
    && itemHashGuard(rich) === request.rich_content_sha256
    && statementHash(rich) === request.rich_statement_sha256
    && itemHashGuard(narrowed) === request.narrowed_content_sha256
    && statementHash(narrowed) === request.narrowed_statement_sha256
    && request.rich_content_sha256 !== request.narrowed_content_sha256
    && request.rich_statement_sha256 !== request.narrowed_statement_sha256
    && itemHashGuard(source.toString('utf8')) === current[id]
    && statementHash(source.toString('utf8')) === statements[id], 'stale genuine rich/narrowed source guards');
  need(typeof allowCompletedContinuation === 'boolean', 'invalid continuation option');
  if (!allowCompletedContinuation) {
    need(request.narrowed_content_sha256 === current[id]
      && request.narrowed_statement_sha256 === statements[id]
      && source.equals(readFileSync(narrowedPath)), 'first intake requires the exact current narrowed source');
  }
  need(Array.isArray(request.science) && request.science.length > 0
    && Array.isArray(request.proposals) && request.proposals.length > 0 && explanation(request.reason),
    'missing original-owner scientific evidence or restoration proposal');
  request.science.forEach(bound);
  request.proposals.forEach(bound);
  const stateDir = resolve(root, pointer.state_dir ?? '.physics-autopilot/' + run);
  need(stateDir === join(root, '.physics-autopilot', run), 'wrong state directory');
  const statePath = join(stateDir, 'state.json'), state = read(statePath);
  need(state.run === run && state.stage === '5.5-adjudicate' && !state.finishedAt
    && !state.stages?.['5.5-adjudicate']?.doneAt, 'wrong or completed native adjudication stage');
  need(!existsSync(join(dir, phase + '-' + round + '-collected.json'))
    && !existsSync(join(dir, 'certification-impact-repeat-' + round + '.json')),
    'original adjudication or owner wave is already immutable');
  const latest = join(dir, 'certification.json');
  if (existsSync(latest)) {
    const cert = read(latest);
    need(cert.phase !== 'impact-repeat' || cert.round !== round, 'round already certified');
  }
  const context = { request: { path: requestPath, sha256: pointer.request.sha256 },
    payload: request, evidence, state, statePath,
    originalDecision: decisions[0], originalReview: reviews[0] };
  assertScientificCorrectionDrained(root, context);
  if (allowCompletedContinuation) {
    const progressPath = scientificCorrectionProgressPath(dir, phase, round);
    need(existsSync(progressPath), 'missing frozen scientific correction progress');
    const progress = read(progressPath), childPhase = scientificCorrectionPhase(phase);
    need(progress.version === 1 && progress.run === run && progress.phase === phase
      && progress.round === round && progress.correction_phase === childPhase
      && progress.subject === id && isDeepStrictEqual(progress.request, context.request)
      && progress.evidence && typeof progress.evidence === 'object' && !Array.isArray(progress.evidence),
      'frozen correction progress does not match the root request');
    // The queue snapshot must bind every original authority input, not merely
    // a parent JSON whose nested carriers could have changed independently.
    for (const [path, hash] of Object.entries(evidence)) {
      need(progress.evidence[path] === hash, 'original correction input absent from frozen progress: ' + path);
    }
    for (const [path, hash] of Object.entries(progress.evidence)) {
      const absolute = isAbsolute(path) ? path : resolve(root, path);
      const rel = relative(root, absolute);
      need(!isAbsolute(rel) && !rel.startsWith('..'), 'progress evidence escapes workspace');
      bound({ path: rel, sha256: hash });
    }
    const childPackPath = join(dir, childPhase + '-' + round + '.json');
    const childLabel = 'step5-v2-' + childPhase + '-r' + round + '-u1';
    const childTaskPath = join(dir, childLabel + '.task.md');
    need(sha(progress.evidence[childPackPath]) && sha(progress.evidence[childTaskPath]),
      'frozen progress must bind the actual child pack and task');
    const childPack = read(childPackPath);
    need(childPack.version === 2 && childPack.run === run && childPack.phase === childPhase
      && childPack.round === round && childPack.repair_scope === 'frontier'
      && childPack.frontier_ids?.includes(id)
      && isDeepStrictEqual(childPack.units, ['1'])
      && isDeepStrictEqual(childPack.assignments, { '1': [id] }) && !childPack.rejected
      && childPack.before?.[id] === request.narrowed_content_sha256
      && childPack.before_statements?.[id] === request.narrowed_statement_sha256,
      'child pack must assign only the actual narrowed subject to native owner1');
    const differences = [...new Set([...Object.keys(childPack.before ?? {}), ...Object.keys(current)])]
      .filter(subject => childPack.before?.[subject] !== current[subject]);
    need(isDeepStrictEqual(differences, [id]), 'scientific child changed an unassigned source or made no restoration');
    const childReportPath = join(dir, childLabel + '.json');
    const childDispatchPath = join(root, 'research', run + '-dispatch', 'alpha-repair-' + childLabel + '.result.json');
    need(existsSync(childReportPath) && existsSync(childDispatchPath), 'missing actual completed native correction');
    const childReport = read(childReportPath), childDispatch = read(childDispatchPath);
    need(childReport.input_sha256 === raw(JSON.stringify(childPack)), 'child report is not about its frozen pack');
    need(childDispatch.ok === true && childDispatch.run === run && childDispatch.role === 'alpha-repair'
      && childDispatch.label === childLabel && childDispatch.model === MODELS.sol61.id
      && childDispatch.provider_effort === 'high'
      && isDeepStrictEqual(childDispatch.covers, [childPhase + ':1'])
      && typeof childDispatch.ended_at === 'string' && !Number.isNaN(Date.parse(childDispatch.ended_at)),
      'scientific child lacks completed native Sol6.1-high authority');
    context.completion = scientificCorrectionCompletion(childReport, request, current, currentReview);
    for (const path of [progressPath, childReportPath, childDispatchPath]) evidence[path] = raw(readFileSync(path));
    context.continuation = true;
  }
  return context;
}

export function assertScientificCorrectionDrained(root, context) {
  const state = context.statePath ? read(context.statePath) : context.state;
  need(state?.run === context.payload.run && state.stage === '5.5-adjudicate'
    && !state.finishedAt && !state.stages?.['5.5-adjudicate']?.doneAt,
    'scientific correction is outside its live adjudication stage');
  need(state.dispatches && typeof state.dispatches === 'object' && !Array.isArray(state.dispatches)
    && Object.values(state.dispatches).every(row => row && (!row.startedAt || row.endedAt)),
    'native writers have not drained');
  need(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')),
    'shared metadata writer is active');
}

/** Parent integration must validate every original report at its preserved
 * historical subject guard, then validate ONLY this effective subject at the
 * actual current guard. This function supplies no general validator waiver. */
export function scientificCorrectionCompletion(report, request, current, currentReview) {
  const id = request.subject, original = request.original_tuple;
  need(report && report.run === request.run && report.phase === scientificCorrectionPhase(request.phase)
    && report.round === request.round && String(report.unit) === '1'
    && sha(report.input_sha256), 'wrong native scientific child identity');
  need(Array.isArray(report.decisions) && report.decisions.length === 0
    && Array.isArray(report.created_items) && report.created_items.length === 0,
    'scientific correction cannot fabricate an ordinary judge tuple or author prerequisites');
  need(Array.isArray(report.reviews) && report.reviews.length === 1, 'correction must review only its frozen subject');
  const review = report.reviews[0];
  need(review.id === id && review.disposition === 'repaired' && evidenceRow(review)
    && sha(current[id]) && current[id] !== request.narrowed_content_sha256
    && review.post_sha256 === current[id] && sha(review.review_context_sha256)
    && currentReview && currentReview.post_sha256 === current[id]
    && review.review_context_sha256 === currentReview.review_context_sha256,
    'missing genuine restoration and fresh exact current review');
  const adjudications = report.scientific_correction_adjudications;
  need(Array.isArray(adjudications) && adjudications.length === 1,
    'missing exact original-tuple reconciliation');
  const decision = adjudications[0];
  const allowed = new Set(['id', 'model', 'context_sha256', 'outcome', 'defect_type',
    'reason', 'uncertain', 'source_urls', 'familiar']);
  need(decision && Object.keys(decision).every(key => allowed.has(key))
    && tupleKey(decision) === tupleKey(original) && evidenceRow(decision)
    && ['confirmed_fatal', 'confirmed_nonfatal', 'false_positive'].includes(decision.outcome)
    && (decision.outcome !== 'confirmed_fatal' || ['logic', 'dependency_citation', 'other'].includes(decision.defect_type)),
    'corrective adjudication must use only the actual frozen tuple keys and a genuine fresh decision');
  need(current[id] !== request.rich_content_sha256 || decision.outcome === 'false_positive',
    'restoration to the original rich carrier requires a false-positive effective original adjudication');
  const resolutions = report.root_finding_resolutions;
  need(Array.isArray(resolutions) && resolutions.length === 1, 'missing distinct root finding resolution');
  const resolution = resolutions[0];
  need(resolution.defect_id === request.root_finding.defect_id && resolution.status === 'fixed'
    && Array.isArray(resolution.subjects) && resolution.subjects.length === 1 && resolution.subjects[0] === id
    && evidenceRow(resolution), 'root scope-drop finding lacks explicit typed native resolution');
  return { review, decision, root_finding_resolution: resolution,
    root_finding_resolutions: resolutions, subject: id, original_unit: request.unit,
    narrowed_before_sha256: request.narrowed_content_sha256,
    original_tuple: original, source_review: true, canonical_ledger_closure: false,
    recertification: false };
}
