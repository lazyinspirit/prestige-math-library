---
page: asymptotically-robust-permutation-tests
title: Studentized permutation tests under weak parameter nulls
status: draft
items:
  - def-two-sample-u-statistic-parameter
  - lem-finite-population-permutation-clt
  - lem-hypergeometric-binomial-contiguity-for-permutation-samples
  - lem-general-measurable-finite-group-randomization-validity
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
  - thm-two-sample-u-statistic-permutation-clt-under-mixed-centering
  - thm-studentized-permutation-validity-under-mixed-assignment-centering
  - thm-studentized-two-sample-u-statistic-permutation-validity
examples: []
---

This page develops two-sample order-$(r,r)$ U-statistics, their first
projections, and the second-moment control of their higher-order remainder.
It proves the true-sampling projection CLT and the conditional permutation CLT
under the explicit assignment-wise centering and nondegeneracy hypotheses.
When $P=Q$, the finite-group supplier gives finite-sample permutation
exactness. The broader weak-parameter-null permutation claim is retained as
an escalated proof obligation because the planned hypotheses do not supply
the assignment-wise centering used by the available coupling proof.

The studentized pivot in this page divides by the estimated standard error
$r\{\widehat\sigma_m^2/m+\widehat\sigma_n^2/n\}^{1/2}$; that ratio itself has
the standard-normal limit in the proved assignment-wise branch.

Finite-sample exactness under $P=Q$ does not establish validity of an
unstudentized Wilcoxon statistic under a weak mean or median null.
