---
page: principal-components-and-eigenspace-stability
title: PCA and eigengap stability
status: published
items:
  - thm-local-leading-eigenvector-stability-under-eigengap
  - thm-sample-centered-covariance-root-n-frobenius
  - def-covariance-and-correlation-principal-component-analysis
  - lem-pca-sample-covariance-is-a-measurable-estimator
  - thm-pca-leading-direction-maximizes-variance
  - thm-repeated-leading-eigenvalue-identifies-subspace
  - cor-pca-sample-leading-eigenspace-root-n-consistency
examples: []
---

## Objective

For a specified parametric model and finite-second-moment vector, covariance
PCA orders the eigenspaces of the centered covariance matrix; correlation PCA
first divides each centered coordinate by its positive standard deviation.
The page proves the leading-variance interpretation, clarifies what a
repeated leading eigenvalue identifies, and establishes a local perturbation
bound when the population leading eigenvalue is simple and separated by a
positive gap.

For iid observations with finite fourth moment and fixed dimension, the
sample-centered covariance converges at rate $n^{-1/2}$ in Frobenius norm.
Combining that result with the local gap bound gives consistency of the
sample leading eigenspace when the population gap is positive. The bound is
local to a simple leading eigenvalue; it is not a general Davis--Kahan result
or finite-sample selected-component inference. All probability claims are
conditional mathematical consequences of their stated model assumptions;
they do not establish empirical model adequacy.
