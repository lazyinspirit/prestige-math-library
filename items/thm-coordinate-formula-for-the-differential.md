---
id: thm-coordinate-formula-for-the-differential
kind: theorem
title: "Coordinate formula for the differential"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-map, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
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

## Statement

Let $F:M\to N$ be smooth, let $(U,x)$ and $(V,y)$ be smooth charts with $p\in U$ and $F(p)\in V$, and let $\tilde F:=y\circ F\circ x^{-1}$. Then
$$ dF_p(\partial_{x^i}|_p)=\sum_{j=1}^m \frac{\partial \tilde F^j}{\partial x^i}(x(p))\,\partial_{y^j}|_{F(p)}. $$

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, charts $(U,x)$ and $(V,y)$, and the coordinate representative $\tilde F$.

[F1] The differential acts on a derivation by precomposing target germs with $F$ ([[def-differential-of-a-smooth-map]]).

[L1] Coordinate derivations form bases of the tangent spaces ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to compute the values of $dF_p(\partial_{x^i}|_p)$ on the coordinate germs $[y^j]$ at $F(p)$. [L1, given]

2.1 By [F1], one has $dF_p(\partial_{x^i}|_p)([y^j])=\partial_{x^i}|_p([y^j\circ F])=\partial \tilde F^j/\partial x^i$ at $x(p)$. [F1, step 1.1]

3.1 The displayed linear combination of the $\partial_{y^j}|_{F(p)}$ has exactly the same values on all coordinate germs $[y^j]$, so it equals $dF_p(\partial_{x^i}|_p)$. [L1, step 2.1] ∎
