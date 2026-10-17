---
page: barrier-and-primal-dual-interior-point-methods-examples
title: "Barrier and primal dual interior point methods — Examples"
status: published
requires:
  - barrier-and-primal-dual-interior-point-methods
items: []
examples:
  - ex-robust-least-squares-as-a-second-order-cone-program
  - ex-boundary-barrier-conditioning
  - ex-strict-versus-weak-semidefinite-feasibility
  - ex-resource-allocation-barrier-central-path
  - ex-lp-primal-dual-residual-and-gap
  - ex-small-semidefinite-relaxation-primal-dual-certificate
---

## Objective

These examples compute a resource-allocation central path and an LP primal-dual gap, exhibit Hessian growth near a boundary, distinguish strict feasibility from boundary feasibility and weak infeasibility, derive an SOCP formulation of robust least squares, and give an SDP relaxation with a matching primal-dual certificate. The weakly infeasible example has no feasible matrix even though its affine slice approaches the positive-semidefinite cone, so failure to find a strictly feasible point does not certify infeasibility.
