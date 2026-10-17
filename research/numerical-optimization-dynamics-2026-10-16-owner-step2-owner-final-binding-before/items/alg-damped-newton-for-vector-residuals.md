---
id: alg-damped-newton-for-vector-residuals
kind: algorithm
title: "Finite-budget residual-merit damped Newton"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-newton-correction-for-vector-residuals
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-total-derivative-computes-directional-and-partial-derivatives
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
      locator: "§VI.3, printed p. 141 / PDF p. 7: damped Newton modification"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: Newton's system correction; globalization is not asserted there"
---

## Definition

Let $U\subseteq\mathbb R^n$ be open, $n\ge1$, and let $F:U\to\mathbb R^n$ be
$C^1$ ([[def-c-one-map-and-local-inverse]]) with Jacobian $J_F$ as in
[[def-jacobian-matrix-and-gradient]]. The matrix of $DF(x)$ in the standard
basis is $J_F(x)$ by
[[thm-total-derivative-computes-directional-and-partial-derivatives]]. Define
the residual merit
$\Phi(x):=\tfrac12\|F(x)\|_2^2$. **Inputs:** $x_0\in U$, residual tolerance
$\varepsilon\ge0$, update budget $N\in\mathbb N_0$, sufficient-decrease
parameter $\alpha\in(0,1)$, reduction factor $\beta\in(0,1)$, and finite
backtrack budget $B\in\mathbb N_0$. **Output:** the last valid iterate and one
of `root`, `singular-jacobian`, `invalid-trial`, `line-search-exhausted`, or
`iteration-budget-exhausted`.

At iteration $k=0,1,\ldots,N$, apply these instructions in order:

1. Evaluate $F(x_k)$. If $\|F(x_k)\|_2\le\varepsilon$, return
   $(x_k,\texttt{root})$. This status records the residual test only.
2. If $k=N$, return $(x_k,\texttt{iteration-budget-exhausted})$.
3. Call [[alg-newton-correction-for-vector-residuals]] with
   $A=J_F(x_k)$ and $r=F(x_k)$. If it returns `singular-jacobian`, return
   that status. Otherwise let $s_k$ be its correction.
4. For $j=0,1,\ldots,B$, set $t=\beta^j$ and trial $y=x_k+t s_k$. If
   $y\notin U$, reject the trial and continue. If $y\in U$, evaluate
   $\Phi(y)$ and accept the first trial satisfying
   $$\Phi(y)\le\Phi(x_k)-\alpha t\|F(x_k)\|_2^2.$$
   On acceptance set $x_{k+1}=y$ and continue at iteration $k+1$.
5. If no trial was accepted, return `invalid-trial` if every tested point was
   outside $U$; otherwise return `line-search-exhausted`.

The residual-merit test is defined directly for a vector root problem. A finite
backtrack budget can return failure; no global convergence or quadratic-rate
claim is made.
