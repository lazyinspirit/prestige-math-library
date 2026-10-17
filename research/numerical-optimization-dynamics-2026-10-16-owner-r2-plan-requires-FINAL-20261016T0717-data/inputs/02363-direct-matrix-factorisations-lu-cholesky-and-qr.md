---
page: direct-matrix-factorisations-lu-cholesky-and-qr
title: "Direct Matrix Factorisations: LU, Cholesky and QR"
status: published
items: [def-forward-and-back-substitution-for-triangular-systems,
        thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost,
        def-normalised-lu-factorisation,
        def-ldu-factorisation,
        thm-normalised-lu-and-ldu-factorisations-are-unique,
        def-block-lu-factorisation,
        thm-block-lu-factorisation-via-an-invertible-leading-block,
        thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero,
        thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors,
        def-permutation-matrix-partial-pivoting-and-pivot-growth,
        thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity,
        thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound,
        def-cholesky-factorisation-with-positive-diagonal,
        thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique,
        thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots,
        thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost,
        def-householder-reflector,
        def-real-and-complex-givens-transformations,
        thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries,
        def-full-reduced-and-column-pivoted-computational-qr-factorisations,
        thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts,
        thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model,
        thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block,
        thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]
examples: []
---

This page collects the standard direct factorizations used to solve dense linear
systems and least-squares problems. It starts with triangular substitution, then
separates the exact hypotheses for unpivoted LU, block LU, and PLU with partial
pivoting. The distinctions matter: unpivoted LU depends on leading principal
minors, PLU exists for every square matrix, and the pivot-growth bound belongs
to the floating-point stability theorem rather than to exact existence.

The Cholesky section keeps the positive-definite and positive-diagonal
conventions visible. It proves existence and uniqueness exactly on Hermitian
positive-definite matrices, identifies the real symmetric leading-principal-minor
criterion, and records the cheaper factorization cost relative to LU.

The QR section assumes the published abstract square QR existence theorem and
owns the computational constructions instead: Householder reflectors, Givens
transformations, full and reduced QR, the exact structural statement for
column-pivoted QR, the backward-stability statement for Householder QR, and the
reduced-QR least-squares solve that avoids the condition-number square of the
normal equations.
