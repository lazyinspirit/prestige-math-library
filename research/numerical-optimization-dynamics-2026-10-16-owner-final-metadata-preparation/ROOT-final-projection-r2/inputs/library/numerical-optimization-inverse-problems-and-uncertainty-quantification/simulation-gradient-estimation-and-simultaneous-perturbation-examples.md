---
page: simulation-gradient-estimation-and-simultaneous-perturbation-examples
title: "Simulation gradient estimation and simultaneous perturbation — Examples"
status: draft
items: []
examples:
  - ex-moving-support-score-estimator-misses-boundary-term
  - ex-two-call-spsa-biological-simulator
  - ex-coupled-differences-reduce-variance
  - ex-gaussian-reparameterization-and-score-gradient
---

## Examples

These examples compare pathwise and score gradients in a Gaussian location model, show the missing boundary term for a moving support, compute the covariance benefit of common random numbers, and work through the two simulator calls in one biological-model SPSA step. The numerical outputs in the black-box example verify the estimator arithmetic only; they are not convergence or accuracy certificates for that model.
