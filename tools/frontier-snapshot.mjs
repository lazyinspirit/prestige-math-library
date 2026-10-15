// Current frontier inventories and hash-bound prerequisite inputs; no review decisions.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { yaml } from './pathway-lib.mjs';
const safe = value => { if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid identity'); return value; };
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const read = path => existsSync(path) ? json(path) : null;
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export function loadStep3(root, run, {constructionScheduling=false}={}) {
  safe(run);
  const dir = join(root, 'research'), pages = [], items = new Map(), pairs = new Map();
  let schedulingIdentityInputs;
  // Only native construction scheduling may project incomplete identities.
  // The worker's explicit page spelling must already have one exact owner and
  // canonical identity. Never infer inventory, relocate a page, or repair disk.
  const schedulingPage = (page, batch) => {
    const missingId = !Object.hasOwn(page, 'id');
    const stringItems = (page.items ?? []).some(item => typeof item === 'string');
    if (!constructionScheduling || (!missingId && !stringItems)) return page;
    if (!schedulingIdentityInputs) schedulingIdentityInputs = {
      ledger: readFileSync(join(dir, `${run}-scope-ledger.json`), 'utf8'),
      plan: readFileSync(join(dir, 'plan-spec.json'), 'utf8'),
    };
    const ledger = JSON.parse(schedulingIdentityInputs.ledger);
    const id = missingId ? page.page : page.id;
    const owners = (ledger.pages ?? []).filter(p => p.id === id);
    const planned = (JSON.parse(schedulingIdentityInputs.plan).pages ?? []).filter(p => p.id === id);
    if (typeof id !== 'string' || !id || ledger.run !== run
      || owners.length !== 1 || owners[0].batch !== batch || owners[0].kind !== page.kind
      || planned.length !== 1 || planned[0].kind !== page.kind
      || planned[0].category !== page.category || planned[0].companion !== page.companion)
      throw Error(`Invalid construction scheduling page identity in batch ${batch}`);
    if (!stringItems) return { ...page, id };
    // Some authors keep complete current contracts in an adjacent items file
    // while their pages file temporarily lists IDs. Preserve those contracts,
    // including every explicit dependency. A missing adjacent entry can use a
    // complete same-run actual source; contradictory entries still hold.
    const inputs = schedulingIdentityInputs.items ??= {};
    inputs[batch] ??= readFileSync(join(dir, `${run}-batch-${batch}.items.json`), 'utf8');
    const contracts = JSON.parse(inputs[batch]);
    if (contracts.run !== run || contracts.batch !== batch || !Array.isArray(contracts.items))
      throw Error(`Invalid construction scheduling item contracts in batch ${batch}`);
    const prefixes = {definition:'def',algorithm:'alg',theorem:'thm',lemma:'lem',proposition:'prop',
      corollary:'cor',example:'ex',counterexample:'cex','false-statement':'fs',remark:'rem','open-problem':'op'};
    return { ...page, id, items: page.items.map(item => {
      if (typeof item !== 'string') return item;
      const matches = contracts.items.filter(contract => contract.id === item);
      let contract = matches[0];
      if (matches.length === 0) {
        const source = readFileSync(join(root, 'items', `${safe(item)}.md`), 'utf8');
        const envelope = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
        contract = envelope ? yaml().parse(envelope[1]) : null;
        if (!contract || typeof contract !== 'object' || Array.isArray(contract)
          || contract.id !== item || contract.pipeline_run !== run
          || (Object.hasOwn(contract, 'page') && contract.page !== id))
          throw Error(`Invalid construction scheduling source identity ${item} in batch ${batch}`);
        (schedulingIdentityInputs.sources ??= {})[item] = source;
      }
      if (matches.length > 1 || (matches.length === 1 && contract.page !== id) || !prefixes[contract.kind]
        || !item.startsWith(`${prefixes[contract.kind]}-`) || !/^[a-zA-Z0-9_-]+$/.test(item)
        || !Array.isArray(contract.deps) || contract.deps.some(dep =>
          typeof dep !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(dep)))
        throw Error(`Invalid construction scheduling item identity ${item} in batch ${batch}`);
      return { ...contract };
    }) };
  };
  for (const f of readdirSync(dir).filter(f => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).sort()) {
    const batch = f.match(/-batch-(\d+)\./)[1];
    const coverage = read(join(dir, f.replace('.pages.json', '.coverage.json')));
    for (const original of json(join(dir, f))) {
      const page = schedulingPage(original, batch);
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
  return { root, run, pages, pairs, items, planned, cache: new Map(),
    ...(schedulingIdentityInputs ? { schedulingIdentityInputs } : {}) };
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
  if (s.cache.has(id)) return s.cache.get(id);
  const live = s.items.get(id), planned = s.planned.get(id);
  const path = join(s.root, 'items', `${safe(id)}.md`);
  const body = existsSync(path) ? readFileSync(path, 'utf8') : null;
  const fm = body ? yaml().parse(body.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') : null;
  const contract = live ?? planned;
  // Missing prerequisites must remain auditable and escalatable, not prevent dispatch.
  if (!contract && !fm) return { bytes: { missing: id }, deps: [] };
  const declarations = [contract?.item, fm].filter(Boolean);
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
