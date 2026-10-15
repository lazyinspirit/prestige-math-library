---
page: variational-inference-and-evidence-lower-bound-examples
title: Variational inference and the evidence lower bound — Examples
status: draft
items: []
examples:
  - ex-discrete-elbo-equality-at-exact-posterior
  - ex-variational-candidate-outside-posterior-support
  - ex-coordinate-update-normalizer-can-diverge-despite-admissibility
---

These examples separate the exact finite-family case from two failure
boundaries. An exact discrete family attains the log normalizer; an admissible
factorized density can still produce a coordinate exponential with infinite
normalizer; and a candidate that puts mass outside the target support is not
admissible. The calculations are local and make no generic convergence claim.
