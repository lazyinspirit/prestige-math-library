---
id: thm-pe03-ideal-gas-llf-branch-preserves-positivity
kind: theorem
title: Symmetric HLL speeds preserve ideal-gas density and internal-energy positivity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-hll-two-wave-flux
  - def-pe03-first-order-hll-finite-volume-update
  - lem-pe03-euler-llf-split-state-positive
  - prop-pe03-euler-state-and-margin-domains-are-convex-and-closed
  - lem-pe03-hll-half-cell-riemann-averages
  - thm-pe03-hll-update-preserves-convex-invariant-domain
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, HLLE Solver and ideal-gas state variables, complete chapter inspected"
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, positive Euler states, Lax–Friedrichs/HLL fluxes and CFL convex combinations, PDF pp. 5–9; full article read"
---

## Statement

Fix $\gamma>1$ and a periodic uniform mesh. Suppose every cell state
$U_i\in\mathcal G_\gamma$. Apply the first-order HLL update of
[[def-pe03-first-order-hll-finite-volume-update]]. At each face $(i+1/2)$ choose a symmetric HLL
branch $S_L=-a_{i+1/2}$, $S_R=a_{i+1/2}$ with
$$a_{i+1/2}\ge\max\bigl(|u_i|+c_i,|u_{i+1}|+c_{i+1}\bigr),\qquad 2\nu a_{i+1/2}\le1.$$
Then one first-order HLL update preserves $\mathcal G_\gamma$; in particular,
every updated density and pressure is strictly positive. This is the symmetric
local Lax–Friedrichs branch with a stated speed bound, not a claim that arbitrary
HLL speed estimates are valid or that the bound is necessary.

## Facts & Assumptions

**Given:** The one-dimensional ideal-gas Euler flux, positive initial states, symmetric speeds satisfying the displayed bound, and the HLL update. Prove positivity after one step.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $\mathcal G_\gamma$ is the set $\rho>0$, $E-m^2/(2\rho)>0$; $p=(\gamma-1)(E-m^2/(2\rho))$, $c^2=\gamma p/\rho$, and $F=(m,m^2/\rho+p,u(E+p))$.

[F2] [[def-hll-two-wave-flux]]: on the middle branch, $\widehat F=(S_RF_L-S_LF_R+S_LS_R(U_R-U_L))/(S_R-S_L)$.

[F3] [[lem-pe03-euler-llf-split-state-positive]]: if $a\ge|u|+c$, then $U\pm F(U)/a\in\mathcal G_\gamma$.

[F4] [[prop-pe03-euler-state-and-margin-domains-are-convex-and-closed]]: $\mathcal G_\gamma$ is convex.

[F5] [[lem-pe03-hll-half-cell-riemann-averages]]: the intermediate state is $U_*=(S_RU_R-S_LU_L-(F_R-F_L))/(S_R-S_L)$ and the update is the average of its adjacent half-cell fan averages.

[F6] [[thm-pe03-hll-update-preserves-convex-invariant-domain]]: a first-order HLL update preserves a convex set if its cell states and HLL intermediate states belong to that set and the half-cell CFL bounds hold.

## Proof

1.1 Fix a face with states $U_L,U_R$ and speed $a$. By [F3] applied to $U_L$ and $U_R$, both $U_L+F_L/a$ and $U_R-F_R/a$ lie in $\mathcal G_\gamma$. [given, F1, F3, choose]

2.1 Substituting $S_L=-a$, $S_R=a$ into [F2] and using the intermediate-state formula in [F5] gives $U_* = \tfrac12(U_L+F_L/a)+\tfrac12(U_R-F_R/a)$. The two weights are nonnegative and sum to one, so [F4] implies $U_*\in\mathcal G_\gamma$. [given, F2, F4, F5, step 1.1, algebra]

3.1 The assumed speed bound gives $a>0$ and the displayed CFL gives $2\nu a\le1$, so both HLL half-cell averages have nonnegative convex-combination coefficients. Thus every HLL intermediate state and cell state lies in $\mathcal G_\gamma$, and [F6] yields $U_i^+\in\mathcal G_\gamma$ for each cell. By [F1], this means positive density and pressure. The proof makes no claim for the other HLL branches or for fully discrete entropy. [given, F1, F6, step 2.1, algebra] ∎

