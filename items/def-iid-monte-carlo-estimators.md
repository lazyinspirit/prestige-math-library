---
id: def-iid-monte-carlo-estimators
title: "IID Monte Carlo sample mean, variance, and standard error"
kind: definition
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-partial-sums-and-sample-means
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Let $(Y_i)_{i\ge1}$ be real IID random variables on one probability space, where IID means that the variables have a common law and are mutually independent ([[def-identically-distributed-and-iid-random-variables]]). When $\mathbb E|Y_1|<\infty$, write $\mu:=\mathbb E[Y_1]$ and define the Monte Carlo estimate of this expectation by the sample mean $\bar Y_n:=n^{-1}\sum_{i=1}^nY_i$; this is the partial-sum convention of [[def-partial-sums-and-sample-means]]. For each $n\ge2$ and any realized finite real sample, define its sample variance and nonnegative square root by
$$s_n^2:=\frac1{n-1}\sum_{i=1}^n(Y_i-\bar Y_n)^2,\qquad s_n:=\sqrt{s_n^2}.$$
When $\mathbb E[Y_1^2]<\infty$, write $\sigma^2:=\operatorname{Var}(Y_1)$, using [[def-moments-variance-and-covariance]]. The population standard error of $\bar Y_n$ is $\sigma/\sqrt n$, and its plug-in estimate is $\widehat{se}_n:=s_n/\sqrt n$. Although the finite-sample quantity $s_n$ is defined for any finite real sample, its interpretation as an estimate of a finite population standard error is used here only under the finite-second-moment condition.

## Remarks

The formula above defines the mathematical sample variance. Computing it as the difference between the sample second moment and the squared sample mean can suffer catastrophic cancellation in floating-point arithmetic; no stable-update or floating-point error bound is asserted on this page.
