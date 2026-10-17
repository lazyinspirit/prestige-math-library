---
page: stationary-iterations-and-relaxation-examples
title: "Stationary iterations and relaxation — Examples"
status: draft
items: []
examples:
  - ex-stationary-splitting-with-an-initial-error-missing-an-unstable-eigenspace
  - ex-jacobi-iteration-for-a-strictly-diagonally-dominant-matrix
  - ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two
---

The examples compute a strictly row-diagonally-dominant Jacobi iteration and
an SPD SOR iteration with $\omega=3/2$. They also show why convergence from a
single initial error does not imply the all-start condition: a stationary
split may have an unstable eigenspace that the chosen error misses. The
published Jacobi/Gauss–Seidel spectral-radius comparison remains available as
[[ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison]].
