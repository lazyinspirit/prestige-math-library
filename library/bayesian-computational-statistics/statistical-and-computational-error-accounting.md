---
page: statistical-and-computational-error-accounting
title: "Statistical, resampling, simulation, and numerical error ledger"
status: published
items:
  - def-statistical-and-computational-error-ledger
  - thm-pathwise-error-ledger-decomposition
  - thm-error-ledger-mse-covariance-identity
  - thm-independent-replicate-variance-estimator
  - cor-independent-replicate-mean-clt
examples: []
---

## Summary

For a scalar analysis, name the exact target and every successive reference target before assigning error labels. The pathwise error is the sum of the signed differences between adjacent targets, including the final floating-point difference. The mean square of a sum equals the sum of component variances plus a squared-total-bias and covariance correction; equality with the variance sum depends on this combined correction. When total bias is zero, pairwise independence is sufficient for adding variances. The companion correlated-error example shows that centering alone does not remove covariance terms. Independent replicate variance estimates computation-randomization variability for the fixed data and rule. It does not estimate data-sampling uncertainty. A replicate CLT is stated as a separate AC-dependent corollary. The dot-product theorem assumes $n\,u<1$ and normal-range operations; cancellation can leave its absolute error bound large relative to the exact result.

The companion examples calculate bootstrap finite-B error, permutation p-value resolution, Euler discretization bias versus path-to-path variance, randomized-QMC replicate variability, and dot-product roundoff.
