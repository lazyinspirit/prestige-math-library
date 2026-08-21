---
id: def-base-and-height-for-plane-figures
kind: definition
title: "Base and perpendicular height for a chosen side of a plane figure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-parallelogram-and-triangle-in-r2, def-metric-bounded-diameter, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Definition

Let $p,v,w\in\mathbb R^2$ with $v\ne0$. For the parallelogram $P(p;v,w)$ ([[def-parallelogram-and-triangle-in-r2]]), the **base length along $v$** is $\lVert v\rVert_2$, and the corresponding **perpendicular height** is

$$d(w,\mathbb Rv):=\inf_{t\in\mathbb R}\lVert w-tv\rVert_2,\qquad \mathbb Rv:=\{tv:t\in\mathbb R\}.$$

The infimum is the Euclidean point-to-set distance; it is defined because the line $\mathbb Rv$ is nonempty ([[def-metric-bounded-diameter]], [[def-euclidean-inner-product]]).

For the triangle $T(A,B,C)$ with chosen nonzero side $A B$, the **base length** is $\lVert B-A\rVert_2$ and the corresponding **height** is $d(C-A,\mathbb R(B-A))$. This is the distance from $C$ to the full line through $A$ and $B$, not necessarily to the segment $[A,B]$.
