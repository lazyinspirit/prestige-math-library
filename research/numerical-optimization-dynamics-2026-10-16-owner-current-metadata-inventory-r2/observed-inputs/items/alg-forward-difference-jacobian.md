---
id: alg-forward-difference-jacobian
kind: algorithm
title: "Forward-difference Jacobian on an open domain"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-c-one-map-and-local-inverse, def-jacobian-matrix-and-gradient, thm-total-derivative-computes-directional-and-partial-derivatives]
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
      locator: "§VI.3, printed pp. 140–141 / PDF pp. 6–7: numerical Jacobian formula and truncation/roundoff warning"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2: the Jacobian matrix used in the system Newton step"
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $F:U\to\mathbb R^n$
be $C^1$ in the sense of [[def-c-one-map-and-local-inverse]]. Its Jacobian
$J_F(x)$ is the matrix of first partial derivatives from
[[def-jacobian-matrix-and-gradient]], and the matrix of $DF(x)$ in the standard
basis is $J_F(x)$ by
[[thm-total-derivative-computes-directional-and-partial-derivatives]]. For
$x\in U$, supply increments $h=(h_0,\ldots,h_{n-1})\in\mathbb R^n$. For each
standard basis vector $e_i$ with $0\le i<n$, the admissible stencil conditions
are $h_i\ne0$ and $x+h_i e_i\in U$.

If any admissibility condition fails, return `invalid-stencil`. Otherwise form
the matrix $J_hF(x)$ column by column:
$$J_hF(x)e_i:=\frac{F(x+h_i e_i)-F(x)}{h_i},\qquad 0\le i<n.$$
Return `success` and this matrix. Each evaluation point is in $U$. This
procedure defines a forward-difference approximation; it asserts no accuracy
or convergence guarantee.
