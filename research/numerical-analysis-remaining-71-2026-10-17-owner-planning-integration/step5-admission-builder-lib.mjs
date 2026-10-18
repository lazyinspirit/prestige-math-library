// Shared root-only admission construction. Importing does not execute a builder.
import { existsSync, lstatSync, readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { itemHashGuard } from '../../tools/item-hash.mjs';
import { validateFrontier } from '../../tools/step5-rounds.mjs';
export const RUN = 'numerical-analysis-remaining-71-2026-10-17';
export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const DIR = `research/${RUN}-step5-v2`;
export const need = (yes, reason) => { if (!yes) throw Error(`Step5 admission builder: ${reason}`); };
export const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export const date = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
export function builder() {
  const args = process.argv.slice(2), value = flag => args[args.indexOf(flag) + 1];
  need(args.includes('--owner-identity') && value('--owner-identity') === '/root'
    && args.includes('--writers-drained') && args.includes('--confirmations'), 'root identity, drained-writer attestation and actual --confirmations are mandatory');
  need(process.cwd() === ROOT, 'invoke from the repository root');
  const captured = new Map(), bindings = {};
  function bytes(path) {
    need(typeof path === 'string' && !path.startsWith('/') && !path.includes('\\')
      && !path.split('/').some(p => !p || p === '.' || p === '..'), 'unsafe input path');
    let cursor = ROOT;
    for (const part of path.split('/')) { cursor = join(cursor, part); need(!lstatSync(cursor).isSymbolicLink(), `symlink ${path}`); }
    need(lstatSync(cursor).isFile(), `nonregular ${path}`);
    const b = readFileSync(cursor), old = captured.get(path);
    need(!old || old === sha(b), `changed input ${path}`); captured.set(path, sha(b)); return b;
  }
  const json = path => JSON.parse(bytes(path));
  const bind = path => { need(path.startsWith(`research/${RUN}-`), `evidence must be own-run research: ${path}`);
    const b = bytes(path); bindings[path] = sha(b); return b; };
  const boundJson = path => JSON.parse(bind(path));
  const statePath = `.autopilot/${RUN}/state.json`, requestPath = `.autopilot/${RUN}/owner-gate-request.json`;
  const stateBytes = bytes(statePath), state = JSON.parse(stateBytes), requestBytes = bytes(requestPath), request = JSON.parse(requestBytes);
  need(state.version === 1 && state.run === RUN && state.paused === true && state.stage === '5.1-adjudicate'
    && !state.finishedAt && Object.values(state.dispatches ?? {}).every(d => !d.startedAt || date(d.endedAt)),
  'actual unfinished native5.1 must be paused with every native/delegated writer drained');
  need(request.run === RUN && request.group === state.stage && JSON.stringify(request.stages) === JSON.stringify([state.stage])
    && typeof request.id === 'string' && date(request.at), 'missing exact current native owner request');
  const permissionPath = `.autopilot/${RUN}/owner-gate-permission.json`;
  const permissionPresent = existsSync(join(ROOT, permissionPath));
  if (permissionPresent) need(json(permissionPath).request_id !== request.id, 'current owner request already has permission');
  need(!existsSync(join(ROOT, DIR, 'impact-initial-1.json'))
    && !readdirSync(join(ROOT, 'research', `${RUN}-dispatch`)).some(n => /^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(n)), 'first impact pack/execution already exists');
  const confirmationPath = value('--confirmations'), confirmation = boundJson(confirmationPath);
  need(confirmation.version === 1 && confirmation.run === RUN && confirmation.authorized_by === 'owner'
    && confirmation.owner_identity === '/root' && confirmation.native_coverage_adopted === false
    && Array.isArray(confirmation.items), 'not an actual separately dated root confirmation');
  const frontier = boundJson(`${DIR}/frontier.json`); validateFrontier(frontier);
  const baseline = boundJson(`${DIR}/baseline.json`); boundJson(`${DIR}/step4-verdicts.json`);
  const initial = boundJson(`${DIR}/initial-1.json`);
  need(initial.run === RUN && initial.phase === 'initial' && initial.round === 1
    && JSON.stringify(initial.frontier_ids) === JSON.stringify(frontier.ids), 'immutable original frontier mismatch');
  const origins = new Map();
  for (const unit of initial.units) {
    const label = `step5-v2-initial-r1-u${unit}`, reportPath = `${DIR}/${label}.json`, report = boundJson(reportPath);
    const empty = report.completion === 'mechanical-zero-work';
    const resultPath = `research/${RUN}-dispatch/${empty ? `tool-step5-v2-empty-initial-r1-u${unit}` : `alpha-adjudicate-${label}`}.result.json`;
    const result = boundJson(resultPath);
    need(result.run === RUN && result.ok === true && result.covers?.length === 1 && result.covers[0] === unit,
      `initial unit is not actually complete: ${unit}`);
    if (!empty) boundJson(resultPath.replace(/\.result\.json$/, `.attempt-${result.attempt}.result.json`));
    origins.set(unit, { report, reportPath, result, resultPath });
  }
  for (const name of readdirSync(join(ROOT, 'research')).filter(n => n.startsWith(`${RUN}-batch-`)
    && /^\d+\.pages\.json$/.test(n.slice(`${RUN}-batch-`.length)))) bind(`research/${name}`);
  function rootReview(id, batch) {
    const matches = confirmation.items.filter(row => row.id === id); need(matches.length === 1, `missing/duplicate actual root confirmation ${id}`);
    const row = matches[0];
    need(row.reviewed_by === 'root' && row.confirmed_defect === true && date(row.reviewed_at)
      && typeof row.reason === 'string' && row.reason.trim().length >= 40
      && Date.parse(row.reviewed_at) <= Date.now(), `root has not actually confirmed ${id}`);
    const proposal = row.proposal; need(proposal?.path && /^[a-f0-9]{64}$/.test(proposal.sha256), `missing exact approved proposal ${id}`);
    const pBytes = bind(proposal.path); need(sha(pBytes) === proposal.sha256, `root-approved proposal changed ${id}`);
    const doc = JSON.parse(pBytes), targetPath = `items/${id}.md`;
    const p = (doc.items ?? doc.concerns ?? []).find(x => x.id === id) ?? (doc.target_source === targetPath ? doc : null);
    need(p, `proposal does not identify ${id}`);
    const source = bytes(targetPath).toString('utf8');
    need(frontier.batches.find(b => b.id === batch)?.items.includes(id) && baseline[id] === initial.before[id]
      && itemHashGuard(source) === baseline[id], `not an unchanged original frontier subject ${id}`);
    const edits = (p.proposed_edits ?? p.literal_edits ?? []).filter(e => (e.file ?? e.path) === targetPath)
      .map(e => ({ source_excerpt: e.old, proposed_replacement: e.new }));
    need(edits.length && edits.every(e => typeof e.source_excerpt === 'string' && e.source_excerpt
      && source.split(e.source_excerpt).length === 2 && typeof e.proposed_replacement === 'string'
      && e.proposed_replacement !== e.source_excerpt), `missing/stale exact subject edits ${id}`);
    return { source, row, review: { reviewed_by: row.reviewed_by, confirmed_defect: row.confirmed_defect,
      reviewed_at: row.reviewed_at, reason: row.reason, evidence_file: confirmationPath,
      proposed_edits: edits, candidate_patch_file: proposal.path,
      ...(row.summary_correspondence ? { summary_correspondence: row.summary_correspondence } : {}) } };
  }
  function currency() {
    for (const [path, expected] of captured) need(sha(readFileSync(join(ROOT, path))) === expected, `input/state race: ${path}`);
    need(existsSync(join(ROOT, permissionPath)) === permissionPresent, 'owner permission appeared during capture');
    need(!existsSync(join(ROOT, DIR, 'impact-initial-1.json')), 'impact pack appeared during capture');
  }
  function frozen(path, b, { evidence = true } = {}) {
    need(!existsSync(join(ROOT, path)), `immutable output already exists ${path}`); currency();
    mkdirSync(dirname(join(ROOT, path)), { recursive: true }); writeFileSync(join(ROOT, path), b, { flag: 'wx', mode: 0o444 });
    if (evidence) bindings[path] = sha(b);
  }
  return { bytes, json, bind, boundJson, bindings, frontier, baseline, initial, origins, rootReview,
    state, request, stateBytes, requestBytes, currency, frozen };
}
