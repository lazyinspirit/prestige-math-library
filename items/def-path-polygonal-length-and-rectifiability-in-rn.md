---
id: def-path-polygonal-length-and-rectifiability-in-rn
kind: definition
title: "Paths in $\\mathbb{R}^n$, inscribed polygonal sums, arc length as their supremum, and rectifiability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-vector-valued-functions-limits-and-continuity, def-p-norms-on-rn, def-partition-and-refinement, def-complete-ordered-field, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Sections 5--6"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$ and $a\le b$. A **path in $\mathbb R^n$** is a continuous map $\gamma:[a,b]\to\mathbb R^n$. The map, its domain, and its parametrization are part of the path; its trace is only the set $\gamma([a,b])$.

If $a<b$ and $P=(t_0,\ldots,t_m)$ is a partition of $[a,b]$, define the **polygonal length inscribed by $P$** by

$$\ell_P(\gamma):=\sum_{i<m}\lVert\gamma(t_{i+1})-\gamma(t_i)\rVert_2.$$

The **arc length** is the extended-real supremum

$$L_{[a,b]}(\gamma):=\sup_P\ell_P(\gamma)\in[0,+\infty].$$

The path is **rectifiable** when these polygonal lengths are bounded above in $\mathbb R$, equivalently when $L_{[a,b]}(\gamma)<+\infty$. In that case the length is a nonnegative real number. When the interval is clear, write $L(\gamma)$.

On a singleton interval $[a,a]$, define $L_{[a,a]}(\gamma):=0$ and call every path with that domain rectifiable. There is one such path for each point of $\mathbb R^n$, namely the map sending $a$ to that point. This convention does not invoke a partition, whose published definition assumes distinct endpoints.
