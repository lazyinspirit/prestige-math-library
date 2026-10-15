---
id: thm-iid-monte-carlo-mean-moments
title: "Unbiasedness and exact variance of the IID Monte Carlo mean"
kind: theorem
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-monte-carlo-estimators
  - def-identically-distributed-and-iid-random-variables
  - thm-change-of-variables-for-expectation
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-moments-variance-and-covariance
  - cor-variance-adds-for-pairwise-independent-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
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

## Statement

Let $(Y_i)_{i\ge1}$ be a real IID sequence. If $\mathbb E|Y_1|<\infty$ and $\mu=\mathbb E[Y_1]$, then $\mathbb E[\bar Y_n]=\mu$ for every $n\ge1$. If also $\mathbb E[Y_1^2]<\infty$ and $\sigma^2=\operatorname{Var}(Y_1)$, then $\operatorname{Var}(\bar Y_n)=\sigma^2/n$ for every $n\ge1$.

## Facts & Assumptions

**Given:** A real IID sequence $(Y_i)_{i\ge1}$ on one probability space; in the first claim $\mathbb E|Y_1|<\infty$, and in the second claim $\mathbb E[Y_1^2]<\infty$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means that all variables have the same law and the whole family is mutually independent.

[F2] [[thm-change-of-variables-for-expectation]]: For a measurable $g$, if $g(X)$ is integrable, then its expectation is the integral of $g$ against the law of $X$.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation is linear on integrable real random variables.

[F4] [[def-moments-variance-and-covariance]]: For square-integrable real $X$, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$.

[F5] [[cor-variance-adds-for-pairwise-independent-random-variables]]: For a finite pairwise-independent family of square-integrable real random variables, the variance of the sum is the sum of the variances.

[F6] [[def-iid-monte-carlo-estimators]]: $\bar Y_n=n^{-1}\sum_{i=1}^nY_i$.

## Proof

1.1 Every $Y_i$ has the law of $Y_1$ by [F1]. The identity and $q(y)=(y-\mu)^2$ are continuous polynomial maps by the elementary continuity rules for sums and products; inverse images of open sets under continuous maps are open, and inverse images preserve complements and countable unions, so both maps are Borel. Applying [F2] to the identity gives $\mathbb E[Y_i]=\mu$ when $\mathbb E|Y_1|<\infty$. If $\mathbb E[Y_1^2]<\infty$, applying [F2] to $q$ also gives $\operatorname{Var}(Y_i)=\sigma^2$ by [F4]. [F1, F2, F4, given, algebra]

2.1 By [F6], $\bar Y_n=n^{-1}\sum_{i=1}^nY_i$. Linearity [F3] and step 1.1 therefore give $\mathbb E[\bar Y_n]=n^{-1}\sum_{i=1}^n\mathbb E[Y_i]=\mu$. [F3, F6, step 1.1, algebra]

3.1 Assume $\mathbb E[Y_1^2]<\infty$. Since $|y|\le1+y^2$ for every real $y$, each $Y_i$ is integrable as well as square-integrable. The first $n$ terms are pairwise independent by [F1], so [F5] and step 1.1 give $\operatorname{Var}(\sum_{i=1}^nY_i)=n\sigma^2$. Linearity [F3] and the variance definition [F4] give $\operatorname{Var}(n^{-1}\sum_{i=1}^nY_i)=n^{-2}\operatorname{Var}(\sum_{i=1}^nY_i)$; hence $\operatorname{Var}(\bar Y_n)=n^{-2}(n\sigma^2)=\sigma^2/n$. [F1, F3, F4, F5, step 1.1, given, algebra] ∎
