#!/usr/bin/env node
// depcheck.mjs — repo-wide dependency and circularity gate for the math library.
//
//   node tools/depcheck.mjs [--json] [--quiet]
//
// This is the mechanical guarantee behind "no circular dependencies". It runs
// over the ACTUAL content of items/ and library/, not over a plan, so it stays
// true as content is authored. Intended as a pre-merge gate alongside
// precheck.mts (which checks proof format, not dependencies).
//
// HARD ERRORS
//   id-filename     frontmatter id must equal the filename
//   yaml-escape     a lone backslash inside a double-quoted frontmatter scalar
//                   (YAML eats it; the item then loads wrong or not at all)
//   kind-prefix     id prefix must match the declared kind (SCHEMA.md §2)
//   authorship-invalid  authorship must be an allowed reader-facing provenance tag
//   authorship-kind     authorship is reserved for theorem/lemma/corollary items
//   dep-unresolved  a deps: entry names no existing item id or alias
//   link-unresolved a [[wikilink]] names no existing item id or alias
//   self-dep        an item lists itself in deps
//   item-cycle      a cycle in the item dependency graph
//   page-cycle      a cycle in the induced page graph (page P uses an item that
//                   depends on an item whose home page uses one of P's items…)
//   page-item-missing  a page lists an item that does not exist
//   page-item-dup   a page lists the same item twice
//   draft-on-published-page   a published page lists a non-published item
//   published-unaudited       a published item has no verification.audited
//
// WARNINGS
//   orphan          a published item that appears on no page (it is then
//                   silently dropped from page-level Prerequisites)
//   multi-home      an item listed on more than one page (legal, but the page
//                   graph is computed from the FIRST home in reading order)
//
// Exit 0 iff there are no hard errors.

import { readFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const asJson = process.argv.includes('--json');
const quiet = process.argv.includes('--quiet');

const PREFIX_OF_KIND = {
  definition: 'def', theorem: 'thm', lemma: 'lem', proposition: 'prop',
  corollary: 'cor', example: 'ex', counterexample: 'cex',
  'false-statement': 'fs', remark: 'rem',
};
const AUTHORSHIP_VALUES = new Set(['ai-generated', 'ai-altered', 'literature-derived']);
const AUTHORSHIP_KINDS = new Set(['theorem', 'lemma', 'corollary']);

const errors = [];
const warns = [];
const err = (code, msg) => errors.push({ code, msg });
const warn = (code, msg) => warns.push({ code, msg });

// ---------------------------------------------------------------- frontmatter

/** Return the raw frontmatter block and the body. */
function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}

/** A backslash inside a DOUBLE-quoted YAML scalar is a YAML escape, not TeX.
 *  `\b` `\e` `\f` `\n` `\t` `\v` `\0` `\a` are valid escapes, so `$\beta X$`
 *  silently loads as "eta X"; `\i` `\l` `\s` are invalid, so the whole file
 *  fails to parse and the renderer — which swallows a malformed item so one bad
 *  file cannot take the site down — drops the item from the library entirely,
 *  with every other gate still green. Every TeX backslash must be doubled. */
function badEscapes(fm, file) {
  for (const line of fm.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_]+):[ \t]*"((?:[^"\\]|\\.)*)"[ \t]*$/);
    if (!m) continue;
    const stray = [...m[2].matchAll(/\\(.)/g)].filter((e) => !'\\"'.includes(e[1]));
    for (const e of stray)
      err('yaml-escape', `${file}: ${m[1]} contains "\\${e[1]}" inside a double-quoted scalar — double the backslash ("\\\\${e[1]}")`);
  }
}

/** Scalar value of `key:` in a frontmatter block (first match, unquoted). */
function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  if (!m) return undefined;
  return m[1].trim().replace(/^['"]|['"]$/g, '') || undefined;
}

/** Array value of `key: [...]`, tolerating multi-line arrays. */
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
  return fm.slice(open + 1, end)
    .split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
}

/** Nested scalar, e.g. verification.audited — matched by indentation. */
function nested(fm, parent, child) {
  const p = fm.search(new RegExp(`^${parent}:`, 'm'));
  if (p < 0) return undefined;
  const rest = fm.slice(p);
  const m = rest.match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}

// ---------------------------------------------------------------- load items

const items = new Map();       // id -> {id, kind, status, deps, links, file}
const aliasTo = new Map();     // alias -> canonical id

