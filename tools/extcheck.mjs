#!/usr/bin/env node
// extcheck.mjs — the "recorded but not proved here" gate.
//
//   node tools/extcheck.mjs [--ledger] [--json] [--quiet] [--repo DIR] [--items-file PATH]
//
// Active recorded-not-proved items and external_refs have been retired.
// This gate rejects their reintroduction, both corpus-wide and in explicit item
// scope. Historical archives/receipts are not traversed. Legacy shape checks,
// dependency closure and ledger diagnostics remain readable so residual active
// records can be diagnosed without changing historical evidence formats.
//
// HARD ERRORS additionally include:
//   unproved-record-retired  any active proved_here: false item
//   external-refs-retired    any nonempty active external_refs declaration
//   external-fallback-retired any active external_dependency fallback record
//
// Exit 0 iff there are no hard errors.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { includesItem, parseItemScope, unknownItems } from './item-scope.mjs';

const itemScope = parseItemScope(process.argv.slice(2));
const args = itemScope.args;
const argVal = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const REPO = argVal('--repo') ?? join(fileURLToPath(new URL('.', import.meta.url)), '..');
const asJson = args.includes('--json');
const quiet = args.includes('--quiet');
const writeLedger = args.includes('--ledger');
if (itemScope.selected !== null && writeLedger)
  throw new Error('--ledger cannot be combined with --items-file; ledger output is a full-corpus artifact');

const errors = [];
const warns = [];
const err = (code, msg) => errors.push({ code, msg });
const warn = (code, msg) => warns.push({ code, msg });

function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}
function scalar(fm, key) {
  const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}
