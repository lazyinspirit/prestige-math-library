---
id: ex-knot-kt-49-worked-cases
kind: example
title: "Worked case: a normal disk in the zero-crossing unknot exterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-normal-surface-coordinate-box
  - lem-good-linear-size-exterior-triangulation-from-diagram
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational
        Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)
      url: https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf
      locator: §§4–7; the unknot exterior, normal-surface disk tests and triangulation
        convention.
    - title: Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture
        notes (2009)
      url: https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf
      locator: §§14.1–14.4, complete six-page note on normal disks and knot exteriors.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

For the crossingless oriented unknot code, triangulate its solid-torus exterior $D^2\times S^1$ by triangulating $D^2$ as one triangle with vertices $a_0,a_1,a_2$ and $S^1$ as the three-edge cycle $b_0b_1b_2b_0$. In the prism over $b_0b_1$, write $a_i^0=(a_i,b_0)$ and $a_i^1=(a_i,b_1)$ and use the tetrahedra
$$T_1=[a_0^0,a_1^0,a_2^0,a_2^1],\qquad T_2=[a_0^0,a_1^0,a_1^1,a_2^1],\qquad T_3=[a_0^0,a_0^1,a_1^1,a_2^1].$$
The properly embedded normal disk $D^2\times\{s_*\}$ at the midpoint $s_*$ of $b_0b_1$ meets $T_1$ in the triangle cutting off $a_2^1$, $T_2$ in the quadrilateral separating $\{a_0^0,a_1^0\}$ from $\{a_1^1,a_2^1\}$, and $T_3$ in the triangle cutting off $a_0^0$; every other normal coordinate is zero. It is connected, has nonempty boundary and Euler characteristic one, and its boundary meets the marked original meridian $\mu=\{a_0\}\times S^1$ once mod two.

```tikz
\begin{tikzpicture}[scale=1]
\coordinate (A0) at (0,0); \coordinate (A1) at (2,0); \coordinate (A2) at (1,1.5);
\coordinate (B0) at (0.6,0.7); \coordinate (B1) at (2.6,0.7); \coordinate (B2) at (1.6,2.2);
\draw (A0)--(A1)--(A2)--cycle; \draw (B0)--(B1)--(B2)--cycle;
\draw (A0)--(B0) (A1)--(B1) (A2)--(B2);
\draw[dashed] (A0)--(B1) (A0)--(B2) (A1)--(B2);
\coordinate (M0) at (0.3,0.35); \coordinate (M1) at (2.3,0.35); \coordinate (M2) at (1.3,1.85);
\draw[red,very thick] (M0)--(M1)--(M2)--cycle;
\node[below left] at (A0) {$a_0^0$}; \node[below right] at (A1) {$a_1^0$}; \node[left] at (A2) {$a_2^0$};
\node[left] at (B0) {$a_0^1$}; \node[right] at (B1) {$a_1^1$}; \node[above] at (B2) {$a_2^1$};
\node[red] at (1.35,0.8) {$D^2\times\{s_*\}$};
\end{tikzpicture}
```

The dashed edges indicate the staircase prism subdivision specified by $T_1,T_2,T_3$; the red section is the geometric disk whose intersections with those tetrahedra give the stated triangle–quadrilateral–triangle vector. The formula for the tetrahedra, not the schematic projection, fixes the exact triangulation.

## Example references

[[def-normal-surface-coordinate-box]] — triangle and quadrilateral normal disk types.

[[lem-good-linear-size-exterior-triangulation-from-diagram]] — fixed crossingless solid-torus exterior model and marked meridian path.

[Hass–Lagarias–Pippenger, §4 and §5](https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf) — unknot exterior and normal disk coordinates.

## Facts & Assumptions

**Given:** The product triangulation $D^2\times S^1$ of the exterior and its marked meridian path.

[F1] [[def-normal-surface-coordinate-box]]: a triangle or quadrilateral normal disk meets tetrahedral faces in matching normal arcs; admissibility allows at most one quadrilateral type per tetrahedron.

[F2] [[lem-good-linear-size-exterior-triangulation-from-diagram]]: at zero crossings the exterior is a fixed triangulated solid torus with the original meridian represented by a three-edge fibre cycle.

## Verification

1.1 For the prism over $b_0b_1$, write $a_i^0=(a_i,b_0)$ and $a_i^1=(a_i,b_1)$. Use the staircase tetrahedra
$$T_1=[a_0^0,a_1^0,a_2^0,a_2^1],\qquad T_2=[a_0^0,a_1^0,a_1^1,a_2^1],\qquad T_3=[a_0^0,a_0^1,a_1^1,a_2^1].$$
Their common faces are triangulated by the same ordered diagonals, so the three tetrahedra form the triangular-prism block; repeating this order on the three-cycle of $S^1$ gives the product triangulation in [F2]. [given, F2, construct]

2.1 The level disk at the midpoint of the product edge separates the bottom vertices $a_i^0$ from the top vertices $a_i^1$. In $T_1$ it cuts off the single top vertex $a_2^1$, giving one triangle; in $T_2$ it separates the pair $\{a_0^0,a_1^0\}$ from $\{a_1^1,a_2^1\}$, giving one quadrilateral; in $T_3$ it cuts off the single bottom vertex $a_0^0$, giving one triangle. It misses all tetrahedra in the other two prism blocks. Its intersections on shared faces agree because they are the same level section of the product, so the matching equations hold. Only one quadrilateral coordinate is nonzero, so [F1] gives an admissible normal disk vector. [F1, step 1.1, construct]

3.1 The geometric surface is exactly $D^2\times\{s_*\}$, hence is a connected disk. Its boundary is the nonempty circle $\partial D^2\times\{s_*\}$. The disk itself has Euler characteristic $1$. The marked meridian $\{a_0\}\times S^1$ passes through exactly one point of this boundary at $(a_0,s_*)$, in the interior of the chosen fiber edge; the intersection is transverse and has parity $1$. [given, F2, step 2.1, construct]

4.1 Thus the explicit vector satisfies the matching, quadrilateral, connectedness, boundary, Euler-characteristic and mod-two meridian checks claimed in the statement. [F1, F2, step 2.1, step 3.1, algebra] ∎

