---
id: lem-closed-connected-one-manifolds-are-circles
kind: lemma
title: "Nonempty closed connected 1-manifolds are circles"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-boundary-of-a-compact-one-manifold-has-even-cardinality, def-circle-as-real-line-mod-integers, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-manifold, def-compact-space, def-connected-space, def-countable-choice]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Appendix, printed pp. 55-57 (classification of compact 1-manifolds; the circle alternative)"
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$. Every nonempty closed connected smooth
$1$-manifold is diffeomorphic to the circle $S^1=\mathbb R/\mathbb Z$ with its
standard smooth structure
([[def-circle-as-real-line-mod-integers]],
[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Here *closed*
means compact with empty boundary; the empty manifold is excluded because it is
connected under [[def-connected-space]] but is not diffeomorphic to a circle.

## Facts & Assumptions

**Given:** A nonempty closed connected smooth $1$-manifold $M$, and
$\mathrm{AC}_\omega$.

[A1] $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice
function ([[def-countable-choice]]).

[F1] Every compact smooth $1$-manifold $W$, possibly with boundary, is
diffeomorphic to a finite disjoint union of copies of the circle $S^1$ and of
the closed interval $[0,1]$; a diffeomorphism of manifolds with boundary maps
$\partial W$ onto the boundary of the target, and each closed-interval
component contributes exactly its two endpoints to that boundary
([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F2] A closed smooth manifold is by definition a compact smooth manifold with
empty boundary ([[def-smooth-manifold]], [[def-compact-space]]); in particular
$\partial M=\varnothing$.

[F3] The circle is $S^1=\mathbb R/\mathbb Z$ with the quotient topology and its
standard smooth structure, and a diffeomorphism is a bijective smooth map whose
inverse is smooth
([[def-circle-as-real-line-mod-integers]],
[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

1.1 By [F2] the manifold $M$ is compact with $\partial M=\varnothing$, so [F1] provides a diffeomorphism from $M$ onto a finite disjoint union $\bigsqcup_{i\in F}S^1_i\sqcup\bigsqcup_{j\in G}[0,1]_j$; a diffeomorphism of manifolds with boundary carries boundary to boundary, and the boundary of the target is the union of the two endpoints of each interval component, so $\varnothing=\partial M$ corresponds to $\bigsqcup_{j\in G}\{0,1\}$ and forces $G=\varnothing$. [A1, F1, F2, algebra]

2.1 Consequently $M$ is diffeomorphic to $\bigsqcup_{i\in F}S^1_i$, a disjoint union of $|F|$ copies of the circle. Each circle is a nonempty connected component of that disjoint union, so the union is connected only when $|F|\le1$, and $M$ is nonempty, so $|F|=1$; hence $M$ is diffeomorphic to the standard circle $S^1$, the model $\mathbb R/\mathbb Z$ of [F3], as claimed. [F1, F3, step 1.1, algebra] ∎
