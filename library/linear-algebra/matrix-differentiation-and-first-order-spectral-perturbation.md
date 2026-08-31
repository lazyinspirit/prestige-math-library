---
page: matrix-differentiation-and-first-order-spectral-perturbation
title: "Matrix Differentiation and First-order Spectral Perturbation"
status: draft
items: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
        prop-matrix-differentials-obey-sum-product-and-adjoint-rules,
        thm-derivative-of-matrix-inversion,
        thm-determinant-differential-and-jacobis-formula,
        prop-differentials-of-trace-and-frobenius-linear-functionals,
        prop-gradient-of-a-quadratic-matrix-form,
        thm-gradient-and-hessian-of-the-frobenius-least-squares-functional,
        def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue,
        prop-simple-eigenvalues-admit-left-right-normalization,
        def-condition-number-of-a-simple-eigenvalue,
        def-simple-spectral-projector,
        prop-simple-spectral-projector-is-scale-invariant,
        def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue,
        prop-reduced-resolvent-identities-for-a-simple-eigenvalue,
        thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing,
        thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x,
        prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x,
        thm-derivative-of-the-simple-spectral-projector,
        thm-gauge-fixed-simple-eigenvector-derivative-formula,
        cor-hermitian-simple-eigenpair-derivative-simplifications,
        thm-directional-derivative-of-a-simple-positive-singular-value,
        cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting,
        cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing]
examples: []
---

This page works over the underlying real vector space throughout. It first
packages the differential rules that later perturbation formulas actually use:
sum, product, adjoint, inverse, determinant, trace, and least-squares
gradients.

The spectral half stays strictly in the simple-spectrum regime. After the
left/right eigendata, projector, and reduced resolvent are in place, the page
uses the real implicit-function theorem to produce local $C^1$ branches and
then derives the first-order eigenvalue, projector, eigenvector, and singular
value formulas. The closing counterexamples record exactly where simplicity,
gauge-fixing, and first-order differentiability fail.
