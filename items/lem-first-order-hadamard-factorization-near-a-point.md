---
id: lem-first-order-hadamard-factorization-near-a-point
kind: lemma
title: "First-order Hadamard factorization near a point"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-newton-leibniz-with-interior-derivative, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]
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

## Statement

Let $W\subseteq\mathbb R^n$ be open, let $a\in W$, and let $f:W\to\mathbb R$ be smooth. After shrinking to a convex neighbourhood of $a$, there are smooth functions $g_1,\dots,g_n$ such that
$$ f(x)-f(a)=\sum_{i=1}^n (x^i-a^i)g_i(x) $$
and $g_i(a)=\partial_i f(a)$ for each $i$.

## Facts & Assumptions

**Given:** A smooth function $f:W\to\mathbb R$ and a point $a\in W$.

[L1] The Newton-Leibniz formula holds on line segments, and differentiation under the integral sign preserves smoothness on compact rectangles ([[thm-newton-leibniz-with-interior-derivative]], [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

## Proof

**Proof technique:** direct.

1.1 Shrink $W$ so that the segment $a+t(x-a)$ stays in $W$ for all $x\in W$ and $t\in[0,1]$. Define $g_i(x):=\int_0^1 \partial_i f(a+t(x-a))\,dt$. [L1, given, construct]

2.1 Applying the one-variable Newton-Leibniz formula from [L1] to $t\mapsto f(a+t(x-a))$ gives $f(x)-f(a)=\sum_i (x^i-a^i)g_i(x)$. [L1, step 1.1]

3.1 Differentiation under the integral sign in [L1] shows each $g_i$ is smooth, and evaluating at $x=a$ gives $g_i(a)=\partial_i f(a)$. [L1, step 1.1] ∎
