---
id: ex-ht-exposure-specific-mean-two-unit-design
kind: example
title: "Horvitz–Thompson exposure mean in a two-unit design"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - thm-ht-exposure-specific-mean-unbiased
  - def-exposure-mapping-under-interference
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter M. Aronow and Cyrus Samii, Estimating Average Causal Effects Under General Interference, §4 and Lemma 4.1"
      url: "https://arxiv.org/pdf/1305.6156v4"
---

## Example

The two units form one group, which is assigned one of the four binary vectors $(0,0),(0,1),(1,0),(1,1)$, each with probability $1/4$. For both units, take the exposure map $D_i=(Z_1,Z_2)$. Under exposure $d=(0,1)$, let $Y_1(d)=4$ and $Y_2(d)=10$; set both units' potential outcomes to zero at the other three exposure labels. The map is sufficient because the exposure is the full within-group assignment vector.

## Verification

**Given:** The finite assignment law and exposure model above.

[F1] [[def-exposure-mapping-under-interference]]: exposure consistency gives a fixed $Y_i(d)$ on the assignments mapped to $d$, and $\pi_i(d)$ is the sum of the design weights of those assignments.

[F2] [[thm-ht-exposure-specific-mean-unbiased]]: the exposure-specific target is the finite average of the fixed $Y_i(d)$ values and the estimator divides each observed exposed outcome by its positive exposure probability.

1.1 Only assignment $(0,1)$ maps either unit to $d$, so $\pi_1(d)=\pi_2(d)=1/4$. The target is $\mu(d)=(4+10)/2=7$. [given, F1, F2, algebra]

2.1 Under assignment $(0,1)$ the estimator equals $\frac12(4/(1/4)+10/(1/4))=28$. Under each of the other three assignments it is zero. Its design expectation is therefore $(28+0+0+0)/4=7=\mu(d)$, verifying the unbiasedness identity directly. [step 1.1, F2, algebra] ∎