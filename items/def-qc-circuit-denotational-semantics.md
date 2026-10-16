---
id: def-qc-circuit-denotational-semantics
kind: definition
title: "Denotational semantics of a finite layered circuit"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-tensor-register-and-permutation
  - lem-qc-local-gate-wire-embedding
  - lem-qc-disjoint-layer-order-independence
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; the interpretation uses finite compositions of unitaries."
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

## Definition

For a gate occurrence $g=(\gamma,w)$ in a circuit on $\mathcal Q_n$, let $\widetilde U_g$ be the global embedding from [[lem-qc-local-gate-wire-embedding]]. For a layer $L_t=(g_1,\ldots,g_s)$, define
$$U_{L_t}:=\widetilde U_{g_s}\cdots\widetilde U_{g_1}.$$
For a circuit with chronological layers $L_1,\ldots,L_d$, define
$$U_C:=U_{L_d}\cdots U_{L_1}.$$
The empty circuit and every empty layer denote the identity on $\mathcal Q_n$.

## Facts & Assumptions

**Given:** A finite layered circuit on the ordered register $\mathcal Q_n$.

[F1] [[def-qc-circuit-syntax-and-register-order]]: layers are finite ordered lists of gates with pairwise disjoint supports, and $L_1$ is applied first.

[F2] [[lem-qc-local-gate-wire-embedding]]: each gate occurrence has a unique unitary action on the full register.

[F3] [[lem-qc-disjoint-layer-order-independence]]: the embeddings of gates in the same layer commute.

[F4] [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]: finite products and inverses of unitary operators are unitary.

## Proof

1.1 Every factor $\widetilde U_{g_j}$ in a layer product is unitary by [F2]; the empty product is identity. The layer map $U_{L_t}$ is therefore unitary by [F4]. [given, F2, F4, algebra]

1.2 Since every pair of gates in a layer has disjoint support, [F3] shows the factors commute pairwise. Any two enumerations of a finite list are related by finitely many adjacent swaps, so the layer product is independent of the enumeration. [given, F1, F3, algebra]

2.1 The chronological application of $L_1,\ldots,L_d$ composes the last-applied map on the left, hence is $U_{L_d}\cdots U_{L_1}$. It is unitary as a finite product of unitary maps; when $d=0$ this is the identity. [given, F1, F4, algebra] ∎

