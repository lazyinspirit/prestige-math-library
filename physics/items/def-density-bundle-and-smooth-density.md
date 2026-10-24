---
id: def-density-bundle-and-smooth-density
title: "Density bundle and smooth density fields"
kind: definition
status: published
origin: pipeline
deps: ["prop-one-densities-form-a-one-dimensional-vector-space", "thm-vector-bundle-construction-from-a-smooth-cocycle"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.36, pp.429–430; Nicolaescu Definition 3.4.1"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---
## Definition

For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps,
$$|dy|=|\det D_x y|\,|dx|.$$
A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and [[thm-vector-bundle-construction-from-a-smooth-cocycle]] therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by [[prop-one-densities-form-a-one-dimensional-vector-space]]. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.
