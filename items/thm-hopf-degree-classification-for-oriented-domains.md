---
id: thm-hopf-degree-classification-for-oriented-domains
kind: theorem
title: The Hopf degree theorem for oriented domains
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
- thm-oriented-zero-dimensional-framed-bordism-is-the-integers
- lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree
- lem-every-integer-degree-is-realized-by-a-map-to-the-sphere
- lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps
- thm-degree-is-invariant-under-proper-smooth-homotopy
- thm-morse-sard-for-smooth-manifolds
- cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
- thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-homotopy-relative-and-path-homotopy
- def-oriented-smooth-manifold-and-oriented-chart
- def-compact-space
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
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i) together with Theorem 2.35 and Lemmas 2.44-2.46, printed pp.22-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: 'Section 7, concluding Hopf discussion, the Theorem of Hopf: if $M$ is connected, oriented and boundaryless, two maps $M\to S^m$ are smoothly homotopic if and only if they have the same degree, printed pp.50-51'
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, the Hopf Degree Theorem, printed p.146
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a nonempty closed connected oriented smooth
$m$-manifold, $m\ge1$. (i) Two smooth maps $f,g:M\to S^m$ are smoothly
homotopic if and only if $\deg(f)=\deg(g)$; equivalently degree induces a
bijection from smooth homotopy classes to $\mathbb Z$. (ii) Every integer
occurs as $\deg(f)$ for some smooth $f:M\to S^m$. (iii) Consequently degree
induces a bijection from the set $[M,S^m]$ of free homotopy classes of
continuous maps to $\mathbb Z$: two continuous maps $M\to S^m$ are homotopic
if and only if they have the same degree. Here the degree of a continuous map is the degree of any homotopic smooth representative; part (i) and the approximation theorems make this independent of the representative.

## Facts & Assumptions

**Given:** A nonempty closed connected oriented smooth $m$-manifold $M$ with $m\ge1$ and the compact-support degree of [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]] ([[def-oriented-smooth-manifold-and-oriented-chart]], [[def-compact-space]], [[def-countable-choice]]).

[F1] The compact-support degree is invariant under proper smooth homotopy, and any homotopy $M\times I\to S^m$ is proper because $M$ is compact ([[thm-degree-is-invariant-under-proper-smooth-homotopy]], [[def-homotopy-relative-and-path-homotopy]]).

[F2] For a smooth map $f:M\to S^m$, a regular value $y$ with a positive basis $b$ and the framed regular preimage $(f^{-1}(y),f_*b)$, the signed count of the framed preimage equals $\deg(f)$ ([[lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree]], [[def-orientation-of-a-finite-dimensional-real-vector-space]], [[def-countable-choice]]).

[F3] The signed count is a complete invariant of framed cobordism classes of closed framed $0$-manifolds in $M$: it is a bijection onto $\mathbb Z$ and framed null-cobordism is exactly vanishing signed count ([[thm-oriented-zero-dimensional-framed-bordism-is-the-integers]]).

[F4] If two smooth maps have framed cobordant regular preimages at some regular values and positive bases, then they are smoothly homotopic ([[lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps]]).

[F5] Every integer is realized as the degree of a smooth map $M\to S^m$; regular values exist by Sard's theorem; every continuous map is homotopic to a smooth map and continuously homotopic smooth maps are smoothly homotopic ([[lem-every-integer-degree-is-realized-by-a-map-to-the-sphere]], [[thm-morse-sard-for-smooth-manifolds]], [[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]], [[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]], [[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 (Forward direction.) If $f$ and $g$ are smoothly homotopic then their degrees agree by [F1], since the homotopy is proper. [F1, given, algebra]

1.2 (Converse.) Suppose $\deg(f)=\deg(g)$. By [F5] choose regular values $y$ of $f$ and $y'$ of $g$ and positive bases there; by [F2] the signed counts of the framed preimages $(f^{-1}(y),f_*b)$ and $(g^{-1}(y'),g_*b')$ equal $\deg(f)$ and $\deg(g)$, hence are equal, and by [F3] the two framed preimages are framed cobordant. [F2, F3, F5]

2.1 Applying [F4] to the framed cobordism of step 1.2 gives a smooth homotopy $f\simeq g$, which proves (i) for smooth maps; (ii) is [F5], and (iii) follows because [F5] lets every continuous map be replaced by a homotopic smooth map and every continuous homotopy by a smooth one, after which (i) applies. No homotopy invariance is used in the converse: that direction is the framed-cobordism classification together with the inverse Pontryagin-Thom construction. [F4, F5, step 1.1, step 1.2] ∎
