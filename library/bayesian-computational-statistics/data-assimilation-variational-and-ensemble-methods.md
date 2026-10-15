---
page: data-assimilation-variational-and-ensemble-methods
title: "Data assimilation: 3DVAR, 4DVAR, and ensemble filters"
status: draft
items:
  - lem-near-iid-exchangeable-arrays-have-convergent-means
  - lem-probability-convergence-plus-higher-moments-gives-lp-convergence
  - lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances
  - def-data-assimilation-problem
  - alg-ensemble-kalman-filter
  - alg-four-dimensional-variational-assimilation
  - alg-three-dimensional-variational-assimilation
  - lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter
  - lem-ensemble-kalman-update-preserves-joint-exchangeability
  - lem-perturbed-observation-ensemble-kalman-moment-bounds
  - thm-three-dimensional-variational-analysis-is-gaussian-map-update
  - thm-three-dimensional-variational-assimilation-tracking-under-contraction
  - thm-perturbed-observation-ensemble-kalman-large-ensemble-limit
examples: []
---

This page sets up finite-dimensional data assimilation and distinguishes forecast from analysis, online filtering from fixed-interval smoothing, and point estimates from posterior laws. It defines 3DVAR, strong- and weak-constraint 4DVAR, and the perturbed-observation EnKF. The 3DVAR Gaussian objective has the Kalman analysis as its unique MAP point; its fixed background covariance is not an analysis uncertainty estimate. A 3DVAR tracking bound requires a global contraction and uniformly bounded observation error. The EnKF uses sample covariances and gains; in nonlinear problems its finite-ensemble output is approximate. Under a linear-Gaussian model with positive-definite observation-noise covariances, iid initialization from the model prior, and per-member process and observation perturbations drawn from the model's laws independently across members and times and of the initial ensemble, its empirical means, covariances, and bounded Lipschitz averages converge in probability to their Kalman filtering values at each fixed time in a finite horizon, for fixed observation data, as ensemble size grows. No general optimizer convergence is asserted for 4DVAR. The standard RTS recursion requires each forecast covariance it inverts to be positive definite.
