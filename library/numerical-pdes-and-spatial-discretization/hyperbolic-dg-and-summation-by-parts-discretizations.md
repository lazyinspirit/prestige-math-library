---
page: hyperbolic-dg-and-summation-by-parts-discretizations
title: Hyperbolic DG and summation-by-parts methods
status: draft
requires:
  - finite-element-meshes-and-interpolation
  - invariant-domain-and-entropy-stable-conservative-schemes
  - runge-kutta-methods-and-order
items:
  - def-pe04-one-dimensional-interval-mesh-and-broken-polynomials
  - def-pe04-diagonal-norm-sbp-element-data
  - def-pe04-upwind-dg-transport-discretization
  - alg-pe04-first-order-upwind-forward-euler
  - def-pe04-cellwise-l2-projection
  - def-pe04-upwind-sbp-sat-transport-discretization
  - thm-pe04-upwind-dg-l2-energy-stability
  - def-pe04-flux-differencing-sbp-systems
  - lem-pe04-cellwise-l2-projection-exists-best-approximation
  - thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy
  - thm-pe04-upwind-sbp-sat-l2-energy-stability
  - thm-pe04-dg-smooth-solution-l2-error-bound
  - thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability
  - thm-pe04-ssprk33-first-order-upwind-entropy-preservation
examples: []
---

This page defines the upwind DG method for constant scalar transport on one-dimensional interval meshes and on matching affine simplicial meshes in dimensions at least two. It proves the semidiscrete L2 balance with interior jump dissipation and the signed inflow/outflow terms. The smooth-solution estimate is an explicit projection-trace residual bound; it does not assert an asymptotic mesh rate without a separate trace approximation estimate.

The SBP-SAT method uses a positive diagonal norm and exact derivative/face identities. The nonlinear flux-differencing method is defined only for affine elements with paired face quadrature nodes and symmetric directional entropy-conservative two-point fluxes. Its interior normal flux is that entropy-conservative flux minus a nonnegative multiple of the entropy-variable jump; its physical boundary flux must give a nonnegative boundary entropy contribution. It is conservative and semidiscretely entropy stable under those hypotheses. Curved metrics are outside this page.

The only fully discrete entropy statement is for the degree-zero scalar upwind operator: its forward-Euler map is a convex cell average under the stated face CFL, and SSPRK(3,3) transfers that exact bound with coefficient one. No fully discrete entropy, positivity, or nonlinear stability claim is made for the high-order flux-differencing SBP method.
