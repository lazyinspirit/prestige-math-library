---
page: finite-element-eigenvalue-approximation-examples
title: "Finite-element eigenvalue approximation — Examples"
status: published
items: []
examples:
  - ex-nearly-dependent-overlap-matrix-whitening-and-conditioning
  - ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state
  - ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound
  - ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable
---

The examples compute the conditioning of a nearly dependent basis and verify
exact generalized-pencil whitening; exhibit a broken piecewise-constant
Dirichlet trial function with zero broken energy; calculate the first Ritz
quotient on a conforming square P1 fan mesh; and show that a repeated
eigenspace can remain exact while a chosen eigenvector oscillates. The
nonconforming example does not satisfy the conforming upper-bound hypotheses,
and the square calculation does not assert that its coarse-space gap is small
enough for the quadratic error estimate.
