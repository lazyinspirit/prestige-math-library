// Guarded same-ID relocation of proved Step-3 prerequisites. No review coverage.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const sha = value => createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const same = (a, b) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
const safe = value => { if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid rehome identity'); return value; };
const read = path => JSON.parse(readFileSync(path, 'utf8'));
export const ownerRehomesPath = (root, run) => join(root, 'research', `${safe(run)}-step3-owner-rehomes.json`);
function marker(root, value) {
  const path = resolve(root, value?.path ?? ''), boundary = realpathSync(join(root, 'research')) + '/';
  if (!/^[a-f0-9]{64}$/.test(value?.sha256 ?? '') || !realpathSync(path).startsWith(boundary)) throw Error('Invalid rehome archive');
  const bytes = readFileSync(path); if (sha(bytes) !== value.sha256) throw Error(`Stale rehome archive: ${value.path}`); return bytes;
}
function inventory(files) {
  const pages = new Map(), items = new Map();
  for (const { batch, doc } of files) for (const page of Array.isArray(doc) ? doc : doc.pages ?? []) {
    if (pages.has(page.id)) throw Error('Duplicate frontier page'); pages.set(page.id, { batch, page });
    for (const item of page.items ?? []) {
      if (!item?.id || items.has(item.id)) throw Error('Duplicate or malformed frontier item');
      items.set(item.id, { batch, page: page.id, item });
    }
  }
  return { pages, items };
}
const semanticRow = item => { const { dependency_level: _level, __step4_page_id: _home, ...rest } = item; return rest; };
const sourceWithoutMechanicalMetadata = text => text.replace(/^dependency_level:.*\n/gm, '')
  .replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, '');
