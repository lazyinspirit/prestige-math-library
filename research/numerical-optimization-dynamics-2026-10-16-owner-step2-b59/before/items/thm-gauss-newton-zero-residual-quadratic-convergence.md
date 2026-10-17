---
id: thm-gauss-newton-zero-residual-quadratic-convergence
kind: theorem
title: "Gauss-Newton converges quadratically at a full-rank zero-residual root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - def-euclidean-inner-product
  - lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed pp. 256–257 / PDF pp. 275–276: equation (10.30) and the zero residual quadratic-rate case."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Sections Newton and Gauss-Newton and An actual bound for Gauss-Newton: zero residual local rate."
---

## Statement

Let $r:U\to\mathbb R^m$ be $C^1$ on an open $U\subseteq\mathbb R^n$, and let
$x_*\in U$ satisfy $r(x_*)=0$. Let $B=\{x:\|x-x_*\|_2\le R\}\subseteq U$ be
convex. Suppose $J=Dr$ is $L$-Lipschitz on $B$ and, for some $\sigma>0$,
$$\|J(x)v\|_2\ge\sigma\|v\|_2\qquad(x\in B,\ v\in\mathbb R^n).$$
Thus every $J(x)$ has full column rank. For the exact Gauss-Newton iteration
$x_{k+1}=x_k+p_k$, where $p_k$ is the unique minimizer of
$\|r(x_k)+J(x_k)p\|_2^2$, set $C=L/(2\sigma)$. Then every $x_k\in B$ satisfies
$$\|x_{k+1}-x_*\|_2\le C\|x_k-x_*\|_2^2.$$
If $C>0$ and $\|x_0-x_*\|_2\le\min\{R,1/(2C)\}$, all iterates stay in the ball,
converge to $x_*$, and contract at least by $1/2$ per iteration after the
quadratic estimate. If $C=0$, one exact step reaches $x_*$. This result concerns
exact solves; it asserts no finite-precision convergence rate.

## Facts & Assumptions

**Given:** The residual, root, convex ball, Lipschitz Jacobian, uniform lower bound $\sigma$, and exact Gauss-Newton steps in the Statement.

[F1] [[lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian]]: on a convex segment, $\|r(x)-r(x_*)-J(x)(x-x_*)\|_2\le(L/2)\|x-x_*\|_2^2$.

[F2] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: an exact full-rank branch returns the unique minimizer of the linearized residual least-squares problem.

[F3] [[def-euclidean-inner-product]]: the Euclidean inner product is bilinear and symmetric, and $\|v\|_2^2=v^Tv$.

[A1] $r(x_*)=0$.

[A2] $\|J(x)v\|_2\ge\sigma\|v\|_2$ with $\sigma>0$ for every $x\in B$ and every $v$.

## Proof

1.1 Fix $x\in B$, put $e=x-x_*$, and write $E=r(x)-r(x_*)-J(x)e$. By [F1] and [A1], $r(x)=J(x)e+E$ with $\|E\|_2\le(L/2)\|e\|_2^2$. [given, A1, F1, construct]

2.1 Let $p$ be the exact Gauss-Newton step and set $h:=p+e$. For every $v\in\mathbb R^n$, minimality of $p$ gives $\frac12\|r(x)+J(x)(p+tv)\|_2^2\ge\frac12\|r(x)+J(x)p\|_2^2$ for all real $t$. Expanding in $t$ shows the linear coefficient $v^TJ(x)^T(r(x)+J(x)p)$ must be zero (otherwise a sufficiently small $t$ of the opposite sign decreases the quadratic). Since this holds for every $v$, $J(x)^T(J(x)h+E)=0$ by step 1.1. [given, A2, F2, F3, step 1.1, algebra]

3.1 Set $q:=-h$. Step 2.1 gives $J(x)^T(E-J(x)q)=0$, so $E-J(x)q$ is orthogonal to $J(x)q$; hence $\|E\|_2^2=\|J(x)q\|_2^2+\|E-J(x)q\|_2^2\ge\|J(x)q\|_2^2$. By [A2], $\|J(x)q\|_2\ge\sigma\|q\|_2$. Therefore $\|x+p-x_*\|_2=\|h\|_2=\|q\|_2\le\|E\|_2/\sigma\le C\|e\|_2^2$. [step 1.1, step 2.1, A2, F3, algebra]

4.1 If $C=0$, step 3.1 gives $x_1=x_*$. If $C>0$ and $\|x_0-x_*\|_2\le1/(2C)$, step 3.1 gives $\|x_1-x_*\|_2\le\frac12\|x_0-x_*\|_2$, so $x_1\in B$; induction repeats the same bound for every $k$, and $\|x_k-x_*\|_2\le2^{-k}\|x_0-x_*\|_2\to0$. [step 3.1, algebra] ∎
