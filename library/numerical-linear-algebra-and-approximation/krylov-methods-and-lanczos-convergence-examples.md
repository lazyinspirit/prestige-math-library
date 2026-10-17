---
page: krylov-methods-and-lanczos-convergence-examples
title: "Krylov methods and Lanczos convergence — Examples"
status: published
items: []
examples:
  - ex-unrestarted-and-restarted-gmres-on-a-diagonal-system
  - ex-cg-denominator-failure-and-minres-on-an-indefinite-system
  - ex-lanczos-poorly-aligned-start-vector-delays-the-largest-ritz-value
  - ex-lanczos-repeated-top-zero-component-and-invariant-breakdown
---

The examples calculate the first restarted-GMRES residual, distinguish CG's
positive-denominator setting from an indefinite MINRES start, and show a
one-step decrease in the SPD CG energy-error norm. They also check Lanczos
behavior for a poorly aligned start and several degenerate spectral cases. The
Ritz examples retain the top-eigenspace component and exact-breakdown
hypotheses explicitly.
