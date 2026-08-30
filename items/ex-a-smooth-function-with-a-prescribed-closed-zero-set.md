---
id: ex-a-smooth-function-with-a-prescribed-closed-zero-set
kind: example
title: "A smooth function with a prescribed closed zero set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]
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

The function $g(x)=\sin^2(\pi x)$ is smooth and nonnegative on $\mathbb R$, and its zero set is exactly $\mathbb Z$.

## Facts & Assumptions

**Given:** The function $g(x)=\sin^2(\pi x)$.

[L1] Every closed subset of a manifold is the zero set of a smooth nonnegative function ([[cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]]).

[A1] One has $\sin(\pi x)=0$ exactly when $x\in \mathbb Z$.

## Verification

**Proof technique:** direct.

1.1 The function $g$ is smooth and nonnegative. [given]

1.2 By [A1], the equation $g(x)=0$ holds exactly when $x\in \mathbb Z$. [A1]

2.1 Thus $g$ realizes the closed set $\mathbb Z$ as a smooth zero set, as promised abstractly by [L1]. [L1, step 1.1, step 1.2] ∎
