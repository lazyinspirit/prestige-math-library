#!/usr/bin/env node
// rounds.mjs — compute the parallel authoring round plan from the page spec.
//
//   node tools/rounds.mjs [spec] [--max N] [--round K] [--repo DIR]
//   node tools/rounds.mjs --pairs [--md]        <- the A/B pair level table
//
// Owner-approved protocol (2026-07-25): subagents author pages in parallel, but
// ONLY pages that do not depend on one another; one page per subagent; every
// round is followed by a personal review, fixes, the cross-family judge, and an
// explicit owner approval before the next round starts.
//
// The independence guarantee is computed, not asserted. Each page gets a level,
//
//     level(p) = 1 + max(level(q) : q in p.requires),   published pages at 0,
//
// so two pages sharing a level cannot depend on one another: a dependency would
// force the dependent page to a strictly higher level. Every prerequisite of a
// level-k page sits at a level below k and is therefore already authored.
//
// A level wider than --max (default 8, owner's cap) is split into balanced
// chunks that run as SEQUENTIAL rounds. Any split of a level is safe, since the
// whole level is mutually independent; chunks are grouped by category so a round
// stays on one topic and my review of it stays focused.
//
// --pairs (owner, 2026-07-28) prints ONE ROW PER A/B PAIR ranked by level, so a
// future session can build the library layer by layer with minimal forward
// referencing. It is the same level function — deliberately, so the table and
// the round plan can never disagree. A B page always sits exactly one level
// above its A page (it requires it), so the PAIR is ranked by its A page and the
// B page is not given a row of its own.
//
// --md emits the table as markdown for committing. REGENERATE IT, never hand-edit
// the committed copy: the spec moves under it every time a track is spliced.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const flag = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const specPath = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true)
  ?? 'research/plan-spec.json';
const MAX = Number(flag('--max', 8));
const only = flag('--round', null);
const repo = flag('--repo', '/root/Projects/prestige-math-library');

const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));

// ---------------------------------------------------------------- levels

const lvl = new Map();
function level(id) {
  if (lvl.has(id)) return lvl.get(id);
  const p = byId.get(id);
  lvl.set(id, 0);                                   // cycle guard; validate-plan reports real cycles
  const reqs = (p.requires ?? []).filter((r) => byId.has(r));
  const v = p.kind === 'P' ? 0 : (reqs.length ? Math.max(...reqs.map(level)) + 1 : 1);
  lvl.set(id, v);
  return v;
}
for (const p of spec.pages) level(p.id);

// ---------------------------------------------------------------- rounds

const byLevel = new Map();
for (const p of spec.pages) {
  if (p.kind === 'P') continue;
  const L = lvl.get(p.id);
  if (!byLevel.has(L)) byLevel.set(L, []);
  byLevel.get(L).push(p);
}

/** split into ceil(n/MAX) chunks as evenly as possible, keeping categories together */
function chunk(pages) {
  const n = Math.ceil(pages.length / MAX);
  if (n <= 1) return [pages];
  const sorted = [...pages].sort((a, b) =>
    (a.category ?? '').localeCompare(b.category ?? '') || a.order - b.order);
  const size = Math.ceil(sorted.length / n);
  const out = [];
  for (let i = 0; i < sorted.length; i += size) out.push(sorted.slice(i, i + size));
  return out;
}

const rounds = [];
for (const L of [...byLevel.keys()].sort((a, b) => a - b))
  for (const c of chunk(byLevel.get(L))) rounds.push({ level: L, pages: c });

// ---------------------------------------------------------------- authored?

const authored = (p) => p.items.length > 0 &&
  p.items.every((it) => existsSync(join(repo, 'items', `${it.id}.md`)));
const started = (p) => p.items.some((it) => existsSync(join(repo, 'items', `${it.id}.md`)));

// ---------------------------------------------------------------- pair table

/** frontmatter `status:` of an item on disk, or null if the file is absent. */
function itemStatus(id) {
  const f = join(repo, 'items', `${id}.md`);
  if (!existsSync(f)) return null;
  return readFileSync(f, 'utf8').match(/^status:\s*(\S+)/m)?.[1] ?? '?';
}

/**
 * State of a single page, computed from DISK and only falling back to the spec.
 *
 * The page file under `library/` is the ground truth and is checked FIRST,
 * because the spec's `items` array is not maintained for pages that were built
 * before the spec existed: 62 page files exist and only 58 spec entries carry an
 * item list, so inferring state from `items` alone reports long-published pages
 * as unscaffolded. That bug is why this reads the page file.
 *
 *   published     the page file says published
 *   draft         the page file says draft
 *   partial       no page file, but some item files written — mid-build
 *   planned       item list in the spec, nothing written
 *   unscaffolded  no item list — nothing to build from
 */
function pageState(p) {
  const f = pageFile(p);
  if (f) return readFileSync(f, 'utf8').match(/^status:\s*(\S+)/m)?.[1] ?? 'draft';
  if (!p.items.length) return 'unscaffolded';
  const st = p.items.map((it) => itemStatus(it.id));
  if (st.every((s) => s === null)) return 'planned';
  return 'partial';
}

/** the page's file under library/<category>/, or null */
function pageFile(p) {
  const cats = p.category ? [p.category] : [];
  for (const c of [...cats, 'foundations', 'real-analysis', 'topology', 'abstract-algebra',
                   'linear-algebra', 'number-theory', 'combinatorics', 'not-proved-here']) {
    const f = join(repo, 'library', c, `${p.id}.md`);
    if (existsSync(f)) return f;
  }
  return null;
}

