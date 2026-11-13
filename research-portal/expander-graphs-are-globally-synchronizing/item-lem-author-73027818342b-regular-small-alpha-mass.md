---
title: Small-alpha first parameter and regular H mass
status: published
research_item: lem-author-73027818342b-regular-small-alpha-mass
dependency_level: 12
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
- [lem-author-73027818342b-regular-endpoint-bootstrap](item-lem-author-73027818342b-regular-endpoint-bootstrap)
- [lem-author-73027818342b-regular-lemma-extension](item-lem-author-73027818342b-regular-lemma-extension)
- [lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph, with $n=|V|>0$, symmetric binary adjacency matrix $A$, and self-loops allowed and counted once in each row sum. Suppose every row sum is $d\ge0$, let $\alpha\ge0$, and assume $\|\Delta\|\le\alpha d$, where $\Delta=A-(d/n)J$ and $J$ is the all-ones matrix; the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$. Choose representatives in $(-\pi,\pi]$ after common rotation so that $\rho_1\ge0$ is real, where $\rho_k=n^{-1}\sum_xe^{ik\theta_x}$. Put $X=\rho_1^2$, $r=|\rho_2|$, and $M=n^{-1}\sum_x H(\theta_x)$, where $H(t)=\sin^2|t|$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$.

For $0\le\alpha\le0.24585$ one has $M\le5\alpha^2/4$. If additionally $\alpha\le1/10$, then $X\ge1-2\alpha$.

## Facts & Assumptions

[F1] The refined regular mass bound is $M\le\alpha^2(1-X)/X$ when $d>0$ and $X>0$; when $d=0$, $X=1$ and $M=0$ ([lem-author-73027818342b-regular-h-refinement](item-lem-author-73027818342b-regular-h-refinement)).

[F2] In the stated range $X\ge451/1000$ and $r\ge1-5\alpha^2$ ([lem-author-73027818342b-regular-endpoint-bootstrap](item-lem-author-73027818342b-regular-endpoint-bootstrap), [lem-author-73027818342b-regular-lemma-extension](item-lem-author-73027818342b-regular-lemma-extension)).

[F3] Regular Lemma 2.1 gives $X\ge(1+r^2)/2-3\alpha/2$ ([lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)).

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

1.1 The degree-zero case is immediate from [F1]. Otherwise apply [F2] in [F1] to get $M\le(549/451)\alpha^2\le(5/4)\alpha^2$, since $4\cdot549=2196<2255=5\cdot451$. This proves the mass bound through $0.24585$. [F1, F2, given, algebra]

2.1 If $\alpha\le1/10$, then $1-5\alpha^2\ge0$. Substituting its square into [F3] gives $X\ge1-3\alpha/2-5\alpha^2+(25/2)\alpha^4$. Since $5\alpha^2\le\alpha/2$, this is at least $1-2\alpha$. This proves the additional claim. [F2, F3, given, algebra] ∎
