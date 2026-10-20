// Durable evidence primitives for the owner-authorized Step-5 round protocol.
// These functions never manufacture mathematical decisions or judge verdicts.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync, renameSync, openSync, closeSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { frontmatterList } from './frontmatter-list.mjs';
import { statementHash } from './step5-statement.mjs';
import { itemHashGuard } from './item-hash.mjs';

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

// An active independent writer may briefly remove or truncate a file between
// directory enumeration and open. Retry only those local shape/read races;
// persistent strict reads remain hard errors; explicit run scope below can
// record independently active foreign authoring carriers as non-pass observations.
const itemReadWait = new Int32Array(new SharedArrayBuffer(4));
function readLibraryItemSource(path, name) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      const text = readFileSync(path, 'utf8');
      const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
      if (!match) throw Object.assign(new Error(`missing frontmatter: ${name}`), { transientItemRead: true });
      const id = match[1].match(/^id:\s*["']?([^\r\n"']+)["']?\s*$/m)?.[1]?.trim();
      if (id !== name.slice(0, -3))
        throw Object.assign(new Error(`item id mismatch: ${name}`), { transientItemRead: true });
      return text;
    } catch (error) {
      if (attempt === 5 || (error.code !== 'ENOENT' && error.transientItemRead !== true)) throw error;
      // Five waits total at most 3.1 seconds per transient file. No model, write, skip,
      // corpus rescan or unbounded busy retry occurs here.
      Atomics.wait(itemReadWait, 0, 0, 100 * 2 ** attempt);
    }
  }
}

/** Dependencies and other links are direct examination candidates, not edit
 * mandates. Only a new consumer statement change propagates another hop. */
// Explicit run context enables only a narrow independently-active foreign
// authoring-carrier exclusion. No process-global run or filename-prefix ownership exists.
function scopedInventoryContext(repo, run, items, requiredIds, invalid) {
  requireValue(/^[A-Za-z0-9._-]+$/.test(run), 'invalid scoped inventory run');
  const dir = join(repo, 'research', `${run}-step5-v2`), frontierPath = join(dir, 'frontier.json');
  const frontier = new Set();
  if (existsSync(frontierPath)) {
    const saved = validateFrontier(JSON.parse(readFileSync(frontierPath, 'utf8')));
    requireValue(saved.run === run, 'scoped inventory frontier run mismatch');
    for (const id of saved.ids) frontier.add(id);
  }
  // Current manifest additions remain strict alongside the original frontier.
  const manifests = readdirSync(join(repo, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)));
  requireValue(manifests.length > 0, 'scoped inventory requires current run manifests');
  for (const name of manifests) for (const page of JSON.parse(readFileSync(join(repo, 'research', name), 'utf8')))
    for (const item of page.items) frontier.add(item.id);
  const byId = new Map(items.map(item => [item.id, item])), aliases = new Map();
  const initial = join(dir, 'initial-1.json');
  const original = existsSync(initial) ? JSON.parse(readFileSync(initial, 'utf8')) : null;
  const canonical = new Set([...byId.keys(), ...invalid.map(row => row.id), ...Object.keys(original?.before ?? {})]);
  for (const [alias, id] of Object.entries(original?.before_aliases ?? {})) aliases.set(alias, new Set([id]));
  for (const item of items) for (const alias of item.aliases ?? []) {
    if (!aliases.has(alias)) aliases.set(alias, new Set());
    aliases.get(alias).add(item.id);
  }
  const resolve = raw => {
    if (canonical.has(raw) || frontier.has(raw)) return raw;
    const targets = aliases.get(raw);requireValue(!targets || targets.size === 1, `ambiguous required alias: ${raw}`);
    return targets ? [...targets][0] : raw;
  };
  const required = new Set([...frontier, ...requiredIds].map(resolve));
  for (const id of required) {
    const item = byId.get(id);
    requireValue(item, `required current-run item or supplier is unreadable/missing: ${id}`);
    // readLibraryItems.deps includes declared deps/justified_by/forward_refs,
    // preserving the existing required-context convention rather than pruning it.
    for (const raw of item.deps ?? []) required.add(resolve(raw));
  }
  return { frontier, required, resolve };
}
function activeForeignItemOwner(repo, run, id) {
  const runtime = join(repo, '.autopilot');if (!existsSync(runtime)) return null;
  const matches = [];
  for (const entry of readdirSync(runtime, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === run) continue;
    const statePath = join(runtime, entry.name, 'state.json');if (!existsSync(statePath)) continue;
    let state, stateBytes;try { stateBytes = readFileSync(statePath, 'utf8');state = JSON.parse(stateBytes); } catch { continue; }
    if (state.run !== entry.name || state.stage !== '1-scaffold' || state.finishedAt) continue;
    for (const [key, dispatch] of Object.entries(state.dispatches ?? {})) {
      if (dispatch.stage !== '1-scaffold' || dispatch.role !== 'beta' || !dispatch.startedAt || dispatch.endedAt) continue;
      for (const batch of dispatch.covers ?? []) {
        if (!/^\d+$/.test(String(batch))) continue;
        const manifest = join('research', `${entry.name}-batch-${batch}.pages.json`), full = join(repo, manifest);
        if (!existsSync(full)) continue;
        let pages, bytes;try { bytes = readFileSync(full, 'utf8');pages = JSON.parse(bytes); } catch { continue; }
        for (const page of pages) for (const item of page.items ?? []) if (item.id === id)
          matches.push({ run: entry.name, batch: String(batch), manifest, manifest_sha256: digest(bytes),
            native_state: join('.autopilot', entry.name, 'state.json'), native_state_sha256: digest(stateBytes), dispatch_key: key,
            dispatch: { stage: dispatch.stage, role: dispatch.role, label: dispatch.label,
              covers: dispatch.covers, attempt: dispatch.attempt, attempts: dispatch.attempts,
              startedAt: dispatch.startedAt, endedAt: dispatch.endedAt, lastExitOk: dispatch.lastExitOk },
            dispatch_started_at: dispatch.startedAt, native_stage: state.stage, item });
      }
    }
  }
  return matches.length === 1 ? matches[0] : null;
}

