---
id: lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ
kind: lemma
title: "Pullback of a target germ by a smooth map is a well-defined source germ"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-germ-of-a-smooth-function-at-a-point, def-differential-of-a-smooth-map]
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

If $F:M\to N$ is smooth, $p\in M$, and $[g]\in C_{F(p)}^\infty(N)$, then the germ of $g\circ F$ at $p$ depends only on the germ $[g]$ at $F(p)$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, a point $p\in M$, and a germ $[g]$ at $F(p)$.

[F1] Equal germs agree on some neighbourhood of the base point ([[def-germ-of-a-smooth-function-at-a-point]]).

[F2] The differential uses the pullback germ $[g\circ F]$ at $p$ ([[def-differential-of-a-smooth-map]]).

## Proof

**Proof technique:** direct.

1.1 If $[g]=[h]$ at $F(p)$, then $g$ and $h$ agree on some neighbourhood $V$ of $F(p)$. By continuity of $F$, the inverse image of $V$ is a neighbourhood of $p$ on which $g\circ F=h\circ F$. [F1, given]

2.1 Therefore $g\circ F$ and $h\circ F$ define the same germ at $p$, so the pullback germ in [F2] is well defined. [F2, step 1.1]

3.1 Hence the target germ determines a unique source germ under pullback by $F$. [step 2.1] ∎
