---
page: spectral-measures-and-periodogram-bias
title: "Spectral measures and periodogram bias"
status: draft
items:
  - thm-discrete-integers-have-circle-dual
  - def-time-series-spectral-measure-and-periodogram
  - lem-angular-fourier-orthogonality
  - thm-herglotz-spectrum-and-spectral-density
  - thm-periodogram-fejer-expectation-and-smoothing-bias
examples: []
---

For a real weakly stationary sequence on $\mathbb Z$, the covariance sequence
is positive definite. Under AC and DC, the LCA Bochner theorem gives its unique
finite positive spectral measure on the circle; absolute summability of the
autocovariance gives a continuous nonnegative density in the angular-frequency
convention fixed here. The known-mean periodogram has an exact finite-sample
Fejér convolution expectation. A kernel-smoothed periodogram is asymptotically
unbiased at a continuity point under the stated bandwidth and grid conditions.
The angular Lebesgue and smoothing branch assumes Countable Choice in this
library; the finite expectation and supplied-measure convolution identities do
not use a choice axiom. AC and DC remain the separate hypotheses for spectral
measure existence.
These arguments do not supply a raw-periodogram CLT, variance consistency, or
interval coverage.
