---
id: alg-counter-based-keyed-permutation-stream
kind: algorithm
title: "Counter stream from a keyed finite permutation"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John K. Salmon, Mark A. Moraes, Ron O. Dror, and David E. Shaw, Parallel Random Numbers: As Easy as 1, 2, 3, §2"
      url: "https://www.thesalmons.org/john/random123/papers/random123sc11.pdf"
verification:
  precheck: n/a
---

## Definition

Let $S=\{0,\ldots,2^w-1\}$ for an integer $w\ge1$. The input is a key $k$, a specified bijection $\pi_k:S\to S$, and a counter interval $[c_0,c_1)$ with integer endpoints satisfying $0\le c_0\le c_1\le2^w$. Initialize $c=c_0$. On each call:

1. If $c=c_1$, return the status exhausted.
2. Otherwise return the word $\pi_k(c)$ and replace $c$ by $c+1$.

The procedure never wraps the counter. Different keys define different supplied permutations; their statistical relationship is not specified by this interface. A fixed key and counter interval define a deterministic stream. Any random-key model or computational pseudorandomness guarantee must be stated separately.

## Remarks

The bijection assumption is an input contract. This definition supplies no cryptographic claim and no IID theorem. Dividing the counter range into disjoint intervals prevents exact reuse within one fixed key because each counter is used once.
