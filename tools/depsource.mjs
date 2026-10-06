#!/usr/bin/env node
// depsource.mjs — classify every dependency in the PLANNED item scaffolds by
// where its target actually lives.
//
//   node tools/depsource.mjs [research/plan-spec.json] [--page <id>] [--json] [--items-file PATH] [--run RUN]
//
// validate-plan.mjs already proves the planned stack is acyclic and forward-free
// IN PLAN ORDER. This answers the different question the owner asked: can every
// external dependency be LINKED TO A PUBLISHED WEBPAGE, and where does a scaffold
// instead rest on something that is not published yet?
//
// Per dep, exactly one verdict:
//
//   published        target is an authored item whose home page is published —
//                    a reader can follow the citation today
//   draft-page       target is authored but its home page is still draft, so the
//                    citation resolves for the owner and 404s for the public
//   homeless         target is authored but sits on NO page: it would be dropped
//                    from page-level Prerequisites silently (depcheck warns
//                    `orphan` for the same condition)
//   planned-earlier  target is a planned item on a page EARLIER in plan order —
//                    legitimate, it will exist by the time this page is authored
//   planned-later    target is a planned item on a LATER page: a FORWARD
//                    REFERENCE to a higher A-level. Not automatically wrong (a B
//                    page is a leaf and may forward-cite, SCHEMA §3 forward_refs)
//                    but every one must be recorded, never absorbed silently
//   unresolved       target is nothing at all — a real gap
//
// Exit 0 iff there are no `unresolved` deps. Everything else is reported, not
// enforced: which of them is acceptable is an owner decision, not this tool's.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { frontmatterList } from './frontmatter-list.mjs';
import { includesItem, parseItemScope, unknownItems } from './item-scope.mjs';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const itemScope = parseItemScope(process.argv.slice(2));
const args = itemScope.args;
const asJson = args.includes('--json');
const pageFilter = args.includes('--page') ? args[args.indexOf('--page') + 1] : null;
const run = args.includes('--run') ? args[args.indexOf('--run') + 1] : null;
if (args.includes('--run') && !/^[a-zA-Z0-9_-]+$/.test(run ?? ''))
  throw new Error('--run requires a valid run ID');
const specPath = args.find((a) => a.endsWith('.json')) ?? 'research/plan-spec.json';

const spec = JSON.parse(readFileSync(join(REPO, specPath), 'utf8'));
// Load every scaffold/home before selecting consumers: unselected suppliers
// remain available, including run additions not yet spliced into plan-spec.
const planned = [...spec.pages];
const runPages = [];
if (run) {
  const runFiles = readdirSync(join(REPO, 'research')).filter((f) =>
    new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).sort();
  if (!runFiles.length) throw new Error(`No run manifests found for ${run}`);
  for (const file of runFiles) {
    for (const page of JSON.parse(readFileSync(join(REPO, 'research', file), 'utf8'))) {
      runPages.push(page);
      const old = planned.findIndex((p) => p.id === page.id);
      if (old >= 0) planned[old] = page;
      else planned.push(page);
    }
  }
}
const plannedPageOf = new Map(); // planned item id -> page
const plannedOrder = new Map(); // planned item id -> page order
for (const p of planned) {
  for (const it of p.items ?? []) {
    plannedPageOf.set(it.id, p);
    plannedOrder.set(it.id, p.order);
  }
}

// ---------------------------------------------------------------- authored side

const scalar = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
};
const split = (src) => {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
};
const listOf = frontmatterList;

const authored = new Map(); // id -> {status, aliases}
const itemsDir = join(REPO, 'items');
if (existsSync(itemsDir)) {
  for (const f of readdirSync(itemsDir)) {
    if (!f.endsWith('.md')) continue;
    const { fm } = split(readFileSync(join(itemsDir, f), 'utf8'));
    const id = scalar(fm, 'id') ?? basename(f, '.md');
    authored.set(id, { status: scalar(fm, 'status') ?? 'draft', aliases: listOf(fm, 'aliases') });
  }
}
const aliasTo = new Map();
for (const [id, it] of authored) for (const a of it.aliases) aliasTo.set(a, id);

