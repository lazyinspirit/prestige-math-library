---
page: brownian-motion-construction-and-continuity
title: Brownian Motion Construction and Continuity
status: published
items:
  - def-gaussian-process
  - lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws
  - lem-positive-semidefiniteness-of-the-brownian-covariance-kernel
  - lem-consistency-of-brownian-finite-dimensional-laws
  - thm-kolmogorov-construction-of-the-canonical-gaussian-process
  - lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments
  - def-brownian-motion
  - thm-kolmogorov-continuity-criterion-one-parameter
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-existence-of-continuous-brownian-motion
  - cor-brownian-paths-are-locally-holder-of-every-order-below-one-half
  - def-uniform-on-compacts-metric-on-continuous-path-space
  - lem-continuous-path-space-is-polish
  - def-wiener-measure-on-continuous-path-space
  - lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates
  - thm-uniqueness-of-wiener-measure
  - thm-brownian-scaling
  - thm-brownian-time-inversion
  - def-d-dimensional-brownian-motion
  - cor-existence-and-scaling-of-d-dimensional-brownian-motion
  - def-continuous-time-filtration-and-all-pairs-martingale
examples: []
---

A Gaussian process is specified through all finite linear combinations, with
singular covariance matrices and variance zero retained. Mean and covariance
therefore determine every finite-dimensional law. For the Brownian kernel
$C(s,t)=\min(s,t)$, positive semidefiniteness is proved by an explicit finite
sum-of-squares calculation, and consistency is checked before Kolmogorov
extension is invoked.

The canonical Gaussian coordinate process initially supplies the desired
finite-dimensional laws, not continuous sample paths. The covariance
description is shown equivalent to stationary independent normal increments,
after which the Brownian definition records both the increment law and one
measurable probability-one continuity event. Kolmogorov's one-parameter
criterion, together with exact Gaussian even moments, constructs a continuous
modification and yields local Holder regularity of every order below one half.

Continuous paths are then placed in $C([0,\infty),\mathbb R)$ with the
uniform-on-compacts metric. Its Polish structure and coordinate-generated
Borel sigma-algebra make Wiener measure a genuine path-space probability law.
Finite-dimensional Gaussian uniqueness consequently proves uniqueness of
Wiener measure without silently enlarging the cylinder sigma-algebra on the
unrestricted function space.

Scaling and time inversion are proved at the process level, including the
continuity check at the inverted time zero. The final construction passes to
finite-dimensional Brownian motion, proves existence and scaling in every
finite dimension $d\ge1$, and fixes the uncompleted natural-filtration and
all-pairs martingale convention used by the radial example. Path continuity,
filtration indexing, and martingale identities are kept as distinct notions.

Choice is declared where the arbitrary-index extension, Gaussian-law, or
conditional-expectation interfaces require it. Deterministic kernel algebra,
finite covariance calculations, and the explicit continuity estimates add no
unrecorded selection principle. Densities, covariance calculations,
constructions, martingales, and the limits of fixed-time modification appear
on [[brownian-motion-construction-and-continuity-examples]].
