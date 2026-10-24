---
id: ex-qa-exact-oracle-algorithms
kind: example
title: Deutsch, Deutsch–Jozsa and Bernstein–Vazirani examples
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-bernstein-vazirani-query
  - alg-qa-deutsch-jozsa-query
  - alg-qa-deutsch-query
  - def-qa-bernstein-vazirani-promise
  - def-qa-binary-dot-product
  - def-qa-deutsch-jozsa-promise
  - def-qa-deutsch-promise
  - lem-qa-hadamard-f2-kernel
  - thm-qa-bernstein-vazirani-classical-query-lower-bound
  - thm-qa-bernstein-vazirani-query-correct
  - thm-qa-deutsch-classical-query-lower-bound
  - thm-qa-deutsch-jozsa-deterministic-query-lower-bound
  - thm-qa-deutsch-jozsa-query-correct
  - thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound
  - thm-qa-deutsch-query-correct
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Take all four one-bit Deutsch truth tables. For the two-bit examples use address order $00,01,10,11$ and the first bit as the most significant bit. In both the Deutsch–Jozsa and Bernstein–Vazirani example, choose $f(x_0x_1)=x_0$, equivalently secret $a=10$ for Bernstein–Vazirani.

## Facts & Assumptions

**Given:** The finite instances and promise conventions stated by the labelled supplier items below.

[F1] [[def-qa-deutsch-promise]]: $00,11$ are constant and $01,10$ are balanced truth tables.

[F2] [[def-qa-deutsch-jozsa-promise]]: a two-bit balanced function has two zero replies and two one replies.

[F3] [[def-qa-bernstein-vazirani-promise]] and [[def-qa-binary-dot-product]]: for $a=10$, $f_a(x_0x_1)=x_0$.

[F4] [[thm-qa-deutsch-query-correct]], [[thm-qa-deutsch-jozsa-query-correct]], and [[thm-qa-bernstein-vazirani-query-correct]]: the three quantum procedures have the exact outputs proved on the A page.

[F5] [[thm-qa-deutsch-classical-query-lower-bound]], [[thm-qa-deutsch-jozsa-deterministic-query-lower-bound]], [[thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound]], and [[thm-qa-bernstein-vazirani-classical-query-lower-bound]]: the stated separate classical query bounds.

[F6] [[lem-qa-hadamard-f2-kernel]]: for two-bit strings, $H^{\otimes2}|x\rangle=\frac12\sum_y(-1)^{x\cdot y}|y\rangle$.

## Verification

1.1 The Deutsch truth tables give $(f(0),f(1))=00,11\Longrightarrow\text{constant},\qquad (f(0),f(1))=01,10\Longrightarrow\text{balanced}.$ The exact Deutsch theorem [F4] therefore outputs $0$ on the first two tables and $1$ on the latter two. [given, F1, F4, algebra]

2.1 For the two-bit Deutsch–Jozsa function $f(x)=x_0$, the table is $00\mapsto0$, $01\mapsto0$, $10\mapsto1$, $11\mapsto1$, so it is balanced by [F2]. Its final address amplitude is $\alpha_y=\frac14\sum_{x\in\{0,1\}^2}(-1)^{x_0+x\cdot y}.$ For $y=00,01,10,11$, these sums are respectively $0,0,4,0$, so the measured output is $10$. The classical exact bound is $N/2+1=3$ queries, and the three-distinct-sample experiment is exact for $N=4$ because any three of four addresses include both output values. [F2, F4, F5, F6, step 1.1, algebra]

3.1 For $a=10$, the two-bit Bernstein–Vazirani amplitude at $y$ is $\alpha_y=\frac14\sum_{x\in\{0,1\}^2}(-1)^{x\cdot(10\oplus y)}.$ The sums for $y=00,01,10,11$ are $0,0,4,0$, respectively; hence the exact output is $10$. By [F5], classical bounded-error recovery needs at least two queries and the two basis queries suffice. [F3, F4, F5, F6, step 2.1, algebra]

4.1 For Deutsch, the deterministic exact classical query count is two while one randomized query has worst-case success at most $1/2$ by [F5]. For two-bit Deutsch–Jozsa the exact deterministic count is three, while the without-replacement three-sample experiment succeeds with probability one on this finite domain. The finite fair-bit algorithm with replacement has success at least $3/4$ by [F5]. For two-bit Bernstein–Vazirani two classical queries recover both secret bits. These are query counts; none is a classical bit-time claim. [F5, step 1.1, step 2.1, step 3.1, algebra] ∎
