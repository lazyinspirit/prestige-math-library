---
id: alg-finite-difference-newton-for-vector-residuals
kind: algorithm
title: "Finite-budget forward-difference Newton for a square vector residual"
status: published
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

Use the same open domain, differentiability assumptions, initial point, residual
tolerance and update budget as [[alg-finite-budget-newton-for-vector-residuals]].
Supply one increment vector $h=(h_0,\ldots,h_{n-1})$ with every $h_i\ne0$ for
$0\le i<n$. **Output:** the last valid iterate and one of `root`,
`invalid-stencil`, `singular-jacobian`, `invalid-trial`, or
`iteration-budget-exhausted`; every returned status is paired with the current
last valid iterate.

For $k=0,1,\ldots,N$, in this order:

1. Evaluate $F(x_k)$. If $\|F(x_k)\|_2\le\varepsilon$, return
   $(x_k,\texttt{root})$.
2. If $k=N$, return $(x_k,\texttt{iteration-budget-exhausted})$.
3. Call [[alg-forward-difference-jacobian]] at $(F,x_k,h)$. If it returns
   `invalid-stencil`, return $(x_k,\texttt{invalid-stencil})$.
4. Otherwise call [[alg-newton-correction-for-vector-residuals]] with
   $A=J_hF(x_k)$ and $r=F(x_k)$. If that correction is unavailable, return
   $(x_k,\texttt{singular-jacobian})$. Otherwise let $s_k$ be the returned correction.
5. If the trial $x_k+s_k$ is outside $U$, return
   $(x_k,\texttt{invalid-trial})$; otherwise set $x_{k+1}=x_k+s_k$ and
   continue.

The `root` status still means only $\|F(x_k)\|_2\le\varepsilon$. This
approximate-Jacobian procedure has no quadratic-rate claim here.
