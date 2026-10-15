# Step 3a reader report — batch 40

Run: bayesian-computational-statistics-62  
Role: reader-40  
Coverage: batch 40 only

## Opened inventory

Assigned pages opened:

- library/bayesian-computational-statistics/mcmc-diagnostics-and-finite-run-limitations.md
- library/bayesian-computational-statistics/mcmc-diagnostics-and-finite-run-limitations-examples.md

Prerequisite pages opened for context:

- library/bayesian-computational-statistics/mcmc-clt-and-monte-carlo-standard-error.md
- library/bayesian-computational-statistics/adaptive-mcmc-convergence-and-limitations.md

Assigned items opened in dependency order:

- def-blom-rank-normalization-for-pooled-draws
- def-empirical-left-quantile-for-finite-draws
- def-standard-cauchy-law
- def-functional-specific-effective-sample-size
- alg-split-rhat-from-multiple-chains
- alg-multichain-effective-sample-size
- alg-rank-normalized-folded-split-rhat
- alg-bulk-effective-sample-size
- alg-tail-effective-sample-size
- alg-quantile-monte-carlo-standard-error
- ex-thinning-can-mask-sticky-mcmc-output
- ex-shared-funnel-region-missed-by-all-chains
- ex-cauchy-heavy-tail-and-location-shift-rhat
- ex-centered-eight-schools-low-tail-ess-and-thinning

Local dependency items opened at the relevant definition or statement sections:

- def-axiom-of-choice; def-countable-choice; def-standard-normal-and-normal-laws; lem-standard-normal-cdf-is-continuous-and-strictly-increasing; lem-standard-normal-cdf-quantiles-and-symmetry
- def-stationary-process-and-canonical-shift; def-moments-variance-and-covariance; def-invariant-and-stationary-distribution-for-a-markov-kernel; def-time-homogeneous-markov-chain-with-transition-kernel; def-transition-matrix-and-n-step-transition-probabilities
- prop-measure-monotonicity; cor-archimedean-reciprocal; thm-continuity-from-above-for-measures; def-real-numbers; def-complete-ordered-field; thm-reals-dedekind-ordered-field; thm-reals-cauchy-complete; thm-reals-ordered-field; cor-cauchy-reals-lub-complete
- def-lebesgue-measure-and-the-lebesgue-sigma-algebra; cor-continuous-functions-are-borel-measurable; thm-borel-sets-are-lebesgue-measurable; thm-lebesgue-measure-is-a-complete-measure; thm-algebra-of-continuous-functions; def-measure-with-density; thm-indefinite-integral-of-a-nonnegative-function-is-a-measure; thm-continuous-implies-integrable; thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
- thm-principal-inverse-tangent-calculus; def-principal-inverse-tangent; thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions; thm-monotone-convergence-for-the-integral; def-probability-measure; thm-additivity-over-subintervals; def-pi-via-first-positive-cosine-zero; thm-of-archimedean; prop-closure-properties-of-measurable-functions-used-by-the-integral
- thm-integration-against-a-density; prop-order-and-scalar-rules-for-the-nonnegative-integral; prop-the-nonnegative-integral-agrees-with-the-simple-integral; thm-lebesgue-measure-of-a-box-of-every-kind
- def-beta-distribution and its current-run supplier lem-beta-density-normalization; def-real-beta-integral; thm-real-beta-integral-convergence; thm-real-beta-gamma-identity; thm-real-gamma-euler-integral-convergence; def-improper-integral-at-a-finite-endpoint

The local Beta supplier proof was opened in full. The other dependency files were checked at the statements/definitions used by the assigned claims.

External source sections opened:

