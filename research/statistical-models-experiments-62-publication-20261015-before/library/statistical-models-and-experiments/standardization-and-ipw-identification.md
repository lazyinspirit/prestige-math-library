---
page: standardization-and-ipw-identification
title: "Standardization and IPW identification"
status: draft
items:
  - alg-standardization-for-a-causal-mean
  - alg-inverse-probability-weighting-for-a-causal-mean
  - lem-conditional-treatment-indicator-factorization
  - thm-standardization-identifies-a-causal-mean
  - thm-inverse-probability-weighting-identifies-a-causal-mean
examples: []
---

## Objective

This page defines the population standardization and inverse-probability-weighted functionals for a fixed discrete or atomic treatment value. Under consistency, conditional exchangeability, integrability of the target potential outcome, and almost-sure positivity of the true treatment probability, both functionals identify the same population mean. The proofs use conditional-expectation classes, so they do not require a pointwise regular conditional version of the covariate law. A strictly positive propensity need not be bounded away from zero; the examples show that near-positivity can still produce large weights. These are population identities only: estimated weights, finite-sample stability, and truncation require separate analysis. Continuous-treatment pointwise formulas are outside this page's proved scope.
