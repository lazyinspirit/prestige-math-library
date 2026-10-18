---
page: adaptive-finite-element-methods-examples
title: "Adaptive finite-element methods — Examples"
status: draft
items: []
examples:
  - ex-afem-coefficient-jump-adds-flux-oscillation
  - ex-afem-coarse-convection-mesh-misses-smallness-condition
  - ex-afem-dorfler-marking-three-cells
  - ex-afem-data-oscillation-reduction-under-refinement
---
These finite checks demonstrate the exact descending-prefix bulk rule, P0 data-oscillation projection on a reference triangle, nonconstant conormal-flux oscillation across a coefficient interface, and failure of the stated sufficient small-mesh inequality for a prescribed convection constant. Each verification uses the definitions and hypotheses on [[adaptive-finite-element-methods]]. The coefficient and convection examples do not assert general convergence or failure of convergence.
