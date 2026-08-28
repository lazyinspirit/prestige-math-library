---
id: fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism
kind: false-statement
title: "FALSE: every self-homeomorphism of the Riemann sphere preserves the cross-ratio"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic, thm-cross-ratio-mobius-invariant, def-cross-ratio-riemann-sphere]
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

Every self-homeomorphism of the Riemann sphere preserves the cross-ratio.

## Facts & Assumptions

**Given:** Complex conjugation $\kappa(z)=\overline z$ on the sphere.

[L1] Complex conjugation is a sphere homeomorphism, and the quadruple $(1,-i,0,\infty)$ has cross-ratio $i$ while its conjugate quadruple $(1,i,0,\infty)$ has cross-ratio $-i$ ([[cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic]], [[def-cross-ratio-riemann-sphere]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] provides a sphere homeomorphism that sends the cross-ratio value $i$ to the different value $-i$ on an explicit quadruple. [L1, given]

2.1 Therefore not every sphere homeomorphism preserves cross-ratios, so the statement is false. [given] ∎
