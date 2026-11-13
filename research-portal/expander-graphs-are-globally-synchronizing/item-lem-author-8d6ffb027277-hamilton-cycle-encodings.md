---
title: Hamiltonian cycles as finite cyclic-order events
status: draft
research_item: lem-author-8d6ffb027277-hamilton-cycle-encodings
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)
- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)
- [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)


## Statement

Let $n\ge3$ and let $G$ be a simple graph on $[n]$. A Hamiltonian cycle is an edge set $\{\{v_1,v_2\},\ldots,\{v_{n-1},v_n\},\{v_n,v_1\}\}$ contained in $E(G)$, where $(v_1,\ldots,v_n)$ lists every vertex once. Distinct such edge sets are counted once, regardless of starting point or direction. There are $n!/(2n)$ candidate Hamiltonian cycles on $[n]$. 

More generally, let $(\Omega,w)$ be any finite probability space and let $\omega\mapsto G_\omega$ assign a simple graph on $[n]$ to every outcome. For each candidate Hamiltonian cycle $C$, define $A_C=\{\omega\in\Omega:C\subseteq E(G_\omega)\}$. The event $H$ that the sampled graph contains at least one Hamiltonian cycle is the finite union $H=\bigcup_C A_C$, with probability $\mathbb P(H)=\sum_{\omega\in H}w(\omega)$.

## Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) specifies labelled simple graphs as sets of unordered two-element edges on the labelled vertex set.

[F2] [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks) identifies simple graphs with symmetric zero-diagonal adjacency matrices.

[F3] [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event) defines a finite probability space $(\Omega,w)$ by nonnegative outcome weights summing to one; every subset $A\subseteq\Omega$ is an event with probability $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$.

[F4] [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial) defines $0!=1$ and $k!=k(k-1)!$ for positive integers $k$; equivalently, $n!$ is the product of the first $n$ positive integers.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 An ordered listing of the vertices produces the displayed edge set, with distinct endpoints at every edge. Each vertex has exactly its predecessor and successor as neighbors in this edge set. Conversely, fixing a vertex on this cycle, its next vertex can be chosen in exactly two ways; every later vertex is then forced by continuing along the edge that was not just used. Thus each edge set has exactly $n$ choices of starting point and two choices of direction, including when $n=3$. [F1, F2, construct]

2.1 Successive choices give $n!$ ordered listings. The disjoint classes in step 1.1 each have size $2n$, so there are $n!/(2n)$ candidate edge sets. For the specified assignment $\omega\mapsto G_\omega$, each $A_C$ is a subset of $\Omega$, hence an event by [F3]. An outcome belongs to $\bigcup_C A_C$ exactly when its graph $G_\omega$ contains a Hamiltonian cycle, so this finite union is $H$. By [F3], its probability is $\sum_{\omega\in H}w(\omega)$. [F1, F3, F4, step 1.1, algebra] ∎
