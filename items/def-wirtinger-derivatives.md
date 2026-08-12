---
id: def-wirtinger-derivatives
kind: definition
title: "The Wirtinger derivatives $\\partial_z f$ and $\\partial_{\\bar z}f$, and antiholomorphic functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-directional-and-partial-derivatives]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.2.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb C$ be open and write a map $f:U\to\mathbb C$ as $f=u+iv$ in Euclidean coordinates. At a point where the four real partial derivatives exist, define

$$ \partial_z f:=\frac12(\partial_x f-i\partial_y f)=\frac12(u_x+v_y)+\frac{i}{2}(v_x-u_y), $$

$$ \partial_{\bar z}f:=\frac12(\partial_x f+i\partial_y f)=\frac12(u_x-v_y)+\frac{i}{2}(v_x+u_y). $$

The partial derivatives are those of [[def-directional-and-partial-derivatives]]. If $f$ is real totally differentiable at the point, direct expansion gives the differential identity

$$ Df(h)=(\partial_z f)h+(\partial_{\bar z}f)\overline h. $$

A real-differentiable map is **antiholomorphic** on $U$ when $\partial_z f=0$ at every point of $U$. Thus its differential is conjugate-linear at every point; no complex differentiability is asserted unless the other Wirtinger derivative also vanishes.
