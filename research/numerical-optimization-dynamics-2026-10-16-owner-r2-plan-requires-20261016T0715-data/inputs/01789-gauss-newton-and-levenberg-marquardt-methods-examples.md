---
page: gauss-newton-and-levenberg-marquardt-methods-examples
title: "Gauss-Newton and Levenberg-Marquardt methods — Examples"
status: draft
items: []
examples:
  - ex-exponential-kinetics-gauss-newton-fit
  - ex-rank-deficient-identifiability-and-lm-step
  - ex-nonzero-residual-gauss-newton-is-only-linear
---

These exact examples check three boundaries of nonlinear least squares: an
exponential-decay fit with a full-rank exact parameter, a rank-deficient model
whose parameters are not identifiable even though damping gives a unique
trial direction, and a nonzero-residual stationary point where Gauss-Newton
converges only linearly. Each calculation is verified locally; the examples do
not infer algorithmic convergence outside the hypotheses proved on the A page.
