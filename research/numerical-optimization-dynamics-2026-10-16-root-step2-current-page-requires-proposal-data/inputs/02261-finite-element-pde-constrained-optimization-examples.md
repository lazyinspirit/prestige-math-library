---
page: finite-element-pde-constrained-optimization-examples
title: "Finite element pde constrained optimization — Examples"
status: draft
items: []
examples:
  - ex-distributed-heat-source-control-with-an-exact-box-optimum
  - ex-boundary-control-needs-a-trace-space
  - ex-bang-bang-control-is-the-alpha-zero-box-limit
---

The distributed example constructs a smooth box-feasible heat source, state, and adjoint with an exact nonzero optimum. The boundary-control example derives the endpoint trace functional and explains why its control space and operator differ from an interior $L^2$ source. The bang-bang example minimizes a separate linear functional over an $L^2$ box; it does not obtain that result by substituting $\alpha=0$ into a formula that divides by $\alpha$.
