---
id: ex-classification-of-laplace-heat-and-wave-equations
kind: example
title: "Laplace, heat, and wave equations have elliptic, parabolic, and hyperbolic principal symbols"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-elliptic-hyperbolic-and-parabolic-principal-symbols,
       def-two-variable-second-order-discriminant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Example

The model operators

$$\Delta=u_{xx}+u_{yy},\qquad \partial_t-\Delta_x,\qquad \partial_{tt}-\partial_{xx}$$

represent the elliptic, parabolic, and hyperbolic cases respectively.

## Facts & Assumptions

**Given:** The principal parts of Laplace, heat, and one-space-dimensional wave
operators.

[L1] Elliptic, hyperbolic, and parabolic type are read from the principal
symbol definitions ([[def-elliptic-hyperbolic-and-parabolic-principal-symbols]]).

[L2] In two variables, the discriminant is $B^2-AC$
([[def-two-variable-second-order-discriminant]]).

## Verification

**Proof technique:** direct.

1.1 For $u_{xx}+u_{yy}$ one has $A=C=1$ and $B=0$, so [L2] gives $\Delta=-1<0$ and the Laplace operator is elliptic; for $u_{tt}-u_{xx}$, the principal polynomial in $(\tau,\xi)$ is $\tau^2-\xi^2$, which has two distinct real roots $\tau=\pm\xi$ for $\xi\neq0$, so [L1] makes it hyperbolic. [L1, L2]

2.1 For the heat operator $\partial_t-\Delta_x$, the spatial quadratic form is $|\xi|^2$, which is positive definite, while the time derivative is first order, so [L1] identifies it as parabolic. [L1] ∎
