---
id: ex-syg-sign-condition-and-negative-estimate
kind: example
title: Positive pair covariances and a negative SYG estimate
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-finite-population-and-sampling-design
  - def-inclusion-covariance-difference
  - thm-sen-yates-grundy-variance-identity
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

Let $U=\{1,2,3,4\}$ and use the fixed-size design
$$p_d(\{1,2\})=p_d(\{3,4\})=\frac25,\qquad p_d(\{1,3\})=p_d(\{1,4\})=p_d(\{2,3\})=p_d(\{2,4\})=\frac1{20}.$$
All units have $\pi_i=1/2$. The pair differences are
$\Delta_{12}=\Delta_{34}=3/20>0$ and $\Delta_{ij}=-1/5$ for the four
cross pairs. Thus a positive pair difference does not force a negative
Sen–Yates–Grundy (SYG) estimate for every fixed population: for
$y=(0,0,1,1)$ all six sample estimates are nonnegative. But for
$y=(0,1,0,0)$ the supported sample $\{1,2\}$ produces the negative estimate
$-3/2$, even though the true design variance is $1$. In both schedules the
SYG estimates average to the corresponding true variance.

## Facts & Assumptions

**Given:** The six two-unit samples and their probabilities are as stated,
with fixed population values chosen separately for each schedule.

[F1] [[def-finite-population-and-sampling-design]]: A sampling design is a
finite support of subsets with positive weights summing to one; $\pi_i$ and
$\pi_{ij}$ are the first- and second-order inclusion probabilities.

[F2] [[def-inclusion-covariance-difference]]: $\Delta_{ij}=\pi_{ij}-\pi_i\pi_j$.

[F3] [[thm-sen-yates-grundy-variance-identity]]: For fixed sample size and
positive first-order inclusion probabilities, the SYG sample estimate is
unbiased when all $\pi_{ij}>0$; pairwise nonpositive distinct-unit
$\Delta_{ij}$ is a sufficient guarantee of nonnegative sample estimates.

## Verification

1.1 The six weights sum to $2(2/5)+4(1/20)=1$ and every sample has size two; each unit's incident weights sum to $1/2$, so $\pi_i=1/2$. Pair probabilities are $\pi_{12}=\pi_{34}=2/5$ and $1/20$ for cross pairs; by [F2], $\Delta_{12}=\Delta_{34}=2/5-1/4=3/20$ and $\Delta_{ij}=1/20-1/4=-1/5$ for cross pairs. All $\pi_{ij}$ are positive. [given, F1, F2, algebra]

2.1 For $y^A=(0,0,1,1)$, $x=(0,0,2,2)$. Samples $\{1,2\}$ and $\{3,4\}$ give SYG estimate zero; each cross sample gives $-\Delta_{ij}(x_i-x_j)^2/\pi_{ij}=16$. The six estimates are $0,0,16,16,16,16$ and have expectation $4(1/20)(16)=16/5$. HT totals are $0,4,2$ with probabilities $2/5,2/5,1/5$, so their mean is $2$ and variance is $(2/5)4+(2/5)4=16/5$. [F1, F3, step 1.1, algebra]

3.1 For $y^B=(0,1,0,0)$, $x=(0,2,0,0)$. The HT total is $2$ or $0$ with probability $1/2$ each, so its variance is $1$. Sample $\{1,2\}$ has probability $2/5$ and SYG estimate $-\Delta_{12}(x_1-x_2)^2/\pi_{12}=-(3/20)(4)/(2/5)=-3/2$; samples $\{2,3\}$ and $\{2,4\}$ have estimate $16$ and the other three have zero. The expectation is $(2/5)(-3/2)+2(1/20)(16)=1$, equal to the variance despite the negative sample value; thus the nonpositive-Delta condition is sufficient but not necessary for all supported estimates to be nonnegative for a particular fixed population, as schedule $y^A$ in step 2.1 shows. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