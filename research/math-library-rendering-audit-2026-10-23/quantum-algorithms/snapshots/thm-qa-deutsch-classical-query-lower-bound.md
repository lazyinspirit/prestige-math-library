---
id: thm-qa-deutsch-classical-query-lower-bound
kind: theorem
title: One classical query cannot solve Deutsch exactly
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-finite-probability-space-and-event
  - def-qa-classical-query-algorithm
  - def-qa-deutsch-promise
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

On the Deutsch promise, the exact deterministic classical query complexity is $2$. Every randomized classical algorithm making at most one query has worst-case success probability at most $1/2$ under per-input correctness.

## Facts & Assumptions

**Given:** A uniformly sampled one-bit Boolean function from the four functions in the Deutsch promise when averaging success; the query algorithm itself must work on every promised function.

[F1] [[def-qa-deutsch-promise]]: the four truth tables $00,01,10,11$ are promised, with equal pairs constant and unequal pairs balanced.

[F2] [[def-qa-classical-query-algorithm]]: a classical query chooses an address from its random tape and prior replies; the query bound is worst-case over promised inputs and random tapes.

[F3] [[def-finite-probability-space-and-event]]: a finite outcome set with nonnegative weights summing to one has event probability equal to the sum of its weights.

## Proof

1.1 Fix a deterministic one-query procedure and let $q$ be its queried address. The constant-zero function $f_0$ and the balanced function $g$ defined by $g(q)=0$, $g(1-q)=1$ give the same reply. The procedure therefore has the same transcript and output on two functions requiring different answers, so it cannot be exact. [given, F1, F2, construct]

2.1 Querying both addresses reveals the entire truth table; equal replies identify a constant and unequal replies identify a balanced function. Thus two queries suffice exactly, and step 1.1 proves the deterministic exact query complexity is two. [F1, F2, step 1.1, algebra]

3.1 Fix a random tape of an algorithm that makes at most one query. If it makes no query, its one output is correct on at most two of the four truth tables. If it queries address $q$, then for each possible reply $b\in\{0,1\}$ there are exactly two promised functions with $f(q)=b$: one constant and one balanced. The fixed tape gives the same output for both, so it is correct on at most one of each such pair, hence on at most two of the four functions. There are finitely many deterministic one-query strategies on two addresses with binary outputs. The random-tape algorithm induces a probability weight on this finite strategy set by grouping tapes according to their resulting strategy. Averaging the fixed-strategy bound over that finite distribution and over the four functions preserves the bound $1/2$; by [F3] some promised input has success at most $1/2$. [given, F1, F2, F3, algebra] ∎
