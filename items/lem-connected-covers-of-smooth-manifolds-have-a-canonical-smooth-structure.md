---
id: lem-connected-covers-of-smooth-manifolds-have-a-canonical-smooth-structure
kind: lemma
title: Connected covers of smooth manifolds have a canonical smooth structure
status: draft
origin: pipeline
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-smooth-manifold, def-topological-manifold-without-boundary, prop-local-path-connectedness-lifts-and-descends-along-coverings, thm-connected-and-locally-path-connected-implies-path-connected, thm-locally-connected-iff-components-of-open-sets-are-open, thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Section 3.2 and Proposition 3.5, printed pages 25–26
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Smooth covering maps, Chapter 4; covering Lie groups, Theorem 21.32, printed page 558
verification:
  precheck: pass
proof_strategy: direct
---

## Statement

Let $M$ be a smooth manifold and let $p:E\to M$ be a covering map whose total
space $E$ is connected. There is a unique smooth-manifold structure on the
given topological space $E$ for which $p$ is a smooth local diffeomorphism.
It has the same dimension as $M$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ and a covering map $p:E\to M$ with $E$
connected.

[F1] A covering is locally a disjoint union of sheets, each mapped
homeomorphically onto an evenly covered open subset of the base.
[[def-covering-map-and-evenly-covered-neighbourhoods]].

[F2] A smooth manifold is a Hausdorff, second-countable, locally Euclidean
space equipped with a maximal smooth atlas. [[def-smooth-manifold]],
[[def-topological-manifold-without-boundary]].

[F3] Local path connectedness lifts along coverings, and a connected locally
path-connected space is path connected.
[[prop-local-path-connectedness-lifts-and-descends-along-coverings]],
[[thm-connected-and-locally-path-connected-implies-path-connected]].

[F4] In a locally connected space the components of every open subset are
open. [[thm-locally-connected-iff-components-of-open-sets-are-open]].

[F5] A smooth atlas is contained in a unique maximal smooth atlas.
[[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]].

## Proof

**Proof technique:** pull back covering charts, with the countability point
checked separately.

1.1 If $E=\varnothing$, surjectivity in the covering-map definition forces $M=\varnothing$; the empty pulled-back atlas gives the unique compatible smooth structure, the local-diffeomorphism condition is vacuous, and the asserted dimension is the supplied dimension $n$ of $M$. Henceforth assume $E\ne\varnothing$. The space $E$ is locally Euclidean of dimension $n$: if $U\subseteq M$ is an evenly covered coordinate domain and $S$ is a sheet over $U$, then a chart $\varphi:U\to\varphi(U)\subseteq\mathbb R^n$ pulls back to the chart $\varphi\circ p|_S:S\to\varphi(U)$. It is Hausdorff: points with different images are separated by inverse images of disjoint base neighborhoods, while distinct points in one fibre lie in distinct sheets over a common evenly covered neighborhood. [F1, F2]

1.2 It remains to check second countability rather than silently assuming it. Fix a countable base $\mathcal C=\{C_j:j\in\mathbb N\}$ for $M$. By local path connectedness, the components of every $C_j$ are open by [F4]. For fixed $j$ these components form a countable family: each contains some $C_k$, and assigning to it the least such $k$ is injective because distinct components are disjoint. Thus all components of all the $C_j$ form a countable path-connected base. Its subfamily $\mathcal U$ consisting of members that are contained in an evenly covered coordinate domain is still countable and is a base, because such domains exist around every point and may first be refined by a $C_j$ and then by its component. [F1, F2, F4]

2.1 By [F3], $E$ is path connected. Fix $\widetilde x_0\in E$. For each $U\in\mathcal U$, the sheets over $U$ form a countable family. Indeed, a path from $\widetilde x_0$ to a point of a given sheet has compact parameter interval, so it can be subdivided into finitely many pieces whose projected images lie in members of $\mathcal U$. At each transition insert a member of $\mathcal U$ contained in the intersection of the two consecutive members. Starting with the sheet containing $\widetilde x_0$, this finite string of indices determines each successive sheet uniquely: over a connected transition set, one sheet is connected and hence lies in exactly one sheet over the next base set. Finite strings of natural numbers are countable, and assigning to each sheet the least string that reaches it gives an injection into a countable set. No countable family of arbitrary choices is made. [F1, F3, step 1.2]

3.1 The sheets over the countable base $\mathcal U$ therefore form a countable base for $E$. Together with step 1.1 this proves that $E$ is a topological $n$-manifold. On every such sheet use the pulled-back chart from step 1.1. If $(U,\varphi)$ and $(V,\psi)$ are base charts, the transition between two overlapping pulled-back charts is the restriction of $\psi\circ\varphi^{-1}$, because both sheet charts use the same projection $p$. Hence these charts form a smooth atlas, and [F5] gives a smooth structure for which $p$ is a smooth local diffeomorphism. [F2, F5, step 1.1, step 2.1]

4.1 Conversely, in any smooth structure on the given topology for which $p$ is a local diffeomorphism, every sufficiently small sheet chart is exactly a pullback of a smooth base chart. It is therefore compatible with the atlas of step 3.1. The two maximal atlases coincide by [F5], proving uniqueness. The construction and all countability arguments are in ZF; after the empty case was discharged in step 1.1, the fixed point $\widetilde x_0$ is one element of one nonempty space. [F5, step 1.1, step 3.1] ∎
