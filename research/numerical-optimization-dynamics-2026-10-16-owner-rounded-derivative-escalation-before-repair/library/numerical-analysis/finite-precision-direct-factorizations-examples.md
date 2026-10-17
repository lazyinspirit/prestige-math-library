---
page: finite-precision-direct-factorizations-examples
title: "Finite-precision direct factorizations and least squares — Examples"
status: draft
items: []
examples:
  - ex-subnormal-and-overflow-range-failure
  - ex-neumaier-recovers-low-order-term-after-cancellation
  - ex-rounded-cholesky-two-by-two-residual
  - ex-two-sum-recovers-a-rounded-away-low-part
  - ex-full-rank-least-squares-normal-equations-versus-qr
  - ex-ill-conditioned-design-stability-versus-forward-error

These computations exhibit a nonzero rounded Cholesky residual, loss of a
Gram-matrix pivot under binary64 normal-equation formation, forward sensitivity
in an ill-conditioned design, compensation after cancellation, one exact
TwoSum recovery, and explicit subnormal and overflow range failures. General
TwoSum and Householder-dependent stability remain conditional on unresolved
proof obligations.
