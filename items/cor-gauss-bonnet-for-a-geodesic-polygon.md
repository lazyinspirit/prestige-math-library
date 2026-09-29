---
id: cor-gauss-bonnet-for-a-geodesic-polygon
kind: corollary
title: Gauss-Bonnet for a geodesic polygon
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-local-gauss-bonnet-for-an-arbitrary-disk-region
  - def-geodesic-of-an-affine-connection
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.3, printed pp. 165-167 (PDF pp. 181-183), specialization to geodesic sides."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20)."
---

## Statement

Assume the axiom of choice. Let $(M,g,J)$ be an oriented Riemannian surface and let $D\subseteq M$ be a
positively oriented compact regular disk region whose boundary is the cyclic
concatenation of finitely many regular $C^2$ geodesic segments of the interior
metric, with ordinary corners at the vertices and no other corners. Then, with
the signed exterior angles $\alpha_1,\dots,\alpha_m$ of the positively oriented
boundary,

$$\int_DK\,dA+\sum_{j=1}^m\alpha_j=2\pi .$$

## Facts & Assumptions

**Given:** Full AC through the local disk Gauss–Bonnet supplier ([[def-axiom-of-choice]]); A positively oriented compact regular disk region whose boundary consists of finitely many geodesic segments meeting at ordinary corners.

[F1] For every positively oriented compact regular disk region with finitely many ordinary corners, $\int_DK\,dA+\int_{\partial D}k_g\,ds+\sum_j\alpha_j=2\pi$ ([[thm-local-gauss-bonnet-for-an-arbitrary-disk-region]]).

[F2] Every side of the boundary admits a regular $C^2$ geodesic parametrization whose interior is affinely parametrized ([[def-geodesic-of-an-affine-connection]]).

[F3] The signed geodesic curvature is the scalar with covariant acceleration $A_\gamma=k_g\,JT$, so it vanishes wherever the covariant acceleration vanishes ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

## Proof

**Proof technique:** insert the vanishing geodesic curvature of the sides into the arbitrary-disk formula.

1.1 Each boundary side is a geodesic segment, so on its interior the covariant acceleration of its unit-speed parametrization vanishes by [F2], and therefore its signed geodesic curvature vanishes identically by [F3]. [F2, F3, given]

2.1 The boundary integral over the finitely many sides vanishes by step 1.1, so [F1] applied to $D$ reads $\int_DK\,dA+\sum_j\alpha_j=2\pi$. [F1, step 1.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3, printed pp. 165-167, contains the formula with the boundary curvature term; setting $k_g=0$ along geodesic sides gives the stated corollary. Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, gives the same formula. The vanishing of $k_g$ along geodesics is the library definition [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]] applied to [[def-geodesic-of-an-affine-connection]].
