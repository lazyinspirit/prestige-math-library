---
id: thm-srswor-mean-variance-and-finite-population-correction
kind: theorem
title: SRSWOR inclusion covariance and sample-mean variance
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-population-and-sampling-design
  - def-simple-random-sampling-without-replacement
  - def-inclusion-covariance-difference
  - thm-horvitz-thompson-variance-and-pair-inclusion-estimator
  - def-moments-variance-and-covariance
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 2: Simple Random Sampling, PDF pp. 1–15"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter2-sampling-simple-random-sampling.pdf"

---

## Statement

Let $(U,y)$ be a finite population of size $N>1$, and draw an SRSWOR sample
$S$ of size $n$, where $1\le n\le N$. Write $I_i=1$ if $i\in S$ and $I_i=0$
otherwise. Define
$$\bar y_U:=\frac1N\sum_{i\in U}y_i,\qquad \bar y_S:=\frac1n\sum_{i\in S}y_i,\qquad S_U^2:=\frac1{N-1}\sum_{i\in U}(y_i-\bar y_U)^2.$$
For distinct $i,j\in U$,
$$\operatorname{Cov}_d(I_i,I_j)=-\frac{n(N-n)}{N^2(N-1)},$$
and
$$\operatorname{Var}_d(\bar y_S)=\left(1-\frac nN\right)\frac{S_U^2}{n}.$$
Both formulas include $n=1$ and the census case $n=N$.

## Facts & Assumptions

**Given:** A finite population with fixed real values, $N>1$, and a uniform
design on the $n$-element subsets of $U$ for an integer $1\le n\le N$.

[F1] [[def-finite-population-and-sampling-design]]: The population values are
fixed; the design defines $I_i$, $\pi_i$, $\pi_{ij}$, design expectation,
the total $T(y)=\sum_i y_i$, and the population mean $\bar y_U=T(y)/N$.

[F2] [[def-simple-random-sampling-without-replacement]]: Every $n$-element
subset is in the design support and has probability $\binom{N}{n}^{-1}$.

[F3] [[def-inclusion-covariance-difference]]: $\Delta_{ij}=\pi_{ij}-\pi_i\pi_j$.

[F4] [[thm-horvitz-thompson-variance-and-pair-inclusion-estimator]]: When
$\pi_i>0$, the design variance of $\sum_i I_i y_i/\pi_i$ is
$\sum_{i,j}\Delta_{ij}y_i y_j/(\pi_i\pi_j)$.

[F5] [[def-moments-variance-and-covariance]]: Covariance is the expectation
of the product of centered variables; variance is covariance with itself.

## Proof

1.1 There are $\binom{N}{n}$ supported samples; a fixed unit occurs in $\binom{N-1}{n-1}$ of them, so $\pi_i=n/N$. If $n=1$, no sample contains distinct $i,j$; if $2\le n\le N$, $\binom{N-2}{n-2}$ samples contain them, hence in either case $\pi_{ij}=n(n-1)/(N(N-1))$ for $i\ne j$. [given, F2, choose, algebra]

2.1 By [F1], $E_d[I_i]=\pi_i$ and $E_d[I_iI_j]=\sum_{s:i,j\in s}p_d(s)=\pi_{ij}$, while $\pi_{ii}=\pi_i$; expanding [F5] gives $\operatorname{Cov}_d(I_i,I_j)=E_d[I_iI_j]-E_d[I_i]E_d[I_j]=\pi_{ij}-\pi_i\pi_j=\Delta_{ij}$. Substitution from step 1.1 gives $\operatorname{Cov}_d(I_i,I_j)=\frac{n(n-1)}{N(N-1)}-\frac{n^2}{N^2}=-\frac{n(N-n)}{N^2(N-1)}$ for $i\ne j$. [F1, F3, F5, step 1.1, algebra]

3.1 Since $\pi_i=n/N$, $N^{-1}\sum_i I_i y_i/\pi_i=\bar y_S$; by [F4], $\operatorname{Var}_d(\bar y_S)=\frac1{N^2}(\sum_i\frac{\Delta_{ii}y_i^2}{\pi_i^2}+\sum_{i\ne j}\frac{\Delta_{ij}y_i y_j}{\pi_i^2})$. From $\pi_{ii}=\pi_i$, $\Delta_{ii}/\pi_i^2=(N-n)/n$, and step 2.1 gives $\Delta_{ij}/\pi_i^2=-(N-n)/(n(N-1))$ for $i\ne j$; thus $\operatorname{Var}_d(\bar y_S)=\frac{N-n}{N^2n}(\sum_i y_i^2-\frac1{N-1}\sum_{i\ne j}y_i y_j)=\frac{N-n}{N^2n}\frac{N\sum_i y_i^2-(\sum_i y_i)^2}{N-1}=\frac{N-n}{Nn}S_U^2$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 When $n=N$, the sample is the population and the factor $1-n/N$ is zero. When $n=1$, step 3.1 gives $(1-1/N)S_U^2$; the usual sample variance denominator $n-1$ is unavailable, but the design variance is defined. [F1, F2, step 3.1, algebra] ∎

## Remarks

The PDF p. 14 covariance display in Shalabh's Chapter 2 has a positive-sign
typo. The inclusion probabilities on that page and the defining identity
$\operatorname{Cov}(I_i,I_j)=\pi_{ij}-\pi_i\pi_j$ give the negative value
proved above. The sample space has only $\binom{N}{n}$ points, so the design
distribution is finitely supported; the displayed variance alone is not an
exact normal or $t$ calibration.
