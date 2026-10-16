---
page: clifford-t-exact-and-approximate-synthesis
title: Clifford+T Exact and Approximate Synthesis
status: draft
items:
  - def-qc-dyadic-cyclotomic-ring
  - lem-qc-modular-square-root-expected-polynomial
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-sqrt-two-divisibility-criterion
  - lem-qc-denominator-exponent-well-defined
  - lem-qc-dyadic-cyclotomic-conjugate-norm
  - lem-qc-dyadic-cyclotomic-unit-circle
  - lem-qc-cyclotomic-euclidean-factorization-and-units
  - lem-qc-cyclotomic-one-dimensional-grid-enumeration
  - lem-qc-paired-ellipse-grid-uprighting
  - def-qc-denominator-exponent
  - thm-qc-cyclotomic-norm-equation-decision
  - alg-qc-rz-efficient-scaled-grid-iterator
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - lem-qc-squared-entry-denominator-bound
  - cor-qc-cyclotomic-prime-norm-solvability
  - thm-qc-factored-cyclotomic-norm-equation-efficient
  - lem-qc-rz-scaled-grid-growth
  - lem-qc-rz-candidate-norm-integer
  - thm-qc-rz-efficient-scaled-grid-enumeration
  - lem-qc-rz-prime-model-stopping-bounds
  - def-qc-clifford-t-gate-library
  - alg-qc-controlled-t-clean-ancilla-circuit
  - def-qc-ancilla-free-rz-approximation-problem
  - lem-qc-clifford-t-determinant-phase
  - lem-qc-clifford-t-entry-ring
  - lem-qc-hadamard-reduced-word-denominators
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - lem-qc-clifford-t-determinant-one-approximants
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-single-qubit-ring-unitary-form
  - prop-qc-controlled-t-clean-ancilla-correct
  - thm-qc-controlled-t-two-qubit-obstruction
  - thm-qc-rz-synthesis-up-to-phase
  - lem-qc-clifford-t-denominator-descent-and-base
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - lem-qc-rz-determinant-one-reduction
  - lem-qc-capped-prime-norm-attempt-success
  - thm-qc-single-qubit-exact-clifford-t-characterization
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - alg-qc-rz-clifford-t-approximation
  - thm-qc-exact-clifford-t-synthesis-optimality
  - thm-qc-exact-single-qubit-synthesis-correct
  - thm-qc-rz-approximation-correct-on-termination
  - lem-qc-su-two-denominator-t-count
  - thm-qc-rz-clifford-t-tcount
examples: []
requires:
  - algebraic-extensions-degree-and-finite-fields
  - approximate-universality-and-solovay-kitaev
  - chain-conditions-and-semisimple-modules
  - circuit-syntax-denotational-semantics-and-measurement
  - continuous-gate-universality-and-exact-synthesis
  - controlled-gates-phase-and-entanglement
  - cyclotomic-arithmetic-and-reciprocity-via-frobenius
  - dirichlets-unit-theorem-regulators-and-s-units
  - inner-product-spaces-and-orthogonality
  - number-fields-rings-of-integers-and-discriminants
  - polynomial-rings-and-roots
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - reversible-computation-ancillas-and-coherent-oracles
  - the-spectral-theorem-and-singular-value-decomposition
---

This page treats exact one-qubit Clifford+T synthesis, controlled-T with and without a clean ancilla, and ancilla-free on-the-nose Rz approximation. It fixes the exact H, T, and CNOT matrices, ordered-wire convention, dyadic cyclotomic ring, and denominator-exponent convention. Exact matrix equality, global-phase equivalence, T-count, H-count, ancilla use, approximation error, and classical input encoding remain distinct. The exact ring characterization is limited to one qubit; no multi-qubit ring criterion is asserted. The grid has finite coefficient bounds at each exponent and an efficient randomized prefix iterator. A complete factored norm solver and exact certificate checks support the oracle-optimal and conditional near-optimal searches; exhaustive alternatives establish completeness without an efficiency claim. The arithmetic-runtime guarantee retains its quantitative prime model and calibrated budgets. Arbitrary real inputs carry no implicit Turing-time guarantee.
