#!/usr/bin/env node
// Derived scheduling metadata; this is not a content audit or an approval.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, renameSync, realpathSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadStep3 } from './frontier-snapshot.mjs';
import { prerequisiteBatches } from './batch-scope-review.mjs';
import { yaml } from './pathway-lib.mjs';
import { aggregateDependencyOrder } from './autopilot/src/dependency-order.mjs';

const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const compare = (a, b) => Number(a) - Number(b) || a.localeCompare(b);
const assert = (condition, message) => { if (!condition) throw Error(message); };

/** Pure DAG calculation. Batch numbers identify owners, never imply order. */
export function computeBatchDependencyLevels(graph) {
  assert(Array.isArray(graph) && graph.length, 'No batch dependency graph');
  const owners = new Map();
  for (const row of graph) {
    assert(typeof row.batch === 'string' && row.batch && !owners.has(row.batch),
      `Invalid or duplicate batch ownership: ${row.batch}`);
    assert(Array.isArray(row.requires) && row.requires.every(id => typeof id === 'string' && id),
      `Batch ${row.batch}: requires must name batch owners`);
    owners.set(row.batch, [...new Set(row.requires)].sort(compare));
  }
  const levels = new Map(), visiting = new Set();
  const visit = (batch, path = []) => {
    assert(owners.has(batch), `Unknown prerequisite batch owner: ${batch}`);
    if (levels.has(batch)) return levels.get(batch);
    assert(!visiting.has(batch), `Batch dependency cycle: ${[...path, batch].join(' -> ')}`);
    visiting.add(batch);
    let level = 0;
    for (const supplier of owners.get(batch)) level = Math.max(level, 1 + visit(supplier, [...path, batch]));
    visiting.delete(batch);
    levels.set(batch, level);
    return level;
  };
  for (const batch of owners.keys()) visit(batch);
  return [...owners].map(([batch, requires]) => ({ batch, dependency_level: levels.get(batch), requires }))
    .sort((a, b) => a.dependency_level - b.dependency_level || compare(a.batch, b.batch));
}

