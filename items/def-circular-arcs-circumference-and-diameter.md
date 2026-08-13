---
id: def-circular-arcs-circumference-and-diameter
kind: definition
title: "Circular arcs, circumference as arc length, and diameter"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-p-norms-on-rn, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4.3"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

Let $c=(c_1,c_2)\in\mathbb R^2$ and $r>0$. A **circular arc** of the circle with centre $c$ and radius $r$ is a restriction

$$\gamma_{c,r}|_{[\alpha,\beta]},\qquad \gamma_{c,r}(t)=c+r(\cos t,\sin t),\qquad \alpha<\beta,$$

taken as a parametrized path rather than as its image; its **trace** is that image. The parameter interval is part of the arc, because a set of points does not determine a length: the same trace is swept by restrictions of different lengths.

The arc's length is the path length of [[def-path-polygonal-length-and-rectifiability-in-rn]] computed with the Euclidean norm of [[def-p-norms-on-rn]]. The **circumference** $C(r)$ is $L(\gamma_{c,r})$ for the once-around parameter interval $[0,2\pi]$, where $\pi$ is the constant of [[def-pi-via-first-positive-cosine-zero]]. Translation does not affect the value, so the notation suppresses $c$. The **diameter** is $d(r):=2r$.

The phrase *once around* is part of the convention: a parametrized path that repeats the same trace can have a larger length.
