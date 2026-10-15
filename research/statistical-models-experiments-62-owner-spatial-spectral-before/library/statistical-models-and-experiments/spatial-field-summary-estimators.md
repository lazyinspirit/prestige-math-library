---
page: spatial-field-summary-estimators
title: "Spatial summary estimators"
status: draft
items:
  - def-van-hove-window-sequence
  - def-spatial-window-average
  - thm-van-hove-window-average-l2-consistency
  - def-lattice-covariance-and-variogram-estimators
  - thm-lattice-covariance-estimator-asymptotically-unbiased
  - lem-integers-lattice-is-discrete-lca-group
  - lem-dual-of-zd-is-torus
  - lem-transport-lattice-spectral-measure-to-torus
  - def-regular-grid-periodogram-and-smoother
  - thm-regular-grid-periodogram-fejer-expectation
  - thm-regular-grid-smoothed-periodogram-bias-vanishes
examples: []
---

This page defines Van Hove observation windows and their spatial averages,
then proves unbiasedness and L2 consistency of the spatial mean when the
stationary covariance is absolutely integrable. It defines pair-count lattice
covariance and increment-based semivariogram estimators, establishing only
their stated unbiasedness results. The regular-grid periodogram is treated as
an estimator for the spectral measure of the sampled lattice field on its dual
torus. The page makes no variance or distributional claim for the periodogram,
and it does not identify the lattice spectrum with an unaliased
continuous-space spectrum.
