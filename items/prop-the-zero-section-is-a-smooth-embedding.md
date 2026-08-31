---
id: prop-the-zero-section-is-a-smooth-embedding
kind: proposition
title: "The zero section is a smooth embedding"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-smooth-embedding, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

For a smooth vector bundle $\pi:E\to M$, the zero section
$0_M:M\to E$, $p\mapsto 0_p$, is a smooth embedding.

## Facts & Assumptions

**Given:** A smooth vector bundle $\pi:E\to M$.

[L1] In a vector bundle chart, the bundle is identified over the identity with
$U\times\mathbb R^r$ ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[L2] A smooth embedding is an injective immersion which is a homeomorphism onto
its image with the subspace topology ([[def-smooth-embedding]]).

## Proof

**Proof technique:** direct.

1.1 In a local trivialization $\Phi:\pi^{-1}(U)\to U\times\mathbb R^r$, the zero section is represented by $p\mapsto(p,0)$. This map is smooth, injective, and its image is the slice $U\times\{0\}$. [L1, given]
2.1 The coordinate slice $U\times\{0\}$ is an embedded submanifold of the product, so $p\mapsto(p,0)$ is an immersion and a homeomorphism onto its image. Transporting this property through the bundle charts proves that $0_M$ is a smooth embedding by [L2]. [L2, step 1.1, algebra] ∎