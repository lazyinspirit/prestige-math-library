---
id: thm-independent-replicate-variance-estimator
kind: theorem
title: "Unbiased variance estimate from independent computation replicates"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-moments-variance-and-covariance
  - thm-factorization-of-expectations-for-independent-variables
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application, Chapter 2 §2.5.2"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
---

## Statement

Let $Z_1,\ldots,Z_R$ be IID real random variables with mean $\mu$ and finite variance $\tau^2$, where $R\ge2$, and let $\overline Z_R=R^{-1}\sum_{r=1}^{R}Z_r$. Then
$$
\widehat V_R:=\frac{1}{R(R-1)}\sum_{r=1}^{R}(Z_r-\overline Z_R)^2
$$
is unbiased for $\operatorname{Var}(\overline Z_R)=\tau^2/R$. The probability law may be the computation-randomization law conditional on fixed observed data; in that use, this estimate concerns computation variability only.

## Facts & Assumptions

**Given:** IID real random variables $Z_1,\ldots,Z_R$ with finite mean $\mu$ and variance $\tau^2$, and an integer $R\ge2$. Prove the stated unbiasedness.

[F1] The variance of $Z_r$ is $\mathbb E[(Z_r-\mathbb E Z_r)^2]$. ([[def-moments-variance-and-covariance]])

[F2] Expectations of products of independent integrable real random variables factor. ([[thm-factorization-of-expectations-for-independent-variables]])

[F3] IID means identically distributed and independent; no moment assumption is implicit in that definition. ([[def-identically-distributed-and-iid-random-variables]])

## Proof

1.1 By [F3] and the given moment assumptions, every $Z_r$ has $\mathbb E Z_r=\mu$ and $\mathbb E Z_r^2=\mu^2+\tau^2$. [given, F1, F3, algebra]

1.2 For $r\ne s$, independence and [F2] give $\mathbb E[Z_rZ_s]=\mathbb E Z_r\,\mathbb E Z_s=\mu^2$. [given, F2, F3]

1.3 Expanding the finite square gives $\sum_r(Z_r-\overline Z_R)^2=\sum_r Z_r^2-R\overline Z_R^2$, since $\sum_r Z_r=R\overline Z_R$. [given, algebra]

2.1 Expanding $\overline Z_R^2$ and using steps 1.1–1.2 gives $\mathbb E[\overline Z_R^2]=R^{-2}\{R(\mu^2+\tau^2)+R(R-1)\mu^2\}=\mu^2+\tau^2/R$; hence $\operatorname{Var}(\overline Z_R)=\tau^2/R$. [step 1.1, step 1.2, F1, algebra]

3.1 Taking expectations in step 1.3 and using steps 1.1 and 2.1 gives $\mathbb E\sum_r(Z_r-\overline Z_R)^2=R(\mu^2+\tau^2)-R(\mu^2+\tau^2/R)=(R-1)\tau^2$. [step 1.1, step 1.3, step 2.1, algebra]

4.1 Divide step 3.1 by $R(R-1)$ to obtain $\mathbb E\widehat V_R=\tau^2/R=\operatorname{Var}(\overline Z_R)$, as required. [step 3.1, step 2.1, algebra] ∎
