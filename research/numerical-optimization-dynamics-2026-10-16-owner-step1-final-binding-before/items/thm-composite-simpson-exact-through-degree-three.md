---
id: thm-composite-simpson-exact-through-degree-three
kind: theorem
title: Composite Simpson rule is exact through cubic degree
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-composite-simpson-rule
  - lem-simpson-panel-peano-kernel
  - thm-additivity-over-subintervals
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
axiom_use: None. The argument is a finite sum of exact panel identities.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://fncbook.com/integration/
      locator: Printed pp. 7–8; cubic exactness stated; complete chapter read
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; Exercise 5.6.4 gives the three-node rule
---

## Statement

Let $a<b$, let $n\ge2$ be an even integer, and let
$p(x)=c_0+c_1x+c_2x^2+c_3x^3$ with real coefficients. Then

$$\int_a^b p(x)\,dx=Q_S(p;a,b,n),$$

where $Q_S$ is the composite Simpson value of
[[alg-composite-simpson-rule]].

## Facts & Assumptions

**Given:** Reals $a<b$, an even integer $n\ge2$, and
$p(x)=c_0+c_1x+c_2x^2+c_3x^3$.

[F1] [[alg-composite-simpson-rule]]: the composite value is
$\frac h3\sum_{j<n/2}(f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2}))$.

[F2] [[lem-simpson-panel-peano-kernel]]: on a panel, the error equals the
integral of its Peano kernel times the fourth derivative.

[F3] [[thm-additivity-over-subintervals]]: the integral over the partition is
the sum of the integrals over its adjacent blocks.

[F4] [[lem-derivative-of-a-power]]: for $k\ge1$, $(x^k)'=kx^{k-1}$, and
$x^0$ has derivative zero.

[F5] [[thm-algebra-of-derivatives]]: sums and scalar multiples of
differentiable functions have the corresponding derivatives.

## Proof

1.1 Repeated use of [F4] and the sum/scalar rules in [F5] gives $p^{(4)}\equiv0$: the cubic term becomes constant after three derivatives, and its fourth derivative, as well as the fourth derivatives of the lower-degree terms, is zero. On each block $[x_{2j},x_{2j+2}]$, [F2] therefore makes the local Simpson error zero. [given, F2, F4, F5, algebra]

2.1 By [F3], summing the exact panel integrals gives $\int_a^b p$. Summing the local expressions from [F2], each endpoint appears once, each odd interior node appears with coefficient $4$, and each even interior node appears with coefficient $2$. This is exactly [F1], so the global rule is exact. [step 1.1, F1, F2, F3, algebra] ∎
