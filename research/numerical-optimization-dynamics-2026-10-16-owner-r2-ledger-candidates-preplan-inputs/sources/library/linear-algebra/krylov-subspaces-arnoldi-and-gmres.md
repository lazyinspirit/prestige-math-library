---
page: krylov-subspaces-arnoldi-and-gmres
title: "Krylov Subspaces, Arnoldi and GMRES"
status: published
items: [def-krylov-subspace-of-a-matrix-and-start-vector,
        def-grade-and-relative-minimal-polynomial-of-a-start-vector,
        prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector,
        thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise,
        cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade,
        def-arnoldi-process,
        thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
        prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance,
        def-ritz-values-and-ritz-vectors-from-arnoldi,
        prop-ritz-residual-formula-for-an-arnoldi-ritz-pair,
        def-gmres-iterate,
        thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem,
        cor-gmres-minimizes-the-residual-over-the-affine-krylov-space,
        cor-unrestarted-gmres-residual-norms-are-nonincreasing,
        prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual,
        thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic,
        prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor,
        def-restarted-gmres-m,
        prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination,
        def-matrix-free-access-model-for-krylov-methods]
examples: []
---

This page builds the nonsymmetric Krylov route in the order the later proofs
actually spend it. First come the Krylov spaces themselves, the relative
minimal polynomial and the grade, because those control when the subspaces stop
growing and when exact termination is even possible.

Arnoldi then turns that abstract Krylov filtration into an orthonormal basis
and an upper Hessenberg reduction. Ritz data and GMRES are read off from that
factorization. The page closes with the exact-arithmetic termination theorem,
the diagonalizable residual bound that keeps the eigenvector-conditioning
factor, the restart warning, and the matrix-free access model that explains
which operations Krylov methods actually need.
