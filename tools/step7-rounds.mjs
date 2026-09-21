// Durable evidence primitives for the owner-authorized Step-7 round protocol.
// These functions never manufacture mathematical decisions or judge verdicts.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync, renameSync, openSync, closeSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { frontmatterList } from './frontmatter-list.mjs';

const digest = (value) => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const unique = (values) => [...new Set(values)].sort();
const hashPattern = /^[a-f0-9]{64}$/;
function requireValue(condition, message) { if (!condition) throw new Error(message); }

export function freezeFrontier({ run, batches }) {
  requireValue(typeof run === 'string' && /^[A-Za-z0-9._-]+$/.test(run), 'invalid run');
  requireValue(Array.isArray(batches) && batches.length > 0, 'missing original batches');
  const owners = {};
  const normalized = batches.map((batch) => {
    requireValue(typeof batch.id === 'string' && batch.id.length > 0, 'missing batch id');
    const items = unique(batch.items.map((item) => typeof item === 'string' ? item : item.id));
    for (const id of items) {
      requireValue(typeof id === 'string' && id.length > 0, 'missing frontier item id');
      requireValue(!Object.hasOwn(owners, id), `duplicate frontier ownership: ${id}`);
      owners[id] = batch.id;
    }
    return { id: batch.id, items };
  }).sort((a, b) => a.id.localeCompare(b.id));
  requireValue(new Set(normalized.map((b) => b.id)).size === normalized.length, 'duplicate batch id');
  const ids = unique(Object.keys(owners));
  requireValue(ids.length > 0, 'empty original frontier');
  const payload = { version: 1, run, batches: normalized, ids };
  return { ...payload, sha256: digest(payload) };
}

export function validateFrontier(frontier) {
  const rebuilt = freezeFrontier(frontier);
  requireValue(rebuilt.sha256 === frontier.sha256 && JSON.stringify(rebuilt.ids) === JSON.stringify(frontier.ids), 'original frontier changed');
  return rebuilt;
}

/** Declared dependencies propagate transitively. Other links are examination
 * candidates, not proof-dependency declarations. Keep them separate so an
 * explanatory link cannot turn a reference cycle into library-wide impact. */
