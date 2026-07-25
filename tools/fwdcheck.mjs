#!/usr/bin/env node
// fwdcheck.mjs — the forward-reference gate.
//
//   node tools/fwdcheck.mjs [--ledger] [--json] [--quiet]
//
// Owner decisions, 2026-07-25:
//   (a) forward references ARE allowed: a page may point at material developed
//       later in the library;
//   (b) every forward reference must be VISIBLY different from everything else;
//   (c) the repo must REMEMBER every open forward reference and each must be
//       CLOSED eventually by a later page, with no circular dependency anywhere;
//   (d) the CONSEQUENCES of a forward reference (examples, corollaries, and so
//       on down the chain) must be visibly marked too, and such a consequence
//       may legitimately use the forward reference in its own proof.
//
// (b) and (d) are the renderer's job and key off `forward_refs` in frontmatter:
// see web/lib/library-forward.ts in the app repo. (a) and (c) are this tool's.
//
// TWO KINDS OF FORWARD REFERENCE, distinguished by WHERE the link appears.
//
//   ORIENTATION ONLY — the link occurs only in `## Remarks`. It carries no
//   logical weight: the item would stand unchanged if the remark were deleted.
//
//   LOAD BEARING — the link occurs in Statement, Statement refuted, Facts &
//   Assumptions, Proof or Refutation. The item genuinely rests on later
//   material. This is decision (d), and it is confined to CONSEQUENCE kinds
//   (example, counterexample, false-statement, remark, corollary). The spine of
//   the library, its definitions, lemmas, propositions and theorems, must stay
//   strictly ordered, so a load-bearing forward reference there is an error.
//
// WHY THIS CANNOT HIDE CIRCULAR REASONING.
//   * `deps` edges point strictly BACKWARD in plan order (depcheck's page-cycle
//     check and validate-plan's undeclared-prereq check together force it).
//   * `forward-not-later` forces every forward edge to point strictly FORWARD.
//   * Orientation-only edges therefore cannot close a loop with `deps` at all,
//     which `stack-cycle` re-verifies on real content.
//   * A load-bearing edge DOES pair an early page with a later one, so the PAGE
//     graph is legitimately entangled there. That is grouping, not circularity.
//     The real guarantee is at item level: `forward-cycle` runs the cycle check
//     over `deps` TOGETHER WITH every load-bearing forward edge, so a genuine
//     loop, an example that a later theorem turns out to need, is caught.
//
// HARD ERRORS
//   forward-undeclared     a wikilink resolves to nothing and the target is
//                          planned on a LATER page, but is not in `forward_refs`
//   forward-dangling       declared target is neither an existing item nor
//                          planned anywhere: it can never be closed
//   forward-not-later      declared target's home page is not strictly later in
//                          plan order (a backward or lateral dependency in
//                          disguise)
//   forward-same-page      declared target is on the citing item's own page;
//                          that is an ordinary link, not a forward reference
//   forward-in-deps        target also appears in `deps` or `justified_by`
//   forward-on-spine       a LOAD-BEARING forward reference on a definition,
//                          lemma, proposition or theorem
//   forward-unused         declared in frontmatter but never linked in the body
//   forward-cycle          a cycle in `deps` + load-bearing forward edges
//   link-unplanned         a wikilink resolves to nothing and the target is not
//                          planned at all: a typo or an abandoned id
//   stack-cycle            a cycle in the page graph induced by `deps` edges
//                          together with orientation-only forward edges
//   plan-order-broken      plan order is not topological for `requires`
//
// WARNINGS
//   open-on-published      a published item points forward at something not yet
//                          authored (renders as marked text, never a dead link)
//   page-link-unresolved   a wikilink in page prose resolves to nothing; pages
//                          have no `forward_refs`, so put forward references in
//                          an item's Remarks instead
//
// Exit 0 iff there are no hard errors.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const asJson = process.argv.includes('--json');
const quiet = process.argv.includes('--quiet');
const writeLedger = process.argv.includes('--ledger');

/** Kinds that may rest on later material. Everything else is the spine. */
const CONSEQUENCE_KINDS = new Set(['example', 'counterexample', 'false-statement', 'remark', 'corollary']);

