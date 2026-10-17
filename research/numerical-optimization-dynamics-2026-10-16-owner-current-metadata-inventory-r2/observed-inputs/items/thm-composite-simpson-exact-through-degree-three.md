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
  - def-higher-derivatives-and-smoothness
  - thm-algebra-of-continuous-functions
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
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
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

**Given:** Reals $a<b$, an even integer $n\ge2$, and $p(x)=c_0+c_1x+c_2x^2+c_3x^3$.

[F1] [[alg-composite-simpson-rule]]: the composite value is $\frac h3\sum_{j<n/2}(f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2}))$.

[F2] [[lem-simpson-panel-peano-kernel]]: on a panel, the error equals the integral of its Peano kernel times the fourth derivative.

[F3] [[thm-additivity-over-subintervals]]: the integral over the partition is the sum of the integrals over its adjacent blocks.

[F4] [[lem-derivative-of-a-power]]: for $k\ge1$, $(x^k)'=kx^{k-1}$, and $x^0$ has derivative zero.

[F5] [[thm-algebra-of-derivatives]]: sums and scalar multiples of differentiable functions have the corresponding derivatives.

[F6] [[def-higher-derivatives-and-smoothness]]: $p\in C^4([a,b])$ requires that $p$ and its derivatives through order four exist and are continuous on $[a,b]$.

[F7] [[thm-algebra-of-continuous-functions]]: every polynomial function is continuous on its domain.

## Proof

1.1 Repeated use of [F4] and the sum/scalar rules in [F5] gives, for every real $x$, $$p'(x)=c_1+2c_2x+3c_3x^2,\qquad p''(x)=2c_2+6c_3x,\qquad p'''(x)=6c_3,\qquad p^{(4)}(x)=0.$$ These formulas establish existence of all derivatives through order four, including their restrictions to the endpoints with the one-sided convention. Each of $p,p',p'',p'''$ and $p^{(4)}$ is a polynomial function, hence continuous by [F7]. Thus $p\in C^4([a,b])$ by [F6], and $p^{(4)}\equiv0$. [given, F4, F5, F6, F7, algebra]

2.1 For every block $[x_{2j},x_{2j+2}]$, the restriction of $p$ is $C^4$ and has fourth derivative zero. The Peano-kernel identity [F2] makes that block's Simpson error $\int_{x_{2j}}^{x_{2j+2}}K_{x_{2j},x_{2j+2}}(x)\,0\,dx=0$. [step 1.1, F2]

3.1 By [F3], summing the exact block integrals gives $\int_a^b p$. Summing the block Simpson values from [F1], each endpoint appears once, each odd interior node appears with coefficient $4$, and each even interior node appears with coefficient $2$. This is exactly the composite formula [F1], so the global rule is exact. [step 2.1, F1, F3, algebra] ∎

