#!/usr/bin/env node
// frontier-12-d10-wiring.mjs — step 9. Close decision D10 by connecting the two
// PUBLISHED items that assume a field-of-fractions construction to the page this
// run built for it.
//
//   node research/frontier-12-d10-wiring.mjs --dry   report, touch nothing
//   node research/frontier-12-d10-wiring.mjs         apply
//
// RUN ONLY AFTER step8-guard has passed. Every edit here is a legitimate step-9
// change, but step8-guard's upper bound defaults to the live working tree, so an
// edit made while step 8 is still open reports as `nonfatal-edit`.
//
// The two items are wired ASYMMETRICALLY, and the asymmetry is forced:
//
//   cex-ordered-field-not-archimedean  is homed on foundations-of-the-real-numbers
//     (order 9). The target page is order 53.2 — strictly LATER — so this is a
//     genuine FORWARD reference. It is load-bearing, appearing in `Given:`, which
//     fwdcheck permits only on consequence kinds; the item is kind:counterexample,
//     so it qualifies (`forward-on-spine` would reject a definition or theorem).
//     Forward edges deliberately sit OUTSIDE the requires closure, so its page
//     needs no `requires` change.
//
//   ex-rational-function-field-order   is homed on
//     equivalent-forms-of-completeness-examples (order 126). The target at 53.2 is
//     EARLIER, so a forward reference would be rejected by `forward-not-later`.
//     It takes an ordinary `deps` edge — but 53.2 is NOT in that page's requires
//     closure, so the page must declare it first or validate-plan fails with
//     `undeclared-prereq`.
//
// Both items are `status: published`: this changes live content. Their existing
// `verification.verified` stamps certify text that no longer matches, so they are
// deleted here and both items are rejudged before the owner audit at step 10.

import { readFileSync, writeFileSync } from 'node:fs';

const REPO = '/Users/ianx/Projects/prestige-math-library';
const dry = process.argv.includes('--dry');
const changes = [];

const read = (p) => readFileSync(`${REPO}/${p}`, 'utf8');
const write = (p, s) => { if (!dry) writeFileSync(`${REPO}/${p}`, s); changes.push(p); };

// ---------------------------------------------------------------- 1. the spec
const specPath = 'research/plan-spec.json';
const spec = JSON.parse(read(specPath));
const bPage = spec.pages.find((p) => p.id === 'equivalent-forms-of-completeness-examples');
if (!bPage) throw new Error('equivalent-forms-of-completeness-examples missing from the spec');
const TARGET_PAGE = 'the-field-of-fractions-and-localisation';
const targetPage = spec.pages.find((p) => p.id === TARGET_PAGE);
if (!targetPage) throw new Error(`${TARGET_PAGE} missing from the spec`);
if (!(targetPage.order < bPage.order)) throw new Error(`target order ${targetPage.order} is not earlier than ${bPage.order}`);
if (!bPage.requires.includes(TARGET_PAGE)) {
  bPage.requires = [...bPage.requires, TARGET_PAGE];
  write(specPath, JSON.stringify(spec, null, 2) + '\n');
}

// ------------------------------------------------- 2. the forward-referencing cex
const CEX = 'items/cex-ordered-field-not-archimedean.md';
const FWD = 'cor-rational-function-field-as-a-fraction-field';
let cex = read(CEX);

if (!cex.includes('forward_refs:')) {
  cex = cex.replace(/^aliases:/m, `forward_refs: [${FWD}]\naliases:`);
} else if (!cex.includes(FWD)) {
  cex = cex.replace(/^forward_refs: \[([^\]]*)\]/m, (_, inner) => `forward_refs: [${inner ? inner + ', ' : ''}${FWD}]`);
}
// The body must actually link the declared target, or fwdcheck fails `forward-unused`.
if (!cex.includes(`[[${FWD}]]`)) {
  const before = cex;
  cex = cex.replace(
    '**Given:** $\\mathbb{R}(t)$, the field of fractions of the polynomial ring $\\mathbb{R}[t]$,',
    `**Given:** $\\mathbb{R}(t)$, the field of fractions of the polynomial ring $\\mathbb{R}[t]$ (constructed at [[${FWD}]]),`,
  );
  if (cex === before) throw new Error('could not place the forward link in the cex Given line — text moved');
}
// The published-audit stamp certified text that has now changed.
cex = cex.replace(/\n  verified:\n(?:    .*\n)+/, '\n');
if (cex !== read(CEX)) write(CEX, cex);

// -------------------------------------------------- 3. the ordinary-dep example
const EX = 'items/ex-rational-function-field-order.md';
const DEP = 'cor-rational-function-field-as-a-fraction-field';
let ex = read(EX);

if (!new RegExp(`deps: \\[[^\\]]*${DEP}`).test(ex)) {
  ex = ex.replace(/^deps: \[/m, `deps: [${DEP}, `);
}
if (!ex.includes(`[[${DEP}]]`)) {
  const before = ex;
  ex = ex.replace(
    'Let $\\mathbb{R}(t)$ be the field of fractions of the polynomial ring',
    `Let $\\mathbb{R}(t)$ be the field of fractions ([[${DEP}]]) of the polynomial ring`,
  );
  if (ex === before) throw new Error('could not place the dep link in the example — text moved');
}
ex = ex.replace(/\n  verified:\n(?:    .*\n)+/, '\n');
if (ex !== read(EX)) write(EX, ex);

console.log(`${dry ? '[dry] ' : ''}D10 wiring: ${changes.length ? changes.join(', ') : 'nothing to change (already wired)'}`);
console.log('  cex  -> forward_refs (load-bearing, consequence kind, target order 53.2 > 9)');
console.log('  ex   -> deps (target order 53.2 < 126), page requires extended');
console.log('  both -> stale verification.verified removed; REJUDGE BOTH before the owner audit');
