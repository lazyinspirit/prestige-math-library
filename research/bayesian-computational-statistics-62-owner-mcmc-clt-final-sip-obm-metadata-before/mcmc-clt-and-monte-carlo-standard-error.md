---
page: mcmc-clt-and-monte-carlo-standard-error
title: MCMC central limit theorems, MCSE, and long-run variance
status: draft
items:
  - def-flegal-jones-obm-batch-size-conditions
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-long-run-variance-for-stationary-markov-chain
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-polynomial-ergodicity-with-integrable-rate-envelope
  - def-state-dependent-one-step-minorization
  - lem-square-integrable-markov-transition-conditional-expectation
  - lem-countably-generated-kernel-stable-sub-sigma-field
  - lem-gaussian-quadratic-form-centered-even-moment-bound
  - thm-summable-l-two-projections-give-stationary-clt
  - lem-finite-moment-moving-window-increments
  - lem-brownian-poisson-independent-clock-composition
  - lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
  - alg-overlapping-batch-means-mcse
  - lem-geometric-total-variation-rate-controls-strong-mixing
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - lem-stationary-chain-tv-convergence-implies-strong-mixing
  - lem-uniform-ergodicity-controls-uniform-mixing
  - lem-zero-long-run-variance-gives-degenerate-clt
  - thm-geometrically-ergodic-chain-strong-invariance-principle
  - thm-poisson-equation-martingale-decomposition-clt
  - lem-geometric-split-renewal-gives-integrable-hitting-time
  - lem-strong-mixing-quantile-covariance-bound
  - lem-two-sided-stationary-extension-preserves-rho-mixing
  - lem-gaussian-anchored-sum-density-moderate-deviation-bound
  - lem-geometrically-ergodic-chain-has-standard-borel-observation-factor
  - lem-geometric-reversible-chain-rho-mixing
  - thm-rho-mixing-clt-for-square-integrable-sequences
  - lem-obm-consistency-from-strong-brownian-approximation
  - thm-bounded-summable-strong-mixing-clt
  - lem-geometric-strong-mixing-gives-lp-poisson-solution
  - lem-gaussian-anchored-conditional-quantile-coupling
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - thm-strong-mixing-clt-with-moment-conditions
  - thm-uniform-mixing-clt-for-square-integrable-sequences
  - lem-bounded-vector-log-cubed-gaussian-coupling
  - lem-geometric-markov-chain-has-adjacent-iid-split-tours
  - thm-mcmc-clt-sufficient-regimes
  - lem-zero-variance-geometric-markov-sums-have-strong-rate
  - lem-iid-finite-moment-vector-strong-approximation
  - thm-overlapping-batch-means-strong-consistency
examples: []
---

## Summary

This page defines covariance long-run variance, three stationary mixing coefficients, geometric and polynomial total-variation rates, one-step minorization, and the overlapping-batch-means estimator. It proves the kernel conditional-moment lemma, rate-to-mixing bounds, measurable-factor bounds, the degenerate zero-variance reduction, and the Poisson-equation martingale CLT with its covariance identity.

The six MCMC CLT regimes from Jones (2004) are proved locally with their moment, reversibility and rate-envelope hypotheses. Their suppliers prove the bounded and unbounded strong-mixing limits, the rho and uniform-mixing limits, the reversible geometric correlation bound and the integrable geometric envelope. The Flegal–Jones OBM contract retains every numerical batch-size condition and corrects the source's incompatible simultaneous monotonicity requirements for integer batches. Local Gaussian quadratic-form bounds and a pathwise Brownian-approximation comparison prove the OBM reduction, including zero approximation variance and the exact floor-power batch calculation. The full Markov-chain OBM theorem combines the positive-variance strong approximation with the separate zero-variance strong rate, applies under arbitrary initial laws, and identifies its covariance long-run variance through the stationary mixing CLT. A finite second moment alone is not presented as a CLT criterion, and covariance summability is not used to identify a CLT variance without a theorem.
