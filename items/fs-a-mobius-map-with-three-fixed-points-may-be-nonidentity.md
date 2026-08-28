---
id: fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity
kind: false-statement
title: "FALSE: a Möbius transformation with three fixed points can be nonidentity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-three-point-transitivity-mobius-transformations]
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

A Möbius transformation with three fixed points may be nonidentity.

## Facts & Assumptions

**Given:** A Möbius transformation $M$ with three distinct fixed points.

[L1] A Möbius transformation with prescribed values on three distinct sphere points is unique ([[thm-three-point-transitivity-mobius-transformations]]).

## Refutation

**Proof technique:** direct.

1.1 The identity map is Möbius and has the same values as $M$ on those three fixed points. [given]

2.1 Fact [L1] makes a Möbius transformation with those three prescribed values unique, so $M$ must already be the identity. Hence the statement is false. [L1, given] ∎
