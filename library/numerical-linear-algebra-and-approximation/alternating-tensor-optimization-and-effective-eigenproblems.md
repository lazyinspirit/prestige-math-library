---
page: alternating-tensor-optimization-and-effective-eigenproblems
title: "Alternating tensor optimization and effective eigenproblems"
status: draft
items:
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
  - lem-na-normalized-rayleigh-energy-perturbation
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-periodic-mps-to-open-tt
  - lem-na-mixed-canonical-qr-gauge-preserves-state
  - lem-na-mps-environment-isometry-and-effective-hamiltonian
  - prop-na-exact-local-dmrg-update-does-not-increase-energy
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
  - thm-na-dmrg-sweep-truncation-energy-increase-bound
  - thm-na-convergent-exact-dmrg-sweeps-are-coordinatewise-stationary
examples: []
---

This page specifies normalized finite real or complex matrix-product states together with concrete open-boundary or periodic presentations, finite Hermitian Hamiltonian inputs, and exact one-site or two-site sweeps. Periodic trace presentations are converted exactly to open-boundary TT form before canonical QR sweeps. The local proofs show that mixed canonical environments give an identity local norm and a Hermitian effective Hamiltonian; an exact local ground solve weakly decreases energy before truncation. A normalized-state perturbation estimate and the TT root-sum-square tail bound control the possible post-sweep energy increase. Stationarity is conditional on convergent fixed-rank exact sweeps. No global minimum, polynomial cost, spectral-gap or convergence guarantee is asserted.
