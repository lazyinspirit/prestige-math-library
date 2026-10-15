---
id: alg-rank-normalized-folded-split-rhat
kind: algorithm
title: Rank-normalized folded split R-hat
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-blom-rank-normalization-for-pooled-draws
  - alg-split-rhat-from-multiple-chains
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §§3.1 and 4.1–4.2"
      url: https://arxiv.org/pdf/1903.08008v5
verification:
  precheck: n/a
axiom_use: "The rank-normal scores use the full Axiom of Choice inherited from the standard-normal law interface; splitting and finite variance calculations use no choice."
---

## Definition

**Inputs:** $M\ge2$ equal-length scalar chains with at least four observations
each. Let $S$ be the total number of pooled draws.

1. Apply [[def-blom-rank-normalization-for-pooled-draws]] to all pooled draws,
   split the transformed chains as in
   [[alg-split-rhat-from-multiple-chains]], and calculate the split statistic
   $R_z$ on the transformed values.
2. Compute the pooled median $m$ by sorting all $S$ draws and averaging the two
   central order statistics when $S$ is even (using the central order statistic
   when $S$ is odd). Fold each original draw to $|x_{m,n}-m|$, apply the same
   pooled rank-normal transformation to these folded values, split each folded
   chain, and calculate the split statistic $R_f$.
3. If either split calculation is not estimable, return **not estimable**.
   Otherwise return $\widehat R=\max\{R_z,R_f\}$.

The rank-normalized component addresses location and trend differences in a
finite output array; folding the absolute deviations makes the reported maximum
sensitive to scale differences as well. It is a diagnostic procedure, not a
proof of stationarity or convergence.
