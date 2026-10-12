---
id: cor-the-tangent-space-of-an-n-manifold-has-dimension-n
kind: corollary
title: "The tangent space of an n-manifold has dimension n"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

If $M$ is a smooth $n$-manifold and $p\in M$, then $T_pM$ is an $n$-dimensional real vector space.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$ and a point $p\in M$.

[L1] In any smooth chart around $p$, the coordinate derivations form a basis of $T_pM$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 Choose a smooth chart around $p$; its coordinate basis has exactly $n$ vectors. [given]

2.1 By [L1], those $n$ coordinate derivations form a basis of $T_pM$. [L1, step 1.1]

3.1 Therefore $\dim T_pM=n$. [step 2.1] ∎
