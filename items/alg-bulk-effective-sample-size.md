---
id: alg-bulk-effective-sample-size
kind: algorithm
title: Bulk effective sample size
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-blom-rank-normalization-for-pooled-draws
  - alg-multichain-effective-sample-size
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §4.1"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "posterior package reference, Bulk effective sample size"
      url: https://mc-stan.org/posterior/reference/ess_bulk.html
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
axiom_use: "Bulk ESS uses the full Axiom of Choice through the standard-normal inverse in the rank-score transform."
---

## Definition

**Inputs:** $M\ge2$ equal-length scalar chains with $N\ge2$ observations each.
**Output:** A finite bulk effective-sample-size estimate or **not estimable**.

1. If $N<4$, return **not estimable**. This procedure calls
   [[alg-multichain-effective-sample-size]], whose input chains must have length
   at least $4$.
2. Pool all draws and apply
   [[def-blom-rank-normalization-for-pooled-draws]]. Apply
   [[alg-multichain-effective-sample-size]] to the resulting $M$ transformed
   chains and return its output.

Rank normalization gives finite transformed values for every finite
real-valued draw array, including arrays whose target distribution might have
infinite mean or variance. It is an efficiency diagnostic for the transformed
values and is not, by itself, a Monte Carlo standard error for the original
posterior mean.
