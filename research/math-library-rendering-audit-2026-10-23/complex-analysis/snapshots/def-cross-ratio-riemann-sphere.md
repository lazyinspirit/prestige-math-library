---
id: def-cross-ratio-riemann-sphere
kind: definition
title: "The cross-ratio of an ordered quadruple of sphere points"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-riemann-sphere-one-point-compactification]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
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

## Definition

Let $z_1,z_2,z_3,z_4\in\widehat{\mathbb C}$ be pairwise distinct. Their
**cross-ratio** is
$$[z_1,z_2;z_3,z_4]:=\frac{(z_1-z_3)(z_2-z_4)}{(z_1-z_4)(z_2-z_3)}$$
when all four points are finite, and when exactly one point is $\infty$ we use
the limiting conventions
$$[\infty,z_2;z_3,z_4]=\frac{z_2-z_4}{z_2-z_3},\qquad [z_1,\infty;z_3,z_4]=\frac{z_1-z_3}{z_1-z_4},$$
$$[z_1,z_2;\infty,z_4]=\frac{z_2-z_4}{z_1-z_4},\qquad [z_1,z_2;z_3,\infty]=\frac{z_1-z_3}{z_2-z_3}.$$

Because the four points are distinct, at most one of them is $\infty$, so these
cases are exhaustive. The ordering matters: permuting the four entries changes
the value by the usual fractional-linear transformations on $\mathbb C\setminus\{0,1\}$.
