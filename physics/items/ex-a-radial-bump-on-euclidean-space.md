---
id: ex-a-radial-bump-on-euclidean-space
kind: example
title: "A radial bump on Euclidean space"
status: published
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
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized radial formula repair; local checks only, no independent judge"
    delegated_by: owner
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

For $0<r<R$, put $s=(r+R)/2$. The function $\rho(x):=\sigma\bigl((s^2-\|x\|^2)/(s^2-r^2)\bigr)$ is a smooth radial bump on $\mathbb R^n$, $n\ge1$: it equals $1$ on $\overline B_r(0)$ and has support in $\overline B_s(0)\subset B_R(0)$.

## Facts & Assumptions

**Given:** Real numbers $0<r<R$.

[L1] The concentric-ball construction produces exactly such a smooth bump ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

## Verification

**Proof technique:** direct.

1.1 The displayed function is the explicit construction used in [L1]. [L1, given]

2.1 By [L1] it is smooth, equals $1$ on the inner closed ball, and has support in $\overline B_s(0)\subset B_R(0)$. It is radial because the formula depends only on $\|x\|$. [L1, step 1.1]

3.1 This is the required Euclidean example. [step 2.1] ∎
