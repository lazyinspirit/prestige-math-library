---
id: def-supporting-line-for-a-real-function
kind: definition
title: "A supporting line of slope $m$ for a real function at an interior point"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Definition

Let $f:I\to\mathbb R$, where $I$ is an interval ([[def-interval]]), and let $c$ be an interior point of $I$. A line of slope $m$ **supports** $f$ at $c$ when

$$f(x)\ge f(c)+m(x-c)$$

for every $x\in I$. The supporting line is the affine function $x\mapsto f(c)+m(x-c)$.
