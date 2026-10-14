# Step 3a reader report — batch 9

Run: `mathematical-statistics-foundations-37`  
Batch: `9`  
Dispatch: `reader-9`

## Opened inventory

### Assigned pages

- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio` — opened [the A-page](../library/mathematical-statistics/uniformly-most-powerful-tests-and-monotone-likelihood-ratio.md). Its item order and summary match the reviewed MLR and one-sided Karlin–Rubin content.
- `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples` — opened [the B-page](../library/mathematical-statistics/uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples.md). Its summary accurately describes the binomial randomization and opposed normal-tail tests.

### Assigned items, read in dependency order

1. `lem-randomized-threshold-has-exact-level`
2. `def-monotone-likelihood-ratio-family`
3. `lem-mlr-orders-randomized-thresholds`
4. `thm-karlin-rubin-one-sided-ump-test`
5. `thm-ump-nonexistence-witness`
6. `ex-binomial-one-sided-ump-test`
7. `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests`

### Page prerequisites

- `finite-sample-tests-neyman-pearson-and-valid-p-values`
- `complete-sufficiency-exponential-families-and-basu`

### Item dependencies opened

The batch-manifest suppliers opened include:

- Current-run suppliers: `def-statistical-experiment` (batch 1); `def-statistic-and-estimator` and `def-randomized-test` (batch 2); `def-dominated-statistical-experiment` and `def-likelihood-density` (batch 4); `def-test-size-and-power` (batch 8).
- Other relevant current-run suppliers: `def-randomized-procedure-as-a-markov-kernel`, `lem-procedure-action-law-is-measurable` (batch 2), and `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative` (batch 4).
- Published density and kernel suppliers: `def-measure-kernel-and-probability-kernel`, `def-radon-nikodym-derivative`, `def-total-variation-of-a-signed-or-complex-measure`, `def-finite-sigma-finite-and-semifinite-measures`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, and `def-sigma-algebra`.
- Other published batch-manifest dependencies: `def-axiom-of-choice`, `def-borel-sigma-algebra`, `def-countable-choice`, `def-infimum`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-of-a-nonnegative-simple-function`, `def-measurable-function-between-measurable-spaces`, `def-measure`, `def-measure-preserving-transformation-and-system`, `def-measure-space`, `def-measure-with-density`, `def-nonnegative-simple-measurable-function`, `def-probability-measure`, `def-standard-normal-and-normal-laws`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-borel-sets-are-lebesgue-measurable`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-infimum-property`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-integration-against-a-density`, `thm-lebesgue-measure-is-a-complete-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, and `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`.
- Additional normal-law suppliers opened to check the stated density and pushforward: `lem-normal-density-has-total-mass-one`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `lem-law-of-a-random-element-is-a-probability-measure`, and `cor-continuous-functions-are-borel-measurable`.

### External sources checked

- Jun Shao, *Stat 610 Mathematical Statistics, Lecture 11*: Definition 8.3.16 (PDF p. 7), Lemma B (p. 8), and Theorem 8.3.17 with proof (pp. 9–10), [PDF](https://pages.stat.wisc.edu/~shao/stat610/stat610-11.pdf). The theorem gives UMP tail tests at their attained sizes; the local proof supplies the atom-randomization calibration used here.
- George Deligiannidis, *Foundations of Statistical Inference*: Definition 13.4 and Theorem 13.5 with proof (PDF pp. 77–78), [PDF](https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf). The theorem assumes a continuous statistic distribution; the assigned proofs handle atoms directly.
- Karl B. Gregory, *STAT 713 Lecture 11*: Neyman–Pearson lemma (annotated PDF pp. 6–8) and Karlin–Rubin theorem (pp. 13–14), [PDF](https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf).
- UC Berkeley Stat 210A, *Testing with One Real Parameter*, §2 “One-sided testing,” [reader](https://stat210a.berkeley.edu/fall-2026/reader/testing-one-parameter.html). It states the upper-tail cutoff and boundary randomization used to top off the size for discrete statistics.

## Edits and evidence

- `lem-mlr-orders-randomized-thresholds`, Proof step 2.1: replaced the integral of a raw likelihood-ratio function with the MLR representation `r(T)`. The item now states that `p₂ = r(T)p₁` almost everywhere on `A`, uses measurability of `r(T)` from step 1.1, and applies the density-integration identity to obtain the block averages. This makes the integrand’s measurability and the ratio ordering explicit under [F1]–[F4].
- `thm-karlin-rubin-one-sided-ump-test`: clarified that randomized tests are binary-action kernels and that `ψ` is their measurable rejection function. Proof step 1.1 now constructs the upper and lower binary-action kernels from `φ₊` and `φ₋`, verifies their probability weights and measurable event evaluations, and identifies them as tests. Added the kernel dependency and corresponding contract citation.
- `thm-ump-nonexistence-witness`: clarified the test-function convention in the statement and [F8]. Step 2.1 now constructs the kernels corresponding to the upper and lower threshold indicators before using them as level tests. Added the kernel dependency and contract citation.
- `ex-binomial-one-sided-ump-test`: clarified that `φ` is the rejection function. Step 1.3 now constructs its binary-action kernel and verifies its probability and measurability conditions. Added the kernel dependency and contract citation.
- `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests`: clarified that the displayed functions are rejection functions and corrected [F5] to the forward implication supplied by `def-randomized-test`. Step 2.1 constructs the two kernels explicitly. Added the kernel dependency and contract citation.
- Regenerated the batch 9 proof-contract entries for the five changed items. None had a stale `verification.judge` record. No page prose was edited.

The kernel construction in each proof is
`K(x,B)=φ(x)1_{1∈B}+(1−φ(x))1_{0∈B}` for `B⊆{0,1}`. The weights sum to one; countable additivity follows because each of the two action points can occur in at most one member of a disjoint sequence. The four event-evaluation functions are measurable from measurability of `φ` and `1−φ`.

## Defects not repaired

None. The current-run suppliers reviewed for the statistical experiment, density selection, randomized tests, and test-size conventions had no remaining defect affecting batch 9.

## Page verdicts

- A-page `uniformly-most-powerful-tests-and-monotone-likelihood-ratio`: no confirmed defect in its prose summary or assigned content after the repairs above.
- B-page `uniformly-most-powerful-tests-and-monotone-likelihood-ratio-examples`: no confirmed defect in its prose summary or examples after the repairs above.

## Validation

- Reflow: unchanged on all five changed items.
- Precheck: pass on `lem-mlr-orders-randomized-thresholds`, `thm-karlin-rubin-one-sided-ump-test`, `thm-ump-nonexistence-witness`, `ex-binomial-one-sided-ump-test`, and `ex-two-sided-normal-alternatives-have-opposed-most-powerful-tests`.
- Targeted proof-contract validation: 5/5 checked, 0 errors, 0 warnings.
- Final proof-layout command: 5 items, 24 steps, 0 defects.

## Blocker

None.

## Coverage note

All seven assigned items, both assigned pages, both page prerequisites, and all batch-manifest item dependencies were opened. I also opened the normal-density, pushforward, Radon–Nikodym, and binary-kernel suppliers used to verify the local arguments. I did not re-audit every transitive foundation beneath each already-published measure/integration theorem; I read the direct statements and relevant proof arguments used here. No unresolved mathematical uncertainty affects the findings.
