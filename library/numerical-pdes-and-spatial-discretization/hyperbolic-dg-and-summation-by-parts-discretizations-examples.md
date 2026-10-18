---
page: hyperbolic-dg-and-summation-by-parts-discretizations-examples
title: Hyperbolic DG and summation-by-parts methods — Examples
status: published
requires:
  - hyperbolic-dg-and-summation-by-parts-discretizations
items: []
examples:
  - cex-pe04-underintegrated-burgers-collocation-entropy-growth
  - ex-pe04-central-versus-upwind-periodic-transport
  - ex-pe04-upwind-transport-with-inflow
  - ex-pe04-sbp-inflow-sat-energy-identity
---

These examples calculate the inflow energy supply for a one-cell upwind DG state, compare central and upwind periodic flux dissipation, and verify the sign of a two-node SBP inflow penalty. The underintegrated Burgers collocation example gives an exact positive quadratic-entropy rate despite satisfying the SBP matrix identity; it illustrates why nonlinear entropy stability needs the stated flux-differencing and quadrature conditions.