const errors = [];
const warns = [];
const err = (code, msg) => errors.push({ code, msg });
const warn = (code, msg) => warns.push({ code, msg });

// ---------------------------------------------------------------- frontmatter

function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}

function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}

function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0, end = -1;
  for (let i = open; i < fm.length; i++) {
    if (fm[i] === '[') depth++;
    else if (fm[i] === ']' && --depth === 0) { end = i; break; }
  }
  if (end < 0) return [];
  return fm.slice(open + 1, end).split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

// ---------------------------------------------------------------- the plan

const plan = JSON.parse(readFileSync(join(REPO, 'research/plan-spec.json'), 'utf8'));
const planPage = new Map();          // pageId -> {order, requires, kind, title}
const plannedHome = new Map();       // itemId -> pageId
for (const p of plan.pages) {
  planPage.set(p.id, { order: p.order, requires: p.requires ?? [], kind: p.kind, title: p.title });
  for (const it of p.items ?? []) plannedHome.set(it.id, p.id);
}

// "Strictly later" is meaningless unless plan order is topological for
// `requires`. validate-plan asserts this too; assert it here so fwdcheck is
// sound standalone.
for (const [pid, p] of planPage)
  for (const r of p.requires) {
    const q = planPage.get(r);
    if (q && q.order >= p.order)
      err('plan-order-broken', `plan order is not topological: ${pid} (#${p.order}) requires ${r} (#${q.order})`);
  }

/** level(p) = 1 + max(level of its prerequisites); published pages are 0. */
const levelCache = new Map();
function level(pid) {
  if (levelCache.has(pid)) return levelCache.get(pid);
  const p = planPage.get(pid);
  if (!p) return 0;
  levelCache.set(pid, 0);                              // cycle guard
  const v = p.requires.length ? 1 + Math.max(...p.requires.map(level)) : 0;
  levelCache.set(pid, v);
  return v;
}

// ---------------------------------------------------------------- load items

const items = new Map();
const aliasTo = new Map();

for (const f of readdirSync(join(REPO, 'items')).sort()) {
  if (!f.endsWith('.md')) continue;
  const src = readFileSync(join(REPO, `items/${f}`), 'utf8');
  const { fm, body } = split(src);
  const id = scalar(fm, 'id') ?? basename(f, '.md');
  // Everything except Remarks is load bearing: Facts are what the proof cites,
  // a Statement citation is part of the assertion, and the Proof is the proof.
  const loadBearingText = body.replace(/\n## Remarks[\s\S]*?(?=\n## |$)/g, '\n');
  items.set(id, {
    id,
    kind: scalar(fm, 'kind'),
    file: `items/${f}`,
    status: scalar(fm, 'status'),
    deps: list(fm, 'deps'),
    justified: list(fm, 'justified_by'),
    forward: list(fm, 'forward_refs'),
    links: [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].trim()),
    loadBearingText,
  });
  for (const a of list(fm, 'aliases')) aliasTo.set(a, id);
}

const resolve = (x) => (items.has(x) ? x : aliasTo.get(x));

// ---------------------------------------------------------------- load pages

const actualHome = new Map();        // itemId -> pageId, from library/
const pageBodies = [];               // {rel, body} — scanned after all ids known
const realPages = new Set();
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) { walk(fp); continue; }
    if (!e.name.endsWith('.md') || e.name.startsWith('_')) continue;
    const { fm, body } = split(readFileSync(fp, 'utf8'));
    const pid = scalar(fm, 'page') ?? basename(e.name, '.md');
    realPages.add(pid);
    pageBodies.push({ rel: fp.slice(REPO.length + 1), body });
    for (const id of [...list(fm, 'items'), ...list(fm, 'examples')])
      if (!actualHome.has(id)) actualHome.set(id, pid);
  }
})(join(REPO, 'library'));

