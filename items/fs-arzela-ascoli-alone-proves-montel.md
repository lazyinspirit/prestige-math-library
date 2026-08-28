---
id: fs-arzela-ascoli-alone-proves-montel
kind: false-statement
title: "FALSE: Arzelà-Ascoli alone proves Montel's theorem"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-ascoli-arzela-for-compact-metric-domains, lem-locally-bounded-holomorphic-families-are-locally-equicontinuous, thm-montel-theorem-for-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

Arzelà-Ascoli alone proves Montel's theorem for holomorphic families.

## Facts & Assumptions

**Given:** A locally bounded family of holomorphic functions on a plane domain.

[L1] On a compact metric domain, Arzelà–Ascoli requires equicontinuity as well as pointwise relative compactness ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[L2] Local boundedness of a holomorphic family implies local equicontinuity by Cauchy estimates ([[lem-locally-bounded-holomorphic-families-are-locally-equicontinuous]]).

## Refutation

**Proof technique:** direct.

1.1 Local boundedness gives pointwise relative compactness on each compact stage, but it is not itself the equicontinuity hypothesis required by [L1]. Thus Arzelà–Ascoli cannot yet be applied. [L1, given]

2.1 Fact [L2] supplies the missing complex-analytic step by converting local boundedness into local equicontinuity. Montel's proof uses that step before applying Arzelà–Ascoli, so Arzelà–Ascoli alone does not prove the theorem. [L1, L2, given] ∎
