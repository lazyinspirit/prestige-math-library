---
id: ex-zero-pair-support-prevents-universal-unbiased-variance-estimation
kind: example
title: Zero pair support can prevent universal unbiased variance estimation
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-population-and-sampling-design
  - def-simple-random-sampling-without-replacement
  - thm-horvitz-thompson-variance-and-pair-inclusion-estimator
  - def-statistic-and-estimator
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example

---

## Example

Let $U=\{1,2\}$ have fixed values $y_1=a,y_2=b$, and sample one unit by
SRSWOR. Then $\pi_1=\pi_2=1/2$ but $\pi_{12}=0$. The HT total is $2a$ or
$2b$, each with probability $1/2$, so its variance is $(a-b)^2$. The
all-pairs inverse-inclusion formula cannot use the unsupported pair
$(1,2)$. If one keeps only supported pairs, its expectation is $a^2+b^2$,
which is not the variance for all $a,b$. In fact, no function of the
observed singleton label and value is unbiased for this variance for every
finite population.

## Facts & Assumptions

**Given:** $U=\{1,2\}$, fixed real values $(a,b)$, and a uniformly sampled
singleton.

[F1] [[def-finite-population-and-sampling-design]]: The observed record
contains the selected unit labels and their observed values.

[F2] [[def-simple-random-sampling-without-replacement]]: Each singleton has
probability $1/\binom21=1/2$.

[F3] [[thm-horvitz-thompson-variance-and-pair-inclusion-estimator]]: The HT
total uses weights $1/\pi_i$; its variance has a pair term
$\Delta_{ij}y_i y_j/(\pi_i\pi_j)$, and the all-pairs inverse estimate is
established under positive $\pi_{ij}$ for every ordered pair.

[F4] [[def-statistic-and-estimator]]: An estimator is a statistic, hence a
function of the observed data record, with the target as its specified
estimand.

## Verification

1.1 The two possible samples are $\{1\}$ and $\{2\}$, each with probability $1/2$ by [F2]. Thus $\pi_1=\pi_2=1/2$ and $\pi_{12}=0$; the HT total is $2a$ or $2b$, with mean $a+b$ and variance $\frac12(2a-a-b)^2+\frac12(2b-a-b)^2=(a-b)^2$. [given, F2, F3, algebra]

2.1 The coefficient $\Delta_{12}/\pi_{12}$ is undefined. Restricting the sample-pair expression to supported ordered pairs leaves only diagonal terms: on $\{1\}$ the value is $\frac{\Delta_{11}}{\pi_{11}}(a/\pi_1)^2=(1/4)/(1/2)(2a)^2=2a^2$, and on $\{2\}$ it is $2b^2$. Its expectation is $a^2+b^2$, which at $a=b=1$ is $2$ while the variance in step 1.1 is $0$; omitting the unsupported cross pair is not universally unbiased. [given, F1, F2, F3, step 1.1, algebra]

3.1 Any estimator $G$ of the observed record has values $g_1(a)$ on $\{1\}$ and $g_2(b)$ on $\{2\}$ by [F1] and [F4], so universal unbiasedness would require $(g_1(a)+g_2(b))/2=(a-b)^2$ for every $a,b$. At $(0,0),(0,1),(1,0),(1,1)$ this gives respectively $g_1(0)+g_2(0)=0$, $g_1(0)+g_2(1)=2$, $g_1(1)+g_2(0)=2$, and $g_1(1)+g_2(1)=0$; the first and fourth left sides sum to the same value as the second and third, but the right sides are $0$ and $4$, a contradiction. [given, F1, F2, F4, step 1.1, algebra, contradiction] ∎