export function readLibraryItems(repo) {
  return readdirSync(join(repo, 'items')).filter((name) => name.endsWith('.md')).sort().map((name) => {
    const text = readFileSync(join(repo, 'items', name), 'utf8');
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    requireValue(match, `missing frontmatter: ${name}`);
    const fm = match[1];
    const scalar = (key) => fm.match(new RegExp(`^${key}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`, 'm'))?.[1]?.trim();
    const id = scalar('id');
    requireValue(id === name.slice(0, -3), `item id mismatch: ${name}`);
    const body = text.slice(match[0].length);
    const links = [...body.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map((m) => m[1]);
    const deps = unique([...frontmatterList(fm, 'deps'), ...frontmatterList(fm, 'justified_by'), ...frontmatterList(fm, 'forward_refs')]);
    const references = unique([...links, ...frontmatterList(fm, 'external_refs')]).filter(id => !deps.includes(id));
    return { id, deps, references, body_links: unique(links), aliases: frontmatterList(fm, 'aliases'), published: scalar('status') === 'published', sha256: digest(text) };
  });
}

export function discoverDownstream({ items, repairedIds }) {
  const byId = new Map(items.map((item) => [item.id, item]));
  requireValue(byId.size === items.length, 'duplicate library item id');
  const aliases = new Map();
  for (const item of items) for (const alias of item.aliases ?? []) {
    // Match depcheck: a canonical item id always wins over an alias.
    if (byId.has(alias)) continue;
    requireValue(!aliases.has(alias) || aliases.get(alias) === item.id, `ambiguous item alias: ${alias}`);
    aliases.set(alias, item.id);
  }
  const consumers = new Map(), references = new Map();
  for (const item of items) for (const dep of item.deps ?? []) {
    const supplier = aliases.get(dep) ?? dep;
    if (!consumers.has(supplier)) consumers.set(supplier, new Set());
    consumers.get(supplier).add(item.id);
  }
  for (const item of items) for (const ref of item.references ?? []) {
    const supplier = aliases.get(ref) ?? ref;
    if (!references.has(supplier)) references.set(supplier, new Set());
    references.get(supplier).add(item.id);
  }
  const roots = unique(repairedIds);
  for (const id of roots) requireValue(byId.has(id), `repaired item missing: ${id}`);
  const impacts = new Map();
  for (const root of roots) {
    const queue = [[root]], visited = new Set([root]), paths = new Map();
    for (let i = 0; i < queue.length; i++) {
      const path = queue[i];
      for (const id of [...(consumers.get(path.at(-1)) ?? [])].sort()) {
        if (visited.has(id)) continue;
        visited.add(id);
        const next = [...path, id];
        queue.push(next);
        paths.set(id, next);
      }
    }
    // Examine references to the root or a declared transitive consumer, but
    // never traverse through a reference-only candidate. A repair to that
    // candidate makes it a new root on the next closure pass.
    for (const path of queue) for (const id of [...(references.get(path.at(-1)) ?? [])].sort()) {
      if (id !== root && !paths.has(id)) paths.set(id, [...path, id]);
    }
    for (const [id, path] of paths) {
      if (!impacts.has(id)) impacts.set(id, { id, published: Boolean(byId.get(id).published), suppliers: [], paths: [] });
      impacts.get(id).suppliers.push(root);
      impacts.get(id).paths.push(path);
    }
  }
  return [...impacts.values()].sort((a, b) => a.id.localeCompare(b.id));
}

export function partitionImpacts(ids, count = 3, items = []) {
  requireValue(count === 3, 'Step 7 requires exactly three owner agents');
  const groups = Array.from({ length: count }, () => []);
  const targets = new Set(ids), adjacent = new Map([...targets].map((id) => [id, new Set()]));
  const canonical = new Set(items.map((item) => item.id));
  const aliases = new Map(items.flatMap((item) => (item.aliases ?? []).filter((alias) => !canonical.has(alias)).map((alias) => [alias, item.id])));
  // Dependence-connected targets share a writer lane. Different lanes cannot
  // observe one another's target while it is being repaired.
  for (const item of items) if (targets.has(item.id)) for (const raw of item.deps ?? []) {
    const dep = aliases.get(raw) ?? raw;
    if (targets.has(dep)) { adjacent.get(item.id).add(dep); adjacent.get(dep).add(item.id); }
  }
  const visited = new Set(), components = [];
  for (const root of unique(ids)) {
    if (visited.has(root)) continue;
    const queue = [root]; visited.add(root);
    for (let i = 0; i < queue.length; i++) for (const id of adjacent.get(queue[i])) {
      if (!visited.has(id)) { visited.add(id); queue.push(id); }
    }
    components.push(queue.sort());
  }
  components.sort((a, b) => b.length - a.length || a[0].localeCompare(b[0]));
  for (const component of components) {
    const lane = groups.reduce((best, group, index) => group.length < groups[best].length ? index : best, 0);
    groups[lane].push(...component);
  }
  for (const group of groups) group.sort();
  return groups;
}

/** Decisions refer to the rejected carrier, not the repaired carrier. A repair
 * does not erase that round's confirmed fatal count. Duplicate/superseded rows
 * count once, using the last row in the append-only round ledger. */
export function assessFatalThreshold({ frontier, round, expectedIds, decisions }) {
  validateFrontier(frontier);
  requireValue(Number.isInteger(round) && round >= 1, 'invalid adjudication round');
  const expected = unique(expectedIds);
  const latest = new Map();
  for (const row of decisions) if (row.run === frontier.run && row.round === round) latest.set(row.id, row);
  const errors = [], fatalIds = [];
  const original = new Set(frontier.ids);
  for (const id of expected) {
    const row = latest.get(id);
    if (!row) { errors.push(`missing adjudication: ${id}`); continue; }
    if (!['confirmed-fatal', 'rejected-finding', 'uncertain'].includes(row.decision)) errors.push(`invalid adjudication: ${id}`);
    if (row.decision === 'uncertain' || row.resolved !== true) errors.push(`unresolved adjudication: ${id}`);
    if (typeof row.basis !== 'string' || !row.basis.trim()) errors.push(`missing logical basis: ${id}`);
    if (!hashPattern.test(row.item_sha256 ?? '')) errors.push(`missing adjudicated carrier hash: ${id}`);
    if (row.decision === 'confirmed-fatal' && original.has(id)) fatalIds.push(id);
  }
  for (const id of latest.keys()) if (!expected.includes(id)) errors.push(`unexpected adjudication: ${id}`);
  return { round, originalCount: frontier.ids.length, fatalIds: unique(fatalIds), fatalCount: fatalIds.length, belowThreshold: errors.length === 0 && fatalIds.length * 20 < frontier.ids.length, errors };
}

/** All receipts are collected first. Certification is a single stable barrier,
 * with no queue-predecessor freshness requirement and no per-item reseal loop. */
export function certifyRound({ run, round, phase, expectedIds, receipts, activeWriters, beforeHashes, afterHashes }) {
  requireValue(Array.isArray(activeWriters) && activeWriters.length === 0, 'certification requires all writers to drain');
  requireValue(Number.isInteger(round) && round >= 0, 'invalid certification round');
  requireValue(['7.3', '7.7', '7.9'].includes(phase), 'invalid certification phase');
  const ids = unique(expectedIds), latest = new Map();
  for (const row of receipts) if (row.run === run && row.round === round && row.phase === phase) latest.set(row.id, row);
  for (const id of ids) {
    requireValue(hashPattern.test(beforeHashes[id] ?? ''), `missing current hash: ${id}`);
    requireValue(beforeHashes[id] === afterHashes[id], `writer changed item during certification: ${id}`);
    const row = latest.get(id);
    requireValue(row && row.item_sha256 === afterHashes[id], `missing or stale round receipt: ${id}`);
    requireValue(row.resolved === true && typeof row.basis === 'string' && row.basis.trim(), `unresolved certification: ${id}`);
  }
  requireValue(JSON.stringify(Object.entries(beforeHashes).sort()) === JSON.stringify(Object.entries(afterHashes).sort()), 'library changed during certification');
  const payload = { version: 1, run, round, phase, ids, hashes: Object.fromEntries(ids.map((id) => [id, afterHashes[id]])), library_sha256: digest(Object.entries(afterHashes).sort()) };
  return { ...payload, sha256: digest(payload) };
}

export function roundStatePath(repo, run) { return join(repo, 'research', `${run}-step7-rounds.json`); }
export function loadRoundState(path) {
  if (!existsSync(path)) return null;
  const state = JSON.parse(readFileSync(path, 'utf8'));
  requireValue(state.version === 1 && Number.isInteger(state.revision) && state.revision >= 0, 'invalid Step-7 round state');
  validateFrontier(state.frontier);
  return state;
}

/** Optimistic revision plus an exclusive lock prevents overlapping engine
 * processes from losing evidence. A changed original frontier is never adopted. */
export function saveRoundState(path, state, expectedRevision = null) {
  mkdirSync(dirname(path), { recursive: true });
  const lock = `${path}.lock`, temporary = `${path}.${process.pid}.tmp`;
  const fd = openSync(lock, 'wx');
  try {
    const previous = loadRoundState(path);
    requireValue((previous?.revision ?? null) === expectedRevision, 'Step-7 state revision conflict');
    validateFrontier(state.frontier);
    requireValue(!previous || previous.frontier.sha256 === state.frontier.sha256, 'cannot replace frozen original frontier');
    const next = { ...state, version: 1, revision: (previous?.revision ?? -1) + 1 };
    writeFileSync(temporary, `${JSON.stringify(next, null, 2)}\n`, { flag: 'wx' });
    renameSync(temporary, path);
    return next;
  } finally {
    if (existsSync(temporary)) unlinkSync(temporary);
    closeSync(fd); unlinkSync(lock);
  }
}
