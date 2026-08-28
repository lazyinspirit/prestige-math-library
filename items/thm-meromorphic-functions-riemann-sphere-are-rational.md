---
id: thm-meromorphic-functions-riemann-sphere-are-rational
kind: theorem
title: "Meromorphic functions on the Riemann sphere are exactly the rational functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-meromorphic-function-riemann-sphere, thm-liouville-bounded-entire-function, thm-one-point-compactification-properties, thm-poles-meromorphic-function-are-discrete-and-countable, thm-pole-characterizations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

A map on the Riemann sphere is meromorphic if and only if it is rational.
Precisely, $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ is meromorphic on the
Riemann sphere exactly when it is not identically $\infty$ and there are
polynomials $P,Q\in\mathbb C[z]$, not both zero and chosen coprime, such that
on the finite chart
$$f(z)=\frac{P(z)}{Q(z)}.$$

## Facts & Assumptions

**Given:** A sphere-valued map $f$ on $\widehat{\mathbb C}$.

[L1] A pole is exactly a finite nonzero principal part in the Laurent expansion, and the same criterion applies at $\infty$ in the $1/z$-chart ([[thm-pole-characterizations]]).

[L2] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[L3] The poles of a meromorphic plane function form a closed discrete set ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

## Proof

**Proof technique:** direct.

1.1 If $R=P/Q$ is rational with coprime polynomials, then it is holomorphic on $\mathbb C$ away from the zeros of $Q$, those zeros are poles of finite order, and in the infinity chart the expression $R(1/w)$ is meromorphic at $0$. So every rational map is meromorphic on the sphere. [L1, given, algebra]

1.2 Conversely, assume $f$ is sphere-meromorphic. Meromorphy at $\infty$ gives a radius beyond which there are no finite poles, and [L3] makes the remaining finite pole set discrete. Covering that pole set by isolating discs and using compactness of the containing closed disc shows that only finitely many finite poles occur. [L3, given, choose]

1.3 Fact [L1] gives a finite principal part at each finite pole and a finite principal part in the infinity chart. Subtracting all of those principal parts leaves an entire function that is bounded near $\infty$, hence bounded on all of $\mathbb C$; [L2] therefore makes the remainder constant. So $f$ is a rational function. [L1, L2, given]

2.1 The first step proves the rational-to-meromorphic direction and the latter two steps prove the converse, so sphere-meromorphic functions are exactly rational functions. [given] ∎
