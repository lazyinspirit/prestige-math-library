---
page: fixed-design-linear-regression-and-estimability-examples
title: "Fixed-design regression, estimability, and Gauss–Markov — Examples"
status: published
items: []
examples:
  - ex-collinear-fixed-design-estimability
  - cex-heteroskedasticity-invalidates-ols-blue
  - ex-high-leverage-is-a-design-feature
---

## Examples

The first calculation shows that collinear predictor columns can leave a
contrast estimable even when individual coefficients are not. The
counterexample then shows why the Gauss–Markov covariance premise matters: with
unequal error variances, a different linear unbiased estimator can have lower
variance than OLS. The last calculation obtains a leverage value near one from
the design projection alone.

These computations do not validate a scientific model. Residual and leverage
plots are diagnostic prompts; their values do not prove the mean model,
independence, equal variance, or causal interpretation.
