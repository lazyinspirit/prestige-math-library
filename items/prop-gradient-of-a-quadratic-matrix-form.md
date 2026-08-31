---
id: prop-gradient-of-a-quadratic-matrix-form
kind: proposition
title: "Matrix quadratic forms have the expected first derivative and Hessian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-matrix-differentials-obey-sum-product-and-adjoint-rules,
       prop-differentials-of-trace-and-frobenius-linear-functionals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Fix a matrix $C$ and consider the real-valued quadratic form

$$q(x):=\frac12\|Cx\|_2^2=\frac12 x^\ast C^\ast Cx.$$

Then

$$Dq(x)[h]=\operatorname{Re}\langle C^\ast Cx,h\rangle,$$

so the gradient is $C^\ast Cx$, and the Hessian is the constant Hermitian map
$h\mapsto C^\ast Ch$.

## Facts & Assumptions

**Given:** A fixed matrix $C$, a vector $x$, and a perturbation direction $h$.

[L1] Matrix differentials satisfy the product and adjoint rules
([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

[L2] Frobenius-linear functionals differentiate by inspection
([[prop-differentials-of-trace-and-frobenius-linear-functionals]]).

## Proof
**Proof technique:** direct.

1.1 Expanding at $x+h$ gives $$q(x+h)=\frac12\|Cx+Ch\|_2^2 =\frac12\|Cx\|_2^2+\operatorname{Re}\langle Cx,Ch\rangle+\frac12\|Ch\|_2^2.$$ Hence $$Dq(x)[h]=\operatorname{Re}\langle C^\ast Cx,h\rangle,$$ so the gradient is $C^\ast Cx$. [L1, L2, algebra]

2.1 The derivative of the gradient map $x\mapsto C^\ast Cx$ is the constant linear map $h\mapsto C^\ast Ch$. Therefore the Hessian is $C^\ast C$. [step 1.1, algebra] ∎