---
page: runge-kutta-methods-and-order
title: Runge–Kutta Methods and Order
status: published
items:
  - lem-chebyshev-rkc-bounds-and-endpoint-derivatives
  - def-explicit-runge-kutta-tableau-and-stage-map
  - alg-rkc1-chebyshev
  - alg-rkc2-linear-chebyshev
  - alg-rkc2-nonlinear
  - def-euler-midpoint-rk4-tableaus
  - prop-explicit-rk-order-conditions-through-four
  - alg-ssprk33
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - prop-rkc-stability-intervals-and-stage-degree
  - lem-rkc-chebyshev-stage-perturbation-amplification
  - prop-ssprk33-third-order-and-convex-preservation
  - thm-nonlinear-rkc2-order-two-and-global-error
examples: []
---

## Summary

An explicit Runge–Kutta tableau defines ordered stage evaluations and a one-step output, with explicit domain and evaluation-failure status. The page derives sufficient order conditions through order four by matching complete stage expansions with the exact ODE flow, then verifies forward Euler, explicit midpoint and classical RK4, including their scalar stability polynomials. SSPRK(3,3) is treated separately: its third-order local order is proved from the tableau, while invariant-set and convex-functional preservation require forward-Euler preservation at the actual stage start times.

The stabilized methods are the undamped first-order RKC and the linear and nonlinear second-order RKC recurrences. The page proves the Chebyshev bounds and endpoint derivatives used by their stability polynomials, gives exact first-order and certified second-order negative-real intervals, and derives Euclidean nonexpansion only for self-adjoint nonpositive matrices. A separate stage-perturbation bound concerns a deterministic additive-error model. The nonlinear RKC2 result proves fixed-stage order two and a conditional fixed-time global bound under a common compact tube and state-Lipschitz hypotheses. It makes no uniform-in-stage, nonlinear-stability, positivity, or nonnormal matrix-growth claim.
