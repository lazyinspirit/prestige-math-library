---
id: thm-regular-ideal-tetrahedron-volume
kind: theorem
title: "Volume of the regular ideal tetrahedron"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ideal-tetrahedron-shape-and-cusp-holonomy
  - lem-ideal-orthoscheme-volume
  - lem-ideal-tetrahedron-shape-parameter-relations
  - lem-lobachevsky-fourier-expansion-and-pi-third-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§9.1, Theorem 9.3 and the regular tetrahedron example, printed pp.174–181"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/7.pdf"
      locator: "Chapter 7, ideal tetrahedron volume formula"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Every regular ideal tetrahedron in hyperbolic three-space has volume
$$v_3=3\Lambda(\pi/3) =\frac{3\sqrt3}{4}\sum_{k=0}^{\infty} \left(\frac1{(3k+1)^2}-\frac1{(3k+2)^2}\right).$$

## Statement references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, Theorem 9.3 and Example 9.4](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

## Facts & Assumptions

**Given:** A regular positively oriented ideal tetrahedron in $\mathbb H^3$.

[F1] [[def-ideal-tetrahedron-shape-and-cusp-holonomy]] specifies the upper half-space model and normalized vertices $0,1,\infty,z$ with $\operatorname{Im}z>0$.

[F2] [[lem-ideal-tetrahedron-shape-parameter-relations]] proves that the parameter arguments are the dihedral angles and that $z=\omega=e^{i\pi/3}$ gives all six angles $\pi/3$, hence a regular tetrahedron.

[F3] [[lem-ideal-orthoscheme-volume]] gives $\operatorname{Vol}(\mathcal O_\zeta)=\frac12\Lambda(\zeta)$ for the explicit region $\mathcal O_\zeta$ in upper half-space.

[F4] [[lem-lobachevsky-fourier-expansion-and-pi-third-bound]] gives the absolutely convergent series for $\Lambda(\pi/3)$.

## Proof

1.1 Apply a Euclidean similarity of the boundary plane, extended by the same scaling of height, sending the circumcircle of the three finite ideal vertices to the unit circle centered at $0$; this upper half-space isometry fixes $\infty$. The three vertices become points $p,q,r$ on that circle and remain equilateral. Hence $(0,0)$ lies in the interior of their triangle, so the vertical ray from $(0,0,1)$ to $\infty$ lies inside the tetrahedron. [F1, F2, given, construct]

2.1 On the unit-hemisphere face, draw the perpendicular arcs from $(0,0,1)$ to its three edges and the arcs from $(0,0,1)$ to $p,q,r$. Cone the six resulting sectors to $\infty$. Because the vertical ray lies in the tetrahedron, the six simplices have disjoint interiors and cover the tetrahedron; their common faces have three-dimensional volume zero. Each simplex has two finite vertices and two ideal vertices. Its three right dihedral angles come from the perpendicular cuts; among its other angles, two equal the corresponding original tetrahedron edge angle $\zeta$ and the third is $\pi/2-\zeta$. The tetrahedron is regular, so [F2] gives $\zeta=\pi/3$ for each of the six simplices. [F2, given, step 1.1, construct]

3.1 Normalize one simplex by a hyperbolic isometry so its ideal vertices are $\infty$ and $(\cos\zeta,\sin\zeta)$ and one finite vertex is $(0,0,1)$. The three right angles place the projected right-angle vertex at $(\cos\zeta,0)$: the two legs are horizontal and vertical. The angle at the origin is $\zeta$, so the other ideal point has coordinates $(\cos\zeta,\sin\zeta)$. The projected triangle is the intersection of the half-planes $x\ge0$, $y\ge0$, $x\le\cos\zeta$ and $y\le x\tan\zeta$. The unit hemisphere through $(0,0,1)$ has equation $x^2+y^2+t^2=1$, and the tetrahedral side is above it. Thus the simplex is exactly $\mathcal O_\zeta$ from [F3] with $\zeta=\pi/3$. [F3, step 2.1, construct]

4.1 By [F3], each of the six simplices has volume $\frac12\Lambda(\pi/3)$. Their interiors are disjoint and their union is the tetrahedron up to faces of volume zero, so additivity gives $\operatorname{Vol}=6\cdot\frac12\Lambda(\pi/3)=3\Lambda(\pi/3)$. Substitution of the absolutely convergent series in [F4] gives the second displayed expression; absolute convergence follows by comparison with $\sum_{n\ge1}n^{-2}$. [F3, F4, step 2.1, step 3.1, algebra] ∎

## Sources

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §9.1](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)
