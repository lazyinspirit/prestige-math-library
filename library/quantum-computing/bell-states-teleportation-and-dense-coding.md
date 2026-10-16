---
page: bell-states-teleportation-and-dense-coding
title: Bell States, Teleportation, and Dense Coding
status: draft
items:
  - def-qc-bell-basis
  - thm-qc-bell-transform-inverse
  - alg-qc-teleportation
  - thm-qc-teleportation-bell-expansion
  - alg-qc-dense-coding
  - def-qc-teleportation-protocol-resource-count
  - thm-qc-teleportation-equiprobable-outcomes
  - thm-qc-teleportation-correction-identity
  - thm-qc-dense-coding-correctness-and-resource-count
  - thm-qc-teleportation-reference-stability
  - thm-qc-teleportation-correctness-and-resource-count
examples: []
requires:
  - circuit-syntax-denotational-semantics-and-measurement
  - controlled-gates-phase-and-entanglement
  - measurements-povms-and-instruments
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - registers-tensor-products-and-partial-trace
---

## Objective

This page defines the four ordered Bell vectors, proves their preparation by
Hadamard followed by control-first CNOT and their decoding by the reverse map,
then gives complete teleportation and dense-coding procedures and proofs. The
teleportation branch labels use first bit for phase and second for flip. Bell
resources are mathematical inputs; resource counts make no optimality or
physical-realization claim.

