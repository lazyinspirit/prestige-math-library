// An owner-controlled pause before native batteries. No reviews or gates are waived.
import { existsSync, readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { loadStep3, itemHash, itemInputPaths } from './step3-decisions.mjs';
import { dependencyLevels } from './item-dependency-levels.mjs';
import { scanProofFiles } from './proof-layout.mjs';
import { yaml } from './pathway-lib.mjs';
import { splitFrontmatter } from './step6-lib.mjs';

const digest = value => createHash('sha256').update(value).digest('hex');
const read = file => existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : null;
const runtime = ctx => ctx.stateDir ?? ctx.config?.stateDir ?? join(ctx.repo, '.autopilot', ctx.run);
const requestPath = ctx => join(runtime(ctx), 'owner-gate-request.json');
const permissionPath = ctx => join(runtime(ctx), 'owner-gate-permission.json');

export function recertificationArchiveDir(ctx, request) {
  // Reporter integrity deliberately excludes native dispatch evidence. The
  // final post-commit check must not itself create uncommitted source files.
  return request.stages.includes('6-close-v2') ? runtime(ctx)
    : ctx.dispatchDir ?? ctx.config?.dispatchDir ?? join(ctx.repo, 'research', `${ctx.run}-dispatch`);
}

export function frontierInputs(ctx) {
  const snapshot = loadStep3(ctx.repo, ctx.run);
  const files = new Set([join(ctx.repo, 'research', 'plan-spec.json'),
    join(ctx.repo, 'research', `${ctx.run}-scope-ledger.json`),
    join(ctx.repo, 'research', `${ctx.run}-owner-authoring-direction.md`)]);
  const planningScopePath = join(ctx.repo, 'research', `${ctx.run}-planning-scope.json`);
  files.add(planningScopePath);
  const planningScope = read(planningScopePath);
  if (planningScope?.source) files.add(join(ctx.repo, planningScope.source));
  for (const name of readdirSync(join(ctx.repo, 'research'))) {
    if (name.startsWith(`${ctx.run}-batch-`) && /\.(pages|coverage|proof-contracts)\.json$/.test(name))
      files.add(join(ctx.repo, 'research', name));
  }
  for (const page of snapshot.pages) files.add(join(ctx.repo, 'library', page.category, `${page.id}.md`));
  for (const id of snapshot.items.keys()) {
    files.add(join(ctx.repo, 'items', `${id}.md`));
    for (const file of itemInputPaths(snapshot, id)) files.add(file);
  }
  const guards = [...files].sort().map(file => ({ path: relative(ctx.repo, file),
    sha256: existsSync(file) ? digest(readFileSync(file)) : null }));
  return { snapshot, guards, fingerprint: digest(JSON.stringify(guards)) };
}

export function holdBeforeBattery({ ctx, executor, stage }) {
  if (ctx.doctor || executor.state.paused || executor.inflight.size || executor.liveDispatchLabels().length) return;
  const group = executor.pipelineGroup(stage).filter(s => !executor.state.data.stages[s.id]?.skipped);
  if (!group.some(s => s.gates && !executor.stageStatus(s, ctx).gatesPassed)
    || !group.every(s => executor.stageStatus(s, ctx).unitsDone)) return;
  const key = group.map(s => s.id).join('+');
  const permit = read(permissionPath(ctx));
  if (permit?.run === ctx.run && permit.group === key && !permit.consumed_at) {
    const current = frontierInputs(ctx);
    if (permit.fingerprint === current.fingerprint) return;
  }
  const existing = read(requestPath(ctx));
  const request = existing?.group === key && existing.id !== permit?.request_id ? existing : {
    version: 1, run: ctx.run, id: randomUUID(), group: key, stages: group.map(s => s.id),
    at: new Date().toISOString(), reason: 'Owner must resolve escalations and recertify current frontier before the native battery.',
  };
  writeFileSync(requestPath(ctx), JSON.stringify(request, null, 2) + '\n');
  executor.state.paused = true;
  executor.state.save();
  executor.reporter.notify('paused', `Owner pre-gate hold: ${requestPath(ctx)}`);
}

export function consumePermission(ctx) {
  const request = read(requestPath(ctx)), permit = read(permissionPath(ctx));
  if (!request || !permit || permit.run !== ctx.run || permit.request_id !== request.id)
    throw Error('Missing owner recertification permission for this battery');
  // All gate descriptors in the same group are built synchronously in one tick.
  // The next onProgress call requires a fresh, unconsumed permission.
  if (!permit.consumed_at) {
    if (permit.fingerprint !== frontierInputs(ctx).fingerprint) throw Error('Owner recertification inputs changed');
    permit.consumed_at = new Date().toISOString();
    writeFileSync(permissionPath(ctx), JSON.stringify(permit, null, 2) + '\n');
  }
}

export function recertify(ctx, { resolveEscalations = false } = {}) {
  if (!resolveEscalations) throw Error('Supervisor must first resolve and explicitly attest all escalations');
  const request = read(requestPath(ctx));
  if (!request || request.run !== ctx.run) throw Error('No owner battery request');
  const state = read(join(ctx.stateDir, 'state.json'));
  if (!state?.paused || state.run !== ctx.run) throw Error('Exact run must be held before owner recertification');
  const before = frontierInputs(ctx), { snapshot } = before;
  const planning = request.stages.every(id => /^1-(drift|drift-apply)$/.test(id));
  let rows = [], layout = [];
  if (planning) {
    if (snapshot.items.size) throw Error('Planning-only pass cannot cover authored items');
  } else {
    const graph = dependencyLevels(snapshot.pages);
    if (graph.errors.length || !graph.items.size) throw Error(graph.errors.join('\n') || 'Empty authored frontier');
    rows = [...graph.items].sort(([a], [b]) => graph.levels.get(a) - graph.levels.get(b) || a.localeCompare(b))
      .map(([id, { item, page }]) => {
        if (!item.kind || !item.title?.trim() || !Array.isArray(item.deps)) throw Error(`Malformed metadata: ${id}`);
        const path = join(ctx.repo, 'items', `${id}.md`);
        if (!existsSync(path)) throw Error(`Missing authored carrier: ${id}`);
        const raw = readFileSync(path, 'utf8');
        const fm = yaml().parse(splitFrontmatter(raw).frontmatter);
        if (fm?.id !== id || fm.kind !== item.kind || fm.title !== item.title
          || !['draft', 'published'].includes(fm.status)
          || fm.dependency_level !== graph.levels.get(id)
          || JSON.stringify([...(fm.deps ?? [])].sort()) !== JSON.stringify([...item.deps].sort()))
          throw Error(`Source/manifest metadata mismatch: ${id}`);
        return { id, page: page.id, dependency_level: graph.levels.get(id),
          raw_sha256: digest(readFileSync(path)), input_sha256: itemHash(snapshot, id) };
      });
    // Read-only actual-renderer formatting check, in the same dependency order.
    layout = scanProofFiles(rows.map(row => `items/${row.id}.md`), ctx.repo);
    const failures = layout.flatMap(item => item.errors.map(error => `${item.file}: ${error.message ?? JSON.stringify(error)}`));
    if (failures.length) throw Error(failures.join('\n'));
  }
  const after = frontierInputs(ctx);
  if (before.fingerprint !== after.fingerprint) throw Error('Inputs changed during recertification');
  const receipt = { version: 1, run: ctx.run, request_id: request.id, group: request.group,
    at: new Date().toISOString(), mode: planning ? 'page-planning metadata/hash-only' : 'dependency-ordered formatting/metadata/hash-only',
    mathematical_review: false, escalations_resolved_by_supervisor: true,
    fingerprint: after.fingerprint, guards: after.guards, rows,
    formatting: layout.map(item => ({ file: item.file, errors: item.errors.length })), consumed_at: null };
  const archiveDir = recertificationArchiveDir(ctx, request);
  mkdirSync(archiveDir, { recursive: true });
  const archive = join(archiveDir, `owner-gate-recertification-${randomUUID()}.json`);
  writeFileSync(archive, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
  writeFileSync(permissionPath(ctx), JSON.stringify({ ...receipt, receipt: relative(ctx.repo, archive) }, null, 2) + '\n');
  return { receipt: relative(ctx.repo, archive), subjects: rows.length, mode: receipt.mode };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2), value = flag => args[args.indexOf(flag) + 1];
  try {
    if (!args.includes('--run') || !args.includes('--state-dir')) throw Error('--run and --state-dir are required');
    console.log(JSON.stringify(recertify({ repo: process.cwd(), run: value('--run'), stateDir: value('--state-dir') },
      { resolveEscalations: args.includes('--escalations-resolved') })));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
