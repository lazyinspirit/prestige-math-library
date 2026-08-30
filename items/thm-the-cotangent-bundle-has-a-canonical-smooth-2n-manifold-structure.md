---
id: thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure
kind: theorem
title: "Assuming countable choice, the cotangent bundle has a canonical smooth 2n-manifold structure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union, thm-coordinate-differentials-form-the-dual-cotangent-basis, lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian, def-smooth-manifold, def-countable-choice, thm-second-countable-implies-lindelof]
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

Assume $\mathrm{AC}_\omega$. If $M$ is a smooth $n$-manifold, then $T^*M$
carries a canonical smooth $2n$-manifold structure for which the coordinate
charts built from $dx^1,\dots,dx^n$ form a smooth atlas.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and a smooth $n$-manifold $M$.

[F1] The cotangent bundle is the disjoint union of the cotangent spaces ([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]).

[L1] In any chart, the coordinate differentials form a basis of each cotangent fiber ([[thm-coordinate-differentials-form-the-dual-cotangent-basis]]).

[L2] Cotangent coordinate changes are smooth and use the inverse transpose Jacobian ([[lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]]).

[L3] Assuming $\mathrm{AC}_\omega$, a second-countable space is Lindelof
([[thm-second-countable-implies-lindelof]]).

[A1] The axiom $\mathrm{AC}_\omega$ is countable choice
([[def-countable-choice]]).

[F2] A smooth manifold is Hausdorff and second countable
([[def-smooth-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], a base chart $(U,x)$ induces a bijection $\widetilde x^*:\pi^{-1}(U)\to x(U)\times\mathbb R^n$ using the coefficients in the basis $dx^1_p,\dots,dx^n_p$. Declare the inverse images $(\widetilde x^*)^{-1}(O)$ of open sets $O$ to be basic open. The transition homeomorphisms in [L2] make these families agree on overlaps, so they define a topology in which every $\widetilde x^*$ is a homeomorphism onto an open subset of $\mathbb R^{2n}$. [F1, L1, L2, given, construct]

2.1 The projection $\pi:T^*M\to M$ is continuous because it is coordinate projection in every induced chart. The Hausdorff argument now separates covectors over distinct base points using [F2], and covectors over one point inside one Euclidean induced chart. Thus $T^*M$ is Hausdorff. [F2, step 1.1]

2.2 By [A1], [F2], and [L3], choose a countable subcover of $M$ by base-chart domains. Countable Euclidean bases in the corresponding induced charts pull back to a countable basis of $T^*M$, so $T^*M$ is second countable. [A1, F2, L3, step 1.1, choose]

3.1 The transition maps are smooth with smooth inverses by [L2]. Together with steps 1.1-2.2, these charts define a canonical smooth $2n$-manifold structure on $T^*M$. [L2, step 1.1, step 2.1, step 2.2] ∎
