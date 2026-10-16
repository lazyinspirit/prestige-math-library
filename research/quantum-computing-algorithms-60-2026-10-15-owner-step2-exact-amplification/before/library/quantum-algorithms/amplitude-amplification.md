---
page: amplitude-amplification
title: "Amplitude Amplification"
status: draft
requires:
  - computational-problems-promises-and-cost-models
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - measurements-povms-and-instruments
  - controlled-gates-phase-and-entanglement
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - inner-product-spaces-and-orthogonality
  - reversible-computation-ancillas-and-coherent-oracles
  - uniform-circuit-families-promise-problems-and-complexity
  - trigonometric-and-oscillatory-examples-in-one-variable
items:
  - def-qa-12-prepared-success-subspace
  - lem-qa-12-amplification-plane-invariant
  - alg-qa-12-amplitude-amplification
  - alg-qa-12-unknown-amplitude-search
  - alg-qa-12-arbitrary-phase-amplification
  - thm-qa-12-amplification-rotation-correctness
  - alg-qa-12-known-amplitude-amplification
  - alg-qa-12-exact-success-amplification
  - thm-qa-12-arbitrary-phase-matching
  - thm-qa-12-fixed-amplification-query-cost
  - thm-qa-12-known-amplitude-success-bound
  - thm-qa-12-exact-success-guarantee
  - thm-qa-12-unknown-amplitude-success
  - thm-qa-12-phase-mismatch-robustness
  - thm-qa-12-arbitrary-phase-query-cost
  - prop-qa-12-amplitude-access-cost-accounting
  - thm-qa-12-known-amplitude-query-cost
  - thm-qa-12-exact-success-query-cost
  - thm-qa-12-unknown-amplitude-query-cost
examples: []
---

This page defines amplitude amplification for a supplied measurement-free unitary and orthogonal success projection. It fixes the sign and order of the standard iterate, treats zero and unit success weights without normalizing a zero component, and keeps conditional quantum outputs distinct from classical verified outputs. The page proves the rotation formula, known and unknown success procedures with their query costs, an exact-success construction under explicit coherent flag and exact-rotation access, and Høyer’s arbitrary-phase matching and mismatch bounds. Preparation, inverse access, phase operations, controlled access, verification, gate synthesis, and classical costs remain separately declared.
