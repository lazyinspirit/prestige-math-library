---
id: alg-tail-effective-sample-size
kind: algorithm
title: Tail effective sample size
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-blom-rank-normalization-for-pooled-draws
  - def-empirical-left-quantile-for-finite-draws
  - alg-multichain-effective-sample-size
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §4.3"
      url: https://arxiv.org/pdf/1903.08008v5
verification:
  precheck: n/a
axiom_use: "Tail ESS uses the full Axiom of Choice through Blom normal scores applied to its indicator chains."
---

## Definition

**Inputs:** $M\ge2$ equal-length chains of scalar draws with $N\ge2$ observations
each. **Output:** The minimum of the two tail ESS estimates or **not estimable**.

1. If $N<4$, return **not estimable**. This procedure calls
   [[alg-multichain-effective-sample-size]], whose input chains must have length
   at least $4$.
2. Pool the draws and calculate $q_{.05}=Q_S(.05)$ and $q_{.95}=Q_S(.95)$ using
   [[def-empirical-left-quantile-for-finite-draws]]. For each
   $p\in\{.05,.95\}$, form the bounded indicator chains
   $I^{(p)}_{m,n}=\mathbf1\{x_{m,n}\le q_p\}$, pool their values, apply
   [[def-blom-rank-normalization-for-pooled-draws]], and apply
   [[alg-multichain-effective-sample-size]] to the transformed indicator chains.
3. If either indicator ESS is not estimable, return **not estimable**.
   Otherwise return the minimum of the two values.

This is a tail-focused efficiency diagnostic; it does not establish that a
quantile estimate has a specified error bound.
