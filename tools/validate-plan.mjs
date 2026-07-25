#!/usr/bin/env node
// validate-plan.mjs — mechanical circularity + ordering validator for the
// planned page stack. Run BEFORE authoring a single item.
//
//   node validate-plan.mjs plan-spec.json [--repo /root/Projects/prestige-math-library]
//
// Guarantees checked (each a hard error unless marked WARN):
//   1. resolve       every dep resolves to a planned item or an item already in items/
//   2. item-cycle    the item dependency graph is acyclic
//   3. page-cycle    the induced page graph is acyclic
//   4. forward-ref   no item depends on an item that lives on a LATER page
//   5. intra-order   within a page, an item's same-page deps precede it in the list
//   6. b-leaf        no item depends on an item that lives on a B (examples) page
//   7. orphan        every dep target has a home page (page-level prereqs need one)
//   8. dup-id        no id declared twice, and no clash with an existing item id
//   9. prefix        item id prefix matches its declared kind (SCHEMA.md §2)
//  10. size          WARN when an A page exceeds --max-items (default 30)
//  11. companion     every A page names a B companion that exists, and vice versa
//
// PAGE-LEVEL PREREQUISITES (`requires: [pageId, ...]` on each page)
//
// Item deps alone cannot validate a stack whose item lists are not written yet:
// a page with no items induces no edges, so a spec of empty pages would pass
// vacuously and prove nothing. `requires` states the reading order as a claim in
// its own right, so the stack is checkable from the day it is designed, and the
// item lists fill in page by page without ever weakening the guarantee.
//
//  12. requires-resolve   every `requires` entry names a declared page
//  13. prereq-order       a declared prerequisite has a STRICTLY LOWER order
//  14. requires-cycle     the declared page graph is acyclic
//  15. undeclared-prereq  every page edge induced by an item dep lies inside the
//                         transitive closure of that page's declared `requires`.
//                         THIS IS THE TEETH: it stops an item from quietly
//                         reaching into a page the design never admitted needing.
//  16. b-requires-a       a B page declares its own A page as a prerequisite
//  17. redundant-prereq   WARN when a direct requirement is already implied
//                         transitively (keep `requires` a transitive reduction,
//                         matching the birds-eye flowchart rule in CLAUDE.md)
//
// Exit code 0 iff there are no hard errors.

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const specPath = args.find((a) => !a.startsWith('--'));
const repo = argVal('--repo') ?? '/root/Projects/prestige-math-library';
const maxItems = Number(argVal('--max-items') ?? 30);
if (!specPath) die('usage: validate-plan.mjs <plan-spec.json> [--repo DIR] [--max-items N]');

function argVal(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}
function die(msg) { console.error(msg); process.exit(2); }

const PREFIX_OF_KIND = {
  definition: 'def', theorem: 'thm', lemma: 'lem', proposition: 'prop',
  corollary: 'cor', example: 'ex', counterexample: 'cex',
  'false-statement': 'fs', remark: 'rem',
};

// ---------------------------------------------------------------- load

const spec = JSON.parse(readFileSync(specPath, 'utf8'));

/** ids already published/drafted in the repo, plus their aliases */
const existing = new Set();
try {
  for (const f of readdirSync(join(repo, 'items'))) {
    if (!f.endsWith('.md')) continue;
    existing.add(f.slice(0, -3));
    const src = readFileSync(join(repo, 'items', f), 'utf8');
    const m = src.match(/^aliases:\s*\[([^\]]*)\]/m);
    if (m) for (const a of m[1].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')))
      if (a) existing.add(a);
  }
} catch (e) { console.error(`warning: could not read ${repo}/items (${e.code}); existing-id check is off`); }

const errors = [];
const warns = [];
const forward = [];   // whitelisted B-page forward citations, reported not hidden
const existingClash = [];   // [plannedId, pageId] — adjudicated once page homes are known
let authored = 0;     // planned items already written to items/
const err = (code, msg) => errors.push(`[${code}] ${msg}`);
const warn = (code, msg) => warns.push(`[${code}] ${msg}`);

// ---------------------------------------------------------------- index