for (const f of readdirSync(join(REPO, 'items')).sort()) {
  if (!f.endsWith('.md')) continue;
  const file = `items/${f}`;
  const src = readFileSync(join(REPO, file), 'utf8');
  const { fm, body } = split(src);
  badEscapes(fm, file);
  const id = scalar(fm, 'id');
  const kind = scalar(fm, 'kind');
  const authorship = scalar(fm, 'authorship');
  const stem = basename(f, '.md');

  if (!id) { err('id-filename', `${file}: no id in frontmatter`); continue; }
  if (id !== stem) err('id-filename', `${file}: id "${id}" != filename "${stem}"`);

  const want = PREFIX_OF_KIND[kind];
  if (!want) err('kind-prefix', `${file}: unknown or missing kind "${kind}"`);
  else if (!id.startsWith(want + '-')) err('kind-prefix', `${file}: kind ${kind} requires prefix "${want}-", got "${id}"`);
  if (authorship !== undefined && !AUTHORSHIP_VALUES.has(authorship))
    err('authorship-invalid', `${file}: authorship must be ai-generated, ai-altered, or literature-derived, got "${authorship}"`);
  if (authorship !== undefined && !AUTHORSHIP_KINDS.has(kind))
    err('authorship-kind', `${file}: authorship is reserved for theorem, lemma, or corollary items, got kind "${kind}"`);

  const links = [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].trim());

  items.set(id, {
    id, kind, file,
    status: scalar(fm, 'status'),
    audited: nested(fm, 'verification', 'audited'),
    provedHere: scalar(fm, 'proved_here') !== 'false',
    verified: /^\s+verified:/m.test(fm),
    sourcesChecked: nested(fm, 'verification', 'sources_checked') !== undefined
      || /^\s+sources_checked:/m.test(fm),
    deps: list(fm, 'deps'),
    justified: list(fm, 'justified_by'),
    externalRefs: list(fm, 'external_refs'),
    forward: list(fm, 'forward_refs'),
    links,
    body,
  });
  for (const a of list(fm, 'aliases')) aliasTo.set(a, id);
}

/** Resolve an id through aliases; undefined if unknown. */
const resolve = (x) => (items.has(x) ? x : aliasTo.get(x));

// ---------------------------------------------------------------- load pages

const pages = [];  // {page, title, status, file, cat, items:[], examples:[]}
(function walk(dir, cat) {
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) { walk(fp, [...cat, e.name]); continue; }
    if (!e.name.endsWith('.md') || e.name.startsWith('_')) continue;
    const rel = fp.slice(REPO.length + 1);
    const { fm } = split(readFileSync(fp, 'utf8'));
    badEscapes(fm, rel);
    pages.push({
      page: scalar(fm, 'page') ?? basename(e.name, '.md'),
      title: scalar(fm, 'title'),
      status: scalar(fm, 'status'),
      file: rel, cat,
      items: list(fm, 'items'),
      examples: list(fm, 'examples'),
    });
  }
})(join(REPO, 'library'), []);

// ---------------------------------------------------------- resolve references

for (const it of items.values()) {
  for (const d of it.deps) {
    if (d === it.id) err('self-dep', `${it.file}: depends on itself`);
    else if (!resolve(d)) err('dep-unresolved', `${it.file}: deps entry "${d}" resolves to nothing`);
  }
  for (const j of it.justified) {
    if (j === it.id) err('self-dep', `${it.file}: justified_by itself`);
    else if (!resolve(j)) err('dep-unresolved', `${it.file}: justified_by entry "${j}" resolves to nothing`);
    else if (it.deps.map(resolve).includes(resolve(j)))
      err('justification-duplicated', `${it.file}: "${j}" is in BOTH deps and justified_by; pick one`);
  }
  // A wikilink declared in `forward_refs` is a deliberate pointer at material
  // developed later (owner decision 2026-07-25). It is NOT an unresolved link,
  // and `tools/fwdcheck.mjs` owns it: that tool proves the target is planned on
  // a strictly later page, that it is never load bearing, and that the whole
  // stack stays acyclic. Reporting it here too would just be noise.
  const fwd = new Set(it.forward);
  for (const l of it.links) {
    if (fwd.has(l)) continue;
    if (!resolve(l)) err('link-unresolved', `${it.file}: wikilink [[${l}]] resolves to nothing`);
  }
}

