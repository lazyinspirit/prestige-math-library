---
page: conjugate-families-and-posterior-prediction
title: "Conjugate families and Gaussian conditioning"
status: draft
items:
  - lem-beta-density-normalization
  - lem-binomial-count-law
  - lem-gamma-density-normalization
  - def-poisson-law
  - def-exponential-conjugate-prior-family
  - lem-finite-euclidean-space-is-standard-borel
  - def-dirichlet-density-kernel
  - lem-multinomial-law-normalization
  - thm-multivariate-normal-conditional-law
  - thm-iid-exponential-family-statistic-is-sufficient
  - def-beta-distribution
  - def-gamma-distribution-shape-rate
  - thm-dirichlet-density-normalization
  - def-multinomial-distribution
  - def-dirichlet-distribution
  - thm-beta-binomial-conjugate-update
  - thm-gamma-poisson-exposure-adjusted-update
  - thm-exponential-family-conjugate-update
  - thm-dirichlet-multinomial-conjugate-update
  - lem-normal-location-scale-density
  - thm-normal-normal-conjugate-update
examples: []
---

This page develops conjugate updates only on fibers with finite positive
normalizers. Beta, Gamma, and Dirichlet density normalizations use Countable
Choice; the Normal and multivariate Gaussian density/construction branch uses
AC. It fixes the shape-rate Gamma convention, keeps zero-exposure
Poisson observations explicit, and gives the Beta–Binomial, exposure-adjusted
Gamma–Poisson, known-variance Normal–Normal, and Dirichlet–Multinomial updates.
For exponential families it uses the natural-statistic sum update and proves
the IID sufficiency result separately under AC; the algebraic posterior update
itself does not require that choice branch. The Dirichlet kernel is normalized
by a stick-breaking change of variables and iterated Beta integrals. The
Gaussian conditioner requires positive-definite observed covariance $B$, while
the state covariance and Schur-complement conditional covariance may be
singular. No converse characterization of regular exponential families or
pseudoinverse formula for singular $B$ is asserted.