// Page prose may wikilink other PAGES as well as items, and page ids are not
// item ids, so both namespaces count as resolved here.
for (const { rel, body } of pageBodies)
  for (const m of body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) {
    const t = m[1].trim();
    if (resolve(t) || realPages.has(t) || planPage.has(t)) continue;
    warn('page-link-unresolved', `${rel}: wikilink [[${t}]] names neither an item nor a page; page prose cannot declare forward references, put it in an item's Remarks`);
  }

const homeOf = (id) => actualHome.get(id) ?? plannedHome.get(id);
const orderOf = (pid) => planPage.get(pid)?.order ?? Infinity;

// ------------------------------------------------------------------- checks

const open = [];        // forward refs whose target is not authored yet
const closed = [];      // forward refs whose target now exists
const loadBearingEdges = [];   // {from, to} genuine forward dependencies

for (const it of items.values()) {
  const home = homeOf(it.id);
  const declared = new Set(it.forward);

  for (const t of declared)
    if (!it.links.includes(t))
      err('forward-unused', `${it.file}: declares forward_refs "${t}" but never links it`);

  for (const t of declared) {
    if (it.deps.includes(t) || it.justified.includes(t))
      err('forward-in-deps', `${it.file}: "${t}" is in forward_refs AND in deps/justified_by; a forward reference is not a dependency`);

    const bearing = it.loadBearingText.includes('[[' + t);
    if (bearing && !CONSEQUENCE_KINDS.has(it.kind))
      err('forward-on-spine', `${it.file}: kind "${it.kind}" uses forward reference "${t}" outside Remarks; only ${[...CONSEQUENCE_KINDS].join('/')} may rest on later material, the spine must stay strictly ordered`);

    const th = homeOf(t);
    if (!th) { err('forward-dangling', `${it.file}: forward_refs "${t}" is planned nowhere and can never be closed`); continue; }
    if (th === home) { err('forward-same-page', `${it.file}: "${t}" is on this item's own page (${th}); that is an ordinary link, not a forward reference`); continue; }
    if (orderOf(th) <= orderOf(home))
      err('forward-not-later', `${it.file}: forward_refs "${t}" lives on ${th} (#${orderOf(th)}), which is NOT after ${home} (#${orderOf(home)}); this is a backward or lateral dependency`);

    if (bearing) loadBearingEdges.push({ from: it.id, to: t });

    const rec = { from: it.id, fromPage: home, to: t, toPage: th, toLevel: level(th), bearing };
    if (resolve(t)) closed.push(rec);
    else {
      open.push(rec);
      if (it.status === 'published')
        warn('open-on-published', `${it.file} is PUBLISHED and points forward at "${t}", not authored yet (closes on ${th})`);
    }
  }

  // Every link that points at a LATER page is a forward reference and must be
  // declared, whether or not it happens to resolve today. An undeclared one that
  // resolves is the dangerous case: it renders as an ordinary citation and the
  // reader is never told the material comes later.
  // `justified_by` is the library's OTHER sanctioned forward pointer: a
  // well-definedness discharge necessarily points at a later item, since that
  // item is about the object this one introduces (SCHEMA §3). It is already
  // sound-checked by depcheck's `justification-backward`, which verifies the
  // target really does depend on this item, so it needs no `forward_refs`
  // declaration and never counts as load bearing: discharging an obligation is
  // not the same as using a premise. The renderer still marks such links with
  // the forward accent, because they do point forward and the reader should see
  // it.
  const sanctioned = new Set([...declared, ...it.justified]);

  for (const l of it.links) {
    if (sanctioned.has(l)) continue;
    const r = resolve(l);
    const lh = r ? homeOf(r) : plannedHome.get(l);
    if (!lh) {
      if (!r) err('link-unplanned', `${it.file}: wikilink [[${l}]] resolves to nothing and is planned nowhere`);
      continue;                                      // resolves but sits on no page yet
    }
    if (lh === home) continue;                       // ordinary intra-page link
    if (orderOf(lh) > orderOf(home))
      err('forward-undeclared', `${it.file}: wikilink [[${l}]] points forward to ${lh} (#${orderOf(lh)}); declare it in forward_refs so it is marked as a forward reference`);
    else if (!r)
      err('link-unplanned', `${it.file}: wikilink [[${l}]] points at ${lh}, which is NOT later; it should already exist`);
  }
}

