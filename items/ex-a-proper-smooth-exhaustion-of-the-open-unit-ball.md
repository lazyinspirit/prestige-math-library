---
id: ex-a-proper-smooth-exhaustion-of-the-open-unit-ball
kind: example
title: "A proper smooth exhaustion of the open unit ball"
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

On the open unit ball $B_1(0)\subseteq \mathbb R^n$, the function $h(x):=1/(1-\|x\|^2)$ is smooth and proper.

## Facts & Assumptions

**Given:** The open unit ball $B_1(0)$ and the displayed function $h$.

[L1] Smooth manifolds admit smooth proper functions ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[A1] For each $c\ge 1$, one has $h(x)\le c$ exactly when $\|x\|^2\le 1-1/c$.

## Verification

**Proof technique:** direct.

1.1 The denominator is positive on $B_1(0)$, so $h$ is smooth there. [given]

1.2 By [A1], every sublevel set is a closed ball of radius strictly less than $1$, hence compact in $B_1(0)$. [A1]

2.1 Therefore $h$ is a proper smooth function on the open ball, as predicted by [L1]. [L1, step 1.1, step 1.2] ∎
