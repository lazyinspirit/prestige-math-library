---
id: prop-smoothness-into-an-embedded-submanifold-is-an-initial-property
kind: proposition
title: "Smoothness into an embedded submanifold is an initial property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, lem-slice-chart-restrictions-form-a-smooth-atlas, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Restricting Maps to Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $S\subseteq M$ be an embedded submanifold with inclusion $i:S\hookrightarrow
M$, and let $G:N\to S$ be a map from a smooth manifold $N$. Then $G$ is smooth
if and only if $i\circ G:N\to M$ is smooth.

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M$, its inclusion $i$, and a map
$G:N\to S$.

[F1] Embedded submanifolds are locally cut out by slice charts
([[def-embedded-submanifold-and-slice-chart]]).

[L1] The restricted slice charts define the smooth structure on $S$
([[lem-slice-chart-restrictions-form-a-smooth-atlas]]).

[L2] Ambient charts are diffeomorphisms onto open Euclidean sets
([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof
**Proof technique:** direct.

1.1 Assume first that $G$ is smooth. Choose a chart $\theta$ on $N$ and a slice chart $\varphi$ on $M$ around $G(x)\in S$. In the corresponding restricted chart on $S$ from [L1], the representative of $G$ has values in $\mathbb R^k$, and the representative of $i\circ G$ is obtained by appending $m-k$ zero coordinates. Hence $i\circ G$ is smooth. [F1, L1, L2, given]

1.2 Conversely, assume $i\circ G$ is smooth. In a slice chart on $M$, the image of $S$ is $\mathbb R^k\times\{0\}$ by [F1]. Therefore the representative of $i\circ G$ has last $m-k$ coordinates identically zero, and its first $k$ coordinates are exactly the representative of $G$ in the restricted slice chart from [L1]. Those first $k$ coordinates are smooth, so $G$ is smooth. [F1, L1, L2, given]

2.1 Steps 1.1 and 1.2 prove both directions. [step 1.1, step 1.2] ∎
