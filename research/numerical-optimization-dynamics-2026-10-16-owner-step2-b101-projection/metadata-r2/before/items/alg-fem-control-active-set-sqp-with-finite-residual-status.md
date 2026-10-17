---
id: alg-fem-control-active-set-sqp-with-finite-residual-status
kind: algorithm
title: Finite-budget active-set SQP with a certified KKT-system residual status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-sqp-exact-hessian-newton-step
  - alg-sqp-finite-precision-kkt-qr-solve-and-residual-check
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-sqp-finite-precision-kkt-residual-certificate-sound
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf"
      locator: "Chapter 18 §18.1, printed pp. 528–530 / PDF pp. 546–548: SQP as Newton on the KKT equations; the finite-residual status wrapper is defined locally."
---

## Definition

Let $F_A(z)=0$ be the active KKT system of a finite-dimensional reduced FE control problem, where $z=(x,\mu)$ stacks the control and active multipliers. Given $z_0$, an ordered finite list of proposed active sets $A_0,\ldots,A_{m-1}$, maximum budget $N\ge1$, residual tolerance $\tau\ge0$, and the floating-point hypotheses of [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]], process at most $\min(m,N)$ candidates:

1. For candidate $A_j$, form $F_{A_j}(z_j)$ and its exact-Hessian active KKT Jacobian $K_j=DF_{A_j}(z_j)$.
2. Use the active KKT-map/Jacobian convention and rank/reduced-curvature applicability conditions of [[alg-sqp-exact-hessian-newton-step]]. Do not invoke its exact linear solve. Set $b_j=-F_{A_j}(z_j)$ and run the finite-precision QR algorithm of [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]] exactly once on $K_js=b_j$. A failed applicability check or QR solve records `numerical-failure`, sets $z_{j+1}=z_j$, and proceeds.
3. On a successful QR return, let $(\widehat s_j,\eta_j)$ be its step vector and residual bound. Set $z_j^+=z_j+\widehat s_j$ and $z_{j+1}=z_j^+$. The QR vector $\widehat s_j$ is the only step used by this wrapper. If $\eta_j\le\tau$, return $(z_j^+,A_j,\texttt{active-kkt-residual-certified},\eta_j)$; otherwise proceed.

If the finite list or budget is exhausted, return `budget-exhausted` with the smallest successfully computed residual bound, or `inconclusive` if no solve succeeded. This status concerns the active KKT equation residual only. Box feasibility, multiplier signs, global optimality, and forward accuracy require separate validated checks; none follows from a small linear-system residual alone.

## Remarks

For an exact quadratic reduced objective and affine active box constraints, $F_A$ is affine and its Jacobian is constant, so the next-point active KKT residual equals the linear solve residual in the algorithm. For a nonlinear active KKT map, a certified step-equation residual is not by itself a certificate for $F_A(z_j^+)$; the local OPT6 convergence theorem additionally requires identified active set, LICQ, strict complementarity, positive reduced curvature, locally Lipschitz Jacobian, and a sufficiently close start. The exact-Hessian algorithm supplies the map/Jacobian convention and applicability hypotheses here; its exact solve is not run by this finite-precision wrapper.
