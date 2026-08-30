---
id: ex-a-radial-bump-on-euclidean-space
kind: example
title: "A radial bump on Euclidean space"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-smooth-bump-between-concentric-euclidean-balls]
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

For $0<r<R$, the function $\rho(x):=\sigma\bigl((R^2-\|x\|^2)/(R^2-r^2)\bigr)$ is a smooth radial bump on $\mathbb R^n$: it equals $1$ on $\overline B_r(0)$ and has support in $B_R(0)$.

## Facts & Assumptions

**Given:** Real numbers $0<r<R$.

[L1] The concentric-ball construction produces exactly such a smooth bump ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

## Verification

**Proof technique:** direct.

1.1 The displayed function is the explicit construction used in [L1]. [L1, given]

2.1 Therefore it is smooth, radial, equal to $1$ on the inner closed ball, and supported in the outer open ball. [L1, step 1.1]

3.1 This is the required Euclidean example. [step 2.1] ∎
