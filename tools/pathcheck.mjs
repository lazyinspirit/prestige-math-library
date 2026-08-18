#!/usr/bin/env node
// pathcheck.mjs — the gate on `library/<category>/_pathway.md`, the reading
// order a category page renders.
//
//   node tools/pathcheck.mjs [--json] [--quiet] [<category> …]
//
// WHY IT EXISTS. The category page used to open with a dependency flowchart of
// every page in the group; at 83 pages that could not be read. It now opens
// with a PATHWAY: named parts, each with a written brief, each listing its
// pages. The parts are authored, so nothing mechanical keeps them true as the
// library grows. This does.
//
// A part is anchored to a LIST OF PAGES, never to a dependency level, because a
// level is the longest prerequisite chain in the group and inserting one page
// renumbers everything above it. A page list cannot drift that way; it can only
// be incomplete, which is what this checks. `pathway-sync.mjs` at step 10 is
// what keeps it from getting there.
//
// HARD ERRORS
//   part-page-missing    a part lists a page that does not exist
//   part-page-foreign    a part lists a page from another category
//   part-page-companion  a part lists a `-examples` page; a companion rides
//                        with its A page and is never placed on its own
//   part-page-dup        two parts list the same page
//   page-unplaced        a published A page that no part lists
//   part-empty           a part with no pages
//   part-brief-missing   a part with no `## <part>` section in the body
//   brief-orphan         a `## <slug>` section naming no part
//   part-order           a part sits before a part it depends on
//   pathway-unparsable   the file exists but its frontmatter does not parse
//
// WARNINGS
//   part-singleton   a part holding one page
//   draft-unplaced   a draft page in no part; pathway-sync places it
//   brief-long       a brief over 120 words
//   pathway-missing  a category with published pages and no pathway file
//
// Exit 0 iff there are no hard errors.

import { categories, loadCorpus, readPathway } from './pathway-lib.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const quiet = argv.includes('--quiet');
const only = new Set(argv.filter((a) => !a.startsWith('--')));

const errors = [];
const warns = [];
const err = (code, msg) => errors.push({ code, msg });
const warn = (code, msg) => warns.push({ code, msg });

const { pages, byPage, mainOf, restsOn } = loadCorpus();

let checked = 0;
for (const cat of categories().filter((c) => !only.size || only.has(c))) {
  const inCat = (status) => [...new Set(
    pages.filter((p) => p.cat[0] === cat && p.status === status).map((p) => mainOf(p.page)),
  )].filter((s) => byPage.has(s));
  const aPages = inCat('published');
  // A draft page is one the sync should already have placed, but it is not live
  // and a level in flight must not be blocked by it.
  const draftPages = inCat('draft').filter((s) => !aPages.includes(s));

  const pw = readPathway(cat);
  if (!pw) {
    if (aPages.length)
      warn('pathway-missing', `${cat}: ${aPages.length} published pages and no _pathway.md (the group renders dependency levels instead)`);
    continue;
  }
  checked++;
  const rel = `library/${cat}/_pathway.md`;
  if (pw.error) { err('pathway-unparsable', `${rel}: ${pw.error}`); continue; }
  if (!pw.parts.length) { err('pathway-unparsable', `${rel}: no parts`); continue; }

  const partOf = new Map();
  pw.parts.forEach((part, i) => {
    if (!part.pages.length) err('part-empty', `${rel}: part "${part.part}" lists no pages`);
    if (part.pages.length === 1) warn('part-singleton', `${rel}: part "${part.part}" holds one page`);
    if (!pw.briefs.has(part.part)) err('part-brief-missing', `${rel}: part "${part.part}" has no "## ${part.part}" section`);
    const words = (pw.briefs.get(part.part) ?? '').split(/\s+/).filter(Boolean).length;
    if (words > 120) warn('brief-long', `${rel}: brief for "${part.part}" runs to ${words} words`);
    for (const page of part.pages) {
      if (!byPage.has(page)) { err('part-page-missing', `${rel}: part "${part.part}" lists "${page}", which is not a page`); continue; }
      if (byPage.get(page).cat[0] !== cat) { err('part-page-foreign', `${rel}: part "${part.part}" lists "${page}", which lives in ${byPage.get(page).cat.join('/')}`); continue; }
      if (mainOf(page) !== page) { err('part-page-companion', `${rel}: part "${part.part}" lists the companion "${page}"; list "${mainOf(page)}" instead`); continue; }
      if (partOf.has(page)) { err('part-page-dup', `${rel}: "${page}" is listed by two parts`); continue; }
      partOf.set(page, i);
    }
  });

  for (const slug of pw.briefs.keys())
    if (!pw.parts.some((p) => p.part === slug)) err('brief-orphan', `${rel}: "## ${slug}" names no part`);

  for (const page of aPages)
    if (!partOf.has(page)) err('page-unplaced', `${rel}: published page "${page}" is in no part`);
  for (const page of draftPages)
    if (!partOf.has(page)) warn('draft-unplaced', `${rel}: draft page "${page}" is in no part (pathway-sync places it)`);

  // THE ORDERING RULE. Everything a page rests on inside its own group sits in
  // its part or an earlier one, so a reader working down the page has read the
  // prerequisites by the time they arrive.
  const name = (i) => `${i + 1} (${pw.parts[i]?.part ?? '?'})`;
  for (const [page, i] of partOf)
    for (const dep of restsOn(page)) {
      const j = partOf.get(dep);
      if (j === undefined || j <= i) continue;
      err('part-order', `${rel}: "${page}" is in part ${name(i)} but rests on "${dep}" in part ${name(j)}`);
    }
}

const summary = { checked, errors: errors.length, warnings: warns.length };
if (asJson) {
  console.log(JSON.stringify({ summary, errors, warns }, null, 2));
} else if (!quiet || errors.length) {
  for (const w of warns) console.log(`WARN  ${w.code}  ${w.msg}`);
  for (const e of errors) console.log(`ERROR ${e.code}  ${e.msg}`);
  console.log(`${checked} pathway ${checked === 1 ? 'file' : 'files'} checked, ${errors.length} errors, ${warns.length} warnings`);
}
process.exit(errors.length ? 1 : 0);
