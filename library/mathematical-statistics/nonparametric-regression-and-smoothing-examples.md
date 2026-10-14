---
page: nonparametric-regression-and-smoothing-examples
title: "Regression Estimation — Examples"
status: draft
items: []
examples:
  - ex-local-linear-reproduces-affine-regression
  - cex-nadaraya-watson-design-gradient-and-boundary-bias
  - cex-local-linear-finite-sample-expectation-undefined
---

Local-linear weighted least squares reproduces an affine response exactly
whenever its moment matrix is nonsingular. For Nadaraya–Watson smoothing, a
nonconstant design density creates a second-order interior bias even for a
linear regression function, and a support boundary can create first-order
bias. A separate finite-sample counterexample shows that the local-linear
estimator's expectation need not exist under local smoothness, the displayed bandwidth conditions, and
singular-only fallback. This is compatible with the proved conditional
response-law bias expansion in probability; it prevents interpreting that
expansion as an unconditional expectation formula.
