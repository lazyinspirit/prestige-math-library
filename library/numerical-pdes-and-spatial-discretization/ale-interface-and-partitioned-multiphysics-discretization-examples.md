---
page: ale-interface-and-partitioned-multiphysics-discretization-examples
title: "ALE, interfaces and partitioned multiphysics coupling — Examples"
status: published
items: []
examples:
  - ex-ale-added-mass-toy-recurrence-instability
  - ex-ale-expanding-mesh-free-stream
  - ex-ale-two-domain-heat-interface-flux-balance
---

# Worked ALE and interface cases

These examples instantiate the two separate branches on [[ale-interface-and-partitioned-multiphysics-discretization]]. Each calculation is finite and exact; none asserts a general nonlinear fluid-structure result.

## Moving mesh

[[ex-ale-expanding-mesh-free-stream]] uses two periodic cells. Their initial widths are both one; a single interior face moves right by $0.01$, so the cell Jacobians become $1.01$ and $0.99$. The upwind ALE flux changes each extensive cell value by exactly the corresponding geometric volume change, leaving the constant state and total mass unchanged.

## Diffusion interface

[[ex-ale-two-domain-heat-interface-flux-balance]] constructs two positive-definite backward-Euler blocks whose scalar Schur operators are $S_1=2$ and $S_2=1$. It computes the common trace, the equal-and-opposite outward fluxes, and both passes of the Robin-Robin iteration needed to certify the trace tolerance.

## Added mass

[[ex-ale-added-mass-toy-recurrence-instability]] sets $m_s=1$ and $m_f=2$ in the specifically defined scalar recurrence. It shows the increment doubles in magnitude at each pass, which demonstrates instability of that recurrence only.
