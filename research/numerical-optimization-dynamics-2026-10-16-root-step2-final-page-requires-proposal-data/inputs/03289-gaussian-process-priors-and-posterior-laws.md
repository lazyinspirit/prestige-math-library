---
page: gaussian-process-priors-and-posterior-laws
title: "Gaussian-process priors and finite posterior laws"
status: published
items:
  - lem-real-line-is-standard-borel
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - thm-finite-gaussian-process-posterior-and-predictive-laws
examples: []
---

For an arbitrary index set, a real mean function and symmetric
positive-semidefinite covariance kernel define consistent finite Gaussian
laws. Under AC, Kolmogorov extension gives the canonical process on the
cylinder sigma-algebra. This construction alone supplies no path continuity,
joint measurability in the index and sample point, or tight Banach-valued
prior.

For a finite observation list with independent Gaussian noise, condition the
joint Gaussian vector of latent test values and observations. The observed
covariance $C=K_{XX}+R$ must be positive definite; prior and conditional
covariances may be singular. The formula specifies a valid conditional-kernel
version at every observation vector, while regular conditional versions are
unique only almost surely. Independent test noise adds its covariance.
Implement the SPD systems with Cholesky and triangular solves, without
forming a matrix inverse. The Brownian prerequisite's path regularity results
are not inferred for general kernels.
