---
page: intersection-pairings-self-intersection-and-euler-classes
title: Intersection Pairings Self Intersection and Euler Classes
status: draft
requires: [oriented-and-mod-two-intersection-numbers, smooth-vector-bundles-and-sections, whitney-embedding-tubular-neighbourhoods-and-approximation, manifolds-with-boundary-collars-and-orientations, cup-cap-cross-products-and-cohomology-rings, orientations-poincare-lefschetz-and-alexander-duality, leray-hirsch-thom-isomorphism-and-gysin-sequences, stiefel-whitney-and-euler-classes-by-universal-constructions, geodesics-the-exponential-map-completeness-and-hopf-rinow]
items: [def-geometric-intersection-pairing-on-a-closed-oriented-manifold, lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles, lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, lem-pullback-of-the-thom-class-along-a-transverse-section, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, thm-geometric-intersection-equals-the-poincare-dual-cup-pairing, rem-cap-product-order-awaits-the-at-sign-convention, def-self-intersection-number-of-an-oriented-submanifold, lem-normal-push-off-zeros-are-self-intersection-points, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, lem-normal-bundle-of-the-diagonal-is-canonically-tm, cor-diagonal-self-intersection-is-the-euler-number-of-tm, prop-mod-two-self-intersection-needs-no-orientation, cor-nowhere-zero-section-forces-the-euler-class-to-vanish, rem-euler-class-construction-remains-owned-by-at, rem-not-every-homology-class-is-represented-by-an-embedded-submanifold-integrally]
examples: []
---

This page pairs the geometric intersection count of complementary-dimensional
cycles with the algebraic-topology pairing on cohomology. The geometric side is
the oriented intersection number of the previous differential-topology pair,
extended to a pairing $\langle A,B\rangle_M=I(A,B)$ of closed oriented embedded
submanifolds with $a+b=n$ and to a mod two companion, and it is invariant under oriented bordisms of cycles. The cup-pairing
identification proves that it depends only on the homology classes represented. The algebraic side identifies that pairing with the
cohomology-first cap and cup conventions of the ambient class: on transverse
representatives the intersection product is the Poincare dual of the cup product,
and the cap-product order and normal-orientation conventions are fixed here
rather than minted locally.

The page then studies the self-intersection of a complementary-dimensional
submanifold, defined by a small transverse normal push-off. The push-off zeros
are the self-intersection points, with local sign equal to the local zero index
of the section, and the resulting number is the evaluation of the Euler class of
the normal bundle on the fundamental class; the tangent-first normal-bundle
orientation makes this identity exact, and the Thom-class and zero-locus
duality statements on the page carry the shuffle sign of that convention. The
mod two version replaces the Euler class with the top Stiefel-Whitney class and
needs no orientability. A seam remark records that the Thom, Euler and
Stiefel-Whitney constructions themselves remain owned by the algebraic-topology
pages, and a closing remark records the representability caveat: not every
integral homology class is the image of a closed oriented manifold.

All numerical self-intersections here use compact boundaryless submanifolds,
even when the ambient manifold is noncompact. The diagonal of a closed oriented
manifold illustrates the whole mechanism: its
normal bundle is canonically the tangent bundle, its self-intersection is the
evaluation of the Euler class of the tangent bundle, and the companion page
computes the values on the trivial plane bundle over the two-sphere, on the
tangent bundle of the two-sphere, and on the coordinate circles of the torus,
while the Mobius core circle shows that the integral self-intersection exists
only when the normal bundle is orientable and that the mod two count survives
otherwise.
