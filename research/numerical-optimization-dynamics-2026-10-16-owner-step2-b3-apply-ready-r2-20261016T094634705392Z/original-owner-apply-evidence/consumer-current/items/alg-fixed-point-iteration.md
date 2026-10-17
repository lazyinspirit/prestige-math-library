---
id: alg-fixed-point-iteration
kind: algorithm
title: "Fixed-point iteration with a residual stop and finite budget"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-metric-space]
justified_by: [lem-finite-budget-fixed-point-iteration-work]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.1, printed pp. 134–136 / PDF pp. 1–2: fixed-point iteration and its residual stopping discussion"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: vector nonlinear systems and iterative root-solving context"
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $G:X\to X$ be a
specified map, and choose an initial point $x_0\in X$, a residual tolerance
$\varepsilon\ge0$, and an iteration budget $N\in\mathbb N_0$. A **fixed point**
of $G$ is a point $x$ with $G(x)=x$. The procedure returns a point and a
status as follows. For $k=0,1,\ldots,N$, compute the fixed-point residual
$r_k:=d(G(x_k),x_k)$. If $r_k\le\varepsilon$, return
$(x_k,\texttt{residual-tolerance-met},r_k,k)$. Otherwise, if $k=N$, return
$(x_k,\texttt{iteration-budget-exhausted},r_k,k)$. Otherwise set
$x_{k+1}:=G(x_k)$ and continue.

A positive residual tolerance reports an approximate fixed point only; this
definition asserts no convergence or error bound.
