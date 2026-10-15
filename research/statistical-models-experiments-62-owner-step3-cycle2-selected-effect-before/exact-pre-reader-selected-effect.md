---
id: lem-randomly-selected-unit-effect-moments
kind: lemma
title: Moments of the effect for the randomly selected treated unit
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-randomized-complete-block-design
  - def-finite-randomized-treatment-assignment-model
  - def-finite-population-average-treatment-effect-and-weak-null
  - def-expectation-on-a-finite-probability-space
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

In the two-unit, two-treatment paired randomization, let
$\delta_\ell=Y_\ell(1)-Y_\ell(0)$ and
$\tau=(\delta_1+\delta_2)/2$. Define $S$ to be the fixed treatment effect
$\delta_\ell$ of whichever unit $\ell$ is assigned treatment $1$. Then
$$\mathbb E_d[S]=\tau,\qquad \operatorname{Var}_d(S)=\frac{(\delta_1-\delta_2)^2}{4}.$$
The random variable $S$ uses both potential outcomes of the selected unit;
it is not the observed treated-minus-control contrast and is not a statistic
of the observed outcomes.

## Facts & Assumptions


**Given:** Two fixed binary-treatment potential-outcome schedules, no interference, and uniform randomization of exactly one unit to treatment $1$.

[F1] The finite assignment model holds the potential-outcome schedule fixed and supplies only the declared assignment randomness ([[def-finite-randomized-treatment-assignment-model]]).

[F2] The pair target is the average of the two unit-level effects ([[def-finite-population-average-treatment-effect-and-weak-null]]).

[F3] The two assignments in a two-treatment, one-block RCBD are equally likely ([[def-randomized-complete-block-design]]).

[F4] Finite-space expectation is the weighted sum of the two values ([[def-expectation-on-a-finite-probability-space]]).

[F5] Variance is the expectation of the squared centered value ([[def-moments-variance-and-covariance]]).

[F6] The observed response vector is $Y_\theta(Z)$; potential responses under unassigned vectors are fixed but latent ([[def-finite-randomized-treatment-assignment-model]]).

## Proof

1.1 Let $S=\delta_1$ when unit $1$ receives treatment $1$ and $S=\delta_2$ when unit $2$ receives it. These outcomes have weights $1/2$ by [F3]. Under assignment $(1,0)$, fix $Y_1(1)$ and $Y_2(0)$ but change $Y_1(0)$; the observed data stay the same while $S=Y_1(1)-Y_1(0)$ changes. Thus $S$ is not a function of the observed data over the model [F1,F6]. [F1, F3, F6, given, construct]

2.1 By [F4], $\mathbb E_d[S]=(\delta_1+\delta_2)/2=\tau$, agreeing with the pair's finite-population average effect [F2]. [F2, F3, F4, step 1.1, algebra]

3.1 By [F5], $\operatorname{Var}_d(S)=\tfrac12(\delta_1-\tau)^2+\tfrac12(\delta_2-\tau)^2=(\delta_1-\delta_2)^2/4$. [F3, F5, step 1.1, step 2.1, algebra] ∎