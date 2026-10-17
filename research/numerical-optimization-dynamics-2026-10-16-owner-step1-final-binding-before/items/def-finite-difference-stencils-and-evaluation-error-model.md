---
id: def-finite-difference-stencils-and-evaluation-error-model
kind: definition
title: "Forward and central difference stencils with bounded evaluation errors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abs-value]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, finite differences"
      url: "https://fncbook.github.io/v1.0/localapprox/finitediffs.html"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
---

## Definition

Let $I\subseteq\mathbb R$ be open, $x\in I$, and $h>0$. When $x+h\in I$, the **forward difference** of $f:I\to\mathbb R$ is

$$D_h^+f(x):=\frac{f(x+h)-f(x)}{h}.$$

When $x-h,x+h\in I$, the **central difference** is

$$D_h^0f(x):=\frac{f(x+h)-f(x-h)}{2h}.$$

An evaluation with absolute error bound $\delta\ge0$ is a value $\widehat f(y)=f(y)+e_y$ with $|e_y|\le\delta$ at each requested point $y$. The corresponding inexact quotients are obtained by replacing each $f(y)$ in the displayed stencil by $\widehat f(y)$. The bound is absolute and applies separately to each call; no correlation or relative-error assumption is included.
