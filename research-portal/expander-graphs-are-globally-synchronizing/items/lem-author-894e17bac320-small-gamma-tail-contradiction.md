---
id: lem-author-894e17bac320-small-gamma-tail-contradiction
title: The proposed small-gamma centered-adjacency tail has the opposite limit
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-894e17bac320-centered-column-degree
  - lem-author-894e17bac320-logarithmic-degree-parameters
  - lem-author-894e17bac320-independent-degree-amplification
  - math:def-real-exponential-function-and-e
  - math:cor-exponential-reciprocal-and-positivity
  - math:thm-exponential-is-strictly-increasing
  - math:def-real-power
  - math:def-erdos-renyi-random-graph
  - math:def-natural-logarithm
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-finite-probability-space-and-event
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
dependency_roles:
  lem-author-894e17bac320-centered-column-degree: mathematical-premise
  lem-author-894e17bac320-logarithmic-degree-parameters: mathematical-premise
  lem-author-894e17bac320-independent-degree-amplification: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
---

## Statement

Fix $\gamma=10^{-6}$. For every even integer $n$ with $L=\log n\ge2000000$, where $\log$ is the natural logarithm, set $p=\gamma L/n$. Let $A$ be the symmetric adjacency matrix with zero diagonal of $G(n,p)$, the loop-free simple graph on $[n]$ whose edge indicators are mutually independent Bernoulli$(p)$ variables. Let $J$ be the $n\times n$ all-ones matrix, and let $\|\cdot\|$ denote the operator norm for the Euclidean inner product on $\mathbb R^n$. Then $n\ge1000$, $0<p<1$, and
$$\mathbb P(\|A-pJ\|\ge8\sqrt{\gamma L})\ge\frac1{1+2\exp(-49L/50)}>\frac12>\frac25\ge2n^{-\gamma}.$$
Here $n^{-\gamma}=\exp(-\gamma\log n)$. The probability on the left tends to one through even $n\to\infty$ at this one fixed value of $\gamma$.

## Facts & Assumptions

Throughout the facts and proof, set $k=\lceil L/1000\rceil$, the least integer at least $L/1000$, as in the logarithmic parameter lemma ([[lem-author-894e17bac320-logarithmic-degree-parameters]]).

[F1] A vertex of degree at least $k$ forces $\|A-pJ\|\ge(1-p)\sqrt k$ ([[lem-author-894e17bac320-centered-column-degree]]).

[F2] For this same $k$, the parameters satisfy $0<p<1/2$ and $L/1000\le k\le n/2$ ([[lem-author-894e17bac320-logarithmic-degree-parameters]]).

[F3] A vertex of degree at least $k$ occurs with probability at least $1/[1+2\exp(-49L/50)]$, tending to one ([[lem-author-894e17bac320-independent-degree-amplification]]).

[F4] For nonnegative $x$, $\exp(x)$ is bounded below by every finite partial sum of its positive series ([[math:def-real-exponential-function-and-e]]).

[F5] The exponential is positive and $\exp(-x)=1/\exp(x)$ ([[math:cor-exponential-reciprocal-and-positivity]]).

[F6] The exponential is strictly increasing ([[math:thm-exponential-is-strictly-increasing]]).

[F7] For positive $n$, the real power $n^{-\gamma}$ equals $\exp(-\gamma\log n)$ ([[math:def-real-power]]).

[F8] The law $G(n,p)$ is the finite simple graph on $[n]$ with mutually independent Bernoulli$(p)$ edge indicators, one for each two-element vertex subset ([[math:def-erdos-renyi-random-graph]]).

[F9] For $n>0$, $L=\log n$ means $\exp(L)=n$ ([[math:def-natural-logarithm]]).

[F10] For a matrix acting on the Euclidean inner product space $\mathbb R^n$, $\|B\|=\max_{\|v\|_2=1}\|Bv\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F11] An event is a subset of the finite outcome space and its probability is the sum of its nonnegative outcome weights, whose total is one. Consequently $0\le\mathbb P(B)\le1$, and $\mathbb P(B)\le\mathbb P(C)$ whenever $B\subseteq C$ ([[math:def-finite-probability-space-and-event]]).

[F12] Two distinct vertices are adjacent when they form an edge; the degree of a vertex is the cardinality of its open neighborhood, the set of its adjacent vertices ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Given:** The objects and hypotheses in the Statement, with $k$ defined in Facts & Assumptions.

**Goal:** Prove the asserted conclusions.

1.1 The hypotheses of the parameter and amplification lemmas hold since $L\ge2000000\ge1000$, with the same $n,L,\gamma,p,k$ and graph law [F8]. On the degree event from [F3], with degree understood as in [F12], [F1] and [F2], with the norm convention [F10], give $\|A-pJ\|\ge\tfrac12\sqrt{L/1000}>8\sqrt{\gamma L}$. The strict comparison follows by squaring positive quantities: $1/4000>64/1000000$. The degree event is therefore contained in the asserted norm event. By [F11], its probability lower bound and limit from [F3] transfer to the norm event, whose probability is at most one. Finally [F2] gives $n\ge2k\ge L/500\ge4000\ge1000$ and $0<p<1/2<1$. [F1, F2, F3, F8, F10, F11, F12, given, algebra]

2.1 Since $49L/50>1$, [F4] gives $\exp(49L/50)\ge1+49L/50>2$. By [F5], the probability lower bound is greater than $1/2$. Meanwhile $\gamma L\ge2$, so [F4], [F5], [F6], and [F7] give $2n^{-\gamma}\le2/\exp(2)\le2/(1+2+2)=2/5$. These strict and nonstrict comparisons prove the entire chain. [F4, F5, F6, F7, step 1.1, algebra] ∎
