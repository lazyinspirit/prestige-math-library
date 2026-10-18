---
page: mixed-hdiv-fluxes-and-darcy-discretization-examples
title: "Mixed H(div) fluxes, Darcy flow and local conservation — Examples"
status: published
examples:
  - ex-na-primal-p1-flux-is-not-locally-conservative
  - ex-na-constant-flux-reference-triangle
  - ex-na-checkerboard-permeability-contrast
  - ex-na-two-triangle-hybrid-static-condensation
items: []
---

The examples compute the facet fluxes of a constant Darcy solution on the reference triangle; show that a continuous P1 pressure can produce a discontinuous-normal, non-H(div) primal flux; substitute checkerboard coefficients into the explicit permeability-contrast constants; and solve the two-cell hybrid equations, including the mean-pressure gauge and the condensed skeleton nullspace. The mesh drawings label orientations only; each finite argument computes its coordinates, flux moments, coefficient bounds and equations directly.
