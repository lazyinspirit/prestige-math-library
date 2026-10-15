---
page: arma-causality-invertibility-and-spectra
title: "ARMA roots, spectra and inference"
status: draft
items:
  - def-linear-process-and-arma-model
  - lem-absolutely-summable-linear-filters-preserve-weak-stationarity
  - thm-arma-causality-and-invertibility-root-criteria
  - thm-stationary-arma-spectral-density
  - thm-stable-linear-process-sample-mean-clt
  - thm-fixed-order-autoregressive-ols-martingale-limit
  - cor-stable-ar-long-run-variance-plug-in-consistency
examples: []
---

This page fixes the lag-polynomial convention, defines white noise by
uncorrelatedness rather than independence, and uses coprime normalized polynomial
pairs. Cancelling common factors defines an associated reduced model; its
root classification applies to solutions of the reduced equation. Closed-unit-disk root tests characterize
absolutely summable causal and inverse filters. A separate two-sided filter
argument derives, under Countable Choice, the stationary ARMA spectral
density whenever the autoregressive polynomial has no unit-circle zero; this
does not require the displayed equation to be causal or invertible. The
inference results apply only under their explicit assumptions: a stable
linear-process sample-mean CLT for iid innovations under AC, with studentization
conditional on separately proved variance consistency; its corollary supplies
a fitted long-run variance for AR$(p)$ models with no zero of $\phi$ in
$|z|\le1$, under the fixed-order OLS conditions below. Fixed-order OLS is
under AC and strict stationarity and ergodicity, with iid innovations independent of
the past filtration, predictable regressors, a finite positive-definite
augmented Gram matrix, a singular-design fallback, residual variance
consistency, and fixed-dimensional Wald calibration. No generic white-noise
CLT, data-selected order guarantee, HAC result, or empirical adequacy claim is
supplied.
