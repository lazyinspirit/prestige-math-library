---
id: cex-observed-paired-contrast-variance-is-not-effect-heterogeneity
kind: counterexample
title: Observed paired-contrast variance is not determined by effect heterogeneity
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - thm-paired-randomization-contrast-moments
  - lem-randomly-selected-unit-effect-moments
justified_by: []
strategy: "Use unequal baseline outcomes with treatment effects 1 and 0. The two observed contrasts are -9 and 10, whose randomization variance is 90.25 although one quarter of the squared effect difference is 0.25."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Define $\delta_i=Y_i(1)-Y_i(0)$, and let $D$ be the observed
treated-minus-control contrast. The claimed formula is that in every
two-unit paired randomization,
$$\operatorname{Var}_d(D)=\frac{(\delta_1-\delta_2)^2}{4}.$$

## Facts & Assumptions


**Given:** Two units with no-interference binary potential outcomes
$Y_1(0)=0$, $Y_1(1)=1$, $Y_2(0)=10$, and $Y_2(1)=10$, and a uniform assignment
of exactly one unit to treatment $1$.

[F1] The observed paired contrast has the design expectation and variance proved in the local corrected theorem ([[thm-paired-randomization-contrast-moments]]).

[F2] The effect of the unit selected for treatment $1$ has variance $(\delta_1-\delta_2)^2/4$ ([[lem-randomly-selected-unit-effect-moments]]).

## Counterexample

1.1 The fixed effects are $\delta_1=1$ and $\delta_2=0$. If unit $1$ is treated, the observed contrast is $D_1=Y_1(1)-Y_2(0)=-9$; if unit $2$ is treated, it is $D_2=Y_2(1)-Y_1(0)=10$. The two assignments each have weight $1/2$. [given, F1, algebra]

2.1 The observed contrast has mean $(-9+10)/2=1/2$ and variance $\{(-9-1/2)^2+(10-1/2)^2\}/2=90.25$, also given by [F1]. But the proposed expression is $(\delta_1-\delta_2)^2/4=1/4$. Hence it is not the variance of the observed paired contrast. [F1, step 1.1, algebra]

3.1 The variance $1/4$ is instead the variance of the randomly selected unit effect $S\in\{1,0\}$ from [F2]. This distinguishes that latent schedule quantity from the observed contrast, and completes the counterexample. [F2, step 2.1, algebra] ∎