---
id: alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix
kind: algorithm
title: "Assemble a weighted Galerkin mass matrix from Gaussian nodes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-weighted-orthogonal-polynomial-galerkin-space, def-gauss-quadrature-rule]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; assembly is a finite sum."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §§3.1–3.2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–113 / PDF pp. 111–119; Galerkin mass matrices in an orthogonal-polynomial basis."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (full-book PDF); orthogonal-polynomial grids and Gaussian quadrature context."
---

## Definition

Input a degree $N\ge0$, the monic orthogonal basis $p_0,\ldots,p_N$ and the $(N+1)$-node Gaussian rule for the same positive measure $\mu$ from [[def-gauss-quadrature-rule]]. With Gaussian nodes $\xi_1,\ldots,\xi_{N+1}$ and weights $w_1,\ldots,w_{N+1}$, output the matrix
$$
M_{ij}^{G}:=\sum_{r=1}^{N+1}w_r p_i(\xi_r)p_j(\xi_r),\qquad 0\le i,j\le N.
$$
The inputs are admissible only when the moment data have order at least $2N+1$ and the rule nodes, weights, and basis all use the same measure. The algorithm performs the displayed finite exact-arithmetic sums; no floating-point conditioning claim is made.

