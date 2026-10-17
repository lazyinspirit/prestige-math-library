---
id: thm-updated-jacobian-newton-local-quadratic-convergence
kind: theorem
title: "Updated-Jacobian Newton has local quadratic convergence at a simple root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
  - lem-vector-newton-correction-error-under-lipschitz-jacobian
  - lem-newton-contraction-near-an-invertible-derivative
  - lem-geometric-sequence-null
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 139–140 / PDF pp. 5–6: local Newton error identity and quadratic convergence theorem"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: vector Newton iteration and the stated local quadratic behavior under suitable circumstances"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let
$F:U\to\mathbb R^n$ be $C^2$, meaning $F$ is $C^1$ and its first derivative
is itself continuously differentiable. Write $J(x)=DF(x)$ as a matrix in the
standard basis. Let $x_*\in U$ satisfy $F(x_*)=0$ and suppose $J(x_*)$ is
invertible. Suppose there are $R>0$ and $L\ge0$ such that the closed Euclidean
ball
$$\overline B_2(x_*,R):=\{x\in\mathbb R^n:\|x-x_*\|_2\le R\}$$
lies in $U$ and
$$\|J(x)-J(y)\|_{\rm op}\le L\|x-y\|_2\qquad(x,y\in\overline B_2(x_*,R)),$$
where $\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$. Then there are
$r\in(0,R]$ and $K>0$ such that every $J(x)$ on $\overline B_2(x_*,r)$ is
invertible with $\|J(x)^{-1}\|_{\rm op}\le K$. Put $C:=KL/2$ and choose
$\rho\in(0,r]$ with $C\rho\le1/2$ (if $L=0$, any $\rho\le r$ works).

For every $x_0\in\overline B_2(x_*,\rho)$, each update attempted by
[[alg-finite-budget-newton-for-vector-residuals]] is defined, remains in this
ball, and satisfies
$$\|x_{k+1}-x_*\|_2\le C\|x_k-x_*\|_2^2.$$
If the ordinary exact-Jacobian Newton recurrence is continued indefinitely,
these estimates imply $x_k\to x_*$ with a quadratic error bound. A finite
budget may stop before the residual tolerance is met; `root` status records
only that tolerance, not an exact-zero certificate. This result gives no
arbitrary-start or global-convergence guarantee.

## Facts & Assumptions

**Given:** $n,U,F,x_*,R,L$ and the Jacobian conditions in the Statement; a
residual tolerance $\varepsilon\ge0$, update budget $N\in\mathbb N_0$, and an
initial value $x_0\in\overline B_2(x_*,\rho)$.

[F1] [[lem-newton-contraction-near-an-invertible-derivative]]: if $F$ is $C^1$ on an open subset of $\mathbb R^n$ and $DF(x_*)$ is invertible, there is a closed ball about $x_*$ on which every $DF(x)$ is invertible and its inverse has a uniform operator-norm bound. Its additional contraction conclusion concerns the fixed-inverse map $T_y(x)=x+B(y-F(x))$ with $B=DF(x_*)^{-1}$.

[F2] [[lem-vector-newton-correction-error-under-lipschitz-jacobian]]: for $x$ in a convex region containing $x_*$, $\|F(x)-F(x_*)-J(x)(x-x_*)\|_2\le(L/2)\|x-x_*\|_2^2$ when $J$ is $L$-Lipschitz there.

[F3] [[alg-newton-correction-for-vector-residuals]]: if $J(x_k)$ is invertible, the unique correction solves $J(x_k)s_k=-F(x_k)$; otherwise the correction is unavailable.

[F4] [[alg-finite-budget-newton-for-vector-residuals]]: the exact-Jacobian procedure tests the residual and update budget before a correction, and checks trial membership in $U$ before updating.

[F5] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability at every point and continuity of the derivative-matrix entries.

[F6] [[def-jacobian-matrix-and-gradient]]: the Jacobian entries in the standard basis are the first partial derivatives; [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies this matrix with the matrix of $DF$.

[F7] [[lem-geometric-sequence-null]]: if $|q|<1$, then $q^k\to0$.

## Proof

1.1 Apply [F1] at $x_*$. It supplies a radius $r_0>0$ and a finite inverse bound $K>0$ on $\overline B_2(x_*,r_0)$. Set $r:=\min\{R,r_0\}$, so the ball remains inside $U$, the Jacobian remains $L$-Lipschitz, and $\|J(x)^{-1}\|_{\rm op}\le K$ throughout it. Only this inverse-bound conclusion of [F1] is used; the contraction there is for a fixed inverse matrix, not for the updated-Jacobian recurrence. [given, F1, F5, choose]

2.1 Let $C:=KL/2$. If $C>0$, choose $0<\rho\le\min\{r,(2C)^{-1}\}$; if $C=0$, choose any $0<\rho\le r$. Then $C\rho\le1/2$. [step 1.1, given, choose, algebra]

3.1 Suppose an update is attempted at $x_k\in\overline B_2(x_*,\rho)$ and put $e_k:=x_k-x_*$. The inverse bound makes the correction in [F3] unique. Since $F(x_*)=0$, [F2] and $J(x_k)e_k-F(x_k)=J(x_k)e_k-[F(x_k)-F(x_*)]$ give $e_{k+1}=J(x_k)^{-1}(J(x_k)e_k-F(x_k))$ and $\|e_{k+1}\|_2\le C\|e_k\|_2^2$. The full trial is in $U$ because $\|e_{k+1}\|_2\le C\rho\|e_k\|_2\le\|e_k\|_2/2\le\rho/2$. [given, F2, F3, F5, F6, step 1.1, step 2.1, algebra]

4.1 Starting from $x_0$ in the stated ball, induction using step 3.1 shows every attempted update is valid, remains in the ball, and obeys the quadratic bound. It also gives $\|x_k-x_*\|_2\le2^{-k}\|x_0-x_*\|_2$ for every generated iterate; [F7] makes this tend to zero if the recurrence is continued indefinitely. The finite-budget algorithm may stop earlier under its own residual or budget rule. [given, F4, F7, step 3.1, induction] ∎
