---
id: ex-threshold-rates-vary-under-score-balance
kind: example
title: "Threshold rates can vary despite balanced mean scores"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-group-risk-score-and-calibration
  - def-positive-and-negative-score-balance
  - lem-score-means-as-threshold-rate-areas
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

Let group 1 have two feature types $\sigma_1,\sigma_2$, each of proportion $1/2$, with outcome probabilities $p_{\sigma_1}=1/5$ and $p_{\sigma_2}=4/5$. Let group 2 have three feature types $\tau_1,\tau_2,\tau_3$ with proportions $9/32,14/32,9/32$ and outcome probabilities $p_{\tau_1}=1/10$, $p_{\tau_2}=1/2$, and $p_{\tau_3}=9/10$. Each feature type is assigned deterministically to its own bin, whose score equals that type's outcome probability; this is one common feature-based assignment for both groups, with $N_1=N_2=1$. Both groups have base rate $1/2$, and the assignment is calibrated in each group with positive- and negative-outcome mean scores $17/25$ and $8/25$, respectively. At threshold $u=1/2$, the group 1 true-positive and false-positive rates are $4/5$ and $1/5$, while the group 2 rates are $151/160$ and $79/160$. At threshold $u=9/10$, group 1's two rates are $0,0$ and group 2's are $81/160,9/160$. Thus the threshold rates change with the threshold even though both class-conditioned mean-score criteria hold.

## Example references

[[def-group-risk-score-and-calibration]]: defines the finite group law, shared feature-to-bin assignment, calibration, and score convention.

[[def-positive-and-negative-score-balance]]: defines the positive- and negative-outcome conditional mean scores.

[[lem-score-means-as-threshold-rate-areas]]: identifies those class-conditioned means with areas under the threshold-rate functions.

## Facts & Assumptions

**Given:** The finite distributions and deterministic feature-to-bin assignment in the example. Verify calibration, class-mean balance, and the threshold-rate values at $u=1/2$ and $u=9/10$.

[F1] [[def-group-risk-score-and-calibration]]: groupwise calibration is the identity between positive mass in a bin and its score times the bin's assigned mass; scores lie in $[0,1]$.

[F2] [[def-positive-and-negative-score-balance]]: $\alpha_t$ and $\beta_t$ are the class-conditioned mean scores, and equality across groups separately defines the two balance criteria.

[F3] [[lem-score-means-as-threshold-rate-areas]]: the mean scores $\alpha_t$ and $\beta_t$ are the integrals of $\operatorname{TPR}_t$ and $\operatorname{FPR}_t$ over thresholds.

## Verification

1.1 In both groups the weighted score mean is $\mathbb E_t[S]=1/2$. For group 1, $\mathbb E_1[S^2]=\tfrac12((1/5)^2+(4/5)^2)=17/50$. For group 2, $\mathbb E_2[S^2]=\tfrac9{32}(1/10)^2+\tfrac{14}{32}(1/2)^2+\tfrac9{32}(9/10)^2=17/50$. Each bin contains one feature type and its score equals that type's $p_\sigma$, so its positive mass is its score times its assigned mass; hence calibration holds. The common positive mass/base rate is $1/2$. [given, F1, algebra]

2.1 By calibration, $\mathbb E_t[S\mathbf1_{\{Y=1\}}]=\mathbb E_t[S^2]=17/50$ and $\mathbb E_t[S\mathbf1_{\{Y=0\}}]=\mathbb E_t[S]-\mathbb E_t[S^2]=8/50$. Dividing by the positive and negative masses $1/2$ gives $\alpha_t=17/25$ and $\beta_t=8/25$ for both groups, so both balances hold. By [F3], the two groups' TPR areas agree and their FPR areas agree. [given, step 1.1, F2, F3, algebra]

3.1 At $u=1/2$, group 1 has positive mass $(1/2)(4/5)=2/5$ and negative mass $(1/2)(1/5)=1/10$ at scores at least $1/2$, so its rates are $(2/5)/(1/2)=4/5$ and $(1/10)/(1/2)=1/5$. Group 2 has positive mass $(14/32)(1/2)+(9/32)(9/10)=151/320$ and negative mass $(14/32)(1/2)+(9/32)(1/10)=79/320$ at scores at least $1/2$, so its rates are $151/160$ and $79/160$. [given, F1, step 2.1, algebra]

4.1 At $u=9/10$, group 1 has no score at least $9/10$, so both rates are zero. Group 2's only qualifying score is $9/10$, contributing positive mass $(9/32)(9/10)=81/320$ and negative mass $(9/32)(1/10)=9/320$; dividing each by $1/2$ gives rates $81/160$ and $9/160$. These computations show threshold dependence despite the mean balances. [given, F1, step 3.1, algebra] ∎
