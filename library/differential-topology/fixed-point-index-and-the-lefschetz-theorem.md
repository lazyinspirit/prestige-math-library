---
page: fixed-point-index-and-the-lefschetz-theorem
title: "Fixed Point Index and the Lefschetz Theorem"
status: published
requires: [oriented-and-mod-two-intersection-numbers, intersection-pairings-self-intersection-and-euler-classes, vector-field-index-euler-characteristic-and-poincare-hopf, sard-theorem-and-transversality, the-de-rham-theorem-and-degree, singular-chains-and-singular-homology, singular-cohomology-and-coefficient-theorems, cup-cap-cross-products-and-cohomology-rings, orientations-poincare-lefschetz-and-alexander-duality, local-coefficients-twisted-homology-and-duality, lie-subgroups-actions-and-homogeneous-spaces]
category: differential-topology
items: [def-local-fixed-point-index, def-nondegenerate-fixed-point, lem-a-closed-discrete-subset-of-a-compact-space-is-finite, lem-fixed-points-are-graph-diagonal-intersections, def-global-geometric-lefschetz-number, lem-graph-transversality-is-fixed-point-nondegeneracy, lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation, lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent, thm-index-of-a-nondegenerate-fixed-point, lem-local-fixed-point-index-splits-under-perturbation, lem-the-local-intersection-sign-of-the-graph-and-diagonal, def-algebraic-lefschetz-number, lem-diagonal-class-expansion-gives-the-alternating-trace, lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points, lem-the-orientable-double-cover-of-a-smooth-manifold, lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover, lem-fixed-point-sum-of-the-two-lifts-of-a-self-map, lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number, lem-orientation-coefficients-as-deck-eigenspaces-and-product-pairings, lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace, thm-lefschetz-hopf-index-formula, cor-lefschetz-number-is-homotopy-invariant, cor-lefschetz-number-of-the-identity-is-the-euler-characteristic, thm-lefschetz-fixed-point-theorem, prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices, rem-isolated-does-not-imply-nondegenerate, rem-lefschetz-index-formula-recovers-poincare-hopf]
examples: []
---

This page develops the fixed point index of a smooth self-map and the
Lefschetz–Hopf index formula that computes it from rational homology. The
starting point is the observation that fixed points of $f$ are exactly the
intersections of the graph of $f$ with the diagonal of $M\times M$, so the
local index can be read as a degree of the chart displacement $\mathrm{id}-f$
and, for a nondegenerate fixed point, as the sign of $\det(I-Df_x)$. The
convention $I-Df_x$ is used throughout, and the page records the resulting
$(-1)^n$ discrepancy with references that use $Df_x-I$. An isolated fixed
point can be split by a small perturbation into finitely many nondegenerate
fixed points carrying its index, which reduces all global statements to the
transverse case.

The geometric Lefschetz number $I(f)$ is the finite index sum over the fixed
points; the algebraic Lefschetz number $L(f)$ is the alternating trace of $f$ on
the rational homology of $M$. For a closed oriented manifold the diagonal-class
expansion identifies $L(f)$ with the Poincaré-dual cup pairing of the graph and
diagonal classes, and the nondegenerate case of the index formula follows from
the sign computation $\operatorname{sign}\det(I-Df_x)$. Degenerate isolated
fixed points are recovered by the splitting lemma, and the identity
$L(\mathrm{id})=\chi(M)$ links the theory to the Euler characteristic. The index
formula itself is proved for every closed manifold, orientable or not, by
pulling the orientation-twisted diagonal class back along the graph; the
orientation double cover and its transfer record the same computation on the
two-sheeted cover for maps that admit a lift. The Lefschetz fixed point theorem —
$L(f)\neq0$ forces a fixed point — is proved by approximating a continuous fixed-point-free map by a smooth
fixed-point-free map and applying the index formula,
and the converse is shown to fail by explicit examples with canceling local
indices. A final remark recovers Poincaré–Hopf from the index formula by
applying it to the normal-projection approximation of the flow of a vector
field.
