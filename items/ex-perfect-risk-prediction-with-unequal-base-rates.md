---
id: ex-perfect-risk-prediction-with-unequal-base-rates
kind: example
title: "Perfect prediction permits unequal base rates"
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

Let $\Sigma=\{\sigma_0,\sigma_1\}$ and $\mathcal B=\{b_0,b_1\}$. Set $p_{\sigma_0}=0$, $p_{\sigma_1}=1$, assign $\sigma_i$ deterministically to $b_i$, and give $b_0,b_1$ scores $0,1$, respectively. Let group 1 have feature proportions $(a_{1\sigma_0},a_{1\sigma_1})=(3/4,1/4)$ and group 2 have $(a_{2\sigma_0},a_{2\sigma_1})=(1/4,3/4)$, with $N_1=N_2=1$. The resulting base rates are $1/4$ and $3/4$; the score is perfectly predictive and satisfies all three criteria.

## Example references

[[def-group-risk-score-and-calibration]]: defines the finite group-conditioned law, calibration identity, base rate, and perfect-prediction convention.

[[def-positive-and-negative-score-balance]]: defines the two outcome-conditioned mean-score balance criteria.

## Facts & Assumptions

**Given:** The two-feature, two-bin model in the example. Verify the unequal base rates, calibration in each bin, perfect prediction, and both class-balance criteria.

[F1] [[def-group-risk-score-and-calibration]]: calibration is checked by the binwise positive-mass identity; perfect prediction means $S=Y$ almost surely in each group.

[F2] [[def-positive-and-negative-score-balance]]: positive and negative balance mean equality of the conditional mean score across groups, separately for the two outcomes.

## Verification

1.1 For each group, the positive mass is exactly its mass on $\sigma_1$, so $\rho_1=1/4$ and $\rho_2=3/4$. In bin $b_0$, the positive mass is $0$ and the assigned mass is $a_{t\sigma_0}$, giving $0=0\cdot a_{t\sigma_0}$; in bin $b_1$, the positive and assigned masses are both $a_{t\sigma_1}$, giving $a_{t\sigma_1}=1\cdot a_{t\sigma_1}$. Thus each group is calibrated. [given, F1, algebra]

2.1 The score is $0$ on $\sigma_0$ and $1$ on $\sigma_1$, exactly matching the deterministic outcome, so $S=Y$ in both groups. Therefore $\alpha_1=\alpha_2=1$ and $\beta_1=\beta_2=0$, which proves both balances despite the unequal base rates. [given, step 1.1, F2, algebra] ∎
