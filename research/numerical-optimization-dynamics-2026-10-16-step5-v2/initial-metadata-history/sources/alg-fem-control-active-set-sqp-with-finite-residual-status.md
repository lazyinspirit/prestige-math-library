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

Let a finite-dimensional $C^2$ reduced FE control program have a fixed list of $m$ inequality constraints. Its exact objective, constraint, gradient, and Hessian evaluators, and its active-row rank and reduced-curvature checks, must terminate on every query or return failure. For each active set $A\subseteq\{1,\ldots,m\}$, use the active KKT map $F_A$ and exact-Hessian Jacobian $J_A=DF_A$ specified by [[alg-sqp-exact-hessian-newton-step]], with inactive inequality multipliers set to zero. Given an initial primal vector $x_0$, equality multiplier $\nu_0$, and full inequality multiplier vector $\lambda_0\in\mathbb R^m$ with entries outside $A_0$ zero when $R>0$, an ordered finite list of proposed active sets $A_0,\ldots,A_{R-1}$, maximum budget $N\ge1$, residual tolerance $\tau\ge0$, a terminating exact-storage routine satisfying the input contract of [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]], and its floating-point hypotheses, process at most $\min(R,N)$ candidates. If $R=0$, return `inconclusive` immediately. At candidate $j$, first set $\lambda_{j,i}=0$ for $i\notin A_j$, then let $z_j=(x_j,\nu_j,\lambda_{j,A_j})$ be the active KKT variable.

1. Evaluate $F_{A_j}(z_j)$ and $K_j=J_{A_j}(z_j)$. Write $G_j=Dc_{A_j}(x_j)$ for the stacked equality and active-inequality rows, and $H_j=\nabla^2_{xx}L(z_j)$ for the Lagrangian Hessian block. Verify that $G_j$ has full row rank and $d^TH_jd>0$ for every nonzero $d\in\ker G_j$, as required by [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]]. If an evaluation fails or either condition is false or cannot be verified, mark this candidate `numerical-failure`, set $(x_{j+1},\nu_{j+1},\lambda_{j+1})=(x_j,\nu_j,\lambda_j)$, and continue to the next candidate.

2. Otherwise set $b_j=-F_{A_j}(z_j)$ and call [[alg-sqp-finite-precision-kkt-qr-solve-and-residual-check]] exactly once on the intended system $K_js=b_j$, supplying the terminating exact-storage routine. Before factorization or residual evaluation, that call must verify that the stored entries equal the intended $K_j,b_j$. An unavailable or unverified admission is a failed QR solve with no residual certificate. On a failed QR solve, record `numerical-failure`, set $(x_{j+1},\nu_{j+1},\lambda_{j+1})=(x_j,\nu_j,\lambda_j)$, and continue.

3. On a successful QR return, write its vector as $\widehat s_j=(\widehat p_j,\widehat\delta\nu_j,\widehat\delta\lambda_{j,A_j})$ and let $\eta_j$ be its residual bound. Set $x_{j+1}=x_j+\widehat p_j$, $\nu_{j+1}=\nu_j+\widehat\delta\nu_j$, and, for each inequality index $i$, set $\lambda_{j+1,i}=\lambda_{j,i}+\widehat\delta\lambda_{j,i}$ if $i\in A_j$ and $\lambda_{j+1,i}=0$ otherwise. Thus the next candidate has a full, dimensionally fixed multiplier vector; newly active multipliers start at zero. The QR vector is the only step used by this wrapper. If $\eta_j\le\tau$, return $(z_j^+,A_j,\texttt{active-kkt-residual-certified},\eta_j)$, where $z_j^+=(x_{j+1},\nu_{j+1},\lambda_{j+1,A_j})$; otherwise continue.

For each successful solve, retain the tuple with the smallest computed $\eta_j$. If the finite list or budget is exhausted, return `budget-exhausted` with that tuple, or `inconclusive` if no solve succeeded. The `active-kkt-residual-certified` status concerns only the linearized active KKT equation residual $\|K_j\widehat s_j+F_{A_j}(z_j)\|_2$. A nonlinear next-point KKT residual, box feasibility, multiplier signs, global optimality, and forward accuracy require separate validated checks; none follows from a small linear-system residual alone.

## Remarks

For an exact quadratic reduced objective and affine active constraints, including every equality constraint, $F_A$ is affine and its Jacobian is constant, so the next-point active KKT residual equals the linear solve residual in the algorithm. For a nonlinear active KKT map, a certified step-equation residual is not by itself a certificate for $F_A(z_j^+)$; the local OPT6 convergence theorem additionally requires identified active set, LICQ, strict complementarity, positive reduced curvature, locally Lipschitz Jacobian, and a sufficiently close start. The exact-Hessian algorithm supplies the map/Jacobian convention; the QR algorithm supplies the rank and curvature input conditions. The exact solve is not run by this finite-precision wrapper.
