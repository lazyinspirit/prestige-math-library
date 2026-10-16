---
id: lem-qa-14-cumulative-hybrid-bound
kind: lemma
title: Cumulative hybrid distance for a T-query algorithm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - lem-qa-14-one-query-hybrid-bound
  - def-qa-14-boolean-search-query-model
  - lem-qa-14-coherent-query-normal-form
proof_strategy: direct
axiom_use: None; only a finite telescoping sum and unitary norm preservation are used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): query magnitudes and telescoping hybrid distances."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–112 (PDF pp.119–121): the hybrid sequence and query-address projections."
---

## Statement

For a $T$-query algorithm in the model of [[def-qa-14-boolean-search-query-model]], let $\psi_t^0$ be its unit state on input $0^N$ immediately before query $t+1$, for $0\le t<T$, and set $q_{t,i}=\|\Pi_{i-1}\psi_t^0\|^2$. If $\psi_T^0$ and $\psi_T^i$ are the final unit states on $0^N$ and $e_i$, then
$$\|\psi_T^i-\psi_T^0\|\le2\sum_{t=0}^{T-1}\sqrt{q_{t,i}}.$$

## Facts & Assumptions

**Given:** The coherent $T$-query normal form, the two oracle inputs $0^N,e_i$, and the one-query bound.

[F1] [[lem-qa-14-coherent-query-normal-form]]: every finite-branch algorithm with at most $T$ standard XOR queries has the same output law as a pure unitary circuit with exactly $T$ ordinary queries.

[F2] [[lem-qa-14-one-query-hybrid-bound]]: replacing one zero oracle by the singleton oracle changes a query state by at most twice its norm on the differing address block.

[F3] [[def-qa-14-boolean-search-query-model]]: the query calls are separated by input-independent unitaries, which preserve vector norms.

## Proof

1.1 If $T=0$, both inputs give the same circuit and hence the final vectors agree, so the inequality holds with empty sum. Suppose $T\ge1$. For each $r=0,\ldots,T$, define $h_r$ as the final state of the circuit that uses the zero oracle in its first $r$ query slots and the $e_i$ oracle in its remaining $T-r$ slots. Then $h_0=\psi_T^i$ and $h_T=\psi_T^0$. [given, F1, construct]

2.1 For each $1\le r\le T$, the circuits defining $h_{r-1}$ and $h_r$ have the same state immediately before query slot $r$: they have used the zero oracle for the first $r-1$ calls. This pre-query state is $\psi_{r-1}^0$. At slot $r$ the oracle changes from $O_{e_i}$ to $O_{0^N}$; after that slot both circuits use the same suffix, whose unitaries preserve norm. By [F2], $\|h_{r-1}-h_r\|\le2\sqrt{q_{r-1,i}}$. [F2, F3, step 1.1]

3.1 The triangle inequality gives $\|\psi_T^i-\psi_T^0\|=\|h_0-h_T\|\le\sum_{r=1}^T\|h_{r-1}-h_r\|\le2\sum_{t=0}^{T-1}\sqrt{q_{t,i}}$. The normal form [F1] preserves the output distribution, so this bound applies to the original algorithm's pure-state realization. [F1, step 2.1, algebra] ∎
