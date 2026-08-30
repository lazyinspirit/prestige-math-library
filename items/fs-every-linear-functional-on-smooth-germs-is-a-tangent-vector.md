---
id: fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector
kind: false-statement
title: "Linearity alone does not make a tangent vector"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivation-at-a-point-and-tangent-space]
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

**False claim:** every linear functional on $C_p^\infty(M)$ is a tangent vector.

## Facts & Assumptions

**Given:** The evaluation functional $E([f]):=f(p)$.

[F1] A tangent vector is a linear functional satisfying the Leibniz rule ([[def-derivation-at-a-point-and-tangent-space]]).

## Refutation

**Proof technique:** direct.

1.1 The map $E$ is linear. [given]

1.2 But $E([1]\cdot[1])=1$, while $1\,E([1])+1\,E([1])=2$, so $E$ does not satisfy the Leibniz rule in [F1]. [F1, given]

2.1 Therefore not every linear functional is a tangent vector. [step 1.1, step 1.2] ∎
