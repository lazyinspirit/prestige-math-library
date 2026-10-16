---
page: quantum-spectral-estimation-and-matrix-functions
title: Quantum Spectral Estimation and Matrix Functions
status: draft
items:
  - thm-qa-28-polynomial-matrix-function-error
  - def-qa-28-state-spectral-distribution
  - lem-qa-28-normalized-function-target
  - def-qa-28-spectral-estimation-access
  - alg-qa-28-phase-spectral-estimation
  - thm-qa-28-spectral-law-measurement
  - alg-qa-28-median-spectral-estimation
  - alg-qa-28-qsvt-matrix-function
  - thm-qa-28-spectral-estimation-guarantee
  - thm-qa-28-matrix-function-error-cost
examples: []
requires:
  - quantum-phase-estimation
  - hamiltonian-simulation-and-product-formulas
  - quantum-singular-value-transformation
  - the-spectral-theorem-and-singular-value-decomposition
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - block-encodings
  - controlled-gates-phase-and-entanglement
  - uniform-circuit-families-promise-problems-and-complexity
  - measurements-povms-and-instruments
  - effective-numberings-reductions-resources-and-randomness
---

This page distinguishes the state-dependent spectral law from a phase-estimation output distribution: QPE samples a finite kernel mixture, and its postmeasurement system state is generally a coherent sum across eigenspaces. It fixes the injective phase encoding, decoder branch, state preparation, controlled-power/simulation access and their costs. For a promised eigenstate, one-run tail bounds and an internally proved median estimate give additive accuracy; fresh preparations matter when the input is a superposition. For Hermitian matrix functions, uniform scalar error transfers directly through the spectral resolution. QSVT handles complex functions by splitting an extension on a symmetric interval into four real parity components, synthesizing each bounded polynomial under OP1, and combining their scaled blocks by LCU. Polynomial approximation, phase generation, block-encoding error, normalization, and every query/control/compilation cost remain explicit inputs or proved bounds; no universal efficient approximation claim is made.
