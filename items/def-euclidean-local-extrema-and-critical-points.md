---
id: def-euclidean-local-extrema-and-critical-points
kind: definition
title: "Local and strict local extrema for scalar fields on Euclidean open sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hessian-and-euclidean-critical-point, def-metric-topology]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ be open, $a\in U$, and $f:U\to\mathbb R$. The point $a$ is a **local minimum** when some Euclidean neighbourhood $V$ of $a$ satisfies $f(a)\le f(x)$ for every $x\in U\cap V$; it is a **strict local minimum** when the inequality is strict for $x\ne a$. Local and strict local maxima reverse these inequalities. Euclidean neighbourhoods use [[def-metric-topology]]. A critical point is as in [[def-hessian-and-euclidean-critical-point]].
