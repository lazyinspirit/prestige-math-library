---
id: def-differential-of-a-smooth-map
kind: definition
title: "The differential of a smooth map"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-derivation-at-a-point-and-tangent-space]
justified_by: [lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ, lem-the-differential-sends-derivations-to-derivations-and-is-linear]
aliases: []
landmark: false
verification:
  precheck: n/a
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

## Definition

Let $F:M\to N$ be smooth and let $p\in M$. The **differential of $F$ at $p$** is the map $dF_p:T_pM\to T_{F(p)}N$ defined by
$$ dF_p(v)([g]):=v([g\circ F]) $$
for every derivation $v\in T_pM$ and every germ $[g]\in C_{F(p)}^\infty(N)$.
