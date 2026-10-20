---
id: ex-equal-base-rates-admit-constant-calibrated-score
kind: example
title: "Equal base rates admit a constant calibrated score"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-group-risk-score-and-calibration
  - def-positive-and-negative-score-balance
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Let $\Sigma=\{\sigma\}$ and $\mathcal B=\{b\}$. In both groups take total mass $N_t=1$, feature proportion $a_{t\sigma}=1$, positive-outcome probability $p_\sigma=1/2$, and deterministic assignment $X_{\sigma b}=1$ with score $v_b=1/2$. Each group then has base rate $1/2$ although the outcome is not determined by the feature, and the constant score is calibrated and balanced for both outcome classes.

## Example references

[[def-group-risk-score-and-calibration]]: defines the finite group-conditioned law, calibration identity, base rate, and perfect-prediction convention.

[[def-positive-and-negative-score-balance]]: defines the two outcome-conditioned mean-score balance criteria.

## Facts & Assumptions

**Given:** The one-feature, one-bin model in the example. Verify equal base rates, groupwise calibration, both class-balance criteria, and failure of perfect prediction.

[F1] [[def-group-risk-score-and-calibration]]: calibration is the binwise identity between positive mass and score times assigned mass; the base rate is the positive mass divided by group mass.

[F2] [[def-positive-and-negative-score-balance]]: positive and negative balance mean equality of the conditional mean score across groups, separately for the two outcomes.

## Verification

1.1 In either group, $\rho_t=a_{t\sigma}p_\sigma=1/2$. The sole bin has total mass $1$ and positive mass $1/2$, so its calibration identity is $1/2=(1/2)\cdot1$. Since $S$ is constantly $1/2$, the positive and negative conditional mean scores are both $1/2$ in both groups, proving both balances. [given, F1, F2, algebra]

2.1 The outcome takes both values with probability $1/2$, while $S=1/2$ always; hence $S\ne Y$ almost surely. This is the equal-base-rate exception without perfect prediction. [given, step 1.1, F1, algebra] ∎
