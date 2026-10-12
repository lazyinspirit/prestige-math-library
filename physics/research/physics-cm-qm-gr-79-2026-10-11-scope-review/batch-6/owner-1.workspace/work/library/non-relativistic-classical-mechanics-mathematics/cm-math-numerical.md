---
page: cm-math-numerical
title: Symplectic Verlet and analytic backward error
status: draft
library: mathematics
items:
- lem-cm-roundoff-accumulation-in-one-step-schemes
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-splitting-hamiltonian-and-verlet-map
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- lem-cm-verlet-local-truncation-error-is-cubic
- lem-cm-holomorphic-map-calculus
- prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
- def-cm-analytic-splitting-data-and-exact-splitting-map
- thm-cm-verlet-finite-time-error-is-quadratic
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-difference-operator-and-domain-loss-bound
- def-cm-modified-log-coefficients-and-truncations
- lem-cm-binomial-pullback-family-and-its-log-are-derivations
- lem-cm-truncated-log-coefficient-bounds
- lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives
- lem-cm-symmetric-log-parity-removes-odd-coefficients
- lem-cm-optimal-truncation-gives-exponential-local-defect
- lem-cm-modified-energy-differs-by-order-two
- thm-cm-analytic-verlet-energy-on-exponential-times
- lem-cm-separate-roundoff-energy-accumulation
- rem-cm-scope-of-the-certified-verlet-estimates
examples: []
---

This page develops exact symmetric splitting in dimensionless canonical coordinates. Drift and kick preserve the canonical form, and velocity Verlet has cubic local and quadratic finite-time trajectory error on an explicit convex tube. Additive per-step state errors have their own accumulation bound.

For real analytic splitting data with a uniformly bounded holomorphic extension, the finite logarithm supplies Hamiltonian coefficient fields on a common retained complex neighbourhood. Symmetry removes the first correction; an optimal finite truncation gives an exponential local modified-flow defect and order-two modified energy. The energy theorem telescopes that defect on exponentially long times while the numerical iterates remain in the stated compact set. It establishes conditional energy control, with no exponential-time accuracy claim for the original trajectory.

The companion works out the oscillator invariant and checks analytic pendulum domains, including the separate perturbation contribution. All content is draft and awaits independent workflow review.
