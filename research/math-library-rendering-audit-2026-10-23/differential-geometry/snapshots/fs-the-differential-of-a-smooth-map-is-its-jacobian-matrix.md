---
id: fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix
kind: false-statement
title: "The differential is intrinsic, not merely a Jacobian matrix"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-map, thm-coordinate-formula-for-the-differential]
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

**False claim:** the differential of a smooth map is literally its Jacobian matrix.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] The differential is intrinsically defined as a map on tangent derivations ([[def-differential-of-a-smooth-map]]).

[L1] A Jacobian matrix is only the coordinate representation of the differential in chosen bases ([[thm-coordinate-formula-for-the-differential]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], $dF_p$ is a linear map between tangent spaces defined without coordinates. [F1, given]

2.1 By [L1], the Jacobian matrix appears only after choosing source and target charts, so it represents $dF_p$ rather than being identical to the intrinsic object. [L1, step 1.1]

3.1 Therefore the claim is false. [step 1.1, step 2.1] ∎