/** Read graph fields only; unrelated live proof/metadata bytes are not audited. */
function graphFields(root, id, wanted = new Set(['deps', 'aliases'])) {
  const path = join(root, 'items', `${id}.md`);
  if (!existsSync(path)) return {};
  const fm = readFileSync(path, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const lines = fm.split(/\r?\n/), selected = [], seen = new Set();
  const header = /^("(?:[^"\\]|\\.)*"|'(?:[^']|'')*'|[a-zA-Z_][a-zA-Z0-9_-]*)[ \t]*:/;
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(header);
    if (!match) continue;
    const key = Object.keys(yaml().parse(`${match[1]}: null`))[0];
    if (!wanted.has(key)) continue;
    assert(!seen.has(key), `${id}: duplicate graph field ${key}`); seen.add(key);
    selected.push(lines[i]);
    while (i + 1 < lines.length && !/^[^\s#-][^\n]*:/.test(lines[i + 1])) selected.push(lines[++i]);
  }
  const parsed = yaml().parse(selected.join('\n')) ?? {};
  if (parsed.aliases === null) parsed.aliases = [];
  for (const key of wanted) if (parsed[key] !== undefined)
    assert(Array.isArray(parsed[key]) && parsed[key].every(id => typeof id === 'string' && id.trim()),
      `${id}: ${key} must name IDs`);
  return parsed;
}

function assertAcyclic(graph, label) {
  const visiting = new Set(), visited = new Set();
  const visit = (id, trail = []) => {
    if (visited.has(id)) return;
    assert(!visiting.has(id), `${label} dependency cycle: ${[...trail, id].join(' -> ')}`);
    visiting.add(id);
    for (const dep of graph.get(id) ?? []) if (graph.has(dep)) visit(dep, [...trail, id]);
    visiting.delete(id); visited.add(id);
  };
  for (const id of graph.keys()) visit(id);
}

/** Validate the original scoped DAGs, including actual source dependencies and
 * reached external context. Ownership aggregation is not an acyclicity test. */
export function validatedSchedulingGraphs(root, snapshot) {
  const pages = new Map(snapshot.pages.map(p => [p.id, [...new Set(p.requires ?? [])].sort()]));
  assertAcyclic(pages, 'Page');
  const cache = new Map(), itemGraph = new Map(), declarations = new Map(); let aliases;
  // Projected same-owner duplicates still contribute every declared edge.
  for (const page of snapshot.pages) for (const item of page.items ?? [])
    declarations.set(item.id, [...new Set([...(declarations.get(item.id) ?? []), ...(item.deps ?? [])])]);
  const fields = id => {
    if (!cache.has(id)) cache.set(id, graphFields(root, id));
    return cache.get(id);
  };
  const canonical = id => snapshot.items.has(id) || (/^[a-zA-Z0-9_-]+$/.test(id)
    && existsSync(join(root, 'items', `${id}.md`)));
  const resolve = id => {
    if (canonical(id)) return id;
    if (!aliases) {
      aliases = new Map();
      for (const name of readdirSync(join(root, 'items')).filter(n => n.endsWith('.md'))) {
        const owner = name.slice(0, -3);
        for (const alias of graphFields(root, owner, new Set(['aliases'])).aliases ?? []) if (!canonical(alias)) {
          assert(!aliases.has(alias) || aliases.get(alias) === owner, `Ambiguous alias ${alias}`);
          aliases.set(alias, owner);
        }
      }
    }
    return aliases.get(id) ?? id;
  };
  const visit = raw => {
    const id = resolve(raw);
    if (itemGraph.has(id)) return;
    // Unknown leaves stay explicit. No absent supplier is certified by this.
    const source = canonical(id) ? fields(id) : {};
    const manifest = declarations.get(id) ?? [];
    assert(Array.isArray(manifest) && manifest.every(id => typeof id === 'string' && id.trim()), `${id}: deps must name IDs`);
    const deps = [...new Set([...manifest, ...(source.deps ?? [])].map(resolve))].sort();
    itemGraph.set(id, deps);
    for (const dep of deps) visit(dep);
  };
  for (const id of snapshot.items.keys()) visit(id);
  assertAcyclic(itemGraph, 'Item');
  return { pages: [...pages], items: [...itemGraph] };
}

export function batchDependencyLevelsPath(root, run) {
  assert(/^[a-zA-Z0-9_-]+$/.test(run ?? ''), 'Invalid run');
  return join(root, 'research', `${run}-batch-dependency-levels.json`);
}

/** Recompute from current manifests and actual logical carrier dependencies. */
export function computeRunBatchDependencyLevels(root, run,
  {constructionScheduling=false, constructionSchedulingDuplicateProjection=false}={}) {
  const options = {constructionScheduling, constructionSchedulingDuplicateProjection};
  const snapshot = loadStep3(root, run, options), homes = new Map();
  for (const page of snapshot.pages) {
    assert(typeof page.id === 'string' && page.id && !homes.has(page.id),
      `Invalid or duplicate page ownership: ${page.id}`);
    homes.set(page.id, page.batch);
    assert(Array.isArray(page.requires ?? []) && (page.requires ?? []).every(id => typeof id === 'string' && id),
      `${page.id}: requires must name pages`);
    for (const item of page.items ?? []) assert(Array.isArray(item.deps ?? [])
      && (item.deps ?? []).every(id => typeof id === 'string' && id), `${item.id}: deps must name items`);
  }
  const batches = [...new Set(snapshot.pages.map(page => page.batch))].sort(compare);
  const pass = constructionScheduling
    ? { [constructionSchedulingDuplicateProjection ? 'scopeSchedulingProjectedSnapshot' : 'scopeSchedulingSnapshot']: snapshot }
    : { scopeSnapshot: snapshot };
  const graph = batches.map(batch => ({ batch, requires: prerequisiteBatches(root, run, batch, pass, options) }));
  const fineGraphs = validatedSchedulingGraphs(root, snapshot);
  // Equal-priority components preserve EVERY declared batch edge. Only the
  // original item/page graphs, not their ownership quotient, must be DAGs.
  const aggregate = aggregateDependencyOrder(new Map(graph.map(row => [row.batch, row.requires])));
  const rows = graph.map(({ batch, requires }) => ({ batch,
    dependency_level: aggregate.levels.get(batch), requires }))
    .sort((a, b) => a.dependency_level - b.dependency_level || compare(a.batch, b.batch));
  const projectedInputs = snapshot.schedulingManifestInputs ? new Map(snapshot.schedulingManifestInputs) : null;
  const manifests = batches.map(batch => [batch, projectedInputs?.get(batch)
    ?? readFileSync(join(root, 'research', `${run}-batch-${batch}.pages.json`), 'utf8')]);
  return { version: 1, run, input_sha256: digest({ manifests, graph, fineGraphs,
    ...(snapshot.schedulingIdentityInputs ? { schedulingIdentityInputs: snapshot.schedulingIdentityInputs } : {}),
    ...(snapshot.schedulingDuplicateProjection ? { schedulingDuplicateProjection: snapshot.schedulingDuplicateProjection } : {}) }),
    ...(snapshot.schedulingDuplicateProjection ? { schedulingDuplicateProjection: snapshot.schedulingDuplicateProjection } : {}), batches: rows };
}

export function writeBatchDependencyLevels(root, run, options={}) {
  const current = computeRunBatchDependencyLevels(root, run, options), path = batchDependencyLevelsPath(root, run);
  const temp = `${path}.${process.pid}.tmp`;
  writeFileSync(temp, JSON.stringify(current, null, 2) + '\n');
  renameSync(temp, path);
  return current;
}

export function checkBatchDependencyLevels(root, run) {
  const current = computeRunBatchDependencyLevels(root, run), path = batchDependencyLevelsPath(root, run);
  assert(existsSync(path), `Missing batch dependency levels: ${path}`);
  const recorded = JSON.parse(readFileSync(path, 'utf8'));
  assert(JSON.stringify(recorded) === JSON.stringify(current), `Stale batch dependency levels for ${run}; recompute before authoring`);
  return current;
}

if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) {
  try {
    const [command, ...args] = process.argv.slice(2);
    const option = name => args[args.indexOf(`--${name}`) + 1];
    assert(['write', 'check'].includes(command) && args.includes('--run'),
      'Usage: batch-dependency-levels.mjs write|check --run RUN [--root ROOT]');
    const root = args.includes('--root') ? resolve(option('root')) : process.cwd();
    const result = (command === 'write' ? writeBatchDependencyLevels : checkBatchDependencyLevels)(root, option('run'));
    console.log(`batch-dependency-levels: ${result.batches.length} batch(es); maximum level ${Math.max(...result.batches.map(row => row.dependency_level))}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
