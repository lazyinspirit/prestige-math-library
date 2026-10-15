---
id: ex-proportional-stratification-variance-reduction
kind: example
title: Proportional stratification reduces variance for a uniform mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [def-stratified-monte-carlo-estimator, thm-stratified-unbiasedness-variance-and-proportional-allocation]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

For $P=\operatorname{Unif}[0,1]$ and $f(x)=x$, split into the two half-intervals and draw one point independently from each. This is proportional allocation with total sample size two and gives variance $1/96$, compared with $1/24$ for two ordinary IID draws.

## Facts & Assumptions

**Given:** $A_1=[0,1/2)$, $A_2=[1/2,1]$, $p_1=p_2=1/2$, and $n_1=n_2=1$.

[F1] [[def-stratified-monte-carlo-estimator]]: $\widehat\mu_{\rm strat}=p_1\bar f_1+p_2\bar f_2$.

[F2] [[thm-stratified-unbiasedness-variance-and-proportional-allocation]]: The fixed-stratum variance is $\sum_h p_h^2\sigma_h^2/n_h$ and proportional allocation compares it with the ordinary IID mean of the same total size.

## Verification

**Given:** Independent uniform draws from each half-interval and one ordinary IID comparator sample of size two.

1.1 Each conditional uniform law has mean $1/4$ or $3/4$ and variance $(1/2)^2/12=1/48$. Substitution into the estimator definition [F1] and variance formula [F2] gives $\operatorname{Var}(\widehat\mu_{\rm strat})=2(1/4)(1/48)=1/96$. [F1, F2, given, algebra]

2.1 The ordinary sample mean has variance $\operatorname{Var}(U)/2=(1/12)/2=1/24$. Since $1/96<1/24$, this specified proportional allocation reduces variance by a factor of four. [given, step 1.1, algebra] ∎
