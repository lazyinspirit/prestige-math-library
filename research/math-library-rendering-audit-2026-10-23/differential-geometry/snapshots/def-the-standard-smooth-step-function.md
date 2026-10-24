---
id: def-the-standard-smooth-step-function
kind: definition
title: "The standard smooth step function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-the-standard-flat-function-is-smooth-and-flat-at-zero]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-30
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

Let $\beta$ be the standard flat function. The **standard smooth step function** is
$$ \sigma(t):=\frac{\beta(t)}{\beta(t)+\beta(1-t)}. $$
Because $\beta$ is smooth and positive on $(0,\infty)$, the denominator is positive on $(0,1)$, while $\sigma(t)=0$ for $t\le 0$ and $\sigma(t)=1$ for $t\ge 1$.

## Remarks

The function $\sigma$ is smooth on all of $\mathbb R$ and takes values in $[0,1]$.
