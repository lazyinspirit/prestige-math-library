---
page: variance-reduction-and-randomized-integration
title: Control variates, antithetics, and stratification
status: draft
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

This page develops unbiased fixed-coefficient control-variate estimators and their scalar and vector variance minimizers, paired antithetic estimators with the exact covariance condition for improvement, and finite-stratum Monte Carlo estimators. The stratified comparison uses proportional allocation and the same total sample size. Same-sample regression coefficients can introduce bias; under fixed dimension and finite fourth moments, their coefficient-times-control-mean remainder is of order $O_P(n^{-1})$. An independently estimated pilot coefficient preserves conditional unbiasedness. No variance reduction is asserted without its stated comparator and hypotheses.
