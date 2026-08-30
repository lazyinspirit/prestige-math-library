---
id: cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable
kind: corollary
title: "A discrete embedded submanifold is locally closed and countable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, prop-second-countability-is-hereditary, def-second-countable-space, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $S$ be a discrete embedded submanifold of a smooth manifold $M$. Then every
point of $S$ has a neighbourhood $U$ in $M$ such that $S\cap U$ is closed in
$U$. Moreover $S$ is countable.

## Facts & Assumptions

**Given:** A discrete embedded submanifold $S\subseteq M$.

[F1] An embedded submanifold is locally a coordinate slice ([[def-embedded-submanifold-and-slice-chart]]).

[L1] A subspace of a second-countable space is second countable ([[prop-second-countability-is-hereditary]], [[def-second-countable-space]], [[def-subspace-topology-top]]).

## Proof
**Proof technique:** direct.

1.1 Because $S$ is discrete, its local dimension is $0$. Thus by [F1], around each point $p\in S$ there is a chart $U$ in which $S\cap U$ corresponds to $\mathbb R^0\times\{0\}$, that is, a single point. A singleton is closed in the chart domain, so $S\cap U$ is closed in $U$. [F1, given]

2.1 The manifold $M$ is second countable, hence so is its subspace $S$ by [L1]. Let $\mathcal B$ be a countable basis for $S$. Because $S$ is discrete, every singleton $\{x\}$ is open. Applying the basis property to the open set $\{x\}$ shows that some $B\in\mathcal B$ satisfies $x\in B\subseteq\{x\}$, hence $B=\{x\}$. Thus every singleton of $S$ is itself a member of the countable family $\mathcal B$, so $S$ is countable. [L1, step 1.1]

3.1 Therefore $S$ is locally closed and countable. [step 1.1, step 2.1] ∎
