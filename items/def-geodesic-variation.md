---
id: def-geodesic-variation
kind: definition
title: Geodesic variation
status: published
origin: pipeline
deps:
  - def-smooth-variation-and-variation-field-of-a-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Lectures 21–24"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Definition

Let $a<b$, let $\varepsilon>0$, and let
$$F:(-\varepsilon,\varepsilon)\times[a,b]\longrightarrow M$$
be a smooth map, smooth up to the two time endpoints. It is a **geodesic
variation** when for every $s\in(-\varepsilon,\varepsilon)$ the longitudinal
curve $t\mapsto F(s,t)$ is an affinely parametrized geodesic; equivalently,
$$D_t\partial_tF(s,t)=0.$$
The central geodesic is $\gamma(t)=F(0,t)$, and its **variation field** is
$$V(t)=\left.\partial_sF(s,t)\right|_{s=0}\in T_{\gamma(t)}M.$$
This is the variation-field construction in
[[def-smooth-variation-and-variation-field-of-a-curve]], with the additional
condition that every longitudinal curve is geodesic. No fixed-endpoint
condition is imposed: $V(a)$ and $V(b)$ may be nonzero. Constant geodesics are
allowed, including on zero-dimensional manifolds; dimension one is covered by
the same definition. If $M$ is empty, there is no such map on the nonempty
parameter interval, so the definition assigns no variation object.
