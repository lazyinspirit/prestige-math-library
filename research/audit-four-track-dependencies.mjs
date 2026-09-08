// Read-only evidence, not proof certification.
// Run: node research/audit-four-track-dependencies.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { yamlCandidates } from '../tools/paths.mjs';
const require = createRequire(import.meta.url);
let yaml;
for (const p of yamlCandidates()) { try { yaml = require(p); break; } catch {} }
if (!yaml) throw Error('Renderer YAML unavailable');
const read = path => {
  const s = readFileSync(path, 'utf8'), m = s.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return { ...yaml.parse(m?.[1] ?? ''), body: s.slice(m?.[0].length ?? 0) };
};
const plan = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const pages = new Map(plan.pages.map(p => [p.id, p]));
const dirs = ['homological-algebra-enrichment', 'braid-groups-planning', 'quantum-groups-planning', 'kazhdan-lusztig-planning', 'symmetric-group-planning'];
const proposed = [], manifestDrift = [];
for (const dir of dirs) {
  proposed.push(...JSON.parse(readFileSync(`research/${dir}/proposed-items.json`, 'utf8')).map(i => ({ ...i, manifest: dir })));
  for (const p of JSON.parse(readFileSync(`research/${dir}/pages.json`, 'utf8'))) {
    const q = pages.get(p.id);
    for (const field of ['requires', 'companion', 'category', 'kind']) {
      if (JSON.stringify(p[field]) !== JSON.stringify(q?.[field])) manifestDrift.push({ page: p.id, field, manifest: p[field], plan: q?.[field] });
    }
  }
}
const items = new Map(), homes = new Map(), actualHomes = new Map(), aliases = new Map(), pubPages = new Set();
const externalContracts = JSON.parse(readFileSync('research/four-track-external-supplier-contracts.json', 'utf8'));
for (const i of externalContracts) {
  const prose = readFileSync(i.prose, 'utf8');
  if (!pages.has(i.page) || !prose.includes('`' + i.id + '`') || !prose.includes('`' + i.page + '`')) throw Error(`Stale external supplier contract: ${i.id}`);
  items.set(i.id, i); homes.set(i.id, i.page);
}
for (const p of plan.pages) for (const it of p.items ?? []) {
  const i = typeof it === 'string' ? { id: it } : it;
  items.set(i.id, { ...i, page: p.id }); homes.set(i.id, p.id);
}
for (const i of proposed) { items.set(i.id, i); homes.set(i.id, i.page); }
for (const cat of readdirSync('library', { withFileTypes: true }).filter(e => e.isDirectory())) {
  for (const f of readdirSync(`library/${cat.name}`).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const p = read(`library/${cat.name}/${f}`), id = f.slice(0, -3);
    if (p.status === 'published') pubPages.add(id);
    for (const it of [...(p.items ?? []), ...(p.examples ?? [])]) {
      if (!actualHomes.has(it)) actualHomes.set(it, []);
      actualHomes.get(it).push(id);
    }
  }
}
for (const f of readdirSync('items').filter(f => f.endsWith('.md'))) {
  const i = read(`items/${f}`);
  const hs = actualHomes.get(i.id) ?? [];
  const home = hs.find(h => pages.get(h)?.kind !== 'B') ?? hs[0] ?? homes.get(i.id);
  items.set(i.id, { ...i, page: home });
  if (home) homes.set(i.id, home);
  for (const a of i.aliases ?? []) aliases.set(a, i.id);
}
const resolve = id => items.has(id) ? id : aliases.get(id) ?? id;
const authoredHomeDrift = proposed.filter(i => actualHomes.has(i.id) && !actualHomes.get(i.id).includes(i.page)).map(i => ({ item: i.id, proposedPage: i.page, actualPages: actualHomes.get(i.id) }));
const edges = i => [...(i.deps ?? []), ...(i.justified_by ?? []), ...(i.forward_refs ?? [])].map(resolve);
const reachPages = id => {
  const seen = new Set();
  function walk(p) { if (seen.has(p)) return; seen.add(p); for (const d of pages.get(p)?.requires ?? []) walk(d); }
  walk(id); return seen;
};
const pageClosure = new Map(plan.pages.map(p => [p.id, reachPages(p.id)]));
const categories = new Set(['homological-algebra', 'braid-groups', 'quantum-groups-and-crystal-bases', 'kazhdan-lusztig-theory']);
const futureTarget = proposed.filter(i => categories.has(pages.get(i.page)?.category));
const target = [...items.values()].filter(i => categories.has(pages.get(i.page)?.category) && i.proved_here !== false);
// Also validate the symmetric-group proposed consumers; renamed suppliers must
// not strand their incoming references outside the four supplier categories.
const auditRoots = [...target, ...proposed.filter(i => !categories.has(pages.get(i.page)?.category))];
const proposalIndex = new Map(), duplicateProposedIds = [];
for (const [n, i] of proposed.entries()) {
  if (proposalIndex.has(i.id)) duplicateProposedIds.push(i.id);
  proposalIndex.set(i.id, n);
}
const samePageForwardDependencies = [], forwardPageDependencies = [];
for (const i of proposed) for (const d of i.deps ?? []) {
  const id = resolve(d), home = homes.get(id);
  if (home === i.page && proposalIndex.has(id) && proposalIndex.get(id) >= proposalIndex.get(i.id)) samePageForwardDependencies.push({ item: i.id, dependency: id });
  if (home !== i.page && pages.get(home)?.order >= pages.get(i.page)?.order) forwardPageDependencies.push({ item: i.id, dependency: id, supplier: home });
}
const missing = [], outsideClosure = [], bTargets = [], cycles = [], recordedPaths = [], draftPaths = [], unhydratedBoundaries = [];
for (const i of auditRoots) for (const d of edges(i)) {
  if (!items.has(d)) missing.push({ item: i.id, dependency: d });
  const home = homes.get(d);
  if (home && !pageClosure.get(i.page)?.has(home)) outsideClosure.push({ item: i.id, page: i.page, dependency: d, supplier: home });
  if (home !== i.page && pages.get(home)?.kind === 'B') bTargets.push({ item: i.id, dependency: d, page: home });
}
for (const root of auditRoots) {
  const seen = new Set();
  function walk(id, path) {
    if (seen.has(id)) return; seen.add(id);
    const i = items.get(id); if (!i) return;
    if (i.status === 'prose-only-unhydrated') { unhydratedBoundaries.push({ root: root.id, supplier: id, page: i.page }); return; }
    if (i.proved_here === false) { recordedPaths.push({ root: root.id, path }); return; }
    if (i.status === 'draft' && pubPages.has(i.page)) draftPaths.push({ root: root.id, supplier: id, page: i.page });
    for (const d of edges(i)) walk(d, [...path, d]);
  }
  walk(root.id, [root.id]);
}
// deps-only cycles: justified_by deliberately closes a definition/theorem pair.
const visited = new Set(), active = new Set();
function dfs(id, path) {
  if (active.has(id)) { cycles.push([...path.slice(path.indexOf(id)), id]); return; }
  if (visited.has(id)) return; visited.add(id); active.add(id);
  for (const d of items.get(id)?.deps ?? []) dfs(resolve(d), [...path, id]);
  active.delete(id);
}
auditRoots.forEach(i => dfs(i.id, []));
const targetIds = new Set(target.map(i => i.id));
const consumers = [];
for (const i of items.values()) for (const d of edges(i)) if (targetIds.has(d) && i.page !== homes.get(d)) {
  consumers.push({ supplier: d, supplierPage: homes.get(d), consumer: i.id, consumerPage: i.page, published: i.status === 'published' });
}
const reverse = new Map();
for (const i of items.values()) for (const d of edges(i)) {
  if (!reverse.has(d)) reverse.set(d, new Set());
  reverse.get(d).add(i.id);
}
const publishedImpact = roots => {
  const seen = new Set(roots), queue = [...roots], impact = new Set();
  for (let n = 0; n < queue.length; n++) for (const id of reverse.get(queue[n]) ?? []) {
    if (items.get(id)?.status === 'published') impact.add(id);
    if (!seen.has(id)) { seen.add(id); queue.push(id); }
  }
  return [...impact].sort();
};
const futureSupplierInventory = [...new Set(proposed.map(i => pages.get(i.page)?.kind === 'B' ? pages.get(i.page).companion : i.page))].map(page => {
  const ids = proposed.filter(i => i.page === page || i.page === pages.get(page)?.companion).map(i => i.id);
  const set = new Set(ids);
  return { page, role: categories.has(pages.get(page)?.category) ? 'four-track-supplier' : 'symmetric-group-consumer', proposedItems: ids.length,
    directPublishedConsumers: [...new Set(ids.flatMap(id => [...(reverse.get(id) ?? [])]).filter(id => items.get(id)?.status === 'published'))].sort(),
    transitivePublishedImpact: publishedImpact(ids) };
});
const legacyBDependencyRepairs = bTargets.filter(e => items.get(e.item)?.status === 'published').map(e => ({ ...e, mode: 'phase-3-published-read-only', publishedImpact: publishedImpact([e.item]) }));
const sharedLieRepairInventory = externalContracts.filter(i => i.reconciliation_role === 'shared-lie-serre-repair').map(i => ({
  id: i.id, page: i.page,
  directPublishedConsumers: [...(reverse.get(i.id) ?? [])].filter(id => items.get(id)?.status === 'published').sort(),
  transitivePublishedImpact: publishedImpact([i.id])
}));
const phase2Manifest = readFileSync('research/phase-2-build-manifest.md', 'utf8');
const phase2Pairs = new Set([...phase2Manifest.matchAll(/^\| [^|]+ \| [DPR] \| [^|]+ \| `([^`]+)` \|$/gm)].map(m => m[1]));
const normalizePair = id => pages.get(id)?.kind === 'B' ? pages.get(id).companion : id;
const fourTrackPages = [...new Set(futureTarget.map(i => i.page))];
const futurePrerequisitePairsOutsidePhase2 = [...new Set(fourTrackPages.flatMap(p => [...pageClosure.get(p)]).filter(p => !pubPages.has(p)).map(normalizePair))].filter(p => !phase2Pairs.has(p)).sort((a, b) => pages.get(a)?.order - pages.get(b)?.order);
const proofGates = JSON.parse(readFileSync('research/four-track-proof-gates.json', 'utf8')).gates.map(g => ({ ...g, transitivePublishedImpact: publishedImpact(g.direct_consumers ?? []) }));
console.log(JSON.stringify({ snapshot: '2026-09-08', proposedItems: proposed.length, futureTargetItems: futureTarget.length, targetItems: target.length,
  publishedTargetItems: target.filter(i => i.status === 'published').length,
  auditedItemsIncludingSymmetricConsumers: auditRoots.length,
  evidenceLimit: 'Declared item edges only. Prose-only supplier boundaries are unhydrated, not proven leaves. Published proof bodies are not semantically certified.',
  manifestDrift, authoredHomeDrift, duplicateProposedIds, samePageForwardDependencies, forwardPageDependencies, missing, outsideClosure, bTargets, cycles, recordedPaths, draftPaths, unhydratedBoundaries, proofGates, legacyBDependencyRepairs, sharedLieRepairInventory, futurePrerequisitePairsOutsidePhase2, futureSupplierInventory, consumers }, null, 2));
if (manifestDrift.length || authoredHomeDrift.length || duplicateProposedIds.length || samePageForwardDependencies.length || forwardPageDependencies.length || missing.length || outsideClosure.length || bTargets.length || cycles.length || recordedPaths.length || proofGates.some(g => g.status === 'open')) process.exitCode = 1;
