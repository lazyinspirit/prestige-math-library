#!/usr/bin/env node
// pathway-sync.mjs — put newly published pages into their category's pathway.
//
//   node tools/pathway-sync.mjs [--run <run>] [--dry-run] [--json]
//
// A pathway is authored, and the library gains pages every level, so without
// this the written reading order silently stops covering the corpus. This runs
// at STEP 10 of the per-level build (LEVELS.md), next to the touch snapshot,
// and it is why `pathcheck` can be a hard gate rather than a chore.
//
// WHAT IT DOES, AND DELIBERATELY DOES NOT DO. Every page has a LEGAL WINDOW of
// parts: no earlier than the part holding the last page it rests on, no later
// than the part holding the first page that rests on it. The sync picks the
// part inside that window where most of the page's neighbours already live, so
// a page lands with the material it argues with rather than at the edge of what
// is allowed. The window is what makes it safe: the sync cannot break the
// ordering rule the gate enforces, whatever it picks.
//
// It does not reorder parts, does not create parts, does not touch a single
// word of brief prose, and does not invent a pathway for a category that has
// none. Placement is mechanical; what a part MEANS is the owner's, and the
// step-10 report is where it gets asked for.
//
// The receipt is `research/<run>-pathway.json` plus a printed summary: the
// pages placed, the part each landed in, the parts whose briefs now cover
// material they do not mention, and the categories still owed a pathway file.

import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { REPO, categories, loadCorpus, readPathway, pathwayPath } from './pathway-lib.mjs';

// Kept in step with pathcheck's list: the ‡ tier has no reading order to write,
// so it is not owed a pathway file and must not be reported as one.
const NO_PATHWAY = new Set(['not-proved-here']);

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const runIdx = argv.indexOf('--run');
const run = runIdx >= 0 ? argv[runIdx + 1] : null;

const { pages, byPage, mainOf, restsOn, levelsIn } = loadCorpus();

const placed = [];   // {category, page, part, partIndex, level}
const touched = [];  // {category, part, gained: [pages]}
const owed = [];     // categories with published pages and no pathway file
const stuck = [];    // pages the sync could not place, with why

for (const cat of categories()) {
  // DRAFTS COUNT HERE. A level publishes after the owner audit, which is after
  // step 10, so a run that only placed published pages would place nothing and
  // leave the gate to fail later, with nobody in the room. The gate is strict
  // about what is live; the sync is early about what is coming.
  const aPages = [...new Set(pages.filter((p) => p.cat[0] === cat).map((p) => mainOf(p.page)))]
    .filter((s) => byPage.has(s));
  if (!aPages.length) continue;

  const pw = readPathway(cat);
  if (!pw) { if (!NO_PATHWAY.has(cat)) owed.push({ category: cat, pages: aPages.length }); continue; }
  if (pw.error || !pw.parts.length) { stuck.push({ category: cat, reason: pw.error ?? 'no parts' }); continue; }

  const partOf = new Map();
  pw.parts.forEach((part, i) => { for (const page of part.pages) if (byPage.has(page)) partOf.set(page, i); });

  const missing = aPages.filter((p) => !partOf.has(p));
  if (!missing.length) continue;

  // Shallowest first, so a new page whose prerequisite is ALSO new is placed
  // after that prerequisite and can see where it landed.
  const level = levelsIn(cat);
  missing.sort((a, b) => (level.get(a) ?? 0) - (level.get(b) ?? 0) || a.localeCompare(b));

  // Who rests on whom, inside this category, so a placement can look both ways.
  const usedBy = new Map();
  for (const page of aPages)
    for (const dep of restsOn(page)) {
      if (!aPages.includes(dep)) continue;
      usedBy.set(dep, [...(usedBy.get(dep) ?? []), page]);
    }

  const additions = new Map();  // part index -> [pages]
  for (const page of missing) {
    const before = [...restsOn(page)].filter((d) => partOf.has(d)).map((d) => partOf.get(d));
    const after = (usedBy.get(page) ?? []).filter((d) => partOf.has(d)).map((d) => partOf.get(d));
    const lo = before.length ? Math.max(...before) : 0;
    const hi = after.length ? Math.min(...after) : pw.parts.length - 1;
    // A window can invert when the pathway itself is inconsistent; the gate
    // reports that, and here the lower bound is the one that must hold.
    const top = Math.max(lo, hi);
    let index = lo;
    let best = -1;
    for (let k = lo; k <= top; k++) {
      const near = [...before, ...after].filter((n) => n === k).length;
      if (near > best) { best = near; index = k; }
    }
    partOf.set(page, index);
    additions.set(index, [...(additions.get(index) ?? []), page]);
    placed.push({ category: cat, page, part: pw.parts[index].part, partIndex: index + 1, level: level.get(page) ?? 0 });
  }

  if (!dryRun) writeInsertions(pw, additions, level);
  for (const [i, added] of additions)
    touched.push({ category: cat, part: pw.parts[i].part, gained: added });
}

