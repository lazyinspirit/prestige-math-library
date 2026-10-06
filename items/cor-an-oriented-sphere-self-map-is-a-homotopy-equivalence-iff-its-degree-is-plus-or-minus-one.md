---
id: cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one
kind: corollary
title: Sphere self-maps of degree $\pm1$ are exactly the homotopy equivalences
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence
- cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-euclidean-spheres-and-closed-balls
- def-homotopy-equivalence
- def-induced-boundary-orientation
- prop-degree-is-homotopy-invariant-and-multiplicative-under-composition
- prop-degree-is-multiplicative-under-composition
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
    locator: Chapter 3, Section 6, the Hopf Degree Theorem and its consequence for maps of degree $\pm1$, printed pp.146-147
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, the concluding Hopf classification, printed pp.50-51, specialized to the identity and reflection classes
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i) and its consequence for $\pm1$, printed p.23
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $m\ge1$, a continuous self-map $f:S^m\to S^m$ is a homotopy equivalence
if and only if $|\deg(f)|=1$.

## Facts & Assumptions

[L1] The ambient reflection has determinant $-1$ and sends the outward normal $x$ at $x\in S^m$ to the outward normal $R(x)$. Consequently it reverses the tangent orientation defined by placing that normal first; it is a smooth involution, hence an orientation-reversing diffeomorphism. The general diffeomorphism-degree theorem gives degree $-1$. ([[def-induced-boundary-orientation]], [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

**Given:** $\mathrm{AC}_\omega$, an integer $m\ge1$ and a continuous self-map $f:S^m\to S^m$ ([[def-euclidean-spheres-and-closed-balls]], [[def-homotopy-equivalence]]).

[F1] Sphere self-maps are homotopic exactly when their degrees agree, and every integer occurs as a degree ([[cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree]]).

[F2] Degree is multiplicative under composition of proper smooth maps between oriented closed manifolds and the identity has degree $1$; for continuous sphere self-maps, homotopic maps have equal degree and $\deg(g\circ h)=\deg(g)\deg(h)$ ([[prop-degree-is-multiplicative-under-composition]], [[prop-degree-is-homotopy-invariant-and-multiplicative-under-composition]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

[F3] The coordinate reflection $R:S^m\to S^m$ is an orientation-reversing diffeomorphism and has degree $-1$, and any orientation-reversing diffeomorphism between connected oriented boundaryless manifolds has degree $-1$ (the local calculation, [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

[F4] A map homotopic to a homotopy equivalence is a homotopy equivalence, and the identity is a homotopy equivalence ([[cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence]], [[def-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 (Necessity.) Suppose $f$ is a homotopy equivalence with homotopy inverse $g$. Then $g\circ f\simeq\operatorname{id}_{S^m}$, so by [F2] applied to the continuous maps, $\deg(g)\deg(f)=\deg(\operatorname{id})=1$ in $\mathbb Z$; hence $\deg(f)$ is a unit of $\mathbb Z$, that is $\deg(f)=\pm1$. [F2, F4, given]

1.2 (Degree $1$.) If $\deg(f)=1=\deg(\operatorname{id})$, then [F1] gives $f\simeq\operatorname{id}_{S^m}$, and since the identity is a homotopy equivalence, [F4] makes $f$ a homotopy equivalence. [F1, F4]

1.3 (Degree $-1$.) If $\deg(f)=-1$, then $\deg(f)=\deg(R)$ for the coordinate reflection $R$ of [F3], whose orientation reversal and degree are computed in [L1], so [F1] gives $f\simeq R$; the reflection is a diffeomorphism and hence a homotopy equivalence, so [F4] makes $f$ a homotopy equivalence. [L1, F1, F3, F4]

2.1 Steps 1.1, 1.2 and 1.3 prove both implications, so a continuous self-map of $S^m$ is a homotopy equivalence exactly when its degree is $\pm1$. [F1, F4, step 1.1, step 1.2, step 1.3] ∎
