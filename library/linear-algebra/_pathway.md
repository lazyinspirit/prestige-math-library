---
category: linear-algebra
status: published
parts:
  - part: spaces-and-linear-maps
    title: "Spaces and linear maps"
    pages:
      - vector-spaces-and-subspaces
      - linear-independence-bases-and-dimension
      - linear-maps-rank-nullity-and-quotient-spaces
  - part: matrices-and-elimination
    title: "Matrices and elimination"
    pages:
      - matrices-and-the-matrix-of-a-linear-map
      - gaussian-elimination-and-row-reduction
  - part: determinants
    title: "Determinants"
    pages:
      - determinants-of-matrices-over-a-commutative-ring
      - the-determinant-of-a-linear-operator
  - part: forms-and-inner-products
    title: "Forms and inner products"
    pages:
      - dual-spaces-bilinear-forms-and-inertia
      - inner-product-spaces-and-orthogonality
  - part: eigenvalues-and-canonical-forms
    title: "Eigenvalues and canonical forms"
    pages:
      - eigenvalues-eigenvectors-and-the-characteristic-polynomial
      - diagonalisation-and-the-minimal-polynomial
      - triangularisation-and-jordan-canonical-form
      - complexification-realification-and-real-structures
      - the-spectral-theorem-and-singular-value-decomposition
      - matrix-norms-condition-numbers-and-numerical-stability
      - exterior-powers-orientation-and-hodge-duality
---

## spaces-and-linear-maps

A vector space is defined over an arbitrary field, and the first results are the ones that
need no counting: subspaces, spans, sums and internal direct sums. Linear independence then
buys dimension, with every basis of a space having the same size, and a linear map is
measured by its kernel and image through rank-nullity and the quotient space.

## matrices-and-elimination

A matrix is what a linear map becomes once bases are chosen at both ends, and change of
basis is what happens when they are chosen differently. Row reduction is the algorithm that
answers the concrete questions, so elementary matrices, reduced row echelon form and the
uniqueness of that form carry the computational weight of everything later.

## determinants

The determinant is built over a commutative ring, from the permutation sum, so that it
applies to matrices whose entries are polynomials as well as to matrices of numbers. It is
multiplicative, it detects invertibility, and because similar matrices share it, it
descends to an endomorphism and gives cofactor expansion and Cramer's rule.

## forms-and-inner-products

The dual space collects the linear functionals, and a bilinear or quadratic form is
classified over the reals by Sylvester's law of inertia, which says the signature is what
survives a change of basis. An inner product adds length and angle, and with it come
Gram-Schmidt, orthogonal projection, the adjoint of an operator, and the geometry that
makes least squares and spectral arguments possible.

## eigenvalues-and-canonical-forms

An eigenvalue is a root of the characteristic polynomial, and the gap between algebraic and
geometric multiplicity is what obstructs diagonalisation. The minimal polynomial decides
when the obstruction vanishes, generalised eigenspaces triangularise the operator, and
Jordan canonical form gives the similarity invariant when it does not. Complexification,
realification, and conjugations then compare real and complex linear algebra, preserving
kernels, exact sequences, and characteristic data while pairing nonreal generalized
eigenspaces into invariant real two-planes. With an inner product, Schur
triangularization, the spectral theorem, and singular values sharpen the theory through
orthonormal eigenbases, SVD, and polar decomposition. Matrix norms and condition numbers
measure perturbation sensitivity and numerical rank, and exterior powers recover
determinants, orientation, the Hodge star, and the cross product.
