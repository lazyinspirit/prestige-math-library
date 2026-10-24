---
id: thm-hopf-mod-two-degree-classification-for-nonorientable-domains
kind: theorem
title: The Hopf mod-two degree theorem for nonorientable domains
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
- thm-unoriented-zero-dimensional-bordism-is-mod-two
- lem-every-integer-degree-is-realized-by-a-map-to-the-sphere
- lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps
- def-mod-two-degree-of-a-map-to-a-sphere
- lem-mod-two-degree-is-well-defined-and-homotopy-invariant
- def-framed-regular-preimage-of-a-map-to-a-sphere
- cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
- thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
- thm-morse-sard-for-smooth-manifolds
- def-orientable-manifold
- def-homotopy-relative-and-path-homotopy
- def-regular-and-critical-points-and-values
- def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(ii) and the surrounding frame-bundle argument, printed pp.23-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the nonorientable theorem 'two maps are homotopic if and only if they have the same mod 2 degree', printed p.51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: 'Chapter 3, Section 6 and Chapter 2, Section 4: mod-two degree and the nonorientable classification, printed pp.82-84 and 146'
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed connected nonorientable smooth
$m$-manifold, $m\ge1$. (i) Two smooth maps $f,g:M\to S^m$ are smoothly
homotopic if and only if $\deg_2(f)=\deg_2(g)$. (ii) Both elements of
$\mathbb Z/2$ are realized: constant maps have mod-two degree $0$, and the
pinch map of a closed coordinate ball has mod-two degree $1$. (iii)
Consequently $\deg_2$ induces a bijection $[M,S^m]\to\mathbb Z/2$, so two
continuous maps $M\to S^m$ are homotopic if and only if their mod-two degrees
agree.

## Facts & Assumptions

**Given:** A closed connected nonorientable smooth $m$-manifold $M$ with $m\ge1$, smooth maps $f,g:M\to S^m$, and the mod-two degree of [[def-mod-two-degree-of-a-map-to-a-sphere]] ([[def-orientable-manifold]], [[def-regular-and-critical-points-and-values]], [[def-countable-choice]]).

[F1] The mod-two degree is well defined, is invariant under smooth homotopy, and descends to free homotopy classes of continuous maps ([[lem-mod-two-degree-is-well-defined-and-homotopy-invariant]]).

[F2] For a smooth map $f:M\to S^m$, a regular value $y$ with positive basis $b$ and the framed regular preimage $(f^{-1}(y),f_*b)$, framed cobordism classes of closed framed $0$-manifolds in $M$ are classified by the parity of the cardinality: two such framed preimages are framed cobordant exactly when their parities agree, and null-cobordism is exactly even cardinality ([[thm-unoriented-zero-dimensional-bordism-is-mod-two]], [[def-framed-regular-preimage-of-a-map-to-a-sphere]]).

[F3] If two smooth maps have framed cobordant regular preimages at regular values with positive bases, they are smoothly homotopic ([[lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps]]).

[F4] The explicit smooth pinch model of the realization lemma supplies a smooth map $M\to S^m$ with a regular value whose preimage has exactly one point, obtained by reading the model in a coordinate ball and extending by the base point; its mod-two degree is therefore $1$, while a constant map has an empty regular fibre over any value different from the constant and hence mod-two degree $0$ ([[lem-every-integer-degree-is-realized-by-a-map-to-the-sphere]], [[def-regular-and-critical-points-and-values]]).

[F5] Regular values exist by Sard's theorem; every continuous map is homotopic to a smooth map and continuously homotopic smooth maps are smoothly homotopic ([[thm-morse-sard-for-smooth-manifolds]], [[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]], [[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]], [[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 (Forward direction.) If $f$ and $g$ are smoothly homotopic then $\deg_2(f)=\deg_2(g)$ by [F1]. [F1, given, algebra]

1.2 (Converse.) Suppose $\deg_2(f)=\deg_2(g)$. Choose regular values $y$ of $f$ and $y'$ of $g$ and positive bases by [F5]; the parities of the framed preimages are the mod-two degrees, hence equal, so by [F2] the two framed preimages are framed cobordant, and [F3] makes $f$ and $g$ smoothly homotopic. [F2, F3, F5]

1.3 (Realization of both values.) Constant maps have mod-two degree $0$ and the pinch map of [F4] has mod-two degree $1$, so both elements of $\mathbb Z/2$ occur. [F4, F1]

2.1 (Bijection on free homotopy classes.) Steps 1.1 and 1.2 classify smooth maps by $\deg_2$, and [F5] lets every continuous map be replaced by a homotopic smooth one and every continuous homotopy by a smooth one, so $\deg_2$ is a well-defined bijection $[M,S^m]\to\mathbb Z/2$ with the two values realized in step 1.3; no orientation of $M$ is used anywhere. [F1, F5, step 1.1, step 1.2, step 1.3] ∎
