---
title: Finite coupling makes connectivity probability monotone
status: draft
research_item: lem-author-c1dce5041ae4-connectivity-monotone-coupling
dependency_level: 0
---

## Prerequisites

- [math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)


## Statement

For fixed integer $n\ge1$ and $0\le p\le q\le1$, the connectivity probabilities satisfy $\mathbb P(G(n,p)\text{ is connected})\le\mathbb P(G(n,q)\text{ is connected})$. This statement concerns graph connectivity only.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

**Goal:** Prove the Statement.

[F1] Finite product spaces assign to a coordinate tuple the product of its coordinate weights ([math:def-product-of-finite-probability-spaces](https://alphabetamath.cc/item/def-product-of-finite-probability-spaces)).

[F2] Event probabilities in a finite space are sums of nonnegative outcome weights ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F3] The law $G(n,p)$ has independent edge coordinates of inclusion probability $p$ ([math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)).

[F4] Connectivity means that every pair of vertices is joined by a finite path ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

## Proof

**Proof technique:** direct.

1.1 Give each possible edge a coordinate with three outcomes $0,1,2$ of respective weights $1-q,q-p,p$, and use their finite product. These weights are nonnegative and sum to one. Include an edge in $H_p$ if its coordinate is $2$, and in $H_q$ if its coordinate is $1$ or $2$. Summing coordinate weights shows the marginals are respectively $p$ and $q$; summing product weights over each prescribed coordinate block factors, so the graph marginals are $G(n,p)$ and $G(n,q)$. [F1, F2, F3, construct]

2.1 On every outcome the two graphs have the same nonempty vertex set $[n]$, and every edge of $H_p$ is an edge of $H_q$. Each path of $H_p$ therefore remains a path of $H_q$, so the event $A$ that $H_p$ is connected is contained in the event $B$ that $H_q$ is connected. For the product outcome weights $w$, nonnegativity gives $\mathbb P(B)-\mathbb P(A)=\sum_{\omega\in B\setminus A}w(\omega)\ge0$. By the graph marginals in step 1.1 this is the desired inequality, including all endpoint cases. [step 1.1, F2, F4, algebra] ∎
