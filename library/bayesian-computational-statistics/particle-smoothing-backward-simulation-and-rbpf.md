---
page: particle-smoothing-backward-simulation-and-rbpf
title: Particle smoothing, backward simulation, and Rao–Blackwellized filters
status: published
items:
  - lem-nonlinear-path-extension-is-a-probability-kernel
  - def-conditionally-linear-gaussian-state-space-model
  - lem-kalman-filter-is-exact-conditional-on-nonlinear-path
  - lem-smoothing-backward-kernel-bayes-factorization
  - alg-particle-backward-simulator
  - alg-rao-blackwellized-particle-filter
  - lem-bootstrap-particle-filter-weak-consistency
  - alg-fixed-lag-particle-smoother
  - thm-particle-backward-simulator-normalization-and-cost
  - thm-particle-smoothing-consistency-under-stated-conditions
  - thm-fixed-lag-smoother-targets-truncated-conditional-law
examples: []
---

Backward simulation samples paths from filtering particles by reweighting each
past particle with its transition density. The Bayes factorization also
supports an exact backward-kernel version when no transition density is
available. A required zero or infinite particle denominator leaves the
density-based step undefined; it is not repaired with arbitrary weights. Fixed-lag
smoothing targets a truncated observation history and can remain biased as
the particle count grows. The Rao–Blackwellized filter samples a nonlinear
path and updates the conditional linear-Gaussian state with the exact Kalman
recursion. Its Gaussian components are exact conditional laws, while a finite
particle mixture approximates the nonlinear filtering distribution on
histories with finite evidence at every prefix.
The consistency theorem is fixed-horizon and states its compactness,
continuity, domination, positivity, resampling, and Monte Carlo assumptions
explicitly.
