---
id: def-qc-stabilizer-subgroup
kind: definition
title: Stabilizer subgroup
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-subgroup
  - def-dimension
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - thm-qc-pauli-product-and-adjoint
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by:
  - lem-qc-stabilizer-subgroup-label-space-and-order
dependency_level: 10
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Definition

For an ordered register of $n$ qubits, a **stabilizer subgroup** is an abelian
subgroup $S$ of the Hermitian $n$-qubit Pauli operators such that
$-I\notin S$. The binary label of a phase-aware Pauli $P(k,x,z)$ is
$(x,z)\in\mathbb F_2^{2n}$. Define the **rank** of $S$ by

$$\operatorname{rank}(S):=\dim_{\mathbb F_2}\operatorname{span} \{(x,z):P(k,x,z)\in S\}.$$

The binary label convention and commutation form are supplied by the cited
Pauli items. [[lem-qc-stabilizer-subgroup-label-space-and-order]] proves that
this label span is isotropic, its dimension is independent of any generating
set, and $|S|=2^{\operatorname{rank}(S)}$. Matrix multiplication gives the
phase-aware Pauli group operation by
[[thm-qc-pauli-product-and-adjoint]]. For $n=0$, the Pauli group is the
empty-register convention of [[def-qc-pauli-group-on-zero-qubits]].

## Sources

De Wolf §20.1, PDF pp. 185–186, and Watrous Lesson 14 §§14.1 and 14.3,
printed pp. 403–404 and 415–416 (PDF pp. 409–410 and 421–422), describe
commuting Pauli stabilizer groups, independence, and exclusion of $-I$:
https://arxiv.org/pdf/1907.09415;
https://jhwatrous.github.io/UQIC.pdf.
