---
id: lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy
kind: lemma
title: "A full-turn peripheral kernel fills as a smooth geodesic core"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
  - lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: 'Chapter 4, §4.5, smooth filling equation and the $2\pi$ meridional angle'
    - title: "Carlo Petronio and Joan Porti, Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem"
      url: "https://arxiv.org/pdf/math/9901045"
      locator: "§§1–2, peripheral holonomy and smooth versus cone filling equations"
verification:
  precheck: pending
---

## Statement

Let $N$ be the complement of finitely many disjoint open solid tori in a connected oriented three-manifold, and suppose its interior has a hyperbolic metric. Fix one boundary torus $T$ with primitive peripheral basis $(\mu,\lambda)$. Assume that a neighborhood of this end, after developing into $\mathbb H^3$, is isometric to a punctured radius-$\varepsilon$ tube about a geodesic axis, modulo a translation of length $L>0$ along that axis. Assume that $\lambda$ is the axial translation direction and that $\mu$ is the angular direction making one full turn of angle $2\pi$ about the axis; equivalently, its peripheral holonomy is the identity isometry with the full-turn lift. Then the hyperbolic metric extends smoothly over the ordinary Dehn filling along $\mu$, adding the axis quotient as the core geodesic of length $L$. The same conclusion holds simultaneously for any finite set of ends satisfying these conditions.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, §§1–2](https://arxiv.org/pdf/math/9901045)

## Facts & Assumptions

**Given:** The hyperbolic metric on the complement of the stated tubes, the peripheral basis on each selected torus, and the explicit developed tube model with meridional angle $2\pi$ and positive axial translation length.

[F1] [[def-multicusped-dehn-filling]]: ordinary Dehn filling attaches a solid torus whose meridian disk boundary is the specified primitive slope.

[F2] [[def-pared-hyperbolic-structures-and-volume]]: a hyperbolic metric has curvature $-1$ in local charts into $\mathbb H^3$.

[F3] [[lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy]]: edge products $1$ and angle sums $2\pi$ give a smooth hyperbolic metric away from ideal vertices; the cusp equations are additional conditions used to obtain completeness at those ends.

## Proof

1.1 In cylindrical coordinates $(r,\theta,z)$ about a geodesic in $\mathbb H^3$, the metric is $ds^2=dr^2+\sinh^2(r)\,d\theta^2+\cosh^2(r)\,dz^2$. The full-turn condition makes $\theta$ have period $2\pi$, while the axial translation identifies $z$ with $z+L$. Thus the developed tube quotient is $(0,\varepsilon)\times(\mathbb R/2\pi\mathbb Z)\times(\mathbb R/L\mathbb Z)$, and its meridian is exactly the $\theta$ circle representing $\mu$. [given, F2, construct]

2.1 Set $x=r\cos\theta$ and $y=r\sin\theta$. Then $dr^2+\sinh^2(r)d\theta^2=dx^2+dy^2+\frac{(\sinh^2r-r^2)}{r^4}(x\,dy-y\,dx)^2$. The coefficient has the convergent even-power expansion $1/3+O(r^2)$ at $r=0$, and $\cosh^2(r)$ is smooth in $x^2+y^2$. Hence the metric extends smoothly across $x=y=0$; the added set is the circle $\mathbb R/L\mathbb Z$ and is the core of a solid torus. The extended metric has curvature $-1$ on the dense punctured tube by [F2], so its smooth curvature tensor has curvature $-1$ on the core by continuity. [given, F2, step 1.1, algebra]

3.1 By [F1], attaching a solid torus with meridian $\mu$ is precisely the ordinary filling specified by the angular circle in step 1.1. The local extension in step 2.1 agrees with the original metric on the overlap, so it defines a smooth hyperbolic metric on the filled manifold. For finitely many ends the tube neighborhoods are disjoint, and the same local extension can be performed independently at each one. [F1, F3, step 1.1, step 2.1, construct] ∎

## Proof references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Petronio and Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, §§1–2](https://arxiv.org/pdf/math/9901045)
