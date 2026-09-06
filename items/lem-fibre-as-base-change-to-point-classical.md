---
id: lem-fibre-as-base-change-to-point-classical
kind: lemma
title: A classical fibre is base change to a point
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-base-change-classical-varieties, def-regular-map-image-and-fibre-classical]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Example 5.31
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
---

## Statement

For a constructed classical pullback and a closed $k$-point $s\to S$, $X\times_S\{s\}$ has underlying set $f^{-1}(s)$; on affine charts it is cut out by the point ideal.

## Facts & Assumptions

**Given:** $f:X\to S$ and a closed $k$-point $s$.

## Proof

1.1 Every point of a classical algebraic set over the page's algebraically closed field $k$ is the image of a unique morphism from the one-point algebraic set $\{*\}$; such maps are regular. Test the given pullback universal property on $\{*\}$. It identifies morphisms $\{*\}\to X\times_S\{s\}$ with pairs of point maps whose composites to $S$ agree. Projection therefore gives a canonical bijection of its underlying set with $f^{-1}(s)$, rather than assuming that identification as part of the construction. [given]

2.1 Choose affine opens $W\subseteq X$ and $V\subseteq S$ with $s\in V$ and $f(W)\subseteq V$. Let $\mathfrak m_s\subseteq k[V]$ be the point ideal and let $J=k[W]f^*(\mathfrak m_s)$ be its generated ideal in $k[W]$. The equations $f^*(h)=0$ for $h\in\mathfrak m_s$ cut out exactly $W\cap f^{-1}(s)$. With its reduced classical algebraic-set structure this locus has coordinate ring $k[W]/\sqrt J$. These local structures agree on restrictions and give the reduced closed fibre $F\subseteq X$. [step 1.1, algebra]

3.1 If a pair of regular maps from a classical test object commutes over $s$, its map to $X$ has image in $F$. On the affine charts of step 2.1, pullback kills $J$ and therefore $\sqrt J$, since regular functions on a classical algebraic set form a reduced ring. The map consequently factors regularly through $F$, uniquely because $F\to X$ is inclusion. These local factorizations agree on overlaps. Thus $F$ has the same pullback universal property, and the unique projection-compatible isomorphism with the given constructed pullback proves the coordinate-ring assertion. The empty fibre corresponds to the unit ideal and zero coordinate ring. [step 2.1] ∎
