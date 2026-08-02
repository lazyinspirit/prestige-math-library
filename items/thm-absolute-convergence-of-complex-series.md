---
id: thm-absolute-convergence-of-complex-series
kind: theorem
title: "Every absolutely convergent complex series converges, and rearrangements preserve its sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-series-power-series-and-absolute-convergence, thm-absolute-convergence-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

Every absolutely convergent complex series converges, and every rearrangement has the same sum. The conventions and prerequisite facts used below are recorded in [[def-complex-series-power-series-and-absolute-convergence]], [[thm-absolute-convergence-in-rn]].

## Facts & Assumptions

**Given:** A complex series with convergent modulus series.

## Proof

**Proof technique:** direct.

1.1 Regard its terms as vectors in $\mathbb R^2$; the Euclidean norm is the complex modulus. [given]

2.1 Apply the absolute-convergence and rearrangement theorem for finite-dimensional vector series. [given] ∎
