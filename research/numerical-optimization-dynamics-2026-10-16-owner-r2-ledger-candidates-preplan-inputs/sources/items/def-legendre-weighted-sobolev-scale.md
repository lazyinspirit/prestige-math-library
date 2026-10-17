---
id: def-legendre-weighted-sobolev-scale
kind: definition
title: "Legendre weighted spectral-Sobolev scale and projection"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-legendre-polynomial-family-and-l2-pairing, lem-legendre-weighted-derivative-orthogonality-and-norm]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice axiom is used; the scale is a completion of finite coefficient sequences."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; Legendre polynomial Galerkin bases and weighted approximation."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (complete book PDF); spectral polynomial approximation context."
---

## Definition

For $s\ge0$, define $H_L^s$ as the completion of finite Legendre sums $p=\sum_{n=0}^Mc_nP_n$ in the coefficient norm
$$
\|p\|_{H_L^s}^2=\sum_{n=0}^M(1+n(n+1))^s\frac{2}{2n+1}|c_n|^2.
$$
The coefficients are unique because the polynomials have distinct degrees by [[lem-legendre-weighted-derivative-orthogonality-and-norm]]. At $s=0$ this norm is exactly the unweighted $L^2([-1,1])$ norm on finite sums, by the same lemma; its completion is denoted $L_L^2$. Define the degree-$N$ orthogonal projection on finite sums by
$$
\Pi_Nu=\sum_{n=0}^Nc_nP_n.
$$
It extends to the coefficient completion by truncation. This explicitly coefficient-defined scale uses the Legendre weight $1$ on $[-1,1]$; no equivalence with an unweighted derivative-based Sobolev norm is asserted here.
