// Declare the 16 forward references that the step-9 scope-denial repairs
// introduced.
//
// Each repair replaced a false denial ("real exponents do not exist in this
// library") with the truth ("they are introduced later in [[def-real-power]]").
// That is exactly the orientation-only forward reference the owner authorised on
// 2026-07-25 — but the link only gets its sky/dashed/↗ marking when the target
// is declared in `forward_refs`. Undeclared, fwdcheck fails `forward-undeclared`
// and the reader sees an ordinary indigo citation to a page they have not read.
//
// Every one of these sits in a Remark or a reading-order note, never in a
// Statement or a Facts row, so none is load-bearing.
//
// --apply to write; default is a dry run.

import { readFileSync, writeFileSync } from 'node:fs';

const apply = process.argv.includes('--apply');

const ADD = {
  'cex-omega-one-has-no-at-most-countable-cofinal-subset': ['def-cofinality'],
  'def-first-uncountable-ordinal': ['def-aleph-and-beth-hierarchies'],
  'def-integer-power': ['def-real-power'],
  'def-lipschitz-holder-contraction': ['def-real-power'],
  'def-measure-zero-and-content-zero': ['def-jordan-inner-and-outer-content'],
  'ex-derivative-of-the-nth-root-by-the-inverse-rule': ['def-real-power'],
  'ex-square-root-is-half-holder': ['def-real-power'],
  'ex-x-to-the-beta-separates-the-holder-classes': ['def-real-power'],
  'fs-continuous-bijection-is-a-homeomorphism': ['def-compact-space', 'def-hausdorff-space'],
  'lem-power-over-geometric-null': ['thm-real-power-continuity-and-derivatives'],
  'rem-absolutely-continuous-function': ['def-absolutely-continuous-function', 'thm-c1-lipschitz-ac-bv-hierarchy'],
  'rem-monotone-convergence-theorem': ['cor-monotone-converges-iff-bounded'],
  'thm-countable-subsets-of-omega-one-are-bounded': ['def-cofinality'],
  'thm-holder-exponent-above-one-forces-constancy': ['def-real-power'],
};

let changed = 0;
for (const [id, adds] of Object.entries(ADD)) {
  const path = `items/${id}.md`;
  const t = readFileSync(path, 'utf8');

  // Absent key: insert it immediately before `aliases:`, the slot SCHEMA §3
  // gives it, so the frontmatter keeps the documented order.
  const m = t.match(/^forward_refs:\s*\[([^\]]*)\]/m);
  if (!m) {
    if (!/^aliases:/m.test(t)) { console.log(`  ${id}: no forward_refs AND no aliases key — skipped`); continue; }
    const out = t.replace(/^aliases:/m, `forward_refs: [${adds.join(', ')}]\naliases:`);
    if (apply) writeFileSync(path, out);
    console.log(`  ${id}: (key added) -> [${adds.join(', ')}]`);
    changed++;
    continue;
  }

  const have = m[1].split(',').map((s) => s.trim()).filter(Boolean);
  const merged = [...have];
  for (const a of adds) if (!merged.includes(a)) merged.push(a);
  if (merged.length === have.length) { console.log(`  ${id}: already declared`); continue; }

  const out = t.replace(/^forward_refs:\s*\[[^\]]*\]/m, `forward_refs: [${merged.join(', ')}]`);
  if (apply) writeFileSync(path, out);
  console.log(`  ${id}: [${have.join(', ')}] -> [${merged.join(', ')}]`);
  changed++;
}

console.log(`\n${changed} file(s) ${apply ? 'written' : 'would change'}`);
if (!apply) console.log('DRY RUN — nothing written. Pass --apply.');
