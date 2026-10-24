---
id: cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve
kind: corollary
title: "Every tangent vector is the velocity of a smooth curve"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

Every tangent vector $v\in T_pM$ is the velocity of some smooth curve through $p$.

## Facts & Assumptions

**Given:** A tangent vector $v\in T_pM$.

[L1] Curve contact classes are canonically isomorphic to tangent vectors ([[thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the vector $v$ corresponds to some contact class of smooth curves through $p$. [L1, given]

2.1 Any representative of that contact class has velocity derivation equal to $v$. [L1, step 1.1]

3.1 Therefore $v$ is the velocity of a smooth curve through $p$. [step 2.1] ∎
