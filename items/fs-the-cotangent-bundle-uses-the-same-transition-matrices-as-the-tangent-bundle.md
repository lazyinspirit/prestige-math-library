---
id: fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle
kind: false-statement
title: "Cotangent transitions are inverse transpose, not tangent Jacobians"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]
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

## Statement

**False claim:** the cotangent bundle uses the same transition matrices as the tangent bundle.

## Facts & Assumptions

**Given:** On $\mathbb R$, the overlapping global charts $x(p)=p$ and $y(p)=2p$.

[L1] Cotangent coordinate changes use the inverse transpose Jacobian ([[lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the cotangent transition matrix is $J^{-T}$ when the tangent transition matrix is $J$. [L1, given]

2.1 For the given charts, $J=2$ while $J^{-T}=1/2$, so the tangent and cotangent transition matrices are different. [given, step 1.1, algebra]

3.1 Therefore the claim is false. [step 1.1, step 2.1] ∎
