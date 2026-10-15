---
id: thm-ordinary-bootstrap-fails-for-uniform-endpoint
kind: theorem
title: Ordinary bootstrap failure for a uniform support endpoint
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - def-identically-distributed-and-iid-random-variables
  - def-cumulative-distribution-function-of-a-random-variable
  - def-weak-convergence-of-borel-probability-measures
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, §2.3, Example 3"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "Ryan Martin, Stat 451 Lecture Notes 0812: Bootstrap, pp. 27–28"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat451/Slides/451notes08.pdf"
---

## Statement

For each integer $n\ge1$, let $X_1,\ldots,X_n$ be IID with the uniform law on $[0,1]$, let $M_n=\max_{i\le n}X_i$, and set the support endpoint $\theta=1$. The sampling root is $R_n=n(M_n-1)$. For the ordinary n-out-of-n bootstrap, draw $n$ observations IID from the empirical law $P_n$ and set $R_n^*=n(M_n^*-M_n)$. Here weak conditional consistency means that for every bounded continuous real function $f$, the conditional expectation $\mathbb E^*[f(R_n^*)]$ converges in probability to $\mathbb E[f(R_n)]$. With $h(x)=(1-2|x|)_+$, a bounded continuous function, the conditional bootstrap expectation $\mathbb E^*[h(R_n^*)]$ stays asymptotically separated from $\mathbb E[h(R_n)]$. Therefore the ordinary bootstrap is not weakly conditionally consistent at this support endpoint.

## Facts & Assumptions

**Given:** The IID uniform sample, the empirical law $P_n$, the maximum $M_n$, the roots $R_n,R_n^*$, and $h(x)=(1-2|x|)_+$.

[F1] [[def-m-out-of-n-bootstrap-and-subsampling]]: The ordinary n-out-of-n bootstrap draws $n$ observations conditionally IID from $P_n$ and evaluates the size-$n$ statistic with the size-$n$ root normalization.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means identical laws and mutual independence of the whole family.

[F3] [[def-cumulative-distribution-function-of-a-random-variable]]: A real random variable $Y$ has CDF $F_Y(x)=\mathbb P(Y\le x)$.

[F4] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence of laws requires convergence of integrals for every bounded continuous real test function.

[F5] [[thm-logarithm-derivative-and-integral]]: For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Almost surely $M_n\le1$, so $R_n\le0$ and $0\le h\le1$ with support in $[-1/2,1/2]$. The uniform CDF gives $\mathbb E[h(R_n)]\le\mathbb P(|R_n|\le1/2)=\mathbb P(M_n\ge1-1/(2n))=1-(1-1/(2n))^n$. By [F5], $\log(1-u)/u\to-1$ as $u\downarrow0$: the integral formula gives $-\log(1-u)/u=u^{-1}\int_{1-u}^1dt/t$, an average of $1/t$ over an interval shrinking to $1$. Thus $n\log(1-c/n)\to-c$ for each fixed $c>0$, and $\limsup_n\mathbb E[h(R_n)]\le1-e^{-1/2}$. [F2, F3, F5, algebra]

1.2 The maximum observation is unique almost surely because the uniform law has no atoms. Conditional on the data, each bootstrap draw selects that maximal observation with probability $1/n$, independently across draws, so $\mathbb P^*(R_n^*=0)=1-(1-1/n)^n$. Since $h(0)=1$ and $h\ge0$, $\mathbb E^*[h(R_n^*)]\ge1-(1-1/n)^n\to1-e^{-1}$. [F1, F2, algebra]

2.1 Since $e^{-1/2}>e^{-1}$, the lower limit in step 1.2 is strictly greater than the upper limit in step 1.1. Therefore the conditional test integral cannot converge in probability to the sampling test integral. By [F4], weak consistency would require that convergence for this particular bounded continuous $h$, so weak bootstrap consistency fails. [F4, step 1.1, step 1.2, algebra] ∎
