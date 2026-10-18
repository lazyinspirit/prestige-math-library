---
page: well-balanced-balance-laws-and-wet-dry-fronts
title: Well-balanced balance laws and wet/dry fronts
status: published
items:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - lem-pe05-strong-l1-limit-preserves-dry-admissibility
  - prop-pe05-shallow-water-admissible-state-set-is-convex
  - lem-pe05-hll-depth-flux-decomposition
  - thm-pe05-hydrostatic-reconstruction-is-well-balanced
  - lem-pe05-source-quadrature-consistency
  - lem-pe05-discrete-weak-identity-with-source
  - lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1
  - lem-pe05-hll-dry-face-direction-and-zero-flux
  - thm-pe05-strong-limit-satisfies-smooth-bed-balance-law
  - thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility
examples: []
---

## Objective

This page defines the one-dimensional shallow-water balance law with a dry-state convention and the first-order hydrostatic HLL reconstruction. It proves exact rest-state preservation, water conservation, nonnegative depth, and preservation of the admissible dry momentum convention under the face-specific CFL bound. For a smooth stationary bed, it proves source-quadrature consistency and a conditional strong-limit weak formulation.

The weak-limit theorem assumes strong local $L^1$ convergence of conserved states and primitive velocities, local uniform depth/velocity bounds through the initial layer, convergence of the initial reconstruction, and the explicitly proved topography-source limit. A local lemma proves that both bulk and initial strong limits remain in $K$, so $F(U)$ is defined in the weak formulation. The velocity hypothesis matters because the assigned wave-speed rule uses $m/h$ on wet states. The theorem neither proves compactness nor an entropy inequality. Bed steps are allowed in the discrete flux definition, but a continuum path product across a discontinuity and any associated weak-limit theorem are outside this page. No fully discrete entropy or stiff-relaxation/AP claim is made.
