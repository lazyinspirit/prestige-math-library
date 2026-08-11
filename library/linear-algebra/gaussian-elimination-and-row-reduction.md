---
page: gaussian-elimination-and-row-reduction
title: "Gaussian Elimination, Elementary Matrices and Reduced Row Echelon Form"
status: published
items: [def-elementary-row-operations-and-row-equivalence,
        lem-elementary-row-operations-are-reversible,
        def-elementary-matrix,
        thm-elementary-row-operations-are-left-multiplication,
        cor-elementary-matrices-are-invertible,
        cor-a-row-reduction-is-a-product-of-elementary-matrices,
        def-matrix-equation-augmented-matrix-and-linear-system,
        thm-row-operations-preserve-solution-sets,
        def-row-echelon-reduced-row-echelon-and-pivots,
        thm-gaussian-elimination-produces-row-echelon-form,
        thm-gauss-jordan-elimination-produces-reduced-row-echelon-form,
        thm-reduced-row-echelon-form-is-unique,
        def-row-space-column-space-nullspace-and-matrix-ranks,
        lem-row-operations-preserve-row-space,
        lem-nonzero-echelon-rows-form-a-basis-of-the-row-space,
        thm-row-equivalence-characterisations,
        lem-row-operations-preserve-column-relations,
        thm-pivot-columns-form-a-basis-of-the-column-space,
        thm-row-rank-equals-column-rank,
        cor-matrix-rank-equals-the-rank-of-its-linear-map,
        cor-matrix-rank-nullity,
        def-affine-subspace-of-a-vector-space,
        thm-solution-set-is-an-affine-nullspace,
        thm-rref-consistency-and-free-variable-parametrisation,
        cor-rank-criterion-for-consistency,
        cor-solution-count-trichotomy-over-an-infinite-field,
        thm-invertible-matrix-theorem,
        thm-invertible-matrices-factor-into-elementary-matrices,
        cor-inverse-by-row-reducing-an-augmented-matrix]
examples: []
---

Finite matrices over a field, their products and identity matrices, and the coordinate action $x\mapsto Ax$ come from [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]] and [[thm-coordinate-action-of-a-linear-map]]. The established links between invertible matrices and linear isomorphisms, together with kernel, image, dimension and rank–nullity, supply the structural background used to interpret row reduction as a statement about linear maps rather than only an algorithm on arrays.

Elementary row operations first become invertible elementary matrices, so finite reductions are products acting on the left and preserve solution sets. Gaussian and Gauss–Jordan elimination then produce echelon and unique reduced echelon forms. Their pivots yield bases of the row and column spaces, equality of the two ranks, matrix rank–nullity and affine parametrisations of consistent systems. These results culminate in the invertible matrix theorem, elementary factorisation of invertible real matrices, and computation of $A^{-1}$ by reducing $[A\mid I]$.

