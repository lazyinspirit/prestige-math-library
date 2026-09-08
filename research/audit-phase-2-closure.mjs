// Read-only census. Run: node research/audit-phase-2-closure.mjs
// Page closure cannot certify the adequacy of unlinked mathematical appeals.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { yamlCandidates } from '../tools/paths.mjs';
const require = createRequire(import.meta.url);
let yaml;
for (const path of yamlCandidates()) { try { yaml = require(path); break; } catch {} }
if (!yaml) throw new Error('Renderer YAML parser unavailable');
const read = path => {
  const text = readFileSync(path, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return { ...yaml.parse(match?.[1] ?? ''), body: text.slice(match?.[0].length ?? 0) };
};
const plan = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const pages = new Map(plan.pages.map(p => [p.id, p]));
const manifest = readFileSync('research/phase-2-build-manifest.md', 'utf8');
const rows = [...manifest.matchAll(/^\| ([^|]+) \| ([DPR]) \| ([^|]+) \| `([^`]+)` \|$/gm)];
const selected = new Set(rows.map(m => m[4]));
const direct = rows.filter(m => m[2] === 'D').map(m => m[4]);
const retirement = rows.filter(m => m[2] === 'R').map(m => m[4]);
const actualPages = new Map(), homes = new Map(), items = new Map(), aliases = new Map();
for (const cat of readdirSync('library', { withFileTypes: true }).filter(e => e.isDirectory())) {
  for (const file of readdirSync(`library/${cat.name}`).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const p = read(`library/${cat.name}/${file}`), id = file.slice(0, -3);
    actualPages.set(id, p);
    for (const it of [...(p.items ?? []), ...(p.examples ?? [])]) {
      if (!homes.has(it)) homes.set(it, []);
      homes.get(it).push(id);
    }
  }
}
for (const file of readdirSync('items').filter(f => f.endsWith('.md'))) {
  const it = read(`items/${file}`);
  items.set(it.id, it);
  for (const alias of it.aliases ?? []) aliases.set(alias, it.id);
}
const resolve = id => items.has(id) ? id : aliases.get(id) ?? id;
const pub = id => actualPages.get(id)?.status === 'published';
const pair = id => pages.get(id)?.kind === 'B' || id.endsWith('-examples')
  ? pages.get(id)?.companion ?? id.replace(/-examples$/, '') : id;
const closure = roots => {
  const seen = new Set(), missing = new Set();
  function walk(id) {
    if (seen.has(id)) return;
    seen.add(id);
    if (!pages.has(id)) { missing.add(id); return; }
    for (const dep of pages.get(id).requires ?? []) walk(dep);
  }
  roots.forEach(walk);
  return { seen, missing: [...missing] };
};
const published = [...actualPages.keys()].filter(pub);
// Include both companions: the B proof is part of the build contract too.
const seeds = [...published, ...[...selected].flatMap(id => [id, pages.get(id)?.companion ?? `${id}-examples`])];
const reach = closure(seeds);
const missingPairs = [...new Set([...reach.seen].filter(id => !pub(id)).map(pair))].filter(id => !selected.has(id));
const itemEdges = it => [...(it.deps ?? []), ...(it.justified_by ?? []), ...(it.forward_refs ?? []).filter(id => {
  const body = it.body.replace(/\n## Remarks[\s\S]*?(?=\n## |$)/g, '\n');
  return body.includes(`[[${id}`);
})].map(resolve);
const publishedToDraft = [], recordedEdges = [], unresolved = [], publishedOrphans = [];
for (const [id, it] of items) if (it.status === 'published') {
  if (!homes.has(id)) publishedOrphans.push(id);
  for (const dep of itemEdges(it)) {
    const target = items.get(dep);
    if (!target) unresolved.push({ consumer: id, target: dep });
    else if (target.status !== 'published') publishedToDraft.push({ consumer: id, target: dep, homes: homes.get(dep) ?? [], pairSelected: (homes.get(dep) ?? []).some(p => selected.has(pair(p))), onPublishedPage: (homes.get(dep) ?? []).some(pub) });
    if (target?.proved_here === false) recordedEdges.push({ consumer: id, target: dep });
  }
}
const partialPairs = [...selected].filter(id => pub(id) || pub(pages.get(id)?.companion ?? `${id}-examples`));
const bPrerequisites = [...selected].flatMap(id => (pages.get(id)?.requires ?? []).filter(d => d.endsWith('-examples')).map(dep => ({ page: id, target: dep })));
const sourceRecorded = [...reach.seen].filter(id => pages.get(id)?.category === 'not-proved-here');
const supplierClosure = closure([...selected].flatMap(id => [id, pages.get(id)?.companion ?? `${id}-examples`]));
const reverse = new Map();
for (const [id, it] of items) for (const dep of itemEdges(it)) {
  if (!reverse.has(dep)) reverse.set(dep, new Set());
  reverse.get(dep).add(id);
}
const impact = root => {
  const seen = new Set([root]), queue = [root];
  while (queue.length) for (const next of reverse.get(queue.pop()) ?? []) {
    if (seen.has(next)) continue;
    seen.add(next); queue.push(next);
  }
  return [...seen].filter(id => id !== root && items.get(id)?.status === 'published' && items.get(id)?.proved_here !== false).sort();
};
const recordedInventory = [...items.values()].filter(it => it.proved_here === false).map(it => ({
  id: it.id, title: it.title, status: it.status, homes: homes.get(it.id) ?? [],
  directLogicalConsumers: recordedEdges.filter(e => e.target === it.id).map(e => e.consumer),
  publishedProofImpact: impact(it.id),
}));
const inheritedRecordedEdges = recordedEdges.filter(edge =>
  (homes.get(edge.consumer) ?? []).some(p => supplierClosure.seen.has(p)));
const exposedDraftEdges = publishedToDraft.filter(edge =>
  (homes.get(edge.consumer) ?? []).some(p => supplierClosure.seen.has(p)));
const retirementLedger = existsSync('research/recorded-retirement-ledger.json')
  ? JSON.parse(readFileSync('research/recorded-retirement-ledger.json', 'utf8')) : { records: [] };
const recordedIds = new Set(recordedInventory.map(i => i.id));
const registeredIds = new Set(retirementLedger.records.map(r => r.recorded_item));
const reconciliation = {
  metadataCountsMatch: plan.phase_2_closure?.pairs === selected.size
    && plan.phase_2_closure?.direct_roots === direct.length
    && plan.phase_2_closure?.retirement_roots === retirement.length
    && plan.phase_2_closure?.prerequisite_pairs === selected.size-direct.length-retirement.length,
  missingRecordedLedgerRows: [...recordedIds].filter(id => !registeredIds.has(id)),
  staleRecordedLedgerRows: [...registeredIds].filter(id => !recordedIds.has(id)),
  unselectedCandidateProofPages: [...new Set(retirementLedger.records.flatMap(r => r.candidate_proof_pages ?? []))]
    .filter(id => !pub(id) && !selected.has(pair(id))),
};
console.log(JSON.stringify({
  census: { plannedPages: pages.size, actualPages: actualPages.size, publishedPages: published.length, items: items.size, publishedItems: [...items.values()].filter(i => i.status === 'published').length, manifestRows: rows.length, pairs: selected.size, direct: direct.length, retirement: retirement.length, prerequisites: selected.size-direct.length-retirement.length },
  missingPairs, unresolvedPages: reach.missing, missingManifestPages: [...selected].filter(id => !pages.has(id)), partialPairs,
  bPrerequisites, recordedPagesInPublishedClosure: sourceRecorded,
  recordedPagesInSupplierClosure: [...supplierClosure.seen].filter(id => pages.get(id)?.category === 'not-proved-here'),
  inheritedRecordedEdges, exposedDraftEdges,
  publishedToDraft, unresolvedPublishedItemEdges: unresolved, recordedLogicalEdges: recordedEdges,
  publishedOrphans,
  publishedOrphanImpact: publishedOrphans.map(id => ({ id, directConsumers: [...(reverse.get(id) ?? [])].sort(), publishedImpact: impact(id) })),
  recordedInventory, reconciliation,
}, null, 2));
// Structural failure only. A pass never certifies mathematical self-containment.
if (missingPairs.length || reach.missing.length || selected.size !== rows.length
    || !reconciliation.metadataCountsMatch || reconciliation.missingRecordedLedgerRows.length
    || reconciliation.staleRecordedLedgerRows.length || reconciliation.unselectedCandidateProofPages.length) process.exitCode = 1;
