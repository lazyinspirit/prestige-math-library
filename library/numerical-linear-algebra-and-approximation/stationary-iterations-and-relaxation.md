---
page: stationary-iterations-and-relaxation
title: "Stationary iterations and relaxation"
status: published
items:
  - def-diagonal-lower-upper-splitting-convention
  - alg-richardson-stationary-iteration
  - lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction
  - alg-jacobi-stationary-iteration
  - alg-gauss-seidel-stationary-iteration
  - alg-sor-stationary-iteration
  - thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence
  - thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge
  - thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two
examples: []
---

This page adds finite-budget Richardson, Jacobi, fixed-order Gauss–Seidel, and
SOR procedures using the published stationary-splitting definition. The
diagonal/lower/upper convention is $A=D-L-U$, with $L$ and $U$ the negatives of
the strict lower and upper parts. Zero pivots and the inadmissible Richardson
or SOR parameter return explicit failure statuses; a finite iteration budget
reports the iterate, not a convergence certificate.

The all-start, all-right-hand-side criterion remains the published equivalence
$\rho(M^{-1}N)<1$ on the canonical stationary-splitting page. This page proves
the source-backed Jacobi and Gauss–Seidel sufficient conditions: strict row
diagonal dominance, and weak row diagonal dominance with a strongly connected
off-diagonal graph and at least one strict row. It also proves that for
Hermitian $A$ with positive diagonal, SOR converges for every start exactly
when $A$ is positive definite and $0<\omega<2$.

These are exact-arithmetic asymptotic claims. A spectral-radius bound does not
prevent transient growth for a nonnormal iteration matrix or polynomial
factors from defective Jordan blocks. A norm contraction is sufficient but is
not asserted as necessary. No universal convergence factor or optimal
relaxation parameter is claimed; any optimal-parameter formula requires its
matrix-ordering hypotheses.
