---
id: fs-normality-means-sequential-limits-stay-inside-the-family
kind: false-statement
title: "FALSE: a normal family contains every locally uniform sequential limit of its own sequences"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-family-of-holomorphic-functions, ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane]
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

A normal family contains every locally uniform limit of its own sequences.

## Facts & Assumptions

**Given:** The family $\mathcal F=\{z^n:n\ge1\}$ on the unit disc.

[L1] The family $\{z^n:n\ge1\}$ is normal on $\mathbb D$, but its full sequence converges locally uniformly to $0$ ([[ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] gives a normal family whose defining sequence has local uniform limit $0$. [L1, given]

2.1 The zero function is not one of the nonzero powers $z^n$, so the limit does not lie in the family. Hence the statement is false. [given] ∎