function list(fm, key) { return frontmatterList(fm, key); }
function nested(fm, parent, child) {
  const p = fm.search(new RegExp(`^${parent}:`, 'm'));
  if (p < 0) return undefined;
  const m = fm.slice(p).match(new RegExp(`^[ \\t]+${child}:[ \\t]*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') || undefined : undefined;
}

// ---------------------------------------------------------------- load items

const items = new Map();
const aliasTo = new Map();
for (const f of readdirSync(join(REPO, 'items')).sort()) {
  if (!f.endsWith('.md')) continue;
  const src = readFileSync(join(REPO, `items/${f}`), 'utf8');
  const { fm, body } = split(src);
  let metadata;
  try { metadata = parseFrontmatter(fm); }
  catch (cause) {
    const id = scalar(fm, 'id') ?? basename(f, '.md');
    if (includesItem(itemScope, id)) err('item-frontmatter-invalid', `items/${f}: ${cause.message}`);
    metadata = {};
  }
  const id = typeof metadata.id === 'string' ? metadata.id : scalar(fm, 'id') ?? basename(f, '.md');
  items.set(id, {
    id,
    file: `items/${f}`,
    kind: scalar(fm, 'kind'),
    status: scalar(fm, 'status'),
    deps: list(fm, 'deps'),
    justified: list(fm, 'justified_by'),
    forward: list(fm, 'forward_refs'),
    externalRefs: list(fm, 'external_refs'),
    provedHere: metadata.proved_here !== false && metadata.proved_here !== 'false',
    externalDeclared: metadata.external_refs !== undefined && metadata.external_refs !== null
      && !(Array.isArray(metadata.external_refs) && metadata.external_refs.length === 0),
    externalFallback: Object.hasOwn(metadata, 'external_dependency'),
    precheck: nested(fm, 'verification', 'precheck'),
    hasJudge: /^\s+judge:/m.test(fm),
    hasRefs: /^\s+references:/m.test(fm) && /^\s+-\s+title:/m.test(fm),
    body,
    // where a citation is load bearing: everything except Remarks
    loadBearing: body.replace(/\n## Remarks[\s\S]*?(?=\n## |$)/g, '\n'),
  });
  for (const a of list(fm, 'aliases')) aliasTo.set(a, id);
}
const resolve = (x) => (items.has(x) ? x : aliasTo.get(x));
for (const id of unknownItems(itemScope, items.keys()))
  err('focus-item-unknown', `--items-file names unknown item "${id}"`);

// ------------------------------------- Set Theory bootstrapping hard boundary
//
// Retain the historical category-aware dependency diagnostic for any residual
// catalogue items. The general retirement checks below forbid active unproved
// records and external mentions in every category.

const foundationsItems = new Set();
const itemsOnLibraryPage = new Map();
const plannedEdges = new Map();
try {
  const libraryRoot = join(REPO, 'library');
  const walk = (dir, category) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) walk(path, category ?? entry.name);
      else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
        const { fm } = split(readFileSync(path, 'utf8'));
        const pageId = scalar(fm, 'page') ?? basename(entry.name, '.md');
        const pageItems = [...list(fm, 'items'), ...list(fm, 'examples')];
        itemsOnLibraryPage.set(pageId, pageItems);
        if (category === 'foundations') {
          for (const id of pageItems) {
            const r = resolve(id);
            if (r) foundationsItems.add(r);
          }
        }
      }
    }
  };
  walk(libraryRoot);
} catch { /* depcheck owns missing/malformed page diagnostics */ }
try {
  const plan = JSON.parse(readFileSync(join(REPO, 'research/plan-spec.json'), 'utf8'));
  const pageById = new Map((plan.pages ?? []).map((page) => [page.id, page]));
  for (const page of plan.pages ?? [])
    for (const entry of [...(page.items ?? []), ...(page.examples ?? [])]) {
      if (typeof entry === 'string') continue;
      plannedEdges.set(entry.id, [
        ...(entry.deps ?? []), ...(entry.justified_by ?? []),
        ...(entry.forward_refs ?? []),
      ]);
    }
  const consumedPages = new Set();
  const collectPage = (id) => {
    if (consumedPages.has(id)) return;
    consumedPages.add(id);
    for (const req of pageById.get(id)?.requires ?? []) collectPage(req);
  };
  for (const page of plan.pages ?? [])
    if (page.category === 'foundations') collectPage(page.id);
  for (const id of consumedPages) {
    const page = pageById.get(id);
    const roots = [
      ...(itemsOnLibraryPage.get(id) ?? []),
      ...(page?.items ?? []), ...(page?.examples ?? []),
    ];
    for (const entry of roots) {
      const itemId = typeof entry === 'string' ? entry : entry?.id;
      const r = resolve(itemId) ?? (plannedEdges.has(itemId) ? itemId : undefined);
      if (r) foundationsItems.add(r);
    }
  }
} catch { /* validate-plan owns missing/malformed plan diagnostics */ }

const setTheoryDeferred = new Set();
try {
  const file = join(REPO, 'library/not-proved-here/deferred-set-theory-beyond-choice.md');
  const { fm } = split(readFileSync(file, 'utf8'));
  for (const id of [...list(fm, 'items'), ...list(fm, 'examples')]) {
    const r = resolve(id);
    if (r) setTheoryDeferred.add(r);
  }
} catch { /* depcheck owns missing/malformed page diagnostics */ }

const deferredPathCache = new Map();
const deferredVisiting = new Set();
function deferredPath(id) {
  const r = resolve(id) ?? (plannedEdges.has(id) ? id : undefined);
  if (!r || deferredVisiting.has(r)) return null;
  if (deferredPathCache.has(r)) return deferredPathCache.get(r);
  if (setTheoryDeferred.has(r)) return [r];
  deferredVisiting.add(r);
  const it = items.get(r);
  const edges = new Set([
    ...(it?.deps ?? []), ...(it?.justified ?? []), ...(it?.forward ?? []),
    ...(plannedEdges.get(r) ?? []),
  ]);
  for (const d of edges) {
    const path = deferredPath(d);
    if (path) {
      const found = [r, ...path];
      deferredVisiting.delete(r);
      deferredPathCache.set(r, found);
      return found;
    }
  }
  deferredVisiting.delete(r);
  deferredPathCache.set(r, null);
  return null;
}

for (const id of [...foundationsItems].sort()) {
  if (!includesItem(itemScope, id)) continue;
  const path = deferredPath(id);
  if (path)
    err('foundations-deferred-dependency', `${items.get(id)?.file ?? `research/plan-spec.json#${id}`}: Foundations dependency path reaches Set Theory recorded-not-proved material: ${path.join(' -> ')}`);
}

// ---------------------------------------------------- retired active fields

for (const it of items.values()) {
  if (!includesItem(itemScope, it.id)) continue;
  if (!it.provedHere)
    err('unproved-record-retired', `${it.file}: proved_here: false is forbidden in active content; supply a local proof or archive the unsupported item`);
  if (it.externalDeclared)
    err('external-refs-retired', `${it.file}: external_refs is retired; remove external mentions or replace them with proved local suppliers`);
  if (it.externalFallback)
    err('external-fallback-retired', `${it.file}: external_dependency is retired; a cited external result cannot replace a local proof`);
}

// -------------------------------------------------------- shape of an unproved item

for (const it of items.values()) {
  if (!includesItem(itemScope, it.id)) continue;
  if (it.provedHere) continue;
  if (it.kind !== 'remark')
    err('unproved-kind', `${it.file}: proved_here false but kind is "${it.kind}"; it states rather than establishes, so it must be a remark`);
  if (/\n## (Proof|Refutation)\b/.test(it.body))
    err('unproved-has-proof', `${it.file}: proved_here false but the body has a Proof or Refutation section`);
  if (it.precheck !== 'n/a')
    err('unproved-precheck', `${it.file}: proved_here false but verification.precheck is "${it.precheck ?? 'unset'}"; must be n/a`);
  if (!it.hasRefs)
    err('unproved-uncited', `${it.file}: proved_here false but sources.references is empty; an unproved statement MUST carry a citation`);
  if (it.hasJudge)
    err('unproved-judged', `${it.file}: proved_here false but a verification.judge block is present; there is no proof to judge`);
}

// ------------------------------------------------- shape of an external_refs entry

for (const it of items.values()) {
  if (!includesItem(itemScope, it.id)) continue;
  const deps = new Set(it.deps.map(resolve));
  for (const ref of it.externalRefs) {
    const r = resolve(ref);
    if (!r) { err('external-dangling', `${it.file}: external_refs names "${ref}", which is not an item`); continue; }
    if (items.get(r).provedHere)
      err('external-not-unproved', `${it.file}: external_refs names "${ref}", which this library DOES prove; the field records mentions of recorded-not-proved results only`);
    if (deps.has(r))
      err('external-in-deps', `${it.file}: "${ref}" is in both deps and external_refs; a logical dependency already seeds the marker, so remove it from external_refs`);
    if (!it.body.includes('[[' + ref))
      err('external-unused', `${it.file}: external_refs names "${ref}" but the body never links it, so the declaration marks the item for nothing the reader can see`);
  }
}

// ------------------------------------------- who rests on unproved material
//
// Mirrors web/lib/library-external.ts exactly.
//
// A DEPENDENCE propagates; a MENTION does not. Owner decision 2026-07-25, taken
// on a measurement: seeding the closure from `def-axiom-of-choice`'s mention of
// Cohen marked 26 items instead of 7, among them `thm-zorn`, `lem-finite-choice`
// and `thm-well-ordering-theorem` -- all proved in full here, none of them
// resting on Cohen for anything. Their chip would have asserted something false.
// So:
//   * PROPAGATING seeds are the unproved items themselves and any item that USES
//     one outside its Remarks. Consequences of those genuinely rest on unproved
//     material, which is the "and their consequences" requirement.
//   * A `external_refs` mention marks ONLY the mentioning item. The reader still
//     meets the fuchsia / dotted / ‡ link at the exact point the unproved result
//     is named, because link marking is driven by the TARGET, not by this map.

const rests = new Map();       // id -> 'direct' | 'inherited'
for (const it of items.values()) {
  if (!it.provedHere) { rests.set(it.id, 'direct'); continue; }
  const uses = it.deps.some((d) => {
    const r = resolve(d);
    return r && !items.get(r).provedHere && it.loadBearing.includes('[[' + d);
  });
  if (uses) rests.set(it.id, 'direct');
}
for (let changed = true; changed;) {
  changed = false;
  for (const it of items.values()) {
    if (rests.has(it.id)) continue;
    if (it.deps.map(resolve).some((d) => d && rests.has(d))) { rests.set(it.id, 'inherited'); changed = true; }
  }
}
// Mentions, added AFTER the fixed point so they never act as sources.
//
// LOAD BEARING ONLY (owner, 2026-07-28). This branch used to fire on merely
// HAVING an `external_refs` entry, never asking where the reference occurs, so
// eight published items counted as resting on unproved material when the
// reference sat in their Remarks as orientation. `thm-well-ordering-theorem` is
// the reported case: its proof is Zorn throughout, and its Remarks record that
// Cohen showed ZF cannot prove the theorem — a fact ABOUT the result, not a step
// of it. The rule is that the mark stays only if the PROOF of a theorem, or part
// of a DEFINITION, rests on unproved material, so the same `loadBearing` test
// the `deps` branch above already applies is applied here too. A reference in a
// Definition or Statement still counts; only Remarks are excluded.
//
// Keep in step with `unprovedDependence` in web/lib/library-external.ts, which
// carries the identical fix. These two implementations of one rule have now
// drifted once; if you change either, change both.
for (const it of items.values()) {
  if (rests.has(it.id)) continue;
  const mentions = it.externalRefs.some((d) => {
    const r = resolve(d);
    return r && !items.get(r).provedHere && it.loadBearing.includes('[[' + d);
  });
  if (mentions) rests.set(it.id, 'direct');
}

for (const [id, how] of rests) {
  if (!includesItem(itemScope, id)) continue;
  const it = items.get(id);
  if (it.status === 'published' && it.provedHere)
    warn('unproved-on-published', `${it.file} is PUBLISHED and rests (${how}) on material not proved in this library`);
}

// ---------------------------------------------------------------- the ledger

const unproved = [...items.values()].filter((i) => includesItem(itemScope, i.id) && !i.provedHere).map((i) => i.id).sort();
const consequences = [...rests].filter(([id]) => includesItem(itemScope, id) && items.get(id).provedHere).sort();

if (writeLedger) {
  const lines = [
    '# Unproved dependencies ledger',
    '',
    'GENERATED by `node tools/extcheck.mjs --ledger`. Do not edit by hand.',
    '',
    'Residual active `proved_here: false` records and their dependency consequences.',
    'These records are forbidden; this diagnostic ledger is not an authoring allowance.',
    'Historical archived records are not included.',
    '',
    `**${unproved.length} recorded-not-proved, ${consequences.length} consequence(s).**`,
    '',
    '## Recorded but not proved here',
    '',
  ];
  if (!unproved.length) lines.push('_None._', '');
  for (const id of unproved) lines.push(`- \`${id}\``);
  lines.push('', '## Results resting on them', '');
  if (!consequences.length) lines.push('_None._', '');
  for (const [id, how] of consequences) lines.push(`- \`${id}\` (${how})`);
  lines.push('');
  writeFileSync(join(REPO, 'research/unproved-dependencies.md'), lines.join('\n'));
}

// ---------------------------------------------------------------------- report

const checkedItems = [...items.values()].filter((it) => includesItem(itemScope, it.id)).length;
const summary = { items: checkedItems, unproved: unproved.length, consequences: consequences.length, errors: errors.length, warnings: warns.length };

if (asJson) {
  console.log(JSON.stringify({ summary, unproved, consequences, errors, warns }, null, 2));
} else {
  if (!quiet) {
    console.log(`extcheck: ${checkedItems} items, ${unproved.length} recorded-not-proved, ${consequences.length} resting on them`);
    if (consequences.length) {
      console.log('\nresults resting on material not proved here:');
      for (const [id, how] of consequences) console.log(`  ${id.padEnd(44)} ${how}`);
    }
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
    console.log('\nOK — no active recorded-not-proved items, external references or external fallback records in the checked scope.');
  }
}

process.exit(errors.length ? 1 : 0);
