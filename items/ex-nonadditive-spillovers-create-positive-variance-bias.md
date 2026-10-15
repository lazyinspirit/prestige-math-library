---
id: ex-nonadditive-spillovers-create-positive-variance-bias
kind: example
title: "Nonadditive direct effects create positive variance-estimator bias"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - thm-stratified-interference-variance-estimators-conservative
  - def-stratified-interference-design-based-variance-estimators
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, Theorem 6 and Corollary"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Example

Take four groups of four units, select exactly two groups for $\psi$, and use $K_i^\phi=K_i^\psi=2$ in every group. Let $a_1=1$ and $a_2=a_3=a_4=0$, and define the full potential-outcome schedule by
$$Y_{ij}(\mathbf z_i)=a_jz_{ij}.$$
The design has two groups per strategy and two units per treatment arm within each group, so every sample variance in the direct-effect variance estimator is defined.

## Verification

**Given:** The design-based direct-effect variance estimator and theorem in [[def-stratified-interference-design-based-variance-estimators]] and [[thm-stratified-interference-variance-estimators-conservative]].

[F1] [[def-stratified-interference-design-based-variance-estimators]]: the direct-effect point estimator is the mean of the group control-minus-treatment sample means; its source variance estimator combines a sample variance across selected groups with the two within-group arm sample variances.

[F2] [[thm-stratified-interference-variance-estimators-conservative]]: the expected source variance estimator exceeds the design variance by $N^{-2}\sum_iS_{iD}^2/n_i$.

1.1 For any fixed group assignment, $Y_{ij}(\mathbf z_i)$ depends only on $z_{ij}$. Hence changing peer assignments while holding the unit's treatment and the treated count fixed leaves its outcome unchanged, so stratified interference holds. The unit direct effects are $d_{ij}=Y_{ij}(0)-Y_{ij}(1)=-a_j=(-1,0,0,0)$, which are not constant. [given, F1, construct, algebra]

1.2 The finite-population mean direct effect in each group is $-1/4$, and its finite-population variance is $S_{iD}^2=(3/4)/3=1/4$. Within a group, the estimated direct effect is $-1/2$ if unit 1 is treated and $0$ otherwise, each with probability $1/2$. Its variance is therefore $1/16$. The within-group variance component $\hat v_i=s_{i0}^2/2+s_{i1}^2/2$ is $1/4$ when unit 1 is treated and $0$ otherwise, so $\mathbb E[\hat v_i]=1/8$. [given, F1, algebra]

1.3 Two groups are selected for $\psi$, and their within-group assignments are independent. The population direct-effect estimator is their mean. Its values are $-1/2,-1/4,0$ with probabilities $1/4,1/2,1/4$, respectively, so its mean is $-1/4$ and its design variance is $1/32$. For two selected groups, the between-group sample variance of their direct-effect estimates is $1/8$ when their outcomes differ and $0$ otherwise; the outcomes differ with probability $1/2$, giving expected sample variance $1/16$. [given, F1, algebra]

2.1 The expected between-group term in the source variance estimator is $(1-C/N)s_{D,\psi}^2/C=(1/4)s_{D,\psi}^2$, hence its expectation is $1/64$. The expected within-group term is $(CN)^{-1}$ times the sum over the two selected groups' $\hat v_i$ values, giving $(1/8)(2\cdot1/8)=1/32$. Therefore the complete variance estimator has expectation $1/64+1/32=3/64$. [given, F1, step 1.2, step 1.3, algebra]

3.1 The positive bias is $3/64-1/32=1/64$. It also equals the theorem's correction $N^{-2}\sum_iS_{iD}^2/n_i=16^{-1}\cdot4\cdot(1/4)/4=1/64$. Thus the nonadditive individual effects give a strict conservative bias despite stratified interference and all required sample sizes. [F2, step 1.1, step 2.1, algebra] ∎