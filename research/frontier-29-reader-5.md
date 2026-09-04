# frontier-29 reader-5 report

Date: 2026-09-01.
Run: `frontier-29`
Batch: `5`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-beta-5.task.md`, `research/frontier-29-splice-5.json`, `research/frontier-29-batch-5.pages.json`, `research/frontier-29-batch-5.coverage.json`, `research/frontier-29-batch-5.proof-contracts.json`, `research/frontier-29-batch-5.notes.md`, `research/frontier-29-step6-hash-5-pre.json`, `research/plan-functional-analysis-track.md` (FA-3 block), and `research/plan-spec.json`.
- Assigned pages: `library/functional-analysis/finite-dimensional-normed-spaces-and-riesz-lemma.md` and `library/functional-analysis/finite-dimensional-normed-spaces-and-riesz-lemma-examples.md`.
- Assigned A-page items: `thm-coordinate-map-for-a-finite-dimensional-normed-space`, `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-finite-dimensional-subspaces-are-closed`, `cor-linear-maps-with-finite-dimensional-domain-are-bounded`, `lem-riesz-lemma`, `thm-locally-compact-normed-space-iff-finite-dimensional`, `lem-dependent-choice-riesz-separated-unit-sequence`, `thm-closed-unit-ball-compact-iff-finite-dimensional`, `cor-infinite-dimensional-closed-unit-ball-is-not-compact`, `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact`, `thm-banach-space-no-countably-infinite-hamel-basis`, `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`, `def-kuratowski-distance-map`, `thm-kuratowski-distance-map-is-an-isometry`, and `thm-kuratowski-wojdyslawski-embedding`.
- Assigned B-page items: `ex-explicit-equivalence-constants-for-standard-norms-on-kn`, `ex-an-infinite-separated-subset-of-the-unit-sphere`, `cex-heine-borel-fails-in-ell-two`, `cex-polynomial-space-admits-no-complete-norm`, `ex-kuratowski-embedding-of-a-finite-metric-space`, `rem-discontinuous-functionals-on-banach-spaces-and-choice`, and `ex-choice-free-discontinuous-functional-on-c00`.
- Published dependency items opened for verification: `def-linear-basis`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `def-topological-isomorphism-of-normed-spaces`, `thm-all-norms-on-rn-are-equivalent`, `thm-complex-numbers-are-the-real-coordinate-plane`, `rem-real-and-complex-normed-space-convention`, `def-equivalent-norms`, `def-banach-space`, `thm-componentwise-convergence-and-completeness`, `def-normed-subspace`, `lem-complete-subspace-is-closed`, `def-linear-map`, `def-bounded-linear-operator`, `def-locally-compact-space`, `def-metric-topology`, `thm-compact-implies-complete-and-totally-bounded`, `cor-rn-is-locally-compact-and-sigma-compact`, `def-dependent-choice`, `def-linear-combination-and-span`, `def-metric-compactness`, `thm-heine-borel-rn`, `def-dimension`, `def-countable`, `thm-rationals-countable`, `rem-baire-category-choice-strength`, `def-function-space`, `def-metric-space`, `def-isometry-and-metric-embedding`, `thm-uniform-limit-theorem`, `lem-bounded-remetrisation`, `def-equivalent-metrics`, `def-metrizable-space`, `def-p-norms-on-rn`, `def-polynomial-ring-over-a-commutative-ring`, `def-norm-and-normed-space`, `lem-countable-iff-surjection-from-n`, `thm-well-ordering-principle`, `rem-lp-spaces-are-banach-spaces`, and `cor-independent-set-is-no-larger-than-a-finite-spanning-set`.
- Source evidence consulted: the current coverage rows plus direct web openings of Daners §10 / Theorem 10.1 / Corollary 10.2, Kochanek Lemma 1.3 and Corollary 1.8, Teschl §1.5 and Corollary 4.18 context, MIT 18.102 Theorem 192 and Example 193, the Howard-Tachtsis abstract, Heil Chapter III / Example 4.1, and Dugundji XIII §5 / Theorem 5.2.

## Design/spec check

- The live batch manifest and `research/plan-spec.json` agree on the owned pair and its order.
- The FA-3 design block names a broader mathematical prerequisite stack than the live page-level `requires` list. Per dispatch, I reviewed the batch against the live spec and did not edit plan state.

## Confirmed defects and edits

1. Repaired `items/thm-banach-space-no-countably-infinite-hamel-basis.md`.
   The old proof claimed the separable Baire route was choice free but still made recurring uncodified selections from the dense set. I fixed the proof by threading a fixed surjection `d:\mathbb N\to D` through the construction and taking least indices in the induced nonempty subsets of `\mathbb N`, so the written route now matches the stated choice-cost claim.
2. Repaired `items/cex-heine-borel-fails-in-ell-two.md`.
   The old proof used an uncited sequential-compactness inference and did not justify the ambient Banach/infinite-dimensional hypotheses internally. I rewrote it to cite the published `\ell^p`-Banach remark and the finite-spanning-set bound on linearly independent subsets, then invoked the A-page closed-unit-ball theorem directly.
3. Repaired `items/thm-kuratowski-wojdyslawski-embedding.md`.
   The final step said to apply steps `1.1` to `3.1` even though the closed-in-convex-hull conclusion is established only by step `5.1`. I corrected that stale internal proof citation.
4. Updated `research/frontier-29-batch-5.proof-contracts.json`.
   I regenerated the contract entries for `thm-banach-space-no-countably-infinite-hamel-basis`, `cex-heine-borel-fails-in-ell-two`, and `thm-kuratowski-wojdyslawski-embedding` so the current facts, derivations, and quotes match the repaired bytes.

## Per-page verdicts

- `finite-dimensional-normed-spaces-and-riesz-lemma`: pass after the two A-item repairs above. The current A-page prose, dependency support, and proof-bearing items match the opened current-disk and source evidence.
- `finite-dimensional-normed-spaces-and-riesz-lemma-examples`: pass after the `\ell^2` counterexample repair. No B-page body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-banach-space-no-countably-infinite-hamel-basis.md items/cex-heine-borel-fails-in-ell-two.md items/thm-kuratowski-wojdyslawski-embedding.md`
  Result: all three changed items reflowed once; the final reflow pass was unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-banach-space-no-countably-infinite-hamel-basis.md items/cex-heine-borel-fails-in-ell-two.md items/thm-kuratowski-wojdyslawski-embedding.md`
  Result: `3 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-5.proof-contracts.json thm-banach-space-no-countably-infinite-hamel-basis cex-heine-borel-fails-in-ell-two thm-kuratowski-wojdyslawski-embedding`
  Result: `regenerated 3, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the 20 proof-bearing batch-5 items
  Result: `20 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-5.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 20/20 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-5.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: the tool still reports four candidates on `thm-coordinate-map-for-a-finite-dimensional-normed-space`, `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent`, and `lem-riesz-lemma`. I reread all three items and left the rows unchanged: the `empty` candidate on the coordinate-map theorem is triggered by empty-sum syntax, the two `iff` candidates on the complex norm theorem are triggered by the word "equivalent" rather than a written biconditional clause, and the `zero` candidate on Riesz's lemma is already excluded by step `2.1`'s lower bound `\|y-m\|\ge d>0`.
- `node tools/content-policy.mjs research/frontier-29-batch-5.pages.json`
  Result: `23 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-banach-space-no-countably-infinite-hamel-basis.md items/cex-heine-borel-fails-in-ell-two.md items/thm-kuratowski-wojdyslawski-embedding.md research/frontier-29-batch-5.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
