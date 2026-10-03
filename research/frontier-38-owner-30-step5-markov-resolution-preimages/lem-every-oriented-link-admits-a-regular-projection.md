---
id: lem-every-oriented-link-admits-a-regular-projection
kind: lemma
title: "Existence of regular projections"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-link-in-s-three-and-ambient-isotopy, def-regular-oriented-link-diagram,
       def-secant-and-tangent-direction-maps-of-an-euclidean-embedding,
       thm-morse-sard-for-smooth-manifolds, def-countable-choice]
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
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1 and Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every oriented link $L$ contained in
$\mathbb R^3$ the set of unit vectors $u\in S^2$ for which the orthogonal
projection $\pi_u\colon\mathbb R^3\to u^\perp$ is a regular projection of $L$
is dense in $S^2$; in particular $L$ admits a regular projection, and for such
a projection the set of double points is finite.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an oriented link $L\colon C\to\mathbb R^3$ with $C$ a finite disjoint union of circles ([[def-oriented-link-in-s-three-and-ambient-isotopy]]), its secant direction map $\sigma$ and tangent direction map $\tau$ ([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]]), and the triple secant map $\sigma_3$ on $(C\times C\times C)\setminus\Delta_3$ defined by the same formula in the first two variables.

[F1] Regularity of the projection $\pi_u$ means: $\pi_u\circ L$ is an immersion, its only multiple points are finitely many transverse double points, and there are no triple points ([[def-regular-oriented-link-diagram]]).

[F2] The tangent direction map $\tau$ is defined on $TC\setminus 0_C$ with values in $S^2$ and is well defined because $L$ is an immersion; the secant direction map $\sigma$ is defined on $(C\times C)\setminus\Delta$ and is smooth ([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]]).

[F3] Assume $\mathrm{AC}_\omega$: the critical value set of a smooth map between smooth manifolds is a null subset of the target ([[thm-morse-sard-for-smooth-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 **The three bad sets.** For $u\in S^2$ the projection $\pi_u$ fails to be an immersion at $x\in C$ exactly when $u$ is orthogonal to the tangent line of $L$ at $x$, that is, when $u=\pm\tau(x,v)$ for a nonzero tangent vector; it has a non-transverse double point at $x\ne y$ with $\pi_u(L(x))=\pi_u(L(y))$ exactly when $u$ is a critical value of the secant map, because the two branches fail to cross transversely precisely when the projected tangent lines coincide; and it has a triple point at distinct $x,y,z$ exactly when $u=\pm\sigma_3(x,y,z)$. Hence the set of bad $u$ is contained in $\tau(T^1C)\cup\operatorname{Crit}(\sigma)\cup\sigma_3((C\times C\times C)\setminus\Delta_3)$, where $T^1C$ is the unit tangent circle bundle, a finite disjoint union of circles. [F1, F2, given, algebra]

1.2 **Each bad set is null.** The set $\tau(T^1C)$ is a finite union of images of circles under the smooth tangent direction map, hence a finite union of compact $1$-dimensional subsets of $S^2$ and therefore null. By [F3] the critical value set of the smooth map $\sigma$ is null. The source of $\sigma_3$ is a smooth $3$-manifold (a finite disjoint union of products of circles with the diagonal removed) and its target is the $2$-sphere, so every point of the source is a critical point by the rank estimate $\operatorname{rank}\le2<3$, and [F3] makes the whole image of $\sigma_3$ null. A finite union of null sets is null. [F2, F3, algebra]

2.1 **Density and finiteness.** The complement of a null set in $S^2$ is dense, so the set of good directions is dense and nonempty; for such a $u$ the projection is regular. The double-point set of a good projection is closed in the compact source and discrete: distinct double points are separated because the source is Hausdorff and the set is the preimage of a regular value under the proper induced map, so it is finite. This proves every claim; $\mathrm{AC}_\omega$ is used exactly in [F3]. ∎ [F1, F2, step 1.2, algebra]
