---
id: lem-mod-two-degree-is-well-defined-and-homotopy-invariant
kind: lemma
title: The mod-two degree is well defined and homotopy invariant
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
- def-mod-two-degree-of-a-map-to-a-sphere
- lem-regular-value-choice-does-not-change-the-framed-cobordism-class
- lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages
- def-framed-regular-preimage-of-a-map-to-a-sphere
- thm-morse-sard-for-smooth-manifolds
- cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
- thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
- thm-regular-value-formula-for-degree
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-regular-and-critical-points-and-values
- def-homotopy-relative-and-path-homotopy
- def-countable-choice
- def-framed-cobordism-of-embedded-submanifolds
- lem-boundary-of-a-compact-one-manifold-has-even-cardinality
- prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(ii) and the paragraph on regular values and framed bordism, printed pp.21-23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the mod 2 degree and the nonorientable Hopf theorem, printed p.51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 2, Section 4, well-definedness of $\deg_2$, printed pp.82-84
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $m$-manifold,
$m\ge1$, and let $f,g:M\to S^m$ be smooth. (i) Any two regular values $y,y'$ of
$f$ give the same parity $|f^{-1}(y)|\equiv|f^{-1}(y')|\pmod2$, so $\deg_2(f)$
is well defined. (ii) If $f$ and $g$ are homotopic, equivalently smoothly
homotopic, then $\deg_2(f)=\deg_2(g)$; hence $\deg_2$ is defined on free
homotopy classes of continuous maps $[M,S^m]$. (iii) If $M$ is nonempty, connected and oriented then
$\deg_2(f)\equiv\deg(f)\pmod2$.


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a closed smooth $m$-manifold $M$, $m\ge1$, and smooth maps $f,g:M\to S^m$. The source may be empty or disconnected.

[F1] At regular values $y,y'$ of a fixed map, the framed preimages using positive bases are framed cobordant ([[def-framed-regular-preimage-of-a-map-to-a-sphere]], [[lem-regular-value-choice-does-not-change-the-framed-cobordism-class]], clause (ii)).

[F2] A framed cobordism of finite configurations is a compact $1$-manifold with their disjoint union as its boundary, and this boundary has even cardinality ([[def-framed-cobordism-of-embedded-submanifolds]], [[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F3] Smoothly homotopic maps with a common regular value and positive basis have framed-cobordant preimages ([[lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages]]).

[F4] Under $\mathrm{AC}_\omega$, critical value sets are null; finite unions of manifold-null sets are null, and their complement in a positive-dimensional manifold is dense ([[thm-morse-sard-for-smooth-manifolds]], [[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[F5] Under $\mathrm{AC}_\omega$, every continuous map has a homotopic smooth representative, and continuously homotopic smooth maps are smoothly homotopic ([[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]], [[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]], [[def-countable-choice]]).

[F6] For a nonempty connected oriented $M$, the integer degree is the signed count of a finite regular fibre ([[thm-regular-value-formula-for-degree]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]). The candidate mod-two degree is its cardinality modulo two ([[def-mod-two-degree-of-a-map-to-a-sphere]]).

## Proof

1.1 For any framed cobordism from $N_0$ to $N_1$, [F2] gives $|N_0|+|N_1|$ even, hence equal parities. This uses no orientability or connectedness of the ambient $M$. Applying it to the cobordism of [F1] proves independence of the supplied regular value and positive basis. Existence of a regular value follows from [F4], since $S^m$ is nonempty and positive-dimensional. For empty $M$ every fibre is empty and the degree is $0$. [F1, F2, F4, given]

2.1 If $f$ and $g$ are smoothly homotopic, use [F4] to choose $y$ outside the union of their two critical value sets. Then $y$ is regular for both endpoint maps; no regularity assertion about an arbitrary homotopy at its boundary is required. Fix a positive basis at $y$ and apply [F3]. By [F2] the two fibres have equal parity, and step 1.1 identifies these parities with $\deg_2(f)$ and $\deg_2(g)$. [F2, F3, F4, step 1.1]

3.1 For a continuous map define $\deg_2$ using any smooth representative supplied by [F5]. Two choices are continuously homotopic and hence smoothly homotopic by [F5], so step 2.1 proves independence. The same argument proves invariance under a continuous homotopy. Thus the degree is defined on $[M,S^m]$, including empty and disconnected sources. [F5, step 2.1]

4.1 If $M$ is nonempty, connected and oriented, [F6] expresses $\deg(f)$ as a sum of local signs $\pm1$. Each sign is $1$ modulo two, so reducing that sum gives $|f^{-1}(y)|\bmod2=\deg_2(f)$. This proves (iii) within the domain of the cited integer-degree definition. [F6, step 1.1, algebra] ∎
