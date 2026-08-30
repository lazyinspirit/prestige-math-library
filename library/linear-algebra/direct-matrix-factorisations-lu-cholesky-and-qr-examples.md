---
page: direct-matrix-factorisations-lu-cholesky-and-qr-examples
title: "Direct Matrix Factorisations: LU, Cholesky and QR: Examples and Counterexamples"
status: draft
items: []
examples: [cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot,
           ex-plu-factorisation-by-hand,
           ex-ldu-factorisation-and-its-unique-diagonal-pivots,
           ex-block-lu-factorisation-and-a-schur-complement-solve,
           ex-cholesky-factorisation-and-solve,
           cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky,
           ex-householder-qr-factorisation-by-hand,
           ex-givens-qr-on-a-sparse-matrix,
           ex-reduced-qr-least-squares-versus-normal-equations,
           ex-sparse-gaussian-elimination-can-create-fill-in]
---

These examples keep the A-page hypotheses honest. They show an invertible matrix
that still fails unpivoted LU, a concrete PLU and LDU computation, a block LU
solve through a Schur complement, a worked Cholesky solve, and the exact ways
indefinite or merely semidefinite matrices fall outside positive-diagonal
Cholesky.

The QR examples compute a short Householder factorization, use Givens rotations
to preserve sparsity while zeroing chosen entries, compare reduced QR with the
normal equations on a badly scaled least-squares problem, and exhibit fill-in
created by Gaussian elimination.
