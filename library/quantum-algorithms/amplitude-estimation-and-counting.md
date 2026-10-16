---
page: amplitude-estimation-and-counting
title: Amplitude Estimation and Counting
status: draft
requires:
  - reversible-arithmetic-and-oracle-conversion
  - quantum-phase-estimation
  - amplitude-amplification
  - computational-problems-promises-and-cost-models
  - controlled-gates-phase-and-entanglement
  - measurements-povms-and-instruments
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates
  - circuit-syntax-denotational-semantics-and-measurement
  - effective-numberings-reductions-resources-and-randomness
  - trigonometric-and-oscillatory-examples-in-one-variable
items:
  - lem-qa-13-pi-rational-bounds
  - lem-qa-13-two-nearest-phase-mass
  - def-qa-13-amplitude-estimation-task
  - lem-qa-13-grover-eigenphase-relation
  - lem-qa-13-real-cyclotomic-comparison
  - alg-qa-13-iterative-likelihood-amplitude-estimation
  - alg-qa-13-phase-estimation-amplitude-estimation
  - alg-qa-13-counting-from-amplitude-estimation
  - alg-qa-13-median-confidence-estimation
  - alg-qa-13-certified-count-output-rounding
  - lem-qa-13-certified-count-output-rounding
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-13-iterative-likelihood-query-count
  - lem-qa-13-counting-zero-outcome-kernel
  - thm-qa-13-amplitude-estimation-query-complexity
  - thm-qa-13-counting-error-guarantee
  - thm-qa-13-median-confidence-guarantee
  - alg-qa-13-relative-approximate-counting
  - thm-qa-13-counting-query-complexity
  - thm-qa-13-median-confidence-query-cost
  - thm-qa-13-relative-counting-query-cost
  - thm-qa-13-relative-counting-success
examples: []
---
This page fixes the signed Grover iterate, the amplitude and counting input/output contracts, and separate controlled-power and repeated-controlled-unitary access modes. It proves the eigenphase relation and finite-grid error/confidence bounds, exact query counts, median confidence amplification, and the finite-grid likelihood schedule. Counting uses the uniform Hadamard state and explicitly supplied controlled membership reflection. The relative approximate-counting procedure has its own exact stopping rule, certified integer rounding, success theorem, and expected query cost in repeated controlled-$Q$ access mode; the iterative likelihood variant is specified without a finite-sample success guarantee.
