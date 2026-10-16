---
page: adiabatic-computation-and-circuit-equivalence
title: Adiabatic Computation and Circuit Equivalence
status: published
items:
  - thm-qa-36-finite-cheeger-bound
  - lem-qa-36-clock-penalty-gap-perturbation
  - lem-qa-36-partial-trace-contracts-trace-distance
  - def-qa-36-finite-adiabatic-path-model
  - lem-qa-36-gapped-projection-regularity
  - def-qa-36-adiabatic-resource-model
  - lem-qa-36-jrs-finite-band-estimates
  - thm-qa-36-jrs-finite-adiabatic-bound
  - alg-qa-36-discretized-path-simulation
  - alg-qa-36-five-local-history-path
  - lem-qa-36-history-state-ground-and-output
  - lem-qa-36-history-path-ground-vector-monotonicity
  - lem-qa-36-history-path-restricted-gap
  - thm-qa-36-adiabatic-path-to-circuit-simulation
  - lem-qa-36-history-path-full-gap
  - thm-qa-36-circuit-to-adiabatic-simulation
examples: []
requires:
  - hamiltonian-simulation-and-product-formulas
  - recurrence-transience-and-hitting-times-for-markov-chains
  - stationary-markov-chains-and-ergodic-limits
  - the-spectral-theorem-and-singular-value-decomposition
  - pure-and-mixed-states-ensembles-and-schmidt-decomposition
  - measurements-povms-and-instruments
  - uniform-circuit-families-promise-problems-and-complexity
  - inner-product-spaces-and-orthogonality
  - registers-tensor-products-and-partial-trace
  - trace-distance-fidelity-and-information-limits
  - finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces
  - continuous-time-quantum-walks
---

This page gives a finite-dimensional account of adiabatic evolution and its circuit relationship. It states the path, spectral-band, preparation and access data explicitly, proves a finite reversible-chain Cheeger bound and a large clock-penalty perturbation estimate, and derives the finite-rank Jansen–Ruskai–Seiler projector bound with endpoint and gap terms.

The history-path construction uses a unary clock with a linear clock potential. Its restricted clock gap is proved by a ground-state transform and a reversible birth-death chain; the input penalty and illegal-clock penalty then give a full-space gap of order $N^{-3}$. A separate discretization argument accounts for path variation, product-formula error, coefficient precision and every term-exponential call. Circuit simulation requires the term-access and preparation costs declared by the instance.