// -------------------------------------------------------------- page hygiene

const homeOf = new Map();  // itemId -> first page that lists it
for (const p of pages) {
  const all = [...p.items, ...p.examples];
  const seen = new Set();
  for (const id of all) {
    if (seen.has(id)) err('page-item-dup', `${p.file}: lists "${id}" twice`);
    seen.add(id);
    const r = resolve(id);
    if (!r) { err('page-item-missing', `${p.file}: lists "${id}", which is not an item`); continue; }
    if (p.status === 'published' && items.get(r).status !== 'published')
      err('draft-on-published-page', `${p.file} is published but lists non-published item "${r}"`);
    if (homeOf.has(r)) warn('multi-home', `"${r}" appears on both ${homeOf.get(r)} and ${p.page}`);
    else homeOf.set(r, p.page);
  }
}

for (const it of items.values()) {
  // A `proved_here: false` item has no proof, so `audited` (an audit OF A PROOF)
  // is not what verifies it and `judge` is forbidden outright (extcheck
  // `unproved-judged`). Its gate is `verification.sources_checked`: the statement,
  // the attribution and the cited source were checked. SCHEMA §3.
  if (it.status === 'published' && !it.provedHere && !it.sourcesChecked)
    err('published-unchecked', `${it.file}: status published, proved_here false, but verification.sources_checked is unset`);
  // `audited` is the OWNER's own read; `verified` is a delegated subagent's, on the
  // owner's instruction (SCHEMA §3, amended 2026-07-26). Either gates publication;
  // they are kept distinct so the corpus never loses track of which is which.
  if (it.status === 'published' && it.provedHere && !it.audited && !it.verified)
    err('published-unaudited', `${it.file}: status published but neither verification.audited nor verification.verified is set`);
  if (it.provedHere && it.sourcesChecked)
    err('sources-checked-on-proved', `${it.file}: verification.sources_checked is only for proved_here: false items`);
  if (it.status === 'published' && !homeOf.has(it.id))
    warn('orphan', `${it.id} is published but appears on no page (dropped from page-level Prerequisites)`);
}

