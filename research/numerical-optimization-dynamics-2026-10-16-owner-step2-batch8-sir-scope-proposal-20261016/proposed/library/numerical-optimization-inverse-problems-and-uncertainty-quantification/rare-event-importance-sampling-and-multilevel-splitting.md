---
page: rare-event-importance-sampling-and-multilevel-splitting
title: Rare event importance sampling and multilevel splitting
status: draft
items:
  - def-rare-event-efficiency-criteria
  - lem-standard-normal-mills-ratio
  - alg-cross-entropy-pilot-production
  - def-nested-rare-event-levels
  - def-finite-budget-stopped-event-kernel
  - lem-sir-bounded-potential-unnormalized-update-variance
  - thm-zero-variance-importance-sampling-proposal
  - thm-gaussian-tail-exponential-tilting
  - thm-cross-entropy-production-unbiased-given-pilot
  - lem-nested-level-probability-factorization
  - alg-independent-fixed-level-splitting
  - alg-fixed-level-sir-splitting
  - lem-finite-budget-stopped-normalizer
  - lem-stopped-kernel-discretization-bias
  - thm-independent-splitting-product-moments-and-work
  - thm-fixed-level-sir-estimator-unbiased
  - thm-fixed-level-sir-absolute-mse-bound
  - thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds
  - cex-sir-l2-bound-from-conditional-means-is-false
  - rem-sir-finite-particle-error-bound-scope
examples: []
---

This page separates rare-event proposal quality from the validity of a particular
estimator. It defines bounded-relative-error and logarithmic-efficiency criteria,
proves the event-conditioned zero-variance benchmark and the exact performance of
a Gaussian exponential tilt, and states what independent cross-entropy fitting
can guarantee conditional on a successful pilot and admissible production
proposal. It also records a positive-probability pilot failure example.

For nested events, the page defines conditional level laws and proves the
probability factorization. Independent fixed-level splitting has exact moments
and an explicit work convention. The full-resampling SIR construction uses
invariant mutations and proves normalizer unbiasedness. A separate martingale
argument proves an absolute $(L+1)/(4N)$ mean-square bound for bounded
potentials. A two-state counterexample refutes the proposed sharper bound based
only on squared conditional future means; the asymptotic SMC CLT variance result
does not repair that formula. A separate finite-particle relative MSE bound
uses actual conditional event-weight second moments under the random predictive
laws, includes the initial sampling factor, and asserts no uniform-in-rarity
efficiency without bounds on those additional constants.

A finite-budget stopped-status kernel distinguishes a truncated crossing event
from an exact-hitting oracle. Its event normalizer and truncation error are
proved, as is a total-variation perturbation bound for finite Feynman–Kac
horizons. No continuous-grid error rate is asserted without a separate
regularity or missed-crossing estimate.
