---
id: def-contact-equivalence-of-smooth-curves-at-a-point
kind: definition
title: "Contact equivalence of smooth curves at a point"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold]
justified_by: [lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation]
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

Let $M$ be a smooth manifold, let $p\in M$, and let $\gamma_1$ and $\gamma_2$ be smooth curves in $M$ defined near $0$ with $\gamma_1(0)=\gamma_2(0)=p$. They are **contact equivalent at $p$** when, in one smooth chart $(U,x)$ around $p$, the derivatives of the coordinate curves agree at $0$:
$$ (x\circ\gamma_1)'(0)=(x\circ\gamma_2)'(0). $$
The next lemma shows that this condition is chart independent.