// -------------------------------------------- forward dependence and its spread
//
// Mirrors web/lib/library-forward.ts exactly: seeds are items using a forward
// reference outside Remarks, and the relation propagates along `deps`. This is
// the owner's "consequences" requirement, and the renderer marks every item in
// this set with the same accent as the forward links themselves.

const forwardDependent = new Map();          // id -> 'direct' | 'inherited'
for (const e of loadBearingEdges) forwardDependent.set(e.from, 'direct');
for (let changed = true; changed;) {
  changed = false;
  for (const it of items.values()) {
    if (forwardDependent.has(it.id)) continue;
    if (it.deps.map(resolve).some((d) => d && forwardDependent.has(d))) {
      forwardDependent.set(it.id, 'inherited');
      changed = true;
    }
  }
}

// ------------------------------------------------------------------ cycles

function sccs(nodes, succ) {
  const index = new Map(), low = new Map(), onStack = new Set();
  const stack = [], out = [];
  let idx = 0;
  for (const root of nodes) {
    if (index.has(root)) continue;
    const work = [[root, 0]];
    while (work.length) {
      const frame = work[work.length - 1];
      const [v, i] = frame;
      if (i === 0) { index.set(v, idx); low.set(v, idx); idx++; stack.push(v); onStack.add(v); }
      const kids = succ(v);
      if (i < kids.length) {
        frame[1]++;
        const w = kids[i];
        if (!index.has(w)) work.push([w, 0]);
        else if (onStack.has(w)) low.set(v, Math.min(low.get(v), index.get(w)));
      } else {
        work.pop();
        if (work.length) { const u = work[work.length - 1][0]; low.set(u, Math.min(low.get(u), low.get(v))); }
        if (low.get(v) === index.get(v)) {
          const comp = []; let w;
          do { w = stack.pop(); onStack.delete(w); comp.push(w); } while (w !== v);
          out.push(comp);
        }
      }
    }
  }
  return out;
}

// ITEM level, deps TOGETHER WITH load-bearing forward edges. This is the real
// no-circular-reasoning guarantee once consequences may cite later material: it
// catches the case where an example rests on a later theorem that turns out to
// need that very example.
const bearingFrom = new Map();
for (const e of loadBearingEdges) {
  if (!bearingFrom.has(e.from)) bearingFrom.set(e.from, []);
  bearingFrom.get(e.from).push(e.to);
}
const itemSucc = (id) => [
  ...(items.get(id)?.deps ?? []),
  ...(bearingFrom.get(id) ?? []),
].map(resolve).filter((x) => x && items.has(x));

