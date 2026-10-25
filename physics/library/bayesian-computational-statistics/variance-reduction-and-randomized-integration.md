---
page: variance-reduction-and-randomized-integration
title: Control variates, antithetics, and stratification
status: published
items:
  - def-control-variate-estimator
  - thm-control-variate-unbiasedness-and-optimal-coefficient
  - def-antithetic-randomized-sampling
  - lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance
  - thm-antithetic-variance-and-monotone-sufficiency
  - def-stratified-monte-carlo-estimator
  - thm-stratified-unbiasedness-variance-and-proportional-allocation
  - thm-same-sample-control-coefficient-remainder-is-op-one-over-n
  - thm-independent-pilot-control-variate-is-conditionally-unbiased
examples: []
---

This page develops unbiased fixed-coefficient control-variate estimators with known control means, with a scalar optimum for positive-variance controls and a vector optimum on positive-definite control subspaces; paired antithetic estimators with the exact covariance condition for improvement; and finite-stratum Monte Carlo estimators. The stratified comparison uses proportional allocation and the same total sample size. Same-sample regression coefficients can introduce bias; with fixed dimension, finite fourth moments and positive-definite population control covariance, their coefficient-times-control-mean remainder is of order $O_P(n^{-1})$. An integrable coefficient measurable from a pilot sigma-algebra independent of the production sample preserves conditional unbiasedness. No variance reduction is asserted without its stated comparator and hypotheses.
