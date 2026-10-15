# Step 3a reader report — batch 60

Run: `bayesian-computational-statistics-62`  
Assignment: `reader-60`

## Opened inventory

Pages: `randomized-quasi-monte-carlo-and-replicates` (A), `randomized-quasi-monte-carlo-and-replicates-examples` (B), and required page `quasi-monte-carlo-discrepancy-and-rules`.

Assigned A-page items (20):

`def-b-adic-anova-components`, `lem-countable-iid-baseb-digits-from-one-uniform`, `def-lambda-t-net`, `def-rqmc-point-set-and-estimator`, `lem-b-adic-step-functions-dense-in-l2-cube`, `lem-rqmc-smooth-anova-component-bound`, `def-nested-uniform-scramble`, `lem-b-adic-anova-parseval`, `thm-rqmc-single-rule-unbiasedness`, `def-digital-shift-randomization`, `cor-rqmc-replicate-variance-estimator`, `lem-nested-scramble-marginals-and-net-preservation`, `lem-digital-shift-marginals-and-net-preservation`, `cor-rqmc-studentized-replicate-clt`, `lem-rqmc-scrambled-net-variance-identity`, `lem-rqmc-scrambled-net-gain-formula`, `lem-rqmc-general-net-gain-bound`, `lem-rqmc-zero-net-sharp-gain-bound`, `thm-rqmc-nested-scramble-smooth-net-variance-rate`, and `thm-rqmc-nested-scramble-zero-net-variance-bound`.

Assigned B-page examples (4): `ex-one-rqmc-scramble-vs-independent-replicates`, `ex-skewed-finite-replicate-student-coverage`, `ex-digital-shift-vs-nested-scramble`, and `ex-rqmc-smooth-vs-singular-integrands`.

Cross-batch suppliers opened before their assigned consumers: `def-star-discrepancy-and-digital-net`, `thm-independent-replicate-variance-estimator`, `cor-independent-replicate-mean-clt`, and `thm-iid-monte-carlo-sample-variance-consistency`.

Other immediate support items opened: `def-integrable-real-and-complex-functions-and-their-integrals`, `def-probability-measure`, `def-random-element-and-real-random-variable`, `thm-dynkin-pi-lambda`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `lem-geometric-sequence-null`, `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`, `thm-continuity-from-below-for-measures`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-newton-leibniz-with-interior-derivative`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-heine-cantor-metric`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`, `def-countable-choice`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `def-moments-variance-and-covariance`, `thm-change-of-variables-for-expectation`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-factorization-of-expectations-for-independent-variables`, `def-identically-distributed-and-iid-random-variables`, `def-weak-convergence-of-borel-probability-measures`, `thm-slutsky-for-real-random-variables`, `def-axiom-of-choice`, `thm-lindeberg-levy-iid-central-limit-theorem`, `def-student-t-and-f-laws`, `def-chi-square-law`, `lem-positive-df-chi-square-has-density-and-regular-cdf`, `lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing`, `thm-monotone-convergence-for-the-integral`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `lem-measurable-functions-preserve-independence`, `thm-kolmogorov-iid-l1-strong-law`, and `def-iid-monte-carlo-estimators`.

The batch-60 proof contract, batch notes, cross-batch dependency record, and coverage record were also consulted as evidence; author conclusions were independently checked against the current item and page text.

## Review and repair

The definitions distinguish point count `n` from independent replicate count `R`, and the page statements preserve the hypotheses on marginal uniformity, net quality, smoothness, finite variance, and choice principles. The replicate variance formula and studentized limit concern computation randomization conditional on fixed data; the example's two-replicate coverage calculation is `98/2500 = 0.0392`. The digital-shift and nested-scramble examples correctly give different error variances for the same two-point net and integrand. The singular-integrand example has finite first moment and infinite second moment, so it does not meet the smooth variance theorem's hypotheses.

Repaired `lem-rqmc-scrambled-net-variance-identity`, proof step 1.1. Its child contrast vectors satisfy `v_r · v_s = 1{r=s}`. The same-child expectation is therefore `1{r=s}`, and the distinct-child expectation is `-1{r=s}/(b-1)`. The prior concluding sentence dropped this factor and incorrectly identified the coordinate covariance with `Upsilon` for unequal contrast labels. It now states the covariance as `1{r=s} Upsilon` for a common parent at equal levels, with the already-proved zero cases covering other parents or levels. This leaves the theorem statement and consumers unchanged. The batch proof contract's derivation was regenerated from the repaired item with `tools/regen-contract-entries.mjs`. The item had no `verification.judge` record to remove.

Source cross-checks: Art B. Owen, “Monte Carlo Variance of Scrambled Net Quadrature,” §§6–7 and Theorem 3, printed pp. 1902–1904, <https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf>. Theorem 3 gives the `(0,m,s)`-net variance bound with factor `(b/(b-1))^min(s-1,m)`. Art B. Owen, “Local Antithetic Sampling with Scrambled Nets,” §5.1, Lemmas 2–3 and Theorem 3, PDF pp. 20–22, <https://artowen.su.domains/reports/localanti.pdf>, gives the smooth-integrand coefficient and `O(n^-3 (log n)^(d-1))` variance route under bounded gain and net-quality hypotheses. The equal-label factor above also follows directly from the finite child-vector dot product in the repaired proof.

Validation for the repaired item: reflow reported unchanged; precheck passed (1 checked, 0 failing); strict proof-contract check passed (0 errors, 0 warnings); final proof-layout check found 0 defects across 4 steps.

## Page verdicts

- `randomized-quasi-monte-carlo-and-replicates` — **Pass.** Its summary states the fixed-target interpretation of replicate uncertainty, the `R`-limit caveat, the two variance rates, and their relevant smoothness/net conditions without asserting a point-count CLT or finite-sample coverage guarantee.
- `randomized-quasi-monte-carlo-and-replicates-examples` — **Pass.** Its summary accurately describes the examples and explicitly states the AC assumption used for the Student `t_1` calibration.

## Uneditable defects and blocker

No uneditable mathematical defects remain. There is no mathematical blocker to this reader report. The autopilot status command returned its last report rather than recomputing live state because importing `tools/step6-finalize.mjs` failed; I therefore make no claim about run transitions beyond the dispatch and status output available here.
