---
id: thm-stratified-total-unbiasedness-and-variance
kind: theorem
title: Unbiasedness and variance of the stratified total estimator
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-stratified-sampling-design-and-estimator
  - def-finite-population-and-sampling-design
  - thm-horvitz-thompson-total-is-design-unbiased
  - thm-srswor-mean-variance-and-finite-population-correction
  - def-moments-variance-and-covariance
  - thm-variance-of-a-finite-sum
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shalabh, Sampling Theory, MTH 417 lecture notes, Chapter 4: Stratified Sampling, PDF pp. 3–6, Indian Institute of Technology Kanpur"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf"
    - title: "Robin Arnold, STAT392 Sample Surveys, Chapter 8: Stratified Sampling, §§8.1–8.3"
      url: "https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling"
    - title: "Tommy Wright, A Simple Method of Exact Optimal Sample Allocation under Stratification with Any Mixed Constraint Patterns, U.S. Census Bureau, §2.1"
      url: "https://www.census.gov/content/dam/Census/library/working-papers/2014/adrm/rrs2014-07.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $(U,y)$ be a finite population with a partition and stratified SRSWOR
design as in [[def-stratified-sampling-design-and-estimator]]. Under the
design probability $P_d$, the stratified total estimator satisfies
$$E_d[\widehat T_{st}]=\sum_{i\in U}y_i.$$
Its design variance is
$$\operatorname{Var}_d(\widehat T_{st})=\sum_{h:n_h<N_h}N_h^2\left(1-\frac{n_h}{N_h}\right)\frac{S_h^2}{n_h}.$$
Thus certainty strata contribute zero and require no within-stratum variance
term.

## Facts & Assumptions

**Given:** A fixed finite population $(U,y)$, a finite partition
$U=\bigsqcup_{h=1}^H U_h$, and independent within-stratum SRSWOR samples with
$1\le n_h\le N_h$.

[F1] [[def-stratified-sampling-design-and-estimator]]: The joint design mass
on stratum samples is the product of the uniform SRSWOR masses;
$\widehat T_{st}=\sum_hN_h\bar y_{h,R}$; and $S_h^2$ is defined for
noncertainty strata.

[F2] [[def-finite-population-and-sampling-design]]: Population values are
fixed, the design is a finite probability mass function, the observed record
contains selected labels and their values, and $\pi_i=P_d(i\in S)$ is the
first-order inclusion probability.

[F3] [[thm-horvitz-thompson-total-is-design-unbiased]]: If every
$\pi_i>0$, then $\sum_{i\in U} I_i y_i/\pi_i$ is design-unbiased for
$\sum_{i\in U}y_i$.

[F4] [[thm-srswor-mean-variance-and-finite-population-correction]]: For
SRSWOR of $n$ from a fixed population of size $N>1$,
$\operatorname{Var}_d(\bar y_S)=(1-n/N)S_U^2/n$; this includes $n=1$ and
the census $n=N$.

[F5] [[def-moments-variance-and-covariance]]: Variance is the expectation
of the squared centered variable and covariance is the expectation of the
product of centered variables.

[F6] [[thm-variance-of-a-finite-sum]]: For a finite family of
square-integrable variables on one probability space, the variance of their
sum is the sum of all pairwise covariances, including diagonal terms.

## Proof

1.1 For $i\in U_h$, counting the $n_h$-subsets containing $i$ gives $\pi_i=\binom{N_h-1}{n_h-1}/\binom{N_h}{n_h}=n_h/N_h>0$. On observed record $O_y(R)=(R,y|_R)$, the recorded values are $y_i$ by [F2], so the Horvitz–Thompson total is $\sum_h(N_h/n_h)\sum_{i\in R_h}y_i=\widehat T_{st}$; [F3] gives $E_d[\widehat T_{st}]=\sum_{i\in U}y_i$. [F1, F2, F3, algebra]

1.2 Put $Z_h=N_h\bar y_{h,R}$. Each $Z_h$ has finite support and is square-integrable. If $n_h<N_h$, then $N_h>1$ and [F4] gives $\operatorname{Var}_d(\bar y_{h,R})=(1-n_h/N_h)S_h^2/n_h$; variance scaling from [F5] gives $\operatorname{Var}_d(Z_h)=N_h^2(1-n_h/N_h)S_h^2/n_h$. If $n_h=N_h$, $Z_h=\sum_{i\in U_h}y_i$ is constant with variance zero. [F1, F4, F5, algebra]

1.3 For distinct strata $h,k$, write $q_g(r_g)=\binom{N_g}{n_g}^{-1}$. The product law in [F1] gives $E_d[Z_hZ_k]=(\sum_{r_h}q_h(r_h)Z_h(r_h))(\sum_{r_k}q_k(r_k)Z_k(r_k))\prod_{g\notin\{h,k\}}\sum_{r_g}q_g(r_g)=E_d[Z_h]E_d[Z_k]$, since each remaining mass sum is one. Thus [F5] gives $\operatorname{Cov}_d(Z_h,Z_k)=0$. [F1, F5, algebra]

2.1 Since $\widehat T_{st}=\sum_hZ_h$, [F6] and steps 1.2–1.3 give $\operatorname{Var}_d(\widehat T_{st})=\sum_h\operatorname{Var}_d(Z_h)$. Substituting step 1.2's noncertainty and certainty cases yields the stated variance, and step 1.1 gives unbiasedness. [F6, step 1.1, step 1.2, step 1.3, algebra] ∎