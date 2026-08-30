---
id: thm-coordinate-derivations-form-a-basis-of-the-tangent-space
kind: theorem
title: "Coordinate derivations form a basis of the tangent space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coordinate-derivations-at-a-point, lem-coordinate-derivations-are-well-defined-derivations, lem-first-order-hadamard-factorization-near-a-point, lem-a-derivation-annihilates-constant-germs]
justified_by: []
aliases: []
landmark: true
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

If $(U,x)$ is a smooth chart on an $n$-manifold $M$ with $p\in U$, then the coordinate derivations $\partial_1|_p,\dots,\partial_n|_p$ form a basis of $T_pM$.

## Facts & Assumptions

**Given:** A smooth chart $(U,x)$ with $p\in U$.

[L1] Each coordinate operator $\partial_i|_p$ is a derivation at $p$ ([[lem-coordinate-derivations-are-well-defined-derivations]]).

[L2] Every derivation annihilates constant germs ([[lem-a-derivation-annihilates-constant-germs]]).

[L3] Smooth functions on a Euclidean neighbourhood admit a first-order Hadamard factorization ([[lem-first-order-hadamard-factorization-near-a-point]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the coordinate operators belong to $T_pM$. If $v\in T_pM$ and $f$ is represented in the chart by $\tilde f$, then [L3] gives $\tilde f(u)-\tilde f(a)=\sum_i (u^i-a^i)g_i(u)$ near $a=x(p)$; applying $v$ to the corresponding germ and using [L2], one obtains $v([f])=\sum_i v([x^i])g_i(a)=\sum_i v([x^i])\partial_i|_p([f])$. [L2, L3, given]

2.1 Step 1.1 shows $v=\sum_i v([x^i])\partial_i|_p$, so the coordinate derivations span $T_pM$. [step 1.1]

2.2 If $\sum_i c_i\partial_i|_p=0$, apply this derivation to the coordinate germ $[x^j]$; only the $j$th term survives, so $c_j=0$. Hence the coordinate derivations are linearly independent. [step 1.1]

3.1 Therefore $\partial_1|_p,\dots,\partial_n|_p$ form a basis of $T_pM$. [step 2.1, step 2.2] ∎
