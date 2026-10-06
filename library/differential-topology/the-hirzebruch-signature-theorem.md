---
page: the-hirzebruch-signature-theorem
title: The Hirzebruch Signature Theorem
status: published
requires: [intersection-pairings-self-intersection-and-euler-classes, smooth-cobordism-relations-groups-and-rings, characteristic-numbers-and-cobordism-obstructions, cup-cap-cross-products-and-cohomology-rings, orientations-poincare-lefschetz-and-alexander-duality, stiefel-whitney-and-euler-classes-by-universal-constructions, chern-and-pontryagin-classes-by-splitting-and-complexification, finite-averaging-and-character-theory-prerequisites]
items: [def-middle-dimensional-intersection-form,
        lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate,
        def-signature-of-a-closed-oriented-four-k-manifold,
        lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals,
        lem-a-half-dimensional-isotropic-subspace-forces-zero-signature,
        lem-boundary-restriction-image-is-lagrangian,
        lem-signature-is-additive-under-disjoint-union-and-orientation-reversal,
        thm-signature-is-an-oriented-cobordism-invariant,
        lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia,
        thm-signature-is-multiplicative-under-cartesian-products,
        def-formal-hyperbolic-tangent-series,
        lem-formal-tangent-and-artanh-series-are-compositional-inverses,
        lem-l-series-coefficient-identity-for-projective-spaces,
        def-completed-fourfold-graded-cohomology-ring,
        lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality,
        def-hirzebruch-l-polynomials,
        lem-l-polynomials-form-a-well-defined-multiplicative-sequence,
        def-total-l-class-of-a-smooth-manifold,
        lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism,
        lem-l-class-of-complex-projective-space,
        lem-l-genus-of-complex-projective-space-is-one,
        lem-signature-and-l-genus-agree-on-complex-projective-spaces,
        lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces,
        thm-hirzebruch-signature-theorem,
        cor-four-dimensional-signature-formula,
        cor-eight-dimensional-signature-formula,
        cor-signature-theorem-imposes-pontryagin-number-congruences,
        rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions]
examples: []
---

This page develops the Hirzebruch signature theorem: on every closed
oriented smooth $4k$-manifold the signature, defined as the inertia difference
of the middle-dimensional intersection form, equals the evaluation of the
$L$-class on the fundamental class. The route isolates the two inputs. The
geometric side defines the middle form $Q_M(x,y)=\langle x\smile y,[M]\rangle$
and proves it symmetric and nondegenerate, so that Sylvester's law gives the
signature; the additivity, product and bordism-invariance properties are then
proved from the form, and the duality argument with
the half-dimensional isotropic subspace of a boundary supplies the vanishing
on null-cobordisms. The algebraic side builds the formal series
$x/\tanh x$, the completed fourfold-graded cohomology ring, the Hirzebruch
$L$-polynomials and the total $L$-class, and proves the multiplicative-sequence axioms by universal polynomial identities
and computes the resulting class on complex projective space. The two sides meet in the two agreements
proved on this page: the signature and the $L$-genus agree on projective spaces
and on products of projective spaces, and since those products form a rational
basis of oriented bordism, the theorem follows. The closing corollaries record
the four- and eight-dimensional formulas and their divisibility consequences,
and the final remark keeps the zero extension in other dimensions distinct from
the geometric definition. Every use of Poincare duality, of the characteristic
numbers supplied by the preceding pair, and of the Pontryagin classes is a
direct supplier use recorded in the proof contracts; the axiom of choice is
inherited from the duality and characteristic-class suppliers and is declared
at each consumer. The companion page verifies the theorem on explicit small
manifolds.
