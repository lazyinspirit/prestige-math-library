---
id: def-singular-boundary-point-and-natural-boundary
kind: definition
title: "Singular boundary points and natural boundaries of function elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function-element-and-direct-analytic-continuation]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §2.1"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Definition

Let $(f,U)$ be a function element and let $\zeta \in \partial U$.

The boundary point $\zeta$ is **regular for $(f,U)$** when there is a function
element $(g,V)$ with $\zeta \in V$ such that

$$g=f\qquad\text{on }U\cap V.$$

Since $V$ is an open neighbourhood of the boundary point $\zeta$, the
intersection $U\cap V$ is nonempty. So a regular boundary point is one across
which $(f,U)$ extends holomorphically on a full neighbourhood, not merely one
where some remote overlap carries a direct analytic continuation in the sense of
[[def-function-element-and-direct-analytic-continuation]].

The point $\zeta$ is a **singular boundary point** of $(f,U)$ when it is not
regular.

If $B \subseteq \partial U$ and every point of $B$ is singular for $(f,U)$, then
$B$ is a **natural boundary** for $(f,U)$. In particular, saying that the whole
boundary $\partial U$ is natural means that $(f,U)$ admits no holomorphic
extension across any boundary point.
