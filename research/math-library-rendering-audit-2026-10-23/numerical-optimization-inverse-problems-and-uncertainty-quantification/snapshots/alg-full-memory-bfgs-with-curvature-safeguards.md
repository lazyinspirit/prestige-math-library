---
id: alg-full-memory-bfgs-with-curvature-safeguards
kind: algorithm
title: "Full-memory Bfgs with Wolfe search, descent reset, and Powell damping"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-euclidean-inner-product
  - alg-bfgs-hessian-direction-with-rounded-cholesky
  - alg-bracketing-zoom-strong-wolfe-search
  - def-bfgs-curvature-pair-and-update-formulas
axiom_use: "None. This algorithm uses deterministic finite branches and loops with its listed numerical-analysis dependencies; no choice principle is used."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, BFGS Method, equations (6.17)–(6.19) and Algorithm 6.1, printed pp. 140–143 / PDF pp. 158–161; Chapter 18 §18.3, Procedure 18.2, printed pp. 537–538 / PDF pp. 555–556."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS formula, descent direction, and update, printed pp. 21–22 / PDF pp. 22–23."
---

## Definition

Inputs are a $C^1$ objective $f:D\to\mathbb R$ on an open $D\subseteq\mathbb R^n$ with $n\ge1$, $x_0\in D$, consistent SPD matrices $B_0,H_0$ with $B_0H_0=H_0B_0=I$, a reset scale $\gamma>0$, constants $0<c_1<c_2<1/2$, finite line-search and iteration budgets $E,Z,K\in\mathbb N$ (zero is allowed), a direction mode exact or rounded-Cholesky, and an update mode undamped or Powell. For rounded-Cholesky mode, also input a finite binary arithmetic format for the called direction procedure.

Initialize $k:=0$, $x_k:=x_0$, $B_k:=B_0$, $H_k:=H_0$, and $g_0:=\nabla f(x_0)$. If $g_0=0$, return stationary at $x_0$. While $k<K$, if $g_k=0$, return stationary at $x_k$. Use the Euclidean inner product of [[def-euclidean-inner-product]] in descent and curvature tests. In exact direction mode set $p_k:=-H_kg_k$. In rounded-Cholesky mode, first check that every entry of $B_k$ and $g_k$ is finite and representable in the selected format. If any entry is not, return direction-input-failure with $x_k$. Otherwise call [[alg-bfgs-hessian-direction-with-rounded-cholesky]] with $(B_k,g_k)$ in that format; if the factorization or triangular solve fails, return its failure status with $x_k$. Otherwise set $p_k$ to its returned direction. If the computed direction is not descending, reset $B_k:=\gamma^{-1}I$, $H_k:=\gamma I$, and set $p_k:=-\gamma g_k$.

Call [[alg-bracketing-zoom-strong-wolfe-search]] with $(f,x_k,p_k,c_1,c_2,E,Z)$. If it returns a failure status, return that status and $x_k$. Otherwise take its positive strong Wolfe step $\alpha_k$, set $x_{k+1}:=x_k+\alpha_kp_k$, and compute $g_{k+1}:=\nabla f(x_{k+1})$. Define
$$ s_k:=\alpha_kp_k,\qquad y_k:=g_{k+1}-g_k. $$
In undamped mode set $\bar y_k:=y_k$. In Powell mode put $c_k:=s_k^TB_ks_k$ and use the damping rule of [[def-bfgs-curvature-pair-and-update-formulas]] to form $\bar y_k$. If $s_k^T\bar y_k\le0$, skip the matrix update and return curvature-rejected with $x_{k+1}$. Otherwise update both matrices by
$$ B_{k+1}=B_k-\frac{B_ks_ks_k^TB_k}{s_k^TB_ks_k} +\frac{\bar y_k\bar y_k^T}{s_k^T\bar y_k}, \qquad H_{k+1}=(I-\rho_ks_k\bar y_k^T)H_k(I-\rho_k\bar y_ks_k^T)+\rho_ks_ks_k^T, \quad \rho_k=(s_k^T\bar y_k)^{-1}. $$
If any required scalar or matrix operation is undefined, discard partial update results and return update-failure with $x_{k+1}$. After a successful update, commit $(x_{k+1},g_{k+1},B_{k+1},H_{k+1})$ as the state for the next iteration. If $g_{k+1}=0$, return stationary at $x_{k+1}$; if $k+1=K$, return iteration-budget-exhausted at $x_{k+1}$. Otherwise set $k:=k+1$ and continue from that committed state. A line-search failure returns its status with $x_k$. If the loop exits because $k=K$ without another return, return iteration-budget-exhausted with $x_k$; this covers $K=0$. The output is the last point and one of stationary, a line-search status, direction-input-failure, factorization/solve failure, curvature-rejected, update-failure, or iteration-budget-exhausted.

All objective and gradient evaluations, line-search arithmetic, descent and curvature tests, resets, and BFGS matrix updates are exact over $\mathbb R$. Only the called rounded-Cholesky factorization and triangular solves use the selected finite arithmetic. The representability check is repeated before every call, since exact updates need not preserve representable entries. The rounded-Cholesky direction mode specifies a computed factor-and-solve direction only; this item supplies no backward-error or convergence theorem for that mode. Its returned direction is checked for descent before the strong Wolfe search. The line-search procedure can fail within its finite budgets even when an acceptable step exists.

