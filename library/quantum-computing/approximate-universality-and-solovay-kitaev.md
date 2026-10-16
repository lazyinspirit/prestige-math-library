---
page: approximate-universality-and-solovay-kitaev
title: Approximate Universality and Solovay–Kitaev
status: draft
items:
  - def-qc-effective-unitary-matrix-input
  - def-qc-inverse-closed-dense-su2-gate-set
  - lem-qc-fixed-dimension-interval-arithmetic
  - lem-qc-irrational-rotation-dense-on-circle
  - lem-qc-su2-near-identity-logarithm
  - lem-qc-compact-su2-base-net
  - lem-qc-pauli-vector-multiplication
  - lem-qc-su2-balanced-commutator
  - lem-qc-two-axis-su2-generation
  - lem-qc-clifford-t-projective-density
  - lem-qc-commutator-error-cancellation
  - alg-qc-solovay-kitaev-unitary-compiler
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - thm-qc-solovay-kitaev-bit-complexity
  - thm-qc-fixed-arity-unitary-error-budget
  - thm-qc-controlled-phase-approximation
examples: []
requires:
  - chain-conditions-and-semisimple-modules
  - continuous-gate-universality-and-exact-synthesis
  - controlled-gates-phase-and-entanglement
  - cyclotomic-arithmetic-and-reciprocity-via-frobenius
  - dirichlets-unit-theorem-regulators-and-s-units
  - formal-languages-encodings-and-decision-problems
  - jacobi-fields-conjugate-points-and-the-cut-locus
  - lie-groups-invariant-fields-and-the-exponential-map
  - matrix-norms-condition-numbers-and-numerical-stability
  - number-fields-rings-of-integers-and-discriminants
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - root-systems-dynkin-diagrams-and-cartan-killing-classification
  - the-complex-exponential-and-eulers-formula
  - the-spectral-theorem-and-singular-value-decomposition
---

This page develops discrete approximate universality and the single-qubit
Solovay–Kitaev recursion in operator norm. The recursion assumes an inverse-
closed dense gate set and a certified finite base net; it yields polylogarithmic
word length, while the bit-complexity item states its finite-precision model
and precision schedule separately. Projective phase guarantees apply to a
whole unconditional block and must not be silently moved through a control.
