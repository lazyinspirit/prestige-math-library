---
page: hamiltonian-simulation-and-product-formulas
title: Hamiltonian Simulation and Product Formulas
status: draft
items:
  - def-qa-20-simulation-error-and-cost-model
  - def-qa-20-term-list-access-model
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qa-20-first-order-product-formula
  - def-qa-20-symmetric-second-order-formula
  - rem-qa-20-higher-order-formula-proof-obligations
  - thm-qa-20-first-order-commutator-error
  - alg-qa-20-first-order-term-list-simulation
  - thm-qa-20-second-order-conservative-error
  - alg-qa-20-suzuki-recursive-product-formula
  - thm-qa-20-first-order-resource-bound
  - lem-qa-20-suzuki-order-cancellation
  - thm-qa-20-suzuki-conservative-error-and-resources
examples: []
requires:
  - continuous-time-quantum-walks
  - uniform-circuit-families-promise-problems-and-complexity
  - controlled-gates-phase-and-entanglement
  - the-spectral-theorem-and-singular-value-decomposition
  - reversible-computation-ancillas-and-coherent-oracles
---

This page treats time-independent Hamiltonians as finite-dimensional self-adjoint matrices and defines simulation error in operator norm. It distinguishes a term-list access contract from sparse row and value oracles, fixes product order and signed-time conventions, proves first- and second-order error bounds, and accounts for explicit term calls and their costs. The finite Suzuki recursion, its order cancellation and a conservative error bound are proved locally. No efficient circuit or free term evolution follows from a matrix description alone.
