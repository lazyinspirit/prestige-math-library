---
id: thm-pe04-ssprk33-first-order-upwind-entropy-preservation
kind: theorem
title: SSPRK(3,3) preserves the degree-zero upwind entropy bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy
  - alg-pe04-first-order-upwind-forward-euler
  - alg-ssprk33
  - prop-ssprk33-third-order-and-convex-preservation
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
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
      locator: "§1.1 and §2.2, printed pp. 175–176 and 188–190, Table 2.1: SSP convex-combination transfer, the three-stage method, and the forward-Euler step restriction."
---

## Statement

Let $\mathcal T_h$ be a finite periodic matching affine simplicial mesh, write $V_K=\int_K1\,dx>0$ for its cell volumes, let $\beta$ be constant, and let $\eta:\mathbb R\to\mathbb R$ be convex. Assume the cellwise forward-Euler condition in [[thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy]] holds for $\Delta t$, including its Countable Choice premise through the affine-simplex Green formula. For the autonomous degree-zero upwind DG ODE, write $E_{\Delta t}(U)=U+\Delta t L_h(U)$. The exact SSPRK(3,3) recurrence is
$$Y_1=E_{\Delta t}(U^n),\qquad Y_2=\frac34U^n+\frac14E_{\Delta t}(Y_1),\qquad U^{n+1}=\frac13U^n+\frac23E_{\Delta t}(Y_2).$$
Then $\sum_KV_K\eta(U_K^{n+1})\le\sum_KV_K\eta(U_K^n)$. This guarantee is for the degree-zero scalar upwind operator just specified; it is not a fully discrete entropy theorem for the high-order nonlinear flux-differencing SBP method.

## Facts & Assumptions

**Given:** The exact SSPRK(3,3) recurrence, the periodic degree-zero upwind spatial operator, a convex scalar entropy, and the same step size satisfying the forward-Euler bound at every stage.

[F1] [[alg-ssprk33]]: $Y_1=E_{t,h}(y)$, $Y_2=\frac34y+\frac14E_{t+h,h}(Y_1)$, and $y^+=\frac13y+\frac23E_{t+h/2,h}(Y_2)$; the problem here is autonomous, so all three maps are $E_{\Delta t}$.

[F2] [[thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy]]: for every cell-state vector in $\mathbb R^{\mathcal T_h}$, the degree-zero upwind forward-Euler map at this CFL does not increase $\Phi(U)=\sum_KV_K\eta(U_K)$.

[F3] [[prop-ssprk33-third-order-and-convex-preservation]]: if $C$ and $\Phi$ are convex and the forward-Euler map preserves $C$ and does not increase $\Phi$, the SSPRK(3,3) stages and output do so at the same step size.

[F4] [[def-convex-subset-of-euclidean-space]]: $\mathbb R^{\mathcal T_h}$ is convex, and convexity of each $\eta$ with positive weights makes $\Phi$ convex.

[F5] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: $\eta$ is convex when $\eta((1-t)x+ty)\le(1-t)\eta(x)+t\eta(y)$ for $0\le t\le1$.

[F6] [[alg-pe04-first-order-upwind-forward-euler]]: each cell volume $V_K$ is positive because every mesh cell is nondegenerate.

[A1] [[def-countable-choice]]: Countable Choice is carried from the forward-Euler geometric estimate [F2]; this theorem uses no stronger choice principle.

## Proof

1.1 By [F1], the spatially autonomous SSPRK(3,3) step has exactly the three displayed convex-combination stages. Set $C=\mathbb R^{\mathcal T_h}$ and $\Phi(U)=\sum_KV_K\eta(U_K)$. For $U,V\in C$ and $0\le t\le1$, apply [F5] in each cell and multiply by $V_K>0$ from [F6]; summing proves convexity of $\Phi$. [given, F1, F4, F5, F6, algebra]

2.1 The state space $C$ is convex and $\Phi$ is convex. By [F2], every forward-Euler image of a cell-state vector lies in $C$ and has no larger $\Phi$ value under the assumed cell CFL. Thus the hypotheses of the convex-transfer clause [F3] hold at the same $\Delta t$. [F2, F3, F4, A1, step 1.1]

3.1 Applying [F3] to the three stages in [F1] gives $\Phi(U^{n+1})\le\Phi(U^n)$, which is the asserted weighted entropy inequality. The flux-differencing semidiscrete entropy theorem is not used in this transfer. [F1, F3, step 2.1, algebra] ∎
