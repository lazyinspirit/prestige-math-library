---
page: gaussian-process-support-and-concentration
title: Banach Gaussian priors, RKHS support, and concentration
status: draft
items:
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - lem-borel-map-into-separable-banach-is-strongly-measurable
  - lem-separable-banach-has-countable-norming-family
  - thm-finite-dimensional-gaussian-isoperimetric-expansion
  - thm-standard-gaussian-log-sobolev-inequality
  - lem-countable-norming-family-determines-borel-laws
  - thm-standard-gaussian-lipschitz-concentration
  - lem-uncorrelated-joint-banach-gaussians-are-independent
  - thm-fernique-integrability-for-separable-banach-gaussian-law
  - def-banach-gaussian-covariance-operator-and-rkhs
  - thm-borell-concentration-for-separable-banach-gaussian-law
  - thm-banach-gaussian-covariance-rkhs-is-well-defined
  - thm-cameron-martin-translation-for-separable-banach-gaussian-law
  - lem-banach-gaussian-rkhs-unit-ball-is-compact
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - def-gaussian-prior-concentration-function
  - thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law
  - thm-gaussian-concentration-sieve-bounds
examples: []
---


This page develops centered Borel Gaussian random elements in real separable
Banach spaces. It distinguishes a Banach-valued prior from a Gaussian process
specified only by finite-dimensional cylinder laws, constructs its covariance
RKHS, proves the Cameron–Martin translation and support results, and gives
Fernique and norm-concentration bounds. The concentration function uses the
full squared RKHS norm. The source sieve bounds require the Banach Gaussian
isoperimetric expansion theorem; the sharp finite-dimensional inequality and its
Banach reduction are proved locally. These prior bounds alone do not imply posterior
contraction without a separate statistical-distance comparison.
