---
id: lem-every-oriented-link-admits-a-regular-projection
kind: lemma
title: "Existence of regular projections"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-link-in-s-three-and-ambient-isotopy, def-regular-oriented-link-diagram,
       def-secant-and-tangent-direction-maps-of-an-euclidean-embedding,
       thm-morse-sard-for-smooth-manifolds, def-countable-choice,
       thm-transverse-preimage-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3"
      url: "https://arxiv.org/pdf/2406.18203v1"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every oriented link $L$ contained in
$\mathbb R^3$, the directions $u\in S^2$ for which the orthogonal projection
$\pi_u$ is regular are dense in $S^2$. Every such projection has finitely
many double points.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth embedding $f:C\to\mathbb R^3$ of a finite disjoint union of circles.

[F1] A regular projection is an immersion with only finitely many transverse double points and no triple points ([[def-regular-oriented-link-diagram]]).

[F2] Write $\sigma(x,y)=(f(y)-f(x))/|f(y)-f(x)|$ off the diagonal, and use the unit tangent directions of $f$ ([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]]).

[F3] Under countable choice the critical values of a smooth map are null ([[thm-morse-sard-for-smooth-manifolds]]). In particular a smooth map from a manifold of dimension less than two to $S^2$ has null image.

[F4] A transverse preimage of a codimension-two submanifold has codimension two ([[thm-transverse-preimage-theorem]]).

## Proof

**Proof technique:** direct.

1.1 **Tangencies and double points.** The empty link has every direction regular, so assume $C\ne\varnothing$. Projection fails to be immersive exactly when $u$ is parallel to a tangent, not orthogonal to it. Both signed unit tangent images are null by [F3], since their sources are finite unions of circles. At a secant parallel to $u$, the differential of $\sigma$ has image spanned by the two projected tangent vectors: differentiating the normalized secant gives their multiples in $u^\perp$. Thus a nontransverse double point makes $u$ or $-u$ a critical value of $\sigma$. Those critical values and their antipodes are null by [F3]. [F1, F2, F3, given, algebra]

2.1 **Genuine triple incidence.** On distinct triples define $s(x,y,z)=(\sigma(x,y),\sigma(x,z))\in S^2\times S^2$. Restrict to the open set where these two directions are not parallel to the tangents at $y,z$ and the projections of those tangents to their common direction plane are independent whenever the directions agree. At a point with $\sigma(x,y)=\sigma(x,z)=u$, the normal differential to the diagonal of $S^2\times S^2$ has the two independent columns $\pi_u f'(y)/|f(y)-f(x)|$ and $-\pi_u f'(z)/|f(z)-f(x)|$. Hence $s$ is transverse to that diagonal on this open set. Its preimage $T$ is a smooth one-dimensional manifold by [F4], and the direction map $T\to S^2$ has null image by [F3]. If a triple occurs for a direction not excluded in step 1.1, order its three points along their common line and take $x$ to be an extreme point. Then the two secants agree up to the same sign, and the projected tangents at $y,z$ are independent because that direction is a regular secant value for every pair. This triple therefore contributes a direction in the image of $T$ or its antipode. These two images are null. [F2, F3, F4, step 1.1, construct, algebra]

3.1 **Compactness away from the diagonal.** Outside the null sets of steps 1.1–2.1 the projection is immersive, all double points are transverse, and there are no triples. Its double-point pairs cannot accumulate on the diagonal: near each source point one coordinate of the projected derivative is nonzero, so the projection is injective on a small arc; finitely many such arcs give a neighbourhood of the diagonal containing no double-point pair. The pairs consequently form a closed subset of a compact subset of $C\times C$ away from the diagonal. Transversality makes them isolated, so there are finitely many. The complement of a null set in $S^2$ is dense, proving the assertion. Countable choice is used only in [F3]. [F1, F3, step 1.1, step 2.1, algebra] ∎
