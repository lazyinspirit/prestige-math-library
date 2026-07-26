#!/usr/bin/env node
// depsource.mjs — classify every dependency in the PLANNED item scaffolds by
// where its target actually lives.
//
//   node tools/depsource.mjs [research/plan-spec.json] [--page <id>] [--json]
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

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const pageFilter = args.includes('--page') ? args[args.indexOf('--page') + 1] : null;
const specPath = args.find((a) => a.endsWith('.json')) ?? 'research/plan-spec.json';

const spec = JSON.parse(readFileSync(join(REPO, specPath), 'utf8'));
const planned = spec.pages;
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
const listOf = (fm, key) => {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0, end = open;
  for (let i = open; i < fm.length; i++) {
    if (fm[i] === '[') depth++;
    else if (fm[i] === ']' && --depth === 0) { end = i; break; }
  }
  return fm
    .slice(open + 1, end)
    .split(',')
    .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
};

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

const rows = [];
for (const p of planned) {
  if (pageFilter && p.id !== pageFilter) continue;
  for (const it of p.items ?? [])
    for (const d of it.deps ?? []) {
      const c = classify(d, p);
      if (c) rows.push({ page: p.id, kind: p.kind, item: it.id, dep: d, ...c });
    }
}

const by = (v) => rows.filter((r) => r.verdict === v);
const counts = Object.fromEntries(
  ['published', 'planned-earlier', 'draft-page', 'homeless', 'planned-later', 'unresolved'].map((v) => [v, by(v).length]),
);

if (asJson) {
  console.log(JSON.stringify({ counts, rows }, null, 2));
} else {
  const pagesWithItems = planned.filter((p) => (p.items ?? []).length).length;
  console.log(`${rows.length} external dependencies across ${pagesWithItems} scaffolded page(s)\n`);
  for (const [v, n] of Object.entries(counts)) console.log(`  ${v.padEnd(16)} ${n}`);

  for (const v of ['unresolved', 'planned-later', 'homeless', 'draft-page']) {
    const list = by(v);
    if (!list.length) continue;
    console.log(`\n--- ${v} (${list.length})`);
    for (const r of list) console.log(`  ${r.page} :: ${r.item} -> ${r.dep}  ${r.where}`);
  }

  const unpublished = rows.filter((r) => r.verdict !== 'published' && r.verdict !== 'planned-earlier');
  console.log(
    `\n${counts.unresolved === 0 ? 'OK' : 'FAIL'} — ${counts.unresolved} unresolved; ` +
      `${counts.published} dep(s) link to a published page, ${counts.planned_earlier ?? counts['planned-earlier']} to an earlier planned page, ` +
      `${unpublished.length} to neither.`,
  );
}

process.exit(counts.unresolved === 0 ? 0 : 1);
