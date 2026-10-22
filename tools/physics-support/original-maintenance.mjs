// Explicit root review of a narrowly mechanical original-source successor.
// Local import bytes and pins never change; this grants no native review coverage.
import { existsSync, readFileSync, readdirSync, realpathSync, lstatSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { yaml } from './pathway-lib.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = message => { throw Error(`Invalid original maintenance: ${message}`); };
const idPattern = /^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function originalMaintenancePath(root, run) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) fail('invalid run');
  return join(root, 'research', `${run}-original-maintenance.json`);
}
function parse(bytes) {
  const match = bytes.toString('utf8').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) fail('missing frontmatter');
  const doc = yaml().parseDocument(match[1], { uniqueKeys: true });
  if (doc.errors.length) fail('malformed YAML');
  const data = doc.toJS();
  if (!data || typeof data !== 'object' || Array.isArray(data)) fail('invalid metadata');
  return { data, body: match[2] };
}
function affected(scope, id) {
  const reached = new Set(), queue = [id];
  for (let i = 0; i < queue.length; i++) {
    if (reached.has(queue[i])) continue;
    reached.add(queue[i]); queue.push(...scope.consumers.get(queue[i]) ?? []);
  }
  return [...reached].filter(id => scope.owned.has(id)).sort();
}
/** Called only with the native current authored frontier and import scope.
 * Reject every stale/extra entry, even when another entry would satisfy a drift. */
export function originalMaintenance(root, run, { receipt, scope, planning = false } = {}) {
  if (!run || planning) return new Map();
  const path = originalMaintenancePath(root, run);
  if (!existsSync(path)) return new Map();
  if (!lstatSync(path).isFile() || realpathSync(path) !== resolve(path)) fail('nonlocal receipt');
  const review = JSON.parse(readFileSync(path, 'utf8'));
  if (review.version !== 1 || review.run !== run || review.reviewer !== '/root'
    || review.native_review !== false || typeof review.reason !== 'string' || review.reason.trim().length < 40
    || !Array.isArray(review.entries) || !review.entries.length
    || !review.inputs || typeof review.inputs !== 'object' || Array.isArray(review.inputs)) fail('receipt identity/review');
  const required = new Set();
  const bind = (path, expected) => {
    if (typeof path !== 'string' || !/^[a-f0-9]{64}$/.test(expected ?? '')
      || review.inputs[path] !== expected) fail(`missing input binding ${path}`);
    const full = resolve(root, path);
    if (!lstatSync(full).isFile() || realpathSync(full) !== full) fail(`changed/nonlocal input ${path}`);
    const bytes = readFileSync(full);
    if (sha(bytes) !== expected) fail(`changed/nonlocal input ${path}`);
    required.add(path);
    return bytes;
  };
  bind('research/math-imports.json', review.import_receipt_sha256);
  const names = readdirSync(join(root, 'research')).filter(n => n.startsWith(`${run}-batch-`)
    && /^\d+\.pages\.json$/.test(n.slice(`${run}-batch-`.length))).sort();
  const frontier = names.map(name => `research/${name}`);
  if (!frontier.length || !isDeepStrictEqual(Object.keys(review.frontier ?? {}).sort(), frontier)) fail('frontier selection');
  for (const path of frontier) bind(path, review.frontier[path]);
  const accepted = new Map();
  for (const entry of review.entries) {
    const pin = receipt.files.find(row => row.path === entry.path);
    if (!pin || !/^items\/[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(entry.path)
      || accepted.has(entry.path) || !scope.paths.has(entry.path) || entry.pinned_sha256 !== pin.sha256) fail('entry scope/pin');
    const original = resolve(receipt.source_root, entry.path);
    if (entry.original_path !== original || entry.original_sha256 === pin.sha256) fail('original identity');
    const before = parse(bind(entry.path, pin.sha256)), after = parse(bind(original, entry.original_sha256));
    if (!idPattern.test(before.data.id ?? '') || entry.path !== `items/${before.data.id}.md`
      || !scope.importedItems.has(before.data.id)) fail('imported identity');
    const prior = structuredClone(before.data), current = structuredClone(after.data);
    // Only an added repair locator may differ; no stamps, sources or claims move.
    if (prior.verification?.repair === undefined && current.verification?.repair !== undefined) {
      if (typeof current.verification.repair !== 'string' || !/^research\/[\w./-]+\.json$/.test(current.verification.repair)
        || current.verification.repair.split('/').includes('..')) fail('repair locator');
      delete current.verification.repair;
      if (prior.verification === undefined && !Object.keys(current.verification).length) delete current.verification;
    }
    if (!isDeepStrictEqual(prior, current)) fail('metadata/interface changed');
    if (!Array.isArray(entry.evidence) || !entry.evidence.length) fail('missing scientific evidence');
    for (const evidence of entry.evidence) {
      if (typeof evidence.path !== 'string' || !evidence.path.startsWith(`research/${run}-`)
        || evidence.path.split('/').includes('..') || evidence.path === `research/${run}-original-maintenance.json`) fail('evidence scope');
      bind(evidence.path, evidence.sha256);
    }
    const consumers = affected(scope, before.data.id);
    if (!Array.isArray(entry.consumers) || !isDeepStrictEqual(entry.consumers.map(row => row.id).sort(), consumers)
      || entry.consumers.some(row => row.decision !== 'unaffected' || typeof row.reason !== 'string' || row.reason.trim().length < 40)) fail('consumer review');
    for (const id of consumers) bind(`items/${id}.md`, entry.consumer_sha256?.[id]);
    if (!isDeepStrictEqual(Object.keys(entry.consumer_sha256 ?? {}).sort(), consumers)) fail('consumer source selection');
    const titles = new Map();
    for (const title of entry.titles ?? []) {
      if (!idPattern.test(title.id ?? '') || titles.has(title.id)) fail('title identity');
      const file = `items/${title.id}.md`, titlePin = receipt.files.find(row => row.path === file);
      if (!titlePin || title.sha256 !== titlePin.sha256) fail('title pin');
      const data = parse(bind(file, title.sha256)).data;
      if (data.id !== title.id || typeof data.title !== 'string' || !data.title.trim()) fail('title carrier');
      titles.set(title.id, data.title);
    }
    if (before.body !== after.body) {
      // This exception is deliberately limited to a single Definition section.
      const body = before.body.replace(/\r\n/g, '\n').trimEnd();
      if (!/^\s*## Definition\n/.test(body) || (body.match(/^## /gm) ?? []).length !== 1) fail('body section scope');
      const tokens = [];
      const moved = body.replace(/\[\[([a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*)\]\]/g, (_, id) => {
        if (!titles.has(id)) fail(`unbound reference title ${id}`);
        tokens.push(id); return titles.get(id);
      });
      if (!tokens.length || !isDeepStrictEqual([...new Set(tokens)].sort(), [...titles.keys()].sort())) fail('reference selection');
      const expected = moved + '\n\n## Definition references\n\n' + tokens.map(id => `[[${id}]]`).join('\n\n');
      if (after.body.replace(/\r\n/g, '\n').trimEnd() !== expected) fail('substantive body/reference change');
    } else if (titles.size) fail('unneeded title bindings');
    accepted.set(entry.path, entry.original_sha256);
  }
  if (!isDeepStrictEqual(Object.keys(review.inputs).sort(), [...required].sort())) fail('unrelated input binding');
  return accepted;
}
