---
page: hyperbolic-finite-difference-methods
title: "Hyperbolic finite-difference methods"
status: published
items:
  - def-uniform-grid-and-difference-operators
  - def-periodic-one-way-advection-schemes
  - def-centered-leapfrog-wave-scheme
  - lem-dirichlet-grid-summation-by-parts
  - lem-dirichlet-grid-poincare-inequality
  - thm-smooth-advection-stencils-consistent
  - thm-dirichlet-leapfrog-discrete-energy
  - lem-periodic-advection-amplification-symbols
  - thm-periodic-centered-wave-amplification-and-endpoint
  - thm-periodic-advection-power-stability
  - thm-nearest-neighbor-cfl-domain-condition
examples: []
---

This page defines five scalar advection stencils on periodic or infinite uniform grids and the upwind inflow row on a finite interval. It proves smooth consistency orders, exact periodic Fourier power bounds, and the necessity of a nearest-neighbor domain-of-dependence CFL condition. A fixed-period centered-advection family is smooth-consistent but has no uniform finite-time power bound even with $ak/h=1/2$. For the centered leapfrog wave recurrence, the page proves the discrete Dirichlet summation identity, a conserved coercive energy for $0<ck/h<1$, and periodic amplification estimates with explicit treatment of the mean and repeated Nyquist modes; its start data are displacement and discrete initial velocity. Periodic Fourier bounds do not establish finite-boundary stability; smooth consistency does not imply convergence at discontinuities.

