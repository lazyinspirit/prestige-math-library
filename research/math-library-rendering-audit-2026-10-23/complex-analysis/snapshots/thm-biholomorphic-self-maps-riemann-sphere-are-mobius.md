---
id: thm-biholomorphic-self-maps-riemann-sphere-are-mobius
kind: theorem
title: "Every biholomorphic self-map of the Riemann sphere is Möbius"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-meromorphic-functions-riemann-sphere-are-rational, thm-mobius-transformations-biholomorphic-sphere, thm-rational-map-fibre-count-degree]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
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

Every biholomorphic self-map of the Riemann sphere is Möbius.

## Facts & Assumptions

**Given:** A biholomorphic self-map $F$ of $\widehat{\mathbb C}$.

[L1] Meromorphic self-maps of the sphere are exactly rational maps ([[thm-meromorphic-functions-riemann-sphere-are-rational]]).

[L2] A nonconstant rational map has every fibre of total multiplicity equal to its degree ([[thm-rational-map-fibre-count-degree]]).

## Proof

**Proof technique:** direct.

1.1 Because $F$ is holomorphic on the sphere, [L1] makes it a rational map. Bijectivity means every sphere value has exactly one preimage, and that preimage has multiplicity $1$. [L1, given]

2.1 Applying [L2] to any fibre forces the degree of $F$ to be $1$, and a degree-$1$ rational self-map is exactly a Möbius transformation. [L2, given, algebra] ∎
