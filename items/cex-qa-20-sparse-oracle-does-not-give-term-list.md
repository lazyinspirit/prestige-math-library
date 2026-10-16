---
id: cex-qa-20-sparse-oracle-does-not-give-term-list
kind: counterexample
title: Sparse access need not give a short term list
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qa-20-term-list-access-model
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.4, printed pp. 135–136: sparse Hamiltonian row-neighbor/value access and edge-coloring simulation."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.4, Example 2, printed pp. 76–77: sparse row-location and entry-value access for a Hermitian matrix."
---

## Statement refuted

The false assertion is that sparse row/value access alone automatically supplies the explicit canonical ordered rank-one term list and term-evolution access, including polynomial-in-$\log N$ exact classical recovery of that canonical list. The counterexample below establishes the following qualified obstruction.

The row/value interface for a sparse Hermitian matrix by itself supplies neither the term-list contract nor term-evolution calls required by [[def-qa-20-term-list-access-model]]. In the $1$-sparse diagonal family below, any deterministic exact classical procedure that recovers the canonical ordered rank-one term list needs $N$ row-value queries, and any lossless binary encoding of that canonical list has worst-case length at least $N$ bits. This rules out polynomial-in-$\log N$ query recovery of that canonical list; it does not rule out every possible alternative decomposition.

## Facts & Assumptions

**Given:** The sparse row/value interface of [[def-qa-20-sparse-hamiltonian-oracle-model]] and the explicit finite term-list requirement of [[def-qa-20-term-list-access-model]]. An explicit binary description is lossless if it uniquely determines the full ordered term list. We exhibit diagonal matrices with $d=1$.

[F1] [[def-qa-20-sparse-hamiltonian-oracle-model]] gives a row-location and entry-value oracle for every row of a finite sparse Hermitian matrix, with each declared oracle call charged separately.

[F2] [[def-qa-20-term-list-access-model]] requires an explicit finite list of the terms whose sum is the target matrix and separately declared access to their evolutions; those fields are not part of the sparse row/value interface.

## Counterexample


1.1 Fix $N=2^n$, equip $\mathbb C^N$ with its standard inner product, and let $|x\rangle$ denote its standard basis. For any function $f:[N]\to\{-1,+1\}$ define $H_f=\sum_{x=1}^N f(x)|x\rangle\langle x|$. This diagonal matrix is Hermitian and each row has exactly one nonzero entry; the row-location oracle returns $x$ at the nonzero slot, and the entry-value oracle returns $f(x)$ on the diagonal query $(x,x)$. Thus the input is $1$-sparse in [F1]. [given, F1, construct]

2.1 The canonical ordered rank-one list is $H_f=\sum_{x=1}^N f(x)|x\rangle\langle x|$, with $N$ terms, and is determined by $(f(1),\ldots,f(N))$. There are $2^N$ such lists but only $2^N-1$ binary strings of length less than $N$, so any lossless binary encoding has a worst-case length of at least $N$ bits. If a deterministic exact recovery procedure makes fewer than $N$ classical row-value queries, some row $x$ is unqueried; changing only $f(x)$ preserves every reply in its transcript but changes the canonical list, so that transcript cannot determine the list for both inputs. [F1, F2, step 1.1, algebra]

3.1 Since $N=2^n$, this canonical list's description and exact classical recovery costs grow exponentially in the index length $n$. The sparse model supplies only the row/value calls by [F1], whereas the term-list model additionally requires the list and term-evolution access by [F2]; those extra promises therefore cannot be inferred from the sparse interface. No lower bound for every possible alternative decomposition, quantum query procedure, or circuit implementation is asserted. [step 2.1, F1, F2] ∎
