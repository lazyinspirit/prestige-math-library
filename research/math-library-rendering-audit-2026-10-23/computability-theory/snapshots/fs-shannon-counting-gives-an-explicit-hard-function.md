---
id: fs-shannon-counting-gives-an-explicit-hard-function
kind: false-statement
title: "Shannon counting gives an efficiently explicit circuit-hard function"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-counting-circuits-of-bounded-size, thm-shannon-almost-all-functions-require-exponential-circuits]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

The Shannon counting argument itself gives a polynomial-time computable family
of Boolean functions having exponential circuit complexity.

## Facts & Assumptions

**Given:** the Shannon counting argument.

[L1] Counting circuits gives only an upper bound on how many truth tables they represent, by [[lem-counting-circuits-of-bounded-size]].

[L2] The resulting theorem says that almost all truth tables are hard, by [[thm-shannon-almost-all-functions-require-exponential-circuits]].

## Refutation

**Proof technique:** direct.

1.1 The argument in [L1] and [L2] compares two cardinalities and concludes that the complement of the set of small-circuit truth tables is nonempty (and large). One can make an ineffective-for-complexity selection computable by enumerating every bounded-size circuit, forming all of their truth tables, and choosing the lexicographically first missing table. That exhaustive procedure, however, takes time exponential (indeed much larger) in the truth-table length and supplies no polynomial-time algorithm for evaluating the selected function on an input. [L1, L2, given, construct]

2.1 Consequently the counting proof establishes existential hardness and even permits a brute-force computable choice, but it does not by itself produce an efficiently explicit hard family. Such a family requires an additional efficient construction and lower-bound argument absent from the count. [step 1.1]

3.1 This distinction refutes the claim that the Shannon counting argument itself supplies a polynomial-time computable hard family. [step 2.1] ∎
