---
id: def-degree-rational-map-riemann-sphere
kind: definition
title: "The degree of a rational self-map of the Riemann sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-meromorphic-functions-riemann-sphere-are-rational]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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

Let $R:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be rational. Choose coprime
polynomials $P,Q\in\mathbb C[z]$, not both zero, with $R(z)=P(z)/Q(z)$ on the
finite chart. The **degree** of $R$ is
$$\deg R:=\max(\deg P,\deg Q).$$
For a finite constant map this gives degree $0$.

Multiplying $P$ and $Q$ by the same nonzero scalar does not change the maximum,
so the degree is well defined on the rational map rather than on a chosen
representative pair.
