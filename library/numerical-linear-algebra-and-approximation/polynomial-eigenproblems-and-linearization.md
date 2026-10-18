---
page: polynomial-eigenproblems-and-linearization
title: "Polynomial eigenproblems and linearization"
status: published
items:
  - def-matrix-polynomial-and-homogeneous-eigenpairs
  - def-first-frobenius-companion-pencil
  - def-coefficientwise-weighted-backward-error-for-matrix-polynomial
  - def-rational-matrix-eigenproblem-and-pole-domain
  - thm-first-companion-pencil-is-strong-linearization
  - lem-first-companion-pencil-residual-transfer
  - thm-exact-coefficientwise-weighted-backward-error
  - prop-clearing-a-common-denominator-away-from-poles
examples: []
---

This page fixes a grade and block orientation for square complex matrix polynomials, including homogeneous eigenpairs and the infinity point when the leading coefficient is singular. It defines the first Frobenius companion pencil and proves polynomial-unimodular equivalence for both the pencil and its reversal, exact determinant equality, and finite and infinite eigenvector recovery with the degree-defect multiplicity at infinity. For a fixed eigenvector it defines independent coefficientwise weighted Frobenius perturbations and derives the attained minimum formula, including the reversed coefficient weights at infinity. An exact block identity transfers pencil residuals to polynomial residuals; its coefficient and parameter factors show why an unscaled pencil residual or condition estimate cannot be read as a polynomial backward error. Rational matrix eigenpairs live only off their poles. Clearing a common denominator preserves kernels on that domain, and roots produced at poles are rejected.
