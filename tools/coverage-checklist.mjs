#!/usr/bin/env node
// coverage-checklist.mjs — the OMISSION gate.
//
//   node tools/coverage-checklist.mjs research/<run>-batch-*.coverage.json [--json]
//   node tools/coverage-checklist.mjs --manifests research/<run>-batch-1.pages.json \
//        research/<run>-batch-1.coverage.json
//
// WHY THIS EXISTS (owner, 2026-08-11). Every other gate in this repo reads what
// was written and asks whether it is true. Not one of them can see what was
// never written at all. That blind spot shipped two thin pages:
// `group-actions-and-cayleys-theorem` was published with orbits, stabilisers and
// the orbit partition but WITHOUT the orbit-stabiliser theorem, the class
// equation, or Cauchy's theorem, and with an entirely empty B page; and
// `free-groups-and-presentations` had to be rewritten wholesale in run
// `freegroups-1` for lack of depth.
//
// The measured cause was not source QUALITY. frontier-9's batch notes cite
// Sharifi (UCLA), Brosnan (UMD), Judson and Axler — real lecture notes and real
// textbooks, not encyclopedia entries. The cause was that nothing obliged a Beta
// to HARVEST a source it had already found. Brosnan's note is literally titled
// "Orbits and stabilizers"; it was recorded in the source ledger as covering
// "orbit structure"; and the orbit-stabiliser theorem was still never scaffolded.
// A source can be cited without being read to the end, and no gate noticed.
//
// So the harvest here is SOURCE-ANCHORED, never a target count. A Beta
// enumerates a source's own section and named-result headings over the range it
// claims to have read, and then every one of those headings must receive an
// explicit disposition: scaffolded as an item, absorbed inline into another
// proof, already published elsewhere, or deliberately not built with a written
// reason. That shape is deliberate. A required minimum NUMBER of results would
// invite exactly the padding the owner forbids; a required disposition for every
// result the source itself contains cannot be satisfied by inventing anything.
//
// This gate checks structure, not honesty: it cannot fetch the source and
// confirm the harvest is faithful. That reading is Alpha's at Step 6, and the
// checklist is what gives Alpha something specific to check against.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const files = argv.filter((a) => !a.startsWith('--'));
if (!files.length) usage();

// A source that is only an encyclopedia entry cannot be a pair's primary
// backing. These are the kinds that CAN be: a real treatment with a table of
// contents deep enough to harvest.
const PRIMARY_KINDS = new Set(['textbook', 'monograph', 'lecture-notes', 'course-notes', 'survey']);
const SECONDARY_KINDS = new Set(['encyclopedia', 'wiki', 'reference-work', 'paper', 'problem-set']);
const ALL_KINDS = new Set([...PRIMARY_KINDS, ...SECONDARY_KINDS]);

const DISPOSITIONS = new Set(['included', 'inline', 'already-published', 'deferred', 'out-of-scope']);
// A disposition that declines to build something must say why, in the author's
// own words about THIS result. 40 characters is not a quality bar; it is enough
// to make "n/a" and "not needed" fail while never blocking a real sentence.
const MIN_REASON = 40;

const errors = [];
const warnings = [];
const error = (code, message, id) => errors.push({ code, message, id });
const warn = (code, message, id) => warnings.push({ code, message, id });

// ---------------------------------------------------------------- manifests

// Pair each coverage file with the batch manifest of the same stem, so an
// `included` disposition can be checked against an id that actually exists.
function manifestFor(coveragePath) {
  const guess = coveragePath.replace(/\.coverage\.json$/, '.pages.json');
  return existsSync(guess) ? guess : null;
}

// Published item ids, for `already-published` dispositions. Read once.
let publishedIds = null;
function published() {
  if (publishedIds) return publishedIds;
  publishedIds = new Set();
  const dir = join(REPO, 'items');
  for (const file of existsSync(dir) ? readdirSync(dir) : []) {
    if (!file.endsWith('.md')) continue;
    const text = readFileSync(join(dir, file), 'utf8');
    if (/^status:\s*published/m.test(text)) publishedIds.add(file.replace(/\.md$/, ''));
  }
  return publishedIds;
}

// ---------------------------------------------------------------- the gate

let pageCount = 0;
let harvestCount = 0;

