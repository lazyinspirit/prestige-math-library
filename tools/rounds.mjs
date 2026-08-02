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
// ONE ROUND PER LEVEL (owner, 2026-07-28). Every A/B pair in a level is authored
// in parallel, however wide the level is. Splitting a level bought nothing —
// pages sharing a level are PROVABLY mutually independent, so there is no
// ordering to discover inside one and no risk a split mitigates — and it turned
// 19 levels into 36 sequential rounds.
//
// --max N re-enables the old split for a caller that wants to cap concurrency
// for a reason it can state. It is opt-in. When it is passed, a level wider than
// N is broken into balanced chunks grouped by category, so a capped round at
// least stays on one topic.
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

import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const flag = (f, d) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : d; };
const specPath = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true)
  ?? 'research/plan-spec.json';
const MAX = Number(flag('--max', Infinity));   // default: no split, one round per level
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

// ------------------------------------------------- audit batch manifests
//
// --audit-batches (owner, 2026-08-02, AUDIT-WORKFLOW.md): emit the published-
// page audit's batch manifests. A WAVE is the READER-FACING dependency level:
// the number printed in the /library index's "Dependency level" column (owner,
// 2026-08-02 — the audit order must agree with the live site). That level is
// NOT the plan-spec `requires` function above; it is the app's pageGraph
// (web/lib/library-categories.ts): page P depends on page Q when an item of P
// transitively `deps`-reaches an item whose HOME page is Q (home = first
// published page listing the item, except an item listed on P is always local
// to P), edges are kept within P's own category and transitively reduced, and
// the level is the longest path from a category root, roots at 0. Waves are
// therefore numbered from 0 and are category-local: wave 0 holds every
// category's root pairs. Cross-category dependency targets may share a wave —
// the within-category bottom-up guarantee holds, the cross-category one does
// not, and A6's cross-edge audit covers those edges. A BATCH is one category
// inside a wave. The `not-proved-here` catalogue pages are excluded from scope
// by owner instruction (they still take part in the home map). Manifests use
// the same array-of-pages shape as the build's batch files, so content-policy,
// audit-manifest, and level-coverage read them unchanged.
//
// Item lists come from the PAGE FILE, not the spec — the spec's `items` arrays
// are not maintained for pages built before it existed (the --pairs bug above).
// Each item entry records its CURRENT authored deps as the batch baseline, so
// level-coverage's plan-drift reconciliation surfaces exactly what audit
// repairs changed.
//
// ALREADY-TAGGED CONTENT IS OUT OF SCOPE (owner, 2026-08-02, standing rule).
// An item that already carries BOTH component-provenance tags was tagged,
// audited, and judged when it was authored under the current contract; the
// retro-audit covers only the legacy untagged corpus. Such items are excluded
// here, at scope generation, so every downstream gate (content-policy --audit,
// audit-manifest, level-coverage --audit, the judge sweep) inherits the
// exclusion. A page whose items are all tagged drops out entirely; genrisk.mjs
// deliberately still reads the whole corpus, because blast-radius tracking is
// not an audit of the seed.
//
//   node tools/rounds.mjs --audit-batches [--wave K] [--outdir research/audit]

