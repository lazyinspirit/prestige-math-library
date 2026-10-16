---
page: lcu-oblivious-amplitude-amplification-and-taylor-simulation
title: Linear Combinations of Unitaries and Taylor Simulation
status: draft
items:
  - lem-qa-21-pure-state-trace-distance-from-vector-error
  - def-qa-21-clean-ancilla-postselection
  - lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
  - thm-qa-21-clean-ancilla-postselection-probability-law
  - def-qa-21-lcu-input-and-access-model
  - alg-qa-21-lcu-block-encoding
  - def-qa-21-oblivious-reflection
  - def-qa-21-truncated-taylor-lcu
  - thm-qa-21-lcu-block-correctness
  - alg-qa-21-one-step-oblivious-amplification
  - thm-qa-21-taylor-tail-bound
  - thm-qa-21-oblivious-amplification-block-identity
  - lem-qa-21-robust-one-step-oaa-isometry
  - alg-qa-21-segmented-taylor-simulation
  - thm-qa-21-taylor-simulation-error-and-cost
examples: []
requires:
  - state-preparation-isometry-synthesis-and-limits
  - hamiltonian-simulation-and-product-formulas
  - reversible-computation-ancillas-and-coherent-oracles
  - controlled-gates-phase-and-entanglement
  - uniform-circuit-families-promise-problems-and-complexity
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - the-spectral-theorem-and-singular-value-decomposition
  - registers-tensor-products-and-partial-trace
  - the-complex-exponential-and-eulers-formula
  - classical-and-quantum-error-correcting-codes
---

An LCU input is a finite ordered decomposition together with complete PREPARE,
SELECT, inverse, controlled-access, and cost contracts. Its clean-ancilla
projected block is the represented matrix divided by the coefficient sum;
the zero branch has an input-dependent postselection weight. One-step
oblivious amplification uses the explicit reflection $I-2\Pi_0$ and a tracked
global phase. The Taylor construction expands ordered products, adds cancelling
identity terms to set the LCU scale, and segments time so robust clean-input
error and retained-ancilla leakage accumulate within the tolerance. Query,
gate, width, coefficient, table, inverse, control, and classical generation
costs remain separate. Continuous-rotation preparation bounds do not provide
finite-gate synthesis or coefficient bit-time by themselves.

The certified Taylor scheduler uses interval bounds without exact real-zero tests and chooses its truncation order by rational factorial comparisons. Its $3rK$ term-query bound assumes explicitly supplied coherent indexed term selection; assembly from separate controlled terms costs up to $3rmK$ individual calls, with routing and phase costs recorded.
