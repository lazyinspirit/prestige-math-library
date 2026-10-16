---
page: stabilizer-css-codes-syndromes-and-procedures
title: Stabilizer and CSS Codes, Syndromes, and Procedures
status: draft
requires:
  - circuit-syntax-denotational-semantics-and-measurement
  - classical-and-quantum-error-correcting-codes
  - controlled-gates-phase-and-entanglement
  - inner-product-spaces-and-orthogonality
  - knill-laflamme-recovery-and-subsystem-codes
  - linear-independence-bases-and-dimension
  - matrices-and-the-matrix-of-a-linear-map
  - pauli-and-clifford-groups-binary-symplectic-tableaux
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - stabilizer-circuits-and-gottesman-knill-simulation
items: 
  - def-qc-css-code-from-nested-binary-codes
  - lem-qc-binary-dual-dimension
  - def-qc-stabilizer-code-space
  - alg-qc-stabilizer-encoder-by-symplectic-elimination
  - def-qc-square-planar-surface-code
  - def-qc-stabilizer-syndrome-and-logical-operators
  - thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count
  - thm-qc-stabilizer-projector-and-dimension
  - thm-qc-css-encoding-dimension-and-commutation
  - thm-qc-stabilizer-encoder-correctness
  - thm-qc-stabilizer-logical-pauli-quotient-dimension
  - def-qc-stabilizer-distance
  - thm-qc-css-syndrome-correction
  - thm-qc-square-planar-surface-code-distance-and-path-count
  - thm-qc-stabilizer-distance-detection-and-correction
examples: 
  - ex-qc-steane-seven-qubit-css-code
---

This page develops stabilizer code spaces from commuting Hermitian
phase-aware Pauli checks on $n\ge1$ physical qubits, defines their syndrome and logical-Pauli quotient,
and proves the projector dimension and distance criteria. The CSS
construction uses the nested-code convention $C_2\subseteq C_1$ with
coset states indexed by $C_1/C_2$; no additional $C_2^\perp\subseteq C_1$
condition is assumed. The binary dot product is bilinear over $\mathbb F_2$
and is not a positive-definite inner product.

The page gives finite syndrome procedures, a symplectic stabilizer encoder,
and a relative square-patch surface-code example. Pauli phases are retained
until a scalar quotient is explicitly taken. Circuit-level claims use the
ordered-wire and chronological-composition conventions from the authored
QC09 suppliers; measurement outcomes and classical corrections are modeled
by finite projectors and observed instrument branches.
