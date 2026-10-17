---
id: ex-convex-composite-midpoint-and-trapezoid-bracketing
kind: example
title: Convex data bracket the integral between composite midpoint and trapezoid values
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-composite-midpoint-rule
  - lem-composite-midpoint-panel-error-kernel
  - def-composite-trapezoidal-rule
  - def-convex-concave-and-midpoint-convex-functions
  - cor-second-derivative-characterises-convexity
  - thm-monotonicity-of-the-integral
  - thm-ftc-second-part
  - thm-additivity-over-subintervals
  - def-higher-derivatives-and-smoothness
  - thm-algebra-of-continuous-functions
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.1
      url: https://fncbook.com/integration/
      locator: Printed pp. 5–7; midpoint/trapezoid formulas and convex bracketing discussion
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; composite trapezoid derivation
---

## Example

Let $f\in C^2([a,b])$ be convex, with $a<b$, and let $n\ge1$ be an integer. Then

$$Q_M(f;a,b,n)\le\int_a^b f(x)\,dx\le T_n(f),$$

where $Q_M$ is the composite midpoint value and $T_n(f)$ is the published
composite trapezoidal value of [[def-composite-trapezoidal-rule]] on the same
interval and uniform grid. The left inequality follows from nonnegative second
derivative and the midpoint panel kernel; the right follows because a convex
graph lies below each endpoint chord.

## Facts & Assumptions

**Given:** Reals $a<b$, an integer $n\ge1$, and a convex
$f\in C^2([a,b])$.

[F1] [[def-convex-concave-and-midpoint-convex-functions]]: convexity means
$f(\lambda x+(1-\lambda)y)\le\lambda f(x)+(1-\lambda)f(y)$ for
$0\le\lambda\le1$.

[F2] [[cor-second-derivative-characterises-convexity]]: a twice
differentiable function on an open interval is convex exactly when its second
derivative is nonnegative there.

[F3] [[lem-composite-midpoint-panel-error-kernel]]: the midpoint panel error
is an integral of a nonnegative kernel times $f''$.

[F4] [[alg-composite-midpoint-rule]]: the composite midpoint value is the sum
of the panel midpoint values multiplied by the common width $h$.

[F5] [[def-composite-trapezoidal-rule]]: the composite value is $h$ times the
sum of endpoint values with half weights and interior node values with unit
weights.

[F6] [[thm-monotonicity-of-the-integral]]: pointwise order of integrable
functions on an increasing interval implies order of their integrals.

[F7] [[thm-ftc-second-part]]: an integrable derivative has integral equal to
the endpoint increment of its antiderivative.

[F8] [[thm-additivity-over-subintervals]]: integrals add over adjacent
subintervals.

[F9] [[def-higher-derivatives-and-smoothness]] and
[[thm-algebra-of-continuous-functions]]: $f''$ is continuous, and affine
combinations of endpoint values define a continuous chord on each panel.

[F10] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: every
continuous function on a closed interval (the case $q=1$) is Riemann
integrable.

[F11] [[lem-derivative-of-a-power]]: $(x^k)'=kx^{k-1}$ for each integer
$k\ge1$.

[F12] [[thm-algebra-of-derivatives]]: derivatives of sums and scalar multiples
are the corresponding sums and scalar multiples of their derivatives.

## Verification

1.1 Restrict $f$ to $(a,b)$; it remains convex by [F1] and twice differentiable by [F9]. By [F2], $f''\ge0$ on $(a,b)$. Continuity of $f''$ on $[a,b]$ extends this inequality to the endpoints: a negative endpoint value would, by continuity, force negative values at interior points nearby. Thus $f''\ge0$ on every closed panel. [given, F1, F2, F9]

1.2 On a panel define its chord $L_j(x)=\frac{x_{j+1}-x}{h}f(x_j)+\frac{x-x_j}{h}f(x_{j+1})$. For $x\in[x_j,x_{j+1}]$, the coefficients lie in $[0,1]$ and sum to $1$; convexity [F1] gives $f(x)\le L_j(x)$. Both functions are continuous by [F9] and integrable by [F10]. Monotonicity [F6] gives $\int_{x_j}^{x_{j+1}}f\le\int_{x_j}^{x_{j+1}}L_j$. Define $G_j(x)=\frac{f(x_j)}h(x_{j+1}x-x^2/2)+\frac{f(x_{j+1})}h(x^2/2-x_jx)$. The power rule [F11] and sum/scalar rules [F12] give $G_j'=L_j$; applying [F7] and evaluating at the endpoints gives $\int_{x_j}^{x_{j+1}}L_j=G_j(x_{j+1})-G_j(x_j)=\frac h2(f(x_j)+f(x_{j+1}))$. Summing and using [F5] and [F8] yields $\int_a^b f\le T_n$: the interior node values are each counted in two adjacent panel averages, hence get total weight $h$; the two endpoints occur once and get weight $h/2$. [given, F1, F5, F6, F7, F8, F9, F10, F11, F12, algebra]

2.1 For each panel $[x_j,x_{j+1}]$, [F3] and [F6] give $h f((x_j+x_{j+1})/2)\le\int_{x_j}^{x_{j+1}}f$, since the kernel is nonnegative and $f''\ge0$. Summing over panels by [F8] and using [F4] gives $Q_M\le\int_a^b f$. [step 1.1, F3, F4, F6, F8]

3.1 The two inequalities in steps 1.2 and 2.1 give the claimed bracketing. [step 1.2, step 2.1] ∎
