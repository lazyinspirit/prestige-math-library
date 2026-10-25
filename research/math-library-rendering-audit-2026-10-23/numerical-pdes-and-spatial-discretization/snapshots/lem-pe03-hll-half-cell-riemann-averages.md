---
id: lem-pe03-hll-half-cell-riemann-averages
kind: lemma
title: First-order HLL updates are averages of adjacent half-cell fan averages
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe03-first-order-hll-finite-volume-update
  - def-hll-two-wave-flux
  - thm-hll-flux-is-consistent-and-conservative
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Part II, HLL solver, middle-state conservation and implementation, complete chapter inspected"
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, HLLE middle-state formula, complete chapter inspected"
---

## Statement

Use the first-order HLL update of
[[def-pe03-first-order-hll-finite-volume-update]]. At a face with left and right
states $U_L,U_R$, supplied speeds $S_L<0<S_R$, and physical flux values
$F_L=F(U_L),F_R=F(U_R)$, define
$$U_*:=\frac{S_RU_R-S_LU_L-(F_R-F_L)}{S_R-S_L}.$$
If the one-sided CFL bounds $2\nu(-S_L)\le1$ and $2\nu S_R\le1$ hold, the
averages of the HLL fan over the adjacent left and right half-cells are,
respectively,
$$A^-=(1-2\nu(-S_L))U_L+2\nu(-S_L)U_*,\qquad A^+=(1-2\nu S_R)U_R+2\nu S_RU_*.$$
For every cell $i$, the updated mean satisfies
$$U_i^+=\frac12\left(A^+_{i-1/2}+A^-_{i+1/2}\right),$$
where each face uses its own supplied speeds and intermediate state.

## Facts & Assumptions

**Given:** A periodic uniform mesh, the HLL middle branch at each face, and the stated CFL bounds. Derive the half-cell averages and the finite-volume decomposition.

[F1] [[def-hll-two-wave-flux]]: when $S_L<0<S_R$, the HLL flux is $(S_RF_L-S_LF_R+S_LS_R(U_R-U_L))/(S_R-S_L)$.

[F2] [[thm-hll-flux-is-consistent-and-conservative]]: the displayed $U_*$ and the assigned model flux $F_*=F_L+S_L(U_*-U_L)$ satisfy both conservative model balances; $F_*$ is the middle-branch HLL flux and need not equal $F(U_*)$.

[F3] [[def-hll-two-wave-flux]]: in the middle branch, the approximate HLL model has three constant regions separated by $S_L,S_R$ and one intermediate state.

[F4] [[def-pe03-first-order-hll-finite-volume-update]]: $U_i^+=U_i-\nu(\widehat F_{i+1/2}-\widehat F_{i-1/2})$ with shared HLL face fluxes.

## Proof

1.1 By [F2], the displayed $U_*$ is the intermediate state of the conservative HLL fan. Write $D=S_R-S_L>0$. Substitution gives $U_*-U_L=(S_R(U_R-U_L)-(F_R-F_L))/D$ and $U_*-U_R=(S_L(U_R-U_L)-(F_R-F_L))/D$. Therefore $F_L+S_L(U_*-U_L)=F_R+S_R(U_*-U_R)$, and expanding either side yields exactly [F1]. [given, F1, F2, algebra]

2.1 By [F3] and [F2], in coordinates with the face at $x=0$ the HLL profile is $U_L$ for $x/t<S_L$, $U_*$ for $S_L<x/t<S_R$, and $U_R$ for $x/t>S_R$. On $[-h/2,0]$ at time $\Delta t$, the two portions have lengths $h/2+S_L\Delta t$ and $-S_L\Delta t$; dividing by $h/2$ gives $A^-$. The CFL condition makes both lengths nonnegative. On $[0,h/2]$, the portions have lengths $S_R\Delta t$ and $h/2-S_R\Delta t$; dividing by $h/2$ gives $A^+$, again with nonnegative lengths. [given, F2, F3, F4, step 1.1, construct]

3.1 At the right face of cell $i$, step 1.1 gives $\widehat F_{i+1/2}=F(U_i)+S_{L,i+1/2}(U_{*,i+1/2}-U_i)$; at its left face it gives $\widehat F_{i-1/2}=F(U_i)+S_{R,i-1/2}(U_{*,i-1/2}-U_i)$. Substitution in [F4] yields $U_i^+=(1-\nu a_R-\nu a_L)U_i+\nu a_RU_{*,i+1/2}+\nu a_LU_{*,i-1/2}$, where $a_R=-S_{L,i+1/2}$ and $a_L=S_{R,i-1/2}$. The half-sum $\tfrac12(A^+_{i-1/2}+A^-_{i+1/2})$ has those same three coefficients, proving the identity. [step 1.1, step 2.1, F4, algebra] ∎

