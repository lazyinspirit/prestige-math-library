---
page: adaptive-finite-element-methods
title: "Adaptive finite-element methods"
status: published
items:
  - cor-afem-constant-convection-weak-wellposedness
  - def-afem-local-moment-interpolant
  - def-afem-nvb-labelled-triangulation-family
  - def-afem-p1-residual-estimator-and-data-oscillation
  - lem-afem-vertex-patch-poincare
  - alg-dorfler-marking-and-conforming-nvb-refinement
  - def-afem-p1-approximation-class
  - lem-afem-convection-quasi-orthogonality-under-fine-mesh
  - lem-afem-nvb-shape-regularity-and-three-generation-properties
  - lem-afem-p1-residual-representation
  - thm-afem-local-moment-interpolation-estimates
  - lem-afem-common-refinement-overlay-and-cardinality
  - lem-afem-data-oscillation-reduction-under-marked-refinement
  - lem-afem-localized-galerkin-refinement-estimate
  - lem-afem-nvb-conforming-closure-and-cumulative-counting
  - thm-afem-p1-residual-reliability-and-local-efficiency
  - lem-afem-dorfler-marking-cardinality
  - lem-afem-residual-estimator-reduction
  - thm-afem-error-and-oscillation-contraction
  - thm-afem-p1-poisson-optimal-complexity
examples: []
---
The prerequisite page [[variational-crimes-and-strang-lemmas]] supplies the conforming variational framework. All functions and data are real-valued. This page fixes a bounded polygon in two dimensions, matching shape-regular affine triangles, continuous zero-boundary P1 spaces, exact integration, and exact Galerkin solves. It defines element residuals, outward normal-flux jumps, P0 cell-data oscillation, deterministic bulk marking, and budgeted conforming newest-vertex bisection (NVB).

The local moment interpolant and its patch, trace, and reproduction estimates support residual reliability. Cell and edge bubble tests give local efficiency and a marked correction lower bound up to data oscillation. The bulk sets remain the deterministic Dörfler marks; the refinement procedure requests three generations also on their original edge neighbors, supplying the adjacent-cell interior tests for the correction bound. This patch request has at most four times as many cells as the bulk union, and cumulative closure complexity includes that factor. Separate results prove NVB generation geometry, edge-label closure, cumulative refinement counts, common-overlay cardinality, localization of the Galerkin correction, and reduction of data oscillation and the residual estimator. Galerkin orthogonality gives exact energy decrease for the Laplacian; constant convection uses a distinct quasi-orthogonality branch with its explicit dual-pickup and fine-mesh condition.

The contraction result combines energy error, data oscillation, and (with a separate positive weight) the residual estimator. Optimal work complexity is proved only for P1 newest-vertex bisection for the Laplacian with data piecewise constant on the initial mesh and a declared approximation-class bound for $0<s\le 1/2$. The coefficient-dependent residual and projected edge-oscillation interface is definitional; this page proves no general coefficient-complexity theorem and makes no three-dimensional NVB claim.
