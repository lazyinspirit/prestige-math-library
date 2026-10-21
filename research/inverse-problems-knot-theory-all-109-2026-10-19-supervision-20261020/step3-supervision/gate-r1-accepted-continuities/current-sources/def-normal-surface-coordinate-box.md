---
id: def-normal-surface-coordinate-box
kind: definition
title: Normal-surface coordinates and the Haken cone
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §5, Haken normal coordinates; §6, matching equations and
        fundamental-solution bounds.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.3, normal disks, matching equations, normal surfaces and
        fundamental solutions.
---

## Definition

Let $M$ be a compact piecewise-linear $3$-manifold with a finite simplicial triangulation $T$ consisting of $t$ tetrahedra. A **normal arc** in a triangular face is a properly embedded arc whose endpoints lie in the interiors of two distinct edges and which cuts off the third vertex. A **normal disk** in a tetrahedron is a properly embedded disk whose boundary is a union of normal arcs, one on each face it meets, and whose disk type is one of the following: one of four **triangle types**, each cutting off one tetrahedron vertex, or one of three **quadrilateral types**, each separating one pair of opposite vertices from the other pair. Disks of the same type are parallel copies. A **normal surface** is a properly embedded piecewise-linear surface that meets every tetrahedron in a finite disjoint union of these normal disks and whose arcs match across every interior face. The empty surface is admitted for coordinate addition and has the zero vector.

For each of the seven disk types in each tetrahedron, the **normal coordinate vector** $v(S)\in\mathbb Z_{\ge0}^{7t}$ records the number of disks of that type in a normal surface $S$. For an interior face shared by tetrahedra $\Delta$ and $\Delta'$, and for each of the three normal-arc types $\tau$ in that face, its **face-matching equation** is the equality between the sum of coordinates of disk types in $\Delta$ whose boundary contributes an arc of type $\tau$ and the corresponding sum for $\Delta'$. A disk type contributes either one such arc or none. A nonnegative integer vector is **admissible** when it satisfies all these equations and, in each tetrahedron, at most one of the three quadrilateral coordinates is nonzero. The **Haken cone** $C(T)\subseteq\mathbb R^{7t}$ is the set of nonnegative real vectors satisfying only the face-matching equations; it does not impose quadrilateral restrictions. A nonzero admissible integer vector is **fundamental** if it is not the sum of two nonzero admissible integer vectors. A **primitive vertex vector** is the unique nonnegative integer vector with relatively prime coordinates on a one-dimensional face (extreme ray) of $C(T)$.

A standard schematic records the two disk shapes in a tetrahedron. The vertices are $A,B,C,D$; each red polygon is the intersection of a normal disk with the tetrahedron boundary.

~~~tikz
\begin{tikzpicture}[scale=0.9, every node/.style={font=\small}]
\coordinate (A) at (0,0); \coordinate (B) at (2.7,0); \coordinate (C) at (1.35,2.2); \coordinate (D) at (1.45,0.95);
\draw (A)--(B)--(C)--cycle; \draw (A)--(D)--(B); \draw (C)--(D);
\node[below left] at (A) {$A$}; \node[below right] at (B) {$B$}; \node[above] at (C) {$C$}; \node[right] at (D) {$D$};
\draw[red,thick] (0.55,0.00)--(0.551,0.361)--(0.3375,0.55)--cycle;
\node[red] at (0.30,0.70) {triangle};
\begin{scope}[xshift=4.1cm]
\coordinate (A) at (0,0); \coordinate (B) at (2.7,0); \coordinate (C) at (1.35,2.2); \coordinate (D) at (1.45,0.95);
\draw (A)--(B)--(C)--cycle; \draw (A)--(D)--(B); \draw (C)--(D);
\node[below left] at (A) {$A$}; \node[below right] at (B) {$B$}; \node[above] at (C) {$C$}; \node[right] at (D) {$D$};
\draw[red,thick] (0.483,0.317)--(0.45,0.733)--(2.25,0.733)--(2.283,0.317)--cycle;
\node[red] at (1.35,0.62) {quadrilateral};
\end{scope}
\end{tikzpicture}
~~~

The picture is only a schematic of the boundary intersection pattern. The definition is the stated proper embedding and matching condition; no proof below relies on the drawing.

## Definition references

[Hass–Lagarias–Pippenger, §5](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — normal disks, matching equations and the Haken cone.

[Erickson, “Normal Surfaces and Knots,” §§14.1–14.3](https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf) — triangle and quadrilateral disk types and normal-coordinate conventions.
