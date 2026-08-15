#!/usr/bin/env node
// frontier-13 — THE STANDING CHECK, in the form that matters.
//
//   node scratchpad/frontier-13-closure-check.mjs [batch|all]
//
// For every scaffolded item on this run's pages, for every dep:
//   * a dep scaffolded in this run must live in the SAME pair, and (unless it is
//     the item's own page) not on a B page;
//   * otherwise the dep is resolved to its HOME PAGE in library/**, and that page
//     must lie in the transitive closure of the item's page `requires`.
//
// The weaker test — "is this dep published?" — is not `undeclared-prereq` and
// missed a real defect earlier in this run.

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REPO = '/Users/ianx/Projects/prestige-math-library';
const which = process.argv[2] ?? 'all';

const BATCHES = {
  1: ['symmetric-polynomials', 'algebraic-extensions-degree-and-finite-fields'],
  2: ['primitive-roots-and-unit-groups-modulo-n', 'semidirect-products-and-automorphism-groups'],
  3: ['diagonalisation-and-the-minimal-polynomial', 'inner-product-spaces-and-orthogonality'],
  4: ['erdos-hajnal-property-and-homogeneous-sets', 'regular-pairs-and-induced-counting'],
  5: ['tensor-products-of-modules'],
  6: ['adjunctions-units-and-counits'],
  7: ['linear-recurrences-and-rational-generating-functions'],
};

const spec = JSON.parse(readFileSync(join(REPO, 'research/plan-spec.json'), 'utf8'));
const pageById = new Map(spec.pages.map((p) => [p.id, p]));

// every page of this run, and the pair it belongs to
const pairOfPage = new Map();     // pageId -> pair key (the A page id)
const runPages = new Set();
for (const [, aIds] of Object.entries(BATCHES)) for (const a of aIds) {
  const ap = pageById.get(a);
  pairOfPage.set(a, a); runPages.add(a);
  if (ap?.companion) { pairOfPage.set(ap.companion, a); runPages.add(ap.companion); }
}

const scope = which === 'all'
  ? [...runPages]
  : (BATCHES[which] ?? []).flatMap((a) => [a, pageById.get(a)?.companion].filter(Boolean));
if (!scope.length) { console.error(`no pages for "${which}"`); process.exit(2); }

// where every run item lives, and its position
const pageOfRunItem = new Map(), posOfRunItem = new Map();
for (const pid of runPages) {
  const p = pageById.get(pid);
  (p.items ?? []).forEach((it, i) => { pageOfRunItem.set(it.id, pid); posOfRunItem.set(it.id, i); });
}

// home page of every composed item
const homePageOf = new Map();
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.md') && !e.name.startsWith('_')) {
      const src = readFileSync(fp, 'utf8');
      const pageId = src.match(/^page:\s*(\S+)/m)?.[1] ?? e.name.slice(0, -3);
      for (const key of ['items', 'examples']) {
        const m = src.match(new RegExp(`^${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm'));
        if (m) for (const id of m[1].split(',').map((s) => s.trim())) if (id && !homePageOf.has(id)) homePageOf.set(id, pageId);
      }
    }
  }
};
walk(join(REPO, 'library'));

// aliases, so a renamed published id still resolves to its home
const aliasOf = new Map();
for (const f of readdirSync(join(REPO, 'items'))) {
  if (!f.endsWith('.md')) continue;
  const src = readFileSync(join(REPO, 'items', f), 'utf8');
  const m = src.match(/^aliases:\s*\[([^\]]*)\]/m);
  if (m) for (const a of m[1].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, ''))) if (a) aliasOf.set(a, f.slice(0, -3));
}

const closureCache = new Map();
const closure = (pid) => {
  if (closureCache.has(pid)) return closureCache.get(pid);
  const out = new Set(); closureCache.set(pid, out);
  for (const r of pageById.get(pid)?.requires ?? []) { out.add(r); for (const t of closure(r)) out.add(t); }
  return out;
};

const isB = (pid) => (pageById.get(pid)?.kind ?? (pid.endsWith('-examples') ? 'B' : 'A')) === 'B';

const counts = { items: 0, deps: 0, published_deps: 0, in_pair_deps: 0 };
const v = { out_of_closure: [], cross_pair: [], b_leaf: [], unresolved: [], order: [], duplicate_ids: [] };

const seen = new Map();
for (const pid of scope) {
  const p = pageById.get(pid);
  const cl = closure(pid);
  for (const it of p.items ?? []) {
    counts.items++;
    if (seen.has(it.id)) v.duplicate_ids.push(`${it.id} on ${seen.get(it.id)} and ${pid}`);
    seen.set(it.id, pid);
    for (const d of it.deps ?? []) {
      counts.deps++;
      const runHome = pageOfRunItem.get(d);
      if (runHome) {
        counts.in_pair_deps++;
        if (pairOfPage.get(runHome) !== pairOfPage.get(pid))
          v.cross_pair.push(`${it.id} (${pid}) -> ${d} (${runHome}) — different pair`);
        else if (isB(runHome) && runHome !== pid)
          v.b_leaf.push(`${it.id} (${pid}) -> ${d}, homed on examples page ${runHome}`);
        else if (runHome === pid && posOfRunItem.get(d) > posOfRunItem.get(it.id))
          v.order.push(`${pid}: ${it.id} depends on ${d}, which appears LATER on the page`);
        continue;
      }
      const canonical = aliasOf.get(d) ?? d;
      const home = homePageOf.get(d) ?? homePageOf.get(canonical);
      if (!home) { v.unresolved.push(`${it.id} (${pid}) -> ${d}: no home page in library/**`); continue; }
      counts.published_deps++;
      if (home === pid) continue;
      if (isB(home)) { v.b_leaf.push(`${it.id} (${pid}) -> published ${d}, homed on examples page ${home}`); continue; }
      if (!cl.has(home)) v.out_of_closure.push(`${it.id} (${pid}) -> ${d}, homed on ${home}, NOT in the declared closure`);
    }
  }
}

console.log(`closure check [${which}]: ${scope.length} pages, ${counts.items} items, ${counts.deps} deps ` +
  `(${counts.published_deps} published, ${counts.in_pair_deps} in-pair)`);
let bad = 0;
for (const [k, list] of Object.entries(v)) {
  console.log(`  ${k}: ${list.length}`);
  for (const l of list) { console.log('      ' + l); bad++; }
}
console.log(JSON.stringify({
  scope: which, pages: scope.length, items: counts.items, deps: counts.deps,
  published_deps: counts.published_deps, in_pair_deps: counts.in_pair_deps,
  out_of_closure: v.out_of_closure.length, cross_pair: v.cross_pair.length,
  b_leaf: v.b_leaf.length, unresolved: v.unresolved.length,
  same_page_order: v.order.length, duplicate_ids: v.duplicate_ids.length,
}));
process.exit(bad ? 1 : 0);