// home page of an authored item, and whether that page is published
const homeOf = new Map();
(function walk(dir, cat) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) { walk(fp, [...cat, e.name]); continue; }
    if (!e.name.endsWith('.md') || e.name.startsWith('_')) continue;
    const { fm } = split(readFileSync(fp, 'utf8'));
    const page = {
      id: scalar(fm, 'page') ?? basename(e.name, '.md'),
      status: scalar(fm, 'status') ?? 'draft',
      path: [...cat, scalar(fm, 'page') ?? basename(e.name, '.md')].join('/'),
    };
    for (const id of [...listOf(fm, 'items'), ...listOf(fm, 'examples')])
      if (!homeOf.has(id)) homeOf.set(id, page);
  }
})(join(REPO, 'library'), []);

// Run manifests supply authoritative homes before splice; all outside homes
// remain available when resolving selected consumers' prerequisites.
for (const page of runPages)
  for (const item of page.items ?? [])
    homeOf.set(item.id, {
      id: page.id, status: page.status ?? 'draft',
      path: `${page.category}/${page.id}`,
    });

// ------------------------------------------------------------------- classify

const resolve = (d) => (authored.has(d) ? d : aliasTo.get(d));

function classify(dep, fromPage) {
  const real = resolve(dep);
  if (real) {
    const home = homeOf.get(real);
    if (!home) return { verdict: 'homeless', where: '(no page)' };
    if (home.status === 'published' && authored.get(real).status === 'published')
      return { verdict: 'published', where: home.path };
    return { verdict: 'draft-page', where: home.path };
  }
  const pp = plannedPageOf.get(dep);
  if (!pp) return { verdict: 'unresolved', where: '' };
  if (pp.id === fromPage.id) return null; // same page: validate-plan owns intra-order
  return pp.order < fromPage.order
    ? { verdict: 'planned-earlier', where: `${pp.id} (order ${pp.order})` }
    : { verdict: 'planned-later', where: `${pp.id} (order ${pp.order})` };
}

const scopeErrors = unknownItems(itemScope, plannedPageOf.keys()).map((id) => ({
  code: 'focus-item-unknown',
  msg: `--items-file names item \"${id}\" absent from the loaded scaffolds; use --run RUN for unspliced run items`,
}));
const rows = [];
let checkedConsumers = 0;
for (const p of planned) {
  if (pageFilter && p.id !== pageFilter) continue;
  for (const it of p.items ?? []) {
    if (!includesItem(itemScope, it.id)) continue;
    checkedConsumers++;
    for (const d of it.deps ?? []) {
      const c = classify(d, p);
      if (c) rows.push({ page: p.id, kind: p.kind, item: it.id, dep: d, ...c });
    }
  }
}

if (itemScope.selected !== null && checkedConsumers === 0 && scopeErrors.length === 0)
  scopeErrors.push({ code: 'focus-empty', msg: 'No selected consumer remains after the page filter' });

