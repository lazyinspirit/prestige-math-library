---
id: ex-the-cotangent-pullback-of-a-coordinate-one-form
kind: example
title: "The cotangent pullback of a coordinate one-form"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-pullback-of-a-cotangent-vector, prop-cotangent-pullback-is-contravariantly-functorial]
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

## Example

For $F:\mathbb R^2\to\mathbb R^2$ given by $F(x,y)=(x^2,x+y)$, one has $F^*(du)=2x\,dx$ and $F^*(dv)=dx+dy$ for the standard coordinate one-forms $du,dv$ on the target.

## Facts & Assumptions

**Given:** The map $F(x,y)=(x^2,x+y)$.

[F1] Pullback of a cotangent vector is composition with the differential ([[def-pullback-of-a-cotangent-vector]]).

## Verification

**Proof technique:** direct.

1.1 The coordinate function $u\circ F$ is $x^2$, so $F^*(du)=d(x^2)=2x\,dx$. [F1, given]

1.2 Likewise $v\circ F=x+y$, so $F^*(dv)=d(x+y)=dx+dy$. [F1, given]

2.1 Thus coordinate one-forms pull back by the expected substitution rule. [step 1.1, step 1.2] ∎
