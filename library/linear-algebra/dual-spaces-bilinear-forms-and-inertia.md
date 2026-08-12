---
page: dual-spaces-bilinear-forms-and-inertia
title: 'Dual Spaces, Bilinear and Quadratic Forms, and Sylvester''s Law of Inertia'
status: draft
items: [def-algebraic-dual-and-linear-functional,
        def-dual-family-associated-to-a-basis,
        thm-dual-family-is-a-basis-in-finite-dimension,
        thm-dual-family-does-not-span-in-infinite-dimension,
        lem-linear-functionals-separate-points-from-subspaces,
        def-canonical-map-to-the-double-dual,
        thm-canonical-map-to-double-dual-is-injective,
        thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional,
        def-annihilators-under-the-evaluation-pairing,
        thm-double-annihilator-and-annihilator-dimension,
        def-transpose-of-a-linear-map,
        prop-transpose-preserves-identities-and-reverses-composition,
        thm-transpose-kernel-range-and-rank,
        thm-matrix-of-transpose-is-the-transposed-matrix,
        def-bilinear-symmetric-skew-and-alternating-forms,
        thm-symmetric-alternating-relations-by-characteristic,
        thm-bilinear-forms-correspond-to-linear-maps-into-the-dual,
        def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form,
        thm-change-of-basis-for-a-bilinear-form-is-congruence,
        cor-rank-and-nondegeneracy-are-congruence-invariants,
        def-sesquilinear-and-hermitian-forms-over-a-field-with-involution,
        thm-change-of-basis-for-a-sesquilinear-form,
        def-quadratic-form-and-polar-form,
        thm-polarization-bijection-in-characteristic-not-two,
        thm-symmetric-bilinear-forms-have-an-orthogonal-basis,
        cor-symmetric-matrices-are-congruent-to-diagonal-matrices,
        cor-quadratic-forms-diagonalize-in-characteristic-not-two,
        thm-alternating-forms-have-a-symplectic-normal-form,
        def-definiteness-inertia-and-signature-data-over-the-reals,
        thm-sylvesters-law-of-inertia,
        cor-real-symmetric-bilinear-forms-are-classified-by-inertia,
        lem-schur-complement-congruence-and-determinant,
        thm-sylvesters-criterion-for-positive-definiteness]
examples: []
---

The page builds on finite-dimensional bases and unique coordinates ([[def-linear-basis]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]), linear maps and their matrices ([[def-linear-map]], [[def-coordinate-column-and-matrix-of-a-linear-map]]), and rank-nullity ([[thm-rank-nullity]]). The basis-extension theorem supplies the explicitly Choice-dependent infinite-dimensional separations ([[thm-every-independent-set-extends-to-a-basis]]), while the finite-dimensional extension theorem avoids that cost where applicable ([[thm-dimension-of-a-linear-subspace]]). Matrix transpose and determinant laws provide the algebra used for congruence and Schur complements ([[prop-transpose-laws]], [[thm-determinant-multiplicative]]).

Dual families lead to the finite and infinite dual-space boundary, the canonical double-dual map, annihilators, and transpose identities. Bilinear forms are identified with maps into the dual; their matrices transform by congruence, while sesquilinear and Hermitian forms receive the corresponding involutive formula. Quadratic forms are defined in every characteristic, with polarization and symmetric diagonalization restricted to characteristic not two. Alternating forms acquire symplectic normal form and even rank. Over the reals, diagonal normalization and intrinsic positive and negative dimensions prove Sylvester's law of inertia; Schur-complement elimination then yields the leading-principal-minor criterion for positive definiteness.