// ------------------------------------------- reciprocal-Archimedean worklist
//
// `thm-of-archimedean` states only "for every x there is n with x < n·1_F". The
// RECIPROCAL form "1/n < eps" is a further step (part 2 of
// `lem-of-inverse-positive`), proved once as `cor-archimedean-reciprocal`. An
// item citing the theorem alone is either using the direct form — unboundedness,
// [n, inf) with empty intersection — which is fine, or reaching for the
// reciprocal form it was never given, which is a citation gap of the same class
// as citecheck's `nonstrict-attribution`.
//
// This is a WORKLIST, not a defect list: the direct-form uses are legitimate and
// cannot be told apart from a dep set alone. Triage each one against what the
// item's title actually asserts.
const ARCH = 'thm-of-archimedean';
const ARCH_RECIP = ['cor-archimedean-reciprocal', 'lem-of-inverse-positive'];
const archWorklist = [];
for (const p of planned) {
  if (pageFilter && p.id !== pageFilter) continue;
  for (const it of p.items ?? []) {
    if (!includesItem(itemScope, it.id)) continue;
    const deps = it.deps ?? [];
    if (deps.includes(ARCH) && !ARCH_RECIP.some((d) => deps.includes(d)))
      archWorklist.push({ page: p.id, item: it.id, title: (it.title ?? '').slice(0, 70) });
  }
}
// The rule is worthless if its premise has drifted, so check the premise: the
// theorem must still be direct-only. If it ever gains a reciprocal clause, say so
// loudly rather than keep flagging correct citations.
const archItem = existsSync(join(REPO, 'items', ARCH + '.md'))
  ? readFileSync(join(REPO, 'items', ARCH + '.md'), 'utf8')
  : '';
const archStale = /1\s*\/\s*n\s*<|n\^\{-1\}|reciprocal/i.test(archItem.split('## Facts')[0] ?? '');

const by = (v) => rows.filter((r) => r.verdict === v);
const counts = Object.fromEntries(
  ['published', 'planned-earlier', 'draft-page', 'homeless', 'planned-later', 'unresolved'].map((v) => [v, by(v).length]),
);

if (asJson) {
  console.log(JSON.stringify(itemScope.selected === null ? { counts, rows }
    : { counts, rows, checked_consumers: checkedConsumers, errors: scopeErrors }, null, 2));
} else {
  const pagesWithItems = itemScope.selected === null
    ? planned.filter((p) => (p.items ?? []).length).length
    : planned.filter((p) => (!pageFilter || p.id === pageFilter)
      && (p.items ?? []).some((it) => includesItem(itemScope, it.id))).length;
  console.log(`${rows.length} external dependencies across ${pagesWithItems} scaffolded page(s)\n`);
  for (const [v, n] of Object.entries(counts)) console.log(`  ${v.padEnd(16)} ${n}`);

  for (const v of ['unresolved', 'planned-later', 'homeless', 'draft-page']) {
    const list = by(v);
    if (!list.length) continue;
    console.log(`\n--- ${v} (${list.length})`);
    for (const r of list) console.log(`  ${r.page} :: ${r.item} -> ${r.dep}  ${r.where}`);
  }

  if (archStale)
    console.log(
      `\n--- archimedean-seed-stale\n  ${ARCH}'s Statement now appears to mention the reciprocal form. ` +
        `Re-read it: the worklist below assumes it does NOT, and is meaningless if that changed.`,
    );
  if (archWorklist.length) {
    console.log(`\n--- archimedean-reciprocal worklist (${archWorklist.length}) — TRIAGE, not defects`);
    console.log(`  cites ${ARCH} without ${ARCH_RECIP.join(' or ')}.`);
    console.log(`  Legitimate when the item uses the DIRECT form; a citation gap when it uses 1/n < eps.`);
    for (const w of archWorklist) console.log(`  ${w.page} :: ${w.item}\n      ${w.title}`);
  }

  for (const error of scopeErrors) console.log(`  [${error.code}] ${error.msg}`);
  if (itemScope.selected !== null) console.log(`\nSelected consumer coverage: ${checkedConsumers}/${itemScope.selected.size}`);
  const unpublished = rows.filter((r) => r.verdict !== 'published' && r.verdict !== 'planned-earlier');
  console.log(
    `\n${counts.unresolved === 0 && scopeErrors.length === 0 ? 'OK' : 'FAIL'} — ${counts.unresolved} unresolved; ` +
      `${counts.published} dep(s) link to a published page, ${counts.planned_earlier ?? counts['planned-earlier']} to an earlier planned page, ` +
      `${unpublished.length} to neither.`,
  );
}

// Let piped report output drain before Node exits.
process.exitCode = counts.unresolved === 0 && scopeErrors.length === 0 ? 0 : 1;
