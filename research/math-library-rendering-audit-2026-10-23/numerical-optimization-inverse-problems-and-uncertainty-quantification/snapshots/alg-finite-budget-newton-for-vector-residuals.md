---
id: alg-finite-budget-newton-for-vector-residuals
kind: algorithm
title: "Finite-budget Newton for a square vector residual"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-newton-correction-for-vector-residuals
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
justified_by: [lem-finite-budget-newton-work-and-status]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 138–141 / PDF pp. 5–7: exact-Jacobian Newton iteration and its local theorem"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (92)–(93) and implementation: system Newton step, residual stopping, and iteration limit"
---

## Definition

Let $U\subseteq\mathbb R^n$ be open, $n\ge1$, and let $F:U\to\mathbb R^n$ be
$C^1$ ([[def-c-one-map-and-local-inverse]]) with Jacobian $J_F$ as in
[[def-jacobian-matrix-and-gradient]]. The matrix of $DF(x)$ in the standard
basis is $J_F(x)$ by
[[thm-total-derivative-computes-directional-and-partial-derivatives]].
**Inputs:** $x_0\in U$, residual
tolerance $\varepsilon\ge0$, and update budget $N\in\mathbb N_0$.
**Output:** the last valid iterate and one of `root`, `singular-jacobian`,
`invalid-trial`, or `iteration-budget-exhausted`.

For $k=0,1,\ldots,N$, in this order:

1. Compute $F(x_k)$. If $\|F(x_k)\|_2\le\varepsilon$, return
   $(x_k,\texttt{root})$. Here `root` means the residual tolerance was met; it
   does not certify an exact zero when $\varepsilon>0$.
2. If $k=N$, return $(x_k,\texttt{iteration-budget-exhausted})$.
3. Call [[alg-newton-correction-for-vector-residuals]] with
   $A=J_F(x_k)$ and $r=F(x_k)$. If it returns `singular-jacobian`, return
   $(x_k,\texttt{singular-jacobian})$.
4. Let $s_k$ be its correction. If $x_k+s_k\notin U$, return
   $(x_k,\texttt{invalid-trial})$. Otherwise set $x_{k+1}=x_k+s_k$.

It makes no arbitrary-start, global-convergence, or discretization-error claim.
