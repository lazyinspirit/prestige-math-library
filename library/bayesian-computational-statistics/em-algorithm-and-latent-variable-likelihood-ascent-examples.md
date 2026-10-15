---
page: em-algorithm-and-latent-variable-likelihood-ascent-examples
title: "Latent-variable EM and likelihood ascent — Examples"
status: draft
items: []
examples:
  - ex-em-finite-mixture-responsibilities
  - ex-generalized-em-increases-q-without-maximizing
  - ex-em-likelihood-has-two-local-maxima
  - ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse
  - ex-em-support-losing-candidate-violates-finite-kl-condition
---

These examples calculate finite-mixture responsibilities and a nonmaximizing generalized step, then isolate three boundaries of the ascent identity: tied likelihood maxima with nonconvergent exact selections, an unbounded Gaussian-mixture likelihood under covariance collapse, and a candidate that loses the current latent support. The examples assert no general convergence or finite-sample optimality property.
