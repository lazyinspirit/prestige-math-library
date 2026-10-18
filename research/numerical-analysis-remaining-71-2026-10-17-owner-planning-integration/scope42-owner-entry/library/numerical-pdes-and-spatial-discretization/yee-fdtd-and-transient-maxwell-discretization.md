---
page: yee-fdtd-and-transient-maxwell-discretization
title: "Yee FDTD and transient Maxwell finite elements"
status: draft
items:
  - def-transient-maxwell-system-with-material-interfaces
  - lem-maxwell-rectangular-stokes-identity
  - def-maxwell-discrete-cochain-and-yee-grid
  - lem-maxwell-discrete-incidence-identities
  - lem-maxwell-yee-step-matrix-is-positive-definite
  - alg-maxwell-yee-leapfrog-update
  - thm-maxwell-yee-gauss-constraints-propagate
  - thm-maxwell-yee-strict-cfl-modified-energy
  - thm-maxwell-yee-cartesian-dispersion-and-cfl
  - lem-maxwell-periodic-yee-consistency
  - thm-maxwell-periodic-yee-smooth-solution-error
  - thm-maxwell-yee-midpoint-conductivity-energy-balance
  - def-maxwell-edge-fem-semidiscretization
  - lem-maxwell-finite-dimensional-ode-existence-uniqueness
  - thm-maxwell-edge-fem-energy-conservation
  - def-maxwell-edge-ritz-projection
  - lem-maxwell-edge-ritz-projection-well-defined
  - lem-maxwell-nedelec-smooth-interpolation-estimate
  - lem-maxwell-magnetic-compatible-initial-projection
  - thm-maxwell-edge-fem-smooth-solution-error
examples: []
requires:
  - hyperbolic-finite-difference-methods
  - parabolic-finite-element-methods
  - discrete-de-rham-complexes-and-edge-elements
---

This page defines real transient Maxwell fields with uniformly positive material tensors, source continuity, periodic or PEC boundaries, and transmission conventions for aligned material interfaces. Its Yee branch specifies oriented cochains, Hodge masses, leapfrog rows, exact incidence identities, constraint propagation, and the strict spectral CFL condition. The Cartesian Fourier calculation gives the exact finite-grid eigenvalue and distinguishes the strict stability region from its repeated-root endpoint. The consistency and error estimates are explicitly limited to smooth homogeneous periodic data; no Taylor estimate is extended across jumps or an unspecified boundary stencil.

The edge finite element branch defines the conforming Nedelec/RT0 semidiscretization, its finite-dimensional ODE and energy identity, and the curl-energy Ritz map. For the stated smooth mesh-aligned PEC data, canonical edge and face interpolation supplies the approximation rate. The full degree-two and degree-three cochain projections give divergence-compatible magnetic initialization without imposing a zero normal boundary trace; the initialization error is orthogonal to discrete curls in the magnetic weighted inner product. These local interfaces and the time-independent Ritz map yield the stated semidiscrete error estimate.

The incidence maps are summarized by the following diagram. The vertices, edges, faces, and cells are oriented primal cells; the arrows are the corresponding signed coboundary matrices. The two zero composites express boundary-of-boundary cancellation, proved algebraically in the incidence lemma. For the PEC convention, electric edges and volume-charge vertices are restricted as defined in the cochain item while all magnetic face fluxes, including boundary-normal fluxes, remain represented; no separate boundary surface-charge cochain is claimed. The diagram records the maps and their dimensions; no proof relies on a geometric picture.

```tikzcd
\mathbb{R}^{N_v} \arrow[r,"G"] & \mathbb{R}^{N_e} \arrow[r,"C"] & \mathbb{R}^{N_f} \arrow[r,"D"] & \mathbb{R}^{N_c}
```
