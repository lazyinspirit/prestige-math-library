---
page: stratified-sampling-and-allocation
title: Stratification and allocation
status: published
items:
  - def-stratified-sampling-design-and-estimator
  - thm-stratified-total-unbiasedness-and-variance
  - thm-neyman-allocation-minimizes-stratified-variance
  - thm-cost-optimal-stratified-allocation
examples: []
---

This page treats the population values as fixed and the sample selections as
random under the design. A finite population is partitioned into nonempty
strata; each stratum receives an independent SRSWOR sample, and its weighted
sample mean contributes to the estimated total. The total is design-unbiased,
and its variance is the sum of the within-stratum finite-population variance
terms. A certainty stratum contributes zero without requiring its population
variance. For continuous allocations with positive noncertainty variances,
the fixed-size optimum is proportional to $N_hS_h$, while a fixed per-unit-cost
budget gives weights $N_hS_h/\sqrt{c_h}$. These formulas optimize uncapped
continuous relaxations; integer rounding, capacity or minimum-sample
constraints, and zero-variance strata require separate treatment. The
probability notation follows [[probability-spaces-random-variables-and-expectation]].
