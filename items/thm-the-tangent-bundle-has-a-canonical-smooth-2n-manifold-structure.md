---
id: thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure
kind: theorem
title: "Assuming countable choice, the tangent bundle has a canonical smooth 2n-manifold structure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tangent-bundle-as-a-disjoint-union, def-induced-tangent-bundle-chart, lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses, def-smooth-manifold, def-countable-choice, thm-second-countable-implies-lindelof]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. If $M$ is a smooth $n$-manifold, then $TM$
carries a canonical structure of a smooth $2n$-manifold for which the induced
bundle charts form a smooth atlas.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and a smooth $n$-manifold $M$.

[F1] The tangent bundle is the disjoint union of the tangent spaces with projection to the base manifold ([[def-tangent-bundle-as-a-disjoint-union]]).

[F2] Each smooth chart on $M$ induces a chart on $TM$ with target in $\mathbb R^{2n}$ ([[def-induced-tangent-bundle-chart]]).

[L1] Tangent-bundle chart transitions are smooth with smooth inverses ([[lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses]]).

[L2] Assuming $\mathrm{AC}_\omega$, a second-countable space is Lindelof
([[thm-second-countable-implies-lindelof]]).

[A1] The axiom $\mathrm{AC}_\omega$ is countable choice
([[def-countable-choice]]).

[F3] A smooth manifold is Hausdorff and second countable
([[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 For each induced bundle chart $\widetilde x:\pi^{-1}(U)\to x(U)\times\mathbb R^n$, declare the sets $\widetilde x^{-1}(O)$, with $O$ open, to be basic open sets. The transition homeomorphisms from [L1] make these families agree on overlaps, so they define a topology on $TM$ for which every $\widetilde x$ is a homeomorphism onto the open set $x(U)\times\mathbb R^n\subseteq\mathbb R^{2n}$. [F1, F2, L1, given, construct]

2.1 In the topology of step 1.1, $\pi$ is continuous because its expression in every bundle chart is projection onto the first $n$ coordinates. Two vectors over distinct base points have disjoint neighbourhoods pulled back from the Hausdorff base $M$; two vectors over the same point have disjoint neighbourhoods in one Euclidean bundle chart. Thus $TM$ is Hausdorff. [F3, step 1.1]

2.2 By [A1], [F3], and [L2], the cover of $M$ by base-chart domains has a countable subcover. Each corresponding open subset of $\mathbb R^{2n}$ has a countable basis, and the inverse images of those bases form a countable basis for $TM$. Hence $TM$ is second countable. [A1, F3, L2, step 1.1, choose]

3.1 By [L1], the induced chart transitions are smooth with smooth inverses. Together with steps 1.1-2.2, the induced charts therefore define a smooth $2n$-manifold structure. The construction uses the maximal smooth atlas of $M$, so the resulting structure is canonical. [L1, step 1.1, step 2.1, step 2.2] ∎
