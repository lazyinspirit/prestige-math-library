---
id: thm-coordinate-differentials-form-the-dual-cotangent-basis
kind: theorem
title: "Coordinate differentials form the dual cotangent basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-real-valued-function, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

If $(U,x)$ is a smooth chart around $p$, then the covectors $dx^1_p,\dots,dx^n_p$ form the basis of $T_p^*M$ dual to the tangent basis $\partial_{x^1}|_p,\dots,\partial_{x^n}|_p$.

## Facts & Assumptions

**Given:** A smooth chart $(U,x)$ around $p$.

[F1] For a smooth real-valued function $f$, the differential is the functional $df_p(v)=v([f])$ ([[def-differential-of-a-smooth-real-valued-function]]).

[L1] The coordinate derivations form a basis of $T_pM$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], one has $dx^i_p(\partial_{x^j}|_p)=\partial_{x^j}|_p([x^i])=\delta_{ij}$. [F1, given]

2.1 Thus $dx^1_p,\dots,dx^n_p$ are dual to the basis from [L1]. [L1, step 1.1]

3.1 Therefore they form a basis of $T_p^*M$. [step 2.1] ∎
