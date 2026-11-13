---
title: Independent cross-degrees produce a large degree at logarithmic density
status: published
research_item: lem-author-894e17bac320-independent-degree-amplification
dependency_level: 2
---

## Prerequisites

- [lem-author-894e17bac320-logarithmic-degree-parameters](item-lem-author-894e17bac320-logarithmic-degree-parameters)
- [lem-author-894e17bac320-binomial-atom-lower](item-lem-author-894e17bac320-binomial-atom-lower)
- [lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)
- [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)


## Statement

Let $n,L,\gamma,p,M,k$ be as in the preceding logarithmic parameter lemma. In $G(n,p)$, let $E$ be the event that some vertex in the first half has exactly $k$ neighbors in the second half. Then
$$\mathbb P(E)\ge\frac1{1+2\exp(-49L/50)},\qquad \mathbb P(E^c)\le2\exp(-49L/50).$$
In particular the probability of a vertex with degree at least $k$ tends to one through even $n\to\infty$.

## Facts & Assumptions

[F1] The parameters satisfy $k\le L/500$, $Mp/k\ge1/4000$, $0<p<1/2$, and $\log4000<9$ ([lem-author-894e17bac320-logarithmic-degree-parameters](item-lem-author-894e17bac320-logarithmic-degree-parameters)).

[F2] Each cross-degree has point probability $q\ge(Mp/k)^k\exp(-2Mp)$ at $k$ ([lem-author-894e17bac320-binomial-atom-lower](item-lem-author-894e17bac320-binomial-atom-lower)).

[F3] The cross-degrees from different first-half vertices are independent ([lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)).

[F4] The inverse identities give $\exp(L)=n$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

[F5] The exponential addition formula converts products of exponential factors into sums of their exponents ([math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)).

[F6] The exponential is positive and $\exp(-x)=1/\exp(x)$ ([math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)).

[F7] The exponential is strictly increasing ([math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)).

[F8] The exponential is its everywhere convergent power series ([math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)).

[F9] The model $G(n,p)$ is the finite simple graph on $[n]$ whose edge indicators are mutually independent Bernoulli$(p)$ variables; its outcome space is the finite product of the edge spaces ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F10] Neighbors of a vertex are its adjacent vertices, and its degree is the cardinality of its full neighborhood ([math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)).

[F11] An event is a subset of the finite outcome space, and its probability is the sum of its nonnegative outcome weights, whose total is one. Splitting these sums gives $\mathbb P(E)=1-\mathbb P(E^c)$ and $\mathbb P(B)\le\mathbb P(C)$ whenever $B\subseteq C$ ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the asserted conclusions.

1.1 Since $2Mp=np=\gamma L$, [F1] and [F2] give $q\ge\exp(-k\log4000-\gamma L)\ge\exp(-(9/500+\gamma)L)\ge\exp(-L/50)$. By [F4] and [F5], $Mq\ge\tfrac12\exp(49L/50)$. [F1, F2, F4, F5, F7, given, algebra]

2.1 In the finite graph probability space of [F9], let $E^c$ be the complement of $E$. It has probability $(1-q)^M$ by [F3]. For $0\le q<1$, $(1-q)^{-1}\ge1+q$ and induction gives $(1+q)^M\ge1+Mq$. Thus $\mathbb P(E^c)\le1/(1+Mq)$; the same bound holds trivially at $q=1$. Step 1.1, [F6], and the complement identity in [F11] imply $\mathbb P(E)\ge1/[1+2\exp(-49L/50)]$ and $\mathbb P(E^c)\le2\exp(-49L/50)$. [F3, F6, F9, F11, step 1.1, algebra]

3.1 As $n$ increases without bound, $L=\log n$ increases without bound: otherwise monotonicity and $n=\exp(L)$ would bound $n$. For $a>0$, the series gives $\exp(aL)\ge1+aL$, so $\exp(-aL)\le1/(1+aL)\to0$ by [F6]. Taking $a=49/50$ in step 2.1 proves the claimed limiting assertion. The second-half neighbors of a vertex form a subset of its full neighborhood, so [F10] shows that $E$ is contained in the event of a vertex with total degree at least $k$. Probability monotonicity from [F11] transfers the lower bound and limit to this degree event. [F4, F6, F7, F8, F10, F11, step 2.1, algebra] ∎
