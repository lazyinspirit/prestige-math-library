---
id: thm-qa-deutsch-jozsa-deterministic-query-lower-bound
kind: theorem
title: Exact deterministic Deutsch–Jozsa needs N/2+1 queries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-finite-cardinality
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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

For $n\ge1$ and $N=2^n$, the exact deterministic classical query complexity of the Deutsch–Jozsa promise is $N/2+1$.

## Facts & Assumptions

**Given:** A total Boolean function on $\{0,1\}^n$ promised constant or exactly balanced, with $N$ addresses.

[F1] [[def-qa-deutsch-jozsa-promise]]: $N$ is the address count; a balanced function has exactly $N/2$ zeros and $N/2$ ones.

[F2] [[def-qa-classical-query-algorithm]]: the next query address may depend on earlier replies, and a deterministic algorithm has a fixed output for each transcript.

[F3] [[def-finite-cardinality]]: finite sets have a natural-number cardinality, invariant under bijection.

## Proof

1.1 Suppose a deterministic procedure makes at most $N/2$ queries in the worst case. Run it on the constant-zero function and let $S$ be the set of distinct queried addresses. Write $s=|S|\le N/2$ and list the complement $C$ in lexicographic order, with $c=|C|$. Concatenating the lexicographic lists of $S$ and $C$ lists every address exactly once: the sets are disjoint and cover the domain. Indexing this concatenated list gives a bijection from $\{0,\ldots,s+c-1\}$ to the $N$-element address set, so $s+c=N$ by [F3]. Thus $c=N-s\ge N/2$. Choose $T$ to be the first $N/2$ addresses of $C$ and define $g$ to be $1$ on $T$ and $0$ elsewhere. Then $g$ is balanced and agrees with the constant-zero function on every address in $S$. Inductively, each adaptive query and reply in the two executions is the same, so the final outputs agree despite the different correct answers. Thus no such procedure is exact. [given, F1, F2, F3, choose, construct, algebra]

2.1 Query any fixed set of $N/2+1$ distinct addresses. If all replies are equal, the function cannot be balanced because each value occurs only $N/2$ times in a balanced function, so it is constant. If the replies are not all equal, the function is not constant and is balanced by the promise. This gives an exact procedure using $N/2+1$ queries; combined with step 1.1 the exact complexity is $N/2+1$. [F1, F2, step 1.1, algebra] ∎
