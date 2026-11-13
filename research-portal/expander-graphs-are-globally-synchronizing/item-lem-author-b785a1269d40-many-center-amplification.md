---
title: A large degree with explicitly bounded probability at fixed sparse density
status: published
research_item: lem-author-b785a1269d40-many-center-amplification
dependency_level: 2
---

## Prerequisites

- [lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)
- [lem-author-b785a1269d40-sparse-binomial-mass](item-lem-author-b785a1269d40-sparse-binomial-mass)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)


## Statement

For every integer $k\ge1$, put $n_k=4^{k+2}k!$ and $p_k=1/n_k$. In $G(n_k,p_k)$, with probability at least $4/5$, some vertex has at least $k$ neighbors. In fact some vertex in the first half has exactly $k$ neighbors in the second half with probability at least $4/5$.

## Facts & Assumptions

[F1] The degrees from distinct vertices in one half into the other half are independent ([lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)).

[F2] For even $n\ge4k$ each such degree equals $k$ with probability at least $q_0=1/(2\,4^k k!)$ ([lem-author-b785a1269d40-sparse-binomial-mass](item-lem-author-b785a1269d40-sparse-binomial-mass)).

[F3] The model $G(n,p)$ is a finite simple graph on the labelled vertices $[n]$ with mutually independent Bernoulli$(p)$ edge indicators ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)). For even $n$, the first half is $\{1,\ldots,n/2\}$ and the second half is $\{n/2+1,\ldots,n\}$.

[F4] Distinct vertices are neighbors precisely when their unordered pair is an edge, and a vertex's total degree is the number of all its neighbors ([math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)).

[F5] Mathematical induction holds for properties of nonnegative integers: a property true at $0$ and preserved from $r$ to $r+1$ holds for every $r\ge0$ ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 The integer $n=n_k$ is even and satisfies $n\ge4k$ (since $k!\ge k$ and $4^{k+2}\ge4$). Let $m=n/2$ and let $q$ be the common probability of degree $k$ into the second half. By [F1] the probability none of the $m$ first-half vertices has this degree is $(1-q)^m$. By [F2], $mq\ge mq_0=4$. [F1, F2, F3, given, algebra]

2.1 Fix $0\le q<1$. Since $(1-q)(1+q)=1-q^2\le1$ and $1-q>0$, we have $(1-q)^{-1}\ge1+q$. For a nonnegative integer $r$, the inequality $(1+q)^r\ge1+rq$ holds at $r=0$. If it holds at $r$, multiplication by $1+q>0$ gives $(1+q)^{r+1}\ge(1+rq)(1+q)=1+(r+1)q+rq^2\ge1+(r+1)q$. Thus [F5] proves it for every nonnegative integer $r$, in particular $r=m$. Taking positive reciprocals gives $(1-q)^m\le(1+q)^{-m}\le1/(1+mq)\le1/5$. If $q=1$ the probability of no such vertex is zero. The complementary event therefore has probability at least $4/5$. A vertex's total degree is no smaller than its degree into the second half, proving both assertions. [F4, F5, step 1.1, algebra] ∎
