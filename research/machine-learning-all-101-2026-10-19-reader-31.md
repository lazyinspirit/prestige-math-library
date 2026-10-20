# Step 3a reader report — batch 31

Run: `machine-learning-all-101-2026-10-19`  
Reader: `reader-31`  
Scope: `feedforward-networks-and-universal-approximation` and its examples page

## Opened inventory

Assigned pages:

- `library/machine-learning/feedforward-networks-and-universal-approximation.md`
- `library/machine-learning/feedforward-networks-and-universal-approximation-examples.md`

Assigned items, read in dependency order:

- `def-feedforward-neural-network`, `def-activation-class-locally-essentially-bounded-ae-continuous`, `lem-polynomial-ridge-functions-dense-on-compact-sets`, `lem-linear-ridge-pullback-of-null-sets-is-null`, `lem-fixed-support-test-function-space-is-separable`, `lem-distribution-with-vanishing-highest-derivative-is-polynomial`, `lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures`, `lem-nonzero-real-polynomial-zero-set-is-lebesgue-null`.
- `def-single-hidden-layer-network`, `lem-all-polynomial-convolutions-have-uniformly-bounded-degree`.
- `lem-polynomial-activation-bounded-degree-obstruction`, `lem-smooth-nonpolynomial-activation-dense-on-compact-intervals`, `lem-network-approximates-smooth-activation-convolutions`, `lem-polynomial-convolutions-force-activation-polynomial-ae`, `cex-offset-free-sine-ridge-functions-are-not-dense`, `cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation`, `cex-zero-measure-does-not-force-a-nonpolynomial-activation`.
- `lem-rough-nonpolynomial-activation-universal-on-compact-sets`, `ex-polynomial-activation-bounded-degree-obstruction`, `thm-single-hidden-layer-universal-approximation`, `ex-relu-and-sigmoid-activations-meet-the-universality-conditions`.

I opened the four page-level prerequisites `stone-weierstrass-general`, `distributions-test-functions-and-differentiation`, `choice-strength-in-baire-urysohn-stone-and-tychonoff`, and `outward-rounded-interval-and-ball-arithmetic`.

I also opened the definitions/statements for the 55 distinct direct published item suppliers below and the cited clauses used in the proofs. All 55 resolve to published items outside this run; none is another-batch draft supplier.

**Corollaries:** `cor-archimedean-reciprocal`, `cor-mean-value-theorem`, `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`, `cor-weierstrass-approximation-on-a-closed-interval`.

**Definitions:** `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-borel-and-lebesgue-measurable-function-on-rn`, `def-calligraphic-l-p-on-a-measure-space`, `def-convolution-of-a-distribution-with-a-test-function`, `def-countable-choice`, `def-distributional-derivative`, `def-essential-supremum-with-respect-to-a-measure`, `def-fixed-support-test-function-frechet-space`, `def-formal-derivative-of-a-polynomial`, `def-l-infinity-on-a-measure-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-measure`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-regular-distribution-from-a-locally-integrable-function`.

**Lemmas:** `lem-derivative-algebra-and-chain-rules`, `lem-extreme-value-theorem-from-compactness`, `lem-fixed-support-test-function-spaces-are-complete`, `lem-fundamental-theorem-and-integration-by-parts`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `lem-taylor-lagrange-remainder-from-mean-value`, `lem-test-function-cutoffs-and-euclidean-localization`.

**Proposition:** `prop-countable-subsets-of-rn-are-lebesgue-null`.

**Theorems:** `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `thm-borel-sets-are-lebesgue-measurable`, `thm-convolution-with-a-test-function-is-smooth`, `thm-distributional-differentiation-is-continuous-and-commutes`, `thm-dominated-convergence`, `thm-extreme-value-metric`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`, `thm-heine-borel-rn`, `thm-heine-cantor-r`, `thm-lebesgue-inner-regularity-by-closed-and-compact-sets`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-lebesgue-outer-regularity-for-arbitrary-subsets`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-littlewood-characterisations-of-lebesgue-measurability`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-mollifier-approximation-in-distributions`, `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`, `thm-of-archimedean`, `thm-real-stone-weierstrass-general`, `thm-reals-cauchy-complete`, `thm-separable-complete-metric-baire-in-zf`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