export function readLibraryItems(repo, { run = null, requiredIds = [] } = {}) {
  const invalid = [], items = [];
  for (const name of readdirSync(join(repo, 'items')).filter(name => name.endsWith('.md')).sort()) {
    try {
      const text = readLibraryItemSource(join(repo, 'items', name), name);
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
      items.push({ id, deps, references, body_links: unique(links), aliases: frontmatterList(fm, 'aliases'), published: scalar('status') === 'published', sha256: digest(text), guard_sha256: itemHashGuard(text), statement_sha256: statementHash(text) });
    } catch (error) {
      if (!run || (error.code !== 'ENOENT' && error.transientItemRead !== true)) throw error;
      invalid.push({ id: name.slice(0, -3), error });
    }
  }
  const context = run ? scopedInventoryContext(repo, run, items, requiredIds, invalid) : null;
  if (!invalid.length) return items;
  const observations = [];
  for (const row of invalid) {
    // The strict closure is checked first, so an active foreign writer never
    // licenses omission of a real current-run item, alias target or supplier.
    if (context.required.has(row.id)) throw row.error;
    const owner = activeForeignItemOwner(repo, run, row.id);
    if (!owner) throw row.error;
    const independent = [...(owner.item.deps ?? []), ...(owner.item.justified_by ?? []), ...(owner.item.forward_refs ?? [])]
      .every(raw => !context.frontier.has(context.resolve(raw)));
    requireValue(independent, `incomplete foreign item is a current-frontier consumer: ${row.id}`);
    observations.push({ id: row.id, disposition: 'observed-excluded-not-passed',
      reason: 'Unavailable metadata belongs to an exact independently active foreign authoring carrier; it is outside the current frontier and required dependency closure.',
      read_error: row.error.message, foreign_owner: owner });
  }
  const record = { version: 1, kind: 'outside-inflight-library-observation', run,
    mathematical_review: false, certification_coverage: false, observations };
  const directory = join(repo, 'research', `${run}-step5-v2`, 'outside-inflight-observations');
  mkdirSync(directory, { recursive: true });
  const target = join(directory, `${digest(record)}.json`), bytes = JSON.stringify(record, null, 2) + '\n';
  if (existsSync(target)) requireValue(readFileSync(target, 'utf8') === bytes, 'outside observation archive conflict');
  else writeFileSync(target, bytes, { flag: 'wx' });
  Object.defineProperty(items, 'outside_observations', { value: record, enumerable: false });
  return items;
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
    // Review one interface boundary at a time. An unchanged consumer (or a
    // proof-only repair) cannot propagate the original change further.
    const direct=new Set([...(consumers.get(root)??[]),...(references.get(root)??[])]);
    for (const id of direct) {
      if(id===root)continue;
      if (!impacts.has(id)) impacts.set(id, { id, published: Boolean(byId.get(id).published), suppliers: [], paths: [] });
      impacts.get(id).suppliers.push(root);
      impacts.get(id).paths.push([root,id]);
    }
  }
  return [...impacts.values()].sort((a, b) => a.id.localeCompare(b.id));
}

export function partitionImpacts(ids, count = 3, items = []) {
  requireValue(count === 3, 'Step 5 requires exactly three owner agents');
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
  for (const id of expected) {
    const row = latest.get(id);
    if (!row) { errors.push(`missing adjudication: ${id}`); continue; }
    if (!['confirmed-fatal', 'rejected-finding', 'uncertain'].includes(row.decision)) errors.push(`invalid adjudication: ${id}`);
    if (row.decision === 'uncertain' || row.resolved !== true) errors.push(`unresolved adjudication: ${id}`);
    if (typeof row.basis !== 'string' || !row.basis.trim()) errors.push(`missing logical basis: ${id}`);
    if (!hashPattern.test(row.item_sha256 ?? '')) errors.push(`missing adjudicated carrier hash: ${id}`);
    if (row.decision === 'confirmed-fatal') fatalIds.push(id);
  }
  for (const id of latest.keys()) if (!expected.includes(id)) errors.push(`unexpected adjudication: ${id}`);
  return { round, originalCount: frontier.ids.length, fatalIds: unique(fatalIds), fatalCount: fatalIds.length, belowThreshold: errors.length === 0 && fatalIds.length === 0, errors };
}

/** All receipts are collected first. Certification is a single stable barrier,
 * with no queue-predecessor freshness requirement and no per-item reseal loop. */
export function certifyRound({ run, round, phase, expectedIds, receipts, activeWriters, beforeHashes, afterHashes }) {
  requireValue(Array.isArray(activeWriters) && activeWriters.length === 0, 'certification requires all writers to drain');
  requireValue(Number.isInteger(round) && round >= 0, 'invalid certification round');
  requireValue(['5.3', '5.7', '5.9'].includes(phase), 'invalid certification phase');
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

export function roundStatePath(repo, run) { return join(repo, 'research', `${run}-step5-rounds.json`); }
export function loadRoundState(path) {
  if (!existsSync(path)) return null;
  const state = JSON.parse(readFileSync(path, 'utf8'));
  requireValue(state.version === 1 && Number.isInteger(state.revision) && state.revision >= 0, 'invalid Step-5 round state');
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
    requireValue((previous?.revision ?? null) === expectedRevision, 'Step-5 state revision conflict');
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
