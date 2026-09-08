// Read-only declared-dependency audit; does not certify proof adequacy.
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { yamlCandidates } from '../tools/paths.mjs';
const require = createRequire(import.meta.url);
let yaml;
for (const p of yamlCandidates()) { try { yaml = require(p); break; } catch {} }
if (!yaml) throw Error('Renderer YAML unavailable');
const run = process.argv[2] ?? 'phase-2-wave-1';
const json = p => JSON.parse(readFileSync(p, 'utf8'));
const front = p => {
  const text = readFileSync(p, 'utf8'), m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return { ...yaml.parse(m?.[1] ?? ''), body: text.slice(m?.[0].length ?? 0) };
};
const plan = new Map(json('research/plan-spec.json').pages.map(p => [p.id, p]));
const phase2 = new Set([...readFileSync('research/phase-2-build-manifest.md', 'utf8').matchAll(/^\| [^|]+ \| [DPR] \| [^|]+ \| `([^`]+)` \|$/gm)].map(m => m[1]));
const published = new Set(), items = new Map(), homes = new Map(), aliases = new Map();
for (const p of plan.values()) for (const i of p.items ?? []) {
  const v = typeof i === 'string' ? { id: i } : i;
  items.set(v.id, v); homes.set(v.id, p.id);
}
for (const c of readdirSync('library', { withFileTypes: true }).filter(e => e.isDirectory())) {
  for (const f of readdirSync(`library/${c.name}`).filter(f => f.endsWith('.md') && !f.startsWith('_'))) {
    const p = front(`library/${c.name}/${f}`), id = f.slice(0, -3);
    if (p.status === 'published') published.add(id);
    for (const i of [...(p.items ?? []), ...(p.examples ?? [])]) homes.set(i, id);
  }
}
for (const f of readdirSync('items').filter(f => f.endsWith('.md'))) {
  const i = front(`items/${f}`); items.set(i.id, i);
  for (const a of i.aliases ?? []) aliases.set(a, i.id);
}
const files = readdirSync('research').filter(f => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json')).sort();
const manifests = files.flatMap(f => json(`research/${f}`).map(p => ({ ...p, manifest: f })));
const runPages = new Set(manifests.map(p => p.id));
for (const p of manifests) for (const i of p.items ?? []) { items.set(i.id, i); homes.set(i.id, p.id); }
const pair = id => plan.get(id)?.kind === 'B' ? plan.get(id).companion : id;
const closure = id => {
  const seen = new Set();
  const walk = p => { if (seen.has(p)) return; seen.add(p); for (const d of plan.get(p)?.requires ?? []) walk(d); };
  walk(id); return seen;
};
const metadataDrift = [], pagePrerequisites = [], missingItems = [], undeclaredItemHomes = [], pendingItemSuppliers = [], recordedPaths = [], draftSupplierItems = [];
for (const p of manifests) {
  const canonical = plan.get(p.id);
  for (const field of ['requires', 'order', 'companion', 'category', 'kind']) if (JSON.stringify(p[field]) !== JSON.stringify(canonical?.[field])) metadataDrift.push({ page: p.id, field, manifest: p[field], plan: canonical?.[field] });
  const reachable = closure(p.id);
  for (const d of reachable) if (d !== p.id && d !== p.companion && !published.has(d)) pagePrerequisites.push({ consumer: p.id, supplier: d, pair: pair(d), inRun: runPages.has(d), inPhase2: phase2.has(pair(d)) });
  for (const root of p.items ?? []) {
    const seen = new Set();
    const walk = (id, path) => {
      id = items.has(id) ? id : aliases.get(id) ?? id;
      if (seen.has(id)) return; seen.add(id);
      const i = items.get(id);
      if (!i) { missingItems.push({ consumer: root.id, missing: id, path }); return; }
      if (i.proved_here === false) recordedPaths.push({ consumer: root.id, path: [...path, id] });
      const home = homes.get(id);
      if (id !== root.id && i.status === 'draft' && !runPages.has(home)) draftSupplierItems.push({ consumer: root.id, supplier: id, home });
      if (path.length === 1 && home && !reachable.has(home)) undeclaredItemHomes.push({ consumer: root.id, supplier: id, home, pair: pair(home), inPhase2: phase2.has(pair(home)) });
      if (id !== root.id && home && !published.has(home) && !runPages.has(home)) pendingItemSuppliers.push({ consumer: root.id, supplier: id, home, pair: pair(home), inPhase2: phase2.has(pair(home)) });
      // Conservatively include body-linked forwards outside Remarks. This is
      // a textual heuristic, not semantic certification of orientation.
      const body = (i.body ?? '').replace(/\n## Remarks[\s\S]*?(?=\n## |$)/g, '\n');
      const forwards = (i.forward_refs ?? []).filter(d => runPages.has(home) || body.includes(`[[${d}`));
      for (const d of [...(i.deps ?? []), ...(i.justified_by ?? []), ...forwards]) walk(d, [...path, id]);
    };
    walk(root.id, []);
  }
}
const unique = xs => [...new Map(xs.map(x => [JSON.stringify(x), x])).values()];
const directRunPrerequisites = manifests.flatMap(p => (p.requires ?? []).filter(d => d !== p.companion && !published.has(d)).map(d => ({ consumer: p.id, supplier: d, inRun: runPages.has(d), inPhase2: phase2.has(pair(d)) })));
const out = { run, evidenceLimit: 'Declared edges with body-linked forward-reference heuristic; inherited published proof defects remain Phase-3 obligations.', phase2Pairs: phase2.size, runPairs: manifests.filter(p => p.kind === 'A').length, batches: files.length, proposedItems: manifests.reduce((n,p) => n + p.items.length,0), metadataDrift, directRunPrerequisites, pagePrerequisites: unique(pagePrerequisites), missingItems: unique(missingItems), undeclaredItemHomes: unique(undeclaredItemHomes), pendingItemSuppliers: unique(pendingItemSuppliers), draftSupplierItems: unique(draftSupplierItems), recordedPaths: unique(recordedPaths) };
console.log(JSON.stringify(out, null, 2));
if (metadataDrift.length || missingItems.length || undeclaredItemHomes.length || pendingItemSuppliers.length || draftSupplierItems.length || recordedPaths.length || pagePrerequisites.some(e => !e.inRun)) process.exitCode = 1;
