---
id: def-polygonal-path-and-polygonal-connectedness
kind: definition
title: "Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$"
status: published
origin: session
deps: [def-path-connected, def-finite-cardinality, def-interval, def-vector-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Polygonal chain"
      url: "https://en.wikipedia.org/wiki/Polygonal_chain"
pipeline_run: null
---

## Definition

Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

$$\gamma(t)=\frac{t_i-t}{t_i-t_{i-1}}v_{i-1}+\frac{t-t_{i-1}}{t_i-t_{i-1}}v_i\quad\text{when }t_{i-1}\le t\le t_i.$$

The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

The subset $A$ is **polygonally connected** when every pair of its points is joined by a polygonal path in $A$.

## Remarks

A polygonal path is required to be a path, so its continuity is part of the definition. The next lemma verifies continuity for the displayed finite concatenations when their image lies in the stated subset.
