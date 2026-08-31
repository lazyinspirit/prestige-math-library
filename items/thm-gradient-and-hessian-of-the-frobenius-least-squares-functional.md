---
id: thm-gradient-and-hessian-of-the-frobenius-least-squares-functional
kind: theorem
title: "The Frobenius least-squares objective has gradient $A^*(Ax-b)$ and Hessian $A^*A$ in the vector variable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-gradient-of-a-quadratic-matrix-form,
       thm-least-squares-solutions-and-normal-equation,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

For fixed $A$ and $b$, let

$$f(x):=\frac12\|Ax-b\|_2^2.$$

Then

$$Df(x)[h]=\operatorname{Re}\langle A^\ast(Ax-b),h\rangle,$$

so the gradient is $\nabla f(x)=A^\ast(Ax-b)$ and the Hessian is the constant
map $h\mapsto A^\ast Ah$.

## Facts & Assumptions

**Given:** A fixed matrix $A$, a fixed vector $b$, a vector $x$, and a
direction $h$.

[L1] The quadratic form $x\mapsto \frac12\|Cx\|_2^2$ has gradient $C^\ast Cx$
and Hessian $C^\ast C$ ([[prop-gradient-of-a-quadratic-matrix-form]]).

## Proof
**Proof technique:** direct.

1.1 Write $f(x)=\frac12\|A(x-A^+b)\|_2^2+\text{constant}$ only heuristically; directly, $$f(x+h)-f(x)=\frac12\|Ax-b+Ah\|_2^2-\frac12\|Ax-b\|_2^2.$$ Expanding yields $$Df(x)[h]=\operatorname{Re}\langle Ax-b,Ah\rangle =\operatorname{Re}\langle A^\ast(Ax-b),h\rangle.$$ [L1, algebra]

2.1 The gradient map from step 1.1 is $x\mapsto A^\ast(Ax-b)$, whose derivative is the constant linear map $h\mapsto A^\ast Ah$. Thus the Hessian is $A^\ast A$. [step 1.1, algebra] ∎