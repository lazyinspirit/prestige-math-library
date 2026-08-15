---
page: triangularisation-and-jordan-canonical-form
title: 'Triangularisation, Generalised Eigenspaces and Jordan Canonical Form'
status: draft
items: [def-quotient-vector-space-and-canonical-projection,
        prop-quotient-vector-space-operations-and-projection,
        lem-quotient-basis-lifts-to-an-adapted-basis,
        thm-quotient-vector-space-universal-property,
        thm-first-isomorphism-theorem-for-vector-spaces,
        def-invariant-subspace-and-induced-quotient-operator,
        prop-induced-quotient-operator-is-well-defined,
        prop-polynomial-calculus-on-restrictions-and-quotients,
        prop-characteristic-polynomial-factors-over-an-invariant-subspace,
        def-triangularisable-endomorphism,
        prop-complete-invariant-flags-and-upper-triangular-matrices,
        thm-triangularisation-splitting-criterion,
        cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable,
        thm-simultaneous-triangularisation-of-commuting-operators,
        def-nilpotent-endomorphism,
        thm-nilpotent-endomorphism-characterisations,
        lem-kernel-and-rank-sequences-of-powers,
        thm-stabilised-kernel-image-decomposition,
        def-jordan-block-and-jordan-string,
        lem-independent-initial-vectors-give-independent-jordan-strings,
        thm-nilpotent-jordan-string-basis,
        thm-power-ranks-determine-nilpotent-jordan-blocks,
        cor-nilpotent-similarity-classified-by-power-ranks,
        prop-generalised-eigenspaces-and-algebraic-multiplicity,
        def-jordan-canonical-form,
        thm-jordan-form-exists-iff-the-characteristic-polynomial-splits,
        cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form,
        thm-jordan-form-uniqueness-from-ranks-of-powers,
        cor-jordan-block-data-controls-eigenspaces-and-polynomials,
        thm-similarity-classification-by-jordan-canonical-form,
        def-cyclic-subspace-vector-and-vector-annihilator,
        prop-vector-annihilator-is-well-defined,
        thm-cyclic-subspace-power-basis-and-companion-matrix,
        lem-a-vector-realises-the-minimal-polynomial,
        thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials,
        cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial]
examples: []
---

This page first builds the quotient-vector-space machinery missing from the
published linear-map page: well-defined operations and projection, lifted
bases, the universal property, the first isomorphism theorem, and restriction
and quotient operators on invariant subspaces. It then characterises upper
triangular form by complete invariant flags, proves that an operator is
triangularisable exactly when its minimal or characteristic polynomial splits,
and treats simultaneous triangularisation, nilpotent operators, stabilised
kernels and images, and Jordan-string bases.

The second half constructs Jordan canonical form from the generalised
eigenspace decomposition and proves its uniqueness rather than merely asserting
it. For each eigenvalue, the ranks of the powers of `T-lambda I` recover the
number of blocks of every size, which yields the similarity classification.
The page closes with cyclic subspaces and vector annihilators, a primary-
component proof that some vector realises the minimal polynomial, the criterion
that a cyclic vector exists exactly when the minimal and characteristic
polynomials agree, and the polynomial description of the commutant of a cyclic
operator.
