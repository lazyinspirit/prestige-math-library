---
id: alg-inexact-newton-krylov-with-descent-safeguard
kind: algorithm
title: "Finite-budget inexact Newton–Krylov with a descent safeguard"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-bracketing-zoom-strong-wolfe-search
  - def-wolfe-and-strong-wolfe-conditions
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
  - def-matrix-free-access-model-for-krylov-methods
  - def-krylov-subspace-of-a-matrix-and-start-vector
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7 §7.1, Algorithm 7.1 and equations (7.1)–(7.3), printed pp. 165–170 / PDF pp. 183–188: Newton–CG forcing residual, descent safeguard, and line search."
    - title: "Ron S. Dembo, Stanley C. Eisenstat, and Trond Steihaug, Inexact Newton Methods, SIAM Journal on Numerical Analysis 19 (1982), 400–408"
      url: "https://wiki.math.ntnu.no/_media/tma4180/2018v/inexactnewton.pdf"
      locator: "Introduction and §§2–3, pp. 400–407: relative linear-system residual and local unshifted recurrence; no globalization claim is imported."
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R$
be twice continuously differentiable, meaning that $f$ is $C^1$ and its
gradient is $C^1$.
Write $g(x):=\nabla f(x)$ and $H(x):=\nabla^2f(x)$ using
[[def-jacobian-matrix-and-gradient]] and
[[def-hessian-and-euclidean-critical-point]]. The identity matrix $I_n$ and
matrix-vector products have the convention of
[[def-matrix-product-and-identity-matrix]]. Use the matrix-free access
model of [[def-matrix-free-access-model-for-krylov-methods]] for products
$v\mapsto(H(x)+\lambda I_nv)$.

**Linear-solver input:** a fixed deterministic Krylov procedure $K$ which accepts a
matrix-free linear operator $A$, a right-hand side $b$, a tolerance $\tau\ge0$,
and a finite inner-iteration budget $M\in\mathbb N_0$. It returns either
`no-candidate` or `candidate` with a vector $p$ and an iteration count
$m\in\{0,1,\ldots,M\}$ satisfying $p\in K_m(A,b)$, where $K_m$ is as defined
by [[def-krylov-subspace-of-a-matrix-and-start-vector]]. A candidate's residual
status is never trusted: this algorithm recomputes
the requested residual using the supplied operator. **Other inputs:** $x_0\in U$, outer update budget
$N\in\mathbb N_0$, forcing values $\eta_k\in[0,\bar\eta]$ for a fixed
$\bar\eta<1$, descent parameter $\sigma\in(0,1)$, regularization factor
$\gamma>1$, initial shift $\lambda_0>0$, shift cap $\lambda_{\max}\ge\lambda_0$,
regularized-attempt budget $J\in\mathbb N_0$, inner budget $M$, and the
parameters and finite expansion/zoom budgets of
[[alg-bracketing-zoom-strong-wolfe-search]]. **Output:** the last valid
iterate and one of `stationary`, `iteration-budget-exhausted`,
`no-descent-direction`, or `line-search-failure`.

At iteration $k=0,1,\ldots,N$:

1. Compute $g_k:=g(x_k)$. If $g_k=0$, return $(x_k,\texttt{stationary})$.
   If $k=N$, return $(x_k,\texttt{iteration-budget-exhausted})$.
2. Set $\lambda:=0$. For $j=0,1,\ldots,J$, call $K$ on
   $A_\lambda v:=H(x_k)v+\lambda I_nv$, right-hand side $-g_k$, tolerance
   $\eta_k\|g_k\|_2$, and budget $M$. A `no-candidate` result is a rejected
   attempt. If it returns a candidate $p$, compute
   $r:=(H(x_k)+\lambda I_n)p+g_k$. Accept this linear solve only when
   $\|r\|_2\le\eta_k\|g_k\|_2$ and
   $\langle g_k,p\rangle<-\sigma\|g_k\|_2\|p\|_2$; otherwise reject it.
   If the attempt is rejected and either $j=J$ or $\lambda=\lambda_{\max}$, stop the
   regularization loop. Otherwise set
   $\lambda:=\min\{\lambda_{\max},\lambda_0\}$ when $\lambda=0$, and
   $\lambda:=\min\{\lambda_{\max},\gamma\lambda\}$ when $\lambda>0$;
   then continue with the next $j$.
3. If no regularized attempt was accepted, set $p:=-g_k$ and check
   $\langle g_k,p\rangle<-\sigma\|g_k\|_2\|p\|_2$. If this check fails,
   return `no-descent-direction`. For the stated $\sigma$ and $g_k\ne0$ it
   passes, but the check remains part of the procedure.
4. Call [[alg-bracketing-zoom-strong-wolfe-search]] at $x_k$ in direction $p$.
   If it returns failure, return $(x_k,\texttt{line-search-failure})$ with
   that failure status. Otherwise, for its returned strong Wolfe step $t_k$,
   set $x_{k+1}:=x_k+t_kp$ and continue.

The first unregularized system uses the forcing residual
$\|H(x_k)p+g_k\|_2\le\eta_k\|g_k\|_2$. A regularized attempt checks the
residual for the shifted system instead. Finite inner, regularization, and
line-search budgets can return failure; the procedure makes no global
convergence claim. The local rate theorem applies only to an unshifted
$\lambda=0$ sequence taking full steps $t_k=1$ and remaining in its stated
local tube. This algorithm does not assert that every run enters that branch.
