#!/usr/bin/env node
// finite-smoke.mjs — small finite-model falsification checks selected by proof contracts.
//
//   node tools/finite-smoke.mjs research/level<n>-proof-contracts.json
//   node tools/finite-smoke.mjs --self-test
//
// A pass is deliberately NOT a proof of a general statement.  These checks only
// search a bounded, independently computed model family for counterexamples to
// a named invariant which the item's text explicitly asserts.  They are useful
// for convention, endpoint, and quantifier bugs; the proof contract and human
// audit remain the mathematical gate.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const requested = option('--items')?.split(',').map((value) => value.trim()).filter(Boolean) ?? null;
const CHECKS = makeChecks();

if (argv.includes('--self-test')) {
  const outcomes = Object.keys(CHECKS).map((name) => ({ name, ...CHECKS[name]({}) }));
  const failures = outcomes.filter((outcome) => !outcome.ok);
  if (asJson) console.log(JSON.stringify({ ok: failures.length === 0, outcomes }, null, 2));
  else {
    for (const outcome of outcomes) console.log(`${outcome.ok ? 'PASS' : 'FAIL'} ${outcome.name}: ${outcome.summary}`);
  }
  process.exit(failures.length ? 1 : 0);
}

const contractPath = argv.find((arg) => !arg.startsWith('--') && arg !== option('--items'));
if (!contractPath) usage();

const errors = [];
const outcomes = [];
let document;
try {
  document = JSON.parse(readFileSync(resolvePath(contractPath), 'utf8'));
} catch (cause) {
  errors.push({ code: 'contract-read', message: `${contractPath}: ${cause.message}` });
  finish();
}
if (document?.version !== 1 || !Array.isArray(document?.scope) || typeof document?.contracts !== 'object') {
  errors.push({ code: 'contract-shape', message: 'expected a version-1 proof contract with scope and contracts' });
  finish();
}

const ids = requested ? document.scope.filter((id) => requested.includes(id)) : document.scope;
for (const id of requested ?? []) if (!document.scope.includes(id)) errors.push({ code: 'selection-outside-scope', message: `${id} is outside the contract scope`, id });

for (const id of ids) {
  const contract = document.contracts[id];
  for (const smoke of contract?.finite_smoke ?? []) runSmoke(id, smoke);
}
finish();

function runSmoke(id, smoke) {
  if (!smoke || typeof smoke !== 'object' || Array.isArray(smoke)) {
    errors.push({ code: 'smoke-shape', message: 'finite_smoke entries must be objects', id });
    return;
  }
  const check = CHECKS[smoke.check];
  if (!check) {
    errors.push({ code: 'smoke-check', message: `unknown finite smoke check ${smoke.check ?? '(missing)'}`, id });
    return;
  }
  if (typeof smoke.asserts !== 'string' || !smoke.asserts.trim()) {
    errors.push({ code: 'smoke-assertion', message: `${smoke.check} needs an exact assertion excerpt`, id });
    return;
  }
  const itemPath = join(REPO, 'items', `${id}.md`);
  if (!existsSync(itemPath)) {
    errors.push({ code: 'item-missing', message: `items/${id}.md does not exist`, id });
    return;
  }
  if (!normalise(readFileSync(itemPath, 'utf8')).includes(normalise(smoke.asserts))) {
    errors.push({ code: 'smoke-assertion-mismatch', message: `${smoke.check}'s assertion excerpt is not present in ${id}`, id });
    return;
  }
  const outcome = check(smoke);
  outcomes.push({ id, check: smoke.check, ...outcome });
  if (!outcome.ok) errors.push({ code: 'finite-countermodel', message: `${smoke.check}: ${outcome.summary}`, id });
}

function makeChecks() { return {
  'tree-characterisation': ({ max_vertices = 5 }) => {
    const max = boundedInteger(max_vertices, 5, 0, 5);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        const connected = components(graph) === (vertices === 0 ? 0 : 1);
        const tree = vertices > 0 && connected && acyclic(graph);
        const right = connected && graph.edges.length === vertices - 1;
        if (tree !== right) return counterexample('tree iff connected and n-1 edges', graph);
      }
    }
    return { ok: true, summary: `checked all simple graphs through ${max} vertices` };
  },
  'forest-edge-component-count': ({ max_vertices = 5 }) => {
    const max = boundedInteger(max_vertices, 5, 0, 5);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        const forest = acyclic(graph);
        const formula = graph.edges.length === vertices - components(graph);
        if (forest !== formula) return counterexample('forest iff |E| = |V| - components', graph);
      }
    }
    return { ok: true, summary: `checked all simple graphs through ${max} vertices` };
  },
  'induced-complement-commutes': ({ max_vertices = 4 }) => {
    const max = boundedInteger(max_vertices, 4, 0, 4);
    for (let vertices = 0; vertices <= max; vertices += 1) {
      for (const graph of graphs(vertices)) {
        for (let mask = 0; mask < (1 << vertices); mask += 1) {
          const subset = [...Array(vertices).keys()].filter((vertex) => mask & (1 << vertex));
          const left = induced(complement(graph), subset);
          const right = complement(induced(graph, subset));
          if (!sameEdges(left, right)) return counterexample('complement(induced G) = induced(complement G)', graph, subset);
        }
      }
    }
    return { ok: true, summary: `checked all simple graphs and vertex subsets through ${max} vertices` };
  },
  'cyclic-subgroup-lagrange': ({ max_modulus = 24 }) => {
    const max = boundedInteger(max_modulus, 24, 1, 200);
    for (let modulus = 1; modulus <= max; modulus += 1) {
      for (let divisor = 1; divisor <= modulus; divisor += 1) {
        if (modulus % divisor) continue;
        const subgroup = new Set();
        for (let multiplier = 0; multiplier < modulus; multiplier += 1) subgroup.add((multiplier * divisor) % modulus);
        if (subgroup.size !== modulus / divisor || modulus % subgroup.size !== 0) {
          return { ok: false, summary: `Z/${modulus}Z with generator ${divisor} has computed subgroup size ${subgroup.size}` };
        }
      }
    }
    return { ok: true, summary: `checked cyclic subgroups of Z/nZ through n = ${max}` };
  },
}; }

