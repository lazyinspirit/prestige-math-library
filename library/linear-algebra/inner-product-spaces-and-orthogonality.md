---
page: inner-product-spaces-and-orthogonality
title: 'Inner Product Spaces, Gram-Schmidt, Projections and Adjoints'
status: draft
items: [def-inner-product-space,
        def-inner-product-norm,
        prop-standard-coordinate-inner-products,
        lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous,
        thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
        cor-triangle-inequality-for-inner-product-norm,
        prop-pythagorean-parallelogram-and-polarisation-identities,
        prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem,
        def-orthogonal-vectors-sets-and-orthonormal-bases,
        def-orthogonal-complement,
        thm-orthogonal-nonzero-vectors-are-linearly-independent,
        thm-gram-schmidt-orthonormalisation,
        cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases,
        thm-bessel-inequality-and-finite-parseval-identity,
        thm-finite-dimensional-orthogonal-decomposition,
        cor-double-orthogonal-complement-and-dimension,
        def-orthogonal-projection,
        prop-orthogonal-projection-formula-and-linearity,
        thm-orthogonal-projection-is-the-unique-nearest-point,
        def-gram-matrix-and-gram-determinant,
        thm-gram-determinant-detects-linear-independence,
        thm-qr-factorisation-over-r-or-c,
        thm-riesz-representation-in-finite-dimensions,
        def-adjoint-of-a-linear-map-between-inner-product-spaces,
        thm-adjoint-exists-and-is-unique-in-finite-dimension,
        prop-adjoint-algebra,
        thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
        thm-adjoint-kernel-and-range-orthogonality,
        thm-least-squares-solutions-and-normal-equation,
        lem-invariance-passes-to-orthogonal-complements-under-the-adjoint,
        thm-self-adjoint-idempotents-are-exactly-orthogonal-projections,
        def-linear-isometry-and-orthogonal-or-unitary-operator,
        thm-finite-dimensional-isometry-characterisations,
        cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]
examples: []
---

The published sesquilinear and Hermitian forms over a field with an involution fix the convention used here: linear in the first argument and conjugate-linear in the second. Complex conjugation, real and imaginary parts, the modulus and their algebraic laws come with $\mathbb C$; nonnegative real square roots exist; and the finite-sum Cauchy–Schwarz inequality is already available for real coordinate vectors. Bases, linear independence, the dimension of a subspace and of a direct sum, internal direct sums, the algebraic dual and its functionals, the matrix of a linear map, the transpose, and the determinant with its multiplicativity, its behaviour under transposition and its independence of basis supply the finite-dimensional machinery.

The page defines an inner product space and its induced norm, proves the Cauchy–Schwarz inequality with its equality case and the triangle inequality, and records the Pythagorean, parallelogram and polarisation identities. Orthogonal and orthonormal sets, orthogonal complements, independence of orthogonal nonzero vectors, Gram–Schmidt, the existence of orthonormal bases in finite dimension, and Bessel's inequality with the finite Parseval identity follow. The decomposition $V=W\oplus W^{\perp}$ and the double-complement formula give orthogonal projections and the unique nearest point, the Gram determinant test for linear independence, QR factorisation and Riesz representation. Adjoints are then constructed, with their algebra, their conjugate-transpose matrix, kernel–range orthogonality, least squares and the normal equation, the identification of self-adjoint idempotents with orthogonal projections, and the characterisations of finite-dimensional isometries.
