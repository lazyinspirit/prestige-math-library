---
page: kalman-smoothing-and-rts-recursion
title: Fixed-interval Gaussian smoothing and RTS recursion
status: published
items:
  - def-fixed-interval-gaussian-smoothing-law
  - lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data
  - alg-rauch-tung-striebel-smoother
  - thm-rauch-tung-striebel-fixed-interval-recursion
examples: []
---

## Objective

This page defines the marginal law of a state given the full finite
observation interval, proves the backward Gaussian conditional kernel, and
states the Rauch–Tung–Striebel (RTS) algorithm and its exactness theorem. The
forward filter may have singular state and noise covariances, and the
conditional laws may be degenerate. Each innovation covariance solved by the
forward filter and each one-step forecast covariance inverted by the RTS
pass must be positive definite. A singular forecast is outside the stated
RTS recursion; this page asserts no pseudoinverse extension or numerical
stability result.
