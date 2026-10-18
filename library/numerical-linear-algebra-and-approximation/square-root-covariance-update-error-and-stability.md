---
page: square-root-covariance-update-error-and-stability
title: Square root covariance update error and stability
status: published
requires:
  - numerical-algebraic-riccati-equations-and-stabilizing-branches
  - kalman-filtering
items:
  - lem-square-root-kalman-householder-error-rational-envelope
  - lem-square-root-kalman-gram-perturbation-bound
  - lem-square-root-kalman-measurement-block-factor-identity
  - lem-square-root-kalman-prediction-factor-identity
  - lem-square-root-kalman-schur-perturbation-bound
  - lem-square-root-kalman-triangular-solve-forward-bound
  - alg-finite-budget-square-root-kalman-filter
  - lem-square-root-kalman-prearray-qr-error-bound
  - thm-square-root-kalman-finite-procedure-status
  - thm-square-root-kalman-finite-horizon-perturbation-bound
examples: []
---

## Objective

This page gives a finite-horizon covariance-factor implementation of the
canonical Kalman prediction and measurement maps. Rectangular factors,
zero columns, singular state and noise covariances, and positive-definite
innovations are allowed. The exact QR identities precede a local rounding
bound for the represented joint covariance, including an explicit rational
dimension-dependent envelope at sufficiently small unit roundoff; conditioned Schur-complement and
triangular-solve estimates then propagate explicit errors over any fixed
finite horizon.

The published Kalman items retain the Gaussian posterior and Joseph identity.
This page uses those results as suppliers and compares the subtractive
covariance expression only to explain cancellation. It does not claim that
an unstructured QR perturbation preserves the original independent-noise
model, that a rounded materialization of a factor product is positive
semidefinite, or that the finite-horizon constants remain bounded uniformly
in time.
