---
page: bootstrap-failure-and-subsampling
title: Bootstrap failure, m-out-of-n methods, and subsampling
status: published
items:
  - def-m-out-of-n-bootstrap-and-subsampling
  - lem-uniform-cdf-order-and-quantile-coverage
  - lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform
  - lem-bernoulli-root-laws-are-uniformly-weak-close
  - thm-ordinary-bootstrap-fails-for-uniform-endpoint
  - thm-m-out-of-n-resampling-valid-for-uniform-endpoint
  - thm-uniform-subsampling-coverage-under-root-law-control
  - thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals
examples: []
---

This page separates the resampling algorithms from their validity claims. It defines m-out-of-n resampling with replacement and subsampling without replacement, using the actual m-root. Complete proofs give a support-endpoint failure of the ordinary bootstrap and show how both smaller-resample methods recover that endpoint's limiting root law. A quantile lemma and a uniform coverage theorem state the root-law and feasible-CDF controls that inference needs; the regime m→∞ and m/n→0 alone does not imply coverage. A second failure result treats the absolute-mean boundary and a squared-mean functional with zero first derivative. Its conditional empirical-bootstrap CLT supplier on the preceding IID-bootstrap page has been inspected; the normal-sample specialization uses the supplier's exact centering, scale, variance, and AC hypotheses. Extrapolation is not asserted without a source-specific regular expansion.
