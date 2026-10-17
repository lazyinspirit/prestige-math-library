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
  - lem-binary-rounding-grid-and-ordered-two-sum
  - thm-two-sum-error-free-transform
  - thm-two-product-fma-error-free-transform
  - thm-kahan-and-neumaier-finite-error-identities
  - thm-rounded-cholesky-componentwise-and-normwise-backward-error
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-mixed-precision-refinement-error-recurrence-and-floor
  - thm-scaled-householder-qr-backward-stability
  - thm-computed-full-rank-least-squares-backward-stability
  - lem-rounded-triangular-substitution-componentwise-backward-error
  - lem-rounded-linear-and-normal-residual-certificates
examples: []
---

This page gives operationwise finite-precision contracts for pairwise and
compensated summation, TwoSum exact-sum recovery and FMA-assisted product
residual computation, failure-aware rounded Cholesky, scaled Householder QR,
mixed-precision refinement, and computed full-rank least squares. TwoProduct
returns an exact product when the call succeeds and the exact FMA residual is
zero or a representable normal number. The page
reuses canonical exact factorization and least
squares conventions. The Cholesky backward bound and refinement recurrence
are proved here. The scaled Householder formation/update/column-zeroing bound, its QR aggregation, rounded triangular substitution, and computed least-squares theorem are proved locally with explicit constants. Certified linear and normal-equation residual allowances support concrete solver consumers. The full TwoSum exact-transform theorem is proved for binary nearest-even formats of precision p>=2 and every successful call, using local binary-grid and exact-subtraction lemmas. No numerical SVD
algorithm or unconditional range-success claim is introduced.
