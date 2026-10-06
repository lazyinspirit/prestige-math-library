---
id: lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps
kind: lemma
title: A framed cobordism of regular preimages produces a homotopy
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
- lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
- lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
- def-framed-regular-preimage-of-a-map-to-a-sphere
- def-pontryagin-thom-map-of-a-framed-submanifold
- def-framed-cobordism-of-embedded-submanifolds
- def-homotopy-relative-and-path-homotopy
- def-smooth-manifold
- def-countable-choice
- thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: 'Theorem 2.35 (Pontryagin-Thom), printed p.22: the two constructions are mutually inverse and choices do not affect the resulting map'
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Sections 7-8, the Pontryagin construction and the proof that cobordant framed submanifolds give homotopic maps, printed pp.44-51
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $m$-manifold, $m\ge1$,
and let $f,g:M\to S^m$ be smooth. Suppose $y,y'\in S^m$ are regular values with
positive bases $b,b'$ and the framed regular preimages $(f^{-1}(y),f_*b)$ and
$(g^{-1}(y'),g_*b')$ are framed cobordant in $M$. Then $f$ and $g$ are smoothly
homotopic, hence homotopic.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$, smooth maps $f,g:M\to S^m$, regular values $y,y'$ with positive bases $b,b'$, and a framed cobordism between the framed preimages $(f^{-1}(y),f_*b)$ and $(g^{-1}(y'),g_*b')$ ([[def-framed-regular-preimage-of-a-map-to-a-sphere]], [[def-framed-cobordism-of-embedded-submanifolds]], [[def-countable-choice]]).

[F1] For a smooth map $h:M\to S^m$, a regular value $z$ with positive basis $c$ and the framed preimage $(h^{-1}(z),h_*c)$, the Pontryagin-Thom map $f_{(h^{-1}(z),h_*c)}:M\to S^m$ of that framed submanifold is homotopic to $h$ ([[def-pontryagin-thom-map-of-a-framed-submanifold]], [[lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map]]).

[F2] Framed cobordant closed framed codimension-$m$ submanifolds of the closed manifold $M$ have homotopic Pontryagin-Thom maps $M\to S^m$; a framed cobordism supplies an explicit homotopy of the based maps ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]], [[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F3] Continuous homotopies concatenate and reverse. Under $\mathrm{AC}_\omega$, continuously homotopic smooth maps are smoothly homotopic ([[def-homotopy-relative-and-path-homotopy]], [[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]]).

## Proof

**Proof technique:** direct.

1.1 Write $f_0:=f_{(f^{-1}(y),f_*b)}$ and $g_0:=f_{(g^{-1}(y'),g_*b')}$ for the Pontryagin-Thom maps of the two framed preimages. By [F1], applied to $h=f,z=y,c=b$ and to $h=g,z=y',c=b'$, there are continuous homotopies from $f$ to $f_0$ and from $g$ to $g_0$, so it suffices to connect $f_0$ and $g_0$. [F1, given]

1.2 The hypothesis that the two framed preimages are framed cobordant in $M$, together with [F2], gives a homotopy from $f_0$ to $g_0$, in fact an explicit one induced by the cobordism. [F2, given]

2.1 Concatenate the homotopy $f\simeq f_0$, the homotopy $f_0\simeq g_0$, and the reversal of $g\simeq g_0$. This gives a continuous homotopy $f\simeq g$ by [F3]. Since the endpoint maps $f,g$ are smooth, the smoothing theorem in [F3] then supplies a smooth homotopy with these endpoints. It is not necessary that the middle collapse homotopy be smooth. [F3, step 1.1, step 1.2] ∎
