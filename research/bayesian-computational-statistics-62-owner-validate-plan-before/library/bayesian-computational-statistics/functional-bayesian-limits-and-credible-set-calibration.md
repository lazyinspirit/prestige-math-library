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
  - thm-cdf-and-multiscale-credible-band-calibration-from-bvm
  - thm-multiscale-credible-band-holder-diameter
examples: []
---

## Objective

This page develops scalar functional BvM limits and credible-interval calibration in Gaussian white noise, including the nonlinear delta-method condition. It defines the multiscale coefficient space and the type-S and type-H density prior interfaces, then proves CDF and multiscale credible-band consequences conditional on the relevant weak BvM and sampling-process limits. It records the exact smoothness, positivity, topology, centering, and rate assumptions used in each result.

The source-specific proof that the type-S and type-H density priors satisfy the multiscale BvM hypotheses is not asserted here. Its required local results and affected claims are recorded for owner reconciliation in the batch notes.