if (has('--pairs')) {
  const rows = spec.pages
    .filter((p) => p.kind === 'A')
    .map((a) => {
      const b = byId.get(a.companion ?? `${a.id}-examples`);
      // prerequisites that are not yet fully authored — what actually blocks it
      const blockers = (a.requires ?? [])
        .filter((r) => byId.has(r))
        .filter((r) => !['draft', 'published'].includes(pageState(byId.get(r))));
      const aState = pageState(a);
      // An A page that is published while its B companion has no page file at all
      // is not "work outstanding": five such pairs exist and the owner has said
      // plainly (2026-07-28) that those B pages are never being built. Reporting
      // them as planned work makes every future session re-propose them.
      const bState = !b ? 'no-b-page'
        : (aState === 'published' && !pageFile(b) && !b.items.length) ? 'not-building'
        : pageState(b);
      return {
        level: lvl.get(a.id), order: a.order, id: a.id, category: a.category ?? '',
        aItems: a.items.length, bItems: b?.items.length ?? 0,
        aState, bState, blockers,
      };
    })
    .sort((x, y) => x.level - y.level || x.order - y.order);

  const md = has('--md');
  const byLvl = new Map();
  for (const r of rows) { if (!byLvl.has(r.level)) byLvl.set(r.level, []); byLvl.get(r.level).push(r); }

  const done = (s) => ['draft', 'published', 'not-building'].includes(s);
  // the build frontier: the lowest level holding a pair that is not finished
  const frontier = rows.find((r) => !(done(r.aState) && done(r.bState)))?.level ?? null;
  const tally = {};
  for (const r of rows) { tally[r.aState] = (tally[r.aState] ?? 0) + 1; }

  if (md) {
    console.log(`<!-- GENERATED by tools/rounds.mjs --pairs --md. Do not hand-edit: regenerate. -->`);
    console.log(`# Planned A/B pairs, ranked by dependency level\n`);
    console.log(`${rows.length} pairs across ${byLvl.size} levels. ` +
                `Build frontier: **level ${frontier ?? '—'}**.\n`);
    console.log(`A pages: ` + Object.entries(tally).sort().map(([k, v]) => `${v} ${k}`).join(' · ') + `\n`);
    console.log(`**A pair's level is its A page's.** Its B companion always sits exactly one`);
    console.log(`level higher, because it requires the A page. **Pairs sharing a level are`);
    console.log(`mutually independent** and may be authored in parallel — a dependency between`);
    console.log(`two pages forces the dependent one to a strictly higher level, so a shared`);
    console.log(`level is a proof of independence rather than an assertion of it.\n`);
    console.log(`\`not-building\` marks a B companion the owner has said is never being built`);
    console.log(`(its A page is published and no B page file was ever created). It is not`);
    console.log(`outstanding work; do not re-propose it.\n`);
    console.log(`"Blocked on" lists prerequisites that are not yet at least \`draft\`. A pair`);
    console.log(`with no blockers is buildable today regardless of its level.\n`);
    console.log(`| level | order | pair | category | A items | A | B items | B | blocked on |`);
    console.log(`|---|---|---|---|---|---|---|---|---|`);
    for (const r of rows)
      console.log(`| ${r.level} | ${r.order} | \`${r.id}\` | ${r.category} | ${r.aItems} | ${r.aState} | ${r.bItems} | ${r.bState} | ${r.blockers.join(', ') || '—'} |`);
  } else {
    console.log(`${rows.length} A/B pairs, ${byLvl.size} levels, frontier at level ${frontier ?? '—'}`);
    console.log(`A pages: ` + Object.entries(tally).sort().map(([k, v]) => `${v} ${k}`).join(' · ') + '\n');
    for (const [L, rs] of [...byLvl].sort((a, b) => a[0] - b[0])) {
      console.log(`level ${String(L).padStart(2)}  (${rs.length} pair${rs.length > 1 ? 's' : ''})`);
      for (const r of rs)
        console.log(`   ${(r.aState + '/' + r.bState).padEnd(24)} ${String(r.order).padStart(4)}  ${r.id.padEnd(52)} ${String(r.aItems).padStart(3)}+${String(r.bItems).padStart(3)}` +
                    (r.blockers.length ? `  <- blocked on ${r.blockers.join(', ')}` : ''));
    }
  }
  process.exit(0);
}

// ---------------------------------------------------------------- report

if (only !== null) {
  const r = rounds[Number(only) - 1];
  if (!r) { console.error(`no round ${only} (there are ${rounds.length})`); process.exit(2); }
  console.log(`round ${only}  (level ${r.level}, ${r.pages.length} pages, all mutually independent)`);
  for (const p of r.pages)
    console.log(`  ${p.kind}  ${p.id.padEnd(52)} ${String(p.items.length).padStart(3)} items  <- ${(p.requires ?? []).join(', ')}`);
  process.exit(0);
}

const widths = rounds.map((r) => r.pages.length);
console.log(`${spec.pages.filter((p) => p.kind !== 'P').length} pages, ${byLevel.size} dependency levels, ` +
            `${rounds.length} rounds at max ${MAX} per round`);
console.log(`round widths: ${widths.join(', ')}\n`);

rounds.forEach((r, i) => {
  const done = r.pages.filter(authored).length;
  const part = r.pages.filter((p) => started(p) && !authored(p)).length;
  const mark = done === r.pages.length ? 'DONE' : part || done ? 'WIP ' : '    ';
  console.log(`${mark} round ${String(i + 1).padStart(2)}  level ${String(r.level).padStart(2)}  ` +
              `${String(r.pages.length).padStart(2)} pages  ${r.pages.map((p) => p.id).join(', ')}`);
});