const pages = [...spec.pages].sort((a, b) => a.order - b.order);
const pageOfItem = new Map();   // itemId -> page
const itemById = new Map();     // itemId -> item
const posInPage = new Map();    // itemId -> index within its page

for (const p of pages) {
  // "P" = a page ALREADY PUBLISHED in the repo, declared here only so the new
  // stack can name it as a prerequisite. It has no companion and no item list.
  // 'X' = a page that RECORDS results this library does not prove (SCHEMA §3
  // proved_here). It has no companion, no item ceiling, and no prerequisites:
  // it states, it does not derive, so anything may depend on it.
  if (!['A', 'B', 'P', 'X'].includes(p.kind)) err('kind', `page ${p.id}: kind must be "A", "B", "P" or "X"`);
  p.items.forEach((it, i) => {
    if (itemById.has(it.id)) err('dup-id', `${it.id} declared on both ${pageOfItem.get(it.id).id} and ${p.id}`);
    // An id that already exists in items/ is only a violation if it is HOMED on a
    // different page. Once a planned page starts being authored its items exist on
    // disk, and flagging those would make the validator fail for the rest of the
    // build. Resolved after publishedPageItems is known, below.
    else if (existing.has(it.id)) existingClash.push([it.id, p.id]);
    itemById.set(it.id, it);
    pageOfItem.set(it.id, p);
    posInPage.set(it.id, i);

    const want = PREFIX_OF_KIND[it.kind];
    if (!want) err('prefix', `${it.id}: unknown kind "${it.kind}"`);
    else if (!it.id.startsWith(want + '-')) err('prefix', `${it.id}: kind ${it.kind} requires prefix "${want}-"`);
  });
}

const pageOrder = new Map(pages.map((p, i) => [p.id, i]));

// ---------------------------------------------------------------- checks 1,4,5,6,7

for (const p of pages) {
  for (const it of p.items) {
    for (const d of it.deps ?? []) {
      if (existing.has(d)) continue;                      // satisfied by published content
      const dp = pageOfItem.get(d);
      if (!dp) { err('resolve', `${it.id} (${p.id}) depends on "${d}", which is neither planned nor in items/`); continue; }
      // "B pages are leaves" means nothing OUTSIDE a B page may depend on it. An
      // item may still cite an earlier item on its own B page — that is ordinary
      // intra-page structure, checked by `intra-order` below.
      if (dp.kind === 'B' && dp.id !== p.id)
        err('b-leaf', `${it.id} (${p.id}) depends on ${d}, which lives on examples page ${dp.id}; B pages must be leaves`);
      if (dp.id === p.id) {
        if (posInPage.get(d) > posInPage.get(it.id))
          err('intra-order', `${p.id}: ${it.id} depends on ${d}, which appears LATER on the same page`);
      } else if (pageOrder.get(dp.id) > pageOrder.get(p.id)) {
        // B pages are leaves, so a forward citation from one creates no cycle.
        // It is still only allowed when the page WHITELISTS the target, so the
        // exception stays visible and bounded instead of silently spreading.
        if (p.kind === 'B' && (p.forwardRefs ?? []).includes(dp.id))
          forward.push(`${it.id} (${p.id}) -> ${d} (${dp.id})`);
        else
          err('forward-ref', `${it.id} (${p.id}, order ${p.order}) depends on ${d} (${dp.id}, order ${dp.order}) — a LATER page`);
      }
    }
  }
}

