---
page: matrix-norms-condition-numbers-and-numerical-stability
title: "Matrix Norms, Condition Numbers and Numerical Stability"
status: published
items: [def-absolute-and-relative-forward-error-for-a-problem-map,
        def-absolute-and-relative-local-condition-numbers-of-a-problem-map,
        def-induced-matrix-p-norm,
        thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized,
        thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums,
        def-frobenius-matrix-norm,
        thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison,
        def-condition-number-of-a-nonsingular-linear-system,
        thm-right-hand-side-perturbation-bound-for-ax-equals-b,
        thm-matrix-perturbation-bound-for-ax-equals-b,
        thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity,
        thm-residual-to-forward-error-bounds-for-linear-systems,
        def-normwise-and-componentwise-backward-error-for-linear-systems,
        prop-explicit-formulas-for-normwise-and-componentwise-backward-error,
        def-standard-relative-floating-point-model-and-unit-roundoff,
        def-forward-and-backward-stability-for-a-problem-family,
        lem-product-of-one-plus-deltas-gives-theta-n,
        thm-floating-point-dot-product-componentwise-and-normwise-error-bounds,
        thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order,
        thm-normal-equations-square-the-spectral-condition-number,
        thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices,
        def-numerical-rank-relative-to-a-norm-scale-and-tolerance,
        prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold]
examples: []
---

The published $p$-norms on $\mathbb R^n$ and their norm axioms, the operator
norm and the singular value decomposition with the rank and Eckart–Young
consequences, matrix multiplication and invertibility, the geometric series,
and the least-squares normal equation supply the machinery this page uses; the
published spectral page owns singular values and the operator $2$-norm, and
this page cites them rather than re-minting them.

The page separates the three questions that numerical analysis keeps apart.
First it fixes the vocabulary of problem conditioning: absolute and relative
forward error, and the absolute and relative local condition numbers of a
problem map. Second it builds the matrix-norm tools: the norm induced by a
published vector $p$-norm with its compatibility, submultiplicativity and
normalisation; the induced $1$-norm as the maximum column sum and the induced
$\infty$-norm as the maximum row sum; and the Frobenius norm with the spectral
and Frobenius singular-value formulas, unitary invariance and the sharp rank
comparison. Third it runs the linear-system spine: the condition number
$\kappa_p(A)$, the right-hand-side and matrix perturbation bounds, the
reciprocal spectral condition number as the relative distance to singularity,
residual-to-forward-error bounds, and normwise and componentwise backward
error with their explicit residual formulas.

The page then makes the arithmetic model explicit: the standard relative
floating-point model and unit roundoff with its stated exclusions, forward and
backward stability for a problem family, the product-of-errors lemma giving
$\gamma_n=nu/(1-nu)$, the componentwise and normwise dot-product bounds, and
the first-order principle that conditioning times backward error controls
forward error. It closes by separating exact rank from numerical rank:
exact rank is locally constant at maximal-rank matrices and discontinuous at
nonmaximal-rank ones, numerical rank is declared against a norm, scale and
tolerance, and in the spectral norm it counts the singular values above the
declared threshold.
