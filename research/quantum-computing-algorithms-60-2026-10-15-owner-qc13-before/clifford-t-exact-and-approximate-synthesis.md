---
page: clifford-t-exact-and-approximate-synthesis
title: Clifford+T Exact and Approximate Synthesis
status: draft
items:
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-sqrt-two-divisibility-criterion
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-dyadic-cyclotomic-conjugate-norm
  - lem-qc-dyadic-cyclotomic-unit-circle
  - def-qc-denominator-exponent
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - lem-qc-squared-entry-denominator-bound
  - def-qc-clifford-t-gate-library
  - alg-qc-controlled-t-clean-ancilla-circuit
  - def-qc-ancilla-free-rz-approximation-problem
  - lem-qc-clifford-t-determinant-phase
  - lem-qc-clifford-t-entry-ring
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - lem-qc-clifford-t-determinant-one-approximants
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-single-qubit-ring-unitary-form
  - prop-qc-controlled-t-clean-ancilla-correct
  - thm-qc-controlled-t-two-qubit-obstruction
  - thm-qc-rz-synthesis-up-to-phase
  - lem-qc-clifford-t-denominator-descent-and-base
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - thm-qc-single-qubit-exact-clifford-t-characterization
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - alg-qc-rz-clifford-t-approximation
  - thm-qc-exact-clifford-t-synthesis-optimality
  - thm-qc-exact-single-qubit-synthesis-correct
  - thm-qc-rz-approximation-correct-on-termination
  - thm-qc-rz-clifford-t-tcount
examples: []
---

This page treats exact one-qubit Clifford+T synthesis, controlled-T with and without a clean ancilla, and ancilla-free on-the-nose Rz approximation. It fixes the exact H, T, and CNOT matrices, ordered-wire convention, dyadic cyclotomic ring, and denominator-exponent convention. Exact matrix equality, global-phase equivalence, T-count, H-count, ancilla use, approximation error, and classical input encoding remain distinct. The exact ring characterization is limited to one qubit; no multi-qubit ring criterion is asserted. The grid has finite coefficient bounds at each exponent, while the constructive norm-equation solver and its T-count guarantees retain their stated factoring and arithmetic assumptions. Arbitrary real inputs carry no implicit Turing-time guarantee.
