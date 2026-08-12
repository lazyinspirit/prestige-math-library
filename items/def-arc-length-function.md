---
id: def-arc-length-function
kind: definition
title: "The arc-length function $s_\\gamma(t)=L(\\gamma|_{[a,t]})$ of a rectifiable path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-path-polygonal-length-and-rectifiability-in-rn, thm-arc-length-is-additive-over-subintervals]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb R^n$ be rectifiable. Its **arc-length function** is

$$s_\gamma:[a,b]\to\mathbb R,\qquad s_\gamma(t):=L_{[a,t]}(\gamma|_{[a,t]}).$$

The value is finite because every restriction of a rectifiable path is rectifiable by length additivity. In particular

$$s_\gamma(a)=0,\qquad s_\gamma(b)=L_{[a,b]}(\gamma),$$

and for $a\le u\le v\le b$,

$$s_\gamma(v)-s_\gamma(u)=L_{[u,v]}(\gamma|_{[u,v]}).$$

The last identity is the additive length theorem applied at $u$ and $v$, not an additional convention.
