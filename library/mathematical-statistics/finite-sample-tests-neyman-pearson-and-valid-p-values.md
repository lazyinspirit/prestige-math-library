---
page: "finite-sample-tests-neyman-pearson-and-valid-p-values"
title: "Tests, Neyman–Pearson and Valid P-values"
status: draft
items:
  - lem-integrable-signed-function-integration-against-density
  - lem-likelihood-ratio-threshold-exists
  - lem-common-support-likelihood-ratio-is-measurable
  - def-p-value
  - lem-measurable-rejection-function-defines-randomized-test
  - lem-test-zero-one-loss-risk-identities
  - def-test-size-and-power
  - def-likelihood-ratio-test-with-boundary-randomization
  - thm-p-value-superuniformity
  - lem-likelihood-ratio-test-is-measurable-and-exact-size
  - thm-neyman-pearson-lemma
examples: []
---

This page defines randomized tests, size, power, level, and validity of
p-values. It proves the binary zero-one testing-risk identities and the
measurability and exact size of the likelihood-ratio rule, then derives the
pointwise null rejection bound for valid p-values, its level-test consequence
whenever a nonempty disjoint alternative is specified, and the Neyman–Pearson
comparison for two simple hypotheses with a common
sigma-finite dominator. The likelihood-ratio test randomizes at a boundary
when needed and rejects alternative mass on a null-probability set without
spending size. The argument makes the density-selection assumption explicit
and keeps the simple-hypothesis result separate from composite-hypothesis
optimality claims.
