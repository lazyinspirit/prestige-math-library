---
title: Independent degrees into a fixed half of a random graph
status: draft
research_item: lem-author-b785a1269d40-independent-cross-degrees
dependency_level: 0
---

## Prerequisites

- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)
- [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)


## Statement

Let $n$ be positive and even, $m=n/2$, and $G\sim G(n,p)$ for $0<p<1$. Partition its vertices into sets $U,V$ of size $m$, and let $D_u$ be the number of neighbors of $u\in U$ in $V$. Then $(D_u)_{u\in U}$ are independent, and for integers $0\le k\le m$,
$$\mathbb P(D_u=k)=\binom mk p^k(1-p)^{m-k}.$$
Here $k!=1\cdot2\cdots k$ with $0!=1$.

## Facts & Assumptions

[F1] The graph has mutually independent Bernoulli$(p)$ edge indicators indexed by unordered pairs of distinct vertices. Each indicator has value 1 with probability $p$ and value 0 with probability $1-p$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph), [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables), [math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)).

[F2] The weight of a coordinate assignment in a finite product is the product of its coordinate weights ([math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)).

[F3] The number $\binom mk$ counts the $k$-element subsets of an $m$-element set ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F4] The factorial $k!$ is the product of the integers from 1 to $k$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F5] Distinct vertices $u,v$ are neighbors exactly when $\{u,v\}$ is an edge; hence counting neighbors in $V$ counts the corresponding incident edges ([math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)).

[F6] A real random variable on a finite probability space is a real-valued function on its outcome set, and its distribution at a value is the probability of the corresponding fibre ([math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

[F7] A finite family of finite-valued random variables is mutually independent when, for every nonempty subfamily and selection of values in their ranges, the joint probability is the product of the individual probabilities ([math:def-independence-of-finite-random-variables](https://alphabetamath.cc/item/def-independence-of-finite-random-variables)).

[F8] An event in a finite probability space is a subset of the outcome set, and its probability is the sum of its outcome weights; the sum over the whole outcome set is one ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 For $u\in U$, $D_u$ depends on the $m$ edges $\{u,v\}$ with $v\in V$. The coordinate sets for distinct $u$ are disjoint: equality of two such unordered edges forces equality of their endpoint in $U$. To compute joint degree probabilities, sum the product weights over each prescribed block of coordinates. The sums factor over the disjoint blocks, while unused coordinates have total weight one. Thus the joint degree probabilities factor, establishing independence. [F1, F2, F5, F6, F7, F8, given]

2.1 Exactly $k$ of these $m$ coordinates equal one precisely when their set of one-coordinates is one of the $\binom mk$ possible subsets. Each such assignment has weight $p^k(1-p)^{m-k}$. Sum their weights to obtain the displayed probability. The factorial notation is [F4]. [F1, F2, F3, F4, F6, F8, step 1.1] ∎
