---
page: characteristic-class-obstructions-to-immersions-and-embeddings
title: Characteristic Class Obstructions to Immersions and Embeddings
status: draft
requires: [intersection-pairings-self-intersection-and-euler-classes, thom-spaces-normal-data-and-collapse-maps, characteristic-numbers-and-cobordism-obstructions, formal-immersions-and-the-smale-hirsch-theorem, isotopy-extension-and-embedding-theory-beyond-whitney, topological-vector-bundles-and-grassmannian-classification, stiefel-whitney-and-euler-classes-by-universal-constructions, chern-and-pontryagin-classes-by-splitting-and-complexification, linear-recurrences-and-rational-generating-functions]
items: [def-stable-normal-inverse-of-the-tangent-bundle,
        lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial,
        cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial,
        lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes,
        lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity,
        lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle,
        prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension,
        lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class,
        lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class,
        def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold,
        cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions,
        cor-high-normal-pontryagin-classes-obstruct-oriented-immersions,
        lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion,
        cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings,
        prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection,
        lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring,
        lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space,
        thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction,
        prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion,
        cor-embedding-obstructions-include-all-immersion-normal-class-obstructions,
        rem-characteristic-class-vanishing-is-only-necessary-for-embedding,
        rem-characteristic-class-construction-is-cited-not-rebuilt]
examples: []
---

This page turns the characteristic classes of the published algebraic-topology
pages into immersion and embedding tests for closed smooth manifolds. The
arithmetic is done on the *stable normal inverse* of the tangent bundle: a
smooth bundle $\nu$ together with a bundle isomorphism $TM\oplus\nu\cong
\varepsilon^{N}$ onto a trivial bundle. Such an inverse is supplied by any
smooth embedding into a Euclidean space, so every closed manifold has one under
countable choice, while an immersion of codimension $k$ supplies an actual
rank-$k$ inverse. The page keeps that rank distinction visible throughout:
the class of an inverse is independent of the chosen inverse, but the *rank* of
the bundle is exactly the codimension in an immersion problem.

The first block sets up the algebra: the pullback of a trivial bundle is
canonically trivial, the compactified Euclidean space has no intermediate
cohomology, and the normal total Stiefel–Whitney class is the multiplicative
inverse of the tangent class, while the normal total Pontryagin class is the
rational inverse — the rational coefficient ring is forced by the two-torsion
correction in the integral Whitney product. The normal classes $\bar w_i$ and
$\bar p_i$ are then defined once and used everywhere.

The second block contains the obstruction theory. A nonzero $\bar w_i$ with
$i>k$ forbids immersion and hence embedding in $\mathbb R^{m+k}$; a nonzero
rational $\bar p_i$ with $2i>k$ forbids the same; and for embeddings the *top*
normal class is additionally forced to vanish, together with the Euler class of
an oriented normal bundle. For an even-dimensional immersion into twice its
dimension, the signed normal push-off count is a finite sum equal to the Euler
number plus twice the signed double-point count, so the Euler number is even and
a nonzero signed double-point count obstructs a regular homotopy to an
embedding. The real projective spaces illustrate all of this: the truncated
polynomial computation gives $w(T\mathbb{RP}^m)=(1+a)^{m+1}$ and
$\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i\wedge m=0}a^i$, so
$\mathbb{RP}^{2^p}$ does not immerse in $\mathbb{R}^{2^{p+1}-2}$ and does not
even embed in the larger $\mathbb{R}^{2^{p+1}-1}$. Parallelizable manifolds,
conversely, have trivial normal classes and admit Euclidean immersions in every
positive codimension, while the parallelizable case says nothing about
embeddability.

The final block fixes the boundaries of the page: the characteristic classes
themselves are consumed from the published algebraic-topology pages rather than
rebuilt here, and the class tests are necessary conditions only — two
non-isotopic embeddings can carry identical trivial stable classes.
