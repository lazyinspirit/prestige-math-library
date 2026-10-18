---
id: cex-pe12-linear-ritz-does-not-commute
kind: counterexample
title: The linear Ritz projection need not commute with the p-Laplacian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-countable-choice, def-parabolic-ritz-projection, lem-two-cell-hat-and-quadratic-functions-lie-in-h10, lem-parabolic-zero-boundary-sobolev-space-is-separable, thm-poincare-inequality-for-w-one-p-zero]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement

Assume Countable Choice. On $\Omega=(0,1)$, let
$V=H_0^1(0,1;\mathbb R)$ with the full $H^1$ norm, let
$H=L^2(0,1;\mathbb R)$, and use their canonical evolution triple. Let
$w(x)=2x$ on $[0,1/2]$ and $w(x)=2(1-x)$ on $[1/2,1]$, and set
$V_h=\operatorname{span}\{w\}$. Use the coercive symmetric form
$a(f,g)=\int_0^1 f'g'\,dx$ for the Ritz projection, and let
$v(x)=x(1-x)$. For the nonlinear $3$-Laplacian flux $J_3(s)=|s|s$,
$$\int_0^1 |(R_hv)'|(R_hv)'w'\,dx=\frac12 \ne\frac23=\int_0^1|v'|v'w'\,dx.$$
Thus the linear Ritz projection does not in general preserve the nonlinear
$p$-Laplacian Galerkin residual.

## Facts & Assumptions

**Given:** Countable Choice, the interval, the spaces and functions above,
the Ritz form, and the scalar flux $J_3$.

[F1] For a real evolution triple, the elliptic Ritz projection is defined by
the bounded coercive form equation
$a(R_hz,y_h)=a(z,y_h)$ for every $y_h\in V_h$
([[def-parabolic-ritz-projection]]).

[F2] The midpoint hat $w$ and quadratic $v=x(1-x)$ belong to
$H_0^1(0,1)$ ([[lem-two-cell-hat-and-quadratic-functions-lie-in-h10]]).

[F3] Poincare's inequality on $(0,1)$ gives
$\|z\|_{L^2}\le\|z'\|_{L^2}$ for $z\in H_0^1(0,1)$, so the form
$a(f,g)=\int f'g'$ is bounded and coercive on the full $H^1$ norm
([[thm-poincare-inequality-for-w-one-p-zero]]).

[F4] The real space $H_0^1(0,1)$ is a separable Hilbert space continuously
and densely included in $L^2(0,1)$, hence defines the required evolution
triple ([[lem-parabolic-zero-boundary-sobolev-space-is-separable]]).

[A1] Countable Choice is assumed by the zero-boundary evolution-space
supplier ([[def-countable-choice]]).

## Proof
1.1 By [F2], $V_h\subset V$ and $v\in V$. By [F3], $|a(f,g)|\le\|f\|_{H^1}\|g\|_{H^1}$ and $a(f,f)=\|f'\|_2^2\ge\frac12\|f\|_{H^1}^2$, so $a$ is bounded, symmetric and coercive as required by [F1]. The displayed hat has slopes $2$ and $-2$. Also $v'(x)=1-2x$, and direct integration gives $$a(v,w)=2\int_0^{1/2}(1-2x)\,dx -2\int_{1/2}^1(1-2x)\,dx=1,\qquad a(w,w)=4.$$ Since $R_hv=cw$, [F1] with test $w$ gives $4c=1$, so $R_hv=w/4$ and its slopes are $1/2$ and $-1/2$. [A1, F1, F2, F3, F4, given, algebra]

2.1 On each half interval, $|(R_hv)'|(R_hv)'w'=1/2$, so its integral is $1/2$. On the left half, $v'\ge0$ and $|v'|v'w'=2(1-2x)^2$, whose integral is $1/3$. On the right half, $v'\le0$ and the same integrand $2(1-2x)^2$ also integrates to $1/3$. Therefore $\int_0^1|v'|v'w'=2/3$. [F2, step 1.1, given, algebra]

3.1 The two residual pairings are $1/2$ and $2/3$, so they are unequal. This explicit conforming Ritz space refutes any general claim that a linear Ritz projection preserves every nonlinear $p$-Laplacian Galerkin residual. [step 1.1, step 2.1, given, discharge-contradiction] ∎