Task evidence consulted included the assigned manifest, dependency-input bundle, proof-contract file, coverage/authoring notes, and relevant cross-batch dependency rows. The dependency-input bundle lists 39 external item suppliers; the current item dependency fields resolve to 55 distinct direct suppliers. I independently opened the 16 additional direct suppliers as well. The manifests and author decisions were treated as navigation evidence, not mathematical verdicts.

## Mathematical source checks

- Leshno, Lin, Pinkus, and Schocken, NYU Working Paper IS-92-13 (March 1992), was retrieved from the NYU archive. Definition 5 (PDF p. 8) defines density through the essential-supremum norm; Theorem 1 (PDF p. 10) states the activation and Lp conditions; the proof Steps 1–7 (PDF pp. 13–19) were checked against the local proof chain. This supports the essential-supremum/pointwise distinction and polynomial obstruction; it does not support an unrestricted pointwise-supremum conclusion for M.
- Moreau, *Dynamical Neural Networks and Composition Networks for System Modeling*, Chapter 2 section 2.3 (printed pp. 23–28; PDF pages 50–55), was retrieved and read. Theorem 2.6 and Lemmas 2.8–2.14 cover the smooth-activation reduction and convolution route. The local arguments in this batch were checked independently of the citation.
- Hornik, “Approximation Capabilities of Multilayer Feedforward Networks,” §2, Theorems 1–2 (printed pp. 252–253), supports the one-hidden-layer model convention and the narrower bounded/continuous activation results. Goodfellow, Bengio, and Courville, *Deep Learning*, §6.4.1 (pp. 194–197), supports the feedforward representation context and the caveat that representability gives no training or generalization guarantee.

## Repairs

1. `items/lem-linear-ridge-pullback-of-null-sets-is-null.md`, Proof 2.1: Countable Choice makes an outer-null E Lebesgue measurable by the cited completeness/outer-regularity facts, which is needed before applying the linear change-of-variables result. The proof now says this before scaling and translating E. Proof 3.1 now states that the two Lebesgue factors used with Tonelli are sigma-finite, using the finite measures of the cubes `[-r,r]^m`. Proof 4.1 now invokes countable subadditivity explicitly for the countable union. Added the corresponding published dependencies and updated proof-contract entries F8/F9.
2. `items/lem-nonzero-real-polynomial-zero-set-is-lebesgue-null.md`, Proof 2.1: Tonelli’s cited theorem requires sigma-finite factor measures. The proof now establishes this from the countable exhaustion by finite-measure cubes and cites the published box-measure result. Added that dependency and updated the F6 contract entry.
3. `items/lem-network-approximates-smooth-activation-convolutions.md`, Proof 1.1: The Riemann criterion requires the discontinuity set to be measurable as well as null. The translated discontinuity set lies inside a translated closed null set; the proof now applies Lebesgue completeness to it and every subset before invoking the criterion. Added the completeness dependency and updated the F8/F3 contract entries.

All repairs are proof/dependency changes; no Statement or Definition changed, so no consumer interface changed. None of the three repaired items had a `verification.judge` record to remove. `reflow.mts` reported all three unchanged; `precheck.mts` passed all three; the combined `proof-layout.mjs` run checked 3 items and 12 steps with 0 defects.

The feedforward-network definition contains the only TikZ diagram in the assigned items. Its input-to-hidden and hidden-to-output arrows match the described one-hidden-layer scalar-output network; no diagram repair or addition was needed.

## Page verdicts

- `feedforward-networks-and-universal-approximation`: no page-prose defect. The frontmatter-only A page has the assigned A-item inventory and its four declared prerequisites; the empty body satisfies the no-summary instruction.
- `feedforward-networks-and-universal-approximation-examples`: no page-prose defect. The frontmatter-only B page lists all five assigned examples and requires the A page; the empty body satisfies the no-summary instruction.

## Unedited defects and blocker

No confirmed or suspected mathematical defect remains unedited in the assigned items or pages. No assigned withdrawal is proposed. There is no batch-31 blocker. At the final status check (2026-10-19 11:53 UTC), the run remained active with other batches still in Step 3a; batch 31 had not yet been collected into the read stage.

An initial apparent dimension mismatch in Proof 2.1 of the null-pullback lemma was a misread: the source already intersects the one-dimensional rescaled set with `[-C_R,C_R]`, so no change was made for that point.
