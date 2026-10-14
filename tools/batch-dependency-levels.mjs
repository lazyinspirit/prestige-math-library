#!/usr/bin/env node
// Derived scheduling metadata; this is not a content audit or an approval.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, renameSync, realpathSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadStep3 } from './frontier-snapshot.mjs';
import { prerequisiteBatches } from './batch-scope-review.mjs';

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

export function batchDependencyLevelsPath(root, run) {
  assert(/^[a-zA-Z0-9_-]+$/.test(run ?? ''), 'Invalid run');
  return join(root, 'research', `${run}-batch-dependency-levels.json`);
}

/** Recompute from current manifests and actual logical carrier dependencies. */
export function computeRunBatchDependencyLevels(root, run, {constructionScheduling=false}={}) {
  const snapshot = loadStep3(root, run), homes = new Map();
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
  const pass = { scopeSnapshot: snapshot };
  const graph = batches.map(batch => ({ batch, requires: prerequisiteBatches(root, run, batch, pass,{constructionScheduling}) }));
  const rows = computeBatchDependencyLevels(graph);
  const manifests = batches.map(batch => [batch,
    readFileSync(join(root, 'research', `${run}-batch-${batch}.pages.json`), 'utf8')]);
  return { version: 1, run, input_sha256: digest({ manifests, graph }), batches: rows };
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
