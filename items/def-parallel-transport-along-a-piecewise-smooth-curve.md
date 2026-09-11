---
id: def-parallel-transport-along-a-piecewise-smooth-curve
kind: definition
title: "Parallel transport along a piecewise smooth curve"
status: published
origin: pipeline
deps: ["thm-existence-and-uniqueness-of-parallel-sections"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

For a piecewise smooth curve $\gamma:[a,b]\to M$ and $v\in E_{\gamma(a)}$, let $V_v$ be the unique continuous piecewise parallel section with $V_v(a)=v$, supplied by [[thm-existence-and-uniqueness-of-parallel-sections]]. Its **parallel transport** is
$$P_\gamma:E_{\gamma(a)}\to E_{\gamma(b)},\qquad P_\gamma(v)=V_v(b).$$
More generally, $P_{\gamma;s,t}$ sends initial data at $s$ to its value at $t$, allowing either order of the parameters. The same theorem gives independence from frames and subdivisions. On a singleton, $P_\gamma$ is the identity of its fibre. An empty curve has no endpoint fibres and is not assigned such a map. Zero initial data maps to zero; the transport depends on the supplied connection as well as the curve. Linearity and invertibility are proved next.
