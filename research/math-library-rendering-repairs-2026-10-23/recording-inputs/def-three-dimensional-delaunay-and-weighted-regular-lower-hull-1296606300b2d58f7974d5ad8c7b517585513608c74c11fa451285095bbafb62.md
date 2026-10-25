---
id: def-three-dimensional-delaunay-and-weighted-regular-lower-hull
kind: definition
title: "Three-dimensional Delaunay and weighted regular triangulations by lifting"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 2
deps:
  - def-indexed-geometric-site-set
  - lem-lifted-power-sphere-determinant-identity
  - def-lexicographic-lift-tie-break
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delaunay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulation"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Definition

For a weighted site $(p,w)$, define its power distance from $x\in\mathbb R^3$ by
$$\pi_{(p,w)}(x)=\|x-p\|^2-w.$$
Its lifted point is $\widehat p=(p,\|p\|^2-w)\in\mathbb R^4$. A lower face of the lifted convex hull is a face supported by a nonvertical hyperplane $z=\ell(x)$ with every lifted site on or above that hyperplane. The projection of the union of lower faces is the **regular subdivision** of the projected sites; a simplex in that subdivision has an empty power sphere, meaning its common power distance is no larger than that of any input site.

The lex-refined lift is interpreted over the ordered rational-function field of [[def-lexicographic-lift-tie-break]], using one fixed finite universe of all input sites. When every weight is zero, the regular subdivision is the ordinary 3D Delaunay subdivision and power spheres are circumspheres. A weighted site is **original-hidden** if its unperturbed lift is not a vertex of any lower face of the original lifted convex hull, and **formal-hidden** if its lex-refined lift is not a vertex of any lower face of the fixed formal lifted convex hull. These notions can differ; the algorithm's `hidden` report means formal-hidden. A nonsimplicial lower face is refined with the same fixed-universe lexicographic lift convention. For projected affine dimension below three, the algorithm reports `lower-dimensional` with that dimension and the exact deduplicated site list, and makes no tetrahedralization claim. A tetrahedral output is claimed only on the full-dimensional branch with nondegenerate projected bases.


## Remarks

The schematic below shows the unperturbed lift when a lower face $F$ is a simplex with four affinely independent projected vertices $p_0,p_1,p_2,p_3$. The box denotes the supporting hyperplane $H=\{(x,z):z=\ell(x)\}\subset\mathbb R^4$, not a two-dimensional plane in physical space. All lifted sites lie on or above $H$; a representative site strictly above it is indicated. The dashed arrows apply $\mathrm{pr}(x,z)=x$ to the vertices, giving the cell $\mathrm{pr}(F)=\mathrm{conv}\{p_0,p_1,p_2,p_3\}\subset\mathbb R^3$. The placement of objects is schematic and does not represent four-dimensional distances.

```tikz
\begin{tikzpicture}[scale=0.95, every node/.style={font=\small}]
\node at (3.3,6.8) {Unperturbed lift in $\mathbb R^4$};
\draw[rounded corners,dashed] (-0.6,3.35) rectangle (7.2,5.95);
\node[anchor=west] at (-0.35,5.65) {$H:\ z=\ell(x)$};
\fill (5.2,6.35) circle (2pt) node[right] {$\widehat q,\ z_q>\ell(q)$};
\coordinate (a) at (1,3.8);
\coordinate (b) at (5,3.8);
\coordinate (c) at (4.1,5.25);
\coordinate (d) at (2.7,4.25);
\draw[thick] (a)--(b)--(c)--(a);
\draw[thick] (a)--(d)--(b);
\draw[thick] (d)--(c);
\fill (a) circle (2pt) node[left] {$\widehat p_0$};
\fill (b) circle (2pt) node[right] {$\widehat p_1$};
\fill (c) circle (2pt) node[above] {$\widehat p_2$};
\fill (d) circle (2pt) node[left] {$\widehat p_3$};
\node at (6.25,4.7) {$F\subset H$};
\coordinate (A) at (1,0.3);
\coordinate (B) at (5,0.3);
\coordinate (C) at (4.1,1.75);
\coordinate (D) at (2.7,0.75);
\draw[->,dashed] (a)--(A);
\draw[->,dashed] (b)--(B);
\draw[->,dashed] (c)--(C);
\draw[->,dashed] (d)--(D);
\node[anchor=west] at (5.25,2.7) {$\mathrm{pr}(x,z)=x$};
\draw[thick] (A)--(B)--(C)--(A);
\draw[thick] (A)--(D)--(B);
\draw[thick] (D)--(C);
\fill (A) circle (2pt) node[left] {$p_0$};
\fill (B) circle (2pt) node[right] {$p_1$};
\fill (C) circle (2pt) node[above] {$p_2$};
\fill (D) circle (2pt) node[left] {$p_3$};
\node at (3,-0.35) {Projected cell in $\mathbb R^3$};
\end{tikzpicture}
```

Here $\widehat p_i=(p_i,\|p_i\|^2-w_i)$. This picture makes no tetrahedralization claim for lower-dimensional or degenerate input and does not depict the formal lex-refined lift $h_i+\varepsilon^{2^{r_i}}$ over the fixed universe. Original-hidden and formal-hidden sites must still be distinguished as in the definition. The figure is explanatory; all defining conditions above stand independently of it.
