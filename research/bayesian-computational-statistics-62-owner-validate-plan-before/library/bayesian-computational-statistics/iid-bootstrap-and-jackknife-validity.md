---
page: iid-bootstrap-and-jackknife-validity
title: IID bootstrap and jackknife for smooth statistics
status: draft
items:
  - def-iid-empirical-bootstrap-sample
  - lem-empirical-bootstrap-law-is-a-probability-measure
  - lem-finite-index-bootstrap-sample-is-conditionally-iid
  - lem-finite-bootstrap-cdf-supremum-is-measurable
  - lem-iid-sample-covariance-converges
  - thm-conditional-iid-bootstrap-clt-for-empirical-law
  - thm-iid-bootstrap-validity-for-smooth-statistics
  - thm-delete-one-jackknife-linearization-for-smooth-statistics
  - alg-lower-empirical-bootstrap-quantile
  - alg-delete-one-jackknife-acceleration
  - alg-percentile-bootstrap-interval
  - alg-basic-bootstrap-interval
  - alg-bias-corrected-bootstrap-interval
  - alg-bca-bootstrap-interval
  - alg-bootstrap-t-interval
examples: []
---

Prerequisite context is provided by [[resampling-algorithms-and-sampling-units]], the first- and second-order limits in [[delta-method-and-asymptotic-normality]], and confidence-set terminology in [[confidence-sets-pivots-and-test-inversion]]. Here the confidence-set page supplies terminology only; this page makes no interval-coverage claim.

This page fixes a finite-index definition of the IID empirical bootstrap, establishes measurability of the conditional CDF distance, and proves its projected conditional CLT. For Borel functions of a finite-dimensional IID sample mean, differentiability at the population mean yields first-order conditional bootstrap consistency with exact centering and $\sqrt n$ scaling. The delete-one jackknife theorem gives pseudovalue linearization and variance consistency when the function is $C^1$ near the mean. Percentile, basic, BC, BCa, and bootstrap-$t$ are specified as finite-sample algorithms. Their definitions alone assert no coverage or higher-order accuracy theorem.
