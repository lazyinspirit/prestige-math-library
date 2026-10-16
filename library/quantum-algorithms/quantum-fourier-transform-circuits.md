---
page: quantum-fourier-transform-circuits
title: Quantum Fourier-Transform Circuits
status: draft
items:
  - thm-qa-projective-operator-closeness-bounds-output-distribution
  - lem-qa-pi-over-two-exceeds-sqrt-two
  - def-qa-cyclic-quantum-fourier-transform
  - lem-qa-binary-qft-product-factorization
  - lem-qa-tensor-extension-preserves-operator-norm
  - lem-qa-swap-is-three-cnot-circuit
  - def-qa-qft-gate-cost-model
  - alg-qa-exact-binary-qft-circuit
  - thm-qa-exact-binary-qft-circuit-correct
  - thm-qa-exact-binary-qft-gate-count
  - alg-qa-truncated-binary-qft-circuit
  - thm-qa-truncated-qft-operator-norm-error
  - thm-qa-truncated-qft-gate-count
  - thm-qa-qft-finite-gate-set-compile-cost
examples: []
requires:
  - approximate-universality-and-solovay-kitaev
  - finite-fourier-analysis-and-the-fast-fourier-transform
  - roots-and-rational-powers
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - registers-tensor-products-and-partial-trace
  - finite-probability-spaces-and-random-variables
  - controlled-gates-phase-and-entanglement
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - circuit-syntax-denotational-semantics-and-measurement
  - the-spectral-theorem-and-singular-value-decomposition
  - inner-product-spaces-and-orthogonality
  - trigonometric-and-oscillatory-examples-in-one-variable
---

This page fixes the positive-sign cyclic QFT as the inverse of the negative-sign, unitary-normalized discrete Fourier transform. For binary registers it proves the product factorization, specifies the ordered Hadamard/controlled-phase circuit and final bit reversal, proves the three-CNOT SWAP identity, and counts ideal gates. It also proves that adding spectator wires preserves local gate operator norms, supplies a local cosine-series proof of $\sqrt2<\pi/2$, and uses these results to bound truncation and verify the finite example. Finite-alphabet synthesis is a separate conditional gate-count result under fixed-arity decomposition and Solovay–Kitaev interfaces; it makes no classical target-angle bit-time claim. The N=1 and cutoff-at-or-above-register-width cases are included. The exact circuit-denotation and generic resource-accounting suppliers are still required for the corresponding readiness claims.
