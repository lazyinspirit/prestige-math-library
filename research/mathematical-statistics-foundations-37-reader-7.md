# Step 3a reader report — batch 7

Run: `mathematical-statistics-foundations-37`  
Batch: `7`  
Assignment: `research/mathematical-statistics-foundations-37-batch-7.pages.json`

## Opened inventory

Pages reviewed:

- A page `fisher-information-and-finite-sample-information-bounds` at `library/mathematical-statistics/fisher-information-and-finite-sample-information-bounds.md`.
- B page `fisher-information-and-finite-sample-information-bounds-examples` at `library/mathematical-statistics/fisher-information-and-finite-sample-information-bounds-examples.md`.

Assigned items reviewed in dependency order:

1. `def-score-and-fisher-information`
2. `thm-score-mean-zero-and-information-identity`
3. `thm-cramer-rao-lower-bound`
4. `thm-multivariate-cramer-rao-bound`
5. `ex-bernoulli-score-fisher-information-and-cramer-rao-attainment`
6. `ex-normal-location-score-information-and-cramer-rao-attainment`
7. `cex-uniform-moving-support-invalidates-naive-cramer-rao-bound`

In-run suppliers opened as read-only: `def-dominated-statistical-experiment` and `def-likelihood-density` (batch 4), `def-statistic-and-estimator` (batch 2), and `def-unbiased-estimator-and-umvu` (batch 6). Their definitions support the uses made by batch 7.

The relevant Definition/Statement clauses and cited proof facts were reviewed for these published dependencies: `cor-expectation-agrees-with-the-finite-weighted-sum`, `cor-mean-value-theorem`, `def-axiom-of-choice`, `def-derivative`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-higher-derivatives-and-smoothness`, `def-inner-product-space`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-measure-null-set-and-almost-everywhere`, `def-measure-with-density`, `def-moments-variance-and-covariance`, `def-natural-logarithm`, `def-probability-measure`, `def-random-element-and-real-random-variable`, `def-standard-normal-and-normal-laws`, `lem-derivative-of-a-power`, `lem-gaussian-even-moment-bound-for-brownian-increments`, `lem-normal-density-has-total-mass-one`, `thm-algebra-of-derivatives`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-chain-rule`, `thm-change-of-variables-for-expectation`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-dominated-convergence`, `thm-exponential-definition-equivalence`, `thm-ftc-second-part`, `thm-integration-against-a-density`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-logarithm-derivative-and-integral`, `thm-monotone-convergence-for-the-integral`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, and `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`.

Current-run downstream consumers of the score definition were checked for impact: batch 22's `def-wald-score-likelihood-ratio-statistics`, `thm-wald-score-likelihood-ratio-asymptotic-chi-square`, `cor-wald-score-lr-asymptotic-equivalence`, `ex-normal-mean-exact-likelihood-calibration`, and `cex-boundary-null-has-nonstandard-lr-limit`; and batch 29's `def-efficient-score`, `thm-efficient-score-canonical-gradient`, and `ex-efficient-score-nuisance-projection`. They use score vectors and information matrices; the scalar-dimension clarification does not change their claims.

## Edits and evidence

- `def-score-and-fisher-information`, `## Definition` scalar-information paragraph: restricted the expected-square scalar Fisher information definition to `d = 1`; the old wording applied scalar squaring to a vector score without defining a vector norm. The `d > 1` information-matrix definition remains unchanged. Updated the batch manifest statement and the definition contract's boundary evidence. The current-run vector consumers listed above remain compatible.
- `thm-score-mean-zero-and-information-identity`, Facts `[F5]`/`[F11]` and Proof steps 1.1–3.1: made the signed density-integral extension explicit by applying the nonnegative density formula to positive and negative parts and checking integrability. Added `thm-linearity-of-the-lebesgue-integral-on-l-one` to the item's dependencies, batch manifest, Facts, and proof contract; cited linearity where quotient integrals and Hessian terms are combined. This closes the signed-expectation and differentiation-under-the-integral steps from the stated envelope hypotheses.
- `thm-cramer-rao-lower-bound`, sufficient-envelope paragraph in `## Statement`, Fact `[F12]`, and Proof step 1.1: changed the route to require one common null set for the bound over all parameters in the neighborhood. The mean-value estimate needs this uniform almost-everywhere control. Expanded the proof step to derive the score-covariance identity from the difference quotient, and made the signed density formula's positive/negative-part argument and integral-linearity use explicit in the Facts and contract.
- `thm-multivariate-cramer-rao-bound`, Fact `[F7]` and Proof steps 1.1–2.1: added integral linearity as a dependency, manifest entry, Fact, and contract citation. The proof now records integrability of the coordinates and cross-products before expanding the residual covariance.
- `ex-normal-location-score-information-and-cramer-rao-attainment`, Verification step 5.1: verified the displayed normal density is the density of the affine normal law by applying the cited scaling and translation identities to each Borel set. The cited `lem-gaussian-even-moment-bound-for-brownian-increments` applies to any random variable with the stated normal increment law; the example's `Z` minus a constant meets that hypothesis, and the local truncation proof independently establishes `E[Z^2] = 1`.
- `cex-uniform-moving-support-invalidates-naive-cramer-rao-bound`, Counterexample step 1.1: computed the estimator mean and variance directly from nonnegative density integrals and an explicit antiderivative, avoiding an unlisted expectation-linearity inference. Updated the finite-check contract accordingly.

