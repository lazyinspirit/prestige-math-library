---
id: def-qa-deutsch-jozsa-promise
kind: definition
title: Deutsch–Jozsa promise
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-finite-cardinality
  - def-qa-input-encoding-and-size
  - def-qa-promise-query-instance
  - def-qa-task-and-promise-domain
  - thm-qc-bitstring-index-is-bijection
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

## Definition

Let $n\ge1$, let $N:=2^n$, and let $f:\{0,1\}^n\to\{0,1\}$ be the total function of a [[def-qa-promise-query-instance]]. The **Deutsch–Jozsa promise** is the decision task with YES set consisting of constant functions and NO set consisting of functions taking each value $0$ and $1$ exactly $N/2$ times. The required output is constant or balanced, respectively. Here $N$ is the number of addresses, as supplied by [[thm-qc-bitstring-index-is-bijection]] and [[def-finite-cardinality]].

## Facts & Assumptions

**Given:** $n\ge1$ and a total Boolean function on the $n$-bit address set.

[F1] [[def-qa-task-and-promise-domain]]: a decision promise has disjoint YES and NO sets and no correctness obligation outside their union.

[F2] [[def-qa-promise-query-instance]]: the oracle function is total on the address domain, even though the task promise restricts the legal instances.

[F3] [[def-qa-input-encoding-and-size]]: the declared binary input width fixes the length parameter $n$.

[F4] [[thm-qc-bitstring-index-is-bijection]] and [[def-finite-cardinality]]: the $n$-bit address set has cardinality $2^n$.

## Verification

1.1 Since $n\ge1$, $N=2^n$ is even and $1\le N/2<N$. A constant function has either $0$ or $N$ addresses with value $1$, whereas a balanced function has $N/2$ such addresses. These counts differ, so the YES and NO sets are disjoint. [given, F1, F4, algebra]

2.1 Both promise classes are nonempty: the zero function is constant, and the function $f(x)=x_0$ has exactly $N/2$ inputs with each value because flipping its first bit pairs a zero-output address with a one-output address. Thus the stated promise is meaningful for every $n\ge1$. [given, F2, F3, F4, construct, algebra] ∎
