---
page: spectral-collocation-and-galerkin-methods
title: Spectral collocation and Galerkin methods
status: published
items:
  - def-periodic-fourier-collocation-grid
  - lem-periodic-fourier-mode-aliasing-under-sampling
  - alg-periodic-fourier-collocation-differentiation-matrix
  - thm-periodic-fourier-collocation-differentiation-is-exact
  - def-chebyshev-gauss-lobatto-collocation-grid
  - lem-chebyshev-lobatto-mode-aliasing
  - alg-chebyshev-gauss-lobatto-differentiation-matrix
  - thm-chebyshev-gauss-lobatto-differentiation-is-exact
  - alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination
  - thm-chebyshev-dirichlet-collocation-status-and-system
  - def-chebyshev-arcsine-weighted-l2-pairing
  - lem-chebyshev-polynomials-orthogonal-in-arcsine-weight
  - def-chebyshev-weighted-spectral-sobolev-scale
  - thm-chebyshev-weighted-orthogonal-projection-rate
  - thm-chebyshev-lobatto-interpolation-near-best-weighted-error
  - thm-chebyshev-lobatto-interpolation-rate-under-spectral-sobolev-regularity
  - thm-chebyshev-lobatto-pointwise-remainder-bound
  - thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data
  - alg-chebyshev-composite-simpson-weighted-mass-matrix
  - thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix
  - def-weighted-orthogonal-polynomial-galerkin-space
  - thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined
  - alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix
  - thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact
  - def-legendre-polynomial-family-and-l2-pairing
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - def-legendre-weighted-sobolev-scale
  - thm-legendre-weighted-projection-error-rate
  - rem-chebyshev-collocation-conditioning-and-spectral-radius-scope
examples: []
requires:
  - fundamental-trigonometric-identities
  - polynomial-interpolation-and-remainder
  - polynomial-approximation-and-chebyshev-interpolation
  - composite-quadrature-rules
  - gaussian-quadrature
  - absolute-convergence-and-the-wiener-algebra
  - finite-fourier-analysis-and-the-fast-fourier-transform
---

This page defines periodic Fourier and Chebyshev–Gauss–Lobatto collocation, including the even-grid Nyquist convention, exact differentiation of the chosen interpolants, and one finite two-point Dirichlet collocation solve with explicit singular-matrix status. The BVP item identifies the resulting algebraic system; it does not assert unconditional nonsingularity, stability, or PDE convergence.

The weighted Galerkin items give finite orthogonal-polynomial spaces and coefficient-defined spectral scales. Chebyshev and Legendre projections have algebraic coefficient-tail rates; Chebyshev–Lobatto interpolation has an algebraic rate under the stated weighted spectral regularity and an exponential rate for data holomorphic near a Bernstein ellipse. A separate pointwise remainder estimate uses the Lagrange remainder theorem. These coefficient-defined scales make no derivative-Sobolev equivalence claim.

The quadrature items compare exact Gaussian mass assembly with composite-Simpson assembly and its fourth-derivative entrywise bound. Fourier and Lobatto aliasing are explicit sample identities; they do not establish nonlinear stability or a de-aliasing guarantee. The source-specific $O(N^4)$ second-derivative spectral-radius observation is recorded only as conditioning context for its cited Dirichlet setup.
