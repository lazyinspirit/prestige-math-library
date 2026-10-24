---
id: def-regular-homotopy-of-immersions
kind: definition
title: "Regular homotopy of immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-space-of-immersions-and-space-of-formal-immersions, def-compact-parameter-pair, def-smooth-family-of-maps-and-evaluation-map, def-smooth-map-between-manifolds-with-boundary, def-immersion-submersion-and-constant-rank-map, def-homotopy-relative-and-path-homotopy, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 3
---

## Definition

Assume $\mathrm{AC}_\omega$ for the associated tangent-bundle mapping spaces ([[def-countable-choice]]), and let $M^m,N^n$ be smooth manifolds with $m\le n$. A **regular homotopy** between immersions $f_0,f_1:M\to N$ is a smooth map $H:M\times[0,1]\to N$ such that $H_t:=H(\cdot,t)$ is an immersion for every $t\in[0,1]$, with $H_0=f_0$ and $H_1=f_1$. Equivalently, $H$ is a path in $\operatorname{Imm}(M,N)$ whose adjoint is smooth; for compact $M$ the smoothing lemma identifies such paths, up to homotopy rel the ends, with arbitrary continuous paths in the weak topology, while for noncompact $M$ only the smooth direction is asserted. A regular homotopy is **relative to** a closed subset $A\subseteq M$ when $H(a,t)=f_0(a)=f_1(a)$ for every $a\in A$ and $t\in[0,1]$; the value may vary with $a$. A smooth homotopy of formal immersions is a path in $\operatorname{FImm}(M,N)$ with jointly smooth base maps and bundle maps, fixing both of them pointwise over $A$ in the relative case.

## Conventions

The map $H:M\times[0,1]\to N$ is smooth in the sense of [[def-smooth-map-between-manifolds-with-boundary]], and it is a smooth family in the sense of [[def-smooth-family-of-maps-and-evaluation-map]] over the boundary parameter interval. By [[def-compact-parameter-pair]] a *smooth family* over a boundaryless compact parameter manifold $P$ is a smooth map $P\times M\to N$; a path $t\mapsto H_t$ into $\operatorname{Imm}(M,N)$ whose adjoint $M\times[0,1]\to N$ is smooth is the same datum as a regular homotopy, and for compact $M$ [[lem-smoothing-genuine-immersion-families]] shows conversely that every continuous path in the weak topology is homotopic rel its ends to such a smooth path. For noncompact $M$ only the smooth-to-continuous direction is asserted here.
