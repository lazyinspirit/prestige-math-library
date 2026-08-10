#!/usr/bin/env node
// Build a scratch page overlay so an ENRICHMENT run can be judged with true
// A/B-pair context.
//
// THE PROBLEM. `tools/judge.mts` discovers an item's pair by reading the page
// files' `items:`/`examples:` frontmatter lists, and the owner's rule is that
// the judge's context unit is the A/B PAIR. An enrichment run adds new DRAFT
// items to an ALREADY PUBLISHED page, where two rules forbid listing them:
// `depcheck`'s `draft-on-published-page`, and the fact that `library/` is
// bind-mounted by the live site, so a served page listing an unpublished item
// would publish a dangling reference. Left alone, every new item is judged with
// NO page and NO pair context — silently, because a page that lists nothing
// reads exactly like a page with nothing to say.
//
// THE FIX. Copy `library/` to a scratch directory, splice the staged item ids
// into the affected pages there, and point ONLY page discovery at the copy via
// `JUDGE_LIBRARY_DIR`. Item bodies are always read from `items/`, so the overlay
// changes which ids are considered page-mates and nothing else. `library/` is
// never written.
//
// usage:
//   node tools/judge-overlay.mjs --manifest research/<run>-batch-<i>.pages.full.json \
//                                --out /tmp/<run>-judge-overlay
//   JUDGE_LIBRARY_DIR=/tmp/<run>-judge-overlay node tools/judge-sweep.mjs ...

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, cpSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const value = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };

const manifestPath = value('--manifest');
const outDir = value('--out');
if (!manifestPath || !outDir) {
  console.error('usage: node tools/judge-overlay.mjs --manifest <pages.full.json> --out <dir>');
  process.exit(2);
}

const resolve = (p) => (existsSync(p) ? p : join(REPO, p));
const manifest = JSON.parse(readFileSync(resolve(manifestPath), 'utf8'));
const pages = Array.isArray(manifest) ? manifest : (manifest.pages ?? []);

const libraryDir = join(REPO, 'library');
if (!existsSync(libraryDir)) { console.error('judge-overlay: no library/ to copy'); process.exit(2); }

// Fresh copy each run: a stale overlay is worse than none, because it would
// silently judge against last run's page membership.
mkdirSync(outDir, { recursive: true });
cpSync(libraryDir, outDir, { recursive: true });

// Index the overlay's page files by slug so a manifest page id finds its file
// wherever it sits in the category tree.
const files = [];
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md')) files.push(p);
  }
};
walk(outDir);
const bySlug = new Map(files.map((f) => [basename(f).replace(/\.md$/, ''), f]));

// Replace a frontmatter list in place, preserving everything else byte for byte.
const spliceList = (src, key, ids) => {
  const re = new RegExp('^' + key + ':\\s*\\[[^\\]]*\\]', 'm');
  const rendered = `${key}: [${ids.join(',\n' + ' '.repeat(key.length + 3))}]`;
  if (re.test(src)) return src.replace(re, rendered);
  // Key absent (a B page with no `items:` line, say): insert before the closing
  // frontmatter fence rather than guessing a position.
  return src.replace(/\n---\n/, `\n${rendered}\n---\n`);
};

let patched = 0;
const report = [];
for (const page of pages) {
  const file = bySlug.get(page.id);
  if (!file) { console.error(`judge-overlay: no page file for "${page.id}" — skipped`); continue; }
  const ids = (page.items ?? []).map((it) => it.id);
  if (!ids.length) continue;
  // A page's own kind decides which key carries its ids: an A page lists items,
  // a B/examples page lists examples. Writing the wrong key would leave the
  // pair unresolvable exactly as before, and just as quietly.
  const key = page.kind === 'B' || page.id.endsWith('-examples') ? 'examples' : 'items';
  const before = readFileSync(file, 'utf8');
  const after = spliceList(before, key, ids);
  writeFileSync(file, after);
  patched += 1;
  report.push(`  ${page.id}: ${key} = ${ids.length} ids`);
}

console.log(`judge-overlay: copied library/ -> ${outDir}`);
report.forEach((line) => console.log(line));
console.log(`judge-overlay: patched ${patched} page file(s)`);
console.log(`\nrun the sweep with:\n  JUDGE_LIBRARY_DIR=${outDir} node tools/judge-sweep.mjs ...`);
