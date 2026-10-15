---
id: ex-paired-randomization-contrast-with-heterogeneous-effects
kind: example
title: A paired contrast with unequal unit-level effects
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-randomized-complete-block-design
  - def-expectation-on-a-finite-probability-space
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §13.4.4"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
---

## Example

Suppose $Y_1(0)=Y_2(0)=0$, $Y_1(1)=4$, and $Y_2(1)=2$. The unit effects
are $\delta_1=4$ and $\delta_2=2$. Under the two equally likely assignments,
the treated-minus-control contrasts are $4$ and $2$. Their mean is the pair
average effect $3$ and their design variance is $1$. The centered
paired-contrast values are $+1$ and $-1$ with equal weights, so their
variance is $1$.

## Verification


**Given:** A two-unit, two-treatment pair with no interference, $Y_1(0)=Y_2(0)=0$, $Y_1(1)=4$, and $Y_2(1)=2$.

[F1] In the $t=2,b=1$ RCBD, the two treatment permutations are equally likely ([[def-randomized-complete-block-design]]).

[F2] On a finite probability space, expectation is the weighted sum of the values ([[def-expectation-on-a-finite-probability-space]]).

[F3] Variance is the expectation of the squared centered value ([[def-moments-variance-and-covariance]]).

1.1 If unit $1$ receives treatment, the contrast is $Y_1(1)-Y_2(0)=4$; if unit $2$ receives treatment, it is $Y_2(1)-Y_1(0)=2$. They are equally likely by [F1]. [given, F1]

2.1 By [F2] the contrast mean is $(4+2)/2=3$, the pair average effect. By [F3] its variance is $\{(4-3)^2+(2-3)^2\}/2=1$. Thus the example has unequal unit effects and directly computes the observed contrast moments. [F1, F2, F3, step 1.1, algebra] ∎