---
id: fs-every-smooth-manifold-is-compact
kind: false-statement
title: "A smooth manifold need not be compact"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

**False claim:** every smooth manifold is compact.

## Facts & Assumptions

**Given:** The smooth manifold $\mathbb R$.

[F1] Open subsets of Euclidean space with their standard smooth structure are smooth manifolds ([[def-smooth-manifold]]).

[A1] The open cover $(-n,n)$, $n\ge 1$, of $\mathbb R$ has no finite subcover.

## Refutation

**Proof technique:** direct.

1.1 By [F1], the real line is a smooth manifold. [F1]

1.2 By [A1], the real line is not compact. [A1]

2.1 Hence the claim is false. [step 1.1, step 1.2] ∎
