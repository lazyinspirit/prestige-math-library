---
page: hyperbolic-finite-difference-methods-examples
title: "Hyperbolic finite-difference methods — Examples"
status: published
items: []
examples:
  - ex-wave-cfl-endpoint-and-energy-breakdown
  - ex-upwind-versus-downwind-advection
  - ex-centered-advection-consistent-but-unstable
  - ex-grid-fourier-stability-needs-a-common-space-lift
---

These examples compute the upwind and downwind multipliers on a four-point periodic grid, then use the mode $z=i$ across a fixed-period centered-advection refinement to show unbounded finite-time powers at $ak/h=1/2$ despite consistency on each fixed smooth solution. They also isolate the leapfrog Nyquist double root at the CFL endpoint. Beyond the wave CFL threshold, the same modified quadratic form takes both positive and negative values. The final example explains why grid-norm Fourier stability on varying finite-dimensional spaces is not itself a common-space Lax-equivalence premise.

