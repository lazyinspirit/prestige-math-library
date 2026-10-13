// A historical certificate keeps its original bindings. Only native round
// certification can carry a repaired owning contract into current evidence.
import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { basename, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { frontierGateScope } from './frontier-gate-scope.mjs';
import { MODELS } from './models.mjs';
const hash = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const check = (ok, message) => { if (!ok) throw Error(`Step 5 certification transition: ${message}`); };
const checkPassed = row => row?.verdict === 'pass' && typeof row.evidence === 'string' && row.evidence.trim();

// Native reports retain several bounded check containers. Narrative strings
// never become evidence; only direct structured check rows are normalized.
const record = value => value && typeof value === 'object' && !Array.isArray(value);
function nativeContractChecks(report) {
  const notes = Array.isArray(report.repair_notes) ? report.repair_notes.filter(record)
    : record(report.repair_notes) ? [report.repair_notes] : [];
  return [report, ...notes].flatMap(container => ['checks', 'local_checks', 'focused_checks', 'verification_checks', 'validation'].flatMap(key => {
    const rows = container[key];
    return Array.isArray(rows) ? rows.filter(record) : record(rows)
      ? 'command' in rows ? [rows] : Object.values(rows).filter(record) : [];
  }));
}
function checkedContractSubjects(row, root, file, batch, owned) {
  if (row.exit_code !== 0 || row.batch !== undefined && String(row.batch) !== batch
    || row.errors !== undefined && (!Array.isArray(row.errors) || row.errors.length)) return [];
  const argv = typeof row.command === 'string' ? row.command.trim().split(/\s+/)
    : Array.isArray(row.command) && row.command.every(token => typeof token === 'string') ? row.command : [];
  const itemsIndex = argv.indexOf('--items'), scope = itemsIndex >= 0 ? argv[itemsIndex + 1]?.split(',') : null;
  const matches = argv.some(token => resolve(root, token) === resolve(root, 'tools/physics-support/proof-contract.mjs'))
    && argv.some(token => resolve(root, token) === file) && argv.includes('--strict')
    && Boolean(scope?.length) && scope.every(id => owned.some(item => item.id === id));
  return matches ? scope : [];
}

export function certificationEvidenceTransition(root, run, phase, round, prior, source, closed) {
  const evidence = {}, transitions = [];
  if (!prior) return { evidence, transitions };
  root = resolve(root);
  const stale = Object.entries(prior.evidence).filter(([path, sha]) => !existsSync(resolve(root, path)) || hash(readFileSync(resolve(root, path), 'utf8')) !== sha);
  if (!stale.length) return { evidence, transitions };
  check(['impact-repeat', 'gate'].includes(phase), 'only a subsequent native wave may evolve evidence');
  const dir = join(root, 'research', `${run}-step5-v2`), frontier = read(join(dir, 'frontier.json'));
  const owners = new Map(frontier.batches.flatMap(batch => batch.items.map(id => [id, batch.id])));
  const priorPath = join(dir, `certification-${prior.phase}-${prior.round}.json`);
  check(existsSync(priorPath) && JSON.stringify(read(priorPath)) === JSON.stringify(prior), 'immutable prior certificate differs');
  const stateDir = join(root, '.physics-autopilot', run), state = read(join(stateDir, 'state.json'));
  const predecessor = phase === 'impact-repeat' ? '5.6-impact' : '5.9-repair';
  check(state.run === run && state.stage === (phase === 'impact-repeat' ? '5.7-certify' : predecessor)
    && !state.finishedAt && (phase === 'gate' || state.stages?.[predecessor]?.gatesPassedAt), 'wrong native certification stage');
  check(Object.values(state.dispatches ?? {}).every(row => !row.startedAt || row.endedAt || row.role === 'tool' && row.stage === state.stage), 'native writer remains active');
  const currentEvidence = { ...(source?.evidence ?? {}), ...closed.evidence };
  const reviews = new Set([...(source?.reviews ?? []), ...closed.reviews].map(row => row.id));
  const subjects = new Set([...frontier.ids, ...frontierGateScope({ repo: root, run }).items]);
  const historyDir = join(stateDir, 'owner-gate-history');
  const histories = existsSync(historyDir) ? readdirSync(historyDir).filter(name => name.endsWith('.json')).map(name => ({ path: join(historyDir, name), row: read(join(historyDir, name)) })) : [];
  const history = histories.filter(({ row }) => row.request?.consumedAt && JSON.stringify(row.request.snapshot?.stages) === JSON.stringify([predecessor]))
    .sort((a, b) => Date.parse(b.row.request.consumedAt) - Date.parse(a.row.request.consumedAt))[0];
  check(history && realpathSync(history.path) === history.path, 'missing consumed predecessor gate');
  const { request, receipt } = history.row, snapshot = request.snapshot, { sha256, ...snapshotBody } = snapshot;
  check(request.version === 2 && basename(history.path) === `${request.attempt}.json` && sha256 === hash(snapshotBody)
    && snapshot.run === run && snapshot.repo === root && snapshot.scopeKind === 'items' && snapshot.recertificationScope === 'formatting-metadata-only', 'invalid predecessor snapshot');
  check(receipt?.version === 2 && receipt.attempt === request.attempt && receipt.snapshotSha256 === sha256
    && receipt.recertificationScope === 'formatting-metadata-only' && receipt.reviewer === '/root'
    && receipt.writersDrained === true && Array.isArray(receipt.writerScopes) && !receipt.writerScopes.length, 'invalid consumed owner receipt');
  const start = Date.parse(receipt.reviewStartedAt), end = Date.parse(receipt.reviewedAt), consumed = Date.parse(request.consumedAt);
  check(Number.isFinite(start) && Number.isFinite(end) && Number.isFinite(consumed) && start >= Date.parse(request.createdAt)
    && end >= start && consumed >= end && consumed <= Date.now(), 'invalid owner check times');
  if (phase === 'impact-repeat') check(consumed >= Date.parse(state.stages[predecessor].enteredAt)
    && consumed <= Date.parse(state.stages[predecessor].gatesPassedAt), 'gate belongs to another native wave');
  check(Array.isArray(snapshot.items) && snapshot.items.length === subjects.size && new Set(snapshot.items.map(item => item.id)).size === subjects.size
    && snapshot.items.every(item => subjects.has(item.id)) && Array.isArray(receipt.items) && receipt.items.length === snapshot.items.length, 'incomplete formatting/metadata scope');
  for (const [index, item] of snapshot.items.entries()) {
    const checked = receipt.items[index];
    check(checked?.id === item.id && checked.carrierSha256 === item.carrierSha256 && checked.manifestSha256 === item.manifestSha256
      && checked.verdict === 'format-metadata-pass' && checkPassed(checked.formatting) && checkPassed(checked.metadata)
      && hash(readFileSync(join(root, 'items', `${item.id}.md`), 'utf8')) === item.carrierSha256, `stale owner scope: ${item.id}`);
  }
  for (const name of readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-[0-9]+\\.pages\\.json$`).test(name))) {
    const path = join(root, 'research', name);
    check(snapshot.inputs?.some(input => resolve(root, input.path) === path && input.sha256 === hash(readFileSync(path, 'utf8'))), `stale owner manifest: ${name}`);
  }
  for (const [path, before] of stale) {
    const file = resolve(root, path), name = basename(file), batch = name.match(new RegExp(`^${run.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-batch-([0-9]+)\\.proof-contracts\\.json$`))?.[1];
    check(batch && relative(root, file) === `research/${name}` && existsSync(file) && realpathSync(file) === file, `non-owning-contract evidence changed: ${path}`);
    const after = hash(readFileSync(file, 'utf8'));
    check(snapshot.inputs?.some(input => resolve(root, input.path) === file && input.sha256 === after), `current contract is not gate-bound: ${path}`);
    const basis = [], seenReports = new Set();
    for (const [rawReport, sha] of Object.entries(currentEvidence)) {
      const reportPath = resolve(root, rawReport);
      if (resolve(reportPath, '..') !== dir || !/^step5-v2-(?:repeat|impact-repeat|gate)(?:-pass-[0-9]+)?-r[0-9]+-u[^.]+\.json$/.test(basename(reportPath))) continue;
      check(hash(readFileSync(reportPath, 'utf8')) === sha, `native report changed: ${rawReport}`);
      if (seenReports.has(reportPath)) continue;
      seenReports.add(reportPath);
      const report = read(reportPath);
      if (report.run !== run || report.round !== round || !(report.phase === 'repeat' && phase === 'impact-repeat' || report.phase === phase || report.phase.startsWith(`${phase}-pass-`))) continue;
      const packPath = join(dir, `${report.phase}-${round}.json`), pack = read(packPath);
      check(currentEvidence[packPath] === hash(readFileSync(packPath, 'utf8')) || currentEvidence[relative(root, packPath)] === hash(readFileSync(packPath, 'utf8')), 'native pack is not bound');
      check(pack.run === run && pack.phase === report.phase && pack.round === round && report.input_sha256 === hash(pack), 'native report/pack identity differs');
      const assigned = new Set((pack.assignments[report.unit] ?? []).map(row => typeof row === 'string' ? row : row.id));
      const owned = (report.reviews ?? []).filter(row => assigned.has(row.id) && owners.get(row.id) === batch && reviews.has(row.id));
      if (!owned.length) continue;
      const declared = (Array.isArray(report.contract_repairs) ? report.contract_repairs : []).filter(row => record(row)
        && owned.some(item => item.id === row.id) && typeof (row.path ?? row.contract) === 'string' && resolve(root, row.path ?? row.contract) === file).map(row => row.id);
      const checked = nativeContractChecks(report).flatMap(row => checkedContractSubjects(row, root, file, batch, owned));
      const nativeSubjects = [...new Set([...declared, ...checked])];
      if (!nativeSubjects.length) continue;
      const role = report.phase === 'repeat' ? 'alpha-adjudicate' : 'alpha-repair';
      const dispatchPath = join(root, 'research', `${run}-dispatch`, `${role}-step5-v2-${report.phase}-r${round}-u${report.unit}.result.json`);
      const worker = read(dispatchPath);
      check((currentEvidence[dispatchPath] ?? currentEvidence[relative(root, dispatchPath)]) === hash(readFileSync(dispatchPath, 'utf8'))
        && worker.ok === true && worker.run === run && worker.role === role && worker.label === `step5-v2-${report.phase}-r${round}-u${report.unit}`
        && worker.model === MODELS.sol61.id && worker.provider_effort === 'high', 'repair lacks bound native worker authority');
      basis.push({ path: reportPath, sha256: sha, subjects: nativeSubjects });
    }
    check(basis.length > 0, `contract change lacks native owning repair/review: ${path}`);
    evidence[path] = after;
    transitions.push({ path, before_sha256: before, after_sha256: after, prior_certificate: { path: priorPath, sha256: hash(readFileSync(priorPath, 'utf8')) },
      owner_gate: { path: history.path, sha256: hash(readFileSync(history.path, 'utf8')) }, native_reports: basis });
  }
  evidence[priorPath] = hash(readFileSync(priorPath, 'utf8')); evidence[history.path] = hash(readFileSync(history.path, 'utf8'));
  return { evidence, transitions };
}
