// Actual final metadata/render preparation, shared by both native engines.
// A prepared record is not a gate pass and never supplies worker coverage.
import { existsSync, lstatSync, readFileSync, writeFileSync, mkdirSync, renameSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { scopedTree } from './step6-report-scope.mjs';
import { scopedReadinessTree } from './step6-scoped-tree.mjs';
import { ownedStep6Paths } from './step6-owned-inputs.mjs';
import { runScope } from './step6-lib.mjs';

export const digest = value => createHash('sha256').update(value).digest('hex');
export const readJSON = file => JSON.parse(readFileSync(file, 'utf8'));
export function atomicJSON(file, value) {
  mkdirSync(dirname(file), { recursive: true });
  const temp = file + '.' + randomUUID() + '.tmp';
  writeFileSync(temp, JSON.stringify(value, null, 2) + '\n'); renameSync(temp, file);
}
const stateDirectories = new Map();
const stateKey = (root, run, physics) => `${resolve(root)}\0${run}\0${physics}`;
export function registerStateDirectory(root, run, { physics = false, stateDir } = {}) {
  if (!stateDir) return;
  const directory = resolve(root, stateDir);
  if (!directory.startsWith(resolve(root) + '/')) throw Error('Step-6 state directory must stay inside its own workspace');
  const file = join(directory, 'state.json');
  if (existsSync(file)) {
    const state = readJSON(file);
    if (state.run && state.run !== run) throw Error('Foreign configured Step-6 state');
  }
  stateDirectories.set(stateKey(root, run, physics), directory);
}
export function stateDirectory(root, run, physics = false) {
  const registered = stateDirectories.get(stateKey(root, run, physics));
  if (registered) return registered;
  if (process.env.PRESTIGE_STEP6_STATE_DIR) {
    registerStateDirectory(root, run, { physics, stateDir: process.env.PRESTIGE_STEP6_STATE_DIR });
    return stateDirectories.get(stateKey(root, run, physics));
  }
  return join(root, physics ? '.physics-autopilot' : '.autopilot', run);
}
export const preparedPath = (root, run, physics = false) => join(stateDirectory(root, run, physics), 'step6-prepared.json');
export function sourceState(root, run, { physics = false, includeDerived = true } = {}) {
  const ownedPaths = ownedStep6Paths(root, run, { physics });
  const scope = runScope(run, root);
  const native = scopedReadinessTree(run, root, { scope, physics, ownedPaths, includeRows: true });
  const tree = includeDerived ? scopedTree(root, run, { scope, physics, ownedPaths, native })
    : Object.fromEntries(native.protected_tree_rows.map(row => { const split = row.indexOf('\0'); return [row.slice(0, split), row.slice(split + 1)]; }));
  // The shared selectors already omit these exact report products. Keep the
  // exclusion explicit so a later selector change cannot create a self-seal.
  for (const suffix of ['step6-report.response.json', 'step6-report.md', 'step6-report-integrity.json'])
    delete tree[`research/${run}-${suffix}`];
  return { tree, sha256: digest(JSON.stringify(tree)),
    physicalPaths: [...new Set([...native.protected_tree_paths, ...Object.keys(tree).filter(path => !path.includes('#'))])].sort() };
}
export function gateInventory(gates) {
  return gates.map(gate => ({ id: gate.id, argv: typeof gate.argv === 'function' ? gate.argv() : [...gate.argv],
    needs: typeof gate.needs === 'function' ? gate.needs() : gate.needs ?? [],
    required: gate.required !== false, liveness: gate.liveness ?? null,
    projection: gate.projectResult?.toString() ?? null, ownerReviewInputs: gate.ownerReviewInputs ?? [] }));
}
export function validatePrepared(root, run, { physics = false, gates, stages } = {}) {
  const cert = readJSON(preparedPath(root, run, physics));
  if (cert.version !== 1 || cert.kind !== 'actual-step6-format-metadata-preparation' || cert.run !== run
    || cert.physics !== physics || cert.mathematical_review !== false || cert.gate_pass_created !== false
    || !Array.isArray(cert.metadata) || !cert.metadata.length || !Array.isArray(cert.formatting)
    || cert.formatting.length !== cert.metadata.length || cert.formatting.some(row => row.errors?.length)
    || !Number.isFinite(Date.parse(cert.startedAt)) || !Number.isFinite(Date.parse(cert.completedAt))
    || Date.parse(cert.completedAt) < Date.parse(cert.startedAt) || Date.parse(cert.completedAt) > Date.now())
    throw Error('Missing or invalid actual Step-6 preparation');
  if (sourceState(root, run, { physics }).sha256 !== cert.source.sha256)
    throw Error('Step-6 prepared source or derived evidence changed');
  if (gates && (stages?.length !== 1 || stages[0] !== '6-final-validation-v3'
    || digest(JSON.stringify(gateInventory(gates))) !== cert.gateInventorySha256))
    throw Error('Step-6 prepared gate inventory is not the actual final battery');
  return cert;
}

export async function checkMetadataAndRender(root, run, { physics = false } = {}) {
  const prefix = physics ? './physics-support/' : './';
  const { runPages, dependencyLevels } = await import(prefix + 'item-dependency-levels.mjs');
  const { splitFrontmatter } = await import(prefix + 'step6-lib.mjs');
  const { yaml } = await import(prefix + 'pathway-lib.mjs');
  const { scanProofFiles } = await import(prefix + 'proof-layout.mjs');
  const { proofLayoutInputs, noProofRequired } = await import(prefix + 'proof-layout-receipt.mjs');
  const { LAYOUT_GATES } = await import(prefix + 'proof-layout-core.mjs');
  const startedAt = new Date().toISOString();
  const before = sourceState(root, run, { physics, includeDerived: false });
  const pages = runPages(root, run), graph = dependencyLevels(pages);
  if (graph.errors.length || !graph.items.size) throw Error(graph.errors.join('\n') || 'Empty final frontier');
  const equalArray = (a, b) => Array.isArray(a) && Array.isArray(b)
    && JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
  const metadata = [...graph.items].sort(([a], [b]) => graph.levels.get(a) - graph.levels.get(b) || a.localeCompare(b))
    .map(([id, { item, page }]) => {
      const file = `items/${id}.md`, bytes = readFileSync(join(root, file)), fm = yaml().parse(splitFrontmatter(bytes.toString('utf8')).frontmatter);
      if (fm.id !== id || fm.kind !== item.kind || fm.title !== item.title || !item.title?.trim()
        || !['draft', 'published'].includes(fm.status) || fm.dependency_level !== graph.levels.get(id)
        || !equalArray(fm.deps, item.deps) || (item.domain !== undefined && fm.domain !== item.domain))
        throw Error(`Source/manifest metadata mismatch: ${id}`);
      return { id, file, page: page.id, dependency_level: graph.levels.get(id), carrierSha256: digest(bytes),
        manifestSha256: digest(JSON.stringify(item)), verdict: 'format-metadata-pass',
        metadata: { verdict: 'pass', kind: fm.kind, title: fm.title, status: fm.status, deps: fm.deps,
          dependency_level: fm.dependency_level, manifestMatched: true } };
    });
  const layoutInputs = proofLayoutInputs(run, root);
  // This is an actual current renderer call, in the same supplier-first order.
  const formatting = scanProofFiles(metadata.map(row => row.file), root);
  if (formatting.length !== metadata.length || formatting.some((row, i) => row.file !== metadata[i].file))
    throw Error('Renderer did not return the complete ordered final frontier');
  const problems = formatting.flatMap(row => row.errors.map(error => `${row.file}: ${error.message ?? JSON.stringify(error)}`));
  if (problems.length) throw Error(problems.join('\n'));
  const after = sourceState(root, run, { physics, includeDerived: false });
  if (after.sha256 !== before.sha256) {
    const changed = [...new Set([...Object.keys(before.tree), ...Object.keys(after.tree)])]
      .filter(path => before.tree[path] !== after.tree[path]);
    atomicJSON(join(stateDirectory(root, run, physics), 'step6-preparation-input-drift.json'), {
      run, at: new Date().toISOString(), changed: changed.map(path => ({ path,
        before: before.tree[path] ?? null, after: after.tree[path] ?? null })),
    });
    throw Error('Selected source/context changed during actual metadata/render checks: ' + changed.join(', '));
  }
  if (proofLayoutInputs(run, root).fingerprint !== layoutInputs.fingerprint)
    throw Error('Renderer source/input dependencies changed during actual rendering');
  const rendered = new Map(formatting.map(row => [row.file, row]));
  const items = layoutInputs.scope.files.map(file => {
    if (!rendered.has(file)) throw Error(`Native layout scope lacks actual rendering: ${file}`);
    return rendered.get(file);
  });
  const steps = items.reduce((n, item) => n + item.rows.reduce((m, row) => m + row.sourceSteps, 0), 0);
  const permittedEmpty = physics && noProofRequired(layoutInputs.scope, root);
  if (!Number.isInteger(steps) || (steps < 1 && !permittedEmpty)) throw Error('Actual renderer checked no required proof steps');
  const gates = Object.fromEntries(LAYOUT_GATES.map(gate => [gate,
    (steps > 0 || permittedEmpty) && !items.some(item => item.errors.some(error => error.gate === gate)) ? 'pass' : 'fail']));
  // Materialize exactly the original native layout schema from the ONE actual
  // scan above. This records formatting evidence, never mathematical judgment.
  const layoutReceipt = { version: 1, run, ...layoutInputs, steps, gates, items };
  return { startedAt, reviewedAt: new Date().toISOString(), metadata, formatting, layoutReceipt };
}

// A quiet scheduling tick stats only the previously selected carriers and their
// parent directories. Full native source reconstruction occurs only on change,
// at the initial actual preparation and at final transaction authorization.
export function statFingerprint(root, paths) {
  const selected = new Set(paths.map(path => resolve(root, path)));
  for (const path of [...selected]) selected.add(dirname(path));
  for (const name of ['research', 'items', 'library', 'tools', 'briefs']) selected.add(join(root, name));
  return digest(JSON.stringify([...selected].sort().map(path => {
    try { const stat = lstatSync(path, { bigint: true }); return [path, String(stat.dev), String(stat.ino), String(stat.mode), String(stat.size), String(stat.mtimeNs), String(stat.ctimeNs)]; }
    catch (error) { if (['ENOENT', 'ENOTDIR'].includes(error.code)) return [path, null]; throw error; }
  })));
}


export function assertFreshStep6State(ctx, { physics = false } = {}) {
  registerStateDirectory(ctx.repo, ctx.run, { physics, stateDir: ctx.config?.stateDir ?? ctx.stateDir });
  const directory = stateDirectory(ctx.repo, ctx.run, physics);
  const file = join(directory, 'state.json');
  if (!existsSync(file)) return;
  const state = readJSON(file);
  if (state.run && state.run !== ctx.run) throw Error('Foreign state directory');
  let binding = state.step6Cutover;
  const cutoverChain = new Set();
  while (binding) {
    if (cutoverChain.has(binding.receipt)) throw Error('Cyclic native Step-6 cutover chain');
    cutoverChain.add(binding.receipt);
    if (typeof binding.receipt !== 'string'
      || !new RegExp(`^research/${ctx.run}-step6-cutover-[a-f0-9]{24}\\.json$`).test(binding.receipt))
      throw Error('Invalid native Step-6 cutover binding');
    const receiptBytes = readFileSync(join(ctx.repo, binding.receipt));
    const receipt = JSON.parse(receiptBytes.toString());
    if (digest(receiptBytes) !== binding.sha256 || receipt.version !== 1
      || receipt.kind !== 'native-current-input-step6-v3-cutover' || receipt.run !== ctx.run
      || receipt.coverage_created !== false || receipt.earlier_stages_changed !== false)
      throw Error('Invalid native Step-6 cutover receipt');
    const expectedArchive = join(directory, 'step6-cutover-' + binding.receipt.match(/([a-f0-9]{24})\.json$/)[1]);
    if (resolve(ctx.repo, receipt.archive ?? '') !== expectedArchive
      || !receipt.archive_sha256?.['state.json'] || !receipt.archive_sha256?.['events.jsonl']
      || !receipt.archive_sha256?.['authorization.json']) throw Error('Invalid native Step-6 archive identity');
    for (const [path, sha256] of Object.entries(receipt.archive_sha256 ?? {})) {
      if (path.startsWith('/') || path.split('/').some(part => part === '..' || part === '.'))
        throw Error('Unsafe native Step-6 cutover archive');
      if (digest(readFileSync(join(expectedArchive, path))) !== sha256)
        throw Error('Changed historical Step-6 archive: ' + path);
    }
    const prefix = Object.fromEntries(Object.entries(state.stages ?? {}).filter(([id]) => !/^6-/.test(id)));
    if (digest(JSON.stringify(prefix)) !== receipt.guards.prefix_stages_sha256)
      throw Error('Historical earlier stages changed after Step-6 cutover');
    binding = receipt.previous_cutover ?? null;
  }
  const current = new Set(['6-prepare-v3', '6-pathway-author-v3', '6-final-validation-v3', '6-finalize-v3']);
  if (Object.keys(state.stages ?? {}).some(id => /^6-/.test(id) && !current.has(id))
    || /^6-/.test(state.stage ?? '') && !current.has(state.stage))
    throw Error('Historical Step-6 frozen state requires an explicit guarded cutover; no legacy pass or receipt is adopted by the new suffix');
}
