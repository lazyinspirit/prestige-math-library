// Current frontier inventories and hash-bound prerequisite inputs; no review decisions.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { yaml } from './pathway-lib.mjs';
const safe = value => { if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid identity'); return value; };
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const read = path => existsSync(path) ? json(path) : null;
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export function loadStep3(root, run) {
  safe(run);
  const dir = join(root, 'research'), pages = [], items = new Map(), pairs = new Map();
  for (const f of readdirSync(dir).filter(f => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).sort()) {
    const batch = f.match(/-batch-(\d+)\./)[1];
    const coverage = read(join(dir, f.replace('.pages.json', '.coverage.json')));
    for (const page of json(join(dir, f))) {
      const livePage = { ...page, batch, coverage: coverage?.pages?.find(p => p.page === page.id) };
      pages.push(livePage);
      for (const item of page.items ?? []) {
        if (items.has(item.id)) throw Error(`Duplicate item ${item.id}`);
        items.set(item.id, { item, page: livePage });
      }
    }
  }
  if (!pages.length) throw Error('No run manifests');
  const claimedCompanions = new Set();
  for (const a of pages.filter(p => p.kind === 'A')) {
    const b = pages.find(p => p.id === a.companion && p.kind === 'B');
    // The plan contract names companions on A pages; B pages may omit the
    // reverse pointer. Reject a contradictory pointer or a shared B page.
    if (!b || (b.companion && b.companion !== a.id) || pairs.has(a.id)
      || claimedCompanions.has(b.id)) throw Error(`Invalid pair ${a.id}`);
    claimedCompanions.add(b.id);
    pairs.set(a.id, [a, b]);
  }
  if (pairs.size * 2 !== pages.length) throw Error('Every page must belong to one A/B pair');
  const planned = new Map();
  for (const page of read(join(dir, 'plan-spec.json'))?.pages ?? [])
    for (const item of page.items ?? []) planned.set(item.id, { item, page });
  return { root, run, pages, pairs, items, planned, cache: new Map() };
}

// Recording authoring readiness is local; global review/gates still use loadStep3.
// Keep the complete ownership index, including unfinished bare-ID inventories,
// but reject an unfinished entry if it actually enters the recorded closure.
export function loadStep1Record(root, run) {
  safe(run);
  const dir = join(root, 'research'), pages = [], items = new Map(), pairs = new Map();
  const invalidItems = new Map(), homes = new Set();
  const files = readdirSync(dir).filter(f => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json')
    && /^\d+$/.test(f.slice(`${run}-batch-`.length, -'.pages.json'.length))).sort();
  for (const f of files) {
    const batch = f.slice(`${run}-batch-`.length, -'.pages.json'.length);
    const manifest = json(join(dir, f));
    if (!Array.isArray(manifest) || !manifest.length) throw Error(`Invalid run manifest ${f}`);
    for (const page of manifest) {
      if (!page || typeof page !== 'object' || typeof page.id !== 'string' || !page.id
        || homes.has(page.id) || !['A', 'B'].includes(page.kind)
        || !Array.isArray(page.items) || !Array.isArray(page.requires ?? [])
        || (page.requires ?? []).some(id => typeof id !== 'string' || !id))
        throw Error(`Invalid or ambiguous page ownership in ${f}`);
      homes.add(page.id);
      const livePage = { ...page, batch };
      pages.push(livePage);
      for (const item of page.items) {
        const id = typeof item === 'string' ? item : item?.id;
        safe(id);
        if (items.has(id)) throw Error(`Duplicate item ${id}`);
        items.set(id, { item, page: livePage });
        if (typeof item === 'string') invalidItems.set(id, `Unfinished manifest inventory for ${id} in ${f}`);
      }
    }
  }
  if (!pages.length) throw Error('No run manifests');
  const claimedCompanions = new Set();
  for (const a of pages.filter(p => p.kind === 'A')) {
    const b = pages.find(p => p.id === a.companion && p.kind === 'B');
    if (!b || (b.companion && b.companion !== a.id) || pairs.has(a.id) || claimedCompanions.has(b.id))
      throw Error(`Invalid pair ${a.id}`);
    claimedCompanions.add(b.id);
    pairs.set(a.id, [a, b]);
  }
  if (pairs.size * 2 !== pages.length) throw Error('Every page must belong to one A/B pair');
  const planned = new Map();
  for (const page of read(join(dir, 'plan-spec.json'))?.pages ?? [])
    for (const item of page.items ?? []) planned.set(item.id, { item, page });
  return { root, run, pages, pairs, items, planned, invalidItems, cache: new Map() };
}

// Proof repairs do not reopen scope. Changed claims or inventory do.
export function scopeHash(s, page) {
  const pair = s.pairs.get(page);
  if (!pair) throw Error(`Unknown A page ${page}`);
  return hash(pair.map(p => ({ id: p.id, title: p.title, category: p.category,
    items: p.items.map(i => ({ id: i.id, kind: i.kind, title: i.title, statement: i.statement })),
  })));
}

function dependency(s, id) {
  if (s.invalidItems?.has(id)) throw Error(s.invalidItems.get(id));
  if (s.cache.has(id)) return s.cache.get(id);
  const live = s.items.get(id), planned = s.planned.get(id);
  const path = join(s.root, 'items', `${safe(id)}.md`);
  const body = existsSync(path) ? readFileSync(path, 'utf8') : null;
  const fm = body ? yaml().parse(body.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') : null;
  const contract = live ?? planned;
  // Missing prerequisites must remain auditable and escalatable, not prevent dispatch.
  if (!contract && !fm) return { bytes: { missing: id }, deps: [] };
  const declarations = [contract?.item, fm].filter(Boolean);
  if (s.invalidItems) for (const declaration of declarations) {
    for (const field of ['deps', 'justified_by', 'forward_refs']) {
      const values = declaration[field] ?? [];
      if (!Array.isArray(values) || values.some(value => typeof value !== 'string' || !value))
        throw Error(`${id}: ${field} must name dependency IDs`);
    }
  }
  const { verification, ...mathematicalMetadata } = fm ?? {};
  const value = {
    bytes: [contract?.item ?? null, body === null ? null : [mathematicalMetadata,
      body.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')],
      contract ? { id: contract.page.id, order: contract.page.order, requires: contract.page.requires } : null],
    deps: [...new Set(declarations.flatMap(i => [...(i.deps ?? []), ...(i.justified_by ?? []), ...(i.forward_refs ?? [])]))],
  };
  s.cache.set(id, value);
  return value;
}

function itemInputs(s, id, extra = []) {
  if (!s.items.has(id)) throw Error(`Unknown run item ${id}`);
  if (!Array.isArray(extra) || extra.some(d => typeof d !== 'string')) throw Error('dependencies must be an ID array');
  const seen = new Map(), queue = [id, ...extra];
  while (queue.length) {
    let key = queue.pop();
    if (!s.items.has(key) && !s.planned.has(key) && !existsSync(join(s.root,'items',`${safe(key)}.md`))) {
      if (!s.aliases) {
        s.aliases=new Map();
        const names=readdirSync(join(s.root,'items')).filter(name=>name.endsWith('.md'));
        const canonical=new Set(names.map(name=>name.slice(0,-3)));
        for(const name of names){
          const text=readFileSync(join(s.root,'items',name),'utf8');
          const fm=yaml().parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
          for(const alias of fm.aliases??[])if(!canonical.has(alias)){
            if(s.aliases.has(alias)&&s.aliases.get(alias)!==name.slice(0,-3))throw Error(`Ambiguous alias ${alias}`);
            s.aliases.set(alias,name.slice(0,-3));
          }
        }
      }
      key=s.aliases.get(key)??key;
    }
    if (seen.has(key)) continue;
    const node = dependency(s, key);
    seen.set(key, node.bytes);
    queue.push(...node.deps);
  }
  return seen;
}

export function itemHash(s, id, extra = []) {
  return hash([...itemInputs(s, id, extra)].sort(([a], [b]) => a.localeCompare(b)));
}

// Use the same transitive closure as itemHash when checking who authored its
// current inputs. Both item text and run/planned dependency metadata contribute.
export function itemInputPaths(s, id, extra = []) {
  const paths = new Set();
  for (const key of itemInputs(s, id, extra).keys()) {
    const itemPath = join(s.root, 'items', `${safe(key)}.md`);
    if (existsSync(itemPath)) paths.add(itemPath);
    const live = s.items.get(key);
    if (live) paths.add(join(s.root, 'research', `${s.run}-batch-${live.page.batch}.pages.json`));
    else if (s.planned.has(key)) paths.add(join(s.root, 'research', 'plan-spec.json'));
  }
  return [...paths];
}
