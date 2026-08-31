---
id: prop-a-vector-bundle-projection-is-a-surjective-submersion
kind: proposition
title: "A vector bundle projection is a surjective submersion"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-immersion-submersion-and-constant-rank-map, thm-canonical-tangent-and-cotangent-splittings-for-products, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

If $\pi:E\to M$ is a smooth vector bundle, then $\pi$ is a surjective
submersion.

## Facts & Assumptions

**Given:** A smooth vector bundle $\pi:E\to M$.

[L1] A smooth vector bundle is, in particular, a smooth fibre bundle with local
trivializations over the identity on the base
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[L2] A smooth map is a submersion exactly when its differential is surjective at
every point ([[def-immersion-submersion-and-constant-rank-map]]).

## Proof

**Proof technique:** direct.

1.1 Surjectivity is part of the definition of a smooth fibre bundle, so $\pi$ is surjective. Fix $e\in E$ with $p=\pi(e)$, and choose a local trivialization $\Phi:\pi^{-1}(U)\to U\times\mathbb R^r$ around $e$. In this chart, $\pi$ becomes the product projection $\operatorname{pr}_1:U\times\mathbb R^r\to U$. [L1, given]

2.1 In product coordinates the differential of $\operatorname{pr}_1$ is the coordinate projection $T_pU\oplus T_v\mathbb R^r\to T_pU$, which is surjective. Therefore $d\pi_e$ is surjective, and since $e$ was arbitrary, $\pi$ is a submersion by [L2]. [L2, step 1.1, algebra] ∎