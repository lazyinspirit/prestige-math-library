---
id: def-solid-of-revolution-about-a-coordinate-axis
kind: definition
title: 'Solids of revolution about a coordinate axis'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-spheres-and-closed-balls, def-continuity-real, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §§3–5"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Definition

Let $a\le b$ and let $f:[a,b]\to[0,\infty)$ be continuous. The **solid obtained by revolving the profile $f$ about the $x$-axis** is

$$S_x(f):=\{(x,y,z)\in\mathbb R^3:a\le x\le b,\ y^2+z^2\le f(x)^2\}.$$

If instead $0\le a\le b$, the **solid obtained by revolving the region under $f$ about the $y$-axis** is

$$S_y(f):=\{(x,y,z)\in\mathbb R^3:a\le\lVert(x,z)\rVert_2\le b,\ 0\le y\le f(\lVert(x,z)\rVert_2)\}.$$

The first description has perpendicular disc sections. The second has cylindrical shells. Zero values of $f$, a zero inner radius, and the degenerate interval $a=b$ are included.
