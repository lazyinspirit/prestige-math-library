---
id: "thm-the-derived-category-inherits-a-triangulated-structure"
kind: "theorem"
title: "The derived category inherits a triangulated structure"
deps: ["lem-localized-cone-triangles-satisfy-tr-one-through-tr-three", "lem-localized-cone-triangles-satisfy-the-octahedral-axiom", "def-exact-functor-between-triangulated-categories", "prop-cohomology-factors-through-the-derived-category", "thm-the-cone-long-exact-sequence", "lem-addition-of-roofs-makes-an-additive-localization"]
verification:
  audited: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05R1"
      title: "13.5.5–13.5.6, including all TR1–TR4 proof paragraphs"
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The derived category, with shift $[1]$ and distinguished triangles the isomorphic images of cone triangles, is triangulated. The localization functor $Q$ is exact. Every such triangle gives a long exact cohomology sequence $\cdots\to H^n(X)\to H^n(Y)\to H^n(Z)\to H^{n+1}(X)\to\cdots$.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$, the localization $Q:K(\mathcal A)\to D(\mathcal A)$ under the standing size convention, and the declared class of triangles isomorphic to localized cone triangles.

[F1] Localized cone triangles satisfy TR1–TR3, with descended shift ([[lem-localized-cone-triangles-satisfy-tr-one-through-tr-three]]).

[F2] Localized cone triangles satisfy the octahedral axiom ([[lem-localized-cone-triangles-satisfy-the-octahedral-axiom]]).

[F3] An exact functor is additive, has a specified shift isomorphism, and sends distinguished triangles to distinguished triangles ([[def-exact-functor-between-triangulated-categories]]).

[F4] Each $H^n:K(\mathcal A)\to\mathcal A$ factors uniquely through the derived localization ([[prop-cohomology-factors-through-the-derived-category]]).

[F5] Every cone triangle in the homotopy category carries the cone long exact homology sequence, and cochain reindexing gives the corresponding long exact cohomology sequence ([[thm-the-cone-long-exact-sequence]]).

[F6] The roof localization is additive, with bilinear composition and preservation of zero objects and finite biproducts ([[lem-addition-of-roofs-makes-an-additive-localization]]).

## Proof

1.1 The additive structure, shift, TR1, signed TR2 and TR3 have been established, including identity triangles and zero objects. TR4 has also been established. These are precisely the triangulated-category axioms. [F1, F2, F6]

2.1 The functor $Q$ is additive, its shift comparison is the identity in the roof model, and it takes every cone triangle to a distinguished triangle by definition. It is therefore exact. By [F4], the cohomology functors are defined on $D(\mathcal A)$, and on a localized cone triangle their maps are the maps in the cone long exact sequence [F5]. Transporting this sequence by a triangle isomorphism preserves exactness, proving the assertion for every distinguished triangle. [F1, F3, F4, F5, F6, algebra] ∎
