---
page: reaction-diffusion-invariants-and-pattern-discretization
title: Reaction-diffusion systems, invariants and pattern computation
status: published
items:
  - def-reaction-vector-field-and-quasipositivity
  - def-periodic-reaction-diffusion-grid
  - def-reaction-invariant-rectangle
  - def-stoichiometric-mass-invariant
  - def-semilinear-reaction-diffusion-system
  - def-fv-tpfa-no-flux-diffusion-specialization
  - thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
  - lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass
  - def-cell-centered-rectangular-no-flux-tpfa-grid
  - thm-reaction-diffusion-continuous-mass-balance
  - lem-periodic-fv-grid-spatial-consistency
  - lem-periodic-fv-grid-reaction-diffusion-commutator-bound
  - prop-two-species-continuous-and-discrete-turing-criterion
  - thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass
  - alg-exact-lie-reaction-diffusion-step
  - alg-euler-reaction-lie-diffusion-step
  - thm-exact-lie-step-preserves-invariant-rectangle-and-mass
  - thm-euler-lie-step-preserves-invariant-rectangle-and-mass
  - thm-periodic-reaction-diffusion-lie-error-estimate
  - thm-cell-centered-no-flux-reaction-diffusion-lie-error
examples: []
---

This page defines locally Lipschitz reaction fields, inward invariant rectangles, stoichiometric conservation and dissipation, continuous semilinear systems, and the periodic centered and no-flux TPFA diffusion operators used here. It proves continuous mass balance on boxes and, under its explicit $\mathrm{AC}_\omega$ branch, bounded piecewise $C^1$ domains; reaction and diffusion invariance, exact and bounded Euler reaction-then-diffusion split invariants, two-species continuous and discrete Turing mode tests, and mesh-uniform first-order Lie error bounds for smooth solutions on periodic grids and on rectangular no-flux TPFA grids with even $C^4$ boundary compatibility.

The finite-volume result is limited to two-point flux diffusion on the supplied admissible mesh with homogeneous no-flux boundaries. The convergence estimates are proved only for the stated periodic and rectangular Cartesian grids under their smoothness assumptions. Cross-diffusion needs a separate entropy or coercivity argument; componentwise maximum principles do not establish it. Consistent-mass P1 diffusion can fail nodal positivity, as the companion counterexample shows. A continuous unstable Turing band need not contain a discrete grid eigenvalue.
