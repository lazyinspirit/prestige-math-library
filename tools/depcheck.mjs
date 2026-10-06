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
//   authorship-kind     authorship must occur on a mathematical content kind
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
//   b-leaf-content            an authored dependency reaches an item that lives
//                              only on an examples/B page (except within that
//                              same B page)
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
import { sectionText } from './facts-block.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { includesItem, parseItemScope, unknownItems } from './item-scope.mjs';
import { recordedPublishedRepair } from './published-repair-policy.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const itemScope = parseItemScope(process.argv.slice(2));
const asJson = itemScope.args.includes('--json');
const quiet = itemScope.args.includes('--quiet');
// Legacy bounded pre-certification mode. It cannot excuse an invalid recorded
// repair. Current published repairs use hash-bound local evidence under
// CLAUDE §8; this does not certify an initial publication or a whole proof.
const pendingAuditOk = itemScope.args.includes('--pending-audit-ok');

const PREFIX_OF_KIND = {
  definition: 'def', theorem: 'thm', lemma: 'lem', proposition: 'prop',
  corollary: 'cor', example: 'ex', counterexample: 'cex',
  'false-statement': 'fs', remark: 'rem',
};
const AUTHORSHIP_VALUES = new Set(['ai-generated', 'ai-altered', 'literature-derived']);
const PROOF_PROVENANCE_VALUES = new Set([...AUTHORSHIP_VALUES, 'not-supplied', 'not-applicable']);
const AUTHORSHIP_KINDS = new Set(Object.keys(PREFIX_OF_KIND));

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
 *  with every other gate still green. Every TeX backslash must be doubled.
 *  Numeric Unicode escapes are intentional YAML text and remain allowed. */
function badEscapes(fm, file) {
  for (const line of fm.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z_]+):[ \t]*"((?:[^"\\]|\\.)*)"[ \t]*$/);
    if (!m) continue;
    const stray = [...m[2].matchAll(/\\(.)/g)].filter((e) =>
      !'\\"'.includes(e[1]) && !/^(?:u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8}|x[0-9a-fA-F]{2})/.test(m[2].slice(e.index + 1)));
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

function list(fm, key) { return frontmatterList(fm, key); }

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
  const id = scalar(fm, 'id');
  const kind = scalar(fm, 'kind');
  const authorship = scalar(fm, 'authorship');
  const provenanceStatement = nested(fm, 'provenance', 'statement');
  const provenanceProof = nested(fm, 'provenance', 'proof');
  const provenancePresent = /^provenance:[ \t]*(?:#.*)?$/m.test(fm);
  const stem = basename(f, '.md');
  const selectedFile = includesItem(itemScope, id ?? stem);
  if (selectedFile) badEscapes(fm, file);

  if (!id) { if (selectedFile) err('id-filename', `${file}: no id in frontmatter`); continue; }
  if (selectedFile && id !== stem) err('id-filename', `${file}: id "${id}" != filename "${stem}"`);

  const want = PREFIX_OF_KIND[kind];
  if (selectedFile && !want) err('kind-prefix', `${file}: unknown or missing kind "${kind}"`);
  else if (selectedFile && !id.startsWith(want + '-')) err('kind-prefix', `${file}: kind ${kind} requires prefix "${want}-", got "${id}"`);
  if (selectedFile && authorship !== undefined && !AUTHORSHIP_VALUES.has(authorship))
    err('authorship-invalid', `${file}: authorship must be ai-generated, ai-altered, or literature-derived, got "${authorship}"`);
  if (selectedFile && authorship !== undefined && !AUTHORSHIP_KINDS.has(kind))
    err('authorship-kind', `${file}: authorship is allowed only on a mathematical content item, got kind "${kind}"`);
  if (selectedFile && provenancePresent && !AUTHORSHIP_VALUES.has(provenanceStatement))
    err('provenance-statement-invalid', `${file}: provenance.statement must be ai-generated, ai-altered, or literature-derived`);
  if (selectedFile && provenancePresent && !PROOF_PROVENANCE_VALUES.has(provenanceProof))
    err('provenance-proof-invalid', `${file}: provenance.proof must be ai-generated, ai-altered, literature-derived, not-supplied, or not-applicable`);
  if (selectedFile && provenanceProof === 'not-applicable' && !['definition', 'remark'].includes(kind))
    err('provenance-proof-applicability', `${file}: provenance.proof: not-applicable is reserved for definitions and remarks`);

  const links = [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1].trim());

  items.set(id, {
    id, kind, file,
    status: scalar(fm, 'status'),
    audited: nested(fm, 'verification', 'audited'),
    repair: nested(fm, 'verification', 'repair'),
    source: src,
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

for (const id of unknownItems(itemScope, items.keys()))
  err('focus-item-unknown', `--items-file names unknown item "${id}"`);

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
    pages.push({
      fm,
      page: scalar(fm, 'page') ?? basename(e.name, '.md'),
      title: scalar(fm, 'title'),
      status: scalar(fm, 'status'),
      file: rel, cat,
      items: list(fm, 'items'),
      examples: list(fm, 'examples'),
    });
  }
})(join(REPO, 'library'), []);

