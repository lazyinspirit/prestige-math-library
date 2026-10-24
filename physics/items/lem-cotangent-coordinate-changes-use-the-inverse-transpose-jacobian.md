---
id: lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian
kind: lemma
title: "Cotangent coordinate changes use the inverse transpose Jacobian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-change-of-coordinate-formula-for-tangent-bases, thm-coordinate-differentials-form-the-dual-cotangent-basis, lem-matrix-inversion-preserves-ck-regularity]
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

If $(U,x)$ and $(V,y)$ are smooth charts on $M$ with $p\in U\cap V$, then the coordinate change on cotangent-fiber coordinates is given by the inverse transpose Jacobian of $y\circ x^{-1}$ at $x(p)$.

## Facts & Assumptions

**Given:** Smooth charts $(U,x)$ and $(V,y)$ containing $p$.

[L1] Tangent bases transform by the Jacobian of the coordinate change ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

[L2] Coordinate differentials are dual to the coordinate tangent bases ([[thm-coordinate-differentials-form-the-dual-cotangent-basis]]).

[L3] Matrix inversion preserves $C^k$ regularity ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 Let $J:=D(y\circ x^{-1})(x(p))$. By [L1], the $x$-basis of tangent vectors is obtained from the $y$-basis by multiplication with $J$. Dual bases therefore transform by $J^{-T}$, so if a covector has coordinate column $\xi$ in the $x$-basis and $\eta$ in the $y$-basis, then $\eta=J^{-T}\xi$. [L1, L2, given]

2.1 The base-point dependence of $J^{-T}$ is smooth because $J$ varies smoothly with the chart change and [L3] gives smooth inversion on invertible matrices. [L3, step 1.1]

3.1 Hence cotangent coordinate changes use the inverse transpose Jacobian. [step 1.1, step 2.1] ∎
