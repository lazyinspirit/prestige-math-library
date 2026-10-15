---
id: ex-bootstrap-finite-b-versus-sampling-error
kind: example
title: "Sampling and finite-bootstrap errors for a Bernoulli mean"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-statistical-and-computational-error-ledger
  - thm-pathwise-error-ledger-decomposition
  - thm-independent-replicate-variance-estimator
  - def-identically-distributed-and-iid-random-variables
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application, Chapter 2 §2.5.1–§2.5.2"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
---

## Example

Let $X_1,X_2$ be IID observations in $\{0,1\}$ with $\mathbb P(X_i=1)=3/4$ and $\mathbb P(X_i=0)=1/4$. Take each observation as one resampling unit in the finite measurable space $(\{0,1\},2^{\{0,1\}})$, and define $T_2(x_1,x_2):=(x_1+x_2)/2$ on $\{0,1\}^2$. The map is measurable because its domain has the full power-set sigma-algebra. Suppose the observed ordered sample is $(0,1)$, an event of probability $3/16>0$. The population mean is $\theta=3/4$, while the data estimate is $T_2(0,1)=1/2$. Fix these data and use the size-two empirical-law bootstrap of [[alg-n-out-of-n-bootstrap-from-empirical-law]]. Each resample chooses two indices independently and uniformly from $\{1,2\}$, with replacement. Its conditional sample-mean law has values $0,1/2,1$ with probabilities $1/4,1/2,1/4$. In four independent resamples, suppose the ordered index pairs are $(1,1),(1,2),(2,2),(2,2)$, giving means $0,1/2,1,1$. This finite realization lets us compare the data-sampling error, the exact conditional bootstrap target, and finite-$B$ simulation error. It makes no bootstrap-validity claim.

## Facts & Assumptions

**Given:** The stated IID two-point observation law, observed sample $(0,1)$, finite unit space and map $T_2$, bootstrap procedure, and four realized resamples. Prove the conditional bootstrap law and error separation.

[F1] The error ledger uses a declared scalar target and explicit successive reference values, with each stage error equal to the difference of adjacent references. ([[def-statistical-and-computational-error-ledger]])

[F2] The total realized error along the finite reference chain is the sum of its signed stage errors. ([[thm-pathwise-error-ledger-decomposition]])

[F3] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence.

[F4] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: for a fixed tuple of length $n\ge1$, draw $n$ indices independently and uniformly from $[n]$, with replacement, and apply the declared measurable statistic to the resampled tuple.

[F5] [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]: conditional on the fixed observed tuple, the resampled coordinates are IID with common law equal to its empirical measure.

[F6] For $B\ge2$ IID finite-variance replicate outputs, $[B(B-1)]^{-1}\sum_b(Z_b-\overline Z_B)^2$ is unbiased for the variance of their average. ([[thm-independent-replicate-variance-estimator]])

[A1] The observations are IID with the stated two-point law; the target is their mean $\theta=3/4$.

[A2] The observed ordered tuple is $(0,1)$ in the finite measurable unit space $(\{0,1\},2^{\{0,1\}})$; each entry is one resampling unit and $T_2(x_1,x_2)=(x_1+x_2)/2$ is measurable on the full power-set sample space.

[A3] Four independent repetitions of the stated bootstrap algorithm produce the listed ordered index pairs.

## Verification

1.1 By [A1], the observed event $(X_1,X_2)=(0,1)$ has probability $(1/4)(3/4)=3/16>0$. By [A2], its statistic is $T_2(0,1)=1/2$, so the realized data-sampling error is $1/2-3/4=-1/4$. [given, A1, A2, algebra]

1.2 By [F4] and [F5], the four equally likely ordered pairs of bootstrap indices have sample means $0,1/2,1/2,1$, respectively. Therefore the conditional bootstrap mean is $1/2$ and its conditional variance is $(1/4)(1/2)^2+(1/2)0^2+(1/4)(1/2)^2=1/8$. [given, A2, F4, F5, construct, algebra]

2.1 The four stated means average to $(0+1/2+1+1)/4=5/8$, so the finite-$B$ simulation error relative to the exact conditional bootstrap mean is $5/8-1/2=1/8$. Each ordered index pair has conditional probability $1/4$; independence across the four repetitions makes this listed realization have probability $(1/4)^4=1/256>0$. [given, A3, F4, step 1.2, algebra]

2.2 Under the conditional resampling law, the four replicate means are IID with variance $1/8$ by step 1.2 and [A3]; [F6] gives variance $1/(4\cdot8)=1/32$ for their average. This is computation-randomization variance conditional on the data, distinct from the data-sampling error in step 1.1. [F3, F6, step 1.2, A3, algebra]

3.1 The chain $3/4,1/2,1/2,5/8,5/8$ has successive errors $-1/4,0,1/8,0$. Their sum is $-1/8=5/8-3/4$, so the realized total error is exactly the separate sampling and finite-$B$ errors in steps 1.1 and 2.1. [F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎
