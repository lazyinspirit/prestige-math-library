---
page: langevin-monte-carlo-mala-and-ula
title: "Langevin algorithms: ULA bias and MALA exactness"
status: draft
items:
  - def-v-weighted-total-variation-distance
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-langevin-potential-exponential-generator-drift
  - alg-unadjusted-langevin-algorithm
  - lem-weighted-pinsker-inequality-for-probability-laws
  - lem-weighted-drift-minorization-gives-contraction-and-invariant-law
  - lem-langevin-gaussian-proposal-kernel
  - thm-ula-gaussian-target-invariant-law-and-stationary-variance
  - lem-ula-fixed-step-gaussian-kernel-exponential-drift
  - alg-metropolis-adjusted-langevin-algorithm
  - lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts
  - thm-metropolis-adjusted-langevin-target-invariant
  - lem-ula-pathwise-kl-error-bound
  - lem-langevin-diffusion-density-reversibility-and-compact-minorization
  - lem-ula-uniform-exponential-moments-and-invariant-laws
  - thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift
  - thm-ula-quantitative-invariant-law-weighted-tv-bias
examples: []
---

ULA applies a noisy gradient step without correction, while MALA uses the same Gaussian proposal with a Hastings acceptance rule and rejected self-transitions. This page proves the exact Gaussian ULA stationary variance and MALA target invariance. For a twice continuously differentiable potential with globally Lipschitz gradient and the stated superlinear radial drift, it proves existence and uniqueness of each ULA invariant law and a weighted total-variation bias bound of order square root of the step size throughout the specified step-size interval.

Local suppliers establish finite-horizon Brownian change of drift and directional relative entropy, a reversible diffusion density and compact minorization, weighted contraction and invariant existence, and the uniform exponential moments needed by the proof. Every quantitative conclusion retains its explicit hypotheses; the Gaussian example alone does not establish the general bias bound.
