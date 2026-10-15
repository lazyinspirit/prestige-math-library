---
id: ex-srswor-ht-variance-and-yates-grundy
kind: example
title: A three-unit SRSWOR variance calculation
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-simple-random-sampling-without-replacement
  - thm-horvitz-thompson-variance-and-pair-inclusion-estimator
  - thm-sen-yates-grundy-variance-identity
  - thm-srswor-mean-variance-and-finite-population-correction
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

Let $U=\{1,2,3\}$ with fixed values $y=(1,2,4)$, and select an SRSWOR
sample of size $n=2$. The three samples each have probability $1/3$. Their
Horvitz–Thompson totals are $9/2$, $15/2$, and $9$, respectively, so the
true design variance of the total is $7/2$. The pair-inclusion and
Sen–Yates–Grundy sample estimates are $3/4$, $27/4$, and $3$; their mean is
also $7/2$. The sample means are $3/2$, $5/2$, and $3$, with variance
$7/18$. The finite support of three values is not an exact normal law.

| Sample | $p_d(s)$ | $\widehat T_{HT}$ | $\widehat V_{HT}$ | $\widehat V_{SYG}$ | $\bar y_s$ |
|---|---:|---:|---:|---:|---:|
| $\{1,2\}$ | $1/3$ | $9/2$ | $3/4$ | $3/4$ | $3/2$ |
| $\{1,3\}$ | $1/3$ | $15/2$ | $27/4$ | $27/4$ | $5/2$ |
| $\{2,3\}$ | $1/3$ | $9$ | $3$ | $3$ | $3$ |

## Facts & Assumptions

**Given:** $U=\{1,2,3\}$, $y_1=1,y_2=2,y_3=4$, and SRSWOR of size two.

[F1] [[def-simple-random-sampling-without-replacement]]: The support consists
of all two-element subsets, each with probability $1/\binom32=1/3$.

[F2] [[thm-horvitz-thompson-variance-and-pair-inclusion-estimator]]: If
$\pi_i>0$, the total variance is
$\sum_{i,j}\Delta_{ij}y_i y_j/(\pi_i\pi_j)$; if all $\pi_{ij}>0$, the
pair-inclusion estimate has expectation equal to that variance.

[F3] [[thm-sen-yates-grundy-variance-identity]]: For a fixed-size design,
$\operatorname{Var}_d(\widehat T_{HT})=-\frac12\sum_{i,j}\Delta_{ij}
(y_i/\pi_i-y_j/\pi_j)^2$, and the sample pair-inclusion version is unbiased
when every $\pi_{ij}>0$.

[F4] [[thm-srswor-mean-variance-and-finite-population-correction]]: For
$N>1$ and $1\le n\le N$,
$\operatorname{Var}_d(\bar y_S)=(1-n/N)S_U^2/n$.

## Verification

1.1 By [F1], the support is $\{\{1,2\},\{1,3\},\{2,3\}\}$ with equal probabilities. Counting occurrences gives $\pi_i=2/3$, $\pi_{ij}=1/3$ for $i\ne j$, $\Delta_{ii}=2/9$, and $\Delta_{ij}=-1/9$ for $i\ne j$; the population mean is $7/3$ and $S_U^2=((1-7/3)^2+(2-7/3)^2+(4-7/3)^2)/2=7/3$. [given, F1, choose, algebra]

2.1 Each observed total is $(3/2)$ times the sum of the two observed values, so the HT totals are $9/2,15/2,9$ and have mean $7$; their design variance is $\frac13((9/2-7)^2+(15/2-7)^2+(9-7)^2)=7/2$. [given, F1, F2, step 1.1, algebra]

2.2 Put $x_i=y_i/\pi_i$, so $(x_1,x_2,x_3)=(3/2,3,6)$. For any sampled pair $\{i,j\}$, the HT pair estimate and the SYG estimate both equal $\frac13(x_i-x_j)^2$, since $\Delta_{ii}/\pi_i=1/3$ and $\Delta_{ij}/\pi_{ij}=-1/3$; thus they are $3/4,27/4,3$ and their expectation is $\frac13(3/4+27/4+3)=7/2$ by [F2] and [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 The sample means are $3/2,5/2,3$, with average $7/3$ and design variance $\frac13((3/2-7/3)^2+(5/2-7/3)^2+(3-7/3)^2)=7/18$; [F4] gives $(1-2/3)(7/3)/2=7/18$, and the three supported means form a finite set rather than an exact normal calibration. [F1, F4, step 1.1, algebra] ∎