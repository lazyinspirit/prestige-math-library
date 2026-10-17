---
id: thm-composite-midpoint-error-bound
kind: theorem
title: Composite midpoint error bound for a twice continuously differentiable function
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-composite-midpoint-rule
  - lem-composite-midpoint-panel-error-kernel
  - thm-additivity-over-subintervals
  - lem-triangle-inequality-finite
justified_by: []
proof_strategy: direct
axiom_use: None. The proof sums finitely many panel estimates and uses no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: MATH 373 lecture notes, §8 Approximation of Integrals
      url: https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf
      locator: §8.2, printed pp. 37–38/PDF pp. 3–4, Composite Midpoint rule example and second-derivative error formula; relevant argument checked.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Comparison material for trapezoid and Simpson rules; the midpoint bound is proved locally here.
---

## Statement

Let $a<b$, let $n\ge1$ be an integer, and put $h=(b-a)/n$. If
$f\in C^2([a,b])$, define $M_2=\max_{x\in[a,b]}|f''(x)|$. The composite
midpoint value $Q_M(f;a,b,n)$ of [[alg-composite-midpoint-rule]] satisfies

$$\left|\int_a^b f(x)\,dx-Q_M(f;a,b,n)\right|\le\frac{(b-a)h^2}{24}M_2.$$

The integral is the Riemann integral. This is an exact-arithmetic quadrature
bound; evaluation and summation roundoff are not included.

## Facts & Assumptions

**Given:** Reals $a<b$, an integer $n\ge1$, $h=(b-a)/n$, and
$f\in C^2([a,b])$.

[F1] [[alg-composite-midpoint-rule]]: $Q_M$ is the sum of the values at the
$n$ panel midpoints, each multiplied by $h$.

[F2] [[lem-composite-midpoint-panel-error-kernel]]: on a panel of length $h$,
the difference between its integral and its midpoint value times $h$ has
absolute value at most $M_2h^3/24$.

[F3] [[thm-additivity-over-subintervals]]: the integral over a finite
partition is the sum of the integrals over its adjacent panels.

[F4] [[lem-triangle-inequality-finite]]: the absolute value of a finite sum
is at most the sum of the absolute values.

## Proof

1.1 Put $x_j=a+jh$ and $m_j=(x_j+x_{j+1})/2$ for $0\le j<n$. Each panel $[x_j,x_{j+1}]$ has length $h$ and inherits the $C^2$ restriction of $f$; $\max_{[x_j,x_{j+1}]}|f''|\le M_2$. By [F2], its midpoint error $E_j$ obeys $|E_j|\le M_2h^3/24$. [given, F2, construct]

2.1 Repeated application of [F3] gives $\int_a^b f=\sum_{j=0}^{n-1}\int_{x_j}^{x_{j+1}}f$. By [F1], $Q_M=h\sum_{j=0}^{n-1}f(m_j)$, so subtraction gives $\int_a^b f-Q_M=\sum_{j=0}^{n-1}E_j$. [step 1.1, F1, F3, algebra]

3.1 The finite-sum triangle inequality [F4] and step 1.1 yield $|\int_a^b f-Q_M|\le\sum_{j=0}^{n-1}|E_j|\le nM_2h^3/24$. Since $nh=b-a$, this is the claimed bound. [step 1.1, step 2.1, F4, algebra] ∎
