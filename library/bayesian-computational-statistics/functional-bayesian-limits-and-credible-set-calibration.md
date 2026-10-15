---
page: functional-bayesian-limits-and-credible-set-calibration
title: Functional BvM limits and credible-set calibration
status: draft
items:
  - def-multiscale-coefficient-space-m0w
  - def-sobolev-linear-functional-for-white-noise
  - def-type-s-and-h-multiscale-density-priors
  - lem-m0w-separable-and-projection-tails
  - lem-multiscale-primitive-map-to-continuous-cdfs
  - lem-random-posterior-quantiles-stabilize-under-bvm
  - lem-smooth-functional-extends-to-negative-sobolev-space
  - lem-type-s-h-prior-draws-are-l2-densities
  - lem-m0w-finite-projection-and-tail-bvm-criterion
  - thm-linear-functional-bvm-and-credible-coverage
  - thm-nonlinear-functional-bvm-and-credible-coverage
  - thm-projected-empirical-process-clt-in-m0w
  - lem-density-gaussian-bridge-is-borel-on-m0w
  - lem-density-bridge-norm-cdfs-are-continuous-and-strict
  - lem-finite-dirichlet-gamma-representation-and-bernstein-bound
  - thm-type-h-histogram-posterior-weak-bvm-in-m0w
  - lem-compact-wavelet-projection-kernel-and-commutator
  - lem-type-s-posterior-preliminary-contraction
  - thm-type-s-density-weak-bvm-on-m0w
  - thm-cdf-and-multiscale-credible-band-calibration-from-bvm
  - thm-multiscale-credible-band-holder-diameter
  - cor-type-s-h-density-credible-band-calibration
examples: []
---

## Objective

This page develops scalar functional BvM limits and credible-interval calibration in Gaussian white noise, including the nonlinear delta-method condition. It defines the multiscale coefficient space and the type-S and type-H density prior interfaces, then proves the source-specific density weak BvM theorems and their CDF and multiscale credible-band consequences, with the required sampling-process and Gaussian norm-quantile limits. It records the exact smoothness, positivity, topology, centering, and rate assumptions used in each result.

For type S, local quotient-likelihood contraction, wavelet composition and projection estimates, and posterior Laplace bounds prove the weak BvM under both approved coefficient-prior regimes. For type H, the Dirichlet posterior and normalized-Gamma concentration give a direct conjugate proof. The resulting empirical-center credible bands have asymptotically exact coverage; the stated additional coefficient smoothness and undersmoothing assumptions give the diameter bound.
