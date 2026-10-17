---
page: finite-precision-direct-factorizations
title: "Finite-precision direct factorizations and least squares"
status: draft
items:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-balanced-pairwise-summation
  - alg-two-sum-error-free-transform
  - alg-two-product-fma-error-free-transform
  - alg-kahan-compensated-summation
  - alg-neumaier-compensated-summation
  - alg-rounded-cholesky-with-failure-status
  - alg-scaled-householder-reflector-formation-and-application
  - alg-bounded-mixed-precision-iterative-refinement
  - thm-balanced-pairwise-summation-error-bound
  - thm-two-sum-error-free-transform
  - thm-two-product-fma-error-free-transform
  - thm-kahan-and-neumaier-finite-error-identities
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-mixed-precision-refinement-error-recurrence-and-floor
  - thm-scaled-householder-qr-backward-stability
  - thm-computed-full-rank-least-squares-backward-stability
examples: []

This page gives operationwise finite-precision contracts for pairwise and
compensated summation, error-free product transforms, failure-aware rounded
Cholesky, scaled Householder QR, mixed-precision refinement, and computed
full-rank least squares. It reuses canonical exact factorization and least
squares conventions. The Cholesky backward bound and refinement recurrence
are proved here. The full TwoSum case proof and the local scaled Householder
3 gamma_m premise remain escalated; QR and least-squares stability statements
retain those hypotheses and are not ready for acceptance. No numerical SVD
algorithm or unconditional range-success claim is introduced.
