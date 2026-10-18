---
id: thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy
kind: theorem
title: The degree-zero upwind forward-Euler step preserves mass and convex entropy
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-pe04-first-order-upwind-forward-euler
  - def-pe04-upwind-dg-transport-discretization
  - lem-affine-simplex-gauss-green-formula
  - def-countable-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bernardo Cockburn and Chi-Wang Shu, Runge–Kutta Discontinuous Galerkin Methods for Convection-Dominated Problems, Journal of Scientific Computing 16 (2001)"
      url: "https://helper.ipam.ucla.edu/publications/pcatut2005/pcatut_5473_reprint2.pdf"
      locator: "§§2.1–2.3, printed pp. 184–191: the degree-zero finite-volume specialization, monotone forward-Euler map, and explicit CFL requirement."
---

## Statement

Let $\mathcal T_h$ be a finite periodic matching affine simplicial mesh in $d\ge2$, let $\beta\in\mathbb R^d$ be constant, and apply [[alg-pe04-first-order-upwind-forward-euler]] with $\lambda_K\le1$ for every cell. Assume Countable Choice for the imported affine-simplex Green formula. Then the cell-volume-weighted mean is conserved:
$$\sum_KV_KU_K^+=\sum_KV_KU_K.$$
For every convex function $\eta:\mathbb R\to\mathbb R$, the weighted discrete entropy does not increase:
$$\sum_KV_K\eta(U_K^+)\le\sum_KV_K\eta(U_K).$$

## Facts & Assumptions

**Given:** A finite periodic matching affine simplicial mesh, constant transport velocity, the degree-zero upwind forward-Euler update, the cellwise face CFL $\lambda_K\le1$, and a convex scalar function $\eta$.

[F1] [[alg-pe04-first-order-upwind-forward-euler]]: $U_K^+=U_K-\frac{\Delta t}{V_K}\sum_FA_F(b_{K,F}^+U_K+b_{K,F}^-U_{K_F})$ with $\lambda_K=\frac{\Delta t}{V_K}\sum_FA_Fb_{K,F}^+\le1$.

[F2] [[lem-affine-simplex-gauss-green-formula]]: $\sum_{F\subset\partial K}|F|n_{K,F}=0$, obtained by applying the affine-simplex Green formula to each constant vector field.

[A1] [[def-countable-choice]]: Countable Choice is used only through [F2].

## Proof

1.1 By [F2] with the constant vector field $\beta$, $\sum_FA_Fb_{K,F}=0$, hence $\sum_FA_F(-b_{K,F})^+=\sum_FA_Fb_{K,F}^+$. Rewriting [F1] gives $U_K^+=(1-\lambda_K)U_K+\sum_{F\subset\partial K}\frac{\Delta tA_F(-b_{K,F})^+}{V_K}U_{K_F}$. All coefficients are nonnegative by $\lambda_K\le1$, and their sum is $(1-\lambda_K)+\lambda_K=1$. [F1, F2, A1, algebra]

2.1 Convexity of $\eta$ and the convex-combination formula in step 1.1 give $V_K\eta(U_K^+)\le V_K(1-\lambda_K)\eta(U_K)+\Delta t\sum_FA_F(-b_{K,F})^+\eta(U_{K_F})$. Sum over cells. Each incoming coefficient for an upwind cell $J$ is paired with the equal outgoing coefficient $\Delta tA_Fb_{J,F}^+$ on that same periodic face, so these terms exactly fill the subtracted $V_J\lambda_J\eta(U_J)$ contributions. Therefore $\sum_KV_K\eta(U_K^+)\le\sum_KV_K\eta(U_K)$. [given, step 1.1, algebra]

3.1 Multiply the update [F1] by $V_K$ and sum over cells. Every periodic interior face contributes one shared flux with each of its two opposite outward normals, so its two signed contributions cancel. This proves $\sum_KV_KU_K^+=\sum_KV_KU_K$. [F1, given, algebra] ∎
