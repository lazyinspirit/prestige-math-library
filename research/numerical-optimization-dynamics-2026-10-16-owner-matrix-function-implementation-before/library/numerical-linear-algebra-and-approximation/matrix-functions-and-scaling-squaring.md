---
page: matrix-functions-and-scaling-squaring
title: "Matrix Functions and Scaling Squaring"
status: draft
order: 2420
category: numerical-linear-algebra-and-approximation
companion: matrix-functions-and-scaling-squaring-examples
requires:
  - strongly-continuous-semigroups-and-hille-yosida
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-precision-direct-factorizations
  - computed-schur-decompositions-and-nonnormal-spectra
  - sylvester-and-lyapunov-matrix-equations
  - verified-linear-systems-and-spectral-enclosures
items:
  - def-diagonal-pade-approximant-for-exponential
  - lem-finite-hermite-interpolation-for-jordan-data
  - lem-scaling-and-squaring-error-recurrence
  - def-analytic-primary-matrix-function
  - lem-diagonal-pade-remainder-bound
  - def-matrix-sign-for-spectrum-off-imaginary-axis
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - alg-exact-jordan-block-analytic-evaluation
  - thm-exact-jordan-block-analytic-evaluation-correct
  - thm-principal-matrix-logarithm-and-square-root-exist
  - thm-frechet-exponential-integral-and-block-function-identity
  - thm-matrix-function-rational-contour-error-bound
  - alg-pade-denominator-solve-by-householder-qr
  - thm-pade-denominator-solve-verified-branch-correct
  - alg-pade-scaling-and-squaring-exponential
  - rem-matrix-function-condition-estimates-are-not-certified-bounds
  - alg-newton-polar-factor-iteration
  - alg-newton-matrix-sign-iteration
  - thm-pade-scaling-and-squaring-error-bound
  - thm-newton-polar-factor-quadratic-convergence
  - thm-newton-matrix-sign-convergence-and-quadratic-rate
  - alg-schur-parlett-matrix-function
  - thm-schur-parlett-recurrence-correctness
  - alg-principal-matrix-logarithm-and-square-root
examples: []
---

An analytic matrix function can be defined by applying one scalar holomorphic
branch and its derivatives to the Jordan blocks. Finite Hermite interpolation
produces a polynomial representing those same jets, which proves independence
of the chosen Jordan form, similarity invariance, the contour formula, and the
normal spectral formula. The page also records the principal logarithm and
square root on the slit plane and the Fréchet derivative of the exponential.

For the exponential, the diagonal Padé approximant is fixed at a finite order.
Its scalar remainder and the recurrence for squaring defects are proved
directly. A rational contour estimate transfers scalar error to a matrix only
when a uniform resolvent bound is available; this condition matters for
nonnormal matrices. The scaling-and-squaring bound is conditional on exact
denominator and squaring audits, a validated contour resolvent bound, and
caller-supplied contour topology. The validator does not establish the contour
index or count enclosed eigenvalues. Candidate-only runs carry no error claim.

The Schur–Parlett procedure verifies exact Schur and Sylvester identities and
returns an inconclusive status when those checks or required block data fail.
Its recurrence has a separate exact correctness proof; no floating-point
stability claim is made. Newton polar and matrix-sign algorithms likewise
separate finite rounded iterations from convergence theorems about their exact
sequences.
