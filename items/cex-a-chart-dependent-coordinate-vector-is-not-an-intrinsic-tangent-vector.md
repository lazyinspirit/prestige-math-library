---
id: cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector
kind: counterexample
title: "A coordinate tuple is not an intrinsic tangent vector"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-change-of-coordinate-formula-for-tangent-bases]
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

## Statement refuted

The coordinate tuple of a tangent vector is itself an intrinsic tangent vector.

## Facts & Assumptions

**Given:** The manifold $\mathbb R$ at $0$ with coordinates $x(t)=t$ and $y(t)=2t$.

[L1] Tangent bases change by the Jacobian of the coordinate transition ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $v=\partial_x|_0$. In the $x$-chart its coordinate tuple is $1$, while [L1] gives $v=2\partial_y|_0$, so in the $y$-chart its coordinate tuple is $2$. [L1, given]

2.1 The same intrinsic tangent vector therefore has different coordinate tuples in different charts. [step 1.1]

3.1 Hence the tuple itself is chart dependent and not the intrinsic tangent vector. [step 1.1, step 2.1] ∎
