---
page: quantum-optimization-sdp-and-variational-algorithms
title: "Quantum Optimization, Semidefinite Programs, and Variational Algorithms"
status: draft
items:
  - lem-qa-30-hermitian-product-trace-real
  - lem-qa-30-positive-product-trace-nonnegative
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-normalized-hermitian-observable-effects
  - def-qa-30-mmw-game
  - thm-qa-30-sdp-weak-duality
  - lem-qa-30-exp-quadratic-bound
  - thm-qa-30-mmw-regret-bound
  - lem-qa-30-mmw-dual-output-feasibility
  - def-qa-30-variational-quantum-algorithm
  - def-qa-30-classical-optimizer-interface
  - def-qa-30-qaoa-circuit-and-objective
  - def-qa-30-vqe-rayleigh-objective
  - thm-qa-30-parameter-shift-rule
  - thm-qa-30-qaoa-expectation-bound
  - thm-qa-30-vqe-rayleigh-ritz-guarantee
  - lem-qa-30-capamplify-state-output-bound
  - def-qa-30-sdp-reference-state-access
  - lem-qa-30-sdp-trace-mean-ratio-identity
  - def-qa-30-quantum-membership-separation-model
  - def-qa-30-sdp-sparse-oracle-model
  - alg-qa-30-quantum-membership-to-separation
  - thm-qa-30-quantum-membership-separation-cost
  - alg-qa-30-sdp-gibbs-purification
  - thm-qa-30-sdp-gibbs-state-error-cost
  - alg-qa-30-sdp-matrix-expectation-oracle
  - thm-qa-30-sdp-matrix-expectation-cost
  - lem-qa-30-mmw-to-sdp-feasibility
  - thm-qa-30-sdp-binary-search-correctness
  - alg-qa-30-quantum-sdp-solver
  - thm-qa-30-quantum-sdp-solver-guarantee
  - thm-qa-30-quantum-sdp-solver-cost
examples:
  []
requires:
  - quantum-spectral-estimation-and-matrix-functions
  - quantum-sampling-expectation-and-monte-carlo
  - robust-covariance-and-high-dimensional-stability
  - matrices-and-the-matrix-of-a-linear-map
  - the-spectral-theorem-and-singular-value-decomposition
  - hilbert-space-geometry-and-riesz-representation
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - measurements-povms-and-instruments
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - channels-kraus-choi-and-stinespring-representations
  - circuit-syntax-denotational-semantics-and-measurement
  - controlled-gates-phase-and-entanglement
  - registers-tensor-products-and-partial-trace
  - uniform-circuit-families-promise-problems-and-complexity
  - reversible-computation-ancillas-and-coherent-oracles
---

This page defines the finite primal-dual SDP convention and proves weak duality, the positive-observable measurement rule, a bounded-loss matrix multiplicative-weights regret inequality, and a conditional dual-certificate lemma. Its variational section defines the hybrid objective, QAOA MaxCut circuit and VQE Rayleigh objective, then proves the stated expected-score and ground-energy bounds without adding optimizer guarantees. The membership-to-separation interface records the finite grid, numerical arithmetic and oracle costs from OP7; the sourced query result remains escalated pending a complete local proof. The sparse-SDP section records finite Gibbs and flagged-trace procedures, sparse-sum access and separate QRAM, gate, bit and preparation costs. The end-to-end feasibility, binary-search, solver-guarantee and solver-cost claims remain draft escalations with their exact proof gaps recorded in the batch evidence.
