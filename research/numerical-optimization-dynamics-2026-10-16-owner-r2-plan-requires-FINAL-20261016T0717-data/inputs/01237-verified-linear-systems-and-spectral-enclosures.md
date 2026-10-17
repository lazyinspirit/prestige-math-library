---
page: verified-linear-systems-and-spectral-enclosures
title: "Verified linear systems and spectral enclosures"
status: draft
requires:
  - dual-spaces-bilinear-forms-and-inertia
  - the-spectral-theorem-and-singular-value-decomposition
  - finite-precision-direct-factorizations
  - sparse-direct-elimination-and-ordering
  - outward-rounded-interval-and-ball-arithmetic
  - computed-schur-decompositions-and-nonnormal-spectra
items:
  - def-complex-infinity-matrix-norm
  - def-hermitian-residual-orthogonality-certificate
  - def-verified-linear-residual-certificate-data
  - lem-brouwer-fixed-point-for-closed-boxes
  - lem-complex-hermitian-realification-identities
  - lem-hermitian-eigenvalue-frobenius-bound
  - lem-hermitian-rayleigh-residual-spectrum-distance
  - thm-inertia-guided-bisection-loop-soundness
  - thm-interval-determinant-sign-certificate-soundness
  - lem-complex-hermitian-eigenvalue-perturbation
  - lem-complex-hermitian-inertia-congruence
  - lem-complex-infinity-matrix-norm-submultiplicative
  - lem-neumann-inverse-norm-bound
  - lem-hermitian-two-by-two-inertia-sign-test
  - lem-complex-infinity-neumann-inverse-norm-bound
  - lem-hermitian-block-ldl-inertia-additivity
  - thm-krawczyk-set-inclusion-existence-and-uniqueness
  - thm-near-orthonormal-hermitian-eigenvalue-enclosure
  - thm-uniform-linear-residual-solution-enclosure
  - thm-complex-resolvent-cover-certificate-soundness
  - alg-complex-resolvent-cover-validator
  - alg-interval-determinant-sign-certifier
  - alg-interval-hermitian-ldl-inertia-certifier
  - alg-interval-linear-krawczyk-certifier
  - alg-near-orthonormal-hermitian-eigenvalue-certifier
  - alg-point-verified-linear-system-certifier
  - alg-uniform-interval-linear-residual-certifier
  - thm-complex-resolvent-cover-validator-soundness
  - thm-interval-determinant-sign-certifier-soundness
  - thm-interval-hermitian-ldl-inertia-certifier-soundness
  - thm-interval-linear-krawczyk-certifier-soundness
  - thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness
  - thm-point-verified-linear-system-certifier-soundness
  - thm-uniform-interval-linear-residual-certifier-soundness
  - alg-ordered-hermitian-eigenvalue-bisection
  - thm-ordered-hermitian-eigenvalue-bisection-soundness
examples: []
---

This page develops verified point and family linear solves, Krawczyk inclusion,
real determinant sign checks, Hermitian eigenvalue enclosures, inertia based
eigenvalue bisection, and a complex resolvent cover validator. Point residual
certificates use rounded operations with explicit error allowances; family
certificates use outward interval enclosures. Every validator reports an
inconclusive or range status when its numerical checks do not establish the
required inequalities. Failed determinant, interval pivot, or inertia checks
are not treated as evidence of singularity.

The complex Hermitian results are derived through realification where the
available Weyl and inertia interfaces are stated for real symmetric matrices.
The contour validator proves a uniform resolvent bound only on its supplied
disk cover; it does not count enclosed eigenvalues. Interval dependent claims
use the current outward-arithmetic definitions and their DAG soundness theorem;
they remain drafts pending independent review.
