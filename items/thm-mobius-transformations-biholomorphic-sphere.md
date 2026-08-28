---
id: thm-mobius-transformations-biholomorphic-sphere
kind: theorem
title: "Every Möbius transformation is a biholomorphism of the Riemann sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-sphere-holomorphic-charts, def-mobius-transformation, thm-mobius-group-and-projective-linear-identification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

Every Möbius transformation is a biholomorphism of the Riemann sphere.
Explicitly, if
$$M(z)=\frac{az+b}{cz+d}\qquad(ad-bc\neq0),$$
then $M:\widehat{\mathbb C}\to\widehat{\mathbb C}$ is holomorphic in the sphere
charts and its inverse is again a Möbius transformation.

## Facts & Assumptions

**Given:** A Möbius transformation $M(z)=(az+b)/(cz+d)$ with $ad-bc\neq0$.

[L1] The Riemann sphere charts are the finite $z$-chart and the $1/z$-chart at $\infty$ ([[def-riemann-sphere-holomorphic-charts]]).

[L2] Möbius transformations form a group and inverses are again Möbius ([[thm-mobius-group-and-projective-linear-identification]]).

## Proof

**Proof technique:** direct.

1.1 On every open set where $cz+d\neq0$, the finite-chart expression $z\mapsto(az+b)/(cz+d)$ is a rational function with nonvanishing denominator, hence holomorphic; and if $c\neq0$, then near the finite pole $p=-d/c$ the target infinity-chart expression is $(cz+d)/(az+b)$, which is holomorphic because $az+b$ does not vanish at $p$. [L1, given, algebra]

1.2 At $\infty$, if $c\neq0$ then the source infinity-chart expression is $(a+bw)/(c+dw)$, which is holomorphic at $0$; if $c=0$, then $M(\infty)=\infty$ and the target infinity-chart expression is $dw/(a+bw)$, again holomorphic at $0$. Thus $M$ is holomorphic at every sphere point. [L1, given, algebra]

2.1 By [L2], the inverse map is again Möbius, so the same two chart computations apply to $M^{-1}$ as well. Therefore $M$ is a biholomorphism of the sphere. [L2, given] ∎
