---
id: fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space
kind: false-statement
title: "The tangent space is intrinsically defined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivation-at-a-point-and-tangent-space]
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

**False claim:** one must embed a manifold in Euclidean space before the tangent space can be defined.

## Facts & Assumptions

**Given:** A smooth manifold point $p$.

[F1] The tangent space $T_pM$ is defined intrinsically as the space of derivations on smooth germs at $p$ ([[def-derivation-at-a-point-and-tangent-space]]).

## Refutation

**Proof technique:** direct.

1.1 The definition in [F1] refers only to germs on the manifold itself. [F1, given]

2.1 Since no embedding data appear, the tangent space is defined before any embedding is chosen. [step 1.1]

3.1 Hence the claim is false. [step 1.1, step 2.1] ∎
