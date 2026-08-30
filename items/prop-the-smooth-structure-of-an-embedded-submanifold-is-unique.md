---
id: prop-the-smooth-structure-of-an-embedded-submanifold-is-unique
kind: proposition
title: "The smooth structure of an embedded submanifold is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-slice-chart-restrictions-form-a-smooth-atlas, def-smooth-embedding,
       def-embedded-submanifold-and-slice-chart,
       prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding,
       thm-smooth-inverse-function-theorem-on-manifolds]
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
    - title: "Will J. Merry, Differential Geometry, Proposition 6.7"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $S\subseteq M$ be an embedded $k$-submanifold. The smooth structure
obtained by restricting slice charts is the unique smooth $k$-manifold
structure on the underlying set $S$ for which the inclusion
$i:S\hookrightarrow M$ is a smooth embedding.

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M$.

[L1] The restricted slice charts define a smooth atlas on $S$ with the subspace
topology ([[lem-slice-chart-restrictions-form-a-smooth-atlas]]).

[F1] A smooth embedding is an injective immersion and a homeomorphism onto its
image with the subspace topology ([[def-smooth-embedding]]).

[F2] Embedded submanifolds are defined by slice charts
([[def-embedded-submanifold-and-slice-chart]]).

[L2] A smooth map between manifolds of the same dimension whose differential
is an isomorphism is a local diffeomorphism
([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L3] With the smooth structure from restricted slice charts, the inclusion
$i:S\hookrightarrow M$ is a smooth embedding
([[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], slice-chart restrictions give a smooth structure on $S$, and [L3] shows that its inclusion is a smooth embedding. Suppose $\mathcal T$ is another smooth $k$-manifold structure on the same set for which the inclusion $i:(S,\mathcal T)\hookrightarrow M$ is a smooth embedding. By [F1], $i$ is a homeomorphism onto $S$ with the same subspace topology and an immersion. [L1, L3, F1, given]

2.1 Fix $p\in S$ and a slice chart $\varphi:U\to\mathbb R^m$ around $p$. Choose a chart $\theta:W\to\mathbb R^k$ on $(S,\mathcal T)$ at $p$. Since $i$ is an immersion and its image lies in the slice $\mathbb R^k\times\{0\}$ from [F2], the differential of $\pi_k\circ\varphi\circ i\circ\theta^{-1}$ is an injective endomorphism of $\mathbb R^k$, hence an isomorphism. By [L2] this map is a local diffeomorphism. Thus the slice coordinates are smooth for $\mathcal T$, and conversely $\theta$ is smooth for the slice-chart structure. [F1, F2, L2, step 1.1]

3.1 Every chart of $\mathcal T$ is smoothly compatible with the restricted slice charts, so the identity map between $\mathcal T$ and the slice-chart structure is a diffeomorphism. Hence the two smooth structures coincide. [L1, step 2.1] ∎
