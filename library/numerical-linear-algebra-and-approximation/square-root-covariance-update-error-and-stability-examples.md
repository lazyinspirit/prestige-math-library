---
page: square-root-covariance-update-error-and-stability-examples
title: Square root covariance update error and stability — Examples
status: draft
requires:
  - square-root-covariance-update-error-and-stability
items: []
examples:
  - ex-square-root-kalman-perturbed-prearray-psd-factor
  - ex-subtractive-kalman-update-loses-positive-semidefiniteness
  - ex-square-root-kalman-singular-prior-positive-innovation
  - ex-square-root-kalman-nearly-noiseless-solve-sensitivity
---

## Examples

The examples retain the approved scope: a singular prior with positive
innovation, an ill-conditioned innovation solve, a finite binary floating
point witness where the subtractive update loses positive semidefiniteness,
and a nonzero prearray perturbation whose represented posterior remains a
factor product. The binary witness is a direct exact calculation for the
declared precision; it does not stand in for a general backward-error proof.
