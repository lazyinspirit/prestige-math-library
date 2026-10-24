---
id: ex-cocircular-four-site-lexicographic-tie
kind: example
title: "A cocircular four-site tie selects the stable-id diagonal"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation-examples
dependency_level: 7
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - def-lexicographic-lift-tie-break
  - thm-lexicographic-lift-tie-break-consistent
  - thm-incremental-planar-delaunay-correctness-and-termination
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and
        Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delau\
        nay.pdf"
verification:
  precheck: pass
---

## Statement

For the square sites $A=(0,0),B=(1,0),C=(1,1),D=(0,1)$ with identifiers $1,2,3,4$ and zero weights, the unperturbed lifts are coplanar. In the four-site universe the perturbation $h_i=\|p_i\|^2+\varepsilon^{2^{r_i}}$ selects diagonal $BD$. Adding three synthetic identifiers below these four sites multiplies all four perturbation exponents by $8$, so the algorithm's augmented universe selects the same diagonal. Both selected triangles are weakly empty in the original, unperturbed sense.

## Facts & Assumptions

**Given:** The four indexed sites and the fixed-universe lexicographic height rule.

[F1] [[def-indexed-geometric-site-set]]: the four stable identifiers are distinct, and absent weights are zero.

[F2] [[def-lexicographic-lift-tie-break]]: rank $0,1,2,3$ receive height perturbations $\varepsilon,\varepsilon^2,\varepsilon^4,\varepsilon^8$, respectively.

[F3] [[thm-lexicographic-lift-tie-break-consistent]]: the first nonzero coefficient decides the one coherent formal lifted configuration.

[F4] [[def-planar-delaunay-voronoi-structures]]: a triangle is weakly empty-circle if no site lies strictly inside its circumdisk.

[F5] [[thm-incremental-planar-delaunay-correctness-and-termination]]: the fixed formal lift selects a terminating empty-circle triangulation.

[A1] The square is listed counterclockwise, all four weights are zero, and the four-site hand calculation uses exactly the universe $U=\{A,B,C,D\}$.

## Proof

1.1 The unperturbed heights are $0,1,2,1$. Each is $x+y$ at its site, so the four lifted points lie in the plane $z=x+y$. [given, A1, algebra]

1.2 All four original sites lie on the circle centered at $(1/2,1/2)$ with radius squared $1/2$. No other sites are present, so neither selected triangle has a site strictly inside its circumdisk. They are weakly empty by [F4]. [given, F4, algebra]

2.1 With the perturbation from [F2], the plane through $A,B,C$ has value $1+\varepsilon-\varepsilon^2+\varepsilon^4$ at $D$, while $D$'s lifted height is $1+\varepsilon^8$. Their difference is $\varepsilon^8-\varepsilon+\varepsilon^2-\varepsilon^4$, whose least nonzero exponent is $1$ with coefficient $-1$. Thus $D$ lies formally below the plane through $A,B,C$, and diagonal $AC$ is illegal. The flip selects $BD$ by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 The plane through $A,B,D$ has value $2+\varepsilon^2+\varepsilon^8-\varepsilon$ at $C$; subtracting from $C$'s height $2+\varepsilon^4$ gives $\varepsilon-\varepsilon^2+\varepsilon^4-\varepsilon^8$, which is formally positive. The plane through $B,C,D$ has value $\varepsilon^8-\varepsilon^4+\varepsilon^2$ at $A$; subtracting from $A$'s height $\varepsilon$ gives $\varepsilon-\varepsilon^2+\varepsilon^4-\varepsilon^8$, also formally positive. Hence both $ABD$ and $BCD$ are lower triangles for the common lift. [F2, F3, step 2.1, algebra]

4.1 When three synthetic identifiers are inserted below $1,2,3,4$, each input rank increases by three and each exponent $2^{r_i}$ is multiplied by $8$. Thus every input-only determinant polynomial becomes the four-site polynomial with $\varepsilon$ replaced by $\varepsilon^8$, which preserves the first nonzero coefficient sign. The augmented run therefore retains diagonal $BD$, and [F5] returns the stated weakly empty triangulation. [F1, F2, F3, F5, step 2.1, step 1.2, algebra] ∎

## Remarks

The two panels show the same four-site universe $U=\{A,B,C,D\}$ in the plane, with the coordinates and counterclockwise ordering from the statement. The arrow denotes the diagonal flip of step 2.1, not a motion of the sites. Here “illegal” refers to the formal perturbed lift: before perturbation, both diagonals give weakly empty-circle triangulations. The right panel consists of the lower triangles $ABD$ and $BCD$ checked in step 3.1. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=1.05]
\coordinate (A) at (0,0);
\coordinate (B) at (2,0);
\coordinate (C) at (2,2);
\coordinate (D) at (0,2);
\draw[thick] (A) -- (B) -- (C) -- (D) -- (A);
\draw[thick,dashed] (A) -- (C);
\fill (A) circle (1.6pt);
\fill (B) circle (1.6pt);
\fill (C) circle (1.6pt);
\fill (D) circle (1.6pt);
\node[below left] at (A) {$A=(0,0)$};
\node[below right] at (B) {$B=(1,0)$};
\node[above right] at (C) {$C=(1,1)$};
\node[above left] at (D) {$D=(0,1)$};
\node at (1,-1) {$AC\text{ illegal after perturbation}$};
\draw[->,thick] (3,1) -- (4,1);
\node[above] at (3.5,1) {$\text{flip}$};
\coordinate (E) at (5,0);
\coordinate (F) at (7,0);
\coordinate (G) at (7,2);
\coordinate (H) at (5,2);
\draw[thick] (E) -- (F) -- (G) -- (H) -- (E);
\draw[very thick] (F) -- (H);
\fill (E) circle (1.6pt);
\fill (F) circle (1.6pt);
\fill (G) circle (1.6pt);
\fill (H) circle (1.6pt);
\node[below left] at (E) {$A$};
\node[below right] at (F) {$B$};
\node[above right] at (G) {$C$};
\node[above left] at (H) {$D$};
\node at (6,-1) {$BD\text{ selected}$};
\end{tikzpicture}
```
