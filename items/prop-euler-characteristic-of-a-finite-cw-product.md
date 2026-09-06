---
id: prop-euler-characteristic-of-a-finite-cw-product
kind: proposition
title: Euler characteristic of a finite CW product
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euler-characteristic-of-a-finite-cw-complex]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 10
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
---

## Statement

For finite CW complexes $X,Y$, $\chi(X\times Y)=\chi(X)\chi(Y)$.

## Facts & Assumptions

**Given:** The product CW structure whose cells are $e^p\times f^q$.

## Proof

**Proof technique:** direct.

1.1 Product cells have dimension $p+q$, and there are $c_p(X)c_q(Y)$ of them in that dimension. [given]

2.1 The finite alternating double sum is $\sum_{p,q}(-1)^{p+q}c_p(X)c_q(Y)=(\sum_p(-1)^pc_p(X))(\sum_q(-1)^qc_q(Y))$, which is the required formula. [step 1.1, algebra] ∎