for (const comp of sccs([...items.keys()], itemSucc)) {
  const self = comp.length === 1 && itemSucc(comp[0]).includes(comp[0]);
  if (comp.length > 1 || self)
    err('forward-cycle', `CIRCULAR (deps + load-bearing forward references): ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);
}

// PAGE level, deps edges together with ORIENTATION-ONLY forward edges. Load
// bearing edges are excluded on purpose: they genuinely tie an early page to a
// later one, which is page grouping rather than circular reasoning, and the
// item-level check above is what rules out the real thing.
const nodes = new Set([...planPage.keys(), ...actualHome.values()]);
const edges = new Map();
const addEdge = (a, b) => {
  if (!a || !b || a === b) return;
  if (!edges.has(a)) edges.set(a, new Set());
  edges.get(a).add(b);
  nodes.add(a); nodes.add(b);
};
for (const it of items.values()) {
  const home = homeOf(it.id);
  for (const d of it.deps) {
    const r = resolve(d);
    if (r) addEdge(home, homeOf(r));                       // P depends on Q: P -> Q
  }
  for (const t of it.forward)
    if (!it.loadBearingText.includes('[[' + t)) addEdge(homeOf(t), home);   // later -> earlier
}
for (const comp of sccs([...nodes], (v) => [...(edges.get(v) ?? [])]))
  if (comp.length > 1)
    err('stack-cycle', `CIRCULAR PAGES: ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);

// ---------------------------------------------------------------- the ledger

open.sort((a, b) => a.toLevel - b.toLevel || a.toPage.localeCompare(b.toPage) || a.from.localeCompare(b.from));
closed.sort((a, b) => a.from.localeCompare(b.from));

if (writeLedger) {
  const byPage = new Map();
  for (const r of open) {
    if (!byPage.has(r.toPage)) byPage.set(r.toPage, []);
    byPage.get(r.toPage).push(r);
  }
  const mark = (r) => (r.bearing ? ' **[load bearing]**' : '');
  const lines = [
    '# Forward-reference ledger',
    '',
    'GENERATED by `node tools/fwdcheck.mjs --ledger`. Do not edit by hand.',
    '',
    'Forward references are allowed (owner decision, 2026-07-25) provided they are',
    'visibly marked, remembered, and eventually closed. This file is the memory. An',
    'entry is OPEN while its target does not exist yet and closes the moment the',
    'page owning that target is authored.',
    '',
    'A **load bearing** entry is one the citing item actually uses in its proof, so',
    'that item and everything depending on it rests on later material and is marked',
    'as such by the renderer. Everything else is orientation only.',
    '',
    `**${open.length} open, ${closed.length} closed, ${loadBearingEdges.length} load bearing, ` +
      `${forwardDependent.size} item(s) resting on later material.**`,
    '',
    '## Open, grouped by the page that will close them',
    '',
  ];
  if (!open.length) lines.push('_None. Every forward reference in the repo resolves._', '');
  for (const [pid, rs] of [...byPage].sort((a, b) => level(a[0]) - level(b[0]) || a[0].localeCompare(b[0]))) {
    lines.push(`### \`${pid}\` (level ${level(pid)}, plan #${orderOf(pid)}) closes ${rs.length}`, '');
    for (const r of rs) lines.push(`- \`${r.from}\` (on \`${r.fromPage}\`) -> \`${r.to}\`${mark(r)}`);
    lines.push('');
  }
  if (closed.length) {
    lines.push('## Closed', '');
    for (const r of closed) lines.push(`- \`${r.from}\` -> \`${r.to}\` (on \`${r.toPage}\`)${mark(r)}`);
    lines.push('');
  }
  if (forwardDependent.size) {
    lines.push('## Items resting on later material (rendered with the forward accent)', '');
    for (const [id, how] of [...forwardDependent].sort())
      lines.push(`- \`${id}\` (${how})`);
    lines.push('');
  }
  writeFileSync(join(REPO, 'research/forward-refs.md'), lines.join('\n'));
}

// ---------------------------------------------------------------------- report

const summary = {
  items: items.size,
  openForwardRefs: open.length,
  closedForwardRefs: closed.length,
  loadBearing: loadBearingEdges.length,
  restingOnLaterMaterial: forwardDependent.size,
  errors: errors.length,
  warnings: warns.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, open, closed, forwardDependent: [...forwardDependent], errors, warns }, null, 2));
} else {
  if (!quiet) {
    console.log(`fwdcheck: ${items.size} items, ${open.length} open forward reference(s), ${closed.length} closed, ${loadBearingEdges.length} load bearing`);
    if (open.length) {
      console.log('\nopen forward references (target not authored yet):');
      for (const r of open)
        console.log(`  ${r.from.padEnd(34)} -> ${r.to.padEnd(38)} closes on ${r.toPage} (level ${r.toLevel})${r.bearing ? '  [load bearing]' : ''}`);
    }
    if (forwardDependent.size) {
      console.log(`\n${forwardDependent.size} item(s) rest on later material and carry the forward marker:`);
      for (const [id, how] of [...forwardDependent].sort()) console.log(`  ${id.padEnd(40)} ${how}`);
    }
  }
  if (warns.length) {
    console.log(`\n${warns.length} warning(s):`);
    for (const w of warns) console.log(`  [${w.code}] ${w.msg}`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} ERROR(s):`);
    for (const e of errors) console.log(`  [${e.code}] ${e.msg}`);
    console.log('\nFAIL');
  } else {
    console.log('\nOK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.');
  }
}

process.exit(errors.length ? 1 : 0);
