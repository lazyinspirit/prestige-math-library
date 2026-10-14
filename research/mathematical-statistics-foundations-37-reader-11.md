# Reader report — batch 11

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Batch: `11`

## Opened inventory

Assigned pages:

- `confidence-sets-pivots-and-test-inversion` — `library/mathematical-statistics/confidence-sets-pivots-and-test-inversion.md` (A-page).
- `confidence-sets-pivots-and-test-inversion-examples` — `library/mathematical-statistics/confidence-sets-pivots-and-test-inversion-examples.md` (B-page).

Assigned items opened and reviewed:

- A-page: `def-confidence-set-and-coverage`, `def-pivot`, `thm-pivot-inversion-exact-coverage`, `thm-test-inversion-coverage`.
- B-page: `ex-discrete-pivot-inversion-is-conservative`, `ex-known-variance-normal-mean-interval`, `ex-uniform-maximum-pivot-confidence-interval`, `ex-exact-unknown-variance-normal-t-interval`, `ex-binomial-tail-test-inversion`.

Dependency items opened to check these statements and arguments:

- Experiment, measurability, probability, law, and testing: `def-statistical-experiment`, `def-measurable-space`, `def-measurable-function-between-measurable-spaces`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `def-sigma-algebra`, `def-probability-measure`, `def-borel-sigma-algebra`, `def-test-size-and-power`, `def-randomized-test`, `def-loss-function-and-risk`, `lem-test-zero-one-loss-risk-identities`, and `def-expectation-of-a-nonnegative-or-integrable-random-variable`.
- Normal, binomial, and limiting facts: `def-axiom-of-choice`, `thm-intermediate-value`, `thm-continuity-from-below-for-measures`, `def-standard-normal-and-normal-laws`, `def-binomial-coefficient`, `thm-binomial-theorem-over-a-commutative-ring`, `thm-monotonicity-from-the-derivative`, `def-independent-random-elements`, and `thm-independent-random-elements-have-product-joint-law`.
- Real completeness used by the repaired definition: `def-real-numbers`, `def-complete-ordered-field`, and `cor-cauchy-reals-lub-complete`.
- Exact normal t-pivot chain: `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing`, `thm-normal-mean-residual-independence-and-exact-t-pivot`, `lem-positive-df-chi-square-has-density-and-regular-cdf`, `thm-orthogonal-projection-has-independent-chi-square-sums`, `def-student-t-and-f-laws`, `def-chi-square-law`, `thm-orthogonal-transform-preserves-standard-normal-product-law`, and `def-statistic-and-estimator`.
- Supporting claims used in that chain: `cor-continuous-functions-are-borel-measurable`, `def-countable-choice`, `lem-axiom-of-choice-implies-countable-choice`, `lem-measurable-functions-preserve-independence`, `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `lem-normal-density-has-total-mass-one`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `def-orthogonal-projection`, `thm-grouping-independent-sigma-algebras`, `def-cumulative-distribution-function-of-a-random-variable`, `thm-derivative-of-exponential`, `thm-dominated-convergence`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `def-dirac-measure`, `thm-fourier-transform-of-a-finite-complex-measure`, `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms`, `def-independent-sigma-algebras-and-events`, and `thm-rectangle-criterion-for-independent-random-elements`.

The two cited lecture sources were opened at their cited sections/slides: [Mikusheva, MIT 14.381 Lecture 11](https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/6a7fdee0c759b8ac985bf28a553acb24_MIT14_381F18_lec11.pdf), PDF pp. 1–3, states the coverage/confidence-level definitions, test inversion, pivot calibration, and the exact normal t-interval example; [Gregory, USC STAT 713 Lecture 14](https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_14_slides_annotated.pdf), slide 3/PDF p. 4, slide 6/PDF p. 6, slide 8/PDF p. 9, slide 9/PDF p. 14, and slide 12/PDF p. 20, gives the matching coverage, pivot-inversion, normal-pivot exercise, discrete-CDF caveat/uniform-maximum exercise, and test-inversion statements. The citations support the uses made in the assigned items; the finite examples' calculations were checked directly.

## Edit and evidence

- `items/def-confidence-set-and-coverage.md`: added `def-real-numbers` and `cor-cauchy-reals-lub-complete` to `deps`. The definition takes the infimum of coverage values but previously did not declare the completeness supplier that ensures this infimum exists. The parameter set is explicitly nonempty and each coverage is a probability, so the values form a nonempty subset of `[0,1]`. `def-real-numbers` identifies the real numbers with the Cauchy-sequence construction, and `cor-cauchy-reals-lub-complete` proves that this real field has the least-upper-bound property, hence the corresponding greatest-lower-bound property. The definition's stated formula was preserved.
- Updated the `def-confidence-set-and-coverage` entry in `research/mathematical-statistics-foundations-37-batch-11.proof-contracts.json` so its `iff-forward` and `iff-reverse` evidence records existence of the real infimum and its supplier. The item had no `verification.judge` record to remove.
- Required checks: `node tools/tsx-run.mjs tools/reflow.mts items/def-confidence-set-and-coverage.md` reported `unchanged`; `node tools/tsx-run.mjs tools/precheck.mts items/def-confidence-set-and-coverage.md` reported `0 checked, 0 failing — all clean`; the proof-contract JSON parsed; final `node tools/proof-layout.mjs items/def-confidence-set-and-coverage.md` reported `1 items, 0 steps, 0 defects`.

## Defects not edited

- Published dependency `def-orthogonal-projection`, Definition opening sentence (line 32): after the displayed `V=W\oplus W^\perp`, the sentence reads “gives … associates to every `v∈V` unique vectors …” without a grammatical link. Insert a conjunction such as “and” after the displayed equation. The intended definition is still recoverable; this is nonfatal prose ill-formedness. Its dependency closure reaches assigned consumer `ex-exact-unknown-variance-normal-t-interval` through `thm-orthogonal-projection-has-independent-chi-square-sums` and the exact t-pivot theorem.
- Published dependency `cor-continuous-functions-are-borel-measurable`, Proof 1.1 (line 37): “By [L1], the preimage [L1] `f^{-1}(B)` …” contains a stray duplicate `[L1]` inside the sentence. Remove the interior duplicate reference; the proof step remains mathematically clear. This is nonfatal prose ill-formedness. Its dependency closure also reaches assigned consumer `ex-exact-unknown-variance-normal-t-interval` through the Gaussian projection/t-pivot chain.

Both subjects are published dependencies outside this reader's edit authority. Their exact IDs, locations, classes, evidence, and consumers are returned in the findings JSON.

## Page verdicts and blocker

- `confidence-sets-pivots-and-test-inversion`: no page-prose defect found. Its summary accurately describes membership-section measurability, point-null and pivot inversion, endpoint calibration with atoms, augmented randomization, and the common full-measure sample space used for the t interval.
- `confidence-sets-pivots-and-test-inversion-examples`: no page-prose defect found. Its summary matches the five assigned calculations and the stated qualifications for discrete coverage and the nuisance variance.
- Blocker: none. No assigned A-page prose needed repair.

## Coverage limitation

The assigned pages and manifest were opened first. The t-pivot supplier chain was discovered from item frontmatter, so some batch-10 upstream supplier files were opened after their consuming items were first opened. I rechecked the t-interval claims after reading those suppliers, but the literal file-opening order was not fully dependency-ordered.
