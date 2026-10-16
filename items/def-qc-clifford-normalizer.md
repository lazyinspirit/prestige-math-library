---
id: def-qc-clifford-normalizer
kind: definition
title: Clifford normalizer
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - thm-qc-pauli-product-and-adjoint
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
dependency_level: 7
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14"
      url: https://jhwatrous.github.io/UQIC.pdf
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; group closure follows from finite matrix multiplication and unitary inverses."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Work with actual unitary matrices, not equivalence classes modulo global phase. The $n$-qubit **Clifford normalizer** is

$$\mathcal C_n:=\{U\text{ unitary on }\mathcal H_n:U\mathcal P_nU^*=\mathcal P_n\}.$$

It is a group under matrix multiplication. Every scalar unitary $\lambda I$ with $|\lambda|=1$ belongs to $\mathcal C_n$ and has the same conjugation action as $I$; the chosen convention retains these distinct matrices.

## Facts & Assumptions

**Given:** the finite-dimensional inner-product space $\mathcal H_n$ and the phase-aware Pauli group $\mathcal P_n$.

[F1] [[thm-qc-pauli-product-and-adjoint]]: $\mathcal P_n$ is a group under matrix multiplication.

[F2] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator is an invertible linear isometry and its inverse is its adjoint.

## Proof

1.1 The identity conjugates $\mathcal P_n$ to itself. If $U,V\in\mathcal C_n$, then $(UV)\mathcal P_n(UV)^*=U(V\mathcal P_nV^*)U^*=U\mathcal P_nU^*=\mathcal P_n$, so $UV\in\mathcal C_n$. [given, F1, algebra]

2.1 If $U\mathcal P_nU^*=\mathcal P_n$, multiplying this equality by $U^*$ on the left and $U$ on the right gives $U^*\mathcal P_nU=\mathcal P_n$, so $U^*\in\mathcal C_n$ by [F2]. Thus the set is a group. For $|\lambda|=1$, $(\lambda I)P(\lambda I)^*=P$ for every $P$, and conjugation by $\lambda U$ equals conjugation by $U$. [given, F1, F2, step 1.1, algebra] ∎