/**
 * Insert the new page lines into the file TEXT rather than re-serialising the
 * YAML: the frontmatter is hand-written, and a round trip through a dumper
 * would reflow every part in the file to record one line.
 */
function writeInsertions(pw, additions, level) {
  const lines = pw.raw.split('\n');
  // Locate each part's page lines: `  - part: <slug>` … `      - <page>`
  const slots = new Map();  // part slug -> {last: lineIndex, indent: string, pages: [{line, page}]}
  let current = null;
  lines.forEach((line, i) => {
    const p = line.match(/^\s*-\s+part:\s*(\S+)\s*$/);
    if (p) { current = p[1]; slots.set(current, { last: i, indent: '      ', pages: [] }); return; }
    if (!current) return;
    const entry = line.match(/^(\s+)-\s+(\S+)\s*$/);
    if (entry && !/^\s*-\s+(part|title|pages):/.test(line)) {
      const slot = slots.get(current);
      slot.indent = entry[1];
      slot.last = i;
      slot.pages.push({ line: i, page: entry[2] });
    }
  });

  const inserts = [];  // {at: lineIndex, text}
  for (const [i, added] of additions) {
    const slug = pw.parts[i].part;
    const slot = slots.get(slug);
    if (!slot) continue;
    for (const page of added) {
      // Sit with the pages of the same depth, so the file reads in the order
      // the site renders.
      const lv = level.get(page) ?? 0;
      const before = slot.pages.find((e) => (level.get(e.page) ?? 0) > lv);
      inserts.push({ at: before ? before.line : slot.last + 1, text: `${slot.indent}- ${page}` });
      slot.pages.push({ line: before ? before.line : slot.last + 1, page });
      slot.pages.sort((a, b) => a.line - b.line);
    }
  }
  // Bottom up, so an earlier insertion does not move a later line index.
  inserts.sort((a, b) => b.at - a.at);
  for (const ins of inserts) lines.splice(ins.at, 0, ins.text);
  writeFileSync(pw.file, lines.join('\n'));
}

const receipt = {
  run: run ?? null,
  placed,
  briefsToRevisit: touched,
  categoriesWithoutPathway: owed,
  unplaceable: stuck,
};
if (run && !dryRun) {
  const dir = join(REPO, 'research');
  writeFileSync(join(dir, `${run}-pathway.json`), JSON.stringify(receipt, null, 2) + '\n');
}

if (asJson) {
  console.log(JSON.stringify(receipt, null, 2));
} else {
  for (const p of placed)
    console.log(`PLACED  ${p.category}/${p.page} -> part ${p.partIndex} (${p.part}), level ${p.level}`);
  for (const t of touched)
    console.log(`BRIEF   ${t.category}/${t.part} gained ${t.gained.length} ${t.gained.length === 1 ? 'page' : 'pages'}; its brief does not mention ${t.gained.length === 1 ? 'it' : 'them'} yet`);
  for (const o of owed)
    console.log(`OWED    ${o.category} has ${o.pages} published pages and no _pathway.md`);
  for (const s of stuck)
    console.log(`STUCK   ${s.category}: ${s.reason}`);
  console.log(`${placed.length} placed, ${touched.length} ${touched.length === 1 ? 'brief' : 'briefs'} to revisit, ${owed.length} ${owed.length === 1 ? 'category' : 'categories'} without a pathway${dryRun ? ' (dry run, nothing written)' : ''}`);
}

// The sync is not the gate. Fail loudly only when it could not do its job.
process.exit(stuck.length ? 1 : 0);