for (const path of files) {
  if (!existsSync(path)) { error('coverage-missing-file', `${path}: no such coverage file`); continue; }

  let doc;
  try { doc = JSON.parse(readFileSync(path, 'utf8')); }
  catch (cause) { error('coverage-unparseable', `${path}: ${cause.message}`); continue; }

  const label = basename(path);
  const covered = new Map((doc.pages ?? []).map((p) => [p.page, p]));

  // Every A page in the batch must be harvested. A batch manifest is the
  // authority on what the batch contains; a coverage file cannot narrow it.
  const manifestPath = manifestFor(path);
  if (!manifestPath) {
    warn('coverage-no-manifest', `${label}: no sibling .pages.json; cannot cross-check item ids`);
  } else {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const pages = Array.isArray(manifest) ? manifest : manifest.pages ?? [];
    for (const page of pages.filter((p) => p.kind === 'A')) {
      if (!covered.has(page.id)) {
        error('coverage-missing-page', `${label}: A page ${page.id} has no coverage entry`, page.id);
      }
    }
    // `included` must name an id the batch actually scaffolds — on either page
    // of the pair, because a harvested result may legitimately land on the B
    // companion as a worked example.
    const scaffolded = new Set(pages.flatMap((p) => (p.items ?? []).map((i) => i.id)));
    for (const entry of covered.values()) {
      for (const result of harvestOf(entry)) {
        if (result.disposition === 'included' && result.item && !scaffolded.has(result.item)) {
          error('coverage-unknown-item',
            `${label}: ${entry.page}: "${result.name}" is disposed 'included' as ${result.item}, which the batch does not scaffold`,
            entry.page);
        }
      }
    }
  }

  for (const entry of doc.pages ?? []) {
    pageCount++;
    const where = `${label}: ${entry.page}`;

    // ---- sources
    const sources = entry.sources ?? [];
    if (sources.length < 2) {
      error('coverage-thin-sources',
        `${where}: ${sources.length} source(s); a pair needs at least 2 independent treatments`, entry.page);
    }
    const kinds = sources.map((s) => s.kind);
    for (const kind of kinds) {
      if (kind && !ALL_KINDS.has(kind)) {
        error('coverage-unknown-kind', `${where}: unknown source kind "${kind}"`, entry.page);
      }
    }
    if (!kinds.some((k) => PRIMARY_KINDS.has(k))) {
      error('coverage-no-primary-source',
        `${where}: no source of kind ${[...PRIMARY_KINDS].join('/')}; an encyclopedia entry cannot be a pair's primary backing`,
        entry.page);
    }
    for (const source of sources) {
      const tag = `${where}: source ${source.url ?? '(no url)'}`;
      if (!/^https?:\/\//.test(source.url ?? '')) {
        error('coverage-source-url', `${tag}: needs an http(s) url`, entry.page);
      }
      if (!source.locator) {
        error('coverage-source-locator',
          `${tag}: needs a 'locator' naming the exact chapter/section range read`, entry.page);
      }
      // The harvest itself. A source claimed as read must show what it holds.
      if (!Array.isArray(source.contents) || !source.contents.length) {
        error('coverage-empty-harvest',
          `${tag}: 'contents' must list the source's own section/named-result headings over ${source.locator ?? 'the range read'}`,
          entry.page);
      }
    }

    // ---- dispositions
    const harvest = harvestOf(entry);
    harvestCount += harvest.length;
    if (!harvest.length) {
      error('coverage-empty-harvest', `${where}: no harvested results at all`, entry.page);
    }
    const declineReasons = [];
    for (const result of harvest) {
      const name = result.name ?? '(unnamed)';
      if (!result.name) {
        error('coverage-unnamed-result', `${where}: a harvested result has no 'name'`, entry.page);
      }
      if (!DISPOSITIONS.has(result.disposition)) {
        error('coverage-undisposed',
          `${where}: "${name}" has disposition ${JSON.stringify(result.disposition ?? null)}; must be one of ${[...DISPOSITIONS].join('/')}`,
          entry.page);
        continue;
      }
      if (result.disposition === 'included' && !result.item) {
        error('coverage-included-no-item', `${where}: "${name}" is 'included' but names no item id`, entry.page);
      }
      if (result.disposition === 'inline' && !result.item) {
        error('coverage-inline-no-item',
          `${where}: "${name}" is 'inline' but names no item whose proof absorbs it`, entry.page);
      }
      if (result.disposition === 'already-published') {
        if (!result.item) {
          error('coverage-published-no-item', `${where}: "${name}" is 'already-published' but names no item id`, entry.page);
        } else if (!published().has(result.item)) {
          error('coverage-not-published',
            `${where}: "${name}" claims already-published item ${result.item}, which is not a published item on disk`,
            entry.page);
        }
      }
      if (result.disposition === 'deferred' || result.disposition === 'out-of-scope') {
        const reason = (result.reason ?? '').trim();
        if (reason.length < MIN_REASON) {
          error('coverage-thin-reason',
            `${where}: "${name}" is ${result.disposition} with a ${reason.length}-character reason; say why this result specifically is not built`,
            entry.page);
        } else {
          declineReasons.push(reason.toLowerCase());
        }
      }
    }
    // One reason pasted across every declined result is a non-answer wearing the
    // shape of an answer. Catch it rather than trusting the length check.
    const distinct = new Set(declineReasons);
    if (declineReasons.length >= 3 && distinct.size === 1) {
      error('coverage-boilerplate-reason',
        `${where}: ${declineReasons.length} declined results share one identical reason`, entry.page);
    }

    // Advisory: a pair that builds almost nothing it harvested is the thinness
    // this gate exists to surface, but the call is Alpha's, not a script's.
    const built = harvest.filter((r) => r.disposition === 'included').length;
    if (harvest.length >= 8 && built / harvest.length < 0.4) {
      warn('coverage-low-yield',
        `${where}: ${built}/${harvest.length} harvested results scaffolded; confirm the declines with Alpha`, entry.page);
    }
  }
}

function harvestOf(entry) {
  // The harvest is the union of every source's `contents` — that is the whole
  // point: a harvested result is a heading the SOURCE contains, not one the
  // author thought of. `canonical` is an optional page-level list for a result
  // that belongs to the pair's standard development without sitting in any one
  // source's table of contents; it carries the same disposition contract.
  const nested = (entry.sources ?? []).flatMap((s) => s.contents ?? []);
  return [...(entry.canonical ?? []), ...nested];
}

const summary = { pages: pageCount, harvested: harvestCount, errors: errors.length, warnings: warnings.length };
if (asJson) console.log(JSON.stringify({ summary, errors, warnings }, null, 2));
else {
  for (const entry of errors) console.error(`ERROR ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  for (const entry of warnings) console.warn(`WARN ${entry.code}${entry.id ? ` [${entry.id}]` : ''}: ${entry.message}`);
  console.log(`coverage-checklist: ${summary.pages} page(s), ${summary.harvested} harvested result(s), ${summary.errors} error(s), ${summary.warnings} warning(s)`);
}
process.exit(errors.length ? 1 : 0);

function usage() {
  console.error('usage: node tools/coverage-checklist.mjs research/<run>-batch-*.coverage.json [--json]');
  process.exit(2);
}