// ------------------------------------------------- load-bearing citations vs deps
//
// SCHEMA §3: `deps` must list every item the STATEMENT or the PROOF logically
// depends on. A wikilink in Statement or Facts & Assumptions is load bearing by
// construction: Facts are what the proof cites, and a Statement citation is part
// of what is being asserted. Remarks are excluded, since a "see also" there is
// not a dependency.
//
// This is a warning, not an error, because a Statement may legitimately point at
// a later item for orientation. But every hit needs a human decision: on the
// first two pages authored this way, 24 of 41 items were understating `deps`,
// and a judge caught one that an earlier version of this check, which read only
// Facts & Assumptions, structurally could not see.
for (const it of items.values()) {
  const src = it.body ?? '';
  const section = (name) => (src.match(new RegExp(`## ${name}([\\s\\S]*?)(?=\\n## |$)`)) ?? [, ''])[1];
  const cited = new Set();
  // Proof bodies are scanned too. A certification pass on 2026-07-25 found steps
  // appealing to an item ("by transitivity", citing def-partial-order) that was
  // in neither Facts nor deps, and observed that this check could not see it
  // because it read only Statement and Facts. A bare appeal with no wikilink is
  // still invisible, and only a human or a judge with the cited text can catch
  // that; but a wikilink in a step is mechanically checkable and now is checked.
  for (const s of [
    section('Statement'), section('Statement refuted'), section('Facts & Assumptions'),
    section('Proof'), section('Refutation'), section('Counterexample'), section('Verification'),
  ])
    for (const m of s.matchAll(/\[\[([a-z0-9-]+)/g)) cited.add(m[1]);
  // `justified_by` targets count as declared. They may NOT appear in `deps` (a
  // discharge points forward, so listing it there is a spurious cycle, and
  // `justification-duplicated` above forbids it), yet citing one in a Statement
  // is exactly how a definition names the lemma that makes it well posed.
  // `external_refs` counts as declared. It names a recorded-but-not-proved result
  // the item MENTIONS; SCHEMA §3 and tools/extcheck.mjs (`external-in-deps`) forbid
  // putting such an id in `deps`, so without this the two gates contradict each
  // other: depcheck would demand a deps entry that extcheck hard-errors on.
  const declared = new Set(
    [...(it.deps ?? []), ...(it.justified ?? []), ...(it.externalRefs ?? [])].map(resolve),
  );
  for (const c of cited) {
    const r = resolve(c);
    if (!r || !items.has(r) || declared.has(r) || r === it.id) continue;
    warn('cited-not-in-deps', `${it.file}: cites "${c}" in Statement/Facts but it is not in deps`);
  }
}

// ------------------------------------------------------------- cycle detection

/** Iterative Tarjan; returns strongly connected components. */
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

// item-level. NOTE: `justified_by` edges are deliberately EXCLUDED. A
// well-definedness discharge points FORWARD (the lemma is about the object the
// definition introduces, so it necessarily depends on that definition); counting
// it as a prerequisite would report a cycle where there is no circular
// reasoning. The `justification-backward` check below verifies that each such
// edge really does point forward, so the exclusion cannot hide a real cycle.
const itemSucc = (id) => (items.get(id)?.deps ?? []).map(resolve).filter((x) => x && items.has(x));

/** Is `to` reachable from `from` along deps edges? Memoised per source. */
const reachCache = new Map();
function reaches(from, to) {
  const key = from;
  let set = reachCache.get(key);
  if (!set) {
    set = new Set();
    const stack = [from];
    while (stack.length) {
      const v = stack.pop();
      for (const w of itemSucc(v)) if (!set.has(w)) { set.add(w); stack.push(w); }
    }
    reachCache.set(key, set);
  }
  return set.has(to);
}

for (const it of items.values())
  for (const j of it.justified) {
    const r = resolve(j);
    if (r && !reaches(r, it.id))
      err('justification-backward', `${it.file}: justified_by "${j}", but "${j}" does not depend on "${it.id}" — it is a genuine prerequisite and belongs in deps`);
  }
for (const comp of sccs([...items.keys()], itemSucc)) {
  const self = comp.length === 1 && itemSucc(comp[0]).includes(comp[0]);
  if (comp.length > 1 || self)
    err('item-cycle', `CIRCULAR: ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);
}

// page-level: P -> Q when an item homed on P depends on an item homed on Q
const pageIds = pages.map((p) => p.page);
const pageSuccCache = new Map();
function pageSucc(pid) {
  if (pageSuccCache.has(pid)) return pageSuccCache.get(pid);
  const p = pages.find((x) => x.page === pid);
  const out = new Set();
  for (const id of [...p.items, ...p.examples]) {
    const r = resolve(id);
    if (!r) continue;
    for (const d of items.get(r).deps) {
      const rd = resolve(d);
      const h = rd && homeOf.get(rd);
      if (h && h !== pid) out.add(h);
    }
  }
  const arr = [...out];
  pageSuccCache.set(pid, arr);
  return arr;
}
for (const comp of sccs(pageIds, pageSucc))
  if (comp.length > 1)
    err('page-cycle', `CIRCULAR PAGES: ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);

// ---------------------------------------------------------------------- report

const summary = {
  items: items.size,
  published: [...items.values()].filter((i) => i.status === 'published').length,
  pages: pages.length,
  errors: errors.length,
  warnings: warns.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, errors, warns }, null, 2));
} else {
  if (!quiet) {
    console.log(`depcheck: ${summary.items} items (${summary.published} published), ${summary.pages} pages`);
    // topological depth per page, for eyeballing the reading order
    const depth = new Map();
    const deep = (p, seen = new Set()) => {
      if (depth.has(p)) return depth.get(p);
      if (seen.has(p)) return 0;
      seen.add(p);
      const d = pageSucc(p).length ? 1 + Math.max(...pageSucc(p).map((q) => deep(q, seen))) : 0;
      depth.set(p, d);
      return d;
    };
    console.log('\npage dependency depth (0 = no prerequisites):');
    for (const p of [...pages].sort((a, b) => deep(a.page) - deep(b.page) || a.page.localeCompare(b.page)))
      console.log(`  ${String(deep(p.page)).padStart(2)}  ${p.page.padEnd(46)} ${(p.items.length + p.examples.length).toString().padStart(3)} items  <- ${pageSucc(p.page).join(', ') || '(none)'}`);
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
    console.log('\nOK — no cycles, all references resolve, no draft items on published pages.');
  }
}

process.exit(errors.length ? 1 : 0);
