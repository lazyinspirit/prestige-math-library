---
page: continuous-time-quantum-walks
title: Continuous-Time Quantum Walks
status: published
items:
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - lem-qa-19-hadamard-uniform-state-preparation
  - def-qa-19-graph-generator-conventions
  - def-qa-19-continuous-time-walk
  - thm-qa-19-measurement-distribution
  - lem-qa-19-single-outcome-probability-stability
  - def-qa-19-hamiltonian-access-cost-model
  - alg-qa-19-hypercube-state-transfer
  - thm-qa-19-hypercube-transfer-correctness
  - alg-qa-19-complete-graph-spatial-search
  - thm-qa-19-complete-graph-search-correctness
  - thm-qa-19-continuous-walk-resource-accounting
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - the-spectral-theorem-and-singular-value-decomposition
  - the-complex-exponential-and-eulers-formula
  - inner-product-spaces-and-orthogonality
  - registers-tensor-products-and-partial-trace
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - measurements-povms-and-instruments
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - controlled-gates-phase-and-entanglement
  - reversible-computation-ancillas-and-coherent-oracles
---

A continuous-time quantum walk on a finite register is the matrix evolution
$U_H(t)$ for a declared self-adjoint generator $H$. The finite matrix defines a
unitary mathematically; a separate Hamiltonian-access contract specifies the
operation, precision, oracle access, and resource costs used to implement it.
Graph adjacency, the two Laplacian signs, and normalized adjacency have
different conventions and scales. Basis-measurement probabilities are the
squared moduli of the evolved state coordinates.

The page proves exact transfer across the Boolean hypercube and exact
continuous-time search on the complete graph for every $N\ge2$. It keeps
state preparation, Hamiltonian evolution, measurement, oracle queries,
description bits, and finite-gate synthesis costs separate. It makes no
efficiency claim from a matrix description alone and asserts no universal
spatial-graph speedup.
