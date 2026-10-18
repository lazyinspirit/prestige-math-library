---
id: alg-pe04-first-order-upwind-forward-euler
kind: algorithm
title: Forward-Euler step for degree-zero upwind DG transport
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-upwind-dg-transport-discretization
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§§3.2–3.5, printed pp. 161–165: piecewise-constant DG is the first-order finite-volume update and uses shared numerical fluxes."
---

## Definition

Input a dimension $d\ge2$, a finite matching affine simplicial mesh $\mathcal T_h$ whose boundary faces are paired by translations to form a periodic mesh, a constant velocity $\beta\in\mathbb R^d$, one cell mean $U_K\in\mathbb R$ per cell, and a step $\Delta t>0$. The output is either `CFL-inadmissible` or an updated vector of cell means $U^+=(U_K^+)_{K\in\mathcal T_h}$. Let $V_K=\int_K1\,dx$ be the cell volume and $A_F=\int_F1\,dS$ the face area. Here a cell face is a codimension-one facet, as in [[def-pe04-upwind-dg-transport-discretization]]. For each face $F\subset\partial K$, let $n_{K,F}$ be the outward unit normal, $b_{K,F}=\beta\cdot n_{K,F}$, and $K_F$ the neighboring cell across that periodic face. With $b^+=\max(b,0)$ and $b^- =\min(b,0)$, the upwind flux out of $K$ is
$$\widehat f_{K,F}=b_{K,F}^+U_K+b_{K,F}^-U_{K_F}.$$

Compute
$$\lambda_K=\frac{\Delta t}{V_K}\sum_{F\subset\partial K}A_Fb_{K,F}^+.$$
If $\lambda_K>1$ for any cell, return `CFL-inadmissible` without updating the state. Otherwise, the **degree-zero upwind forward-Euler update** is admissible and its output is
$$U_K^+=U_K-\frac{\Delta t}{V_K}\sum_{F\subset\partial K}A_F\widehat f_{K,F}.$$
This is the degree-zero specialization of [[def-pe04-upwind-dg-transport-discretization]].
