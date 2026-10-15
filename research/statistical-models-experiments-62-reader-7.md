# Step 3a reader report — batch 7

Run: `statistical-models-experiments-62`  
Batch: `7`  
Date: 2026-10-15

## Run state and scope

At review start, the autopilot status command recomputed the run as `running`; `3a-read` was collecting results and showed the batch-7 artifact missing. The repository log has no commit matching this run ID, so no run closeout is recorded. No run state, gate, or other batch artifact was changed. The review covered the two assigned pages and their 21 listed items.

## Opened assigned inventory

| Page ID | File | Kind | Verdict |
|---|---|---|---|
| `mixed-effects-and-longitudinal-models` | `library/statistical-models-and-experiments/mixed-effects-and-longitudinal-models.md` | A | Pass; summary matches the item scope and preserves the moment-only, Gaussian, GLS, BLUP, and REML qualifications. |
| `mixed-effects-and-longitudinal-models-examples` | `library/statistical-models-and-experiments/mixed-effects-and-longitudinal-models-examples.md` | B | Pass; summary matches its three examples. The dropout item's title was narrowed to match its proved MAR claim. |

Assigned A-page items, read in dependency order:

- `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`
- `thm-nondegenerate-multivariate-normal-law-has-density`
- `def-error-contrast-matrix`
- `def-known-covariance-generalized-least-squares-estimator`
- `def-linear-mixed-model`
- `def-gaussian-linear-mixed-model`
- `def-longitudinal-missingness-mechanisms`
- `lem-error-contrast-matrix-exists`
- `lem-gls-information-matrix-is-positive-definite`
- `lem-marginal-covariance-of-linear-mixed-model`
- `lem-reml-error-contrast-covariance-is-positive-definite`
- `lem-gaussian-error-contrast-is-multivariate-normal`
- `thm-gaussian-conditional-law-of-random-effects`
- `thm-variance-component-identifiability-iff-covariance-map-injective`
- `def-restricted-maximum-likelihood-error-contrasts`
- `thm-known-covariance-gls-is-blue`
- `lem-reml-error-contrast-basis-change-is-parameter-free`
- `thm-known-covariance-blup-for-random-effects`

Assigned B-page items, read after their suppliers:

- `cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout`
- `ex-random-intercept-intraclass-correlation`
- `cex-two-visits-alias-random-slope-and-residual-variance`

## Dependency and source inventory

I opened the definition or statement clauses used by the assigned facts and proofs for all 47 unique direct dependencies outside batch 7 in the batch manifest: `cor-cauchy-schwarz-inequality-for-l-two`, `cor-countable-independent-copies-exist`, `cor-double-orthogonal-complement-and-dimension`, `def-axiom-of-choice`, `def-conditional-expectation-given-a-sigma-algebra`, `def-countable-choice`, `def-dependent-choice`, `def-dimension`, `def-estimand-on-a-statistical-model`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-fixed-design-linear-regression-model`, `def-identifiability-of-an-estimand`, `def-independent-random-elements`, `def-linear-basis`, `def-moments-variance-and-covariance`, `def-multivariate-normal-law`, `def-orthogonal-complement`, `def-parametric-statistical-model`, `def-random-element-and-real-random-variable`, `def-scientific-statistical-model-contract`, `def-standard-normal-and-normal-laws`, `def-statistic-and-estimator`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-characteristic-function-of-a-normal-law`, `lem-characteristic-functions-under-affine-maps-and-independent-sums`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `lem-measurable-functions-preserve-independence`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-covariance-bilinearity-and-symmetry`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-determinant-of-transpose`, `thm-factorization-of-expectations-for-independent-variables`, `thm-gauss-markov-for-fixed-design-regression`, `thm-grouping-independent-sigma-algebras`, `thm-independent-random-elements-have-product-joint-law`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-normal-equations-for-best-affine-l2-prediction`, `thm-non-negative-square-root-exists-and-is-unique`, `thm-rank-nullity`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, and `thm-uniqueness-of-a-law-from-its-characteristic-function`.

The three direct current-run suppliers outside batch 7 were independently opened as drafts: `def-scientific-statistical-model-contract` (batch 1), `def-fixed-design-linear-regression-model` (batch 2), and `thm-gauss-markov-for-fixed-design-regression` (batch 2). For the Gauss–Markov argument I also opened the relevant batch-2 suppliers `def-linear-estimability-in-fixed-design`, `thm-linear-estimability-iff-row-space`, and `thm-ols-unbiasedness-and-covariance-full-rank`, plus `thm-least-squares-fitted-vector-and-solution-set` and `lem-linear-contrast-statistics-are-borel-measurable`. The finite-dimensional basis, rank-nullity, expectation, covariance, and measurability statements used by those items were checked at their cited targets. I found no defect in these dependency claims that affects an assigned item.

I read the current official Duke STA610 notes at the cited sections and the cited ILRI Chapter 2 sections. Relevant checks included: Lecture 1 §§2.3–2.5 and §3.1 for the random-intercept covariance and ICC; Lecture 2 §1.1 for whitening and the known-covariance GLS formula; Lecture 4 pp. 2–5 for the Gaussian likelihood, Gaussian independence argument, and the `C^T Y` error-contrast convention; Lecture 5 §4.3 for the moment-only scalar BLUP result; Lecture 6 §§4–6 for marginal covariance, variance-component likelihood, and the matrix BLUP, plus §7.1's random-slope identifiability example; and Lecture 7 §§5.1–5.2 and 9.1–9.2 for random-slope covariance and missingness/likelihood ignorability. ILRI Chapter 2 §§2.3.3, 2.4.1–2.4.3 (including Appendix D), and 2.5.1 were opened for the mixed-model matrix form, covariance, REML, BLUP, and GLS references. The official Duke 2026 course index links Lecture 4 to the cited six-page PDF; its redirect was inaccessible through the browser, so I retrieved the official linked PDF directly and read pp. 2–5. No source locator used in an assigned item's argument was found to contradict the claim it documents.

## Review findings and edit

The substantive arguments reviewed were sound under their stated hypotheses. In particular, the singular Gaussian-block independence construction uses a block-diagonal square root and does not invert either block; the density result is limited to positive-definite covariance; the conditional Gaussian formula only inverts the positive-definite marginal covariance; the GLS and BLUP results remain moment-only; the error-contrast basis has the stated column orientation; and the two-visit covariance alias is verified by explicit positive-definite parameter tuples with the same marginal covariance.

One title defect was repaired in the assigned B-page item:

- In `cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout`, changed the title from “A mixed-model covariance does not imply ignorable dropout” to “A mixed-model covariance does not imply MAR dropout.” Its statement and finite witness establish failure of MAR. Duke Lecture 7 §9.1 defines MAR through dependence on observed outcomes, and §9.2 states that MAR makes the mechanism ignorable for likelihood inference. The original title asserted the broader conclusion while the item's statement proved only the MAR claim. The B-page summary already described the precise MAR conclusion and needed no edit.
- The proof contract contains no title field, so no contract update was needed. The item had no `verification.judge` record to remove.

Validation after the title edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout.md` — 1 item, 3 steps, 0 defects.

The assigned proof-contract file covers the same 21 item IDs as the manifest. Its fact-source mappings, derivation step labels, and stated choice assumptions were consistent with the opened carriers; no proof-contract edit was required.

## Unedited defects and blockers

No confirmed defect requiring an uneditable finding was found in the dependency statements reviewed. There is no blocker. The review checked all assigned items and the exact dependency statements needed to follow their arguments; it did not independently re-prove every published theorem throughout the full transitive prerequisite closure.
