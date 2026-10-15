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
  - lem-fixed-grid-sampling-spectral-alias-identity
  - thm-regular-grid-smoothed-periodogram-bias-vanishes
  - cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition
examples: []
---

The Van Hove window and spatial-average claims assume Countable Choice
$\mathrm{AC}_\omega$, which makes every Borel window Lebesgue measurable; the
boundary excesses are required to be Lebesgue measurable as well. This page
defines Van Hove observation windows and their spatial averages,
then proves unbiasedness and L2 consistency of the spatial mean when the
stationary covariance is absolutely integrable. It defines pair-count lattice
covariance and increment-based semivariogram estimators, establishing only
their stated unbiasedness results. The regular-grid periodogram is treated as
an estimator for the spectral measure of the sampled lattice field on its dual
torus. The page makes no variance or distributional claim for the periodogram,
and it does not identify the lattice spectrum with an unaliased
continuous-space spectrum.

For a field observed at fixed regular-grid spacing, the spectral target is the aliased spectrum on the dual torus. A local sampling identity proves its exact relationship to a continuous-space density. Under AC and DC, suppose the periodized density has a bounded representative continuous at the target and agreeing there with the alias sum. With the kernel hypotheses of [[thm-regular-grid-smoothed-periodogram-bias-vanishes]] and bandwidths $b_n\to0$ and $n b_n\to\infty$, the expectations of the physically normalized raw and smoothed estimates converge to the unaliased value exactly when every noncentral alias at the target is zero. A continuous density supported in a compact subset of the open Nyquist cube suffices for targets in that cube, as proved in [[cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition]]. These are expectation limits only.
