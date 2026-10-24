---
page: morse-trajectory-moduli-spaces-and-the-morse-differential
title: "Morse Trajectory Moduli Spaces and the Morse Differential"
status: published
requires: [gradient-like-vector-fields-and-morse-trajectories, stable-unstable-manifolds-and-morse-smale-transversality, connections-levi-civita-and-parallel-transport, manifolds-with-boundary-collars-and-orientations, ascoli-arzela, oriented-and-mod-two-intersection-numbers]
items: [def-mod-two-morse-chain-group, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, lem-broken-trajectories-are-limits-of-ordinary-trajectories, thm-morse-trajectory-compactness-up-to-breaking, lem-breaking-length-is-bounded-by-index-drop, cor-index-one-trajectory-moduli-spaces-are-finite, def-mod-two-morse-differential, lem-gluing-broken-index-two-trajectories-gives-collar-ends, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, thm-mod-two-morse-differential-squares-to-zero, def-orientation-line-of-a-morse-critical-point, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-signed-morse-differential-over-the-integers, lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, thm-integral-morse-differential-squares-to-zero, rem-morse-homology-over-the-integers-does-not-require-orientability-of-m, rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package]
examples: []
---

Assuming the Axiom of Choice, on a closed manifold a Morse--Smale pair has finitely many critical points, and
the mod-two Morse chain group in each degree is the free $\mathbb Z/2$-module on
the critical points of that index. The differential that turns these groups into
a complex counts the index-one trajectories between critical points: modulo two
for the chain groups over $\mathbb Z/2$, and with signs for the integral
refinement. The page builds both complexes from the trajectory moduli spaces,
and proves the two structural facts that make them complexes, namely that the
compactified index-two moduli spaces are compact one-manifolds with boundary and
that the signed boundary counts cancel.

The constructions use downward gradient-like fields with the normalized local
Morse model; the examples normalize their gradient fields explicitly.

The analytic input is a compactness theorem: on a closed manifold every sequence
of trajectories with fixed endpoints has a subsequence converging, after
independent time shifts of its pieces, to a broken trajectory; the number of
pieces is bounded by the index drop, so only finitely many strata occur. Broken
trajectories are themselves limits of ordinary ones, so the compactified space
is a compactification in the strict sense, and near a once-broken configuration
the gluing construction provides a one-sided collar chart. In index drop one the
moduli space is therefore a finite discrete space, which makes every coefficient
of the differential a finite count; in index drop two the compactification is a
compact one-manifold whose boundary is the disjoint union of the once-broken
products.

For the integral theory one orients the unstable manifolds of the critical
points. An orientation of a critical point is a ray in the determinant line of
its unstable tangent space; a local extension followed by flow transport
co-orients the stable manifold, which orients the transverse intersections and hence the trajectory
moduli spaces. The comparison sign of a one-dimensional component against the
flow direction gives the signed coefficient of the differential, and the
outward-normal-first orientation of the compactified boundary computes the sign
of a broken end as the negative product of the two comparison signs, with the
kernel-first intersection and flow-first quotient conventions used here. The resulting signed
differential squares to zero, so integral Morse homology is defined, and no
orientability of the ambient manifold is required: only the unstable manifolds,
which are Euclidean spaces, are oriented. The companion examples page computes
the circle and two-sphere complexes and the index-two torus compactification, and
shows that an arbitrary assignment of signs to trajectories does not give a
differential.
