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
