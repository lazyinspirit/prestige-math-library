---
page: compressible-viscous-flow-and-entropy-stable-fluxes
title: "Compressible viscous flow and entropy-stable viscous fluxes"
status: draft
items:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-admissible-state-set-open-convex
  - lem-compressible-ideal-gas-entropy-pair-and-variables
  - def-ideal-gas-entropy-conservative-pair-flux
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - lem-ideal-gas-entropy-conservative-flux-properties
  - lem-compressible-viscous-smooth-entropy-identity
  - def-periodic-sbp-compressible-viscous-scheme
  - def-orthogonal-fv-compressible-viscous-scheme
  - thm-periodic-sbp-compressible-viscous-conservation-and-entropy
  - lem-orthogonal-fv-compressible-viscous-flux-consistency
  - thm-orthogonal-fv-compressible-viscous-entropy-dissipation
  - alg-positive-tube-forward-euler-for-compressible-sbp
  - lem-positive-tube-forward-euler-loop-terminates
  - thm-fixed-mesh-forward-euler-error-for-compressible-sbp
examples: []
---

The page defines the positive ideal-gas state domain, derives the strictly convex mathematical entropy and its entropy variables, and factors the Newtonian–Fourier viscous operator into symmetric positive-semidefinite blocks. For smooth positive states it proves the continuous entropy identity. Its selected multidimensional discretization is a periodic diagonal-norm SBP semidiscretization with an explicit symmetric entropy-conservative Euler flux; weighted mass, momentum, and energy are conserved while total mathematical entropy dissipates by the nodal viscous quadratic form. A one-dimensional orthogonal finite-volume viscous branch has an exact face entropy budget and a local second-order face-flux consistency estimate. A guarded forward-Euler loop records tube exits; on a fixed grid, a compact positive-state margin gives conditional first-order time error. The constant may depend on the grid.
