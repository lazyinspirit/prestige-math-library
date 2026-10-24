---
id: lem-qc-disjoint-layer-order-independence
kind: lemma
title: "Gates on disjoint wires commute"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - lem-qc-local-gate-wire-embedding
justified_by: []
dependency_level: 5
proof_strategy: direct
axiom_use: "None; the proof is on the finite computational basis."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $U$ and $V$ be local gates embedded on two disjoint ordered wire sets in $\mathcal Q_n$. Their global embeddings commute.

## Facts & Assumptions

**Given:** The two embedded gates and disjoint wire supports $S,T\subseteq[n]$.

[F1] [[lem-qc-local-gate-wire-embedding]]: each local gate acts on its ordered support and is the identity on all other wires.

## Proof


1.1 Fix a computational basis vector $|x\rangle$. For an ordered wire tuple $w$, write $x_w$ for its ordered bit subtuple and $x^{w\leftarrow u}$ for the full bitstring obtained by replacing those positions by $u$. By [F1], the embedding of the first gate with matrix coefficients $U_{u,x_S}$ acts as $$|x\rangle\mapsto\sum_u U_{u,x_S}|x^{S\leftarrow u}\rangle.$$ Applying the second gate on the disjoint tuple $T$ gives $$\sum_{u,v}U_{u,x_S}V_{v,x_T}|x^{S\leftarrow u,T\leftarrow v}\rangle.$$ In the reverse order the result is the same sum with scalar factors $V_{v,x_T}U_{u,x_S}$, which agree because complex scalars commute; the replacement bitstrings are identical because $S\cap T=\varnothing$. Thus both composites agree on this basis vector. [given, F1, algebra]

2.1 The computation in step 1.1 holds for every computational basis vector, which spans $\mathcal Q_n$. Therefore the two global linear maps agree on a basis and are equal, so the embedded gates commute. [step 1.1, algebra] ∎

