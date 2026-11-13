---
id: lem-author-894e17bac320-binomial-atom-lower
title: A lower estimate for a binomial point probability
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-b785a1269d40-independent-cross-degrees
  - math:thm-logarithm-derivative-and-integral
  - math:def-natural-logarithm
  - math:thm-exponential-addition-formula
  - math:thm-exponential-is-strictly-increasing
  - math:def-erdos-renyi-random-graph
  - math:def-binomial-coefficient
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
dependency_roles:
  lem-author-b785a1269d40-independent-cross-degrees: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-addition-formula: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  math:def-binomial-coefficient: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $M,k$ be integers with $1\le k\le M$, and let $0<p\le1/2$. Let $G\sim G(2M,p)$, fix a partition of its vertex set into sets $U,V$ of size $M$, and fix $u\in U$. Let $D$ be the number of neighbors of $u$ in $V$. Then
$$\mathbb P(D=k)\ge(Mp/k)^k\exp(-2Mp).$$

## Facts & Assumptions

[F1] For $G\sim G(2M,p)$, a fixed partition into equal parts of size $M$, and a fixed vertex in one part, the cross-degree law is $\mathbb P(D=k)=\binom Mk p^k(1-p)^{M-k}$ ([[lem-author-b785a1269d40-independent-cross-degrees]]).

[F2] The logarithm satisfies $\log x=\int_1^xdt/t$ ([[math:thm-logarithm-derivative-and-integral]]).

[F3] The natural logarithm is inverse to the exponential ([[math:def-natural-logarithm]]).

[F4] The exponential satisfies $\exp(a+b)=\exp(a)\exp(b)$ ([[math:thm-exponential-addition-formula]]).

[F5] The real exponential is strictly increasing ([[math:thm-exponential-is-strictly-increasing]]).

[F6] The model $G(2M,p)$ is the simple graph on $2M$ labelled vertices whose possible edges are present independently with probability $p$ ([[math:def-erdos-renyi-random-graph]]).

[F7] The binomial coefficient $\binom Mk$ counts the $k$-element subsets of an $M$-element set ([[math:def-binomial-coefficient]]).

[F8] Distinct vertices $u,v$ are neighbors exactly when $\{u,v\}$ is an edge; thus the number of neighbors of $u$ in $V$ counts the edges $\{u,v\}$ with $v\in V$ ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the asserted lower bound.

1.1 By [F7], $\binom Mk$ counts the $k$-element subsets of $V$. There are $\prod_{j=0}^{k-1}(M-j)$ ordered lists of $k$ distinct elements of $V$, and each such subset has $\prod_{j=0}^{k-1}(k-j)$ orders. Dividing gives $\binom Mk=\prod_{j=0}^{k-1}(M-j)/(k-j)$. Each denominator is positive, and each factor is at least $M/k$, since $k(M-j)\ge M(k-j)$ is equivalent to $(M-k)j\ge0$. Consequently $\binom Mk p^k\ge(Mp/k)^k$. [F7, given, algebra]

2.1 By [F8], $D$ counts the edges from $u$ to $V$. The model in [F6] and the fixed partition satisfy [F1] with $n=2M$ and $m=M$; in particular, $M\ge1$ and $0<p\le1/2<1$. By [F2], $-\log(1-p)=\int_{1-p}^1dt/t\le p/(1-p)\le2p$. Apply [F3], [F4], and [F5] to obtain $(1-p)^M=\exp(M\log(1-p))\ge\exp(-2Mp)$. Because $0<1-p<1$, replacing $M$ by $M-k$ only increases this power. Multiply by step 1.1 and use the exact probability in [F1] to obtain the claimed lower bound. [F1, F2, F3, F4, F5, F6, F8, step 1.1, algebra] ∎
