---
id: def-group-action
kind: definition
title: "Left group actions, transitive actions, and faithful actions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Brosnan, Group actions"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0034.html"
pipeline_run: null
---

## Definition

Let $G$ be a group with identity $e$ and let $X$ be a set. A **left action** of
$G$ on $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$,
such that

$$e\cdot x=x,\qquad (gh)\cdot x=g\cdot(h\cdot x)$$

for all $g,h\in G$ and $x\in X$. Then $X$ is a **$G$-set**. The action is
**transitive** when every $x,y\in X$ satisfy $g\cdot x=y$ for some $g\in G$.
It is **faithful** when $g\cdot x=x$ for every $x\in X$ implies $g=e$.
