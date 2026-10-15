---
page: posterior-consistency-and-tests
title: "Hellinger geometry and posterior consistency"
status: draft
items:
  - def-hellinger-distance-for-dominated-laws
  - thm-hellinger-tv-comparison-under-library-convention
  - thm-posterior-consistency-under-prior-mass-and-tests
  - cex-identifiability-alone-does-not-imply-posterior-consistency
examples: []
---

## Objective

This page defines root-L2 Hellinger distance for laws with supplied densities against a common sigma-finite measure and proves its invariance under a change of common dominating measure. It translates the comparison to the library's event-supremum total variation convention, which has no half-factor.

For well-specified dominated IID Bayesian models, the posterior consistency theorem separates prior KL support from testability of every metric-separated complement. Its proof establishes a denominator lower bound and amplifies summable tests before controlling the tested posterior numerator. Joint measurability of the likelihood density is stated explicitly. The root-L2 comparison also shows that KL support supplies positive prior mass to every Hellinger ball. The companion counterexample shows that an injective model map and KL support do not replace uniform testability.
