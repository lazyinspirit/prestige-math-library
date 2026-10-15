---
page: cross-validation-risk-and-model-comparison-examples
title: "Cross-validation risk, model selection, and comparison uncertainty — Examples"
status: draft
items: []
examples:
  - ex-holdout-cv-training-size-bias
  - ex-paired-kfold-model-comparison-uncertainty
  - ex-random-row-split-leaks-group-information
  - ex-cross-validation-risk-minimization-does-not-identify-model
---

## Examples

- [[ex-holdout-cv-training-size-bias]] calculates a nonzero holdout bias for a sample-mean predictor.
- [[ex-paired-kfold-model-comparison-uncertainty]] computes the covariance terms in a paired two-fold comparison and checks them on all 16 binary samples.
- [[ex-random-row-split-leaks-group-information]] shows why repeated observations must be split by group when the target is a new group.
- [[ex-cross-validation-risk-minimization-does-not-identify-model]] gives two observationally equivalent labels with equal predictive risks.
