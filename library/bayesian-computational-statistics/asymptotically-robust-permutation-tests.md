---
page: asymptotically-robust-permutation-tests
title: Studentized permutation tests under weak parameter nulls
status: draft
items:
  - def-two-sample-u-statistic-parameter
  - lem-finite-population-permutation-clt
  - lem-hypergeometric-binomial-contiguity-for-permutation-samples
  - lem-general-measurable-finite-group-randomization-validity
  - lem-random-permutation-variance-by-transpositions
  - def-two-sample-order-r-u-statistic-and-first-projections
  - lem-permutation-consistency-from-iid-mixture
  - lem-permutation-mixture-coupling-for-two-sample-u-statistics
  - lem-two-sample-u-statistic-projections-well-defined
  - lem-pooled-mixture-projection-and-variance
  - lem-two-sample-u-statistic-hoeffding-decomposition
  - lem-two-sample-u-statistic-degenerate-remainder-order
  - def-studentized-two-sample-u-statistic
  - thm-two-sample-u-statistic-projection-clt
  - cor-two-sample-permutation-exact-under-equal-distributions
  - thm-two-sample-u-statistic-permutation-clt-under-weak-null
  - thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
  - thm-studentized-two-sample-u-statistic-permutation-validity
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - alg-studentized-two-sample-u-permutation-test
  - thm-studentized-wilcoxon-validity-under-heterogeneous-laws
examples: []
---

This page develops two-sample order-$(r,r)$ U-statistics, their first projections, and second-moment control of the higher-order remainder. A finite permutation variance estimate strengthens the exact triangular-mixture coupling and proves the conditional permutation CLT under the weak parameter null, block antisymmetry, mixed second moments and positive pooled projection variance. No assignment-wise centering or sample-fraction convergence rate is required. The all-assignment centered theorems remain useful special cases.

The studentized pivot divides by the estimated standard error $r\{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n\}^{1/2}$; that ratio itself has the standard-normal limit. General joint variance estimates require direct permutation consistency. For estimates depending on their own group alone, IID triangular-mixture consistency is sufficient by the composition-count transfer lemma. The finite-support rank example verifies permutation consistency of its joint estimates directly.

When $P=Q$, finite-group invariance gives finite-sample exactness for every measurable studentized statistic, with the stated tie conventions. That exactness does not establish validity of unstudentized Wilcoxon statistics under a weak mean or median null.

The explicit finite-enumeration test recomputes both variance estimates on every permuted split and supplies inclusive or tie-randomized p-values. The heterogeneous-law Wilcoxon specialization uses tie-corrected pairwise comparisons, verifies its empirical projection variance estimates under both the true samples and permutation, and tests the probabilistic-index null. It does not replace that null with equality of means or medians.
