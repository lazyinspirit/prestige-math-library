---
page: feynman-kac-particle-filters
title: "Feynman–Kac targets and sequential particle filters"
status: published
items:
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - alg-multinomial-and-residual-offspring-resampling
  - def-feynman-kac-path-targets-and-normalizers
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
  - lem-feynman-kac-path-measures-satisfy-forward-recursion
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-sequential-importance-resampling
  - thm-sequential-particle-estimator-is-unbiased
examples: []
---

## Objective

Define finite-horizon Feynman–Kac path measures on standard Borel state spaces, derive their proposal path Radon–Nikodym weights, and give the exact sequential importance resampling procedure. The local proof establishes the forward recursion and unbiasedness of the product-of-average-incremental-weights estimator for the stated full-resampling scheme when every prefix normalizer is finite and positive. Multinomial and residual resampling are separate procedures, joined by their conditional expected-offspring-count identity. The claims do not assert finite-particle accuracy, a particle-count central limit theorem, or uniform-in-time stability.
