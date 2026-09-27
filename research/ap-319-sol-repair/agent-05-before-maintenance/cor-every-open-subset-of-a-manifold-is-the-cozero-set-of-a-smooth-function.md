---
id: cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function
kind: corollary
title: "Every open subset of a manifold is the cozero set of a smooth function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]
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

Every open subset $U$ of a smooth manifold $M$ is the cozero set of a smooth function on $M$.

## Facts & Assumptions

**Given:** An open set $U\subseteq M$.

[L1] Every closed subset of a manifold is the zero set of a smooth nonnegative function ([[cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]]).

## Proof

**Proof technique:** direct.

1.1 The complement $A:=M\setminus U$ is closed. [given]

2.1 By [L1], there is a smooth nonnegative function $g$ with $A=g^{-1}(0)$, so $U=\{x:g(x)\ne 0\}$. [L1, step 1.1]

3.1 Hence $U$ is a smooth cozero set. [step 2.1] ∎
