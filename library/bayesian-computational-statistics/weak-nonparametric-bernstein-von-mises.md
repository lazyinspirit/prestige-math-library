---
page: weak-nonparametric-bernstein-von-mises
title: Weak nonparametric Bernstein–von Mises limits
status: draft
items:
  - def-negative-sobolev-space-for-white-noise
  - lem-wavelet-product-prior-is-l2-valued
  - lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
  - lem-product-prior-coordinate-posterior-law
  - lem-product-prior-posterior-second-moment-in-negative-sobolev-space
  - lem-finite-coordinate-posterior-total-variation-limit
  - lem-density-normal-laws-and-square-summable-gaussian-series
  - lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
  - cor-canonical-white-noise-law-is-tight-under-choice
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
  - cor-weak-posterior-convergence-in-negative-sobolev-space
  - cor-continuous-functionals-of-the-scaled-posterior-converge
  - lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent
examples: []
---

This page proves the product-prior weak Bernstein–von Mises limit in the Gaussian white-noise model. Countable choice supplies the $L^2$ completeness used for the prior and suffices for the scalar density-normal interface; the posterior kernel is a supplied model object, and the projection/tail proof uses no further choice axiom. White noise is the Borel Gaussian limit on the logarithmically weighted negative Sobolev space $H(\delta)$, $\delta>1/2$; it is not an $L^2$-valued law. The theorem assumes a regular wavelet basis, $\sigma_l=2^{-l(\alpha+1/2)}$ with $\alpha>0$, bounded normalized truth coefficients strictly inside the prior density's positive region, a bounded density with finite second moment, and continuity at each normalized true coefficient. Its local proof supplies the posterior second-moment estimate and finite-coordinate Gaussian limit, then controls the infinite-dimensional tail. The theorem concludes convergence in bounded-Lipschitz metric, not total variation. Under full AC, Prokhorov's theorem identifies that metric with the weak topology and the continuous-mapping corollary applies; these stronger choice-dependent consequences are separate from the core estimate.
