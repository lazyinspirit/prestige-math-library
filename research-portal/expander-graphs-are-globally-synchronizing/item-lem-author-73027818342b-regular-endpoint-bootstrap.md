---
title: Rational bootstrap through the regular endpoint
status: published
research_item: lem-author-73027818342b-regular-endpoint-bootstrap
dependency_level: 10
---

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [lem-author-73027818342b-regular-h-refinement](item-lem-author-73027818342b-regular-h-refinement)
- [lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

If $0\le\alpha\le4917/20000=0.24585$, then $X\ge451/1000$.

## Facts & Assumptions

[F1] Regular Lemma 2.1 gives $X\ge(1+r^2)/2-3\alpha/2$ ([lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)).

[F2] For $d>0$ and $X>0$, one has $r\ge1-2\alpha^2(1-X)/X$. For $d=0$, $X=1$ ([lem-author-73027818342b-regular-h-refinement](item-lem-author-73027818342b-regular-h-refinement)).

[F10] Definition or convention used in the Statement: [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation).

[F11] Definition or convention used in the Statement: [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander).

[F12] Definition or convention used in the Statement: [def-expander-sync-states](item-def-expander-sync-states).

[F13] Definition or convention used in the Statement: [def-expander-sync-daido](item-def-expander-sync-daido).

[F14] Definition or convention used in the Statement: [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties).

[F15] Definition or convention used in the Statement: [def-expander-sync-h](item-def-expander-sync-h).

[F16] Definition or convention used in the Statement: [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices).

[F17] Definition or convention used in the Statement: [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order).

[F18] Definition or convention used in the Statement: [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus).

[F19] Definition or convention used in the Statement: [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

## Proof

**Given:** The graph, stable normalized state, parameters and notation in the Statement.

**Goal:** Establish all the asserted estimates.

1.1 The zero-degree case follows from [F2]. Otherwise $\alpha\le0.24585<123/500$ and $\alpha^2<(123/500)^2<61/1000$. Dropping $r^2$ in [F1] gives $X\ge1/2-3\alpha/2>131/1000$. If $X\ge s/1000$ for $s\ge131$, then $0\le1-X$ and $1-2\alpha^2(1-X)/X\ge1-(61/500)(1000-s)/s=(561s-61000)/(500s)>0$. Hence [F1] and [F2] may be squared to give $X\ge131/1000+\tfrac12((561s-61000)/(500s))^2$. [F1, F2, F14, given, algebra]

2.1 For successive integer pairs $(s,t)=(131,149),(149,176),(176,222),(222,294),(294,380),(380,451)$, the integer differences $(561s-61000)^2-500s^2(t-131)$ are respectively $1576081,10740421,14597696,20939764,40994356,54752400$, all positive. Thus the last lower bound of step 1.1 exceeds $t/1000$ for each pair. Start with $s=131$ and apply these six inequalities consecutively to get $X\ge451/1000$, including the exact endpoint $\alpha=4917/20000$. [F1, F2, step 1.1, algebra] ∎
