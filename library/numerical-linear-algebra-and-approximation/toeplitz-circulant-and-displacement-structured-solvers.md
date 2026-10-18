---
page: toeplitz-circulant-and-displacement-structured-solvers
title: Toeplitz circulant and displacement structured solvers
status: published
items:
  - def-toeplitz-circulant-and-displacement-notation
  - thm-realified-dense-residual-certificate
  - prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft
  - thm-zero-padded-fft-toeplitz-matvec-is-exact-and-costs-nlogn
  - lem-complex-hermitian-toeplitz-reflection-recursion
  - def-displacement-rank-generators-and-lower-shift
  - alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve
  - lem-toeplitz-matrix-has-displacement-rank-at-most-two
  - lem-displacement-generator-update-under-scalar-schur-elimination
  - thm-gohberg-semencul-inverse-identity-and-cost
examples: []
---

This page fixes the zero-based lag, lower-shift, reversal, and canonical DFT conventions used by the structured solvers. The canonical unitary DFT diagonalizes each circulant. A rectangular Toeplitz matrix-vector product embeds without aliasing in a power-of-two circulant of length at least $m+n-1$; exact convolution gives the exact product, and the published FFT theorem supplies the $O(N\log N)$ operation count. The complexity claim is exact-arithmetic. A finite-precision result is conditional on the stated FFT hypotheses and is not a stability claim for a solve.

For real covariance forecasts, the page reuses the published Durbin–Levinson algorithm and its prediction-equation theorem. The added reflection recursion is the complex Hermitian positive-definite bordering extension. It proves positive pivots, the recursion equations, and $O(n^2)$ work with $O(n)$ storage. For an arbitrary right-hand side, the solver checks each pivot and the Gohberg–Semencul denominator, obtains the first and last inverse columns, and applies four triangular Toeplitz products to vectors. The exact identity costs $O(n^2)$ arithmetic and $O(n)$ working storage. The result makes no generic Levinson backward-stability claim.

The lower-shift displacement $A-ZAZ^*=GH^*$ defines a generator representation. A Toeplitz matrix has a width-two generator, and one exact scalar Schur elimination step updates a width-$s$ generator to width at most $s$. These statements describe exact structure and arithmetic only; they assert no conditioning, pivot-growth, or numerical-stability bound.

The residual theorem specifies a real dot-product-and-subtraction computation DAG. Its componentwise and normwise bounds apply under the stated standard relative model and normal-range assumptions. A complex system is covered only after explicit realification to dimension $2n$; no claim is made for an unspecified native complex residual evaluator. The sparse direct elimination page remains a placement prerequisite, not a proof premise for this structured solver.
