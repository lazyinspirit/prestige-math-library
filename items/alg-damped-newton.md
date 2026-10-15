---
id: alg-damped-newton
kind: algorithm
title: "Damped Newton method"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-hessian-is-symmetric
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by:
  - lem-armijo-backtracking-terminates-for-strict-descent-directions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §9.5, especially Algorithm 9.5, PDF pp. 498–505"
---

## Definition

Let $d\ge1$, let $U\subseteq\mathbb R^d$ be open, and let $f:U\to\mathbb R$ be twice
continuously Fréchet differentiable. Write $g(x)=\nabla f(x)$ and
$H(x)=\nabla^2 f(x)$ using [[def-jacobian-matrix-and-gradient]] and
[[def-hessian-and-euclidean-critical-point]]. The Hessian is symmetric by
[[cor-hessian-is-symmetric]].

**Inputs:** $x_0\in U$, a Newton-decrement tolerance $\varepsilon>0$, and
line-search parameters $\alpha\in(0,1/2)$ and $\beta\in(0,1)$. **Output:**
when the procedure stops, return the last valid iterate $x_k$ and one of the
statuses `stationary`, `decrement`, or
`positive-definite solve unavailable`.
If none of these stopping conditions occurs, the sequence continues and there
is no finite return.

At iteration $k$ with current iterate $x_k$:

1. Compute $g_k:=g(x_k)$. If $g_k=0$, return
   $(x_k,\texttt{stationary})$.
2. If $H_k:=H(x_k)$ is not positive definite, return
   $(x_k,\texttt{positive-definite solve unavailable})$ without a Newton
   update. Otherwise compute its Cholesky factorization $H_k=L_kL_k^T$, solve
   $L_kw=-g_k$ and $L_k^Tp_k=w$, and set
   $$\lambda_k^2:=-\langle g_k,p_k\rangle=g_k^TH_k^{-1}g_k>0.$$
3. Before line search, if $\lambda_k^2/2\le\varepsilon$, return
   $(x_k,\texttt{decrement})$. This is the Newton-decrement stopping test.
4. Start with $t=1$ and repeatedly replace $t$ by $\beta t$ until
   $x_k+t p_k\in U$ and
   $f(x_k+t p_k)\le f(x_k)+\alpha t\,\langle g_k,p_k\rangle$.
5. Set $x_{k+1}:=x_k+t p_k$ and continue at iteration $k+1$.

The Cholesky factor exists and is unique when the symmetric Hessian is positive
definite by
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].
Its positive diagonal makes both triangular solves unique. The backtracking
branch terminates whenever it is reached, since $g_k\ne0$ and $H_k$ is
positive definite, by
[[lem-armijo-backtracking-terminates-for-strict-descent-directions]]. This
procedure makes no global-optimality claim.
