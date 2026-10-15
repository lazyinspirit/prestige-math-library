---
page: gaussian-process-posterior-contraction
title: "Gaussian-process posterior contraction"
status: draft
items:
  - lem-tight-borel-gaussian-law-has-separable-support
  - lem-log-gaussian-density-supnorm-controls-local-likelihood-distances
  - lem-binary-regression-l2-controls-local-likelihood-distances
  - lem-fixed-design-gaussian-regression-controls-local-likelihood-distances
  - lem-gaussian-linear-and-quadratic-statistic-tail
  - lem-independent-observation-posterior-denominator-lower-bound
  - lem-independent-posterior-splitting-from-tests-and-sieve-tail
  - lem-fixed-design-gaussian-regression-exponential-tests
  - lem-nondegenerate-gaussian-small-ball-controls-log-radius
  - thm-gaussian-process-posterior-contraction
examples: []
---

## Objective

This page relates Banach-norm Gaussian prior concentration to posterior contraction in three separate experiments. It proves the log-Gaussian density and binary-link likelihood comparisons locally, and treats fixed-design Gaussian regression as an independent, non-identically distributed experiment. The concentration-function-to-sieve interface is an in-run dependency on the support-and-concentration page. The fixed-design unknown-scale branch also needs a local prior-mass check for the scale component; the assigned design does not state that check for the degenerate Gaussian-prior case, so that branch remains escalated until the owner resolves the scope.
