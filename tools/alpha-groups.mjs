#!/usr/bin/env node
// alpha-groups — validate (and describe) the assignment of batches to Alphas.
//
// WHY AN AGENT DECIDES THIS. Group Alphas were assigned by chopping the sorted
// batch list into consecutive threes. That is deterministic, which is why it was
// acceptable, but it is not *sound*: on `frontier-14` it gave one Alpha
// linear-algebra + number-theory + category-theory — three unrelated subjects in
// one head — while splitting topology across two different Alphas, so neither
// could see the cross-references between its own pages.
//
// Minimising inter-dependencies across Alphas is a judgment about mathematical
// relatedness. Category is a good proxy and is mechanical, but it does not decide
// the residual: with five categories and three Alphas somebody must pair two
// unrelated singletons, and which two is a question the data does not answer.
// So an agent proposes the partition and this validates it.
//
// THIS IS NOT `dispatch-planning`, which the roles rule reserves to code.
// The engine still decides *which units are uncovered* and *what to dispatch*;
// this only decides *how to group work that is already owed*, and every structural
// property of the result is checked here rather than trusted.
//
//   node tools/alpha-groups.mjs --run <run> [--facts] [--json]
//
// --facts prints what an assigning agent needs: each batch's categories, item
// count, and the cross-batch dependency edges. Without it, the tool validates
// `research/<run>-alpha-groups.json`.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const wantFacts = argv.includes('--facts');
const asJson = argv.includes('--json');
// The alpha lane cap and the owner's per-Alpha batch bound. Both come from
// dispatch.mjs / CLAUDE.md; stated once here so a change is a one-line edit.
// 3 -> 4 (owner, 2026-08-24), tracking the alpha lane cap in dispatch.mjs.
const MAX_GROUPS = Number(opt('max-groups', '4'));
const MAX_BATCHES_PER_GROUP = Number(opt('max-batches', '3'));

if (!run) {
  console.error('usage: node tools/alpha-groups.mjs --run <run> [--facts] [--max-groups N] [--max-batches N] [--json]');
  process.exit(2);
}

// ---- the run's batches, their categories, and who depends on whom ------------
const manifests = readdirSync('research')
  .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json'))
  .sort((a, b) => Number(a.match(/batch-(\d+)/)[1]) - Number(b.match(/batch-(\d+)/)[1]));
if (!manifests.length) { console.error(`alpha-groups: no batch manifests for ${run}`); process.exit(2); }

const batch = new Map();          // batch id -> {categories:Set, pages:[], items:Set, count}
const itemOwner = new Map();      // item id -> batch id
for (const f of manifests) {
  const id = f.match(/batch-(\d+)/)[1];
  const pages = JSON.parse(readFileSync(join('research', f), 'utf8'));
  const rec = { id, categories: new Set(), pages: [], items: new Set(), deps: new Set() };
  for (const p of pages) {
    if (p.category) rec.categories.add(p.category);
    if (p.kind === 'A') rec.pages.push(p.id);
    for (const it of p.items ?? []) {
      const iid = typeof it === 'string' ? it : it.id;
      rec.items.add(iid);
      itemOwner.set(iid, id);
      for (const d of (typeof it === 'string' ? [] : it.deps ?? [])) rec.deps.add(d);
    }
  }
  batch.set(id, rec);
}

// A cross-batch edge: an item in batch X depends on an item owned by batch Y.
// These are the references a single Alpha can see end to end only if it owns
// both sides.
const edges = new Map();          // "X->Y" -> count
for (const [id, rec] of batch) {
  for (const d of rec.deps) {
    const owner = itemOwner.get(d);
    if (owner && owner !== id) edges.set(`${id}->${owner}`, (edges.get(`${id}->${owner}`) ?? 0) + 1);
  }
}

if (wantFacts) {
  const facts = {
    run,
    max_groups: MAX_GROUPS,
    max_batches_per_group: MAX_BATCHES_PER_GROUP,
    batches: [...batch.values()].map((b) => ({
      batch: b.id,
      categories: [...b.categories].sort(),
      a_pages: b.pages,
      items: b.items.size,
    })),
    cross_batch_dependencies: [...edges.entries()]
      .map(([k, n]) => ({ from: k.split('->')[0], to: k.split('->')[1], edges: n }))
      .sort((x, y) => y.edges - x.edges),
  };
  console.log(JSON.stringify(facts, null, 2));
  process.exit(0);
}

// ---- validate the assignment -------------------------------------------------
const path = `research/${run}-alpha-groups.json`;
const errors = [];
const warnings = [];
if (!existsSync(path)) {
  console.error(`ERROR alpha-groups-missing: ${path} does not exist; the assignment stage must write it`);
  process.exit(1);
}
let groups;
try { groups = JSON.parse(readFileSync(path, 'utf8')); }
catch (cause) { console.error(`ERROR alpha-groups-read: ${path}: ${cause.message}`); process.exit(1); }
if (!Array.isArray(groups)) groups = groups?.groups;
if (!Array.isArray(groups)) { console.error(`ERROR alpha-groups-shape: ${path}: expected an array of {label, covers, rationale}`); process.exit(1); }