- Vehtari et al., [Rank-normalization, folding, and localization (paper PDF)](https://sites.stat.columbia.edu/gelman/research/published/Vehtari_etal_2020_rhat_ess.pdf): §3.1 split R-hat formula; §3.2, equations (10)–(13), multi-chain autocorrelation ESS and the finite cap; §4.1, equation (14), Blom scores; §4.3 tail/quantile indicators; §4.4, equation (20), the Beta quantile MCSE approximation; §5.2 centered eight-schools results.
- Vehtari et al., [author-maintained online appendix](https://avehtari.github.io/rhat_ess/rhat_ess.html#AppendixD), §2.2 and Appendix D: the long centered run reports 9,955 divergences and τ with R-hat 1.00, bulk ESS 1,880, tail ESS 426; the thinned run reports τ tail ESS 1,718 and a posterior-mean discrepancy exceeding three sigmas. The rendered appendix is headed Appendix D; the checked source Rmd labels the equivalent section Appendix C.
- NIST [DLMF §5.12](https://dlmf.nist.gov/5.12), equation 5.12.1 and its positive-real-part parameter condition, for the Euler Beta integral identity.

The batch manifest and proof-contract file were treated as evidence only.

## Review, edits, and validation

The split R-hat formula, the Geyer paired positive/monotone truncation, odd/even averaging, and S′ log10(S′) cap agree with Vehtari et al. The finite rank and quantile conventions have the stated domains, including tie handling. The two-state thinning calculation and finite funnel calculation check directly. The Cauchy second-moment comparison and the finite shifted-array R-hat calculations check directly. The eight-schools values are presented as source-reported simulation evidence, not theorems.

Two assigned items applied a generic complete-ordered-field Archimedean theorem to real numbers without establishing that the real field met its hypothesis:

1. def-standard-cauchy-law, Facts & Assumptions [F10]: the cited thm-of-archimedean only applies to a complete ordered field. I added def-real-numbers and cor-cauchy-reals-lub-complete as dependencies and made the real-field premise explicit in [F10]. The existing step 1.3 argument then applies.
2. alg-quantile-monte-carlo-standard-error, Definition step 3: the reciprocal Archimedean theorem also requires a complete ordered field. I added the same real-field dependencies and stated that premise before applying cor-archimedean-reciprocal.

I updated the batch 40 proof contract with the new Cauchy fact citations and refreshed its endpoint evidence; the quantile algorithm endpoint evidence now records the complete-real-field supplier path. Neither edited item had a verification.judge record to remove.

Validation results:

- def-standard-cauchy-law: reflowed; precheck passed, 1 checked and 0 failing.
- alg-quantile-monte-carlo-standard-error: reflow reported unchanged; precheck reported 0 checked and 0 failing, so this algorithm was not evaluated as a proof.
- Final proof-layout command on both changed items: 2 items, 4 steps, 0 defects.

## Uneditable findings

Batch 40’s alg-quantile-monte-carlo-standard-error depends on def-beta-distribution from current-run batch 6, whose proof depends on lem-beta-density-normalization. That batch 6 proof has three remaining gaps:

- Proof step 1.1 asserts that continuity gives Borel and Lebesgue measurability under Countable Choice without citing cor-continuous-functions-are-borel-measurable and thm-borel-sets-are-lebesgue-measurable. The MCT application also needs measurability of the truncated indicator products; its deps/facts do not cite prop-closure-properties-of-measurable-functions-used-by-the-integral. These sources or an explicit derivation are needed.
- Proof step 2.1 identifies the diagonal truncation limit on [1/m,1−1/m] with the improper Beta integral without connecting that exhaustion to the two endpoint limits in def-real-beta-integral. Split at 1/2 and use additivity plus the endpoint limits to close this.
- Facts & Assumptions [F3] says the cited gamma convergence theorem supplies strict positivity. Its statement supplies convergence for positive parameters, not positivity; add the elementary lower bound from the positive integrand on [1,2] or cite an explicit positivity result.

These are reported as nonfatal proof/citation obligations for the batch 6 supplier; reader-40 did not edit it.

## Page verdicts

- mcmc-diagnostics-and-finite-run-limitations (A page): not clear for closure. Its summary is accurate and the assigned local repair is complete, but its quantile MCSE item still reaches the unresolved batch 6 Beta normalization proof.
- mcmc-diagnostics-and-finite-run-limitations-examples (B page): pass. The finite examples check, and the centered eight-schools values are correctly treated as empirical source evidence.

## Blocker and coverage limits

The last disk-recomputed autopilot status was PAUSED (2026-10-15 12:06:59 UTC), with no dispatch in flight. It still showed batch 40’s reader artifact missing and run-wide blockers in batches 23 and 25 (3a-collect and 3a-split); those blockers are outside this assignment. No batch-40 mathematical blocker prevented writing this report.

Published dependencies were reviewed at the relevant statement/definition sections, not through every transitive proof closure. For the batch 6 Beta finding, I did not capture an immutable pre-reader fingerprint and cannot certify an exact historical byte hash, so observed_source is null in the findings artifact.
