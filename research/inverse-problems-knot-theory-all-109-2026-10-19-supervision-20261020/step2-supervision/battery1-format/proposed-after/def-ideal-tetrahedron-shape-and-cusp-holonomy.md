---
id: def-ideal-tetrahedron-shape-and-cusp-holonomy
kind: definition
title: "Ideal tetrahedron shape and cusp holonomy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jessica S. Purcell, Hyperbolic Knot Theory"
      url: "https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf"
      locator: "§4.2, Lemma 4.6 and edge parameters, printed pp.70–72; §4.3, Definition 4.12, printed pp.75–76"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.1–4.3, ideal edge parameters and cusp completeness"
verification:
  precheck: n/a
---

## Definition

Use the upper half-space model
$$\mathbb H^3=\{(x+iy,t):x,y\in\mathbb R,\ t>0\},\qquad ds^2=t^{-2}(dx^2+dy^2+dt^2),$$
whose ideal boundary is $\mathbb C\cup\{\infty\}$. An oriented ideal tetrahedron in normalized position has ideal vertices $0,1,\infty,z$, where $\operatorname{Im}z>0$. Its three edge-shape parameters are
$$z,\qquad z'=\frac1{1-z},\qquad z''=\frac{z-1}{z},$$
each assigned to one pair of opposite edges; the parameter at a corner of a truncated ideal vertex triangle is the parameter of the incident edge. For an oriented path $\gamma$ in a triangulated torus link of ideal vertices, its cusp multiplier $H(\gamma)$ is the product of the corner parameters encountered along $\gamma$, using the parameter when the path cuts off that corner on its left and its reciprocal when it cuts off the corner on its right.

## Definition references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §§4.2–4.3](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
