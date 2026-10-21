---
id: lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup
kind: lemma
title: "Closed hyperbolic three-manifold groups contain no Z-squared subgroup"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-pared-hyperbolic-structures-and-volume
  - def-countable-choice
  - thm-cartan-hadamard
  - ex-jacobi-fields-in-constant-sectional-curvature
  - def-universal-covering-space
  - def-deck-transformation-and-deck-group
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-riemannian-isometry-and-local-isometry
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-path-lifting-for-covering-maps
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Krishnendu Gongopadhyay and Ravi S. Kulkarni, z-Classes of Isometries of the Hyperbolic Space"
      url: "https://arxiv.org/pdf/0707.0487"
      locator: '§1 classification and Appendix A.1, printed pp.1–2 and 12–17, Möbius model and isometries of $\mathbb H^3$'
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "§24.1, Proposition 24.1.1 and Corollary 24.1.2, printed pp.174–175; §24.3, Theorem 24.3.1 and proof, printed pp.178–179"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. If $M$ is a closed connected orientable three-manifold with a complete Riemannian metric of constant sectional curvature $-1$, then its fundamental group contains no subgroup isomorphic to $\mathbb Z^2$.

## Statement references

[Gongopadhyay and Kulkarni, *z-Classes of Isometries of the Hyperbolic Space*, §1 and Appendix A.1](https://arxiv.org/pdf/0707.0487)

[Ved Datar, *Lectures on Riemannian Geometry*, §24.1 and §24.3](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf)

## Facts & Assumptions

**Given:** A closed connected three-manifold $M$ with a complete metric of constant sectional curvature $-1$ and the inherited $\mathrm{AC}_\omega$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ selects from every countable family of nonempty sets.

[F1] [[def-pared-hyperbolic-structures-and-volume]]: a hyperbolic structure is a curvature $-1$ metric described by charts into $\mathbb H^3$.

[F2] [[thm-cartan-hadamard]]: the complete simply connected universal cover of a connected complete manifold with $K\le0$ is identified with its tangent space by the exponential map.

[F3] [[ex-jacobi-fields-in-constant-sectional-curvature]]: along a unit-speed geodesic in curvature $-1$, a normal Jacobi field with $J(0)=0$ and $D_tJ(0)=w$ is $J(t)=\sinh(t)P_t w$, where $P_t$ is parallel transport.

[F4] [[def-universal-covering-space]] and [[def-deck-transformation-and-deck-group]]: the universal cover is a covering and its deck group acts freely; [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] identifies that group with $\pi_1(M)$. The lifted metric makes the covering a local isometry by [[def-riemannian-isometry-and-local-isometry]], local isometries send geodesics to geodesics by [[lem-local-isometries-send-geodesics-to-geodesics]], and covering paths lift by [[thm-path-lifting-for-covering-maps]].

[F5] Gongopadhyay and Kulkarni, *z-Classes of Isometries of the Hyperbolic Space*, §1 and Appendix A.1: orientation-preserving isometries of $\mathbb H^3$ are Möbius transformations of the boundary sphere, with hyperbolic/parabolic/elliptic types identified by their fixed-point behavior.

## Proof

1.1 The lift of the complete metric to $\widetilde M$ is complete: every geodesic upstairs projects by [F4] to a geodesic downstairs, which extends for all time; path lifting extends the original geodesic upstairs, and a local isometry preserves its geodesic equation. [given, F4, construct]

2.1 By [F2], the complete simply connected universal cover $\widetilde M$ is diffeomorphic to $\mathbb R^3$. Along each radial unit-speed geodesic from a fixed point, [F3] says the differential of the exponential map multiplies angular vectors by $\sinh r$, while its radial differential preserves length. Thus in polar coordinates the pulled-back metric is $dr^2+\sinh^2(r)g_{S^2}$, the standard hyperbolic metric; the exponential map identifies $\widetilde M$ isometrically with $\mathbb H^3$. By [F4], $\Gamma=\pi_1(M)$ acts freely and properly discontinuously by deck isometries; compactness of $M$ makes the action cocompact. [given, A1, F1, F2, F3, F4, step 1.1, construct]

3.1 Every nonidentity element of $\Gamma$ is loxodromic. A Möbius map $z\mapsto(az+b)/(cz+d)$ has fixed-point equation $cz^2+(d-a)z-b=0$ on the boundary sphere. If there are two distinct fixed points, conjugate them to $0,\infty$; the map then has form $z\mapsto \lambda z$. If $|\lambda|=1$ and $\lambda\ne1$, its extension fixes the axis joining $0$ to $\infty$, contrary to the free deck action [F4]. If $|\lambda|\ne1$, it preserves that axis and translates it nontrivially. If the fixed-point equation has a double root, conjugate it to $\infty$; the map has form $z\mapsto az+b$, and its only fixed point is $\infty$ precisely when $a=1$ and $b\ne0$. This is parabolic: the upper-half-space distance formula gives $\cosh d((0,t),(b,t))=1+|b|^2/(2t^2)$, so its displacement tends to zero as $t\to\infty$. To exclude such a parabolic in a cocompact deck group, choose compact $K$ with $\Gamma K=\mathbb H^3$ and points $y_n$ whose displacement tends to zero. Choose $h_n\in\Gamma$ so $x_n=h_ny_n\in K$ and put $\gamma_n=h_n\gamma h_n^{-1}$. The points $x_n$ and $\gamma_nx_n$ lie in a fixed compact neighborhood of $K$, so proper discontinuity permits only finitely many $\gamma_n$. Along a subsequence this element is constant and $x_n$ converges in $K$; the displacement limit makes it fix the limit point, contradicting freeness. Hence every nonidentity element has two fixed endpoints and preserves a unique axis with nonzero translation. [F4, F5, step 2.1, given, algebra, contradiction]

4.1 Fix $\gamma\ne1$ and let $C_\Gamma(\gamma)=\{\delta\in\Gamma:\delta\gamma=\gamma\delta\}$. Commutation preserves the attracting and repelling endpoints of $\gamma$ individually, hence preserves its axis and acts there by a signed translation. The signed translation map $\tau:C_\Gamma(\gamma)\to\mathbb R$ is a homomorphism. It is injective: an element in its kernel fixes every point on the axis, and [F4] makes it the identity. Its image is discrete: if infinitely many elements had bounded signed translations, their images of a fixed point on the axis would lie in a compact segment, contradicting proper discontinuity in [F4]. Every discrete subgroup of $(\mathbb R,+)$ is cyclic, so $C_\Gamma(\gamma)$ is cyclic. [F4, F5, step 3.1, construct]

5.1 If $H\le\Gamma$ were isomorphic to $\mathbb Z^2$, choose $\gamma\in H\setminus\{1\}$. Since $H$ is abelian, $H\subseteq C_\Gamma(\gamma)$, contradicting step 4.1 because a cyclic group has no subgroup isomorphic to $\mathbb Z^2$. Therefore no such $H$ exists. [given, step 4.1, choose, algebra] ∎

## Sources

[Gongopadhyay and Kulkarni, *z-Classes of Isometries of the Hyperbolic Space*, §1 and Appendix A.1](https://arxiv.org/pdf/0707.0487)

[Ved Datar, *Lectures on Riemannian Geometry*, §24.1 and §24.3](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf)
