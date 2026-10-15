---
id: lem-finite-simple-random-sampling-identities
kind: lemma
title: "Finite simple-random-sampling moment identities"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - def-binomial-coefficient
  - lem-finite-sum-laws
  - thm-linearity-of-expectation
  - lem-finite-sum-reindexing-and-fubini
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, Appendix A.4"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Statement

Let $n\ge2$, let $x_1,\ldots,x_n$ and $y_1,\ldots,y_n$ be fixed real numbers, and choose a subset $A$ uniformly from the $m$-element subsets of $\{1,\ldots,n\}$, where $1\le m\le n$. Put
$$\bar x=\frac1n\sum_{i=1}^n x_i,\qquad \bar x_A=\frac1m\sum_{i\in A}x_i,$$
and define $\bar y,\bar y_A$ analogously. Define the finite-population covariance
$$S_{xy}=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y).$$
Then
$$\mathbb E[\bar x_A]=\bar x,\qquad \operatorname{Cov}(\bar x_A,\bar y_A)=\left(1-\frac mn\right)\frac{S_{xy}}m.$$
When $m\ge2$, define the sample covariance
$$s_{xy,A}=\frac1{m-1}\sum_{i\in A}(x_i-\bar x_A)(y_i-\bar y_A).$$
Then $\mathbb E[s_{xy,A}]=S_{xy}$. Taking $y_i=x_i$ gives the corresponding variance identities.

## Facts & Assumptions

**Given:** Fixed real lists $x_1,\ldots,x_n$ and $y_1,\ldots,y_n$, and the uniform finite probability law on the $m$-element subsets of $\{1,\ldots,n\}$.

[F1] [[def-finite-probability-space-and-event]]: the sample space is finite, every subset is an event, and event probabilities are finite sums of outcome weights.

[F2] [[def-expectation-on-a-finite-probability-space]]: for a real random variable $X$ on a finite probability space $(\Omega,w)$, $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$.

[F3] [[def-variance-and-covariance]]: for real random variables on a finite probability space, covariance is the expectation of the product of their centered values.

[F4] [[def-binomial-coefficient]]: $\binom{n}{m}$ is the cardinality of the set of $m$-element subsets of an $n$-element set.

[F5] [[lem-finite-sum-laws]]: finite sums are additive, scaling distributes over finite sums, and finite sums can be split into consecutive ranges.

[F6] [[thm-linearity-of-expectation]]: on a finite probability space, expectation distributes over every finite real linear combination without any independence assumption.

[F7] [[lem-finite-sum-reindexing-and-fubini]]: finite sums over products split into iterated sums, and finite sums over disjoint subsets add to the sum over their union.

## Proof

1.1 There are $\binom nm$ equally likely subsets by [F4]. Count pairs $(i,A)$ with $i\in A$ in two ways: each $m$-element $A$ contributes $m$ pairs and each of the $n$ indices occurs in $\binom{n-1}{m-1}$ such subsets, so $m\binom nm=n\binom{n-1}{m-1}$ and $\mathbb P(i\in A)=m/n$. For distinct ordered indices $i,j$, count pairs $(i,j,A)$ with both in $A$: each subset contributes $m(m-1)$ pairs and each ordered pair occurs in $\binom{n-2}{m-2}$ subsets when $m\ge2$, so $m(m-1)\binom nm=n(n-1)\binom{n-2}{m-2}$. Thus $\mathbb P(i,j\in A)=m(m-1)/(n(n-1))$, also zero for $m=1$. [given, F1, F4, algebra]

2.1 Using $\bar x_A=m^{-1}\sum_i1\{i\in A\}x_i$, expectation linearity [F6] and the inclusion probability from step 1.1 give $\mathbb E[\bar x_A]=m^{-1}\sum_i(m/n)x_i=\bar x$. The same identity holds for $y$. [F2, F5, F6, step 1.1, algebra]

2.2 Set $d_i=x_i-\bar x$ and $e_i=y_i-\bar y$, so $\sum_i d_i=\sum_i e_i=0$. Since the centered sample means have expectation zero, [F3], expectation linearity [F6], and the inclusion probabilities in step 1.1 give $\operatorname{Cov}(\bar x_A,\bar y_A)=\frac1{m^2}\sum_{i,j}\operatorname{Cov}(1\{i\in A\},1\{j\in A\})d_i e_j.$ The diagonal indicator covariance is $m(n-m)/n^2$, and for $i\ne j$ it is $-m(n-m)/(n^2(n-1))$, by subtracting the products of the marginal probabilities in step 1.1. Finite Fubini and splitting [F7] give $\sum_{i\ne j}d_i e_j=(\sum_i d_i)(\sum_j e_j)-\sum_i d_i e_i=-\sum_i d_i e_i$. Substitution yields $(n-m)/(mn(n-1))\sum_i d_i e_i=(1-m/n)S_{xy}/m$. [given, F1, F2, F3, F5, F6, F7, step 1.1, algebra]

3.1 For $m\ge2$, expansion around the population means gives $\sum_{i\in A}(x_i-\bar x_A)(y_i-\bar y_A)=\sum_{i\in A}d_i e_i-m(\bar x_A-\bar x)(\bar y_A-\bar y).$ By expectation linearity [F6] and the inclusion probability in step 1.1, the expectation of the first term is $(m/n)\sum_i d_i e_i=m(n-1)S_{xy}/n$. The expectation of the second term is $m\operatorname{Cov}(\bar x_A,\bar y_A)=(n-m)S_{xy}/n$ by step 2.2. Their difference is $(m-1)S_{xy}$, so division by $m-1$ proves $\mathbb E[s_{xy,A}]=S_{xy}$. [given, F2, F5, F6, step 1.1, step 2.2, algebra] ∎