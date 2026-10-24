---
id: cex-misspecified-own-treatment-exposure-map
kind: counterexample
title: "An own-treatment-only exposure map can be misspecified"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-exposure-mapping-under-interference
  - thm-ht-exposure-specific-mean-unbiased
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
    - title: "Peter M. Aronow and Cyrus Samii, Estimating Average Causal Effects Under General Interference, Condition 1 and §4"
      url: "https://arxiv.org/pdf/1305.6156v4"
---

## Statement refuted

With interference, positive probability for each own-treatment value alone suffices to justify an exposure-specific Horvitz–Thompson mean even when outcomes can also depend on peers' assignments.

## Facts & Assumptions

**Given:** Two units in one group, the four binary assignments equally likely, exposure mappings $D_1=Z_1$ and $D_2=Z_2$, and fixed outcomes $Y_1(z_1,z_2)=z_2$ and $Y_2(z_1,z_2)=0$.

[F1] [[def-exposure-mapping-under-interference]]: an exposure mapping is sufficient only if assignments with the same mapped label give the same unit potential outcome.

[F2] [[thm-ht-exposure-specific-mean-unbiased]]: under exposure sufficiency and positive exposure probabilities, the finite-population exposure mean is estimated by inverse-probability weighting of the observed exposure indicators.

## Counterexample

1.1 Unit 1 has $D_1=0$ under both assignments $(0,0)$ and $(0,1)$, but its outcomes there are respectively $0$ and $1$. Thus [F1] fails although $\pi_1(0)=\pi_2(0)=1/2>0$. [given, F1, algebra]

2.1 If one nevertheless sets the attempted exposure-zero values to $Y_1^*(0)=Y_1(0,0)=0$ and $Y_2^*(0)=0$, their mean is $0$. The attempted Horvitz–Thompson estimator is $\frac12\{1(Z_1=0)Y_1/(1/2)+1(Z_2=0)Y_2/(1/2)\}=1(Z_1=0)Z_2$. It equals $1$ only at assignment $(0,1)$ and zero at the other three assignments, so its expectation is $1/4\ne0$. Hence positivity does not repair the misspecified exposure map, and [F2] cannot be applied without its sufficiency premise. [given, F1, F2, step 1.1, algebra] ∎