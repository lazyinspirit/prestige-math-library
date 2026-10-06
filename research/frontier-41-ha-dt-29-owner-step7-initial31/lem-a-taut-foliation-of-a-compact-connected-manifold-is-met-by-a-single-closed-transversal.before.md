---
id: lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal
kind: lemma
title: "A taut foliation of a compact connected manifold has a single closed transversal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-taut-codimension-one-foliation, def-compact-space, def-connected-space, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-local-transversal-to-a-regular-foliation, def-countable-choice-principle-for-foliation-pair, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "\u00a74.4, printed pp. 155-156"
    - title: "Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov's Theorem (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)"
      url: "https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf"
      locator: "\u00a72.1, printed pp. 32-35"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a taut cooriented codimension-one
foliation of a nonempty compact connected smooth manifold $M$. Then there is a single closed
transversal $\gamma$ meeting every leaf of $F$.

## Facts & Assumptions

**Given:** A taut cooriented codimension-one foliation $F$ of a nonempty compact connected smooth manifold $M$, with the standing countable choice assumption.

[F1] A codimension-one foliation is taut when for every leaf there is a closed transversal, that is an embedded smooth loop everywhere transverse to the foliation meeting that leaf. ([[def-taut-codimension-one-foliation]]).

[F2] A topological space is compact when every open cover has a finite subcover. ([[def-compact-space]]).

[F3] A topological space is connected when it admits no separation, that is no pair of disjoint nonempty open sets whose union is the space. ([[def-connected-space]]).

[F4] Compact sets admit smooth chart bumps, and smooth fields admit unique smooth local flows ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-fundamental-theorem-on-flows]]). A smooth field on a compact manifold is complete: finite chart flow intervals give a uniform extension interval at every orbit point.

## Proof

**Proof technique:** direct.

1.1 A nonempty manifold with a regular codimension-one foliation has dimension at least one. If $\dim M=1$, its leaves are points. The coorientation and finitely many smooth chart bumps give a smooth nowhere-zero positive field $X$, whose flow is complete by [F4]. Each orbit is open because its orbit map has nonzero derivative, so connectedness makes $M$ one orbit. The orbit map $\mathbb R\to M$ is a surjective local diffeomorphism. If it were injective, it would be a homeomorphism, contradicting compactness of $M$. Thus its period subgroup is nontrivial; it is closed and misses a neighbourhood of zero by local injectivity, so it has a least positive element $T$. The induced map $\mathbb R/T\mathbb Z\to M$ is an embedded positive circle onto $M$, meeting every point leaf. This proves the claim in dimension one. In the remaining steps assume $\dim M\ge2$. [F3, F4, given, construct]

1.2 For a closed transversal $\gamma$ let $N_\gamma$ be the union of the leaves it meets; transversality is open and in a product chart a transversal meets all nearby plaques, so $N_\gamma$ is open and saturated, and the tautness hypothesis [F1] says that the family of all $N_\gamma$ covers $M$. [given, F1]

2.1 By compactness [F2] the cover of $M$ by the open saturated sets $N_\gamma$ has a finite subcover; since $M$ is nonempty, its cardinality is positive. Fix a number $n$ minimal among the cardinalities of such finite covers of $M$ by sets $N_\gamma$, and fix closed transversals $\gamma_1,\dots,\gamma_n$ realizing it. [F2, step 1.2]

3.1 If two of the corresponding sets, say $N_{\gamma_i}$ and $N_{\gamma_j}$, met, choose a leaf $\lambda$ meeting both and an embedded path $\sigma$ inside $\lambda$ joining a point of $\gamma_i\cap\lambda$ to a point of $\gamma_j\cap\lambda$; the loop $\gamma_i*\sigma*\gamma_j*\sigma^{-1}$ is monotone, crossing leaves in one direction, and perturbing it inside product charts along the leafwise segments turns it into a closed transversal whose saturated set contains $N_{\gamma_i}\cup N_{\gamma_j}$, contradicting minimality of $n$. [step 2.1]

4.1 Hence the sets $N_{\gamma_1},\dots,N_{\gamma_n}$ are pairwise disjoint nonempty open saturated subsets covering the connected manifold $M$, so by [F3] we must have $n=1$; the single closed transversal $\gamma_1$ therefore meets every leaf, and only the standing countable choice was used. [F3, step 3.1] ∎
