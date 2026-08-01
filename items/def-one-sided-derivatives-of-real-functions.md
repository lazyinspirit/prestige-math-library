---
id: def-one-sided-derivatives-of-real-functions
kind: definition
title: "The left and right derivatives of a real function as one-sided limits of its difference quotient"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-one-sided-limits, def-derivative]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Definition

Let $f:I\to\mathbb R$ and let $c\in I$ have points of $I$ on the indicated side. The **left derivative** and **right derivative**, when the corresponding one-sided limits exist as real numbers, are

$$f'_-(c):=\lim_{x\to c^-}\frac{f(x)-f(c)}{x-c},\qquad f'_+(c):=\lim_{x\to c^+}\frac{f(x)-f(c)}{x-c}.$$

These are the one-sided limits of the difference quotient ([[def-one-sided-limits]]). If both exist and are equal, their common value is the ordinary derivative from [[def-derivative]].
