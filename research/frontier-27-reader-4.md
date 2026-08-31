# Frontier-27 Reader-4 Report

Run: `frontier-27`  
Role: Step 6a independent reader  
Batch: `4`  
Date: `2026-08-31`

## Scope opened

- Control artifacts: `research/frontier-27-reader.task.md`, `research/frontier-27-batch-4.pages.json`, `research/frontier-27-batch-4.coverage.json`, `research/frontier-27-batch-4.notes.md`, `research/frontier-27-batch-4.proof-contracts.json`, `.autopilot/status.md`, `.autopilot/state.json`.
- Live-run context: `.autopilot` currently records `frontier-23` at stage `5-author`; I used the task-named `frontier-27` batch-4 artifacts as scope authority and treated the run mismatch as context rather than a blocker.
- Assigned pages: `library/real-analysis/functional-analysis/normed-and-banach-spaces.md`, `library/real-analysis/functional-analysis/normed-and-banach-spaces-examples.md`.
- Assigned A-page items opened: `rem-real-and-complex-normed-space-convention`, `def-banach-space`, `lem-reverse-triangle-inequality-in-a-normed-space`, `def-linear-isometry-and-isometric-isomorphism`, `def-normed-subspace`, `lem-complete-subspace-is-closed`, `lem-closed-subspace-of-a-banach-space-is-banach`, `def-product-norms-on-finitely-many-normed-spaces`, `lem-vector-operations-are-continuous-in-a-normed-space`, `lem-finite-product-norms-are-equivalent`, `thm-finite-products-of-banach-spaces-are-banach`, `def-series-and-absolute-convergence-in-a-normed-space`, `lem-absolutely-convergent-series-is-cauchy`, `thm-banach-series-criterion`, `def-completion-of-a-normed-space`, `lem-completion-operations-are-well-defined`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `thm-completion-universal-property-for-bounded-linear-maps`, `cor-normed-space-completions-are-uniquely-linearly-isometric`, `rem-lp-spaces-are-banach-spaces`.
- Assigned B-page items opened: `ex-ell-infinity-is-a-banach-space`, `ex-c0-is-a-banach-space`, `ex-cb-of-a-space-is-banach`, `ex-c-of-a-compact-space-is-banach`, `ex-finite-sequences-c00-with-standard-norms`, `ex-polynomials-are-not-complete-in-the-supremum-norm`, `ex-lp-banach-space-dictionary`, `cex-an-incomplete-subspace-need-not-be-closed`, `cex-equivalent-metrics-need-not-come-from-equivalent-norms`.
- Unique direct dependency items opened outside the batch: 41 total — `def-canonical-natural`, `def-cauchy-in-metric`, `def-complete-metric-space`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-continuous-map-top`, `def-equivalent-metrics`, `def-equivalent-norms`, `def-finite-sum`, `def-injection-surjection-bijection`, `def-isometry-and-metric-embedding`, `def-linear-map`, `def-linear-subspace`, `def-lipschitz-holder-contraction`, `def-metric-compactness`, `def-metric-completion`, `def-metric-interior-closure-boundary`, `def-norm-and-normed-space`, `def-p-norms-on-rn`, `def-product-topology`, `def-real-limit`, `def-sequence`, `def-series`, `lem-bounded-remetrisation`, `lem-limit-preserves-order`, `lem-limit-unique`, `lem-real-line-is-a-metric-space`, `rem-lp-completeness-and-the-banach-property`, `thm-algebra-of-limits`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-complete-subspace-iff-closed`, `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-complex-numbers-form-a-field`, `thm-extreme-value-metric`, `thm-metric-completion-exists`, `thm-metric-completion-unique`, `thm-metric-regularity-hierarchy`, `thm-real-stone-weierstrass-for-compact-metric-spaces`, `thm-riesz-fischer-completeness-of-l-p`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-uniform-limit-theorem`, `thm-uniformly-continuous-extension-from-dense`.

## Confirmed defects repaired

1. `items/thm-completion-universal-property-for-bounded-linear-maps.md`
   defect: the original linearity step only compared maps on the dense copy for fixed vectors already in `i[X]`, so it did not justify additivity and homogeneity for arbitrary points of the completion.
   repair: added the missing dependency on `lem-vector-operations-are-continuous-in-a-normed-space`, cited it as a new local fact, and rewrote the linearity proof through dense approximating sequences plus continuity of addition and scalar multiplication in `\widehat X` and `Y`.

2. `items/ex-cb-of-a-space-is-banach.md`
   defect: the Statement wrote the supremum norm for an arbitrary topological space `X`, but on `X = \varnothing` the expression `\sup_{x\in X}|f(x)|` is undefined in this library's conventions (`rem-sup-conventions`).
   repair: restricted the example and its Given block to nonempty `X`. The proof itself already handled the substantive completeness argument for the nonempty case.

3. `items/ex-c-of-a-compact-space-is-banach.md`
   defect: the Statement likewise claimed the supremum norm for every compact metric space, including `K = \varnothing`, where that supremum is undefined. The old empty-case completeness argument did not repair the undefined norm.
   repair: restricted the example to nonempty compact metric spaces and simplified the proof to the direct reduction `C(K)=C_b(K)` via the extreme-value theorem.

4. `research/frontier-27-batch-4.proof-contracts.json`
   repair: refreshed all 21 proof-bearing batch entries after the item repairs so the citation quotes and derivations match current disk, and corrected stale boundary notes in the repaired contracts. No stale `verification.judge` record was present on the repaired draft items.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-completion-universal-property-for-bounded-linear-maps.md items/ex-cb-of-a-space-is-banach.md items/ex-c-of-a-compact-space-is-banach.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-completion-universal-property-for-bounded-linear-maps.md items/ex-cb-of-a-space-is-banach.md items/ex-c-of-a-compact-space-is-banach.md`
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-4.proof-contracts.json lem-reverse-triangle-inequality-in-a-normed-space lem-complete-subspace-is-closed lem-closed-subspace-of-a-banach-space-is-banach lem-vector-operations-are-continuous-in-a-normed-space lem-finite-product-norms-are-equivalent thm-finite-products-of-banach-spaces-are-banach lem-absolutely-convergent-series-is-cauchy thm-banach-series-criterion lem-completion-operations-are-well-defined thm-metric-completion-carries-a-unique-banach-space-structure thm-completion-universal-property-for-bounded-linear-maps cor-normed-space-completions-are-uniquely-linearly-isometric ex-ell-infinity-is-a-banach-space ex-c0-is-a-banach-space ex-cb-of-a-space-is-banach ex-c-of-a-compact-space-is-banach ex-finite-sequences-c00-with-standard-norms ex-polynomials-are-not-complete-in-the-supremum-norm ex-lp-banach-space-dictionary cex-an-incomplete-subspace-need-not-be-closed cex-equivalent-metrics-need-not-come-from-equivalent-norms`
- full batch precheck over the 21 proof-bearing batch-4 items
- `node tools/proof-contract.mjs research/frontier-27-batch-4.proof-contracts.json --strict`
- `node tools/rendercheck.mjs library/real-analysis/functional-analysis/normed-and-banach-spaces.md library/real-analysis/functional-analysis/normed-and-banach-spaces-examples.md items/thm-completion-universal-property-for-bounded-linear-maps.md items/ex-cb-of-a-space-is-banach.md items/ex-c-of-a-compact-space-is-banach.md`
- `node tools/content-policy.mjs research/frontier-27-batch-4.pages.json`
- `node tools/citation-fidelity.mjs research/frontier-27-batch-4.proof-contracts.json --fail-on-missing-quote`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `git diff --check -- items/thm-completion-universal-property-for-bounded-linear-maps.md items/ex-cb-of-a-space-is-banach.md items/ex-c-of-a-compact-space-is-banach.md research/frontier-27-batch-4.proof-contracts.json`

Results:

- changed-item precheck: `3/3` clean
- full batch precheck: `21/21` clean
- `proof-contract --strict`: `0` errors, `0` warnings, `21/21` checked
- `rendercheck`: clean on the two page files and the three repaired items
- `content-policy`: `29` scoped items, `0` errors, `0` warnings
- `citation-fidelity`: `62` citations, no missing quote and no widening candidates
- `validate-plan`: exit `0`; the output still carries the repository's standing out-of-batch `redundant-prereq` advisories
- `git diff --check`: clean on the touched batch-local paths

## Page verdicts

- `normed-and-banach-spaces`: pass on current bytes after the universal-property repair. The A-page summary still matches the repaired item bodies and the declared route.
- `normed-and-banach-spaces-examples`: pass on current bytes after the two nonempty-hypothesis repairs. No B-page prose edit was needed.

## Uneditable defects and blockers

- No remaining uneditable in-scope defect was found in an `in-flight-item`, `page`, or `published-dependency`.
- No blocker remains.
