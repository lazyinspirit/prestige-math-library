---
page: pauli-and-clifford-groups-binary-symplectic-tableaux
title: Pauli and Clifford Groups, Binary Symplectic Tableaux
status: published
items:
  - def-qc-phase-aware-n-qubit-pauli-group
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
  - thm-qc-pauli-product-and-adjoint
  - def-qc-binary-pauli-label-and-quotient
  - def-qc-clifford-normalizer
  - lem-qc-cnot-pauli-action
  - thm-qc-hermitian-pauli-phase-criterion
  - def-qc-binary-symplectic-form
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-clifford-tableau
  - lem-qc-clifford-lifts-symplectic-transvections
  - lem-qc-symplectic-transvections-generate
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-clifford-induces-symplectic-map
  - thm-qc-clifford-symplectic-surjectivity
examples: []
requires:
  - algebraic-extensions-degree-and-finite-fields
  - congruences-and-the-chinese-remainder-theorem
  - controlled-gates-phase-and-entanglement
  - dual-spaces-bilinear-forms-and-inertia
  - inner-product-spaces-and-orthogonality
  - linear-independence-bases-and-dimension
  - linear-maps-rank-nullity-and-quotient-spaces
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - vector-spaces-and-subspaces
---

This page fixes the phase convention $P(k,x,z)=i^kX^xZ^z$, with tensor factors ordered and the binary label ordered $(x,z)$. The mod-$4$ phase is part of a Pauli operator: the label is only its quotient by scalar phases. The product, Hermitian criterion, commutator sign, and binary symplectic pairing are proved from the exact phase-aware law.

The Clifford group here consists of actual unitary normalizers of the full Pauli group; scalar global phases are retained as distinct unitaries but act identically by conjugation. A tableau stores the exact mod-$4$ phase and binary label of each ordered generator image. The H, S, and CNOT updates include their phase changes.

The normalizer-to-symplectic map is proved locally. Its surjectivity is proved by finite transvection reduction and explicit Clifford lifts synthesized from H, S, S†, CNOT, and swaps. The cited literature gives the conventions, binary commutation form, tableau conventions, and gate identities; the local finite reduction supplies the converse proof.
