---
page: mixed-hdiv-fluxes-and-darcy-discretization
title: "Mixed H(div) fluxes, Darcy flow and local conservation"
status: draft
items:
  - def-na-contravariant-piola-map
  - def-na-hdiv-space
  - lem-na-l2-zero-mean-hilbert
  - lem-na-smooth-neighborhood-dense-in-h1-simplex
  - lem-na-hdiv-weak-normal-trace
  - lem-na-piola-divergence-and-flux-identities
  - def-na-h0div-space
  - def-na-simplicial-mesh-rt-bdm-spaces
  - lem-na-h0div-div-zero-mean
  - lem-na-h1-zero-boundary-is-zero-normal-hdiv
  - lem-na-hdiv-is-hilbert-and-h0div-closed
  - def-na-neumann-darcy-mixed-problem
  - lem-na-cell-average-l2-projection
  - lem-na-piola-preserves-rt-bdm-spaces
  - lem-na-rt0-p0-kernel-is-divergencefree
  - lem-na-simplex-h1-facet-trace-bound
  - def-na-hybridized-rt0-darcy-system
  - lem-na-h1-interior-facet-traces-agree
  - lem-na-rt0-unisolvence-and-global-conformity
  - thm-na-darcy-mixed-wellposedness
  - def-na-rt0-h1-interpolation
  - thm-na-rt0-p0-local-mass-conservation
  - lem-na-rt0-h1-interpolation-bounded-and-commuting
  - thm-na-rt0-p0-bounded-divergence-lift-and-infsup
  - thm-na-rt0-bounded-commuting-projection
  - thm-na-rt0-p0-darcy-error-estimate
  - thm-na-rt0-hybridization-equivalence-static-condensation
examples: []
---

This page develops real $H(\operatorname{div})$ fluxes with the Green-duality normal trace, then defines Raviart–Thomas and Brezzi–Douglas–Marini polynomial families on conforming affine simplices. The canonical RT0 facet interpolation is defined only for $H^1$ inputs, where the trace moments are bounded. For arbitrary zero-normal $H(\operatorname{div})$ fields, the bounded commuting projection is constructed from the stable discrete divergence lift and an $L^2$ projection onto the finite-dimensional divergence-free kernel; no rough-field facet moment is used.

For a bounded connected Lipschitz polyhedral domain in dimension two or three, the page fixes the no-flow Darcy sign convention, the zero-mean pressure gauge, and measurable uniformly positive symmetric permeability. It proves continuous and RT0/P0 solvability, a mesh-uniform divergence lift, a bounded commuting projection, an explicit mixed error estimate with its permeability-contrast dependence, and exact cellwise mass balance with normal continuity.

The hybrid system uses one constant multiplier on each interior facet. It is equivalent to the conforming mixed method after quotienting the common pressure/multiplier shift, and local flux-pressure blocks can be eliminated to a facet system with only that gauge null direction. One-cell meshes are handled separately because their discrete flux and mean-zero pressure spaces vanish. The four finite examples are on the companion page.
