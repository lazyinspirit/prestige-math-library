---
id: ex-the-tangent-space-of-euclidean-space
kind: example
title: "The tangent space of Euclidean space"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]
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

## Example

At a point $a\in\mathbb R^n$, the tangent space $T_a\mathbb R^n$ identifies canonically with $\mathbb R^n$: a vector $u=(u^1,\dots,u^n)$ corresponds both to the derivation $[f]\mapsto \sum_i u^i\partial_i f(a)$ and to the curve velocity of $t\mapsto a+tu$.

## Facts & Assumptions

**Given:** A point $a\in\mathbb R^n$ and a vector $u\in\mathbb R^n$.

[L1] Coordinate derivations form a basis of the tangent space ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L2] Curve classes are canonically identified with tangent derivations ([[thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors]]).

## Verification

**Proof technique:** direct.

1.1 In the standard chart on $\mathbb R^n$, the tangent basis is the standard coordinate basis by [L1]. [L1, given]

2.1 The vector $u$ defines both the derivation $\sum_i u^i\partial_i|_a$ and the velocity of the straight line $t\mapsto a+tu$, and [L2] identifies these two descriptions. [L1, L2, step 1.1]

3.1 Thus $T_a\mathbb R^n$ is canonically the usual vector space $\mathbb R^n$. [step 2.1] ∎
