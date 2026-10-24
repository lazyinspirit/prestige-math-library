---
page: controlled-gates-phase-and-entanglement
title: Controlled Gates, Phase, and Entanglement
status: published
items:
  - thm-qc-unit-vector-projector-is-density
  - def-qc-pure-state-entanglement
  - thm-qc-standalone-global-phase-invariance
  - def-qc-controlled-unitary-access
  - def-qc-relative-phase
  - def-qc-inverse-unitary-access
  - def-qc-controlled-phase-rotation
  - thm-qc-controlled-global-phase-is-relative-phase
  - def-qc-cnot-and-control-target-order
  - def-qc-multicontrol-activation
  - def-qc-controlled-z-and-swap
  - thm-qc-cnot-creates-bell-entanglement
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - thm-qc-rank-one-reflection-phase-and-control-sign
examples: []
requires:
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - inner-product-spaces-and-orthogonality
  - measurements-povms-and-instruments
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
  - the-spectral-theorem-and-singular-value-decomposition
---

## Objective

This page fixes control-first block conventions and separate access contracts for controlled and inverse unitary calls. It proves the distinction between standalone global phase and controlled relative phase, defines CNOT/CZ/SWAP and multi-control activation, and records the two exact projector-reflection signs and their rank-one phase behavior. It introduces no physical realization or free implementation-cost claim.
