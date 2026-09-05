# frontier-30 reader-5 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `5`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-batch-5.pages.json`, `research/frontier-30-batch-5.coverage.json`, `research/frontier-30-batch-5.proof-contracts.json`, `research/frontier-30-batch-5.notes.md`, `research/frontier-30-step6-hash-5-pre.json`, and `research/plan-probability-track.md:370-460`.
- Assigned pages: `library/probability/independence-borel-cantelli-and-zero-one-laws.md` and `library/probability/independence-borel-cantelli-and-zero-one-laws-examples.md`.
- Assigned A-page items: `def-independent-families-of-event-classes`, `def-independent-sigma-algebras-and-events`, `def-pairwise-independence`, `lem-independent-families-pass-to-subfamilies`, `lem-independent-events-remain-independent-under-complements`, `thm-pi-system-criterion-for-independent-sigma-algebras`, `thm-grouping-independent-sigma-algebras`, `def-independent-random-elements`, `thm-rectangle-criterion-for-independent-random-elements`, `cor-finite-random-variable-independence-agreement`, `lem-measurable-functions-preserve-independence`, `thm-independent-random-elements-have-product-joint-law`, `thm-factorization-of-expectations-for-independent-variables`, `cor-covariance-vanishes-under-independence`, `def-limsup-and-infinitely-often-event`, `cor-first-borel-cantelli-lemma-for-events`, `thm-pairwise-independent-borel-cantelli-frequency-law`, `cor-second-borel-cantelli-lemma-under-pairwise-independence`, `def-tail-sigma-algebra-of-a-sequence`, `lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra`, `thm-kolmogorov-zero-one-law`, and `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event`.
- Assigned B-page items: `ex-independent-events-that-are-not-disjoint`, `ex-functions-of-disjoint-independent-coordinate-blocks`, `ex-borel-cantelli-eventually-no-large-deviations`, `ex-zero-one-law-for-convergence-of-a-random-series`, `cex-divergent-probability-sum-without-independence`, and `cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs`.
- Published dependency items opened for verification: `def-probability-measure`, `def-sigma-algebra`, `lem-probability-measure-basic-identities`, `def-pi-system`, `thm-dynkin-pi-lambda`, `def-random-element-and-real-random-variable`, `def-sigma-algebra-generated-by-a-function`, `def-independence-of-finite-random-variables`, `lem-finite-random-variables-are-measurable`, `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces`, `thm-composition-with-borel-functions-preserves-measurability`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-change-of-variables-for-expectation`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `def-moments-variance-and-covariance`, `lem-variance-and-covariance-identities-for-random-variables`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-set-limsup-and-liminf`, `thm-first-borel-cantelli`, `def-generated-sigma-algebra`, `thm-monotone-class`, `prop-indicator-function-is-measurable-iff-its-set-is-measurable`, `cor-expectation-of-an-indicator-is-probability`, `cor-chebyshev-inequality-for-random-variables`, `def-uniform-finite-probability-space`, and `def-pairwise-and-mutual-independence-of-events`.

## Confirmed defects and edits

1. Repaired `items/thm-pairwise-independent-borel-cantelli-frequency-law.md`.
   The old proof jumped from a Borel-Cantelli estimate stated for each real `\varepsilon>0` to almost-sure subsequence convergence without passing through a countable family of tolerances. I replaced that step by the standard `\varepsilon=1/r` countable reduction, then kept the interpolation argument. I also removed reliance on the published finite-space indicator machinery and rewrote the variance estimate directly from measurable indicators, linearity of expectation, and `\operatorname{Var}(S_n)=\mathbb E[S_n^2]-\mathbb E[S_n]^2`.
2. Repaired `items/thm-kolmogorov-zero-one-law.md`.
   The proof used the fact that a tail event lies in the full-coordinate sigma-algebra without citing the tail-sigma definition. I added the missing dependency `def-tail-sigma-algebra-of-a-sequence`, recorded it as `[L4]`, and used it explicitly in step `2.1`.
3. Repaired `items/cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event.md`.
   The old proof treated invariance under deleting finitely many initial terms as if it by itself implied membership in every future-coordinate sigma-algebra. I replaced that gap with an explicit Cauchy-criterion description of the convergence event and added the measurable-arithmetic dependency needed to justify those tail partial-sum events.
4. Updated `research/frontier-30-batch-5.proof-contracts.json`.
   I regenerated the contract entries for `thm-pairwise-independent-borel-cantelli-frequency-law`, `thm-kolmogorov-zero-one-law`, and `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event`, then corrected the stale boundary-evidence step references in the repaired frequency-law entry.

## Per-page verdicts

- `independence-borel-cantelli-and-zero-one-laws`: pass after the repairs above. The current A-page summary, statements, proofs, and proof contracts now match the opened dependencies.
- `independence-borel-cantelli-and-zero-one-laws-examples`: pass. I rechecked the examples and counterexamples against the repaired A-page items; no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-pairwise-independent-borel-cantelli-frequency-law.md items/thm-kolmogorov-zero-one-law.md items/cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event.md`
  Result: all three files reflowed on the first pass; unchanged on the final pass.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-pairwise-independent-borel-cantelli-frequency-law.md items/thm-kolmogorov-zero-one-law.md items/cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event.md`
  Result: `3 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-5.proof-contracts.json thm-pairwise-independent-borel-cantelli-frequency-law thm-kolmogorov-zero-one-law cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event`
  Result: `regenerated 3, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts` over all 22 proof-bearing batch-5 scope items
  Result: `22 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-5.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 22/22 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-5.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-30-batch-5.proof-contracts.json --items-dir items`
  Result: template-reuse clusters plus eight candidate `empty` contradictions. I reread each candidate and left them unchanged: every cited item either explicitly excludes the empty-product/empty-family branch (`n\ge1`) or concerns an infinite sequence rather than a separate empty-case convention.
- `node tools/content-policy.mjs research/frontier-30-batch-5.pages.json`
  Result: `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-pairwise-independent-borel-cantelli-frequency-law.md items/thm-kolmogorov-zero-one-law.md items/cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event.md research/frontier-30-batch-5.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
