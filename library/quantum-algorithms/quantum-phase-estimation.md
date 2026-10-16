---
page: quantum-phase-estimation
title: Quantum Phase Estimation
status: published
items:
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-phase-estimation-sine-chord-bounds
  - def-qa-circular-phase-distance
  - def-qa-eigenphase-estimation-model
  - alg-qa-quantum-phase-estimation
  - lem-qa-phase-estimation-outcome-kernel
  - thm-qa-phase-estimation-access-cost
  - lem-qa-phase-estimation-nearest-grid-bound
  - lem-qa-phase-estimation-tail-bound
  - thm-qa-phase-estimation-exact-grid
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-phase-estimation-success-and-tail
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - quantum-fourier-transform-circuits
  - the-complex-exponential-and-eulers-formula
  - field-extensions-and-the-complex-numbers
  - registers-tensor-products-and-partial-trace
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - controlled-gates-phase-and-entanglement
  - circuit-syntax-denotational-semantics-and-measurement
  - measurements-povms-and-instruments
  - finite-fourier-analysis-and-the-fast-fourier-transform
  - the-spectral-theorem-and-singular-value-decomposition
  - trigonometric-and-oscillatory-examples-in-one-variable
---

This page fixes phase modulo one, the big-endian phase-register convention, circular distance, and the separate controlled-power and repeated-controlled-unitary access models. It defines forward quantum phase estimation using controlled positive powers followed by the inverse of the positive-sign binary QFT, with an explicit Lüders projective readout. The finite outcome kernel gives the exact-grid law, the nearest-grid probability bound, and the circular tail estimate. It also records exact query and ideal gate counts, plus the eigenspace-weighted output law and conditional instrument for superpositions. Coherent uncomputation requires separately supplied and charged controlled inverse powers.
