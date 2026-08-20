#!/usr/bin/env node
// source-backing — does every harvested result still have a source a reader can open?
//
//   node tools/source-backing.mjs --coverage a.json,b.json --liveness <run>-url-liveness.json
//   node tools/source-backing.mjs --coverage … --liveness … --reharvest-plan <out.json>
//
// WHY THIS EXISTS, AND WHY IT IS NOT `url-sweep`.
//
// `url-sweep` answers "can this URL be opened". `source-fetch-check` answers
// "does it serve the document". Neither answers the question that decides
// whether MATHEMATICS is lost: **which results were backed only by that
// source?**
//
// The scouting order already ends with the right instruction — "if the same
// text genuinely cannot be found, a different source is a re-harvest" — but it
// lived only in a prompt. Nothing detected the case, nothing named the results
// that needed re-backing, and nothing checked afterwards that they still had
// any. So the cheap way out of a dead citation was always to delete the source
// row, which silently deletes its `included` results with it, and every gate
// stays green because they all validate what is present.
//
// On frontier-16 a textbook (Hu-Li-Li-Yan, *Calculus: Rigor, Concision,
// Clarity*) went 403 to every client with no archive snapshot anywhere. Two
// authored results were backed by it and nothing else:
// `ex-sine-period-arc-length-as-a-complete-elliptic-integral` and
// `rem-sine-period-arc-length-integrand-is-nonelementary`. Dropping the source
// to clear the gate would have taken both off the page, and the run would have
// reported success.
//
// THE RULE. A result that had source backing may not end up with none. Finding
// a replacement source is judgment and belongs to a scout; noticing that the
// backing is gone, and naming exactly which results lost it, is a function of
// files on disk and belongs here.
//
// Exit 1 on any lost backing. `--reharvest-plan` writes the scout's work list.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const argv = process.argv.slice(2);
const opt = (n, d = null) => {
  const i = argv.indexOf(`--${n}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d;
};
const has = (n) => argv.includes(`--${n}`);

const coverageArg = opt('coverage');
const livenessPath = opt('liveness');
const planPath = opt('reharvest-plan');
// A source that answers 200 but was never fetch-verified is live for a reader
// and unproven for us. That is `source-fetch-check`'s question, not this one,
// so it counts as backing by default; --require-verified makes this stricter
// for a run that has finished stamping.
const requireVerified = has('require-verified');

if (!coverageArg || !livenessPath) {
  console.error('usage: node tools/source-backing.mjs --coverage <a.json,b.json> --liveness <file> [--reharvest-plan <out>] [--require-verified]');
  process.exit(2);
}

// A gate whose inputs are absent is a failure, never a pass.
if (!existsSync(livenessPath)) {
  console.error(`ERROR backing-no-liveness: ${livenessPath} does not exist — run url-sweep first`);
  process.exit(2);
}

const liveness = JSON.parse(readFileSync(livenessPath, 'utf8'));
const livenessRows = liveness.rows ?? liveness.results ?? liveness.urls ?? [];
if (!Array.isArray(livenessRows) || !livenessRows.length) {
  console.error(`ERROR backing-empty-liveness: ${livenessPath} carries no rows — a sweep over nothing is not a sweep`);
  process.exit(2);
}

const normUrl = (u) => String(u ?? '').replace(/&amp;/g, '&').trim();
const okByUrl = new Map(livenessRows.map((r) => [normUrl(r.url), r.ok === true]));

/** A source a reader can open. Unknown to the sweep is NOT assumed dead — the
 *  sweep collects from these same files, so an absent row means the shapes
 *  disagree, and inventing a death from that would delete real results. */
const sourceUsable = (s) => {
  const known = okByUrl.get(normUrl(s.url));
  if (known === false) return false;
  if (requireVerified && !s.fetch_verified) return false;
  return true;
};

const files = coverageArg.split(',').map((s) => s.trim()).filter(Boolean);
const work = [];
let itemsChecked = 0;
let filesRead = 0;

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`ERROR backing-missing-coverage: ${file} does not exist`);
    process.exit(2);
  }
  filesRead += 1;
  const cov = JSON.parse(readFileSync(file, 'utf8'));
  for (const page of cov.pages ?? []) {
    // item -> every source row that backs it, live or not
    const backing = new Map();
    for (const s of page.sources ?? []) {
      for (const h of s.contents ?? []) {
        if (h.disposition !== 'included' || !h.item) continue;
        if (!backing.has(h.item)) backing.set(h.item, []);
        backing.get(h.item).push({ source: s, row: h });
      }
    }
    for (const [item, rows] of backing) {
      itemsChecked += 1;
      if (rows.some((r) => sourceUsable(r.source))) continue;
      const dead = rows.map((r) => ({
        url: r.source.url,
        title: r.source.title,
        kind: r.source.kind,
        locator: r.source.locator,
        result: r.row.name,
      }));
      work.push({ file, page: page.page ?? page.id, item, dead });
    }
  }
}

if (planPath) {
  writeFileSync(planPath, JSON.stringify({
    generated_from: files, liveness: livenessPath, items_checked: itemsChecked, work,
  }, null, 2) + '\n');
}

if (work.length) {
  console.error(`source-backing: ${work.length} authored result(s) have no openable source left`);
  for (const w of work) {
    // The URL is in the message on purpose: it is what routes a scout to the
    // owning batch (stages/mathlib.mts, dispatchSourceScouts).
    console.error(`ERROR backing-lost: ${w.page}: ${w.item} — backed only by ${w.dead.map((d) => d.url).join(', ')}`);
    for (const d of w.dead) {
      console.error(`    "${d.result}" via ${d.title ?? 'untitled'} @ ${d.locator ?? 'no locator'}`);
    }
  }
  console.error('A replacement SOURCE is the remedy, never a dropped result: find a different');
  console.error('treatment carrying the same definition/theorem/example, re-read the range, and');
  console.error('rewrite that source\'s contents rows faithfully.');
  if (planPath) console.error(`wrote the scout's work list to ${planPath}`);
  process.exit(1);
}

console.log(`source-backing: ${itemsChecked} authored result(s) across ${filesRead} file(s), every one still backed by an openable source`);
