---
id: lem-lifted-flip-potential-decreases
kind: lemma
title: "An illegal planar Delaunay flip strictly decreases lifted interpolation volume"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 3
proof_strategy: direct
deps:
  - def-planar-delaunay-voronoi-structures
  - lem-lifted-power-sphere-determinant-identity
  - def-lexicographic-lift-tie-break
  - thm-lexicographic-lift-tie-break-consistent
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Section 9.2"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delaunay.pdf"
---

## Statement

Let $ABCD$ be a strictly convex planar quadrilateral in counterclockwise boundary order. Lift its four sites using the common formal heights of [[def-lexicographic-lift-tie-break]]. Let $g_{AC}$ and $g_{BD}$ be the piecewise-affine interpolants on the two diagonal triangulations. Define each interpolant's integral over the quadrilateral as the sum over its two triangles of triangle area times the average of the three vertex heights. If the lifted point $D$ lies strictly below the affine plane through the lifts of $A,B,C$ (the illegal-incircle sign by the coefficientwise determinant identity), then
$$\int_{ABCD}g_{BD}<\int_{ABCD}g_{AC}$$
in the lexicographic order of the formal lift field.

## Facts & Assumptions

**Given:** A strictly convex quadrilateral $ABCD$, its common formal lifted heights, and a formal lifted height at $D$ strictly below the plane through $A,B,C$.

[F1] [[def-planar-delaunay-voronoi-structures]]: a planar triangulation is made of nondegenerate triangles meeting along complete common faces.

[F2] [[lem-lifted-power-sphere-determinant-identity]]: the lifted determinant sign is the oriented power-distance side of the base circumcircle.

[F3] [[def-lexicographic-lift-tie-break]]: every site uses the same formal perturbed height, ordered by the first nonzero coefficient.

[F4] [[thm-lexicographic-lift-tie-break-consistent]]: this finite perturbation gives coherent nonzero signs for all nondegenerate predicate tuples and preserves nonzero constant-term signs.

[A1] The diagonals intersect at an interior point $O$, and the formal lifted height at $D$ is strictly below the affine plane through the lifts of $A,B,C$.

## Proof

1.1 The two interpolants agree at the four boundary vertices. Their common diagonal intersection $O$ lies strictly inside both diagonals. On the four triangles formed by $O$ and the four boundary edges, each interpolant is affine; their difference is zero at the two boundary endpoints and equals $\delta:=g_{BD}(O)-g_{AC}(O)$ at $O$. [given, F1, A1, construct]

2.1 Write $O=(1-t)B+tD$ with $0<t<1$. The plane through $A,B,C$ agrees with $g_{AC}$ at $O$ because $O\in AC$, and its value at $B$ equals the lifted height of $B$. By [A1] its value at $D$ is strictly larger than the lifted height of $D$. Affinity along $BD$ therefore gives $g_{AC}(O)>g_{BD}(O)$, so $\delta<0$. [given, A1, step 1.1, algebra]

3.1 On a triangle, the integral of an affine function is its area times the average of its three vertex values; this follows by mapping to the reference triangle, where each barycentric coordinate has integral one third of its area. Thus each of the four overlay triangles contributes its area times $\delta/3$ to the integral of $g_{BD}-g_{AC}$. Their areas sum to the quadrilateral area, so the total difference is $\operatorname{area}(ABCD)\delta/3<0$. [step 1.1, step 2.1, algebra, algebra]

4.1 The row-subtraction and height-column elimination used in [F2] are polynomial determinant identities in the site heights, so they remain valid coefficientwise after each height is replaced by its formal perturbation. The normalized determinant therefore has the sign of the difference between the query height and the plane through $A,B,C$. By [F3]–[F4], one common formal configuration resolves a zero constant term. Thus the below-plane condition is exactly the illegal incircle sign and its flip strictly decreases the potential. [F2, F3, F4, step 3.1, algebra] ∎
