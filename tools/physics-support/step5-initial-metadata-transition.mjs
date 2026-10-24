// Initial collection history can precede genuine native impact metadata repairs.
// Only an explicit Root request authenticates their exact raw preimages/deltas;
// ordinary evidence intake remains strict and no historical artifact is edited.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { isDeepStrictEqual as equal } from 'node:util';
import { validateFrontier } from './step5-rounds.mjs';
import { frontierGateScope } from './frontier-gate-scope.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter } from './facts-block.mjs';
import { MODELS } from './models.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const digest = value => hash(JSON.stringify(value));
const fileHash = path => hash(readFileSync(path));
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const check = (ok, why) => { if (!ok) throw Error('Step 5 initial metadata transition: ' + why); };
const object = value => value !== null && typeof value === 'object';
const record = value => object(value) && !Array.isArray(value);
const escape = value => value.replace(/~/g, '~0').replace(/\//g, '~1');
const parts = pointer => pointer.split('/').slice(1).map(key => key.replace(/~1/g, '/').replace(/~0/g, '~'));
const valueAt = (value, pointer) => parts(pointer).reduce((row, key) => row?.[key], value);
const normalized = (root, evidence) => {
  const result = {};
  for (const [rawPath, value] of Object.entries(evidence ?? {})) {
    const path = resolve(root, rawPath);
    check(!Object.hasOwn(result, path) || result[path] === value, 'conflicting evidence aliases');
    result[path] = value;
  }
  return result;
};

// Include every scalar in an added/removed subtree; an object addition never
// implicitly licenses unlisted descendant metadata.
export function metadataScalarDifferences(before, after, path = '') {
  if (equal(before, after)) return [];
  if (object(before) || object(after)) {
    if (object(before) && object(after)) check(Array.isArray(before) === Array.isArray(after), 'container type changed');
    const keys = [...new Set([...Object.keys(before ?? {}), ...Object.keys(after ?? {})])];
    if (keys.length) return keys.flatMap(key => metadataScalarDifferences(before?.[key], after?.[key], path + '/' + escape(key))).sort();
  }
  return [path];
}

function contractChecks(report) {
  const notes = Array.isArray(report.repair_notes) ? report.repair_notes.filter(record)
    : record(report.repair_notes) ? [report.repair_notes] : [];
  return [report, ...notes].flatMap(container => ['checks', 'local_checks', 'focused_checks', 'verification_checks', 'validation'].flatMap(key => {
    const rows = container[key];
    return Array.isArray(rows) ? rows.filter(record) : record(rows)
      ? 'command' in rows ? [rows] : Object.values(rows).filter(record) : [];
  }));
}

export function verifyInitialMetadataRequest(root, run, source, closed, requestRef, { reviewContexts } = {}) {
  root = resolve(root);
  check(/^[A-Za-z0-9_-]+$/.test(run), 'invalid run');
  const dir = join(root, 'research', run + '-step5-v2'), stateDir = join(root, '.physics-autopilot', run);
  const additions = {}, transitions = [], sourceEvidence = normalized(root, source?.evidence);
  const bind = (ref, gate = false) => {
    check(record(ref) && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256), 'invalid raw reference');
    const path = resolve(root, ref.path), rel = relative(root, path);
    check(!isAbsolute(rel) && !rel.startsWith('..') && existsSync(path) && realpathSync(path) === path
      && (gate ? dirname(path) === join(stateDir, 'owner-gate-history') && basename(path).endsWith('.json')
        : rel.startsWith('research/' + run + '-')), 'reference escapes native run scope');
    check(fileHash(path) === ref.sha256, 'bound raw evidence changed: ' + ref.path);
    additions[path] = ref.sha256;
    return path;
  };
  const requestPath = bind(requestRef), request = read(requestPath);
  check(dirname(requestPath) === dir && /^owner-initial-metadata-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath) !== 'owner-initial-metadata-request.json', 'request must be immutable workflow evidence');
  check(request.version === 1 && request.run === run && request.reviewer === '/root' && request.phase === 'impact-initial'
    && request.round === 1 && Array.isArray(request.artifacts) && request.artifacts.length > 0, 'invalid Root request');
  const sourcePath = bind(request.source_collection), closedPath = bind(request.impact_closed), progressPath = bind(request.impact_progress);
  check(sourcePath === join(dir, 'initial-1-collected.json') && closedPath === join(dir, 'impact-initial-1-closed.json')
    && progressPath === join(dir, 'impact-initial-1-progress.json') && equal(read(sourcePath), source) && equal(read(closedPath), closed), 'wrong immutable collection/closure');
  check(source.version === 2 && source.run === run && source.phase === 'initial' && source.round === 1
    && closed.version === 2 && closed.run === run && closed.phase === 'impact-initial' && closed.round === 1
    && Array.isArray(source.errors) && source.errors.length === 0 && Array.isArray(closed.errors) && closed.errors.length === 0, 'invalid completed wave');
  const progress = read(progressPath);
  check(progress.version === 2 && progress.run === run && progress.phase === 'impact-initial' && progress.round === 1 && progress.complete === true
    && resolve(root, progress.closed_receipt?.path ?? '') === closedPath && progress.closed_receipt.sha256 === request.impact_closed.sha256
    && Array.isArray(progress.passes) && progress.passes[0] === 'impact-initial' && progress.passes.includes(progress.activePhase)
    && progress.passes.every(phase => /^impact-initial(?:-pass-[1-9][0-9]*)?$/.test(phase)), 'unauthenticated impact closure');
  const state = read(join(stateDir, 'state.json'));
  check(state.run === run && state.stage === '5.3-certify' && !state.finishedAt && state.stages?.['5.2-impact']?.gatesPassedAt
    && Object.values(state.dispatches ?? {}).every(row => !row.startedAt || row.endedAt || row.role === 'tool' && row.stage === state.stage), 'wrong stage or native writer remains active');
  check(!existsSync(join(dir, 'certification.json')) && !existsSync(join(dir, 'certification-impact-initial-1.json')), 'initial wave already certified');
  check(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared metadata writer remains active');
  const frontierPath = join(dir, 'frontier.json'), frontier = read(frontierPath); validateFrontier(frontier);
  check(frontier.run === run, 'wrong frozen frontier'); additions[frontierPath] = fileHash(frontierPath);
  const owners = new Map(frontier.batches.flatMap(batch => batch.items.map(id => [id, batch.id])));
  const subjects = new Set([...frontier.ids, ...frontierGateScope({ repo: root, run }).items]);
  const gatePath = bind(request.predecessor_gate, true), gate = read(gatePath), { request: gateRequest, receipt } = gate;
  const snapshot = gateRequest?.snapshot, { sha256: snapshotSha, ...snapshotBody } = snapshot ?? {};
  check(gateRequest?.version === 2 && basename(gatePath) === gateRequest.attempt + '.json' && snapshotSha === digest(snapshotBody)
    && snapshot.run === run && snapshot.repo === root && equal(snapshot.stages, ['5.2-impact']) && snapshot.scopeKind === 'items'
    && snapshot.recertificationScope === 'formatting-metadata-only' && receipt?.version === 2 && receipt.attempt === gateRequest.attempt
    && receipt.snapshotSha256 === snapshotSha && receipt.reviewer === '/root' && receipt.recertificationScope === 'formatting-metadata-only'
    && receipt.writersDrained === true && Array.isArray(receipt.writerScopes) && receipt.writerScopes.length === 0, 'invalid consumed predecessor gate');
  const times = [gateRequest.createdAt, receipt.reviewStartedAt, receipt.reviewedAt, gateRequest.consumedAt].map(Date.parse);
  check(times.every(Number.isFinite) && times.every((time, i) => i === 0 || time >= times[i - 1])
    && times.at(-1) >= Date.parse(state.stages['5.2-impact'].enteredAt) && times.at(-1) <= Date.parse(state.stages['5.2-impact'].gatesPassedAt)
    && Date.parse(state.stages['5.2-impact'].gatesPassedAt) <= Date.now(), 'predecessor belongs to another wave');
  const gateIds = snapshot.battery?.map(row => row.id) ?? [];
  check(['physics-content', 'frontier-dependency-ledger', 'step5-wave-evidence', 'statement-first', 'page-layout'].every(id => gateIds.includes(id)), 'incomplete predecessor battery');
  check(Array.isArray(snapshot.items) && snapshot.items.length === subjects.size && new Set(snapshot.items.map(row => row.id)).size === subjects.size
    && snapshot.items.every(row => subjects.has(row.id)) && Array.isArray(receipt.items) && receipt.items.length === subjects.size, 'incomplete Root metadata scope');
  for (const [index, item] of snapshot.items.entries()) {
    const row = receipt.items[index];
    check(row?.id === item.id && row.carrierSha256 === item.carrierSha256 && row.manifestSha256 === item.manifestSha256
      && row.verdict === 'format-metadata-pass' && ['formatting', 'metadata'].every(key => row[key]?.verdict === 'pass'
        && typeof row[key].evidence === 'string' && row[key].evidence.trim()) && fileHash(join(root, 'items', item.id + '.md')) === item.carrierSha256,
    'current Root item check changed: ' + item.id);
  }
  // This authenticates the actual predecessor's item/manifest checks. Its
  // snapshot did not bind contracts; current strict checks below do that.
  const manifests = new Set(frontier.batches.map(batch => join(root, 'research', run + '-batch-' + batch.id + '.pages.json')));
  for (const path of manifests) check(snapshot.inputs?.some(row => resolve(root, row.path) === path && row.sha256 === fileHash(path)), 'current gated manifest changed: ' + path);
  const closedEvidence = normalized(root, closed.evidence);
  for (const [path, value] of Object.entries(closedEvidence)) check(existsSync(path) && fileHash(path) === value, 'closed wave evidence changed: ' + path);
  check(typeof reviewContexts === 'function', 'current review contexts are required');
  const allSubjects = [...new Set(request.artifacts.flatMap(row => (row.changes ?? []).map(change => change.subject)))];
  const currentReviews = reviewContexts(root, allSubjects), seenPaths = new Set();
  for (const artifact of request.artifacts) {
    check(['owning-proof-contract', 'owning-page-manifest'].includes(artifact.kind) && /^[1-9][0-9]*$/.test(artifact.batch ?? ''), 'unsupported metadata artifact');
    const suffix = artifact.kind === 'owning-proof-contract' ? 'proof-contracts' : 'pages';
    check(artifact.path === `research/${run}-batch-${artifact.batch}.${suffix}.json`, 'noncanonical owning metadata path');
    const path = resolve(root, artifact.path);
    check(!seenPaths.has(path) && existsSync(path) && realpathSync(path) === path && sha(artifact.after_sha256) && fileHash(path) === artifact.after_sha256, 'duplicate or stale current metadata'); seenPaths.add(path);
    const beforePath = bind(artifact.before);
    check(beforePath !== path && sourceEvidence[path] === artifact.before.sha256, 'raw preimage differs from original collection binding');
    const before = read(beforePath), after = read(path), changes = artifact.changes;
    check(Array.isArray(changes) && changes.length > 0 && new Set(changes.map(row => row.json_pointer)).size === changes.length
      && equal(metadataScalarDifferences(before, after), changes.map(row => row.json_pointer).sort()), 'undeclared metadata scalar difference');
    const nativeReports = new Map();
    for (const change of changes) {
      const id = change.subject;
      check(owners.get(id) === artifact.batch && typeof change.json_pointer === 'string', 'subject is not in its frozen owning batch');
      const carrier = readFileSync(join(root, 'items', id + '.md'), 'utf8');
      const metadata = parseFrontmatter(splitFrontmatter(carrier).fm);
      check(metadata.id === id && metadata.status === 'draft', 'metadata subject is not an owned draft');
      const refs = change.native;
      check(record(refs), 'missing exact native authority');
      const packPath = bind(refs.pack), reportPath = bind(refs.report), taskPath = bind(refs.task), dispatchPath = bind(refs.dispatch);
      const pack = read(packPath), report = read(reportPath), worker = read(dispatchPath), unit = String(report.unit), phase = report.phase;
      const label = `step5-v2-${phase}-r1-u${unit}`;
      check(progress.passes.includes(phase) && packPath === join(dir, phase + '-1.json') && reportPath === join(dir, label + '.json')
        && taskPath === join(dir, label + '.task.md') && dispatchPath === join(root, 'research', run + '-dispatch', 'alpha-repair-' + label + '.result.json')
        && pack.version === 2 && pack.run === run && pack.phase === phase && pack.round === 1 && report.run === run && report.round === 1
        && report.input_sha256 === digest(pack) && readFileSync(taskPath, 'utf8').includes(packPath)
        && pack.assignments?.[unit]?.some(row => (typeof row === 'string' ? row : row.id) === id)
        && closedEvidence[packPath] === refs.pack.sha256 && closedEvidence[reportPath] === refs.report.sha256 && closedEvidence[dispatchPath] === refs.dispatch.sha256,
      'not a bound native owning assignment');
      check(worker.ok === true && worker.run === run && worker.role === 'alpha-repair' && worker.label === label
        && worker.model === MODELS.sol61.id && worker.provider_effort === 'high'
        && equal(worker.covers, [phase === 'impact-initial' ? unit : phase + ':' + unit]) && Number.isFinite(Date.parse(worker.ended_at)), 'invalid native Sol high dispatch');
      const reviews = report.reviews?.filter(row => row.id === id) ?? [], review = reviews[0], current = currentReviews[id];
      check(reviews.length === 1 && current && review.post_sha256 === current.post_sha256 && review.review_context_sha256 === current.review_context_sha256
        && review.post_sha256 === itemHashGuard(readFileSync(join(root, 'items', id + '.md'), 'utf8')) && closed.post?.[id] === review.post_sha256
        && review.uncertain === false && typeof review.reason === 'string' && review.reason.trim().length >= 40
        && Array.isArray(review.source_urls) && review.source_urls.every(url => /^https:\/\//.test(url)) && (review.familiar === true || review.source_urls.length > 0), 'stale or missing native current review: ' + id);
      if (artifact.kind === 'owning-proof-contract') {
        const tokens = parts(change.json_pointer);
        check(tokens[0] === 'contracts' && tokens[1] === id && (/^citations\/\d+\/quote$/.test(tokens.slice(2).join('/'))
          || /^derivations\/\d+\/claim$/.test(tokens.slice(2).join('/')) || /^owner_repair\/(dispatch|kind|independent_acceptance|evidence)$/.test(tokens.slice(2).join('/'))), 'unsupported contract metadata field');
        const assigned = new Set((pack.assignments[unit] ?? []).map(row => typeof row === 'string' ? row : row.id));
        check(contractChecks(report).some(row => {
          if (row.exit_code !== 0 || row.batch !== undefined && String(row.batch) !== artifact.batch
            || row.errors !== undefined && (!Array.isArray(row.errors) || row.errors.length)) return false;
          const argv = typeof row.command === 'string' ? row.command.trim().split(/\s+/) : Array.isArray(row.command) && row.command.every(token => typeof token === 'string') ? row.command : [];
          const scope = argv[argv.indexOf('--items') + 1]?.split(',');
          return argv.includes('--items') && scope?.includes(id) && scope.every(subject => assigned.has(subject) && owners.get(subject) === artifact.batch && report.reviews.some(row => row.id === subject))
            && argv.includes('--strict') && argv.some(token => resolve(root, token) === join(root, 'tools/physics-support/proof-contract.mjs')) && argv.some(token => resolve(root, token) === path);
        }), 'missing successful exact native contract validation: ' + id);
        if (tokens[2] === 'owner_repair') check(after.contracts[id].owner_repair?.dispatch === label && after.contracts[id].owner_repair.independent_acceptance === false, 'invented contract acceptance/owner');
      } else {
        const tokens = parts(change.json_pointer), rowPointer = '/' + tokens.slice(0, 4).join('/');
        check(/^\/\d+\/items\/\d+\/sources\/references\/\d+\/title$/.test(change.json_pointer) && valueAt(after, '/' + tokens.slice(0, 3).join('/'))?.id === id
          && valueAt(before, '/' + tokens.slice(0, 3).join('/'))?.id === id && review.disposition === 'repaired' && pack.before?.[id] !== review.post_sha256,
        'unsupported or unowned page mirror field');
        check(metadata.id === id && metadata.status === 'draft' && equal(valueAt(after, rowPointer), metadata.sources)
          && typeof valueAt(after, change.json_pointer) === 'string', 'current source attribution mirror differs');
      }
      nativeReports.set(reportPath, { path: reportPath, sha256: refs.report.sha256, subjects: [...new Set([...(nativeReports.get(reportPath)?.subjects ?? []), id])].sort() });
    }
    if (artifact.kind === 'owning-proof-contract') {
      const ids = [...new Set(changes.map(row => row.subject))].sort();
      const argv = [fileURLToPath(new URL('./proof-contract.mjs', import.meta.url)), path, '--strict', '--items', ids.join(','), '--json'];
      const result = spawnSync(process.execPath, argv, { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8', timeout: 120000 });
      let output; try { output = JSON.parse(result.stdout); } catch { /* rejected below */ }
      check(!result.error && result.status === 0 && output?.ok === true && equal([...(output.checked ?? [])].sort(), ids)
        && Array.isArray(output.errors) && output.errors.length === 0 && fileHash(path) === artifact.after_sha256, 'current strict contract validation failed: ' + artifact.path);
    }
    additions[path] = artifact.after_sha256;
    transitions.push({ kind: 'initial-native-metadata', path, before_sha256: artifact.before.sha256, after_sha256: artifact.after_sha256,
      archive: { path: beforePath, sha256: artifact.before.sha256 }, binding: { path: requestPath, sha256: requestRef.sha256 },
      json_pointers: changes.map(row => row.json_pointer), native_reports: [...nativeReports.values()] });
  }
  // Reject every unrelated stale hash, including aliases of unsupported inputs.
  for (const [path, value] of Object.entries(sourceEvidence)) check(existsSync(path) && (fileHash(path) === value || seenPaths.has(path)), 'unlicensed historical evidence changed: ' + path);
  for (const [path, value] of Object.entries(additions)) check(fileHash(path) === value, 'metadata writer overlapped transition: ' + path);
  return { evidence: { ...sourceEvidence, ...additions }, transitions };
}

export function initialMetadataTransition(root, run, phase, round, source, closed, options = {}) {
  const pointerPath = join(root, 'research', run + '-step5-v2', 'owner-initial-metadata-request.json');
  if (!existsSync(pointerPath) || phase !== 'impact-initial' || round !== 1) return { evidence: source?.evidence, transitions: [] };
  const pointer = read(pointerPath);
  check(pointer.version === 1 && pointer.run === run, 'invalid Root advertisement');
  return verifyInitialMetadataRequest(root, run, source, closed, pointer.request, options);
}

// A consumed queue retains its original metadata guard. Replay authenticates
// that guard against the archive already sealed by the original certificate;
// it does not rerun old reviews against sources legitimately repaired later.
export function historicalInitialMetadataReferences(root, run, certificate, path, expected, parentPath) {
  root = resolve(root); path = resolve(root, path);
  const dir = join(root, 'research', run + '-step5-v2');
  const { sha256: seal, ...payload } = certificate;
  check(certificate.version === 2 && certificate.run === run && certificate.phase === 'impact-initial' && certificate.round === 1
    && sha(seal) && digest(payload) === seal && sha(expected), 'invalid historical initial certificate');
  const rows = (certificate.evidence_transitions ?? []).filter(row => row.kind === 'initial-native-metadata' && row.path === path && row.before_sha256 === expected);
  check(rows.length === 1, 'missing unique sealed historical metadata transition: ' + path);
  const transition = rows[0];
  const match = basename(path).match(new RegExp('^' + run.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '-batch-([1-9][0-9]*)\\.(proof-contracts|pages)\\.json$'));
  check(match && dirname(path) === join(root, 'research') && sha(transition.after_sha256)
    && transition.after_sha256 !== expected && certificate.evidence?.[path] === transition.after_sha256
    && existsSync(path) && realpathSync(path) === path && fileHash(path) === transition.after_sha256, 'historical current metadata binding differs');
  const sealedRef = (ref, gate = false) => {
    check(record(ref) && typeof ref.path === 'string' && sha(ref.sha256), 'invalid sealed historical reference');
    const absolute = resolve(root, ref.path), rel = relative(root, absolute);
    check(!isAbsolute(rel) && !rel.startsWith('..') && existsSync(absolute) && realpathSync(absolute) === absolute
      && (gate ? dirname(absolute) === join(root, '.physics-autopilot', run, 'owner-gate-history') && basename(absolute).endsWith('.json')
        : rel.startsWith('research/' + run + '-')) && certificate.evidence?.[absolute] === ref.sha256 && fileHash(absolute) === ref.sha256,
    'historical reference is not intact and certificate-bound: ' + ref.path);
    return absolute;
  };
  check(transition.archive?.sha256 === expected, 'historical archive is not the original guard');
  const archivePath = sealedRef(transition.archive), requestPath = sealedRef(transition.binding), request = read(requestPath);
  check(dirname(requestPath) === dir && /^owner-initial-metadata-[A-Za-z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath) !== 'owner-initial-metadata-request.json' && request.version === 1 && request.run === run
    && request.reviewer === '/root' && request.phase === 'impact-initial' && request.round === 1, 'invalid sealed historical Root request');
  check(parentPath === join(dir, 'initial-1-collected.json') && sealedRef(request.source_collection) === parentPath
    && sealedRef(request.impact_progress) === join(dir, 'impact-initial-1-progress.json')
    && sealedRef(request.impact_closed) === join(dir, 'impact-initial-1-closed.json'), 'historical transition belongs to another parent or wave');
  sealedRef(request.predecessor_gate, true);
  const artifacts = (request.artifacts ?? []).filter(row => resolve(root, row.path) === path);
  check(artifacts.length === 1, 'historical request lacks one exact artifact');
  const artifact = artifacts[0], kind = match[2] === 'proof-contracts' ? 'owning-proof-contract' : 'owning-page-manifest';
  check(artifact.kind === kind && artifact.batch === match[1] && artifact.path === relative(root, path)
    && artifact.after_sha256 === transition.after_sha256 && artifact.before?.sha256 === expected
    && sealedRef(artifact.before) === archivePath && Array.isArray(artifact.changes) && artifact.changes.length > 0
    && Array.isArray(transition.json_pointers) && new Set(transition.json_pointers).size === transition.json_pointers.length
    && equal([...transition.json_pointers].sort(), artifact.changes.map(row => row.json_pointer).sort())
    && equal(metadataScalarDifferences(read(archivePath), read(path)), [...transition.json_pointers].sort()), 'historical artifact or exact scalar set differs');
  const native = new Map();
  for (const change of artifact.changes) {
    check(typeof change.subject === 'string' && record(change.native), 'historical change lacks native authority');
    for (const name of ['pack', 'task', 'report', 'dispatch']) sealedRef(change.native[name]);
    const report = resolve(root, change.native.report.path), row = native.get(report) ?? { path: report, sha256: change.native.report.sha256, subjects: [] };
    row.subjects = [...new Set([...row.subjects, change.subject])].sort(); native.set(report, row);
  }
  const ordered = rows => [...rows].sort((a, b) => a.path.localeCompare(b.path));
  check(Array.isArray(transition.native_reports) && equal(ordered([...native.values()]), ordered(transition.native_reports)), 'historical native report basis differs');
  return [
    { path: relative(root, path), sha256: transition.after_sha256 },
    { path: relative(root, archivePath), sha256: expected },
    { path: relative(root, requestPath), sha256: transition.binding.sha256 },
  ];
}
