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
  - def-composite-trapezoidal-rule
  - def-convex-concave-and-midpoint-convex-functions
  - thm-monotonicity-of-the-integral
  - thm-linearity-of-the-integral
  - thm-ftc-second-part
  - thm-additivity-over-subintervals
  - def-darboux-integral
  - thm-darboux-equals-riemann
  - def-darboux-sums
  - def-partition-and-refinement
  - lem-finite-sum-permutation-invariance
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

Let $f:[a,b]\to\mathbb R$ be convex and Darboux integrable on $[a,b]$, with
$a<b$, and let $n\ge1$ be an integer. Then

$$Q_M(f;a,b,n)\le\int_a^b f(x)\,dx\le T_n(f),$$

where $Q_M$ is the composite midpoint value and $T_n(f)$ is the published
composite trapezoidal value of [[def-composite-trapezoidal-rule]] on the same
interval and uniform grid. Darboux integrability is the explicit premise that
makes the displayed Riemann integral defined. The proof uses convexity directly
for both inequalities and assumes no differentiability.

## Facts & Assumptions

**Given:** Reals $a<b$, an integer $n\ge1$, and a convex Darboux-integrable
$f:[a,b]\to\mathbb R$.

[F1] [[def-convex-concave-and-midpoint-convex-functions]]: convexity means
$f(\lambda x+(1-\lambda)y)\le\lambda f(x)+(1-\lambda)f(y)$ for
$0\le\lambda\le1$.

[F2] [[def-darboux-integral]], [[thm-darboux-equals-riemann]],
[[def-darboux-sums]], and [[def-partition-and-refinement]]: Darboux
integrability means the lower and upper integrals agree, and this integral
agrees with the tagged-Riemann definition.

[F3] [[lem-finite-sum-permutation-invariance]]: reordering a finite list of
terms by a permutation does not change its sum.

[F4] [[alg-composite-midpoint-rule]]: the composite midpoint value is the sum
of the panel midpoint values multiplied by the common width $h$.

[F5] [[def-composite-trapezoidal-rule]]: the composite value is $h$ times the
sum of endpoint values with half weights and interior node values with unit
weights.

[F6] [[thm-monotonicity-of-the-integral]]: pointwise order of integrable
functions on an increasing interval implies the same order for their
integrals.

[F7] [[thm-linearity-of-the-integral]]: sums and scalar multiples of
integrable functions are integrable, and their integrals are linear.

[F8] [[thm-additivity-over-subintervals]]: an integrable function remains
integrable on subintervals, and its integral adds over adjacent subintervals.

[F9] [[thm-algebra-of-continuous-functions]]: affine functions and
polynomials are continuous.

[F10] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: every
continuous function on a closed interval (the case $q=1$) is Riemann
integrable.

[F11] [[lem-derivative-of-a-power]]: $(x^k)'=kx^{k-1}$ for each integer
$k\ge1$.

[F12] [[thm-algebra-of-derivatives]]: the sum, scalar-multiple, and product
rules give the corresponding derivatives.

[F13] [[thm-ftc-second-part]]: an integrable derivative has integral equal to
the endpoint increment of its antiderivative.

## Verification

1.1 Fix a panel $[u,v]=[x_j,x_{j+1}]$, write $h=v-u$ and $m=(u+v)/2$, and let
$g(x):=f(u+v-x)$. The restriction of $f$ to this panel is integrable by [F8].
Reflect any partition of $[u,v]$ about $m$ and reverse the order of its nodes;
this gives an involution on the set of partitions. Each reflected subinterval
has the same length and the same range values of $g$ as the corresponding
original subinterval has for $f$. Thus the lower and upper Darboux sums agree
after reversing their finite lists of terms, by [F3]. Since the reflected
partitions run through all partitions, [F2] shows that $g$ is integrable and
$\int_u^v g=\int_u^v f$. [F2, F3, F8, construct]

2.1 For every $x\in[u,v]$, convexity [F1] at weight $1/2$ gives
$2f(m)\le f(x)+g(x)$. The constant function is integrable by [F10], and
$f+g$ is integrable by [F7] and step 1.1. Monotonicity [F6] and linearity [F7]
therefore give $\int_u^v 2f(m)\,dx\le\int_u^v(f+g)\,dx=2\int_u^v f\,dx$. The
function $G(x)=2f(m)x$ is an antiderivative of the constant integrand, by
[F11] and [F12]. Hence [F13] gives $2h f(m)\le2\int_u^v f\,dx$, so
$h f(m)\le\int_u^v f\,dx$. [given, F1, F6, F7, F10, F11, F12, F13, step 1.1]

3.1 For each panel put $u=x_j$, $v=x_{j+1}$ and $h=v-u$, and define the
endpoint chord
$L_j(x):=\frac{v-x}{h}f(u)+\frac{x-u}{h}f(v)$. For $x\in[u,v]$, the
coefficients are in $[0,1]$ and sum to $1$, so [F1] gives $f(x)\le L_j(x)$.
The functions are integrable by the given premise and by continuity of the
affine chord [F9] with [F10]. Monotonicity [F6] gives
$\int_u^v f\le\int_u^v L_j$. Set
$$G_j(x):=f(u)(x-u)+\frac{f(v)-f(u)}{2h}(x-u)^2.$$
The power, product, sum, and scalar rules [F11, F12] give $G_j'=L_j$, so [F13] gives
$\int_u^v L_j=G_j(v)-G_j(u)=\frac h2(f(u)+f(v))$. Summing over panels,
additivity [F8] gives the integral over $[a,b]$, and each interior node is
counted twice with half weight while each endpoint is counted once with half
weight. By [F5] this sum is $T_n(f)$, so $\int_a^b f\le T_n(f)$.
[given, F1, F5, F6, F8, F9, F10, F11, F12, F13, algebra]

4.1 Summing the panel inequalities from step 2.1 by [F8] and using the
composite midpoint formula [F4] gives
$Q_M(f;a,b,n)\le\int_a^b f$. Combining this with step 3.1 proves the
bracketing. [step 2.1, step 3.1, F4, F8] ∎
