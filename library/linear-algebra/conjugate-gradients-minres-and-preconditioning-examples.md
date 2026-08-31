---
page: conjugate-gradients-minres-and-preconditioning-examples
title: "Conjugate Gradients, MINRES and Preconditioning: Examples and Counterexamples"
status: draft
items: []
examples: [ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system,
           ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension,
           ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues,
           cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system,
           cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix,
           ex-minres-on-a-symmetric-indefinite-system,
           ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison,
           ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number,
           cex-a-preconditioner-can-worsen-the-preconditioned-condition-number]
---

These worked examples spend the theory on small systems. They show two-step CG
on an SPD matrix, early termination at grade smaller than dimension, the effect
of spectral clustering on the Chebyshev bound, and the distinct niches of CG
and MINRES on indefinite data.

The page also records the main failure modes the A page warns about: symmetry
without positive definiteness is not enough for CG, nonsymmetry breaks the
$A$-conjugacy theory, stationary splittings are compared through spectral
radii, and a preconditioner can improve or worsen the condition number that
actually controls CG.
