---
page: discrete-quantum-walks-and-szegedy-theory
title: Discrete Quantum Walks and Szegedy Theory
status: draft
items:
  - def-qa-17-finite-stochastic-kernel
  - def-qa-17-finite-reversible-chain
  - def-qa-17-szegedy-transition-isometry
  - lem-qa-17-stochastic-l2-contraction
  - lem-qa-17-reversible-transition-self-adjoint-on-l2-pi
  - def-qa-17-absolute-spectral-gap
  - thm-qa-17-absolute-gap-eigenvalue-characterization
  - thm-qa-17-discriminant-self-adjoint
  - def-qa-17-szegedy-walk
  - lem-qa-17-walk-reflection-unitarity
  - lem-qa-17-invariant-eigenplane
  - def-qa-17-walk-access-model
  - thm-qa-17-szegedy-spectral-mapping
  - thm-qa-17-walk-access-cost
examples: []
requires:
  - uniform-circuit-families-promise-problems-and-complexity
  - recurrence-transience-and-hitting-times-for-markov-chains
  - stationary-markov-chains-and-ergodic-limits
  - registers-tensor-products-and-partial-trace
  - inner-product-spaces-and-orthogonality
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - the-spectral-theorem-and-singular-value-decomposition
  - controlled-gates-phase-and-entanglement
  - circuit-syntax-denotational-semantics-and-measurement
---

This page fixes the row-stochastic convention $P_{xy}=\Pr(y\mid x)$ and constructs the row-preparation isometry and its self-adjoint discriminant. It distinguishes the one-reflection step $U=S(2TT^*-I)$ from its square $W=U^2$, proves the invariant-plane and endpoint spectral mapping, and states an explicit row-preparation access model with separate resource coordinates. For reversible chains it defines the absolute spectral gap on the mean-zero subspace and proves its eigenvalue characterization, including reducible and period-two cases. No irreducibility or aperiodicity is required for the finite spectral mapping, and a transition matrix alone supplies no circuit implementation or cost.
