---
page: forward-ito-sde-well-posedness
title: Forward Itô SDE Well-Posedness
status: draft
items:
  - def-ito-sde-and-strong-solution
  - lem-lipschitz-sde-map-is-well-defined
  - lem-lipschitz-sde-local-solution-has-finite-path-moment
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-finite-horizon-moments-for-lipschitz-ito-sdes
examples: []
---

This page fixes the finite-dimensional Itô SDE and strong-solution
conventions, including the usual filtered-space hypotheses, finite-coordinate
matrix integral, uniform global state Lipschitz and linear-growth bounds, and
square-integrable initial value. It proves the Picard map is well-defined,
then proves adapted continuous strong existence, indistinguishable pathwise
uniqueness, and a finite-horizon expected path-sup second-moment estimate.
A separate stopped Itô argument proves uniform-in-time finite-p moments for
every real $p\ge2$ under the corresponding initial moment. These results
support strong-solution and numerical-moment consumers. They do not assert
transition-density smoothness, forward-equation uniqueness, augmented
Kolmogorov regularity, or time reversal.
