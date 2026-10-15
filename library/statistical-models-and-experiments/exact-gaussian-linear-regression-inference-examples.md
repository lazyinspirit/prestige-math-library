---
page: exact-gaussian-linear-regression-inference-examples
title: "Exact Gaussian regression inference and prediction — Examples"
status: published
items: []
examples:
  - cex-rademacher-errors-do-not-give-exact-regression-t
  - ex-gaussian-regression-mean-and-prediction-intervals
---

## Objective

Work out a full-rank Gaussian regression interval calculation and show by a finite counterexample why the exact Gaussian $t$ pivot does not follow from zero means and equal variances alone.

The numerical example uses the same center for the mean-response and prediction intervals; the prediction interval is wider because it includes the future response's independent noise. The Rademacher example keeps the design full rank and errors independent with the same first two moments, then computes all possible outcomes directly.
