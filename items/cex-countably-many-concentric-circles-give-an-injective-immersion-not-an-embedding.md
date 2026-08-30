---
id: cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding
kind: counterexample
title: "Countably many concentric circles give an injective immersion that is not an embedding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-every-injective-immersion-is-an-embedding, fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology, prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds, thm-a-regular-level-set-is-an-embedded-submanifold, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embeddings"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement refuted

Every injective immersion is an embedding, and every immersed submanifold
inherits the subspace topology of its image.

## Facts & Assumptions

**Given:** The disjoint union $M$ of one unit circle and the circles of radii
$1+1/n$ for $n\ge1$, with the componentwise inclusion $F:M\to\mathbb R^2$.

[F1] The two displayed claims are the false statements under discussion
([[fs-every-injective-immersion-is-an-embedding]],
[[fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology]]).

[L1] Countable disjoint unions of fixed-dimensional smooth manifolds are smooth
manifolds, and the circles here are smooth one-manifolds
([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]],
[[thm-a-regular-level-set-is-an-embedded-submanifold]], [[lem-derivative-of-a-power]],
[[thm-algebra-of-derivatives]]).

## Counterexample
**Proof technique:** direct.

1.1 By [L1], $M$ is a smooth manifold. The restriction of $F$ to each component is the ordinary circle inclusion, so $F$ is an injective immersion. [L1, given]

2.1 In the intrinsic topology of $M$, each component is open. In the subspace topology on $F(M)$, the unit circle component is not open because every neighbourhood of one of its points meets infinitely many outer circles. So $F:M\to F(M)$ is not a homeomorphism and the topologies do not agree. [step 1.1]

3.1 Therefore this single example simultaneously refutes both claims in [F1]. [F1, step 1.1, step 2.1] ∎
