---
id: thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors
kind: theorem
title: "Curve contact classes are canonically isomorphic to derivation tangent vectors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-contact-equivalence-of-smooth-curves-at-a-point, def-velocity-derivation-of-a-smooth-curve, lem-curve-velocity-depends-only-on-the-contact-class, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

At each point $p$ of a smooth manifold, the set of contact classes of smooth curves through $p$ is canonically isomorphic to the tangent space $T_pM$ of derivations.

## Facts & Assumptions

**Given:** A smooth manifold point $p$.

[L1] A contact class has a well-defined velocity derivation ([[lem-curve-velocity-depends-only-on-the-contact-class]]).

[L2] Coordinate derivations form a basis of $T_pM$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], sending a contact class $[\gamma]$ to its velocity derivation $\dot\gamma(0)$ defines a map from curve classes to $T_pM$. [L1, given]

2.1 Choose a chart $(U,x)$ around $p$. If $v=\sum_i a_i\partial_{x^i}|_p\in T_pM$, define a curve in the chart by $t\mapsto x(p)+t(a_1,\dots,a_n)$ and transport it back by $x^{-1}$. Its contact class maps to $v$, so the map of step 1.1 is surjective by [L2]. [L2, step 1.1, construct]

2.2 If two curve classes have the same velocity derivation, then they have the same values on each coordinate germ $[x^i]$, so their coordinate velocity vectors agree; hence the classes are equal. Thus the map is injective. [L2, step 1.1]

3.1 The map of step 1.1 is therefore a canonical bijection between curve contact classes and derivation tangent vectors. [step 2.1, step 2.2] ∎