The page summaries were checked against the repaired items and examples. No A-page or B-page prose edits were needed. No changed item had a `verification.judge` record to remove.

Source checks for the literature-derived claims:

- [Deligianidis, *SB2.1 Foundations of Statistical Inference*](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf), printed pp. 22–24: Theorems 3.4 and 3.7 state the mean-zero score and negative expected log-Hessian identities under regularity assumptions; pp. 29–31, Theorem 5.3 and proof, give the scalar Cramér–Rao bound, covariance-derivative step, and equality condition; p. 32, Theorem 5.9, gives the multivariate matrix bound.
- [MIT 18.655 Lecture 13](https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf), PDF pp. 10–11, Theorem 3.4.1, gives the scalar information inequality; pp. 18–19, Theorem 3.4.4, gives the multivariate covariance inequality.
- [MIT 14.381 Lecture 6](https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/15224973dfc1c2b4287804c8712681f7_MIT14_381F18_lec6.pdf), PDF p. 4, gives the Bernoulli score/information and known-variance normal-location score/information calculations used by the examples.

## Page verdicts

- `fisher-information-and-finite-sample-information-bounds` (A): sound after the local repairs. Its summary accurately distinguishes the regular sufficient score identities from the separate scalar and vector covariance hypotheses.
- `fisher-information-and-finite-sample-information-bounds-examples` (B): sound. The Bernoulli and normal examples establish attainment, and the uniform moving-support counterexample exhibits the failed score identities and strict variance contradiction.

## Unedited defects and blockers

No confirmed or suspected defect remained in the assigned carriers or in the checked direct dependency uses. No reader blocker was encountered. At the final status check the live run still listed batch 7 among missing native Step 3a read coverage, although the task-named report and findings files were on disk; no workers were in flight. Run-side coverage registration remains pending.

## Validation

- Reflow and precheck were run for all six changed item paths. The definition returned `0 checked, 0 failing`; all five proof-bearing items passed precheck. After correcting an unmatched math delimiter found by the first proof-layout run, the score-identity item was reflowed and prechecked again successfully.
- Final `node tools/proof-layout.mjs` run over all six changed item paths: `6 items, 22 steps, 0 defects`.
- The batch-7 manifest dependency arrays and proof-contract scope/citations were synchronized with the edited items. No gate, judgment, or self-certification was performed.
