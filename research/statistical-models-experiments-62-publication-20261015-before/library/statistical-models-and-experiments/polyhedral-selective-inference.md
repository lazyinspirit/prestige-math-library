---
page: polyhedral-selective-inference
title: Polyhedral selective inference
status: draft
items:
  - def-polyhedral-selection-event-and-contrast-interval
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - def-exact-selective-confidence-set-for-a-functional
  - def-polyhedral-selective-normal-pivot
  - lem-polyhedral-event-restricts-contrast-to-interval
  - thm-gaussian-contrast-independent-of-orthogonal-residual
  - thm-truncated-normal-selective-pivot-is-conditionally-uniform
  - cor-exact-polyhedral-selective-tests-and-confidence-sets
examples: []
---

## Objective

Condition on one fixed finite polyhedral selection event in a known-variance Gaussian location model. Decompose a fixed nonzero contrast from its orthogonal residual, derive the interval imposed on the contrast by the selection inequalities, and prove that the conditional truncated-normal CDF is uniform. Invert this pivot for a single contrast's exact selective test and confidence set.

The results are finite-sample and require the stated Gaussian model, known positive variance, fixed contrast and selection inequalities, and positive selection probability. They do not establish model adequacy, unknown-variance validity, nonlinear-selection validity, or simultaneous guarantees for a data-selected family. The central-limit and weak-convergence page requirements remain in the plan, but no asymptotic claim is made here.
