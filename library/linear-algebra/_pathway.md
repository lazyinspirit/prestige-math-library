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
      - direct-matrix-factorisations-lu-cholesky-and-qr
      - matrix-differentiation-and-first-order-spectral-perturbation
      - the-moore-penrose-pseudoinverse-and-regularised-least-squares
      - eigenvalue-iterations-and-the-qr-algorithm
      - krylov-subspaces-arnoldi-and-gmres
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

An eigenvalue is a characteristic-polynomial root, and the minimal polynomial, generalized
eigenspaces, Jordan form, scalar-change comparisons, Schur form, singular values, norms,
conditioning, and exterior powers organize similarity, orthogonality, and perturbation.
LU, Cholesky, QR, the pseudoinverse, and regularized least squares add the factorization
and inverse-problem layer, while classical eigenvalue iterations explain how those
structures are computed. The added pages close the part on local sensitivity and
large-scale computation: matrix differentials give Fréchet derivative rules, simple
eigenpair, projector, and singular-value formulas, and sharp failure modes at defective
or crossing spectra, and Krylov, Arnoldi, Ritz, and GMRES turn polynomial approximation
into matrix-free solvers with exact-arithmetic termination and restart caveats.
