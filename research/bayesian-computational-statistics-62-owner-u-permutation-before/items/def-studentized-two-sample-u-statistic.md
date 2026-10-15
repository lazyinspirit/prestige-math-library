---
id: def-studentized-two-sample-u-statistic
kind: definition
title: Studentized two-sample U-statistic and permutation distribution
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-pooled-mixture-projection-and-variance
  - def-statistic-and-estimator
  - def-measurable-function-between-measurable-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Theorem 3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Definition

For the two-sample statistic in
[[def-two-sample-order-r-u-statistic-and-first-projections]], let
$\widehat\sigma_m^2$ and $\widehat\sigma_n^2$ be nonnegative measurable
statistics intended to estimate the variances of $g_X(X_1)$ and $g_Y(Y_1)$.
Define the estimated standard error and studentized statistic by

$$V_{m,n}^{\rm SE}:=r\sqrt{\frac{\widehat\sigma_m^2}{m}+\frac{\widehat\sigma_n^2}{n}},\qquad S_{m,n}:=\begin{cases}U_{m,n}/V_{m,n}^{\rm SE},&V_{m,n}^{\rm SE}>0,\\0,&V_{m,n}^{\rm SE}=0.\end{cases}$$

For a uniform random permutation $\pi$ of the pooled $N=m+n$ observations,
recompute both group statistics and both variance estimates on the permuted
groups; the **permutation distribution** of $S_{m,n}$ is the conditional law of
$S_{m,n}^{\pi}$ given the pooled observations.

## Remarks

The report's scale is $V_{m,n}^{\rm CR}=r\sqrt{\widehat\sigma_m^2+(m/n)\widehat\sigma_n^2}$ and its statistic is $U_{m,n}/V_{m,n}^{\rm CR}$, with a $\sqrt m$ multiplier. Since
$$V_{m,n}^{\rm SE}=V_{m,n}^{\rm CR}/\sqrt m,$$
the usual standard-error studentization is
$$S_{m,n}=\sqrt m\,U_{m,n}/V_{m,n}^{\rm CR}.$$
Thus $S_{m,n}$ itself has the standard-normal limit. An additional $\sqrt m$ multiplying this $S_{m,n}$ is not part of the studentized pivot.
