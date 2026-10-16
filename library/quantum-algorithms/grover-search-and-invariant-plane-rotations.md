---
page: grover-search-and-invariant-plane-rotations
title: "Grover Search and Invariant-Plane Rotations"
status: published
requires:
  - reversible-arithmetic-and-oracle-conversion
  - computational-problems-promises-and-cost-models
  - registers-tensor-products-and-partial-trace
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - controlled-gates-phase-and-entanglement
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - circuit-syntax-denotational-semantics-and-measurement
  - inner-product-spaces-and-orthogonality
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - uniform-circuit-families-promise-problems-and-complexity
  - power-and-sample-size-planning
  - trigonometric-and-oscillatory-examples-in-one-variable
items:
  - def-qa-11-marked-search-problem
  - alg-qa-11-grover-iterate
  - lem-qa-11-good-bad-decomposition
  - thm-qa-11-grover-iterate-query-cost
  - alg-qa-11-known-count-grover-search
  - lem-qa-11-grover-invariant-plane-rotation
  - alg-qa-11-known-count-random-iteration-search
  - alg-qa-11-bbht-unknown-count-search
  - thm-qa-11-exact-integer-iteration-formula
  - prop-qa-11-known-count-preprocessing-cost
  - prop-qa-11-known-count-random-selection-bit-cost
  - prop-qa-11-known-count-random-gate-accounting
  - lem-qa-11-bbht-stage-success-bound
  - thm-qa-11-bbht-termination-and-success
  - thm-qa-11-integer-iteration-regime
  - lem-qa-11-random-iteration-average
  - thm-qa-11-bbht-expected-query-cost
  - thm-qa-11-known-count-success-bound
  - thm-qa-11-known-count-random-success
  - thm-qa-11-known-count-query-cost
  - thm-qa-11-known-count-random-query-cost
examples: []
---

This page derives the invariant marked/unmarked plane and the exact success law after an integer number of Grover iterates. It keeps the exact-maximizer known-count procedure separate from the fixed nine-round randomized known-count search and the BBHT unknown-count schedule. Oracle queries, one-qubit preparation, reflection gates, classical bit work, and candidate verification remain separate resource costs. Exact maximization can require exponential classical preprocessing, and unknown-count search does not give a finite-time emptiness decision.
