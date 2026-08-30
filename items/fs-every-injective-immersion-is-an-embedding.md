---
id: fs-every-injective-immersion-is-an-embedding
kind: false-statement
title: "An injective immersion need not be an embedding"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-embedding, def-immersed-submanifold, prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds, thm-a-regular-level-set-is-an-embedded-submanifold, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embeddings"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

**False claim:** every injective immersion is an embedding.

## Facts & Assumptions

**Given:** The disjoint union $M$ of one unit circle and the circles of radii
$1+1/n$ for $n\ge1$, together with the componentwise inclusion $F:M\to\mathbb
R^2$.

[F1] A smooth embedding is an injective immersion that is a homeomorphism onto
its image with the subspace topology ([[def-smooth-embedding]]).

[F2] An immersed submanifold only requires an injective immersion; its
intrinsic topology need not be the subspace topology
([[def-immersed-submanifold]]).

[L1] Countable disjoint unions of fixed-dimensional smooth manifolds are smooth
manifolds, and each circle is a smooth embedded one-manifold
([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]],
[[thm-a-regular-level-set-is-an-embedded-submanifold]], [[lem-derivative-of-a-power]],
[[thm-algebra-of-derivatives]]).

## Refutation
**Proof technique:** direct.

1.1 By [L1], $M$ is a smooth one-manifold, and on each circle component the map $F$ is the usual inclusion into $\mathbb R^2$, hence an immersion. The images of different components are distinct circles, so $F$ is injective. [L1, given]

2.1 The image $F(M)$ is the union of the concentric circles. Every Euclidean neighbourhood of a point on the unit circle meets infinitely many outer circles, so the unit-circle component is not open in the subspace topology of $F(M)$. But that component is open in the disjoint-union topology of $M$. Therefore $F:M\to F(M)$ is not a homeomorphism. [F2, step 1.1]

3.1 Step 1.1 gives an injective immersion, while step 2.1 shows that the homeomorphism clause in [F1] fails. Hence $F$ is not an embedding, which refutes the claim. [F1, step 1.1, step 2.1] ∎