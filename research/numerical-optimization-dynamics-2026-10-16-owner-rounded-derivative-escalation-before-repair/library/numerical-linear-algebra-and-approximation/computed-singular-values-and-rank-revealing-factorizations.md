---
page: computed-singular-values-and-rank-revealing-factorizations
title: Computed singular values and rank revealing factorizations
status: draft
items:
  - alg-householder-bidiagonalization
  - alg-strong-rank-revealing-qr-with-finite-swaps
  - lem-singular-value-product-bound
  - lem-singular-values-lipschitz-in-spectral-norm
  - prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex
  - alg-implicit-shifted-bidiagonal-qr-with-deflation
  - lem-exact-householder-bidiagonal-reduction
  - lem-strong-rrqr-column-swap-volume-ratio
  - thm-bidiagonal-singular-values-relative-under-componentwise-perturbations
  - thm-strong-rrqr-singular-value-comparisons
  - alg-rank-thresholded-least-squares-by-svd
  - lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence
  - thm-strong-rrqr-swap-rule-terminates
  - thm-bidiagonal-svd-backward-error-under-local-stability
  - thm-svd-thresholded-least-squares-minimum-norm-model
  - cor-computed-singular-values-absolute-error-from-backward-stability
examples: []
---

This page develops the computed SVD in two stages: Householder reduction to bidiagonal form, followed by finite-budget implicit shifted QR sweeps with explicit deflation, zero-pivot handling, residual reports, and an inconclusive status when the budget ends first. Exact unitary reduction and bulge-chase identities are proved locally. Conditional local-update bounds aggregate into a backward error; Weyl's inequality then gives absolute singular-value error. This absolute guarantee does not give relative accuracy for tiny values. A separate bidiagonal theorem gives a relative guarantee only under the stronger componentwise-relative backward-error hypothesis; the ordinary absolute reflector bound does not imply that hypothesis.

The rank-revealing section distinguishes greedy column-pivoted QR from strong RRQR. Strong RRQR retains the coefficient-triggered swaps and also checks a trailing-residual score involving the columns of $R_{22}$ and rows of $R_{11}^{-1}$; both terms are needed for the stated block singular-value comparisons. Swaps have an explicit finite volume potential, while budget exhaustion and singular pivots return statuses. Rank-thresholded least squares solves the truncated SVD model and reports the residual for the original matrix; it is an original-matrix minimum-norm least-squares solution only when all discarded singular values are zero.
