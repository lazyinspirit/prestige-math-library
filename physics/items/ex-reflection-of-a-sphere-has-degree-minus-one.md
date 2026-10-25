---
id: ex-reflection-of-a-sphere-has-degree-minus-one
kind: example
title: A sphere reflection has degree minus one
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 10
deps:
- cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one
- cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree
- def-euclidean-spheres-and-closed-balls
- def-induced-boundary-orientation
- prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, the Hopf Degree Theorem applied to reflections, printed pp.146-147
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 5, the reflection example, printed p.30; Section 7, concluding Hopf classification, printed pp.50-51
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i), printed p.23, specialized to the degree-minus-one class
---
## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $m\ge1$ let $R(x_0,x_1,\dots,x_m)=(-x_0,x_1,\dots,x_m)$ be the coordinate
reflection of $S^m$, oriented by the outward-normal-first boundary orientation
of $S^m=\partial D^{m+1}$. Then $R$ is a smooth diffeomorphism of $S^m$
reversing orientation, so $\deg(R)=-1$; by the sphere classification every
self-map of $S^m$ of degree $-1$ is homotopic to $R$, and by the
homotopy-equivalence corollary a self-map of $S^m$ of degree $-1$ is a
homotopy equivalence exactly when it is homotopic to a reflection.

## Facts & Assumptions

[L1] The ambient reflection has determinant $-1$ and sends the outward normal $x$ at $x\in S^m$ to the outward normal $R(x)$. Consequently it reverses the tangent orientation defined by placing that normal first; it is a smooth involution, hence an orientation-reversing diffeomorphism. The general diffeomorphism-degree theorem gives degree $-1$. ([[def-induced-boundary-orientation]], [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

**Given:** $\mathrm{AC}_\omega$, an integer $m\ge1$, the sphere $S^m=\partial D^{m+1}$ with its outward-normal-first orientation and the coordinate reflection $R$ ([[def-euclidean-spheres-and-closed-balls]], the local calculation, [[def-induced-boundary-orientation]]).

[F1] The coordinate reflection restricts to an orientation-reversing smooth diffeomorphism of $S^m$ and has degree $-1$ (the local calculation, the local calculation).

[F2] An orientation-reversing diffeomorphism between nonempty connected oriented boundaryless manifolds has degree $-1$ ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

[F3] Sphere self-maps are homotopic exactly when their degrees agree, and every integer occurs as a degree ([[cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree]]).

[F4] A self-map of $S^m$ is a homotopy equivalence exactly when its degree is $\pm1$ ([[cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one]]).

## Verification

**Proof technique:** direct.

1.1 The reflection $R$ is the restriction of the invertible linear map of $\mathbb R^{m+1}$ with determinant $-1$ that preserves the unit sphere, hence restricts to a smooth diffeomorphism of $S^m$; the linear reflection reverses the ambient orientation and the outward-normal-first orientation of $S^m$ is transported from the ambient orientation, so $R$ reverses the orientation of $S^m$, and $\deg(R)=-1$ both by the direct reflection computation of [F1] and by the diffeomorphism criterion of [F2]. [L1, F1, F2, given]

2.1 Let $f:S^m\to S^m$ have degree $-1$. By [F3] applied to $f$ and $R$, whose degrees are equal, $f$ is homotopic to $R$; conversely every map homotopic to $R$ has degree $-1$ by [F3]. By [F4] every self-map of degree $-1$ is a homotopy equivalence, and by [F3] its homotopy class is that of the reflection, so a map of degree $-1$ is a homotopy equivalence precisely when it lies in the homotopy class of a reflection. [F3, F4, step 1.1]

3.1 This identifies the degree-$-1$ class, represented by a reflection, and shows the consistency of the reflection sign with the general classification; no new invariant or orientation convention is introduced beyond the outward-normal-first orientation of the sphere. [F1, F3, step 2.1] ∎
