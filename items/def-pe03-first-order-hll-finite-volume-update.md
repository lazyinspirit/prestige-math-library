---
id: def-pe03-first-order-hll-finite-volume-update
kind: definition
title: First-order finite-volume update using supplied HLL speeds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-hyperbolic-system-and-characteristic-families, def-hll-two-wave-flux]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Part II, HLL solver, derivation and implementation, complete chapter inspected"
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, HLLE Solver, complete chapter inspected"
---

## Definition

Let $F:\mathcal A\to\mathbb R^m$ be the flux of the one-dimensional system in
[[def-hyperbolic-system-and-characteristic-families]]. On a periodic uniform
mesh of $N\ge2$ cells of width $h>0$, let $U_i\in\mathcal A$ be the cell means
and put $\nu=\Delta t/h\ge0$. At each face $(i+1/2)$ choose explicit speeds
$S_{L,i+1/2}<0<S_{R,i+1/2}$ and evaluate the middle branch of the HLL flux
[[def-hll-two-wave-flux]] on $(U_i,U_{i+1})$. The **first-order HLL update** is
$$U_i^+=U_i-\nu\bigl(\widehat F_{i+1/2}-\widehat F_{i-1/2}\bigr),\qquad i\pmod N.$$
The speeds are supplied data. Neither this definition nor later algebraic
results assert that they enclose the wave speeds of an exact nonlinear Riemann
solution.

