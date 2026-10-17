---
page: global-optimization-and-certified-branch-and-bound-examples
title: "Global optimization and certified branch and bound — Examples"
status: draft
requires:
  - global-optimization-and-certified-branch-and-bound
items: []
examples:
  - ex-noisy-biological-simulator-finite-candidate-gp-acquisition
  - cex-invalid-spatial-lower-bound-can-prune-global-minimum
  - ex-multimodal-polynomial-spatial-bnb-gap-certificate
  - ex-bounded-engineering-design-mixed-integer-gap-certificate
---

The examples compute a finite Gaussian-process acquisition choice under an explicitly stated surrogate, certify an epsilon gap for a multimodal quartic and a bounded mixed-integer design, and show how an invalid lower bound can prune the true global minimizer. The Bayesian example makes its model conditioning explicit and claims no regret or guarantee for a misspecified simulator.
