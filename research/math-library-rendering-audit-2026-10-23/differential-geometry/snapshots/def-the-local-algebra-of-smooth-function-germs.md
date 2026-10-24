---
id: def-the-local-algebra-of-smooth-function-germs
kind: definition
title: "The local algebra of smooth function germs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-germ-of-a-smooth-function-at-a-point]
justified_by: [lem-algebra-operations-on-smooth-germs-are-representative-independent]
aliases: []
landmark: false
verification:
  audited: 2026-08-30
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

Let $M$ be a smooth manifold and let $p\in M$. Let $C_p^\infty(M)$ denote the set of smooth germs at $p$. For germs represented by smooth functions $f$ and $g$ near $p$, define
$$ [f]+[g]:=[f+g],\qquad [f][g]:=[fg],\qquad c[f]:=[cf] \text{ for } c\in\mathbb R. $$
These operations make $C_p^\infty(M)$ the **local algebra of smooth function germs at $p$**, once representative independence is checked.
