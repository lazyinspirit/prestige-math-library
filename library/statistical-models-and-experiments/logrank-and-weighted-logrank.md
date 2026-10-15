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

This page defines the two-group risk-set logrank score, its conventional hypergeometric plug-in variance, weighted scores, and the normal-calibrated statistic. It proves the finite conditional risk-set moments under the explicit uniform-subset model; the sequential result specifies a finite filtration, zero-risk convention, and finite expected weighted variance. The uniform risk-set limits assume within-group IID observed times, deterministic allocation fractions, and positive pooled limiting risk. The page separates these design-based and sampling premises, establishes the terminal common-hazard Gaussian limit under an explicit square-integrable counting-process contract, and gives an exact Fisher randomization result when each allowed assignment induces a binary group map and the full-record sharp null holds. The terminal theorem proves the subject-influence expansion and scale replacement and makes no process limit claim. It does not infer the martingale contract from the event-time or censoring model. Weights may be predictable and bounded; the terminal result assumes they converge uniformly in probability to a deterministic bounded limit.
