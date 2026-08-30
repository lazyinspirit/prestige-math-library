---
id: cex-polar-coordinates-do-not-give-a-chart-at-the-origin
kind: counterexample
title: "Polar coordinates do not give a chart at the origin"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

## Statement refuted

Polar coordinates give a smooth chart on all of $\mathbb R^2$.

## Facts & Assumptions

**Given:** The polar formulas $(r,\theta)\mapsto (r\cos\theta,r\sin\theta)$.

[F1] A smooth chart must be a homeomorphism from an open set of the manifold onto an open subset of Euclidean space ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Counterexample

**Proof technique:** direct.

1.1 At the origin, the angle coordinate is not defined, and for $r>0$ the same point admits many values of $\theta$ differing by multiples of $2\pi$. [given]

2.1 Therefore the polar description is not a single-valued homeomorphism on any neighbourhood containing the origin, so it cannot be a chart there by [F1]. [F1, step 1.1]

3.1 This refutes the statement. [step 2.1] ∎
