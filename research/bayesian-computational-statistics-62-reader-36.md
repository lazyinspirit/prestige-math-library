# Step 3a reader report — batch 36

Run: `bayesian-computational-statistics-62`  
Role: reader  
Scope: batch `36` only

## Opened inventory

Opened the assigned A page [mcmc-clt-and-monte-carlo-standard-error](../library/bayesian-computational-statistics/mcmc-clt-and-monte-carlo-standard-error.md) and B page [mcmc-clt-and-monte-carlo-standard-error-examples](../library/bayesian-computational-statistics/mcmc-clt-and-monte-carlo-standard-error-examples.md), including their summaries and item/example inventories.

Opened all 43 A-page items in dependency order:

- Level 0: `def-flegal-jones-obm-batch-size-conditions`; `def-geometric-and-uniform-ergodicity-for-mcmc-clt`; `def-long-run-variance-for-stationary-markov-chain`; `def-mixing-coefficients-for-stationary-markov-chain`; `def-polynomial-ergodicity-with-integrable-rate-envelope`; `def-state-dependent-one-step-minorization`; `lem-square-integrable-markov-transition-conditional-expectation`; `lem-countably-generated-kernel-stable-sub-sigma-field`; `lem-gaussian-quadratic-form-centered-even-moment-bound`; `thm-summable-l-two-projections-give-stationary-clt`; `lem-finite-moment-moving-window-increments`; `lem-brownian-poisson-independent-clock-composition`; `lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds`.
- Level 1: `alg-overlapping-batch-means-mcse`; `lem-geometric-total-variation-rate-controls-strong-mixing`; `lem-measurable-observation-does-not-increase-mixing-coefficients`; `lem-stationary-chain-tv-convergence-implies-strong-mixing`; `lem-uniform-ergodicity-controls-uniform-mixing`; `lem-zero-long-run-variance-gives-degenerate-clt`; `thm-poisson-equation-martingale-decomposition-clt`; `lem-geometric-split-renewal-gives-integrable-hitting-time`; `lem-strong-mixing-quantile-covariance-bound`; `lem-two-sided-stationary-extension-preserves-rho-mixing`; `lem-gaussian-anchored-sum-density-moderate-deviation-bound`; `lem-geometrically-ergodic-chain-has-standard-borel-observation-factor`.
- Level 2: `lem-geometric-reversible-chain-rho-mixing`; `thm-rho-mixing-clt-for-square-integrable-sequences`; `lem-obm-consistency-from-strong-brownian-approximation`; `thm-bounded-summable-strong-mixing-clt`; `lem-geometric-strong-mixing-gives-lp-poisson-solution`; `lem-gaussian-anchored-conditional-quantile-coupling`.
- Level 3: `lem-harris-geometric-ergodicity-has-integrable-rate-envelope`; `thm-strong-mixing-clt-with-moment-conditions`; `thm-uniform-mixing-clt-for-square-integrable-sequences`; `lem-bounded-vector-log-cubed-gaussian-coupling`; `lem-geometric-markov-chain-has-adjacent-iid-split-tours`; `lem-heterogeneous-bounded-atom-vector-log-cubed-gaussian-coupling`.
- Level 4: `thm-mcmc-clt-sufficient-regimes`; `lem-zero-variance-geometric-markov-sums-have-strong-rate`; `lem-iid-finite-moment-vector-strong-approximation`; `lem-adjacent-iid-finite-moment-vector-strong-approximation`.
- Level 5: `thm-geometrically-ergodic-chain-strong-invariance-principle`.
- Level 6: `thm-overlapping-batch-means-strong-consistency`.

Opened all three B-page examples: `cex-sticky-reducible-chain-has-no-root-n-clt`; `ex-overlapping-batch-size-fails-a-source-condition`; `ex-poisson-equation-ar1-long-run-variance`.

For proof-critical checks, also opened the published/local suppliers `thm-martingale-central-limit-theorem`, `thm-markov-property-for-bounded-future-path-functionals`, `thm-chapman-kolmogorov-equations`, `cor-canonical-markov-chain-on-path-space`, `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `lem-phi-irreducible-chain-has-small-set`, and `lem-homogeneous-poisson-ordered-event-time-density`.

## Review result

No assigned item or page prose was edited. I found no confirmed defect requiring repair or escalation. In particular:

- The conditional-expectation, martingale, mixing, Poisson-equation, covariance, and zero-variance arguments preserve their stated hypotheses and variance conventions.
- The adjacent-iid tour and finite-moment coupling arguments retain the dependence, moment, and singular-covariance qualifications used downstream.
- The strong-invariance proof supplies its cycle, clock, and Brownian constructions locally and then identifies the variance by a separate stationary CLT; it does not infer variance from almost-sure approximation alone.
- The OBM reduction uses the exact estimator normalization and handles zero approximation variance. The final theorem's arbitrary-initial-law conclusion is routed through the stated strong approximation or zero-variance rate.

I checked Flegal and Jones, “Batch means and spectral variance estimators in Markov chain Monte Carlo,” [arXiv:0811.1729](https://arxiv.org/pdf/0811.1729), at Theorem 2 (PDF page 8), Assumption 2 (PDF page 5), and Corollary 1 (PDF page 9). The source states that both integer `b_n` and `n/b_n` are nondecreasing. With `b_n<n` eventually, these monotonicities force each eventual integer increment `b_(n+1)-b_n` to be zero, contradicting `b_n→∞`. The assigned definition and theorem state this correction explicitly, retain the numerical conditions, and use the locally proved Brownian-approximation reduction that does not require either monotonicity. The floor-power range is checked in the definition and is consistent with the source corollary's numerical range.

## Edits and evidence

None. No item was changed, so no proof-contract update, reflow, precheck, or proof-layout run was required.

## Defects not edited

None identified. The findings artifact for this batch has an empty `findings` array.

## Page verdicts

- `mcmc-clt-and-monte-carlo-standard-error` (A): pass; the page summary accurately describes the assigned supplier chain and final theorem, with no confirmed prose or mathematical defect.
- `mcmc-clt-and-monte-carlo-standard-error-examples` (B): pass; the three example summaries match their constructions and limitations, with no confirmed prose or mathematical defect.

## Blocker and coverage note

No blocker. All assigned pages and items were opened. The manifest contains 122 distinct direct dependencies outside this batch; I opened the suppliers listed above and checked other dependencies where they were needed to verify a substantive inference, but I did not perform a separate full audit of every item in that external dependency closure.
