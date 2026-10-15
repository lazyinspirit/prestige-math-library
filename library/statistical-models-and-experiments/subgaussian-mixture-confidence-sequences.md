---
page: subgaussian-mixture-confidence-sequences
title: Sub-Gaussian mixture confidence sequences
status: draft
items:
  - def-conditional-subgaussian-increments
  - def-gaussian-mixture-confidence-sequence-boundary
  - lem-gaussian-exponential-mixture-integral
  - lem-conditional-subgaussian-exponential-process
  - lem-gaussian-mixture-boundary-crossing-equivalence
  - thm-gaussian-mixture-test-supermartingale
  - thm-subgaussian-mixture-confidence-sequence
examples: []
---

## Objective

This page derives a time-uniform confidence sequence for a scalar mean from a
discrete-time conditional moment-generating-function bound. At every step and
for every real tuning value, the increment around the fixed mean must satisfy
the same known sub-Gaussian proxy bound given the past. Independence and
identical distribution are not required.

The proof builds the fixed-parameter exponential supermartingales, mixes them
over a centered normal law with precision $\rho>0$, evaluates the Gaussian
integral, and converts the crossing boundary into closed intervals. The
simultaneous coverage guarantee follows from Ville's inequality. The proxy is
an upper mgf bound, not a claim that it equals the variance.

Marginal sub-Gaussianity alone does not supply the conditional premise, as the
repeated-Rademacher example shows; finite variance alone need not even give a
marginal sub-Gaussian bound ([[cex-finite-variance-does-not-imply-subgaussian-tail]]).
This is a discrete-time statement; no continuous-time extension or
conditional-on-covariates guarantee is asserted.
