---
id: fs-reusing-random-bits-amplifies-success
kind: false-statement
title: "FALSE: reusing the same random bits amplifies success"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bpp-amplification-to-exponentially-small-error]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement

Reusing the same random bits amplifies success.

## Facts & Assumptions

**Given:** the usual repetition-based amplification scheme.

[L1] Exponentially small BPP error is obtained by running independent trials and taking the majority answer ([[thm-bpp-amplification-to-exponentially-small-error]]).

## Refutation

**Proof technique:** direct.

1.1 The hypothesis of [L1] is independence of the repeated trials. If the same random string is reused, the repeated executions become perfectly correlated instead of independent. [L1, given]

2.1 A perfectly correlated sequence of repetitions gives the same answer every time, so a majority vote over those repetitions agrees with one run and cannot improve its success probability. Therefore the statement is false. [step 1.1, algebra] ∎
