---
id: thm-rp-one-sided-amplification
kind: theorem
title: "RP admits one-sided amplification to exponentially small error"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp]
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

If $L\in\mathrm{RP}$ and $k\in\mathbb N$, then $L$ has a probabilistic polynomial-time decider with no false positives and false-negative probability at most $2^{-k}$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm{RP}$ and an integer $k\ge 1$.

[L1] An RP machine rejects every no-instance with probability $1$ and accepts every yes-instance with probability at least $1/2$ ([[def-rp-corp-zpp-bpp-and-pp]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be an RP machine for $L$. Run $M$ independently $k$ times on the same input, and accept iff at least one run accepts. This remains polynomial time because $k$ independent repetitions of a polynomial-time machine still use polynomial time for fixed or polynomially bounded $k$. [L1, given, construct]

2.1 If $x\notin L$, then by [L1] every run rejects, so the repeated machine also rejects with probability $1$. If $x\in L$, then each run fails to accept with probability at most $1/2$, and independence makes the probability that all $k$ runs fail at most $(1/2)^k=2^{-k}$. [L1, step 1.1, algebra]

3.1 Thus the repeated machine keeps one-sided error and reduces the false negative probability to at most $2^{-k}$. [step 2.1] ∎
