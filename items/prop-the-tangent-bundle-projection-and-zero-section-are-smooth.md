---
id: prop-the-tangent-bundle-projection-and-zero-section-are-smooth
kind: proposition
title: "The tangent-bundle projection and zero section are smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

For a smooth manifold $M$, the tangent-bundle projection $\pi:TM\to M$ and the zero section $0_M:M\to TM$, $p\mapsto 0\in T_pM$, are smooth.

## Facts & Assumptions

**Given:** A smooth manifold $M$.

[L1] The tangent bundle carries the smooth structure induced by bundle charts $\widetilde x$ ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

## Proof

**Proof technique:** direct.

1.1 In a bundle chart $\widetilde x$, the projection is $(a,v)\mapsto a$, which is smooth. [L1, given]

1.2 In the same chart, the zero section is $a\mapsto (a,0)$, which is smooth. [L1, given]

2.1 Therefore both $\pi$ and $0_M$ are smooth. [step 1.1, step 1.2] ∎
