---
page: semi-lagrangian-characteristic-transport
title: "Semi-Lagrangian characteristic transport"
status: draft
items:
  - def-semilagrangian-periodic-grid-and-interpolant
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - lem-semilagrangian-transverse-first-hit-error
  - alg-semilagrangian-backtracking-on-periodic-grid
  - lem-periodic-tensor-interpolant-is-convex-and-linf-contracting
  - lem-periodic-characteristic-map-is-orientation-preserving
  - lem-periodic-tensor-interpolation-hessian-error
  - lem-euler-backward-characteristic-foot-error
  - lem-periodic-flow-departure-cells-have-positive-finite-volume
  - def-characteristic-cell-overlap-remapping
  - thm-periodic-semilagrangian-global-error-from-local-defects
  - thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity
examples: []
---

This page develops periodic semi-Lagrangian transport for the scalar equation $u_t+b\cdot\nabla u=0$. Its concrete scheme uses explicit Euler backtracking and tensor-product multilinear interpolation. Convex interpolation weights give sup-norm stability for arbitrary foot displacement, while the proved local foot and interpolation defects yield a separate finite-time error bound. The bound requires both time and spatial refinement; the lack of an advective CFL condition does not remove the sufficient consistency condition $h^2/\Delta t\to0$.

The conservative density branch uses characteristic departure cells, exact overlap volumes, and the flow volume factor. This Lebesgue-volume branch assumes Countable Choice and uses finite measurable source and target partitions with positive cell volumes. Pointwise interpolation and overlap remapping are separate schemes, and the former is not asserted to conserve mass. The event item records the local error for a transverse first-hit boundary bracket only; this page makes no full global error claim for a nonperiodic boundary branch. Higher-order interpolation needs its own actual operator bound and defect estimate.
