---
page: eigenvalue-iterations-and-the-qr-algorithm
title: "Eigenvalue Iterations and the QR Algorithm"
status: published
items: [def-eigenpair-residual-and-normwise-backward-error,
        thm-eigenpair-residual-realises-the-minimum-norm-backward-error,
        def-power-iteration,
        thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue,
        def-inverse-and-shifted-inverse-iteration,
        thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift,
        def-rayleigh-quotient-iteration,
        prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient,
        prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration,
        thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence,
        def-subspace-iteration-and-the-dominant-invariant-subspace,
        thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap,
        def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices,
        thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form,
        def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift,
        prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity,
        thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses,
        prop-shifted-qr-preserves-upper-hessenberg-form,
        thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties,
        prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules]
examples: []
---

This page treats the classical exact-arithmetic eigenvalue iterations with all
of their hypotheses stated. Power iteration, shifted inverse iteration,
Rayleigh-quotient iteration, and subspace iteration are written as convergence
results only under the spectral separation and nondegeneracy conditions that
actually make those conclusions true.

The QR section keeps the same discipline. It reduces matrices to Hessenberg or
tridiagonal form first, identifies unshifted QR with orthonormalised
simultaneous iteration, states the extra hypotheses needed for unshifted QR
convergence, and records both the Hessenberg-preservation mechanism and the
symmetry-preserving Wilkinson-shift step together with a concrete
tridiagonal-tail deflation computation.
