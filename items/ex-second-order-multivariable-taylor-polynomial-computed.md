---
id: ex-second-order-multivariable-taylor-polynomial-computed
kind: example
title: "A second-order Taylor polynomial computed from gradient and Hessian data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-second-order-taylor-expansion-with-the-hessian, thm-algebra-of-derivatives]
aliases: []
landmark: false
proof_strategy: calculation
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Statement

For $f(x,y)=e^x(1+y+y^2)$, the second-order Taylor polynomial at the origin is $1+x+y+\tfrac12x^2+xy+y^2$.

## Facts & Assumptions
**Given:** $f(x,y)=e^x(1+y+y^2)$.

[L1] The second-order Taylor polynomial is determined by the value, gradient, and Hessian ([[cor-second-order-taylor-expansion-with-the-hessian]]).

[L2] The standard algebra rules compute the displayed derivatives ([[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** calculation.

1.1 At $(0,0)$, $f=1$, $\nabla f=(1,1)$, and $H_f=\begin{pmatrix}1&1\\1&2\end{pmatrix}$. [given, L2, algebra]

2.1 Substitution into [L1] gives $1+x+y+\tfrac12(x^2+2xy+2y^2)$, namely the claimed polynomial. [L1, step 1.1, algebra]

3.1 Thus the computed value, gradient, and Hessian yield the stated second-order approximation. [step 2.1, algebra] ∎
