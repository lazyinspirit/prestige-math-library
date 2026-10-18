---
id: thm-lexicographic-lift-tie-break-consistent
kind: theorem
title: "The finite lexicographic lift tie-break is coherent"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 2
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-certified-geometric-predicate-determinants
  - lem-lifted-power-sphere-determinant-identity
  - def-lexicographic-lift-tie-break
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted
        Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delau\
        nay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulation"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
verification:
  precheck: pass
---

## Statement

Fix one finite universe $U$ of uniquely indexed dyadic sites and weights and a dimension $d\in\{2,3\}$. For an ordered tuple of $d+2$ distinct sites whose first $d+1$ sites are affinely independent, the lexicographic lift procedure in [[def-lexicographic-lift-tie-break]] is the determinant sign of one common formal lifted configuration. Every exact nonzero power determinant retains its original sign, every exact zero has a nonzero polynomial tie determinant, and all tuples therefore receive mutually coherent signs. No numeric perturbation parameter is selected or assumed.

## Facts & Assumptions

**Given:** A finite indexed site universe $U$, an ordered tuple of $d+2$ sites from $U$ with distinct identifiers, and an affinely independent first $d+1$ sites.

[F1] [[def-indexed-geometric-site-set]]: identifiers are unique in the input universe, coordinates and weights are dyadic, and the universe is finite.

[F2] [[def-certified-geometric-predicate-determinants]]: the exact determinant is the finite signed Leibniz sum in the displayed row and column order, and the base orientation determinant uses rows $(p_i,1)$.

[F3] [[def-lexicographic-lift-tie-break]]: each site uses its one fixed universe rank, and its lifted height is perturbed by the monomial $\varepsilon^{2^{r_i}}$; the returned sign is the coefficient sign at the least exponent with nonzero coefficient.

[A1] The first $d+1$ sites are affinely independent, so their orientation determinant $O_d$ is nonzero.

## Proof

1.1 Expand the determinant polynomial in [F3] along its lifted-height column. It has constant coefficient equal to the original determinant and one perturbation term for each row; the coefficient of the query row's perturbation is its cofactor, which is $O_d$ up to sign. By [A1] this coefficient is nonzero, so the polynomial is not identically zero. [F1, F2, F3, A1, algebra]

2.1 The exponents $2^{r_i}$ are distinct because the ranks in [F3] are distinct across the fixed universe [F1]. Thus no two perturbation terms have the same exponent and their nonzero coefficients cannot cancel. The sign selected by the procedure is exactly the sign of the first nonzero coefficient in this one polynomial, so it is a well-defined sign of one common lifted tuple, not a separate choice for each predicate. [F1, F2, F3, step 1.1, algebra]

3.1 If the original determinant is nonzero, its constant coefficient is the unique term of exponent $0$, while all perturbation exponents are positive; therefore the first nonzero coefficient is the original determinant and its sign is unchanged. If the original determinant is zero, step 1.1 shows a nonzero tie polynomial and step 2.1 gives its unique first coefficient. The finite set $U$ supplies one fixed rank assignment for every tuple, so the signs are coherent and the procedure uses no arbitrary epsilon choice. [F1, F3, step 1.1, step 2.1, algebra] ∎
