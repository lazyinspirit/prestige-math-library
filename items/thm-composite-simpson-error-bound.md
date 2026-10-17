---
id: thm-composite-simpson-error-bound
kind: theorem
title: Composite Simpson error bound for a four-times continuously differentiable function
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-composite-simpson-rule
  - lem-simpson-panel-peano-kernel
  - thm-additivity-over-subintervals
  - lem-triangle-inequality-finite
  - def-higher-derivatives-and-smoothness
  - thm-heine-borel-r
  - thm-extreme-value-r
  - thm-monotonicity-of-the-integral
  - thm-linearity-of-the-integral
justified_by: []
proof_strategy: direct
axiom_use: None. The argument is finite and choice-free.
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
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; complete chapter read
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; equations (5.6.14), (5.6.20)–(5.6.21), and Exercise 5.6.4
---

## Statement

Let $a<b$, let $n\ge2$ be an even integer, and put $h=(b-a)/n$. If
$f\in C^4([a,b])$, set $M_4=\max_{x\in[a,b]}|f^{(4)}(x)|$. Then the value
$Q_S(f;a,b,n)$ of [[alg-composite-simpson-rule]] satisfies

$$\left|\int_a^b f(x)\,dx-Q_S(f;a,b,n)\right|\le\frac{(b-a)h^4}{180}M_4.$$

The integral is the Riemann integral. This is an exact-arithmetic quadrature
bound; evaluation and summation roundoff are not included.

## Facts & Assumptions

**Given:** Reals $a<b$, an even integer $n\ge2$, $h=(b-a)/n$, and $f\in C^4([a,b])$.

[F1] [[def-higher-derivatives-and-smoothness]]: $C^4([a,b])$ makes $f^{(4)}$ continuous on the closed interval.

[F2] [[thm-heine-borel-r]]: every closed bounded interval $[a,b]$ is compact.

[F3] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact subset of $\mathbb R$ attains its maximum.

[F4] [[alg-composite-simpson-rule]]: the composite value is the sum, over $j<n/2$, of $\frac h3(f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2}))$.

[F5] [[lem-simpson-panel-peano-kernel]]: on a panel of length $L$, the Simpson error is $\int Kf^{(4)}$, where $K\le0$ and $\int|K|=L^5/2880$.

[F6] [[thm-additivity-over-subintervals]]: the integral over a finite partition is the sum of its integrals over the adjacent panels.

[F7] [[lem-triangle-inequality-finite]]: the absolute value of a finite sum is at most the sum of the absolute values.

[F8] [[thm-monotonicity-of-the-integral]]: pointwise order between integrable functions on an increasing interval gives the same order between their integrals.

[F9] [[thm-linearity-of-the-integral]]: scalar multiples of integrable functions are integrable and their integrals scale by that scalar.

## Proof

1.1 By [F1], $f^{(4)}$ is continuous. The interval is compact by [F2], so [F3] gives $M_4=\max_{[a,b]}|f^{(4)}|<\infty$. For each $j=0,\ldots,n/2-1$, put $u=x_{2j}$ and $L=2h$. The local rule from [F4] is $S(f;u,u+L)$; by [F5], its error is $E_j=\int_u^{u+L}K_{u,u+L}f^{(4)}$ and $\int_u^{u+L}|K_{u,u+L}|=(2h)^5/2880$. Since $K_{u,u+L}\le0$, its absolute value equals its negative, hence is integrable by [F5] and [F9]. The integrable functions satisfy $-M_4|K_{u,u+L}|\le K_{u,u+L}f^{(4)}\le M_4|K_{u,u+L}|$. Monotonicity [F8] and scalar linearity [F9] therefore give $|E_j|\le M_4\int_u^{u+L}|K_{u,u+L}|=M_4(2h)^5/2880$. [given, F1, F2, F3, F4, F5, F8, F9, construct]

2.1 Additivity [F6] gives $\int_a^b f$ as the sum of the local panel integrals. Summing the local Simpson expressions in [F4], each interior even-indexed value appears in two adjacent blocks and each odd-indexed value appears once; hence their sum is exactly $Q_S(f;a,b,n)$. Therefore the global error is $\sum_{j=0}^{n/2-1}E_j$. [step 1.1, F4, F6, algebra]

3.1 The finite-sum triangle inequality [F7] yields $|\sum_jE_j|\le(n/2)M_4(2h)^5/2880=nM_4h^5/180$. Using $nh=b-a$ gives the stated bound. [step 1.1, step 2.1, F7, algebra] ∎
