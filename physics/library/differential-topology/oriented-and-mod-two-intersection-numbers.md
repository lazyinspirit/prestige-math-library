---
page: oriented-and-mod-two-intersection-numbers
title: Oriented and Mod Two Intersection Numbers
status: published
requires: [sard-theorem-and-transversality, whitney-embedding-tubular-neighbourhoods-and-approximation, manifolds-with-boundary-collars-and-orientations, integration-of-forms-and-the-general-stokes-theorem, the-de-rham-theorem-and-degree, orientations-poincare-lefschetz-and-alexander-duality]
items: [def-transverse-complementary-dimensional-intersection-set, lem-compact-transverse-complementary-intersections-are-finite, def-mod-two-intersection-number, lem-overlap-of-arc-length-parametrizations-of-a-one-manifold, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, thm-transverse-preimage-for-manifolds-with-boundary, thm-mod-two-intersection-number-is-homotopy-invariant, lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign, def-local-oriented-intersection-sign, def-oriented-intersection-number, lem-preimage-orientation-agrees-with-the-local-intersection-sign, lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs, thm-oriented-intersection-number-is-homotopy-invariant, cor-oriented-intersection-reduces-to-mod-two-intersection, thm-intersection-number-under-factor-interchange, prop-two-map-intersection-as-a-diagonal-preimage, cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary, cor-negative-expected-dimension-generic-intersections-are-empty, rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact]
examples: []
---

This page counts intersections of complementary-dimensional objects. The
ambient object is the transverse intersection set of a map with a closed
submanifold, or of two maps, presented in the fibre-product form with its
tangent space computed as the kernel of the combined differential; in the
complementary case it is a zero-dimensional embedded submanifold, and when the
source is compact and the submanifold closed it is finite, so its cardinality
is a number. Degenerate transversality is not assumed away: the negative
expected-dimension corollary records that transverse maps with
dim X + dim Z < dim M have no coincidence, and states the perturbation clause
for a map against a fixed closed embedded submanifold, and the boundary version of the preimage
theorem carries the local structure of a trace over a manifold with boundary.

The two invariants are then read off a transverse intersection: the mod 2
number is the cardinality reduced modulo two and needs no orientability, while
the oriented number sums the local signs of the ordered pair, first factor
first, and is independent of the chosen transverse representative. Homotopy
invariance in both theories is proved by the same one-dimensional count: the
trace of a transverse family is a compact one-manifold, its boundary has even
cardinality, and with outward-normal-first signs the boundary contributions
cancel. The classification of compact one-manifolds, the product orientation of
the trace $[0,1]\times X$, and the preimage orientation are the load-bearing
suppliers; Countable Choice is inherited by the classification of compact one-manifolds
and declared when approximation selects transverse representatives or homotopies.

The page closes with the structural consequences: the oriented number reduces
to the mod 2 number modulo two, swapping the two factors multiplies the number
by the graded-commutativity sign $(-1)^{xz}$, the coincidence number of two
maps is a diagonal preimage with the sign $(-1)^z$, and a compact cycle
has zero algebraic intersection with the oriented boundary of a compact chain.
The final remark fixes the boundary of the development: properness replaces
compactness only where it makes the intersection trace compact, and the
companion examples page exhibits the counts on the torus and the projective
plane, the geometric-cardinality failure, the escape of intersections along a
noncompact homotopy, and the identification of degree with an intersection
number.
