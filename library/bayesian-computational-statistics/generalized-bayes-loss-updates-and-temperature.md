---
page: generalized-bayes-loss-updates-and-temperature
title: "Generalized Bayes loss updates and temperature"
status: draft
items:
  - def-generalized-bayes-loss-update-and-temperature
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
  - thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer
  - thm-sequential-generalized-bayes-updates-are-coherent
  - rem-generalized-bayes-temperature-calibration
examples: []
requires:
  - bayesian-models-priors-and-posterior-laws
  - posterior-propriety-and-dominated-bayes-formula
---

For a fixed observation, a measurable real loss, a probability prior and a
positive temperature, the generalized Bayes update is the prior reweighted by
$e^{-w\ell}$ when its normalizer is finite and positive. The page proves
normalization, the KL variational identity and uniqueness over the explicitly
specified finite-objective class, and finite-sequence coherence at one fixed
temperature. It does not identify a loss with a likelihood or assert a
sampling-model posterior without the additional model and dominated-formula
hypotheses. Temperature calibration methods are recorded with their extra
inputs and limits; a target chosen through an M-loss alone supplies neither a
robust-risk theorem nor a coverage guarantee.
