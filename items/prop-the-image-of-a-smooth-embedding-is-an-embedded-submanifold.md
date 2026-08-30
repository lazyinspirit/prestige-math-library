---
id: prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold
kind: proposition
title: "The image of a smooth embedding is an embedded submanifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-embedding, def-embedded-submanifold-and-slice-chart, cor-local-normal-form-for-immersions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embeddings"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.1"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M^m\to N^n$ be a smooth embedding. Then $F(M)\subseteq N$ is an embedded
$m$-submanifold, and the corestriction $F:M\to F(M)$ is a diffeomorphism.

## Facts & Assumptions

**Given:** A smooth embedding $F:M^m\to N^n$.

[F1] A smooth embedding is an injective immersion and a homeomorphism onto its
image with the subspace topology ([[def-smooth-embedding]]).

[F2] Embedded submanifolds are described by slice charts
([[def-embedded-submanifold-and-slice-chart]]).

[L1] Near any point, an immersion has coordinates of the form $u\mapsto(u,0)$
([[cor-local-normal-form-for-immersions]]).

## Proof
**Proof technique:** direct.

1.1 Fix $p\in M$. By [F1] the map $F$ is an immersion, so [L1] gives charts near $p$ and $F(p)$ in which $F$ becomes $u\mapsto(u,0)$. [F1, L1, given]

2.1 In those target coordinates, the image of a small neighbourhood of $p$ is exactly the coordinate slice $\mathbb R^m\times\{0\}$. Because [F1] also says that $F$ is a homeomorphism onto its image, we may shrink the neighbourhood in the target so that no other points of $M$ map into that same slice patch. Hence the image is locally a slice chart in the sense of [F2]. [F1, F2, step 1.1]

3.1 Since every point of $F(M)$ has such a slice neighbourhood, $F(M)$ is an embedded $m$-submanifold. The corestriction $F:M\to F(M)$ is already a homeomorphism by [F1], and in the local coordinates of step 1.1 it is the identity on the $\mathbb R^m$ factor, so it is a diffeomorphism. [F1, step 2.1] ∎