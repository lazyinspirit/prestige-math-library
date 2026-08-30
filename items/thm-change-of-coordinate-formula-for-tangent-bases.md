---
id: thm-change-of-coordinate-formula-for-tangent-bases
kind: theorem
title: "Change-of-coordinate formula for tangent bases"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

Let $(U,x)$ and $(V,y)$ be smooth charts on $M$ with $p\in U\cap V$. Then
$$ \partial_{x^i}|_p=\sum_{j=1}^n \frac{\partial (y^j\circ x^{-1})}{\partial x^i}(x(p))\,\partial_{y^j}|_p $$
for each $i$.

## Facts & Assumptions

**Given:** Two smooth charts $(U,x)$ and $(V,y)$ containing $p$.

[L1] The coordinate derivations form a basis of the tangent space ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 Both sides are derivations by [L1], so it is enough to compare their values on the coordinate germs $[y^k]$, which form a separating family in the chart $y$. [L1, given]

2.1 Applying the left-hand side to $[y^k]$ gives $\partial (y^k\circ x^{-1})/\partial x^i$ at $x(p)$ by definition. Applying the right-hand side to $[y^k]$ gives $\sum_j \bigl(\partial (y^j\circ x^{-1})/\partial x^i\bigr)(x(p))\,\partial_{y^j}|_p([y^k])$, and only the $j=k$ term survives because $\partial_{y^j}|_p([y^k])=\delta_{jk}$. So the two sides agree on every coordinate germ $[y^k]$. [L1, step 1.1]

3.1 Therefore the two derivations agree on a basis of germs and hence are equal. [step 2.1] ∎
