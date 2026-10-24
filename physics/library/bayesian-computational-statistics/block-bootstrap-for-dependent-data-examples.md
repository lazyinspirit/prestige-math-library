---
page: block-bootstrap-for-dependent-data-examples
title: Moving and tapered block bootstrap for dependent data — Examples
status: published
items: []
examples:
  - ex-moving-block-bootstrap-small-sample
  - ex-tapered-block-bootstrap-triangular-window
  - ex-block-length-n-one-third
  - cex-pointwise-bootstrap-ar1-variance-mismatch
  - ex-two-series-block-bootstrap-null-centering
  - ex-iid-functional-data-block-bootstrap
---

## Summary

The examples calculate a conditional moving-block mean for a four-observation sample, work out a triangular taper and its scale, check a standard $n^{1/3}$ block-length sequence, include an IID functional-data instance and an exact two-series pooled-null centering calculation, and show that pointwise resampling estimates the marginal AR(1) variance instead of its long-run variance. The AR(1) calculation is a variance counterexample only; it does not claim that variance inconsistency alone settles every possible bootstrap distribution metric.

Under the independent-tail replacement convention, summability of the replacement errors implies $m\delta_m\to0$, as proved in [[lem-independent-tail-replacement-errors-are-monotone]]. The formerly requested example separating these two conditions cannot exist; the proved implication replaces that impossible example.