// orphan: a planned dep target must have a home page (it does by construction),
// but an EXISTING repo item used as a dep should also live on some published page.
const publishedPageItems = new Set();
const homePageOf = new Map();          // itemId -> the page id in library/ that lists it
try {
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const fp = join(dir, e.name);
      if (e.isDirectory()) walk(fp);
      else if (e.name.endsWith('.md') && !e.name.startsWith('_')) {
        const src = readFileSync(fp, 'utf8');
        const pageId = src.match(/^page:\s*(\S+)/m)?.[1] ?? e.name.slice(0, -3);
        for (const key of ['items', 'examples']) {
          const m = src.match(new RegExp(`^${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm'));
          if (m) for (const id of m[1].split(',').map((s) => s.trim())) if (id) {
            publishedPageItems.add(id);
            if (!homePageOf.has(id)) homePageOf.set(id, pageId);
          }
        }
      }
    }
  };
  walk(join(repo, 'library'));
} catch { /* ignore */ }

for (const p of pages)
  for (const it of p.items)
    for (const d of it.deps ?? [])
      if (existing.has(d) && !publishedPageItems.has(d) && !itemById.has(d))
        warn('orphan', `${it.id} depends on existing item ${d}, which is on NO page — it will be silently dropped from page-level Prerequisites`);

// An id planned here that already exists in items/ is a genuine immutability
// violation only when it is homed on a DIFFERENT page that is already composed.
// Otherwise it is simply an item of this plan that has been authored already.
for (const [id, pid] of existingClash) {
  const home = homePageOf.get(id);                 // the page in library/ that actually lists it
  if (home && home !== pid)
    err('dup-id', `${id} on ${pid} clashes with an item already composed onto ${home} (ids are IMMUTABLE)`);
  else authored++;
}

// ---------------------------------------------------------------- check 2: item cycles (Tarjan)

function sccs(nodes, succ) {
  let idx = 0; const index = new Map(), low = new Map(), onStack = new Set(), st = [], out = [];
  const strong = (v) => {
    index.set(v, idx); low.set(v, idx); idx++; st.push(v); onStack.add(v);
    for (const w of succ(v)) {
      if (!index.has(w)) { strong(w); low.set(v, Math.min(low.get(v), low.get(w))); }
      else if (onStack.has(w)) low.set(v, Math.min(low.get(v), index.get(w)));
    }
    if (low.get(v) === index.get(v)) {
      const comp = []; let w;
      do { w = st.pop(); onStack.delete(w); comp.push(w); } while (w !== v);
      out.push(comp);
    }
  };
  for (const v of nodes) if (!index.has(v)) strong(v);
  return out;
}

const itemSucc = (id) => (itemById.get(id)?.deps ?? []).filter((d) => itemById.has(d));
for (const comp of sccs([...itemById.keys()], itemSucc)) {
  const selfLoop = comp.length === 1 && itemSucc(comp[0]).includes(comp[0]);
  if (comp.length > 1 || selfLoop) err('item-cycle', `dependency cycle among items: ${comp.join(' -> ')}`);
}

// ---------------------------------------------------------------- check 3: page cycles

const pageSucc = (pid) => {
  const p = pages.find((x) => x.id === pid), out = new Set();
  for (const it of p.items) for (const d of it.deps ?? []) {
    const dp = pageOfItem.get(d);
    if (dp && dp.id !== pid) out.add(dp.id);
  }
  return [...out];
};
for (const comp of sccs(pages.map((p) => p.id), pageSucc))
  if (comp.length > 1) err('page-cycle', `dependency cycle among pages: ${comp.join(' -> ')}`);

// ------------------------------------------- checks 12-17: declared page prereqs

const pageById = new Map(pages.map((p) => [p.id, p]));

for (const p of pages)
  for (const r of p.requires ?? []) {
    if (!pageById.has(r)) { err('requires-resolve', `page ${p.id} requires "${r}", which is not a declared page`); continue; }
    if (pageOrder.get(r) >= pageOrder.get(p.id))
      err('prereq-order', `page ${p.id} (order ${p.order}) requires ${r} (order ${pageById.get(r).order}) — a prerequisite must come STRICTLY earlier`);
  }

const reqSucc = (pid) => (pageById.get(pid)?.requires ?? []).filter((r) => pageById.has(r));
for (const comp of sccs(pages.map((p) => p.id), reqSucc))
  if (comp.length > 1) err('requires-cycle', `cycle among declared page prerequisites: ${comp.join(' -> ')}`);

/** transitive closure of declared `requires`, memoised. */
const closureCache = new Map();
function reqClosure(pid) {
  if (closureCache.has(pid)) return closureCache.get(pid);
  const out = new Set();
  closureCache.set(pid, out);                       // cycle guard; errors reported above
  for (const r of reqSucc(pid)) { out.add(r); for (const t of reqClosure(r)) out.add(t); }
  return out;
}

for (const p of pages) {
  if ((p.forwardRefs ?? []).length && p.kind !== 'B')
    err('forward-whitelist', `page ${p.id} declares forwardRefs but is not a B page; only examples pages are leaves`);
  const closure = reqClosure(p.id);
  for (const q of pageSucc(p.id))
    if (!closure.has(q) && !(p.forwardRefs ?? []).includes(q))
      err('undeclared-prereq', `page ${p.id} has an item depending on ${q}, which is NOT in the closure of its declared requires — either add it or drop the dependency`);
  // transitive reduction hygiene
  for (const r of p.requires ?? [])
    for (const other of p.requires ?? [])
      if (other !== r && reqClosure(other).has(r))
        warn('redundant-prereq', `page ${p.id} requires ${r} directly, but already reaches it through ${other}`);
  if (p.kind === 'B') {
    const a = pages.find((q) => q.kind === 'A' && q.companion === p.id);
    if (a && !(p.requires ?? []).includes(a.id))
      err('b-requires-a', `examples page ${p.id} must declare its own A page ${a.id} as a prerequisite`);
  }
}

// ---------------------------------------------------------------- checks 10, 11

for (const p of pages) {
  if (p.kind === 'A' && p.items.length > maxItems)
    warn('size', `page ${p.id} has ${p.items.length} items (target <= ${maxItems}); consider splitting`);
  if (p.kind === 'A') {
    if (!p.companion) err('companion', `A page ${p.id} declares no companion examples page`);
    else if (!pages.some((q) => q.id === p.companion && q.kind === 'B'))
      err('companion', `A page ${p.id} names companion "${p.companion}", which is not a declared B page`);
  }
}
for (const p of pages)
  if (p.kind === 'B' && !pages.some((q) => q.kind === 'A' && q.companion === p.id))
    err('companion', `B page ${p.id} is not the companion of any A page`);

// ---------------------------------------------------------------- report

const totalItems = [...itemById.keys()].length;
const nOf = (k) => pages.filter((p) => p.kind === k).length;
const withItems = pages.filter((p) => p.items.length > 0).length;
console.log(`plan: ${pages.length} pages (${nOf('A')} A + ${nOf('B')} B + ${nOf('P')} already published), ${totalItems} new items, ${existing.size} existing ids available`);
const planned = pages.filter((p) => p.kind !== 'P');
console.log(`item lists written for ${withItems}/${planned.length} planned pages — the rest are validated at PAGE level only`);
if (authored) console.log(`${authored}/${totalItems} planned items already authored into items/`);

// declared reading order. `*` marks a page whose item list is not written yet, so
// its item-level dependencies have not been checked (nothing to check).
console.log('\nreading order and declared page prerequisites:');
for (const p of pages) {
  const pre = (p.requires ?? []).slice().sort((a, b) => pageOrder.get(a) - pageOrder.get(b));
  const mark = p.items.length ? ' ' : '*';
  console.log(`  ${String(p.order).padStart(4)}${mark} ${p.id.padEnd(52)} ${String(p.items.length).padStart(3)} items  <- ${pre.join(', ') || '(none)'}`);
}

if (forward.length) {
  console.log(`\n${forward.length} whitelisted forward citation(s) from examples pages (allowed: B pages are leaves):`);
  for (const f of forward) console.log('  ' + f);
}
if (warns.length) { console.log(`\n${warns.length} warning(s):`); for (const w of warns) console.log('  ' + w); }
if (errors.length) {
  console.log(`\n${errors.length} ERROR(s):`);
  for (const e of errors) console.log('  ' + e);
  console.log('\nFAIL');
  process.exit(1);
}
console.log(
  `\nOK — declared page order is acyclic and consistent; no item-level cycles, forward` +
  `\nreferences, B-page dependencies, or unresolved ids among the ${withItems} page(s) with item lists.` +
  (withItems < planned.length
    ? `\nNOTE: ${planned.length - withItems} planned page(s) carry no item list yet (marked * above). Their reading` +
      `\norder is guaranteed; their item dependencies are not yet asserted, so re-run this` +
      `\nafter writing each page's items.`
    : ''),
);
