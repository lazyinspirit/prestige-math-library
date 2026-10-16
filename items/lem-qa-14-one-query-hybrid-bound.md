---
id: lem-qa-14-one-query-hybrid-bound
kind: lemma
title: One-query oracle perturbation bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - def-qa-14-boolean-search-query-model
  - def-qa-14-query-mismatch-projectors
  - def-qa-14-search-promise
proof_strategy: direct
axiom_use: None; the proof uses the finite address decomposition and the triangle inequality for the Hilbert norm.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 (PDF pp.7–9): the one-query change is bounded by twice the query magnitude at the differing address."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–112 (PDF pp.119–121): query-address projections and one-step progress bounds."
---

## Statement

For $N\ge1$, $1\le i\le N$, and any vector $\psi$ in the address, response, and work registers,
$$\bigl\|(O_{e_i}-O_{0^N})\psi\bigr\|\le2\bigl\|\Pi_{i-1}\psi\bigr\|,$$
where $e_i$ is the input with its only $1$ in coordinate $i$ and $\Pi_{i-1}$ projects onto zero-based query address $i-1$.

## Facts & Assumptions

**Given:** The standard XOR query from [[def-qa-14-boolean-search-query-model]], the singleton input $e_i$ from [[def-qa-14-search-promise]], and the address projector from [[def-qa-14-query-mismatch-projectors]].

[F1] [[def-qa-14-boolean-search-query-model]]: $O_x|j,b,w\rangle=|j,b\oplus x_{j+1},w\rangle$ for $0\le j<N$.

[F2] [[def-qa-14-query-mismatch-projectors]]: $\Pi_{i-1}$ is the orthogonal projection onto address $i-1$, tensored with the identity on response and work registers.

[F3] [[def-qa-14-search-promise]]: $e_i$ has value $1$ exactly at input coordinate $i$ and $0^N$ has value $0$ at every coordinate.

## Proof

1.1 On each address block other than $i-1$, the two oracle actions in [F1] agree; on block $i-1$, the singleton oracle applies Pauli $X$ to the response and the zero oracle applies identity. Hence $O_{e_i}-O_{0^N}=\Pi_{i-1}(X-I)\Pi_{i-1}$, where $X-I$ acts on response and identities act on address and work. [F1, F2, F3, algebra]

2.1 The orthogonal projection is contractive and $X$ preserves norm because it permutes the two orthonormal response basis vectors; thus $\|(X-I)\Pi_{i-1}\psi\|\le\|X\Pi_{i-1}\psi\|+\|\Pi_{i-1}\psi\|=2\|\Pi_{i-1}\psi\|$. Step 1.1 and idempotence of $\Pi_{i-1}$ give the claimed bound. [F2, step 1.1, algebra] ∎
