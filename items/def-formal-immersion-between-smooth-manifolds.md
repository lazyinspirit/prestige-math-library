---
id: def-formal-immersion-between-smooth-manifolds
kind: definition
title: "Formal immersion between smooth manifolds"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-smooth-manifold", "def-c-r-and-smooth-maps-between-smooth-manifolds", "def-tangent-bundle-as-a-disjoint-union", "def-differential-of-a-smooth-map", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-vector-bundle-map-over-a-smooth-base-map", "def-immersion-submersion-and-constant-rank-map", "thm-the-global-differential-of-a-smooth-map-is-smooth", "def-countable-choice", "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "def-induced-tangent-bundle-chart", "lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses"]

justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
dependency_level: 0
---

## Definition

Assume $\mathrm{AC}_\omega$ for the smooth tangent-bundle constructions. Let $M^m$ and $N^n$ be smooth manifolds, with their canonical smooth tangent bundles ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]], [[lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses]]) and smooth global differential ([[thm-the-global-differential-of-a-smooth-map-is-smooth]]). A **formal immersion** from $M$ to $N$ is a pair $(f,F)$ in which $f:M\to N$ is a smooth map and $F:TM\to TN$ is a smooth bundle map over $f$, meaning $\pi_N\circ F=f\circ\pi_M$ where $\pi_M,\pi_N$ are the bundle projections, and $F_x:=F|_{T_xM}:T_xM\to T_{f(x)}N$ is injective for every $x\in M$. The pair is a formal immersion of rank $m$ into rank $n$, so, when $M$ is nonempty, necessarily $m\le n$; equality of ranks is allowed and makes each $F_x$ a linear isomorphism. A smooth map $f$ is an immersion exactly when $(f,df)$ is a formal immersion; no orientation, metric, framing or properness is part of the datum. If $M$ is empty the unique pair satisfies the fibre condition vacuously, irrespective of the dimensions.
