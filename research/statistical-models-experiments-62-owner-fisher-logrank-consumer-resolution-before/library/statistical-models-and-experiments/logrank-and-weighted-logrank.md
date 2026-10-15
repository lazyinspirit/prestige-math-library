---
page: logrank-and-weighted-logrank
title: Logrank and weighted logrank
status: draft
items:
  - def-logrank-risk-set-score-and-test
  - lem-logrank-risk-set-empirical-fractions-converge
  - thm-logrank-conditional-risk-set-moments
  - lem-logrank-risk-fraction-converges
  - cor-logrank-fisher-randomization-pvalue-valid
  - lem-logrank-score-martingale-expansion
  - lem-logrank-variance-estimator-consistency
  - thm-weighted-logrank-terminal-normal-limit
examples: []
---

This page defines the two-group risk-set logrank score, its conventional hypergeometric plug-in variance, weighted scores, and the normal-calibrated statistic. It proves the finite conditional risk-set moments under the explicit uniform-subset model, separates that model from survival-law assumptions, establishes the risk-set limits and terminal common-hazard Gaussian limit, and gives a separate exact Fisher randomization result under a full-record sharp null. The terminal theorem states the square-integrable counting-process contract directly, proves the subject-influence expansion and scale replacement, and makes no process limit claim. It does not infer the martingale contract from the event-time or censoring model. Weights may be predictable and bounded; the terminal result assumes they converge uniformly in probability to a deterministic bounded limit.
