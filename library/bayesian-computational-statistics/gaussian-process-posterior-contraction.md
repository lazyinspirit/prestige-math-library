---
page: gaussian-process-posterior-contraction
title: Gaussian-process posterior contraction
status: published
items:
  - lem-tight-borel-gaussian-law-has-separable-support
  - lem-binary-regression-l2-controls-local-likelihood-distances
  - lem-fixed-design-gaussian-regression-controls-local-likelihood-distances
  - lem-gaussian-linear-and-quadratic-statistic-tail
  - lem-independent-observation-posterior-denominator-lower-bound
  - lem-independent-posterior-splitting-from-tests-and-sieve-tail
  - lem-nondegenerate-gaussian-small-ball-controls-log-radius
  - lem-log-gaussian-density-supnorm-controls-local-likelihood-distances
  - lem-fixed-design-gaussian-regression-exponential-tests
  - thm-gaussian-process-posterior-contraction
examples: []
---


## Objective

This page proves posterior contraction for three separate experiments using Gaussian prior concentration, local likelihood comparisons, exponential tests and a posterior denominator bound. The log-Gaussian density and binary-regression branches retain the stated concentration rate. The fixed-design Gaussian regression branch includes an independent unknown scale with a lower-bounded density on a fixed positive compact interval.

For every allowed scale prior, its proved rate is $\rho_n=\max\{\epsilon_n,\sqrt{\log n/n}\}$. It retains the sharper $\epsilon_n$ rate for nonzero Gaussian laws by a nonzero-functional small-ball argument. For the zero Gaussian law it retains that sharper rate when the scale density is locally bounded above near the truth, using a separate parametric likelihood proof. The explicit spiky-prior counterexample on the companion page explains why the unrestricted sharper rate would be false. Generic concentration bounds are not themselves posterior theorems; the three model-specific sampling and measurability hypotheses remain essential.
