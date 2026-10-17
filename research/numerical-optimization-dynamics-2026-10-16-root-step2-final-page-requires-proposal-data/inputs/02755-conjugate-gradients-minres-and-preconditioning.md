---
page: conjugate-gradients-minres-and-preconditioning
title: "Conjugate Gradients, MINRES and Preconditioning"
status: published
items: [def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix,
        def-quadratic-energy-of-a-hermitian-positive-definite-linear-system,
        thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer,
        def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system,
        prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate,
        def-conjugate-gradient-recurrence,
        prop-conjugate-gradient-denominators-are-positive-before-convergence,
        thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate,
        thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error,
        thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic,
        thm-conjugate-gradient-chebyshev-bound-in-the-a-norm,
        rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination,
        def-lanczos-process-as-hermitian-arnoldi,
        thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence,
        def-minres-iterate-from-the-lanczos-tridiagonalization,
        thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space,
        def-stationary-iteration-from-a-matrix-splitting,
        thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one,
        def-left-right-and-symmetric-positive-definite-preconditioning,
        prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps,
        thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem]
examples: []
---

This page follows the Hermitian Krylov route that the preceding Arnoldi and
GMRES page leaves open. It begins with the quadratic energy behind conjugate
gradients, identifies the Galerkin condition that characterizes the affine
Krylov iterate, and then proves the exact-arithmetic CG structure: positivity
of the denominators, residual orthogonality, $A$-conjugacy, finite termination,
and the standard Chebyshev bound.

The second half specializes Arnoldi to Lanczos, defines MINRES from the
tridiagonal least-squares problem, and closes with stationary splittings and
preconditioning. The page keeps the central trap explicit: CG needs Hermitian
positive definiteness, while MINRES needs only Hermitian structure and
preconditioning must be analyzed through the transformed operator rather than
praised generically.