// The plan records the authoritative B-page classification.  Page-file suffixes
// are retained as a conservative fallback so an authored B page is still
// protected while a newly spliced plan entry is being reconciled.
const bPages = new Set(pages.filter((p) => p.page.endsWith('-examples')).map((p) => p.page));
try {
  const plan = JSON.parse(readFileSync(join(REPO, 'research/plan-spec.json'), 'utf8'));
  for (const page of plan.pages ?? []) if (page?.kind === 'B' && typeof page.id === 'string') bPages.add(page.id);
} catch {
  // `validate-plan` owns malformed or absent plan diagnostics.  depcheck still
  // applies the safe filename fallback above to the authored corpus.
}
const legacyBLeafEdges = new Map();
try {
  const allowlist = JSON.parse(readFileSync(join(REPO, 'research/b-leaf-legacy-allowlist.json'), 'utf8'));
  if (allowlist.version !== 1 || !Array.isArray(allowlist.edges)) throw new Error('expected version 1 with an edges array');
  for (const edge of allowlist.edges) {
    if (typeof edge?.source !== 'string' || typeof edge?.target !== 'string' || typeof edge?.reason !== 'string' || !edge.reason.trim()) {
      throw new Error('every edge needs source, target, and a nonempty reason');
    }
    legacyBLeafEdges.set(`${edge.source}\u0000${edge.target}`, edge.reason);
  }
} catch (cause) {
  if (itemScope.selected === null)
    err('b-leaf-allowlist', `research/b-leaf-legacy-allowlist.json: ${cause.message}`);
}

// ---------------------------------------------------------- resolve references

