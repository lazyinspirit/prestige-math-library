---
id: fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology
kind: false-statement
title: "The intrinsic topology of an immersed submanifold need not be the subspace topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, def-immersed-submanifold, prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds, thm-a-regular-level-set-is-an-embedded-submanifold, lem-derivative-of-a-power, thm-algebra-of-derivatives]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersed Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

**False claim:** an immersed submanifold always carries the subspace topology of
its image in the ambient manifold.

## Facts & Assumptions

**Given:** The same componentwise inclusion $F:M\to\mathbb R^2$ from the
countable family of concentric circles used above.

[F1] An immersed submanifold is a manifold with an injective immersion into the
ambient manifold; its intrinsic topology is not defined to be the subspace
topology ([[def-immersed-submanifold]]).

[F2] Embedded submanifolds, by contrast, do use the subspace topology
([[def-embedded-submanifold-and-slice-chart]]).

[L1] The disjoint-union source is a smooth manifold and each circle is smooth
([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]],
[[thm-a-regular-level-set-is-an-embedded-submanifold]], [[lem-derivative-of-a-power]],
[[thm-algebra-of-derivatives]]).

## Refutation
**Proof technique:** direct.

1.1 By [L1], the source $M$ is a smooth one-manifold, and the map $F$ is an injective immersion componentwise. Hence $(M,F)$ is an immersed submanifold in the sense of [F1]. [F1, L1, given]

2.1 In the intrinsic topology of $M$, each circle component is open because $M$ is a disjoint union. In the subspace topology on $F(M)\subseteq\mathbb R^2$, the unit circle component is not open because every neighbourhood of one of its points meets infinitely many outer circles. Thus the two topologies differ. [F2, step 1.1]

3.1 Therefore an immersed submanifold need not carry the subspace topology of its image. [F1, step 1.1, step 2.1] ∎