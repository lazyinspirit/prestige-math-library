---
id: fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane
kind: false-statement
title: "FALSE: the Riemann sphere is homeomorphic to the complex plane"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-one-point-compactification-properties, thm-stereographic-projection-riemann-sphere-homeomorphism]
justified_by: []
aliases: []
landmark: false
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

The Riemann sphere is homeomorphic to the complex plane.

## Facts & Assumptions

**Given:** The Riemann sphere $\widehat{\mathbb C}$ and the complex plane $\mathbb C$.

[L1] The one-point compactification of $\mathbb C$ is compact and stereographic projection identifies it with the unit sphere ([[thm-one-point-compactification-properties]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] makes $\widehat{\mathbb C}$ compact, while the open cover $\{B(0,n):n\ge1\}$ of $\mathbb C$ has no finite subcover, so $\mathbb C$ is not compact. [L1, given]

2.1 Homeomorphisms preserve compactness, so a compact space cannot be homeomorphic to a noncompact one. Hence the statement is false. [given] ∎