if (has('--audit-batches')) {
  const outdir = flag('--outdir', 'research/audit');
  const onlyWave = flag('--wave', null);
  const fmOf = (path) => readFileSync(path, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const fmList = (fm, key) => {
    const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
    if (start < 0) return [];
    const open = fm.indexOf('[', start);
    let depth = 0;
    for (let i = open; i < fm.length; i += 1) {
      if (fm[i] === '[') depth += 1;
      else if (fm[i] === ']' && --depth === 0) {
        return fm.slice(open + 1, i).split(',').map((v) => v.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
      }
    }
    return [];
  };
  const fmNested = (fm, parent, child) => {
    const start = fm.search(new RegExp(`^${parent}:[ \\t]*(?:#.*)?$`, 'm'));
    if (start < 0) return undefined;
    const m = fm.slice(start).match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
    return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
  };
  let alreadyTagged = 0;
  const itemEntries = (ids) => ids.flatMap((id) => {
    const f = join(repo, 'items', `${id}.md`);
    if (!existsSync(f)) return [{ id, deps: [] }];
    const fm = fmOf(f);
    if (fmNested(fm, 'provenance', 'statement') && fmNested(fm, 'provenance', 'proof')) {
      alreadyTagged += 1;
      return [];
    }
    return [{ id, deps: fmList(fm, 'deps') }];
  });

  // ---- published pages from disk, in the renderer's walk order ------------
  const libRoot = join(repo, 'library');
  const disk = [];
  for (const cat of readdirSync(libRoot).sort()) {
    const dir = join(libRoot, cat);
    if (!statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir).sort()) {
      if (!f.endsWith('.md') || f === '_category.md') continue;
      const fm = fmOf(join(dir, f));
      if (!/^status:[ \t]*['"]?published['"]?[ \t]*$/m.test(fm)) continue;
      const id = f.slice(0, -3);
      disk.push({ id, category: cat, key: `${cat}/${id}`,
                  items: fmList(fm, 'items'), examples: fmList(fm, 'examples') });
    }
  }

  // ---- item `deps` for the whole corpus (BFS chains through drafts too) ---
  const itemDeps = new Map();
  for (const f of readdirSync(join(repo, 'items'))) {
    if (!f.endsWith('.md')) continue;
    itemDeps.set(f.slice(0, -3), fmList(fmOf(join(repo, 'items', f)), 'deps'));
  }

  // ---- site-parity page level (web/lib/library-categories.ts pageGraph) ---
  const home = new Map();
  for (const p of disk) {
    for (const id of [...p.items, ...p.examples]) if (!home.has(id)) home.set(id, p.key);
  }
  const depth = new Map(); // page key -> category-local dependency level
  for (const cat of [...new Set(disk.map((p) => p.category))]) {
    const group = disk.filter((p) => p.category === cat);
    const inGroup = new Set(group.map((p) => p.key));
    const raw = new Set();
    for (const p of group) {
      const own = new Set([...p.items, ...p.examples]);
      const seenPages = new Set();
      const visited = new Set();
      const queue = [...p.items, ...p.examples];
      while (queue.length) {
        const id = queue.shift();
        if (visited.has(id)) continue;
        visited.add(id);
        const deps = itemDeps.get(id);
        if (!deps) continue;
        const h = own.has(id) ? p.key : home.get(id);
        if (h && h !== p.key && !seenPages.has(h)) {
          seenPages.add(h);
          if (inGroup.has(h)) raw.add(`${h}>${p.key}`);
        }
        queue.push(...deps);
      }
    }
    const adj = new Map([...inGroup].map((k) => [k, new Set()]));
    for (const e of raw) { const [a, b] = e.split('>'); adj.get(a)?.add(b); }
    const reachesWithout = (start, target) => {
      const seen = new Set();
      const stack = [...(adj.get(start) ?? [])].filter((n) => n !== target);
      while (stack.length) {
        const x = stack.pop();
        if (x === target) return true;
        if (seen.has(x)) continue;
        seen.add(x);
        for (const n of adj.get(x) ?? []) stack.push(n);
      }
      return false;
    };
    const parents = new Map([...inGroup].map((k) => [k, []]));
    for (const e of raw) {
      const [a, b] = e.split('>');
      if (!reachesWithout(a, b)) parents.get(b).push(a);
    }
    const active = new Set();
    const depthOf = (k) => {
      if (depth.has(k)) return depth.get(k);
      if (active.has(k)) return 0;
      active.add(k);
      const ps = parents.get(k) ?? [];
      const v = ps.length ? Math.max(...ps.map(depthOf)) + 1 : 0;
      active.delete(k);
      depth.set(k, v);
      return v;
    };
    for (const k of inGroup) depthOf(k);
  }

  // ---- batches: one category per wave, pair = A page + published companion -
  const EX = '-examples';
  const byKeyDisk = new Map(disk.map((p) => [p.key, p]));
  const pageEntry = (p, kind) => ({ id: p.id, kind, category: p.category, items: itemEntries([...p.items, ...p.examples]) });
  const batches = new Map(); // "wave<k>-<category>" -> pages[]
  for (const a of disk) {
    if (a.category === 'not-proved-here') continue;      // owner exclusion
    if (a.id.endsWith(EX)) continue;                     // B pages ride with their A page
    const wave = depth.get(a.key);
    if (onlyWave !== null && Number(onlyWave) !== wave) continue;
    const b = byKeyDisk.get(`${a.category}/${a.id}${EX}`) ?? null;
    const pages = [pageEntry(a, 'A'), b ? pageEntry(b, 'B') : null]
      .filter((page) => page && page.items.length);
    if (!pages.length) continue; // the whole pair is already tagged — out of scope
    const key = `wave${wave}-${a.category}`;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(...pages);
  }
  if (!batches.size) { console.error('audit-batches: no published pages matched'); process.exit(2); }
  const outRoot = outdir.startsWith('/') ? outdir : join(process.cwd(), outdir);
  mkdirSync(outRoot, { recursive: true });
  let itemTotal = 0;
  for (const [key, pages] of [...batches].sort()) {
    const path = join(outRoot, `${key}.pages.json`);
    writeFileSync(path, `${JSON.stringify(pages, null, 2)}\n`);
    const count = pages.reduce((sum, page) => sum + page.items.length, 0);
    itemTotal += count;
    console.log(`${path}  ${pages.length} page(s), ${count} item(s)`);
  }
  console.log(`audit-batches: ${batches.size} batch manifest(s), ${itemTotal} item(s) in scope; ${alreadyTagged} already-tagged item(s) excluded (owner rule 2026-08-02)`);
  process.exit(0);
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