function currentInventory(root, run) {
  return inventory(readdirSync(join(root, 'research')).sort().filter(name => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))
    .map(name => ({ batch: /-batch-(\d+)\.pages/.exec(name)[1], doc: read(join(root, 'research', name)) })));
}
export function validateOwnerRehomes(root, run, doc, { currentEvent = true } = {}) {
  if (doc?.version !== 1 || doc.policy !== 'owner-step3-same-id-proved-rehome-v1' || doc.run !== run
    || doc.step !== 3 || doc.approved_by !== 'owner' || doc.owner_identity !== '/root'
    || !Number.isFinite(Date.parse(doc.authorized_at)) || String(doc.reason ?? '').trim().length < 40
    || !Array.isArray(doc.items) || !doc.items.length || !Array.isArray(doc.families)
    || !Array.isArray(doc.before_frontier) || !Array.isArray(doc.after_frontier)) throw Error('Invalid owner proved rehome receipt');
  const baseline = JSON.parse(marker(root, doc.baseline));
  if (baseline.run !== run || baseline.step !== 3 || baseline.policy !== 'auditor-created-stage-bypass-v1') throw Error('Invalid immutable rehome baseline');
  const archived = values => inventory(values.map(x => ({ batch: safe(x.batch), doc: JSON.parse(marker(root, x.source)) })));
  const before = archived(doc.before_frontier), after = archived(doc.after_frontier), current = currentInventory(root, run);
  const pageIds = [...before.pages.keys()].sort(), itemIds = [...before.items.keys()].sort();
  const currentIds = [...current.items.keys()].sort();
  const extraCurrentIds = currentIds.filter(id => !before.items.has(id));
  const frozenCurrentInventory = currentEvent ? same(itemIds, currentIds)
    : itemIds.every(id => current.items.has(id)) && extraCurrentIds.every(id =>
      !baseline.items.some(row => row.id === id) && !baseline.existing_item_files.includes(id));
  if (doc.frozen_page_count !== pageIds.length || !same(pageIds, [...after.pages.keys()].sort())
    || !same(pageIds, [...current.pages.keys()].sort()) || !same(itemIds, [...after.items.keys()].sort())
    || !frozenCurrentInventory) throw Error('Rehome changed frozen frontier identities');
  for (const id of pageIds) {
    const a = before.pages.get(id), b = after.pages.get(id), c = current.pages.get(id);
    if (a.batch !== b.batch || b.batch !== c.batch || ['category', 'kind', 'companion', 'order'].some(k => !same(a.page[k], b.page[k]) || !same(b.page[k], c.page[k]))) throw Error('Rehome changed page family/owner');
  }
  const familyIds = doc.families.flatMap(f => f.ids ?? []);
  if (!same([...familyIds].sort(), doc.items.map(x => x.id).sort()) || new Set(familyIds).size !== familyIds.length) throw Error('Rehome family coverage is not exact');
  const rows = [], seen = new Set();
  for (const row of doc.items) {
    const { id, from_page: oldPage, to_page: newPage, from_batch: oldBatch, to_batch: newBatch } = row;
    [id, oldPage, newPage, oldBatch, newBatch].forEach(safe);
    if (seen.has(id) || oldPage === newPage || oldBatch === newBatch || String(row.reason ?? '').trim().length < 40) throw Error('Invalid proved rehome row'); seen.add(id);
    const family = doc.families.find(f => f.ids.includes(id));
    if (family.to_page !== newPage || !family.from_pages.includes(oldPage)) throw Error('Rehome escapes explicit owner family');
    const a = before.items.get(id), b = after.items.get(id), c = current.items.get(id);
    if (!a || !b || !c || a.page !== oldPage || a.batch !== oldBatch || b.page !== newPage || b.batch !== newBatch
      || c.page !== newPage || c.batch !== newBatch || !same(semanticRow(a.item), semanticRow(b.item))
      || (currentEvent && !same(semanticRow(b.item), semanticRow(c.item))) || a.item.kind !== 'lemma') throw Error(`${id}: rehome changed claim or unique ownership`);
    const oldText = marker(root, row.before_source).toString(), newText = marker(root, row.after_source).toString();
    if (!same(sourceWithoutMechanicalMetadata(oldText), sourceWithoutMechanicalMetadata(newText))
      || !/^## Proof\s*$/m.test(oldText) || !/^id:\s*/m.test(oldText)
      || !oldText.includes(`id: ${id}\n`) || /proof:\s*(not-supplied|not-applicable)/.test(oldText)) throw Error(`${id}: not a same-source proved rehome`);
    const text = readFileSync(join(root, 'items', `${id}.md`), 'utf8');
    if (currentEvent && !same(sourceWithoutMechanicalMetadata(newText), sourceWithoutMechanicalMetadata(text))) throw Error(`${id}: current rehome source changed substantively`);
    if (!baseline.items?.some(x => x.id === id && x.page === oldPage && String(x.batch) === oldBatch) || !baseline.existing_item_files?.includes(id)) throw Error(`${id}: not an original frozen prerequisite`);
    for (const label of ['pre', 'post']) {
      const expected = `research/${run}-step3-hash-${oldBatch}-${label}.json`;
      if (row[`${label}_reader`]?.path !== expected) throw Error('Rehome detached frozen reader evidence');
      const snapshot = JSON.parse(marker(root, row[`${label}_reader`]));
      if (snapshot.version !== 2 || snapshot.run !== run || String(snapshot.batch) !== oldBatch || snapshot.label !== label
        || !snapshot.manifest?.includes(id) || !['item_sha256', 'manifest_sha256', 'contract_sha256'].every(k => /^[a-f0-9]{64}$/.test(snapshot.hashes?.[id]?.[k] ?? ''))) throw Error(`${id}: rehome cannot excuse an actual reader deletion`);
    }
    const oldContract = JSON.parse(marker(root, row.before_contract)).contracts?.[id];
    const newContract = JSON.parse(marker(root, row.after_contract)).contracts?.[id];
    const liveContract = read(join(root, 'research', `${run}-batch-${newBatch}.proof-contracts.json`)).contracts?.[id];
    if (!oldContract || !same(oldContract, newContract) || (currentEvent && !same(newContract, liveContract))) throw Error(`${id}: rehome changed actual contract/risk metadata`);
    rows.push({ ...row, current_manifest_entry: c.item });
  }
  const owned = new Map(doc.items.map(row => [row.id, row]));
  for (const id of itemIds) {
    const a = before.items.get(id), b = after.items.get(id);
    if ((a.page !== b.page || a.batch !== b.batch) && !owned.has(id)) {
      // Independently new, post-reader owner-created helpers may choose their
      // first home, but they cannot hide removal of another frozen carrier.
      if (baseline.items.some(x => x.id === id) || baseline.existing_item_files.includes(id)) throw Error(`${id}: unlicensed original prerequisite rehome`);
    }
  }
  return rows;
}
// After registration this receipt authenticates a historical relocation, not
// acceptance of future proofs. Ordinary native seals still hash the ACTUAL
// current source, manifest and contract; later repairs require ordinary review.
export function loadStep3OwnerRehomes(root, run) { const p = ownerRehomesPath(root, run); return existsSync(p) ? validateOwnerRehomes(root, run, read(p), { currentEvent: false }) : []; }
export function projectOwnerRehomeBatches(batches, rows) {
  const projected = Object.fromEntries(Object.entries(batches).map(([batch, ids]) => [batch, [...ids]]));
  for (const row of rows) {
    const current = Object.entries(projected).filter(([, ids]) => ids.includes(row.id));
    if (current.length !== 1 || current[0][0] !== row.to_batch) throw Error('Rehome current owner is not unique');
    projected[row.to_batch] = projected[row.to_batch].filter(id => id !== row.id); projected[row.from_batch].push(row.id);
  }
  return projected;
}
export function ownerRehomeCarrierBatch(rows, id, historicalBatch) { return rows.find(row => row.id === id && row.from_batch === String(historicalBatch))?.to_batch ?? String(historicalBatch); }
export function recordOwnerRehomes(root, run, evidence) {
  const doc = read(resolve(root, evidence)); validateOwnerRehomes(root, run, doc); const p = ownerRehomesPath(root, run);
  if (existsSync(p)) { if (!same(read(p), doc)) throw Error('Refusing replacement of immutable rehome receipt'); return { path: p, reused: true }; }
  writeFileSync(p, JSON.stringify(doc, null, 2) + '\n', { flag: 'wx' }); return { path: p, reused: false };
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { const args = process.argv.slice(2), get = flag => args[args.indexOf(flag) + 1], root = resolve(args.includes('--root') ? get('--root') : '.');
    if (!['check', 'record'].includes(args[0]) || !args.includes('--run') || !args.includes('--evidence')) throw Error('Usage: step3-owner-rehomes.mjs check|record --run RUN --evidence research/JSON [--root DIR]');
    const result = args[0] === 'check' ? { count: validateOwnerRehomes(root, get('--run'), read(resolve(root, get('--evidence')))).length, no_writes: true } : recordOwnerRehomes(root, get('--run'), get('--evidence')); console.log(JSON.stringify(result));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
