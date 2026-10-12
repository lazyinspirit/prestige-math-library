---
id: def-differential-of-a-smooth-real-valued-function
kind: definition
title: "The differential of a smooth real-valued function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-differential-of-a-smooth-map]
justified_by: []
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

If $f:M\to \mathbb R$ is smooth and $p\in M$, the **differential of $f$ at $p$** is the map $df_p:T_pM\to\mathbb R$ defined by $df_p(v):=v([f])$. Under the canonical identification
$$T_{f(p)}\mathbb R\longrightarrow\mathbb R,\qquad w\longmapsto w([\operatorname{id}_{\mathbb R}]),$$
this is the general differential $d f_p:T_pM\to T_{f(p)}\mathbb R$.
