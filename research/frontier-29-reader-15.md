# frontier-29 reader-15 report

Date: Tuesday, September 1, 2026.
Batch: `15`.
Page pair: `generalized-niceness-and-reduction-outcomes` / `generalized-niceness-and-reduction-outcomes-examples`.

## Opened scope

Artifacts opened from `research/`:
- `frontier-29-reader.task.md`
- `frontier-29-batch-15.pages.json`
- `frontier-29-batch-15.coverage.json`
- `frontier-29-batch-15.notes.md`
- `frontier-29-batch-15.proof-contracts.json`
- live run state via `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

Repository instructions opened:
- `AGENTS.md`
- `CLAUDE.md`
- `README.md`

Assigned pages opened:
- `library/combinatorics/generalized-niceness-and-reduction-outcomes.md`
- `library/combinatorics/generalized-niceness-and-reduction-outcomes-examples.md`

Assigned A items opened:
- `def-generalized-nice-finite-family`
- `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity`
- `lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning`
- `lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair`
- `lem-generalized-niceness-yields-four-reduction-outcomes`
- `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade`
- `lem-cy-restricted-generalized-niceness-yields-three-outcomes`
- `lem-iterated-restricted-sparsification-reaches-the-target-scale`
- `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph`
- `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade`

Assigned B items opened:
- `ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks`
- `ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade`
- `ex-a-numeric-run-of-the-lemma-three-three-exponent-choice`

Published dependency items opened:
- `def-anticonnected-graph-and-anticonnected-component`
- `def-blockade-length-and-width`
- `def-c-sparse-and-c-restricted-vertex-set`
- `def-clique-stable-set-and-numbers`
- `def-directional-and-weak-sparsity-between-vertex-sets`
- `def-edges-between-sets-and-pure-mixed-pairs`
- `def-graph-isomorphism-and-complement`
- `def-h-free-and-family-free-graph`
- `def-wonderful-finite-family`
- `lem-components-are-anticomplete-and-anticomponents-complete`
- `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`
- `lem-restrictedness-is-complement-invariant`

Coverage sources opened:
- Huang, Ju, Zhou, *Erdos-Hajnal beyond the five-vertex path*
- Nguyen, Scott, Seymour, *Induced subgraph density. VII. The five-vertex path*
- Nguyen, *Notes on Recent Work on the Erdos-Hajnal Conjecture*

## Repairs

1. `lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning`
   Replaced the invalid appeal to the anticomponent definition with a direct complement-spanning-tree argument producing anticonnected subsets of the required size.

2. `lem-generalized-niceness-yields-four-reduction-outcomes`
   Repaired the proof order so the blockade branch is introduced only after the other generalized-nice outcomes are discharged, and fixed the later support bookkeeping used before the wonderful-blockade step.

3. `cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade`
   Added the missing small-parameter hypothesis needed for the lower bound on `(1-by)^n`, and rewrote the initial maximal-blockade setup accordingly.

4. `lem-cy-restricted-generalized-niceness-yields-three-outcomes`
   Corrected the constant choices so the almost-pure-pair corollary actually applies and the blockade/restricted-size comparisons match the stated outcome scale.

5. `lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph`
   Added the missing `\overline{\mathcal F}`-free hypothesis and the hereditary freeness step before invoking the three-outcome theorem on the induced subgraph.

6. `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade`
   Fixed the iterative-lemma setup by introducing `b_1,b_2,b_3` before they are used and by aligning the proof with the `c^2` starting constant.

7. `research/frontier-29-batch-15.proof-contracts.json`
   Refreshed the contract rows and source quotes for the repaired reduction lemmas and the helper/example citations.

## Confirmed defects left unchanged

1. `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity`
   The current proof still compresses the core thinning argument into steps `2.1` and `3.1` without the load-bearing bookkeeping showing both that enough vertices survive every deletion and that the eventual future subblocks satisfy the claimed directional bound. I was not able to reconstruct a complete local proof of this exact statement from the current bytes alone, so this draft item remains mathematically insufficient.

## Defects checked but not confirmed

- No uneditable defect was confirmed in an assigned page, another batch item/page, or a published dependency used by this batch.

## Page verdicts

- `generalized-niceness-and-reduction-outcomes`: fail on current bytes. The repaired downstream items are cleaner, but the page still depends on the unresolved thinning lemma above.
- `generalized-niceness-and-reduction-outcomes-examples`: pass on current bytes. I did not confirm an independent defect in the three example items.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <6 changed item files>`: reflowed the six repaired lemma/corollary files.
- `node tools/tsx-run.mjs tools/precheck.mts <6 changed item files>`: pass, all six repaired proof-bearing items clean after reflow.
- `node tools/proof-contract.mjs research/frontier-29-batch-15.proof-contracts.json --strict`: pass, `12/12` scoped items checked.
- `node tools/rendercheck.mjs <13 batch items> library/combinatorics/generalized-niceness-and-reduction-outcomes.md library/combinatorics/generalized-niceness-and-reduction-outcomes-examples.md`: pass, `15` files clean.
- `node tools/content-policy.mjs research/frontier-29-batch-15.pages.json`: pass, `13` scoped items, `0` errors, `0` warnings.
- `git diff --check -- <6 repaired items> research/frontier-29-batch-15.proof-contracts.json`: pass.

## Blockers

- The only remaining blocker inside the editable batch scope is the unresolved proof gap in `lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity`.
