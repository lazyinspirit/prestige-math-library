---
id: thm-coordinate-formula-for-the-differential-of-a-function
kind: theorem
title: "Coordinate formula for the differential of a function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-real-valued-function, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

If $f:M\to\mathbb R$ is smooth and $(U,x)$ is a smooth chart around $p$, then
$$ df_p=\sum_{i=1}^n \frac{\partial (f\circ x^{-1})}{\partial x^i}(x(p))\,dx^i_p, $$
where $dx^i_p:=d(x^i)_p$.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a chart $(U,x)$ around $p$.

[F1] The differential of a real-valued smooth function is the linear functional $v\mapsto v([f])$ ([[def-differential-of-a-smooth-real-valued-function]]).

[L1] The coordinate derivations form a basis of $T_pM$ ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every tangent vector has the form $v=\sum_i v([x^i])\partial_{x^i}|_p$. [L1, given]

2.1 Applying [F1] to such a vector gives $df_p(v)=\sum_i v([x^i])\partial_{x^i}|_p([f])=\sum_i v([x^i])\partial (f\circ x^{-1})/\partial x^i$ at $x(p)$. [F1, step 1.1]

3.1 This is exactly the action of the covector $\sum_i (\partial (f\circ x^{-1})/\partial x^i)(x(p))\,dx^i_p$ on every $v$, so the two covectors are equal. [step 2.1] ∎
