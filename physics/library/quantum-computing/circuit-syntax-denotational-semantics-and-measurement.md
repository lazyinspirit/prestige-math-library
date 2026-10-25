---
page: circuit-syntax-denotational-semantics-and-measurement
title: "Circuit Syntax, Denotational Semantics, and Measurement"
status: published
requires:
  - channels-kraus-choi-and-stinespring-representations
  - controlled-gates-phase-and-entanglement
  - measurements-povms-and-instruments
  - registers-tensor-products-and-partial-trace
items:
  - def-qc-circuit-syntax-and-register-order
  - lem-qc-finite-isometry-unitary-extension
  - lem-qc-local-gate-wire-embedding
  - lem-qc-disjoint-layer-order-independence
  - def-qc-circuit-denotational-semantics
  - lem-qc-instrument-output-space-is-nonzero
  - thm-qc-instrument-kraus-normalization
  - lem-qc-coherent-record-isometry
  - thm-qc-instrument-induces-povm
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-elementary-circuit-resources
  - def-qc-measurement-branch-output-law
  - thm-qc-circuit-inverse-reversal
  - thm-qc-deferred-measurement
  - thm-qc-terminal-measurement-circuit-equivalence
examples: []
---

This page defines finite layered circuit syntax on ordered qubit wires, the local embedding of gates, and the chronological denotation of a circuit. Same-layer order independence follows from disjoint supports. The resource model separates gate occurrences, depth, width, controlled access, inverse access, and oracle charges. Measurement stages are represented by finite instruments; local proofs establish their Kraus normalization, induced POVM, and nonzero output-space prerequisites before the coherent record construction. The observed law is distinguished from conditional outputs and hidden Kraus indices. Deferred measurement is proved at the exact finite-dimensional operator level, preserving branch maps and reference correlations. Any unitary dilation or block control used by a circuit model must be explicitly available and costed. No physical postulate or free implementation theorem is assumed.

