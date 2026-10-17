---
id: alg-bracketing-zoom-strong-wolfe-search
kind: algorithm
title: "Finite-budget bracketing and zoom for a strong Wolfe step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.5, Wolfe line-search algorithm, printed pp. 60–61 / PDF pp. 78–79; bracketing, zoom, and reversed endpoint order."
---

## Definition

Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$,
let $x\in D$, and let $p\in\mathbb R^n$ be arbitrary. Fix $0<c_1<c_2<1/2$ and finite
budgets $E,Z\in\mathbb N$ for expansion and zoom trials. After the direction check passes, use the functions
$\phi(t)=f(x+tp)$ and $\phi'(t)=\langle\nabla f(x+tp),p\rangle$ from
[[def-wolfe-and-strong-wolfe-conditions]]. **Output:** either a positive
strong Wolfe step, or one of `invalid-direction`, `domain-exit`, and
`evaluation-budget-exhausted`.

1. Evaluate and retain $f(x)$ and $\nabla f(x)$, and set
   $\phi(0):=f(x)$ and $\phi'(0):=\langle\nabla f(x),p\rangle$.
   If $\phi'(0)\ge0$, return `invalid-direction`.
   Set $a:=0$ and $t:=1$. For at most $E$ expansion trials, in order:
   - If $x+tp\notin D$, return `domain-exit` without evaluating the trial.
   - Evaluate $\phi(t)$ and $\phi'(t)$. If
     $\phi(t)>\phi(0)+c_1t\phi'(0)$ or $\phi(t)\ge\phi(a)$, call the zoom
     procedure below with the ordered endpoint pair $(a,t)$ and return its
     output.
   - If $|\phi'(t)|\le c_2|\phi'(0)|$, return $t$ as a strong Wolfe step.
   - If $\phi'(t)\ge0$, call zoom with the reversed endpoint pair $(t,a)$ and
     return its output.
   - Otherwise set $a:=t$ and $t:=2t$.
2. If the expansion budget is exhausted, return `evaluation-budget-exhausted`.

For `zoom(a,b)`, preserve the endpoint order even when $b<a$. For at most
$Z$ zoom trials, in order:

1. Set $m:=(a+b)/2$. If $x+mp\notin D$, return `domain-exit` without
   evaluating the trial.
2. Evaluate $\phi(m)$ and $\phi'(m)$. If
   $\phi(m)>\phi(0)+c_1m\phi'(0)$ or $\phi(m)\ge\phi(a)$, set $b:=m$.
   Otherwise, if $|\phi'(m)|\le c_2|\phi'(0)|$, return $m$ as a strong Wolfe
   step. In the remaining branch, if $\phi'(m)(b-a)\ge0$, first set
   $b:=a$; then set $a:=m$.
3. If the zoom budget is exhausted, return `evaluation-budget-exhausted`.

The procedure returns a step only after both strong Wolfe inequalities have
been checked. Finite budgets and domain exits may return failure even when a
strong Wolfe step exists; no convergence claim follows from the procedure
alone.
