#!/usr/bin/env node
// Alpha-c, step 6b.0: one harvest-faithfulness repair in the batch-7 coverage
// checklist. Richter Definition 6.3.8 (the category of adjunctions inducing a
// fixed monad) was disposed `included` as
// rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic —
// but that Remark exists precisely to DECLINE forming that category, on size
// grounds, and states the universal properties objectwise instead. `included`
// is therefore false of disk. The mathematical content that survives is
// absorbed by the two factorisation theorems, whose Statements now name the
// three equalities a morphism of adjunctions satisfies, so `inline` naming the
// Remark is the true disposition.

import { readFileSync, writeFileSync } from 'node:fs';

const PATH = new URL('../frontier-15-batch-7.coverage.json', import.meta.url).pathname;
const doc = JSON.parse(readFileSync(PATH, 'utf8'));

let hit = 0;
for (const page of doc.pages) {
  for (const source of page.sources) {
    for (const row of source.contents) {
      if (!row.name.startsWith('Definition 6.3.8')) continue;
      row.disposition = 'inline';
      row.item = 'rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic';
      row.reason = "The library declines to form the category of all adjunctions inducing a fixed monad: def-functor-category forms a functor category only for a small source, and no such category of resolutions is presumed. The Remark records that decision and the universal properties are stated objectwise instead, in thm-the-kleisli-factorisation-functor-exists-and-is-unique and thm-the-comparison-functor-exists-and-is-unique, whose Statements name the three equalities (JF_T=F, UJ=U_T, J of the Kleisli counit = the counit; and U^T K=U, KF=F^T, K of the counit = the Eilenberg-Moore counit) that Richter's Definition 6.3.8 packages as a morphism in that category.";
      hit++;
      console.log(`repaired disposition for: ${row.name}`);
    }
  }
}
if (!hit) throw new Error('Definition 6.3.8 row not found');
writeFileSync(PATH, `${JSON.stringify(doc, null, 2)}\n`);
console.log('coverage checklist written.');
