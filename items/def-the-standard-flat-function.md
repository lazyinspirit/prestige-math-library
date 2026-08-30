---
id: def-the-standard-flat-function
kind: definition
title: "The standard flat function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-exponential-function-and-e]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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

Define $\beta:
\mathbb R\to\mathbb R$ by
$$ \beta(t):=\begin{cases}\exp(-1/t),& t>0,\\ 0,& t\le 0.\end{cases} $$
This is the **standard flat function**.

## Remarks

- $\beta(t)>0$ for every $t>0$.
- The only nontrivial point in later arguments is the junction at $t=0$.
