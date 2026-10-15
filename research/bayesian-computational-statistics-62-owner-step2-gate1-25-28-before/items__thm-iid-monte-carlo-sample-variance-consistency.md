---
id: thm-iid-monte-carlo-sample-variance-consistency
title: "Consistency of the IID Monte Carlo sample variance"
kind: theorem
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-monte-carlo-estimators
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - lem-measurable-functions-preserve-independence
  - thm-change-of-variables-for-expectation
  - thm-kolmogorov-iid-l1-strong-law
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $(Y_i)_{i\ge1}$ be a real IID sequence with $\mathbb E[Y_1^2]<\infty$, and write $\mu=\mathbb E[Y_1]$ and $\sigma^2=\operatorname{Var}(Y_1)$. For $n\ge2$, define $s_n^2=(n-1)^{-1}\sum_{i=1}^n(Y_i-\bar Y_n)^2$. Then $s_n^2\to\sigma^2$ almost surely. If $\sigma^2>0$, then $\widehat{se}_n/(\sigma/\sqrt n)\to1$ almost surely.

## Facts & Assumptions

**Given:** A real IID sequence $(Y_i)_{i\ge1}$ with $\mathbb E[Y_1^2]<\infty$.

[F1] [[def-iid-monte-carlo-estimators]]: $\bar Y_n=n^{-1}\sum_{i=1}^nY_i$, $s_n^2=(n-1)^{-1}\sum_{i=1}^n(Y_i-\bar Y_n)^2$ for $n\ge2$, and $\widehat{se}_n=s_n/\sqrt n$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means common law and mutual independence.

[F3] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Products of measurable real functions are measurable, so the square map $x\mapsto x^2$ is Borel measurable.

[F4] [[lem-measurable-functions-preserve-independence]]: Applying a measurable function separately to each member of an independent family preserves independence.

[F5] [[thm-change-of-variables-for-expectation]]: For a measurable $g$ with $g(X)$ integrable, $\mathbb E[g(X)]$ is the integral of $g$ against the law of $X$.

[F6] [[thm-kolmogorov-iid-l1-strong-law]]: For real IID variables with finite first absolute moment, their sample averages converge almost surely to their common expectation.

[F7] [[def-moments-variance-and-covariance]]: For square-integrable real $X$, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation is linear on integrable real random variables.

## Proof

1.1 Since $|y|\le1+y^2$ for every real $y$, the given second moment implies $\mathbb E|Y_1|<\infty$. Applying [F6] to the original IID sequence gives $\bar Y_n\to\mu$ almost surely by [F1]. [F1, F6, given, algebra]

1.2 The identity map on $(\mathbb R,\mathcal B(\mathbb R))$ is measurable, so its pointwise product with itself is Borel measurable by [F3]; call this square map $q$. Applying [F4] with $q$ preserves independence. For any Borel set $B$, $\mathbb P(Y_i^2\in B)=\mathbb P(Y_i\in q^{-1}(B))$, so the common-law clause of [F2] gives a common law for the $Y_i^2$. By [F5], their common finite expectation is $\mathbb E[Y_1^2]$. Thus [F6] applies to this IID sequence and gives $n^{-1}\sum_{i=1}^nY_i^2\to\mathbb E[Y_1^2]$ almost surely. [F2, F3, F4, F5, F6, given]

2.1 Expanding the centered squares in [F1] gives $s_n^2=\frac{n}{n-1}\bigl(n^{-1}\sum_{i=1}^nY_i^2-\bar Y_n^2\bigr)$. Steps 1.1 and 1.2 imply that the bracket tends almost surely to $\mathbb E[Y_1^2]-\mu^2$; also $n/(n-1)\to1$. By [F7] and [F8], $\mathbb E[Y_1^2]-\mu^2=\mathbb E[(Y_1-\mu)^2]=\sigma^2$. Hence $s_n^2\to\sigma^2$ almost surely. [F1, F7, F8, step 1.1, step 1.2, algebra]

3.1 If $\sigma^2>0$, step 2.1 gives $s_n^2/\sigma^2\to1$ almost surely. Both $s_n$ and $\sigma$ are nonnegative, so continuity of the square root gives $s_n/\sigma\to1$. By [F1], $\widehat{se}_n/(\sigma/\sqrt n)=s_n/\sigma$, proving the relative standard-error consistency. [F1, step 2.1, algebra] ∎
