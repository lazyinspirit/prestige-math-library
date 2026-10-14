---
id: ex-finite-class-m-estimator-consistency
kind: example
title: "A finite-class M-estimator and its uniform law"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-consistency-in-probability, def-estimator-sequence-in-iid-experiments, def-identically-distributed-and-iid-random-variables, def-m-estimator, def-metric-space, lem-real-line-is-a-metric-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, consistency of M-estimators, PDF pp. 6–10"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
---

## Example

Let $0<p\le1$ and let $X_1,X_2,\ldots$ be IID Bernoulli$(p)$. Write $\bar X_n=n^{-1}\sum_{i=1}^nX_i$. Take $\Theta=\{0,1\}$ with distance $d(\theta,\eta)=|\theta-\eta|$, and set $m_0(x)=0$ and $m_1(x)=x$. Let $\hat\theta_n=1$ when $\bar X_n>0$ and $\hat\theta_n=0$ when $\bar X_n=0$. Then $\hat\theta_n$ is an exact M-estimator and is consistent for the unique population maximizer $\theta_0=1$. This finite criterion class has a uniform law; the proof below gives the Bernoulli strong law directly.

## Facts & Assumptions

**Given:** $0<p\le1$, the IID Bernoulli observations, the finite parameter set $\Theta=\{0,1\}$, and the displayed criterion and estimator.

[F1] [[def-m-estimator]]: An M-estimator is a data-measurable exact or approximate maximizer or minimizer of $P_nm_\theta$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID means identically distributed with the whole family mutually independent.

[F3] [[def-consistency-in-probability]]: Consistency at a fixed target means the probability of every fixed positive metric error tends to zero.

[F4] [[lem-real-line-is-a-metric-space]]: The usual metric on $\mathbb R$ is $d(x,y)=|x-y|$; on $\Theta=\{0,1\}$ the distance used here is its restriction, which remains a metric because the metric axioms persist on subsets.

[F5] [[def-estimator-sequence-in-iid-experiments]]: The IID sample-size-$n$ space is a finite product space, and an estimator is a measurable map on that space.

[A1] The observations are Bernoulli$(p)$, so $EX_i=p$ and $Y_i=X_i-p$ satisfies $EY_i=0$ and $|Y_i|\le1$.

[A2] The criterion class consists only of the two functions $m_0(x)=0$ and $m_1(x)=x$.

## Verification

1.1 The population criterion is $M(0)=0$ and $M(1)=EX_1=p>0$, so its unique maximum is $\theta_0=1$. The empirical criteria are $M_n(0)=0$ and $M_n(1)=\bar X_n\ge0$; the displayed selection therefore attains their maximum for every sample. By [F5], the sample space is $\{0,1\}^n$ with its product sigma-algebra. Each singleton vector is a measurable rectangle, and every subset is a finite union of singletons, so every data map is measurable. The estimator is exact by [F1]. [A1, A2, F1, F2, F5, given]

1.2 Independence and the Bernoulli finite sample law imply that expectations of products of functions of distinct coordinates factor: the joint mass at each $(x_1,\ldots,x_n)\in\{0,1\}^n$ is $\prod_iP(X_i=x_i)$, and summing this product over the finite sample space factors. Expanding $(\sum_iY_i)^4$, every term with an index occurring once has expectation zero by $EY_i=0$ and this factorization; the remaining terms are $\sum_iEY_i^4+6\sum_{i<j}EY_i^2EY_j^2\le n+6\binom n2\le3n^2$. For $Z\ge0$ and $t>0$, $t\mathbf1_{\{Z>t\}}\le Z$, so integrating gives $P(Z>t)\le EZ/t$. Applying this to $Z=(\sum_iY_i)^4$ gives $P(|\bar X_n-p|>\varepsilon)\le3/(n^2\varepsilon^4)$. [A1, A2, F2, algebra]

2.1 For fixed $\varepsilon>0$, the bound in step 1.2 is summable in $n$. By the union bound, $P(\bigcup_{n\ge N}\{|\bar X_n-p|>\varepsilon\})\le\sum_{n\ge N}3/(n^2\varepsilon^4)\to0$; hence only finitely many such deviations occur almost surely. Applying this to $\varepsilon=1/j$ for every positive integer $j$ gives $\bar X_n\to p$ almost surely. [step 1.2, given, algebra]

3.1 For $0<\varepsilon<1$, the metric-error event is $\{\hat\theta_n=0\}=\{\bar X_n=0\}$, which is contained in $\{|\bar X_n-p|>p/2\}$. Step 1.2 bounds its probability by $3/(n^2(p/2)^4)\to0$; for $\varepsilon\ge1$ the error event is empty. Hence $\hat\theta_n$ is consistent by [F3] in the metric of [F4]. Also, since $p>0$, step 2.1 implies that $\hat\theta_n=1$ eventually almost surely, and $\sup_{\theta\in\Theta}|M_n(\theta)-M(\theta)|=|\bar X_n-p|\to0$ almost surely, displaying the finite-class uniform law. [A1, A2, F3, F4, step 1.2, step 2.1, given] ∎
