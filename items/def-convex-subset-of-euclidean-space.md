---
id: def-convex-subset-of-euclidean-space
kind: definition
title: "A convex subset of $\\mathbb{R}^m$ contains every line segment between two of its points"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euclidean-inner-product, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Definition

A subset $U\subseteq\mathbb R^m$ is **convex** when, for all $x,y\in U$ and $t\in[0,1]$ ([[def-interval]]), the point $(1-t)x+ty$ lies in $U$. Thus the full line segment from $x$ to $y$ remains in $U$.
