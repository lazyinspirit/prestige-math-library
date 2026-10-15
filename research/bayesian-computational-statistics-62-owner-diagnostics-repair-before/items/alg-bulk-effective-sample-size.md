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
axiom_use: "Bulk ESS uses the full Axiom of Choice through the standard-normal inverse in the rank-score transform."
---

## Definition

**Inputs:** $M\ge2$ equal-length scalar chains. Pool all draws and apply
[[def-blom-rank-normalization-for-pooled-draws]]. Apply
[[alg-multichain-effective-sample-size]] to the resulting $M$ transformed
chains. The output is the **bulk effective sample size** for this procedure.

Rank normalization makes this diagnostic finite for every finite real-valued
draw array, including arrays whose target distribution might have infinite mean
or variance. It is an efficiency diagnostic for the transformed values and is
not, by itself, a Monte Carlo standard error for the original posterior mean.
