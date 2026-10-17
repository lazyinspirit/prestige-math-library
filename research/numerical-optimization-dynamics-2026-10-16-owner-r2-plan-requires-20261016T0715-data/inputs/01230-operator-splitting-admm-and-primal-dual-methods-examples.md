---
page: operator-splitting-admm-and-primal-dual-methods-examples
title: Operator splitting ADMM and primal dual methods — Examples
status: draft
items: []
examples:
  - cex-naive-three-block-admm-divergence
  - ex-consensus-admm-least-squares
  - ex-lanczos-ritz-value-is-not-a-norm-certificate
  - ex-two-pixel-pdhg-total-variation-step
---

These examples calculate two exact ADMM sweeps for a scalar consensus problem and two exact PDHG sweeps for a two-pixel total-variation model encoded in CSR. A rational homogeneous three-block feasibility problem demonstrates divergence with exact attained solves and a unique primal-dual solution. The Lanczos example shows why a Ritz value from an invariant start subspace is not an upper certificate for the operator norm required by the PDHG step condition.
