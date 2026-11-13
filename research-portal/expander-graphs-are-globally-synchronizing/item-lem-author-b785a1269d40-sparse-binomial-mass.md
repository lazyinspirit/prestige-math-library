---
title: An explicit lower bound on a sparse binomial atom
status: published
research_item: lem-author-b785a1269d40-sparse-binomial-mass
dependency_level: 1
---

## Prerequisites

- [lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)


## Statement

Let $k\ge1$ be an integer and let $n\ge4k$ be even. Fix a partition $[n]=U\sqcup V$ into two sets of size $n/2$ and a vertex $u\in U$. For $G\sim G(n,1/n)$, let $D$ have the law of $|N_G(u)\cap V|$, the number of neighbors of $u$ in $V$. Then
$$q:=\mathbb P(D=k)\ge q_0:=\frac1{2\,4^k k!}.$$
The bound is uniform in all these $n$, partitions and vertices.

## Facts & Assumptions

[F1] In the stated cross-degree setting, $0<1/n<1$ and $0\le k\le n/2$, so the degree has probability $\binom{n/2}k n^{-k}(1-1/n)^{n/2-k}$ of equaling $k$ ([lem-author-b785a1269d40-independent-cross-degrees](item-lem-author-b785a1269d40-independent-cross-degrees)).

[F2] The factorial $k!$ is the product $1\cdot2\cdots k$, with $0!=1$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

[F3] The number $\binom mk$ counts the $k$-element subsets of any $m$-element set ([math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)).

[F4] The model $G(n,p)$ is the finite simple graph on the labelled vertex set $[n]$ with mutually independent Bernoulli$(p)$ edge indicators ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F5] The open neighborhood is $N_G(u)=\{v:\{u,v\}\in E(G)\}$, so $|N_G(u)\cap V|$ counts the neighbors of $u$ in $V$ ([math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)).

[F6] A real random variable on a finite probability space is a real-valued function on its outcome set. Its law assigns to each value the probability of the corresponding fibre, so variables with the same law have the same atom probabilities ([math:def-finite-real-random-variable-and-distribution](https://alphabetamath.cc/item/def-finite-real-random-variable-and-distribution)).

## Proof

**Given:** The hypotheses and objects in the Statement.

**Goal:** Establish the asserted conclusions.

1.1 Put $m=n/2$. For a set of $s$ elements, let $N_j$ count its ordered $j$-tuples of distinct elements. There is one empty tuple, so $N_0=1$. For $0\le j<s$, partition the ordered $(j+1)$-tuples by their first $j$ entries: each of the $N_j$ parts has exactly $s-j$ elements, one for each unused element. Therefore $N_{j+1}=(s-j)N_j$. Induction gives $N_k=s(s-1)\cdots(s-k+1)$ for $k\le s$. Taking $s=k$ and using [F2] proves that each $k$-element set has exactly $k!$ orderings. [F2, given, algebra]

2.1 Forgetting the order partitions the ordered $k$-tuples from an $m$-element set into $\binom mk$ classes by [F3], each of size $k!$ by step 1.1. Thus $\binom mk k!=m(m-1)\cdots(m-k+1)$. Since $n\ge4k$, we have $k\le m$, and for $0\le j<k$ each factor $m-j$ is at least $n/4$. Dividing by the positive number $k!n^k$ gives $\binom mk n^{-k}\ge1/(4^k k!)$. [F3, step 1.1, given, algebra]

3.1 For integers $r\ge0$ and $0\le a\le1$, induction gives $(1-a)^r\ge1-ra$: the inductive multiplication adds the nonnegative term $ra^2$. Apply this with $r=m-k$ and $a=1/n$. The resulting lower bound $1-(m-k)/n$ is at least $1/2$. Multiplying it by step 2.1 and using [F1] proves $q\ge q_0$. [F1, step 2.1, algebra] ∎
