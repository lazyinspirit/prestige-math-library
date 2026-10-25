---
page: block-bootstrap-for-dependent-data
title: Moving and tapered block bootstrap for dependent data
status: published
items:
  - def-conditional-weak-convergence-in-probability
  - def-hadamard-differentiability-tangentially
  - alg-overlapping-block-resampling
  - alg-moving-block-bootstrap
  - alg-tapered-block-bootstrap
  - lem-moving-block-bootstrap-conditional-covariance
  - lem-tapered-block-bootstrap-conditional-covariance
  - lem-taper-window-l2-normalization
  - alg-k-sample-null-constrained-block-bootstrap
  - lem-k-sample-null-centering
  - thm-conditional-bootstrap-hadamard-delta-method
  - lem-weighted-overlapping-block-moment-and-covariance-limits
  - lem-conditional-independent-block-bootstrap-clt
  - thm-k-sample-block-bootstrap-validity
  - lem-independent-tail-replacement-errors-are-monotone
  - thm-moving-block-bootstrap-clt-for-dependent-data
  - thm-tapered-block-bootstrap-clt-for-dependent-data
examples: []
---

## Summary

This page defines overlapping moving blocks and tapered blocks for Hilbert-valued time series, proves their finite-sample conditional covariance identities, and verifies the taper normalization. It also proves that position-centered block resampling gives every bootstrap series the same pooled conditional mean, and gives a conditional K-sample limit theorem for continuous statistics and Hadamard-differentiable maps. The MBB and TBB sample-mean CLTs are proved with conditional weak convergence and trace-norm covariance limits under the stated block regime and AC assumption inherited from the sampling CLT. The source paper assumes $m\delta_m\to0$; under the stated independent-tail replacement convention, [[lem-independent-tail-replacement-errors-are-monotone]] derives this rate from summability, so no extra process restriction is imposed. Two shared weighted-block lemmas establish empirical covariance consistency in trace norm, conditional Lindeberg, Hilbert-space tightness and negligibility of the final partial block for arbitrary sample sizes. The covariance conclusions therefore hold in Hilbert-Schmidt norm as well. This page makes no path-process FCLT claim.
