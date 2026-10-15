---
page: "valid-p-values-bonferroni-and-simultaneous-coverage"
title: "Valid p-values, Bonferroni, simultaneous coverage"
status: draft
items:
  - def-null-valid-p-value-and-fwer-fdr
  - thm-bonferroni-simultaneous-coverage
  - thm-bonferroni-familywise-error-control
examples: []
---

This page defines a fixed finite family of null hypotheses, null-valid p-values, the true-null set, FWER, and FDR. It proves strong FWER control for the equal-weight Bonferroni rule and joint coverage for finitely many marginal confidence sets when their error allocations sum to at most the target level. Both arguments use event subadditivity, so they allow arbitrary dependence. Individual test and confidence-set validity must still be established under their stated sampling laws; no data-dependent family-selection guarantee is asserted.

The testing interfaces come from [[finite-sample-tests-neyman-pearson-and-valid-p-values]], the coverage convention from [[confidence-sets-pivots-and-test-inversion]], and the probability-space identities from [[probability-spaces-random-variables-and-expectation]].
