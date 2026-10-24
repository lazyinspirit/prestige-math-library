---
id: def-ideal-tetrahedron-shape-and-cusp-holonomy
kind: definition
title: "Ideal tetrahedron shape and cusp holonomy"
status: published
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
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Use the upper half-space model
$$\mathbb H^3=\{(x+iy,t):x,y\in\mathbb R,\ t>0\},\qquad ds^2=t^{-2}(dx^2+dy^2+dt^2),$$
whose ideal boundary is $\mathbb C\cup\{\infty\}$. An oriented ideal tetrahedron in normalized position has ideal vertices $0,1,\infty,z$, where $\operatorname{Im}z>0$. Its three edge-shape parameters are
$$z,\qquad z'=\frac1{1-z},\qquad z''=\frac{z-1}{z},$$
Assign $z$ to the edges $0\infty$ and $1z$, $z'$ to $1\infty$ and $0z$, and $z''$ to $z\infty$ and $01$. The parameter at a corner of a truncated ideal vertex triangle is the parameter of the incident edge. In a triangulated oriented torus link of ideal vertices, use oriented normal paths: paths avoiding link vertices, transverse to link edges, and meeting each triangle in arcs joining distinct sides, each cutting off one corner. Represent a loop by such a path before computing its cusp multiplier. For a chosen normal path $\gamma$, its cusp multiplier $H(\gamma)$ is the product of the corner parameters it cuts off, using the parameter when the corner is on its left and its reciprocal when the corner is on its right.

## Definition references

[Jessica S. Purcell, *Hyperbolic Knot Theory*, §§4.2–4.3](https://users.monash.edu/~jpurcell/book/HypKnotTheory.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

## Remarks

The left panel is the triangle obtained by truncating the vertex $\infty$, with its orientation represented by the usual counterclockwise orientation in the plane. Its corners correspond to the incident edges $0\infty$, $1\infty$, and $z\infty$. The same parameters occur on the opposite edges $1z$, $0z$, and $01$, respectively. The two right panels show a normal arc cutting off a corner with parameter $q\in\{z,z',z''\}$: the corner lies on the left of the first arrow and on the right of the reversed arrow. These are local contributions to the product defining $H(\gamma)$, not entire cusp loops.

```tikz
\begin{tikzpicture}[scale=0.9]
\draw (0,0) -- (3,0) -- (1.5,2.6) -- (0,0);
\node[below left] at (0,0) {$0\infty:\ z$};
\node[below right] at (3,0) {$1\infty:\ z'$};
\node[above] at (1.5,2.6) {$z\infty:\ z''$};
\node at (1.5,-0.85) {cusp triangle at $\infty$};
\draw (4.6,0) -- (6.6,0) -- (5.6,2.6) -- (4.6,0);
\node[above] at (5.6,2.6) {$q$};
\draw[->,thick] (5.06,1.2) -- (6.14,1.2);
\node at (5.6,-0.42) {factor $q$};
\node at (5.6,-0.95) {corner on left};
\draw (8,0) -- (10,0) -- (9,2.6) -- (8,0);
\node[above] at (9,2.6) {$q$};
\draw[->,thick] (9.54,1.2) -- (8.46,1.2);
\node at (9,-0.42) {factor $q^{-1}$};
\node at (9,-0.95) {corner on right};
\end{tikzpicture}
```
