---
page: statistical-and-computational-error-accounting-examples
title: "Statistical, resampling, simulation, and numerical error ledger — Examples"
status: published
items: []
examples:
  - ex-bootstrap-finite-b-versus-sampling-error
  - ex-permutation-pvalue-resolution
  - ex-euler-discretization-bias-and-path-variance
  - ex-rqmc-replicate-error-estimate
  - ex-dot-product-roundoff-and-conditioning
  - ex-correlated-error-components
---

## Examples

- [[ex-bootstrap-finite-b-versus-sampling-error]] separates the observed-data error from a realized finite bootstrap average.
- [[ex-permutation-pvalue-resolution]] compares the full-orbit and finite-B p-value grids without transferring validity to an unproved procedure.
- [[ex-euler-discretization-bias-and-path-variance]] computes one-step Euler bias and Monte Carlo variance across simulated paths.
- [[ex-rqmc-replicate-error-estimate]] uses independent randomizations to estimate computation variability for fixed data.
- [[ex-dot-product-roundoff-and-conditioning]] checks a left-to-right dot-product bound in binary64's normal range.
- [[ex-correlated-error-components]] shows why covariance terms matter in a mean-squared error calculation.