for (const it of items.values()) {
  if (!includesItem(itemScope, it.id)) continue;
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
const homesOf = new Map(); // itemId -> every page that lists it
const selectedPages = new Set(pages.filter(p => itemScope.selected === null
  || [...p.items, ...p.examples].some(id => includesItem(itemScope, resolve(id))))
  .map(p => p.page));
for (const p of pages) if (selectedPages.has(p.page)) badEscapes(p.fm, p.file);
for (const p of pages) {
  const selectedPage = selectedPages.has(p.page);
  const all = [...p.items, ...p.examples];
  const seen = new Set();
  for (const id of all) {
    if (selectedPage && seen.has(id)) err('page-item-dup', `${p.file}: lists "${id}" twice`);
    seen.add(id);
    const r = resolve(id);
    if (!r) { if (selectedPage) err('page-item-missing', `${p.file}: lists "${id}", which is not an item`); continue; }
    if (selectedPage && includesItem(itemScope, r) && p.status === 'published' && items.get(r).status !== 'published')
      err('draft-on-published-page', `${p.file} is published but lists non-published item "${r}"`);
    if (!homesOf.has(r)) homesOf.set(r, new Set());
    homesOf.get(r).add(p.page);
    if (homeOf.has(r)) {
      if (includesItem(itemScope, r)) warn('multi-home', `"${r}" appears on both ${homeOf.get(r)} and ${p.page}`);
    } else homeOf.set(r, p.page);
  }
}

// Structural boundaries apply to the selected consumers' prerequisite and
// definition-discharge context; supplier audit/format checks stay unselected.
const graphContext = new Map(), graphQueue = [];
for (const id of itemScope.selected === null ? items.keys() : itemScope.selected)
  if (items.has(id)) { graphContext.set(id, id); graphQueue.push(id); }
for (let i = 0; i < graphQueue.length; i++) {
  const id = graphQueue[i];
  for (const raw of [...items.get(id).deps, ...items.get(id).justified]) {
    const next = resolve(raw);
    if (next && !graphContext.has(next)) {
      graphContext.set(next, graphContext.get(id)); graphQueue.push(next);
    }
  }
}
const graphOrigin = id => itemScope.selected === null || includesItem(itemScope, id)
  ? '' : `${items.get(graphContext.get(id)).file}: prerequisite ${id}: `;

for (const it of items.values()) {
  if (!includesItem(itemScope, it.id)) continue;
  // A `proved_here: false` item has no proof, so `audited` (an audit OF A PROOF)
  // is not what verifies it and `judge` is forbidden outright (extcheck
  // `unproved-judged`). Its gate is `verification.sources_checked`: the statement,
  // the attribution and the cited source were checked. SCHEMA §3.
  if (it.status === 'published' && !it.provedHere && !it.sourcesChecked)
    err('published-unchecked', `${it.file}: status published, proved_here false, but verification.sources_checked is unset`);
  // `audited` is the OWNER's own read; `verified` is a delegated subagent's, on the
  // owner's instruction (SCHEMA §3, amended 2026-07-26). Either gates publication;
  // they are kept distinct so the corpus never loses track of which is which.
  if (it.status === 'published' && it.provedHere && !it.audited && !it.verified) {
    const repair = recordedPublishedRepair(REPO, it.id, it.source, it.repair);
    if (repair.ok)
      warn('published-local-repair', `${it.file}: recorded local repair (${repair.receipt}); no whole-item audit is claimed`);
    else
      (pendingAuditOk && !it.repair ? warn : err)('published-unaudited', `${it.file}: status published but neither verification.audited nor verification.verified is set; ${repair.reason}`);
  }
  if (it.provedHere && it.sourcesChecked)
    err('sources-checked-on-proved', `${it.file}: verification.sources_checked is only for proved_here: false items`);
  if (it.status === 'published' && !homeOf.has(it.id))
    warn('orphan', `${it.id} is published but appears on no page (dropped from page-level Prerequisites)`);
}

// `validate-plan` prevents a planned A page from depending on a planned B page,
// but authors legitimately revise `deps` after a scaffold is spliced.  Check the
// actual item graph as well: an item that lives *only* on B/examples pages may be
// used by an earlier item on that same B page, but never by another page.  This
// preserves ordinary intra-example exposition without allowing examples to enter
// the theorem spine after planning.
for (const p of pages) {
  for (const source of [...p.items, ...p.examples]) {
    const sourceId = resolve(source);
    if (!sourceId || !graphContext.has(sourceId)) continue;
    for (const dep of items.get(sourceId).deps) {
      const targetId = resolve(dep);
      const targetHomes = targetId && homesOf.get(targetId);
      if (!targetHomes?.size || ![...targetHomes].every((page) => bPages.has(page))) continue;
      if (targetHomes.has(p.page)) continue; // legal earlier item on the same B page
      const legacyReason = legacyBLeafEdges.get(`${sourceId}\u0000${targetId}`);
      if (legacyReason) {
        warn('b-leaf-legacy', `${graphOrigin(sourceId)}${items.get(sourceId).file}: grandfathered B-page dependency "${dep}" — ${legacyReason}`);
      } else {
        err('b-leaf-content', `${graphOrigin(sourceId)}${items.get(sourceId).file}: depends on "${dep}", which lives only on B/examples page(s) ${[...targetHomes].join(', ')}`);
      }
    }
  }
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
  if (!includesItem(itemScope, it.id)) continue;
  const src = it.body ?? '';
  // The section reader is tools/facts-block.mjs, the one parser for this
  // grammar. It differs from the regex it replaced in one way: the heading is
  // anchored to its own line, so `Statement` no longer also selects
  // `Statement refuted`. That cost nothing here, because the loop below unions
  // the wikilinks of both — verified over all 4,986 published items, identical
  // cited set on every one, and byte-identical `depcheck` output.
  const section = (name) => sectionText(src, name);
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
  if (graphContext.has(it.id)) for (const j of it.justified) {
    const r = resolve(j);
    if (r && !reaches(r, it.id))
      err('justification-backward', `${graphOrigin(it.id)}${it.file}: justified_by "${j}", but "${j}" does not depend on "${it.id}" — it is a genuine prerequisite and belongs in deps`);
  }
// Keep the full graph available, but visit only prerequisite closures of the
// selected consumers. Context attributes supplier cycles to their scoped root.
function reachableContext(roots, succ) {
  const context = new Map(roots), queue = [...context.keys()];
  for (let i = 0; i < queue.length; i++) {
    const node = queue[i];
    for (const next of succ(node)) if (!context.has(next)) {
      context.set(next, context.get(node));
      queue.push(next);
    }
  }
  return context;
}
const itemContext = reachableContext([...graphContext], itemSucc);
for (const comp of sccs([...itemContext.keys()], itemSucc)) {
  const self = comp.length === 1 && itemSucc(comp[0]).includes(comp[0]);
  if (comp.length > 1 || self)
    err('item-cycle', `${itemScope.selected === null ? '' : `${items.get(itemContext.get(comp[0])).file}: prerequisite cycle: `}CIRCULAR: ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);
}

// page-level: P -> Q when an item homed on P depends on an item homed on Q
const pageIds = pages.map((p) => p.page);
const pageSuccCache = new Map();
function pageSucc(pid) {
  if (pageSuccCache.has(pid)) return pageSuccCache.get(pid);
  const p = pages.find((x) => x.page === pid);
  const out = new Set();
  for (const id of [...(p?.items ?? []), ...(p?.examples ?? [])]) {
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
const pageRoots = itemScope.selected === null ? pageIds : [...selectedPages];
const pageById = new Map(pages.map(p => [p.page, p]));
const pageRootConsumers = pageRoots.map(pid => [pid, itemScope.selected === null ? pid
  : [...pageById.get(pid).items, ...pageById.get(pid).examples]
    .map(resolve).find(id => itemScope.selected.has(id)) ?? pid]);
const pageContext = reachableContext(pageRootConsumers, pageSucc);
for (const comp of sccs(pageRoots, pageSucc))
  if (comp.length > 1)
    err('page-cycle', `${itemScope.selected === null ? '' : `${items.get(pageContext.get(comp[0]))?.file ?? pageContext.get(comp[0])}: prerequisite page cycle: `}CIRCULAR PAGES: ${comp.slice().reverse().join(' -> ')} -> ${comp[comp.length - 1]}`);

// ---------------------------------------------------------------------- report

const summary = {
  items: items.size,
  published: [...items.values()].filter((i) => i.status === 'published').length,
  pages: pages.length,
  errors: errors.length,
  warnings: warns.length,
  ...(itemScope.selected === null ? { scope: 'full' } : {
    scope: 'focused-items', item_checks: [...itemScope.selected].sort(),
    page_checks: [...selectedPages].sort(),
    prerequisite_item_cycle_checks: itemContext.size,
    dependency_closure_items: graphContext.size, dependency_closure_pages: pageContext.size,
    prerequisite_page_cycle_checks: pageContext.size,
  }),
};

if (asJson) {
  console.log(JSON.stringify({ summary, errors, warns }, null, 2));
} else {
  if (!quiet) {
    console.log(itemScope.selected === null
      ? `depcheck: ${summary.items} items (${summary.published} published), ${summary.pages} pages`
      : `depcheck: focused item checks for ${summary.item_checks.length} item(s); selected page and prerequisite cycle checks cover ${itemContext.size} items and ${pageContext.size} pages`);
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
    for (const p of pages.filter(p => selectedPages.has(p.page)).sort((a, b) => deep(a.page) - deep(b.page) || a.page.localeCompare(b.page)))
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
    console.log(itemScope.selected === null
      ? '\nOK — no cycles, all references resolve, no draft items on published pages.'
      : '\nOK — selected item/page checks and their prerequisite cycle checks passed.');
  }
}

process.exit(errors.length ? 1 : 0);
