---
id: prop-every-smooth-manifold-admits-a-positive-smooth-density
title: "Existence of positive smooth densities"
kind: proposition
status: published
origin: pipeline
deps: ["def-density-bundle-and-smooth-density", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.37, p.430"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assuming $\mathrm{AC}_\omega$, every smooth manifold, with or without boundary, admits a smooth positive density.

## Facts & Assumptions

[F1] [[def-density-bundle-and-smooth-density]]: For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps, $$|dy|=|\det D_x y|\,|dx|.$$ A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and thm-vector-bundle-construction-from-a-smooth-cocycle therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by prop-one-densities-form-a-one-dimensional-vector-space. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.

[F2] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Choose a chart cover with a subordinate smooth partition $(\rho_i)$. In each chart take its positive coordinate density $\delta_i=|dx_i|$. The product $\rho_i\delta_i$ extends by zero outside its chart: its support is contained in that chart, so it vanishes on a neighborhood of every point outside. [F1, F2]

2.1 The locally finite sum $\delta=\sum_i\rho_i\delta_i$ is smooth. At each point at least one nonnegative weight is positive because their sum is one, and all the local densities evaluate positively on bases. Hence $\delta$ is positive. On a zero-manifold take the scalar one at each point; on the empty manifold positivity is vacuous. [F1, step 1.1] ∎
