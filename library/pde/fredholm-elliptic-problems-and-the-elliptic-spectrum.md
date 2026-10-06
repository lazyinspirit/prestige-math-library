---
page: "fredholm-elliptic-problems-and-the-elliptic-spectrum"
title: "Fredholm Elliptic Problems and the Elliptic Spectrum"
status: published
items:
  - thm-garding-inequality-for-a-divergence-form-elliptic-operator
  - cor-a-sufficiently-large-shift-is-coercive
  - def-shifted-elliptic-solution-operator
  - lem-shifted-elliptic-solution-operator-is-compact-on-ltwo
  - lem-unshifted-elliptic-equation-is-an-identity-minus-compact-equation
  - def-formal-adjoint-and-adjoint-weak-dirichlet-problem
  - lem-adjoint-of-the-shifted-solution-operator-solves-the-adjoint-form-problem
  - lem-elliptic-fredholm-range-condition-translates-to-adjoint-kernel-orthogonality
  - thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems
  - cor-elliptic-kernel-and-cokernel-are-finite-dimensional
  - cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-ltwo-operator-associated-with-a-symmetric-elliptic-form
  - lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded
  - thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent
  - def-symmetric-elliptic-weak-eigenpair
  - lem-symmetric-shifted-solution-operator-is-positive-and-self-adjoint
  - thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator
  - lem-eigenbasis-expansion-in-the-form-norm
  - thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue
  - thm-courant-fischer-minimax-for-elliptic-eigenvalues
  - cor-poincare-constant-and-first-dirichlet-eigenvalue
  - cor-noninvertible-elliptic-shifts-form-a-discrete-set-in-the-self-adjoint-case
  - lem-elliptic-resolvent-identity
  - cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal
  - thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem
  - thm-dirichlet-first-eigenvalue-is-monotone-under-domain-inclusion
  - thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation
  - rem-neumann-spectrum-and-the-constant-zero-mode
examples: []
---

This page builds the elliptic Fredholm theory and the spectral theory of a
symmetric divergence-form Dirichlet operator. Gårding's inequality gives an
explicit lower bound for the form in terms of the ellipticity and coefficient
constants, and a sufficiently large shift makes the form coercive with constant
$\theta/2$. The shifted solution operator $K_\mu$ is then bounded from $L^2$ to
$H^1_0$, and on a bounded open set it is compact after composition with the
Rellich embedding. The unshifted weak equation is algebraically equivalent to
the identity-minus-compact equation $(I-\mu K_\mu)u=K_\mu f$; reading the
abstract Fredholm alternative through this reduction yields the two-alternative
theorem for weak Dirichlet problems with $L^2$ data, the finite dimension and
equality of the dimensions of the homogeneous and adjoint homogeneous spaces, and the
uniqueness-implies-existence corollary with a bounded solution map. The formal
adjoint is defined form-first, and its solution operator is the Hilbert-space
adjoint of $K_\mu$, which turns the range condition into orthogonality to the
weak adjoint kernel.

In the symmetric case the associated $L^2$ operator $L$ has dense domain, is
symmetric and lower bounded. Surjectivity of the shifted operators establishes
self-adjointness, and compactness of the shifted inverse gives compact resolvent
on bounded domains; $K_\mu$ restricted to the symmetric case is positive and
self-adjoint. The compact self-adjoint spectral theorem then produces a
nondecreasing eigenvalue list with finite multiplicities and an orthonormal
eigenbasis of $L^2$, with the eigenbasis expanding every $H^1_0$ element in the
form norm. The Rayleigh and Courant--Fischer variational principles identify
the eigenvalues as min-max values of the Rayleigh quotient, the first
Dirichlet eigenvalue is monotone under domain inclusion, and the reciprocal
square root of the first eigenvalue of the Dirichlet Laplacian is the optimal
zero-trace Poincaré constant. The resolvent is a spectral series with norm the reciprocal distance
to the spectrum, and the non-invertible shifts form a closed discrete set.

Conventions: $\Omega\subseteq\mathbb R^n$ is open, $n\ge1$, with boundedness
and connectedness imposed only where stated; coefficients are measurable,
essentially bounded and uniformly elliptic, with the sesquilinear convention
linear in the first argument and conjugate-linear in the second; all spaces are
almost-everywhere classes, and $H^1_0$ is the closure of $C_c^\infty$. Countable
Choice is declared for the Sobolev, Lebesgue and Hilbert-space interfaces, and
the Axiom of Choice is carried exactly where compactness of the Rellich
embedding and the abstract Fredholm alternative are used. No boundary
regularity of $\partial\Omega$ is assumed anywhere on this page, and the
Fredholm alternative is stated for $L^2$ data; $H^{-1}$ data are not treated.
