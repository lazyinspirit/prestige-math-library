---
id: fs-major-index-equals-inversion-number-pointwise
kind: false-statement
title: "FALSE: the major index equals the inversion number for every permutation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-major-index-generating-function-is-q-factorial, def-descent-set-major-index-excedance-and-fixed-point, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every permutation $\sigma$, one has

$$\operatorname{maj}(\sigma)=\operatorname{inv}(\sigma).$$

What is true is the weaker distributional statement of
[[cor-major-index-generating-function-is-q-factorial]].

## Facts & Assumptions

**Given:** Major index and inversion number are defined by [[def-descent-set-major-index-excedance-and-fixed-point]] and [[def-inversions-inversion-number-and-sign]].

## Refutation

**Proof technique:** direct.

1.1 Take $\sigma=[2,0,1]$. Its only descent is at position $0$, so $\operatorname{maj}(\sigma)=1$. [given]

2.1 The same permutation has two inversions, namely $(2,0)$ and $(2,1)$, so $\operatorname{inv}(\sigma)=2$. Therefore $\operatorname{maj}(\sigma)\ne\operatorname{inv}(\sigma)$, and the claim is false. [step 1.1, given] ∎
