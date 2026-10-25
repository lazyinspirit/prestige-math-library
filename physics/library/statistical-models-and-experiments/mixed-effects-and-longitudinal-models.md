---
page: mixed-effects-and-longitudinal-models
title: "Mixed effects and longitudinal models"
status: published
items:
  - lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-error-contrast-matrix
  - def-known-covariance-generalized-least-squares-estimator
  - def-linear-mixed-model
  - def-gaussian-linear-mixed-model
  - def-longitudinal-missingness-mechanisms
  - lem-error-contrast-matrix-exists
  - lem-gls-information-matrix-is-positive-definite
  - lem-marginal-covariance-of-linear-mixed-model
  - lem-reml-error-contrast-covariance-is-positive-definite
  - lem-gaussian-error-contrast-is-multivariate-normal
  - thm-gaussian-conditional-law-of-random-effects
  - thm-variance-component-identifiability-iff-covariance-map-injective
  - def-restricted-maximum-likelihood-error-contrasts
  - thm-known-covariance-gls-is-blue
  - lem-reml-error-contrast-basis-change-is-parameter-free
  - thm-known-covariance-blup-for-random-effects
examples: []
---

## Objective

Develop the finite-dimensional linear mixed model and its longitudinal interpretation with explicit subject, visit, and observation-pattern roles. The general covariance identity uses only finite second moments and independence. Separate results add known-covariance GLS, a Gaussian conditional-law branch, moment-only BLUP, error-contrast REML, and a precise covariance-map criterion for Gaussian variance-component identifiability.

## Scope

The Gaussian branch explicitly carries the Axiom of Choice required by the current multivariate-normal supplier. Local results prove the Gaussian law of an error contrast and supply the nondegenerate Gaussian density formula. The conditional formula allows singular latent covariance but requires positive-definite marginal observation covariance. The known-covariance GLS and BLUP results are moment-only; plug-in variance-component estimates do not inherit their exact covariance guarantees. An observation pattern is modeled separately from the complete-data response law: the mixed-model covariance equations imply no missingness or ignorability assumption. Error contrasts use columns of a matrix $K\in\mathbb R^{n\times(n-p)}$ so $K^TY$ is defined and annihilates the fixed design; a basis change multiplies the likelihood by a parameter-independent factor.
