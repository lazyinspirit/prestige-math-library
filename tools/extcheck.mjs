#!/usr/bin/env node
// extcheck.mjs — the "recorded but not proved here" gate.
//
//   node tools/extcheck.mjs [--ledger] [--json] [--quiet]
//
// Owner instruction, 2026-07-25: the deferred results of DEFERRED.md (measure
// theory, functional analysis, set theory beyond choice, algebraic topology, the
// open problems) are to be INCLUDED in the library, and they and their
// consequences must be visibly different from everything else INCLUDING ordinary
// forward references and their consequences; every unproved dependency inside a
// proof must be visibly distinct from every other dependency; and the reader
// must be reminded that such a dependency is not developed here.
//
// The content mechanism is one frontmatter flag, `proved_here: false`, plus one
// optional list, `external_refs`. Everything else is derived, so nothing can go
// stale:
//
//   * an item with the flag STATES a result this library does not prove;
//   * any item whose `deps` reach one, transitively, RESTS on unproved material;
//   * an item that MENTIONS one without depending on it declares `external_refs`,
//     which seeds the same closure (owner decision 2026-07-25, "mark the full
//     cone") WITHOUT adding a logical edge -- see the note below;
//   * the renderer marks both, and marks every fact and every step tag that
//     carries such a dependency (web/lib/library-external.ts, ItemBody.tsx).
//
// WHY `external_refs` IS A SEPARATE FIELD AND NOT JUST A `deps` ENTRY.
// `deps` is defined by SCHEMA.md §3 as what an item's statement or proof
// LOGICALLY DEPENDS ON, and it is the graph that depcheck's acyclicity check,
// fwdcheck's page ordering, the page prerequisite closure and the flowchart all
// read. The definition of the Axiom of Choice does not logically depend on
// Cohen's independence theorem; it merely mentions it. Putting the mention in
// `deps` would inject a false edge into all four of those consumers at once.
// `external_refs` seeds the ‡ contagion and nothing else.
//
// This is a THIRD tier, ranked above forward references: "developed later in
// this library" is a far weaker caveat than "never proved here at all", so an
// item that is both renders as unproved.
//
// HARD ERRORS
//   unproved-kind        `proved_here: false` on something other than a remark
//   unproved-has-proof   such an item carries a Proof/Refutation section
//   unproved-precheck    such an item does not record `verification.precheck: n/a`
//   unproved-uncited     such an item has no entry in sources.references
//   unproved-judged      such an item carries a verification.judge block: there
//                        is no proof to judge, so a verdict would be meaningless
//   external-dangling    an `external_refs` entry names no item
//   external-not-unproved  an `external_refs` entry names an item this library
//                        DOES prove; the field is only for recorded-not-proved
//   external-in-deps     an id is in both `deps` and `external_refs`; a logical
//                        dependency is already a stronger seed, so pick one
//   external-unused      an `external_refs` entry is never linked in the body,
//                        so the declaration marks the item for nothing visible
//
// WARNINGS
//   unproved-on-published  a PUBLISHED item rests on unproved material (correct
//                          and marked, but worth seeing every run)
//
// Exit 0 iff there are no hard errors.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const asJson = process.argv.includes('--json');
const quiet = process.argv.includes('--quiet');
const writeLedger = process.argv.includes('--ledger');

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
function list(fm, key) {
  const start = fm.search(new RegExp(`^${key}:[ \\t]*\\[`, 'm'));
  if (start < 0) return [];
  const open = fm.indexOf('[', start);
  let depth = 0, end = -1;
  for (let i = open; i < fm.length; i++) {
    if (fm[i] === '[') depth++;
    else if (fm[i] === ']' && --depth === 0) { end = i; break; }
  }
  if (end < 0) return [];
  return fm.slice(open + 1, end).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}
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
  const id = scalar(fm, 'id') ?? basename(f, '.md');
  items.set(id, {
    id,
    file: `items/${f}`,
    kind: scalar(fm, 'kind'),
    status: scalar(fm, 'status'),
    deps: list(fm, 'deps'),
    externalRefs: list(fm, 'external_refs'),
    provedHere: scalar(fm, 'proved_here') !== 'false',
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

// -------------------------------------------------------- shape of an unproved item

for (const it of items.values()) {
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
for (const it of items.values()) {
  if (rests.has(it.id)) continue;
  const mentions = it.externalRefs.some((d) => {
    const r = resolve(d);
    return r && !items.get(r).provedHere;
  });
  if (mentions) rests.set(it.id, 'direct');
}

for (const [id, how] of rests) {
  const it = items.get(id);
  if (it.status === 'published' && it.provedHere)
    warn('unproved-on-published', `${it.file} is PUBLISHED and rests (${how}) on material not proved in this library`);
}

// ---------------------------------------------------------------- the ledger

const unproved = [...items.values()].filter((i) => !i.provedHere).map((i) => i.id).sort();
const consequences = [...rests].filter(([id]) => items.get(id).provedHere).sort();

if (writeLedger) {
  const lines = [
    '# Unproved dependencies ledger',
    '',
    'GENERATED by `node tools/extcheck.mjs --ledger`. Do not edit by hand.',
    '',
    'Results this library RECORDS but does not PROVE (`proved_here: false`), and',
    'everything in the library that rests on one. Both are rendered with the',
    'fuchsia / dotted / ‡ marker, which outranks the sky / dashed / ↗ marker used',
    'for ordinary forward references.',
    '',
    `**${unproved.length} recorded-not-proved, ${consequences.length} consequence(s).**`,
    '',
    '## Recorded but not proved here',
    '',
  ];
  if (!unproved.length) lines.push('_None yet._', '');
  for (const id of unproved) lines.push(`- \`${id}\``);
  lines.push('', '## Results resting on them', '');
  if (!consequences.length) lines.push('_None._', '');
  for (const [id, how] of consequences) lines.push(`- \`${id}\` (${how})`);
  lines.push('');
  writeFileSync(join(REPO, 'research/unproved-dependencies.md'), lines.join('\n'));
}

// ---------------------------------------------------------------------- report

const summary = { items: items.size, unproved: unproved.length, consequences: consequences.length, errors: errors.length, warnings: warns.length };

if (asJson) {
  console.log(JSON.stringify({ summary, unproved, consequences, errors, warns }, null, 2));
} else {
  if (!quiet) {
    console.log(`extcheck: ${items.size} items, ${unproved.length} recorded-not-proved, ${consequences.length} resting on them`);
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
    console.log('\nOK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.');
  }
}

process.exit(errors.length ? 1 : 0);
