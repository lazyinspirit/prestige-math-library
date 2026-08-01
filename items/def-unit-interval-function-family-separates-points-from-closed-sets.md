---
id: def-unit-interval-function-family-separates-points-from-closed-sets
kind: definition
title: "A family of continuous unit-interval-valued functions that separates points from closed sets"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-continuous-map-top, def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Moorhouse, The Stone–Čech Compactification"
      url: "https://ericmoorhouse.org/handouts/stone-cech.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space. A family $\mathcal F$ of continuous maps $f:X\to[0,1]$ ([[def-continuous-map-top]], [[def-interval]]) **separates points from closed sets** when both conditions hold:

1. for every distinct $x,y\in X$, some $f\in\mathcal F$ has $f(x)\ne f(y)$; and
2. for every closed $C\subseteq X$ and every $x\notin C$, some $f\in\mathcal F$ satisfies $f(x)=1$ and $f[C]=\{0\}$.

The empty family has these properties precisely when $X=\varnothing$. Indeed, if
$x\in X$, the closed set $C=\varnothing$ makes clause 2 demand a member of the
family. Thus a one-point space still needs a separating function for its point
and the empty closed set; no coordinate is silently selected in either case.
