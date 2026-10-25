---
page: hhl-phase-estimation-linear-systems
title: "Phase-Estimation Linear-System Algorithms"
status: published
requires:
  - quantum-phase-estimation
  - amplitude-amplification
  - hamiltonian-simulation-and-product-formulas
  - the-spectral-theorem-and-singular-value-decomposition
  - inner-product-spaces-and-orthogonality
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - registers-tensor-products-and-partial-trace
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - controlled-gates-phase-and-entanglement
  - uniform-circuit-families-promise-problems-and-complexity
  - amplitude-estimation-and-counting
  - qubitization-and-optimal-hamiltonian-simulation
  - trigonometric-and-oscillatory-examples-in-one-variable
items:
  - def-qa-26-hhl-reciprocal-filter
  - def-qa-26-hhl-sine-window
  - lem-qa-26-hermitian-dilation
  - lem-qa-26-hhl-filter-geometry
  - def-qa-26-qlsp-task
  - lem-qa-26-hhl-filter-perturbation
  - lem-qa-26-hhl-sine-window-prefix-masses
  - lem-qa-26-qlsp-target-is-well-defined
  - lem-qa-26-hhl-prefix-table-synthesis-error
  - def-qa-26-hhl-access-model
  - lem-qa-26-hhl-sine-window-kernel-moment
  - lem-qa-26-phase-to-eigenvalue-unwrapping
  - lem-qa-26-hhl-capped-amplification
  - alg-qa-26-hhl-phase-estimation
  - lem-qa-26-hhl-success-amplitude
  - thm-qa-26-hhl-amplified-postselection-cost
  - thm-qa-26-hhl-simulator-cost
  - lem-qa-26-postselection-normalization-bound
  - thm-qa-26-hhl-state-correctness
  - thm-qa-26-hhl-query-cost
examples: []
---

This page specifies the state-output QLSP task, a rectangular Hermitian dilation, and the finite sine-window HHL circuit in the signed-eigenvalue convention. It proves the sine-window kernel moment, reciprocal-filter stability, postselection normalization, capped amplification, and the resulting conditional state error under explicit preparation and simulator error budgets. The direct simulator resource sum is proved. The sparse-row query specialization follows from the explicit sorted-XOR access bridge and the clean-workspace simulation mode.

The sparse-query specialization is proved through the costed sorted-XOR block encoding and the QA25 clean-input simulator. The access definition retains full-operator simulation and additionally permits the explicit clean-workspace mode; its proof includes actual inverse circuits and error accumulation without assuming intermediate work is clean. Classical table generation, arithmetic, phase compilation, gate and bit-time resources remain separate.
