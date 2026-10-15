---
page: kalman-filtering-examples
title: Exact linear-Gaussian Kalman filtering — Examples
status: draft
items: []
examples:
  - ex-scalar-kalman-filter-update
  - ex-kalman-filter-singular-prior-positive-innovation
---

## Objective

These examples compute a scalar update and a two-dimensional update with
singular state covariance. They verify that only the innovation covariance
needs to be positive definite, while the exact filtered law may remain
degenerate.
