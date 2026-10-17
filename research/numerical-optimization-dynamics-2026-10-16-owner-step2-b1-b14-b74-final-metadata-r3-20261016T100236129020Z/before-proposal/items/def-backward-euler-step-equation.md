---
id: def-backward-euler-step-equation
title: "Backward Euler step map and algebraic residual"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-implicit-residual-and-algebraic-error-units
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9, PDF pp. 78–79 / printed pp. 76–77: implicit Euler equation and stiff scalar decay."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6 Multistep methods"
      url: "https://fncbook.com/python/multistep/"
      locator: "§6.6.1–§6.6.2: AM1/backward Euler equation and its local truncation error."
---

## Definition

Let $f:D\to\mathbb R^d$ define a first-order initial-value problem on an open time-state domain $D\subseteq\mathbb R\times\mathbb R^d$. Given a time $t_n$, step $h_n>0$, and state $y_n$ with $(t_n,y_n)\in D$, an admissible endpoint $y_{n+1}$ must satisfy $(t_n+h_n,y_{n+1})\in D$. The backward Euler endpoint is any such $y_{n+1}$ satisfying

$$y_{n+1}=y_n+h_n f(t_n+h_n,y_{n+1}).$$

Its update residual at an approximate endpoint $z$ with $(t_n+h_n,z)\in D$ is

$$G_n^{\rm BE}(z)=z-y_n-h_n f(t_n+h_n,z).$$

When $f$ is defined at the endpoint, the derivative residual is $G_n^{\rm BE}(z)/h_n$. The equation can have no, one, or several roots on a restricted admissible branch set; this definition by itself asserts neither existence nor uniqueness.
