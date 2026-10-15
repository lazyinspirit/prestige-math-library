---
page: synthetic-likelihood-and-indirect-inference
title: "Synthetic likelihood and indirect inference"
status: draft
items:
  - def-synthetic-likelihood
  - def-binding-function-and-indirect-inference-target
  - lem-two-simulation-summary-covariance-is-singular-in-two-dimensions
  - thm-indirect-inference-target-exists-with-lexicographic-tie-break
  - alg-synthetic-likelihood-monte-carlo-estimation
  - rem-finite-simulation-synthetic-likelihood-is-a-random-approximation
examples: []
---

## Objective

For a measurable summary vector with finite second moments, this page defines its exact binding mean and covariance and the ideal Gaussian synthetic-likelihood density when the covariance is positive definite. It separates that density from the random finite-simulation plug-in and proves that a two-replicate covariance in two dimensions is singular. The page also defines a minimum-distance target on a Euclidean compact parameter set, with an existence proof and deterministic lexicographic tie rule.

Synthetic likelihood is a Gaussian approximation to the summary law; the finite plug-in may be unavailable when its covariance is not positive definite. Indirect-inference parameter recovery needs an explicit binding-map or full-summary-law identification contract. No exact likelihood equivalence, generic consistency, Bernstein–von Mises result, optimizer convergence, posterior calibration, or coverage conclusion is asserted. Numerical optimization and IID Monte Carlo prerequisites provide the computational setting, not unproved guarantees.
