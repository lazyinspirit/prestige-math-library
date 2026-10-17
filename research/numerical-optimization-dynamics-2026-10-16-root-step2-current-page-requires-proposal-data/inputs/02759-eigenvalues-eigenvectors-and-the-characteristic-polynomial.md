---
page: eigenvalues-eigenvectors-and-the-characteristic-polynomial
title: 'Eigenvalues, Eigenvectors and the Characteristic Polynomial'
status: published
items: [def-eigenvalue-eigenvector-eigenspace-and-spectrum,
        prop-eigenvalue-iff-shift-is-not-invertible,
        thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent,
        cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues,
        def-characteristic-polynomial-of-a-matrix,
        lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients,
        lem-characteristic-polynomial-of-block-triangular-matrix,
        thm-characteristic-polynomial-is-similarity-invariant,
        def-characteristic-polynomial-of-an-operator,
        thm-spectrum-is-the-root-set-of-the-characteristic-polynomial,
        def-algebraically-closed-field,
        cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue,
        def-algebraic-and-geometric-multiplicity-of-an-eigenvalue,
        thm-trace-is-sum-of-eigenvalues,
        thm-determinant-is-product-of-eigenvalues,
        thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity,
        cor-a-simple-eigenvalue-has-one-dimensional-eigenspace,
        thm-products-ab-and-ba-have-the-same-characteristic-polynomial,
        def-polynomial-evaluation-at-an-endomorphism,
        thm-spectral-mapping-for-polynomials,
        cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues,
        thm-cayley-hamilton,
        cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator]
examples: []
---

The development uses the basis-independent determinant of an endomorphism ([[def-determinant-of-a-linear-operator]]), the determinant criterion for invertibility ([[thm-operator-invertible-iff-determinant-nonzero]]), and matrix representations of linear maps ([[def-coordinate-column-and-matrix-of-a-linear-map]]). Polynomial rings over fields supply formal coefficients and cancellation ([[def-polynomial-ring-over-a-commutative-ring]], [[thm-polynomial-ring-over-a-field-is-a-ufd]]), while polynomial evaluation and roots retain their published algebraic meaning ([[def-polynomial-evaluation-and-root]]). Rank-nullity and finite-dimensional basis extension provide the dimension arguments used below ([[thm-rank-nullity]], [[thm-dimension-of-a-linear-subspace]]).

Eigenvalues are first characterized by singular shifts, and distinct eigenvalues yield independent eigenvectors. The characteristic polynomial is then defined for matrices and operators, proved invariant under similarity, and shown to recover the spectrum, including the zero-dimensional convention. Algebraic and geometric multiplicities lead to their basic inequality and to trace and determinant formulas under an explicit splitting hypothesis. Block factorization also proves the $AB$–$BA$ identity and supports polynomial spectral mapping with multiplicities. Finally, polynomial evaluation culminates in Cayley–Hamilton via the adjugate identity and coefficient comparison, followed by the polynomial formula for an invertible operator's inverse.
