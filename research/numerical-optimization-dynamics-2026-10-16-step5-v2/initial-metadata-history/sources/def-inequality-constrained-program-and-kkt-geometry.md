---
id: def-inequality-constrained-program-and-kkt-geometry
kind: definition
title: Inequality constrained programs, tangent cones, constraint qualifications, and KKT
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Sections 12.1–12.3 and 12.5, printed pp. 317–341 and 351–353; conventions translated from constraints c_i(x) >= 0 to g_i(x) <= 0.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.1–5.2, printed pp. 219–227.
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R$
be $C^2$. Let $p,m\in\mathbb N$ with zero allowed; when the target
dimension is positive, let $h:U\to\mathbb R^p$ and
$g=(g_1,\ldots,g_m):U\to\mathbb R^m$ be componentwise $C^2$, and when it
is zero use the unique empty map. The $C^2$ convention for positive
dimensions is [[def-ck-euclidean-maps-and-diffeomorphisms]].
The $C^2$ inequality program is to minimize $f(x)$ subject to
$h(x)=0$ and $g_i(x)\le0$ for every $i$. Its feasible set is
$C=\{x\in U:h(x)=0,\ g_i(x)\le0\ (1\le i\le m)\}$. A feasible point $x_*$ is
a local minimizer if some open neighborhood $V$ of $x_*$ satisfies
$f(x_*)\le f(y)$ for every $y\in C\cap V$.

At a feasible $x$, the active set is
$I(x)=\{i:g_i(x)=0\}$. The Bouligand tangent cone and linearized cone are,
respectively,
$$
T_C(x)=\{d:\exists\,t_k>0,\ t_k\downarrow0,\ d_k\to d,\ x+t_kd_k\in C\},
$$
and
$$
\mathcal L_C(x)=\{d:Dh(x)d=0,\ Dg_i(x)d\le0\text{ for every }i\in I(x)\}.
$$
Gradients are column vectors and $Dg_i(x)d=\nabla g_i(x)^Td$.

The linear independence constraint qualification (LICQ) holds at $x$ when the rows of $Dh(x)$ together with
$\{\nabla g_i(x)^T:i\in I(x)\}$ are linearly independent. MFCQ holds at $x$
when $Dh(x)$ has full row rank (its rows are linearly independent) and there is $w\in\ker Dh(x)$ with
$Dg_i(x)w<0$ for every active $i$; the latter condition is vacuous if
$I(x)=\varnothing$. Here full row rank for a matrix with zero rows is
understood vacuously.

The Mangasarian–Fromovitz constraint qualification (MFCQ) is the condition
just stated. The Karush–Kuhn–Tucker (KKT) system is the stationarity,
feasibility, dual-feasibility, and complementarity system below.

For $\nu\in\mathbb R^p$ and $\lambda\in\mathbb R^m$, the Lagrangian and KKT
system are
$$
L(x,\nu,\lambda)=f(x)+\nu^Th(x)+\lambda^Tg(x),
$$
$$
h(x)=0,\quad g(x)\le0,\quad \lambda\ge0,\quad \lambda_i g_i(x)=0\ (1\le i\le m),\quad \nabla_xL(x,\nu,\lambda)=0.
$$
The critical cone for a KKT tuple is
$\mathcal K(x,\nu,\lambda)=\mathcal L_C(x)\cap
\{d:\nabla f(x)^Td=0\}$. These definitions use the differentiability and
gradient conventions of [[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-euclidean-inner-product]], and [[def-jacobian-matrix-and-gradient]].

## Remarks

This page uses $g_i\le0$ and nonnegative inequality multipliers throughout.
The equality-only Lagrange multiplier rule does not supply any inequality
multiplier assertion.