const seen = new Map();
for (const g of groups) {
  if (!g || typeof g.label !== 'string' || !/^[a-z]$/.test(g.label)) {
    errors.push(`alpha-groups-shape: every group needs a single-letter \`label\`; got ${JSON.stringify(g?.label)}`);
    continue;
  }
  if (!Array.isArray(g.covers) || !g.covers.length) {
    errors.push(`alpha-groups-shape: group ${g.label} needs a non-empty \`covers\` array of batch ids`);
    continue;
  }
  // A partition chosen without a stated reason cannot be reviewed, and the
  // residual choice here is exactly the part no rule determines.
  if (typeof g.rationale !== 'string' || g.rationale.trim().length < 20) {
    errors.push(`alpha-groups-rationale: group ${g.label} needs a concrete reason for THIS grouping`);
  }
  if (g.covers.length > MAX_BATCHES_PER_GROUP) {
    errors.push(`alpha-groups-oversize: group ${g.label} owns ${g.covers.length} batches; the cap is ${MAX_BATCHES_PER_GROUP}`);
  }
  for (const b of g.covers.map(String)) {
    if (!batch.has(b)) { errors.push(`alpha-groups-unknown-batch: group ${g.label} names batch ${b}, which this run does not have`); continue; }
    if (seen.has(b)) errors.push(`alpha-groups-duplicate: batch ${b} is owned by both ${seen.get(b)} and ${g.label}`);
    seen.set(b, g.label);
  }
}
if (groups.length > MAX_GROUPS) {
  errors.push(`alpha-groups-too-many: ${groups.length} groups exceeds the alpha lane cap of ${MAX_GROUPS}`);
}
if (new Set(groups.map((g) => g?.label)).size !== groups.length) {
  errors.push('alpha-groups-duplicate-label: two groups share a label');
}
for (const b of batch.keys()) {
  if (!seen.has(b)) errors.push(`alpha-groups-uncovered: batch ${b} is assigned to no Alpha`);
}

// THE QUALITY CHECK THAT IS ACTUALLY DECIDABLE.
//
// A category must not be split across Alphas unless it genuinely cannot fit in
// one — that is, unless it has more batches than a single Alpha may own. On
// `frontier-14` topology had three batches and the cap is three, so splitting it
// across two Alphas (as positional chunking did) was avoidable, and it cost the
// one thing a group Alpha is for: seeing its own pages' cross-references.
const byCategory = new Map();
for (const [id, rec] of batch) {
  for (const c of rec.categories) {
    if (!byCategory.has(c)) byCategory.set(c, new Set());
    byCategory.get(c).add(id);
  }
}
for (const [cat, ids] of byCategory) {
  const owners = new Set([...ids].map((b) => seen.get(b)).filter(Boolean));
  if (owners.size > 1 && ids.size <= MAX_BATCHES_PER_GROUP) {
    errors.push(`alpha-groups-category-split: ${cat} has ${ids.size} batch(es) and fits in one Alpha, `
      + `but is split across ${[...owners].sort().join(', ')}. An Alpha that owns only part of a category `
      + `cannot see its own pages' cross-references.`);
  }
}

// Reported, never failed: a group spanning categories is sometimes forced, and
// the count of dependency edges left crossing group boundaries is the number to
// minimise rather than a threshold to pass.
for (const g of groups) {
  const cats = new Set();
  for (const b of (g.covers ?? []).map(String)) for (const c of batch.get(b)?.categories ?? []) cats.add(c);
  if (cats.size > 1) warnings.push(`alpha-groups-mixed-category: group ${g.label} spans ${[...cats].sort().join(' + ')}`);
}
let crossing = 0;
for (const [k, n] of edges) {
  const [from, to] = k.split('->');
  if (seen.get(from) && seen.get(to) && seen.get(from) !== seen.get(to)) crossing += n;
}

const summary = {
  run, groups: groups.length, batches: batch.size,
  cross_group_dependency_edges: crossing,
  errors: errors.length, warnings: warnings.length,
};
if (asJson) console.log(JSON.stringify({ summary, errors, warnings }, null, 2));
else {
  console.log(`alpha-groups: ${groups.length} group(s) over ${batch.size} batch(es); `
    + `${crossing} dependency edge(s) cross a group boundary`);
  for (const w of warnings) console.warn(`WARN ${w}`);
  for (const e of errors) console.error(`ERROR ${e}`);
}
process.exit(errors.length ? 1 : 0);
