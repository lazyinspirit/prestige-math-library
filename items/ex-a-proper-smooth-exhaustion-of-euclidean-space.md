---
id: ex-a-proper-smooth-exhaustion-of-euclidean-space
kind: example
title: "A proper smooth exhaustion of Euclidean space"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]
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

## Example

The function $h(x)=\|x\|^2$ is a smooth proper function on $\mathbb R^n$.

## Facts & Assumptions

**Given:** The function $h(x)=\|x\|^2$.

[L1] Smooth manifolds admit smooth proper functions ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[A1] For each $c\ge 0$, the sublevel set $\{x:\|x\|^2\le c\}$ is the closed ball of radius $\sqrt c$.

## Verification

**Proof technique:** direct.

1.1 The function $h$ is polynomial in the coordinates, hence smooth. [given]

1.2 By [A1], every sublevel set is compact, so $h$ is proper. [A1]

2.1 This is an explicit example of [L1]. [L1, step 1.1, step 1.2] ∎
