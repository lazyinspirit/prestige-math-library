---
page: generalized-eigenvalue-pencils-and-qz-methods
title: Generalized eigenvalue pencils and QZ methods
status: draft
requires:
  - direct-matrix-factorisations-lu-cholesky-and-qr
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-precision-direct-factorizations
  - computed-schur-decompositions-and-nonnormal-spectra
  - computed-singular-values-and-rank-revealing-factorizations
  - the-complex-exponential-and-eulers-formula
items:
  - def-regular-generalized-eigenvalue-pencil
  - lem-block-upper-triangular-pencil-determinant-factorizes
  - lem-zero-determinant-matrix-has-nonzero-kernel-vector
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - alg-generalized-hessenberg-triangular-reduction
  - def-generalized-schur-form
  - lem-projective-determinant-is-homogeneous-and-scale-invariant
  - lem-regular-pencil-has-no-common-kernel-vector
  - lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil
  - thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
  - prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
  - lem-regular-pencil-has-projective-eigenvalue
  - thm-b-metric-residual-encloses-definite-pencil-eigenvalue
  - lem-qz-two-sided-local-computed-update-bound
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - thm-generalized-schur-form-exists-for-regular-pencil
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - thm-computed-qz-pair-has-certified-backward-error
examples: []
---

## Objective

This page develops regular finite matrix pencils, their homogeneous finite and
infinite eigenvalues, and the generalized Schur form. It proves existence by
induction on a regular pencil, defines Hessenberg-triangular reduction and a
finite-budget QZ procedure with explicit status and residual reporting, and
proves a common real/complex computed-Givens bound for both pencil matrices,
and instantiates a computed backward-error certificate including structural
zero writes and separate tolerance deflations.
Singular pencils and their Kronecker structure are outside this QZ contract.

For Hermitian $A$ and positive-definite $B$, Cholesky reduction gives the
real-spectrum, $B$-orthogonality, and residual-enclosure results in the
$B$-metric. The finite-budget procedure makes no convergence claim. Its local pair
certificate uses the canonical stored rotation kernels; its independent raw
residual certificate propagates factor-action and stored-input matvec
allowances through a finite exact norm controller. Failed arithmetic or
residual-route hypotheses retain explicit failure/inconclusive statuses.
