---
page: iterative-regularization-and-early-stopping-examples
title: "Iterative regularization and early stopping — Examples"
status: published
items: []
examples:
  - cex-full-lsqr-can-amplify-data-noise
  - ex-nonlinear-exponential-kinetics-one-step
  - ex-landweber-semiconvergence-on-a-compact-diagonal-operator
  - ex-three-pixel-blur-landweber-reconstruction
---

The examples compute a three-pixel Landweber reconstruction, show
semiconvergence for noisy data on a compact diagonal operator, and work one
regularized nonlinear exponential-kinetics step. The LSQR counterexample
computes the un-stopped full solve that fits noise in a weak singular direction;
the assigned discrepancy-stopped method returns at its initial residual in
that particular zero-solution case.
