---
id: cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree
kind: corollary
title: Sphere self-maps are homotopic exactly when their degrees agree
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
- cor-euclidean-closed-balls-and-spheres-are-compact
- cor-euclidean-spheres-are-path-connected
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-euclidean-spheres-and-closed-balls
- def-induced-boundary-orientation
- def-smooth-manifold
- thm-a-regular-level-set-is-an-embedded-submanifold
- thm-hopf-degree-classification-for-oriented-domains
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, 'Two maps of a compact, connected, oriented $k$-manifold $X$ into $S^k$ are homotopic if and only if they have the same degree', printed p.146
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the Theorem of Hopf, printed pp.50-51
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i), printed p.23
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $m\ge1$, two continuous maps $S^m\to S^m$ are homotopic if and only if
they have the same degree; equivalently degree is a bijection from the free
homotopy classes $[S^m,S^m]$ to $\mathbb Z$.

## Facts & Assumptions

[L1] The unit sphere is the regular level $|x|^2=1$, with nonzero differential $2\langle x,\cdot\rangle$ and tangent space $x^\perp$. Its standard smooth structure is supplied by the regular-level theorem. The stereographic inverse charts are $u\mapsto(2u/(1+|u|^2),\pm(|u|^2-1)/(1+|u|^2))$, with the two omitted poles understood, and their transition is $u\mapsto u/|u|^2$; all expressions are smooth on their domains. The boundary orientation is defined by requiring $(x,v_1,\ldots,v_m)$ to be positive in $\mathbb R^{m+1}$. ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[def-induced-boundary-orientation]]).

**Given:** $\mathrm{AC}_\omega$, an integer $m\ge1$ and the unit sphere $S^m\subseteq\mathbb R^{m+1}$ with its standard smooth structure and its outward-normal-first orientation ([[def-euclidean-spheres-and-closed-balls]], the local calculation, the local calculation).

[F1] For $m\ge1$ the sphere $S^m$ is compact, path-connected and connected, and it is a closed connected oriented smooth $m$-manifold ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[cor-euclidean-spheres-are-path-connected]], the local calculation, [[def-smooth-manifold]]).

[F2] For a nonempty closed connected oriented smooth $m$-manifold $M$ with $m\ge1$, degree induces a bijection from free homotopy classes $[M,S^m]$ to $\mathbb Z$: two continuous maps are homotopic exactly when their degrees agree, and every integer is realized ([[thm-hopf-degree-classification-for-oriented-domains]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 The sphere $S^m$ is nonempty, since $(0,\ldots,0,1)\in S^m$, and by [F1] it is a closed connected oriented smooth $m$-manifold. Thus [F2] applies with $M=S^m$: two continuous maps $S^m\to S^m$ are homotopic if and only if they have equal degree, and degree induces a bijection from $[S^m,S^m]$ onto $\mathbb Z$. [L1, F1, F2, given]

2.1 Every integer is realized by [F2], and degree distinguishes the free homotopy classes by step 1.1. Thus degree is the asserted bijection. For continuous maps its definition is the representative-independent smooth degree specified in [F2]. The countable-choice hypothesis is inherited from that theorem. [F2, step 1.1] ∎
