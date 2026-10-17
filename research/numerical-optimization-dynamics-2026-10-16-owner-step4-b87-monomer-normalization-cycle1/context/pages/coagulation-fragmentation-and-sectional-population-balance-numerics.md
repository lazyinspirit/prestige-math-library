---
page: coagulation-fragmentation-and-sectional-population-balance-numerics
title: Coagulation Fragmentation and Sectional Population Balance Numerics
status: draft
items:
  - def-bounded-lipschitz-discrepancy-for-measures
  - def-conservative-fixed-pivot-redistribution
  - def-finite-discrete-coagulation-fragmentation-system
  - def-weighted-total-variation-space-for-population-measures
  - lem-convergent-power-series-termwise-differentiation
  - alg-finite-sectional-coagulation-fragmentation-balance
  - def-continuous-size-coagulation-fragmentation-weak-model
  - lem-bounded-lipschitz-discrepancy-dominated-by-weighted-total-variation
  - lem-finite-coagulation-fragmentation-event-moments
  - lem-fixed-pivot-barycentric-identities
  - lem-rooted-tree-generating-function-series
  - lem-weighted-total-variation-space-is-complete
  - alg-finite-sectional-forward-euler-positivity-cfl
  - def-infinite-fixed-pivot-sectional-dynamics
  - lem-continuous-coagulation-operator-weighted-total-variation-bound
  - lem-continuous-fragmentation-operator-weighted-total-variation-bound
  - lem-finite-sectional-vector-field-locally-lipschitz
  - thm-finite-sectional-positivity-and-mass-reservoir-conservation
  - thm-product-kernel-pre-gelation-second-moment-blowup
  - lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz
  - thm-finite-sectional-forward-euler-positivity-and-conservation
  - thm-finite-sectional-global-ode-and-moment-bounds
  - thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability
  - lem-continuous-coagulation-fragmentation-local-positive-wellposedness
  - lem-fixed-pivot-coagulation-fragmentation-quadrature-error
  - thm-finite-sectional-forward-euler-global-first-order-error
  - thm-continuous-coagulation-fragmentation-moment-bounds
  - lem-second-moment-controls-tail-mass-and-number
  - thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness
  - thm-continuous-coagulation-fragmentation-bounded-lipschitz-stability
  - thm-infinite-fixed-pivot-sectional-grid-error
  - lem-cutoff-overflow-return-error-bound
  - thm-sectional-semiflow-cutoff-error-budget
  - thm-sectional-forward-euler-total-error-budget
examples: []
---

## Summary

This page defines finite discrete coagulation-fragmentation events, conservative fixed-pivot redistribution, and a reported overflow-mass reservoir. It proves event-level mass identities, positivity for a finite sectional ODE and its forward-Euler step under an explicit loss-rate CFL, global finite-dimensional well-posedness, and fixed-grid first-order time convergence.

For bounded Lipschitz kernels and finite initial weighted moments, it develops a measure-valued weak model with local and global well-posedness, number/mass/second-moment estimates, bounded-Lipschitz stability, and an explicit fixed-pivot quadrature argument. An auxiliary unbounded pivot grid separates grid error from the finite-cutoff error; the reservoir is diagnostic and does not model later fragmentation return. The final budget separates time, grid, and cutoff errors.

The continuous global claims require bounded kernels and the stated daughter-count and mass normalizations. The product-kernel example proves pre-gelation second-moment blow-up; no post-gelation mass-loss theorem is proved here. Finite-grid mass conservation does not imply a cutoff-independent continuum moment bound for superlinear kernels.
