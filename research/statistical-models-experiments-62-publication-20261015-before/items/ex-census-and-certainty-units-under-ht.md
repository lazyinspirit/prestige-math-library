---
id: ex-census-and-certainty-units-under-ht
kind: example
title: "A certainty unit and a census under Horvitz–Thompson estimation"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-population-and-sampling-design
  - thm-horvitz-thompson-total-is-design-unbiased
  - def-unbiased-estimator-and-umvu
  - def-expectation-on-a-finite-probability-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $U=\{1,2,3\}$ with fixed values $(a,b,c)$. First use the design that
chooses $\{1,2\}$ or $\{1,3\}$ with probability $1/2$ each. Unit $1$ is a
**certainty unit**: $\pi_1=1$, while $\pi_2=\pi_3=1/2$. The Horvitz–Thompson
total is $a+2b$ or $a+2c$, according to the sample. In the census design,
which always selects $U$, every $\pi_i=1$ and the Horvitz–Thompson total and
mean equal the population total and mean exactly.

## Facts & Assumptions

**Given:** A finite population $U=\{1,2,3\}$ with fixed real values
$y_1=a$, $y_2=b$, $y_3=c$; either the two-sample design described above or
the census design.

[F1] [[def-finite-population-and-sampling-design]]: Inclusion probabilities
are design probabilities, and the total and mean hold the values fixed.

[F2] [[thm-horvitz-thompson-total-is-design-unbiased]]: With all first-order
inclusion probabilities positive, the inverse-inclusion weighted total and
its population-size-scaled mean are unbiased.

[F3] [[def-expectation-on-a-finite-probability-space]]: Expectations are
finite weighted sums over the design support.

[F4] [[def-unbiased-estimator-and-umvu]]: An estimator is unbiased when its
expectation equals its estimand at every parameter value.

## Verification

1.1 Under the two-sample design, unit $1$ is in both support samples, unit $2$ only in the first, and unit $3$ only in the second. Therefore $\pi_1=1$ and $\pi_2=\pi_3=1/2$. The weighted total is $a+2b$ for sample $\{1,2\}$ and $a+2c$ for sample $\{1,3\}$, so unit $1$ contributes its observed value $a$ without expansion. [given, F1, algebra]

2.1 The design expectation of the displayed total is $\frac12(a+2b)+\frac12(a+2c)=a+b+c=T(y)$ by [F3]. Since each $\pi_i>0$, [F2] also identifies its divided-by-$3$ form as the unbiased estimator of $\bar y_U$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 In the census design, the only supported sample is $U$ with probability $1$, so every $\pi_i=1$. Thus the total estimator is $\sum_{i\in U}y_i=T(y)$ on the sole outcome, and its mean version is $T(y)/3=\bar y_U$. [given, F1, algebra] ∎