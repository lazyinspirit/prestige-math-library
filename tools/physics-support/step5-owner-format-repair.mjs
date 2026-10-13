// Root requests native repair; this intake never writes source or gate state.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { basename, isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const requireValue = (ok, message) => { if (!ok) throw Error(`owner format repair: ${message}`); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');

/** Only a deterministic owner advertisement is read. Native onProgress has
 * already checked its inflight/adopted workers; disk checks also protect CLI use. */
export function ownerFormatRepair(root, run, phase, round, progress, current, frontier, closedPath) {
  const dir = join(root, 'research', `${run}-step5-v2`);
  const pointerPath = join(dir, 'owner-format-repair-request.json');
  if (!existsSync(pointerPath)) return null;
  const pointer = read(pointerPath), evidence = {};
  requireValue(pointer.version === 1 && pointer.run === run, 'invalid advertisement');
  const research = realpathSync(join(root, 'research'));
  const bound = ref => {
    requireValue(ref && typeof ref.path === 'string' && !isAbsolute(ref.path) && sha(ref.sha256), 'invalid evidence reference');
    const file = resolve(root, ref.path), rel = relative(research, file);
    requireValue(!rel.startsWith('..') && !isAbsolute(rel) && rel.startsWith(`${run}-`) && existsSync(file), 'evidence is not run-local');
    const actual = relative(research, realpathSync(file));
    requireValue(!actual.startsWith('..') && !isAbsolute(actual) && actual.startsWith(`${run}-`), 'evidence escapes run');
    requireValue(hash(readFileSync(file)) === ref.sha256, `evidence changed: ${ref.path}`);
    evidence[file] = ref.sha256;
    return file;
  };
  const requestPath = bound(pointer.request), request = read(requestPath);
  requireValue(resolve(requestPath, '..') === resolve(dir) && /^owner-format-repair-[a-zA-Z0-9._-]+\.json$/.test(basename(requestPath))
    && basename(requestPath) !== 'owner-format-repair-request.json', 'request must be an immutable workflow request file');
  requireValue(request.version === 1 && request.run === run && request.reviewer === '/root'
    && ['impact-initial', 'impact-repeat'].includes(request.phase) && Number.isInteger(request.round) && request.round > 0, 'invalid root request or phase');
  // A consumed advertisement may stay in place through subsequent native stages.
  const consumed = (progress.format_repairs ?? []).find(row => row.request.path === requestPath);
  if (consumed) {
    requireValue(consumed.request.sha256 === pointer.request.sha256, 'consumed request changed');
    return null;
  }
  if (request.phase !== phase || request.round !== round) {
    const priorPath = join(dir, `${request.phase}-${request.round}-progress.json`);
    const prior = existsSync(priorPath) ? read(priorPath) : null;
    if (prior?.format_repairs?.some(row => row.request.path === requestPath && row.request.sha256 === pointer.request.sha256)) return null;
    requireValue(false, 'request targets another phase or round');
  }
  requireValue(progress.version === 2 && progress.run === run && progress.phase === phase && progress.round === round
    && progress.complete === true && !progress.activeMaintenance, 'wave is not closed or identity differs');
  requireValue(!existsSync(join(dir, `certification-${phase}-${round}.json`)), 'wave already certified');
  const latestPath = join(dir, 'certification.json');
  if (existsSync(latestPath)) {
    const latest = read(latestPath);
    requireValue(latest.phase !== phase || latest.round !== round, 'wave already certified');
  }
  const stateDir = resolve(root, pointer.state_dir ?? `.physics-autopilot/${run}`);
  requireValue(relative(resolve(root), stateDir).startsWith('.physics-autopilot/') && basename(stateDir) === run, 'invalid state directory');
  const state = read(join(stateDir, 'state.json'));
  const stage = phase === 'impact-initial' ? '5.2-impact' : '5.6-impact';
  requireValue(state.run === run && state.stage === stage && !state.finishedAt && !state.stages?.[stage]?.doneAt, 'wrong current native stage');
  requireValue(Object.values(state.dispatches ?? {}).every(row => !row.startedAt || row.endedAt), 'active or unresolved writer');
  requireValue(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared metadata writer');
  const gate = read(join(stateDir, 'owner-gate-request.json')), snapshot = gate.snapshot;
  requireValue(gate.version === 2 && gate.attempt === request.attempt && !gate.consumedAt
    && !existsSync(join(stateDir, 'owner-gate-history', `${gate.attempt}.json`)), 'gate attempt is stale or consumed');
  requireValue(snapshot?.run === run && snapshot.repo === resolve(root) && snapshot.recertificationScope === 'formatting-metadata-only'
    && snapshot.scopeKind === 'items' && JSON.stringify(snapshot.stages) === JSON.stringify([stage])
    && snapshot.sha256 === request.snapshotSha256, 'wrong gate scope');
  const { sha256, ...body } = snapshot;
  requireValue(sha256 === hash(JSON.stringify(body)), 'gate snapshot changed');
  requireValue(Array.isArray(snapshot.inputs) && snapshot.inputs.length > 0, 'missing gate inputs');
  for (const input of snapshot.inputs) requireValue((existsSync(input.path) ? hash(readFileSync(input.path)) : null) === input.sha256, `stale gate input: ${input.path}`);
  requireValue(Array.isArray(snapshot.items) && snapshot.items.length > 0 && new Set(snapshot.items.map(row => row.id)).size === snapshot.items.length, 'invalid gate selection');
  for (const item of snapshot.items) requireValue(hash(readFileSync(join(root, 'items', `${item.id}.md`))) === item.carrierSha256, `stale gate carrier: ${item.id}`);
  const closed = read(closedPath);
  requireValue(closed.run === run && closed.phase === phase && closed.round === round
    && Object.keys(closed.post ?? {}).length === Object.keys(current).length
    && Object.entries(current).every(([id, value]) => closed.post[id] === value), 'content changed after closure');
  evidence[closedPath] = hash(readFileSync(closedPath));
  const report = read(bound(request.precheck));
  requireValue(Array.isArray(report.results) && report.results.length === snapshot.items.length
    && report.summary?.files === snapshot.items.length && Number.isInteger(report.summary.failed) && report.summary.failed > 0, 'incomplete or passing precheck');
  const selected = new Set(snapshot.items.map(row => row.id)), seen = new Set(), failures = [];
  for (const row of report.results) {
    const id = basename(row.file ?? '', '.md');
    requireValue(selected.has(id) && !seen.has(id) && (!row.item_id || row.item_id === id)
      && resolve(row.file) === join(root, 'items', `${id}.md`)
      && ['pass', 'not-applicable', 'fail', 'failed', 'repair', 'error'].includes(row.status), 'precheck selection or status mismatch');
    seen.add(id);
    if (!['pass', 'not-applicable'].includes(row.status)) {
      requireValue(frontier.has(id), `failure outside frozen frontier: ${id}`);
      requireValue(typeof row.proposed_proof === 'string' && row.proposed_proof.trim() || row.errors?.length || row.error || row.message, `missing actual diagnostic: ${id}`);
      failures.push({ ...row, item_id: id });
    }
  }
  const subjects = failures.map(row => row.item_id).sort();
  requireValue(failures.length === report.summary.failed && Array.isArray(request.subjects)
    && new Set(request.subjects).size === request.subjects.length
    && JSON.stringify([...request.subjects].sort()) === JSON.stringify(subjects), 'subjects must equal actual failed precheck selection');
  for (const ref of request.proposal ? (Array.isArray(request.proposal) ? request.proposal : [request.proposal]) : []) bound(ref);
  for (const input of snapshot.inputs) requireValue((existsSync(input.path) ? hash(readFileSync(input.path)) : null) === input.sha256, `gate input changed during intake: ${input.path}`);
  return { request: { path: requestPath, sha256: pointer.request.sha256 }, payload: request, gate_request: gate, subjects, failures, evidence };
}