function graphs(vertices) {
  const pairs = [];
  for (let left = 0; left < vertices; left += 1) for (let right = left + 1; right < vertices; right += 1) pairs.push([left, right]);
  const count = 1 << pairs.length;
  return Array.from({ length: count }, (_, mask) => ({
    vertices,
    edges: pairs.filter((_, index) => mask & (1 << index)),
  }));
}
function components(graph) {
  const seen = new Set();
  let count = 0;
  const adjacent = adjacency(graph);
  for (let start = 0; start < graph.vertices; start += 1) {
    if (seen.has(start)) continue;
    count += 1;
    const queue = [start];
    seen.add(start);
    for (let index = 0; index < queue.length; index += 1) {
      for (const next of adjacent[queue[index]]) if (!seen.has(next)) { seen.add(next); queue.push(next); }
    }
  }
  return count;
}
function acyclic(graph) {
  const parent = Array.from({ length: graph.vertices }, (_, value) => value);
  const find = (value) => {
    while (parent[value] !== value) { parent[value] = parent[parent[value]]; value = parent[value]; }
    return value;
  };
  for (const [left, right] of graph.edges) {
    const a = find(left); const b = find(right);
    if (a === b) return false;
    parent[a] = b;
  }
  return true;
}
function adjacency(graph) {
  const out = Array.from({ length: graph.vertices }, () => []);
  for (const [left, right] of graph.edges) { out[left].push(right); out[right].push(left); }
  return out;
}
function complement(graph) {
  const existing = new Set(graph.edges.map(([a, b]) => `${a}:${b}`));
  const edges = [];
  for (let a = 0; a < graph.vertices; a += 1) for (let b = a + 1; b < graph.vertices; b += 1) if (!existing.has(`${a}:${b}`)) edges.push([a, b]);
  return { vertices: graph.vertices, edges };
}
function induced(graph, subset) {
  const map = new Map(subset.map((vertex, index) => [vertex, index]));
  return { vertices: subset.length, edges: graph.edges.filter(([a, b]) => map.has(a) && map.has(b)).map(([a, b]) => [map.get(a), map.get(b)]) };
}
function sameEdges(left, right) {
  if (left.vertices !== right.vertices || left.edges.length !== right.edges.length) return false;
  const edges = new Set(left.edges.map(([a, b]) => `${a}:${b}`));
  return right.edges.every(([a, b]) => edges.has(`${a}:${b}`));
}
function counterexample(claim, graph, subset = null) {
  const subsetText = subset ? `, subset {${subset.join(',')}}` : '';
  return { ok: false, summary: `${claim} fails for V=${graph.vertices}, E={${graph.edges.map(([a, b]) => `${a}-${b}`).join(',')}}${subsetText}` };
}
function boundedInteger(value, fallback, min, max) {
  const numeric = Number(value ?? fallback);
  if (!Number.isInteger(numeric) || numeric < min || numeric > max) throw new Error(`bound must be an integer from ${min} to ${max}`);
  return numeric;
}
function normalise(value) { return value.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim(); }
function option(flag) { const index = argv.indexOf(flag); return index >= 0 ? argv[index + 1] : undefined; }
function resolvePath(path) { return path.startsWith('/') ? path : join(process.cwd(), path); }
function usage() { console.error('usage: node tools/finite-smoke.mjs <contract.json> [--items id,id] [--json] | --self-test'); process.exit(2); }
function finish() {
  const result = { ok: errors.length === 0, errors, outcomes };
  if (asJson) console.log(JSON.stringify(result, null, 2));
  else {
    for (const outcome of outcomes) console.log(`${outcome.ok ? 'PASS' : 'FAIL'} [${outcome.id}] ${outcome.check}: ${outcome.summary}`);
    for (const error of errors) console.error(`ERROR ${error.code}${error.id ? ` [${error.id}]` : ''}: ${error.message}`);
    console.log(`finite-smoke: ${errors.length} error(s), ${outcomes.length} check(s)`);
  }
  process.exit(errors.length ? 1 : 0);
}
