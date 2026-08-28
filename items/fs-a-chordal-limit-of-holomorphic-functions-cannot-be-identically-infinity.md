---
id: fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity
kind: false-statement
title: "FALSE: a chordally locally uniform limit of holomorphic functions can never be identically infinity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane, thm-chordal-limit-theorem-for-meromorphic-functions]
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
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

A chordally locally uniform limit of holomorphic functions can never be
identically $\infty$.

## Facts & Assumptions

**Given:** The sequence $f_n(z)=e^{nz}$ on the right half-plane.

[L1] The family $e^{nz}$ converges chordally locally uniformly to $\infty$ on the right half-plane ([[cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] provides an explicit holomorphic sequence whose chordal local uniform limit is the constant map $\infty$. [L1, given]

2.1 That witness is exactly contrary to the statement, so the statement is false. [given] ∎
