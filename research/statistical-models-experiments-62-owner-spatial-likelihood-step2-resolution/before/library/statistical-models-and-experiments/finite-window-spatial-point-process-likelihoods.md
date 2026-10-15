---
page: finite-window-spatial-point-process-likelihoods
title: "Finite-window spatial likelihood"
status: draft
items:
  - lem-borel-product-of-second-countable-spaces
  - def-finite-window-spatial-observation
  - lem-finite-configuration-product-measurable
  - lem-finite-window-pair-count-is-measurable
  - lem-finite-product-measure-with-density
  - def-papangelou-conditional-intensity
  - def-finite-window-pseudolikelihood
  - def-finite-window-gibbs-density
  - lem-diffuse-finite-window-poisson-process-is-simple
  - thm-finite-window-spatial-poisson-likelihood
  - prop-homogeneous-poisson-window-mle
  - lem-finite-window-gibbs-density-ratio-is-papangelou
examples: []
---

For a bounded Borel observation window $W\subset\mathbb R^d$, this page fixes
the reference measure and boundary convention, then derives the spatial
Poisson density relative to unit-rate Poisson measure and its log likelihood.
The homogeneous rate example includes both positive-count and zero-count
boundaries. Finite-window Gibbs laws require an explicit support and a finite,
positive normalizer. Papangelou conditional intensity and pseudolikelihood are
defined with a fixed exposure convention; no generic pseudo-likelihood or
Gibbs asymptotic guarantee is claimed.
