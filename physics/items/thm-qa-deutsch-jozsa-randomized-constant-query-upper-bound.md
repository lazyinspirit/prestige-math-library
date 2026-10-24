---
id: thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound
kind: theorem
title: Three classical samples solve Deutsch–Jozsa with bounded error
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-finite-cardinality
  - def-finite-probability-space-and-event
  - def-qa-classical-query-algorithm
  - def-qa-deutsch-jozsa-promise
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Statement

For $n\ge2$, the finite probability experiment that samples three distinct addresses uniformly without replacement and outputs constant exactly when all three replies agree has success probability at least $3/4$ on every Deutsch–Jozsa input. In the finite fair-bit classical query model, sampling three independent uniform addresses with replacement and using the same output rule also succeeds with probability at least $3/4$, using exactly $3n$ random bits and three value queries. For $n=1$, querying both addresses solves the promise exactly with two queries. Thus the deterministic exact lower bound is not a bounded-error exponential separation.

## Facts & Assumptions

**Given:** $n\ge2$, $N=2^n\ge4$, and a total Boolean function promised constant or exactly balanced; consider both the uniform without-replacement experiment and the independent with-replacement algorithm.

[F1] [[def-qa-deutsch-jozsa-promise]]: a balanced function has $N/2$ addresses of each output value.

[F2] [[def-qa-classical-query-algorithm]]: randomized addresses may be chosen from the random tape, and query cost counts each returned function value once.

[F3] [[def-finite-probability-space-and-event]]: the uniform law on a finite set assigns each outcome reciprocal cardinality and event probability by finite summation.

[F4] [[def-finite-cardinality]]: the address and ordered-triple sample sets have their finite cardinalities.

## Proof

1.1 For a constant function, all three replies agree, so the procedure outputs constant correctly with probability one. For a balanced function write $m=N/2$. The ordered sample space has $N(N-1)(N-2)$ triples. If $m=2$, no three distinct samples can have the same reply, so the error probability is zero. If $m\ge3$, the error event consists of an ordered triple all drawn from the zero class or all from the one class; its probability is $\frac{2m(m-1)(m-2)}{(2m)(2m-1)(2m-2)}=\frac{m-2}{2(2m-1)}=\frac{N-4}{4(N-1)}.$ This is at most $1/4$, since $N-4\le N-1$. [given, F1, F3, F4, algebra]

2.1 The without-replacement experiment has success at least $3/4$ by step 1.1. For an implementation in the finite fair-bit model, take three independent blocks of $n$ fair bits as addresses, allowing repetitions. On a balanced input the three replies are independent fair bits, so they all agree with probability $2(1/2)^3=1/4$; on a constant input they always agree. Thus this algorithm uses exactly $3n$ random bits and three value queries and has success at least $3/4$. When $n=1$, the domain has two addresses and querying both returns the full truth table, which classifies exactly. The claim concerns bounded-error upper cost and leaves the deterministic exact lower bound as a separate query measure. [given, F1, F2, step 1.1, algebra] ∎
