---
id: def-germ-of-a-smooth-function-at-a-point
kind: definition
title: "The germ of a smooth function at a point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold]
justified_by: [lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions]
aliases: []
landmark: false
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

Let $M$ be a smooth manifold and $p\in M$. Two pairs $(U,f)$ and $(V,g)$, where $U$ and $V$ are open neighbourhoods of $p$ and $f:U\to\mathbb R$, $g:V\to\mathbb R$ are smooth, are **equivalent at $p$** when there is an open neighbourhood $W\subseteq U\cap V$ of $p$ such that $f|_W=g|_W$. An equivalence class is a **germ of a smooth function at $p$**.
