---
id: alg-finite-difference-newton-for-vector-residuals
kind: algorithm
title: "Finite-budget forward-difference Newton for a square vector residual"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-forward-difference-jacobian
  - alg-finite-budget-newton-for-vector-residuals
  - alg-newton-correction-for-vector-residuals
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 140–141 / PDF pp. 6–7: numerical Jacobian formula and finite-difference modification"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: system Newton iteration using a supplied Jacobian"
---

## Definition

Use the same domain, differentiability, initial point, residual tolerance, and
update budget as [[alg-finite-budget-newton-for-vector-residuals]]. Supply one
increment vector $h=(h_1,\ldots,h_n)$ with every $h_i\ne0$.

At each iterate $x_k$, first evaluate $F(x_k)$ and apply the same residual-stop
and budget checks, in the same order, as the exact-Jacobian algorithm. If an
update is due, call [[alg-forward-difference-jacobian]] at $(F,x_k,h)$. Return
`invalid-stencil` if any required sample is outside $U$. Otherwise call
[[alg-newton-correction-for-vector-residuals]] with $A=J_hF(x_k)$ and
$r=F(x_k)$. Return `singular-jacobian` if that correction is unavailable. If
the trial $x_k+s_k$ is outside $U$, return `invalid-trial`; otherwise set
$x_{k+1}=x_k+s_k$ and continue. The finite budget returns
`iteration-budget-exhausted` if no earlier status applies.

The `root` status still means only $\|F(x_k)\|_2\le\varepsilon$. This
approximate-Jacobian procedure has no quadratic-rate claim here.
