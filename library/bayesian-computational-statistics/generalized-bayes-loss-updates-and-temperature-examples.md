---
page: generalized-bayes-loss-updates-and-temperature-examples
title: "Generalized Bayes loss updates and temperature calibration — Examples"
status: draft
items: []
examples:
  - ex-loss-update-can-have-infinite-normalizer
  - cex-temperature-generalized-bayes-credible-set-zero-coverage
  - ex-rescaling-loss-changes-effective-temperature
  - ex-unit-temperature-likelihood-update
requires:
  - generalized-bayes-loss-updates-and-temperature
  - confidence-sets-pivots-and-test-inversion
  - dirichlet-process-priors-and-finite-partition-updates
---

Finite and countable constructions make the normalizer and temperature
conditions explicit. The unit-temperature likelihood example is a finite
Bayesian model calculation; rescaling the loss shows the equivalent change in
effective temperature. A separate dyadic prior has an infinite normalizer, and
a two-state experiment produces a posterior credible set with zero frequentist
coverage. Each calculation states its prior, loss and temperature locally;
the coverage and likelihood examples also specify their finite sampling
experiments. None asserts a general coverage theorem.
