---
id: ex-fd-all-zero-mc-sample
title: An all-zero Monte Carlo sample can report zero standard error
kind: example
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-iid-monte-carlo-estimators
  - def-moments-variance-and-covariance
dependency_roles:
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  def-iid-monte-carlo-estimators: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2, §2.2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
---

## Example

Let $n\ge2$ and $p\in(0,1)$. On the product probability space $\{0,1\}^n$ with independent Bernoulli$(p)$ coordinates $X_1,\ldots,X_n$, define $\bar X_n:=n^{-1}\sum_{j=1}^nX_j$, $s_n^2:=(n-1)^{-1}\sum_{j=1}^n(X_j-\bar X_n)^2$, and $\widehat{se}_n:=s_n/\sqrt n$. The event that all coordinates are zero has probability $(1-p)^n>0$. On that event $\bar X_n=s_n^2=\widehat{se}_n=0$, although the target mean is $p>0$ and the population variance is $p(1-p)>0$, so the absolute error is $p$. This is an exact finite-sample probability-model example, not an experimental observation; it shows that a zero plug-in standard error in one realization does not establish zero population variance or zero estimation error.

## Example references

[[def-iid-monte-carlo-estimators|IID sample mean, variance, and plug-in standard error definitions]]

[[def-moments-variance-and-covariance|Population variance definition]]

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2, §2.2](https://artowen.su.domains/mc/Ch-intro.pdf)

## Facts & Assumptions

**Given:** $n\ge2$, $p\in(0,1)$, and $X_1,\ldots,X_n$ the coordinate random variables on the stated Bernoulli product probability space.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means common law and mutual independence.

[F2] [[def-iid-monte-carlo-estimators]]: $\bar X_n=n^{-1}\sum_{j=1}^nX_j$, $s_n^2=(n-1)^{-1}\sum_{j=1}^n(X_j-\bar X_n)^2$, and $\widehat{se}_n=s_n/\sqrt n$ for $n\ge2$.

[F3] [[def-moments-variance-and-covariance]]: for square-integrable $X$, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$.

## Verification

1.1 Mutual independence gives $\mathbb P(X_1=\cdots=X_n=0)=\prod_{j=1}^n\mathbb P(X_j=0)=(1-p)^n>0$. [F1, given, algebra]

2.1 On this event all $X_j$ and $\bar X_n$ are zero, so [F2] gives $s_n^2=0$ and $\widehat{se}_n=0$. [F2, given, step 1.1]

3.1 For a Bernoulli$(p)$ variable $X_j$, $X_j^2=X_j$ pointwise, hence $\mathbb E[X_j]=p$ and [F3] gives $\operatorname{Var}(X_j)=\mathbb E[X_j^2]-p^2=p(1-p)>0$. On the event in step 1.1 the sample mean differs from this target by $p$. [F3, given, step 1.1, algebra] ∎
