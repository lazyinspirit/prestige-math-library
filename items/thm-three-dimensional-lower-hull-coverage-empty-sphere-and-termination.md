---
id: thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination
kind: theorem
title: "Exact 3D lower-hull insertion covers the hull and terminates"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 6
proof_strategy: direct
deps:
  - def-three-dimensional-delaunay-and-weighted-regular-lower-hull
  - alg-incremental-three-dimensional-regular-cavity-repair
  - lem-lifted-power-sphere-determinant-identity
  - thm-lexicographic-lift-tie-break-consistent
  - thm-certified-dyadic-geometric-predicate-sound-and-terminates
  - alg-exact-dyadic-determinant-sign
  - lem-lower-lifted-facets-cover-the-convex-hull
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted
        Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delau\
        nay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, The Delaunay and Regular
        Triangulations"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
verification:
  precheck: pass
---

## Statement

For a finite dyadic weighted site set of projected affine dimension three, the algorithm of [[alg-incremental-three-dimensional-regular-cavity-repair]] terminates. Its output tetrahedra cover the convex hull, meet in common faces, and have empty power spheres in the original weak sense. In the zero-weight case they are ordinary Delaunay tetrahedra. A site is hidden in the fixed formal lower hull if and only if it is omitted from every output tetrahedron. The algorithm reports every coplanar four-site base as `degenerate-base` and makes no tetrahedralization claim on the lower-dimensional branch.

## Facts & Assumptions

**Given:** A finite indexed weighted dyadic set of projected affine dimension three and its fixed-universe formal lift.

[F1] [[def-three-dimensional-delaunay-and-weighted-regular-lower-hull]]: a lifted site has height $\|p\|^2-w$, its lower faces project to the regular subdivision; formal-hidden means absent from the vertices of the fixed formal lower hull, whereas original-hidden refers to the unperturbed hull; a lower-dimensional projected set returns its stated status.

[F2] [[alg-incremental-three-dimensional-regular-cavity-repair]]: every prefix tests all four-site subsets against every prefix site and updates the retained supporting tetrahedra by exact set difference.

[F3] [[lem-lifted-power-sphere-determinant-identity]]: the weighted lifted determinant represents the query's side of the base power sphere.

[F4] [[thm-lexicographic-lift-tie-break-consistent]]: one fixed formal lift gives a nonzero sign for every power determinant on a nondegenerate projected base and preserves nonzero constant signs.

[F5] [[thm-certified-dyadic-geometric-predicate-sound-and-terminates]]: the ordinary exact dyadic orientation and sphere predicates terminate and return their exact signs.

[F6] [[alg-exact-dyadic-determinant-sign]]: every finite dyadic matrix has its exact determinant sign computed by finite integer arithmetic, including zero.

[F7] [[lem-lower-lifted-facets-cover-the-convex-hull]]: the fixed formal lower simplices cover the projected convex hull, meet in common faces, and satisfy the original weak empty-power-sphere inequalities.

[A1] The projected site set has affine dimension three. The fixed perturbation universe contains every site before processing begins.

## Proof

1.1 There are finitely many insertion prefixes, finitely many four-site subsets at each prefix, and finitely many sites to test against each subset. Projected base ranks are decided by [F5]; each weighted determinant coefficient is a finite dyadic sum of products and its sign is computed exactly by [F6]. Hence every enumeration terminates. [given, F2, F5, F6, algebra]

2.1 If a previously supporting tetrahedron remains supporting after insertion, its old four vertices still define the same plane and all old sites remain above it; it is retained exactly when the new site is also above it. Any newly supporting four-site subset not present in the preceding prefix contains the inserted site. Thus the set difference described in [F2] is precisely the new finite lower-facet list, and there is no unprocessed repair loop. [F2, step 1.1, algebra]

3.1 At the final prefix, every retained tetrahedron has an affinely independent projected base and satisfies all formal supporting inequalities by the exhaustive test [F2]. Conversely, every full-dimensional lower simplex in [F7] is one of the enumerated four-site subsets and passes every test, so it is retained. The two lists are therefore identical; [F7] gives coverage, common-face intersections, and weak empty-power-sphere correctness. In zero-weight mode the power distance is ordinary squared distance, so these are Delaunay tetrahedra. [F1, F2, F3, F4, F7, step 2.1, algebra]

4.1 A site that is a vertex of a lower face lies on the lower boundary over its projected point. By [F7], that point lies in a full lower tetrahedron; if the site were not one of its four vertices, its lift would lie on the tetrahedron's support plane, giving a zero formal determinant on an independent projected base, contrary to [F4]. Hence every lower-hull vertex appears in a retained tetrahedron. Conversely every retained tetrahedron is a lower face by step 3.1, so each of its four sites is a lower-hull vertex. Thus absence from all retained tetrahedra is equivalent to being formal-hidden by [F1]. Every degenerate projected four-tuple is separately recorded by [F2], while affine dimension below three takes the explicit status branch in [F1]. [F1, F2, F4, F7, step 3.1, algebra]

5.1 The finite enumerations and finite prefix list in step 1.1 terminate in every case and use no arbitrary choice; ties use the fixed formal order [F4]. This proves the theorem. [F4, step 1.1, algebra] ∎
