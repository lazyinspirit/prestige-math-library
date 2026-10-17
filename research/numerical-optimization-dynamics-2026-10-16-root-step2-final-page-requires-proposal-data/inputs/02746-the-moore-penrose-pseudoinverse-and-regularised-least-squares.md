---
page: the-moore-penrose-pseudoinverse-and-regularised-least-squares
title: "The Moore--Penrose Pseudoinverse and Regularised Least Squares"
status: published
items: [def-moore-penrose-pseudoinverse,
        thm-moore-penrose-pseudoinverse-exists-and-is-unique,
        prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant,
        thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces,
        cor-moore-penrose-image-and-kernel-identities,
        prop-full-column-rank-pseudoinverse-formula,
        prop-full-row-rank-pseudoinverse-formula,
        thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution,
        thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b,
        prop-reduced-qr-formulas-for-full-rank-pseudoinverses,
        def-tikhonov-regularised-least-squares,
        thm-tikhonov-regularised-least-squares-has-a-unique-minimiser,
        prop-tikhonov-regularisation-has-singular-filter-factors,
        thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution,
        def-truncated-singular-value-pseudoinverse-at-a-declared-threshold,
        prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters,
        thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss]
examples: []
---

This page develops the Moore--Penrose pseudoinverse through the singular value
decomposition and keeps the projection geometry visible throughout. The key
operators $AA^+$ and $A^+A$ are identified first as orthogonal projections onto
the image spaces, because the least-squares and minimum-norm statements are
best read as consequences of that geometry rather than as disconnected formulas.

The second half of the page treats regularisation honestly as a modified inverse
problem. It records the full-rank QR formulas, the Tikhonov minimiser and its
spectral filter factors, the truncated-SVD comparison, and the continuity
boundary: pseudoinversion behaves continuously on each fixed-rank stratum but
blows up when singular values collapse to zero.
