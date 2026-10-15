---
page: cluster-and-two-stage-sampling
title: "Cluster and two-stage sampling"
status: published
items:
  - def-cluster-sampling-design-and-cluster-totals
  - def-two-stage-cluster-sampling-and-expansion-estimator
  - thm-srswor-cluster-total-estimator-unbiased-and-variance
  - thm-equal-cluster-size-design-effect
  - thm-two-stage-expansion-total-unbiasedness-and-variance
examples: []
---

Cluster sampling selects whole primary sampling units (PSUs) and observes
their secondary sampling units (SSUs). The page fixes the finite-population
convention and the exact one-stage and two-stage sample laws before deriving
the expansion estimators' design properties. For two-stage sampling, the
variance separates between-PSU variation in the true cluster totals from the
expected within-PSU sampling variance. The general conditional-variance proof
states its inherited Axiom of Choice assumption. A separate superpopulation
calculation omitting the finite-population correction derives the equal-size
within-cluster-correlation design effect under independent PSUs and common
within-cluster covariance; it does not extend to unequal sizes, weights, or
nonexchangeable covariance.
