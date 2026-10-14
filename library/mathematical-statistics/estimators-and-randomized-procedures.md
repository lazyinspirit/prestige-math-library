---
page: "estimators-and-randomized-procedures"
title: "Estimators and Randomized Procedures"
status: draft
items:
  - def-randomized-procedure-as-a-markov-kernel
  - lem-procedure-action-law-is-measurable
  - def-statistic-and-estimator
  - def-randomized-test
examples: []
---

Statistics and estimators are measurable maps from observed data to named target spaces. A randomized procedure assigns a probability distribution on actions to each data value, with measurability required for every action event. A binary action space gives a randomized test, whose test function is the conditional rejection probability. The action-law lemma proves that integrating a procedure against each sampling law yields a probability distribution on actions and that nonnegative action functionals are measurable before that integration.

The definitions impose no measurable structure on the parameter set. A kernel itself specifies a randomized procedure; no representation by an auxiliary random seed is assumed for arbitrary measurable action spaces. Deterministic procedures arise when each action distribution is concentrated at one value.
