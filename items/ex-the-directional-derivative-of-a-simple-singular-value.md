---
id: ex-the-directional-derivative-of-a-simple-singular-value
kind: example
title: "The directional derivative of a simple singular value is the real part of $u^*Hv$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-directional-derivative-of-a-simple-positive-singular-value]
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

## Example

Take

$$A=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad H=\begin{pmatrix}1&1\\0&0\end{pmatrix}.$$

The largest singular value is $\sigma=2$, with unit left and right singular
vectors $u=v=e_1$. Therefore

$$D\sigma(A)[H]=\operatorname{Re}(u^\ast Hv)=1.$$

## Facts & Assumptions

**Given:** The matrices $A$ and $H$ above.

[L1] For a simple positive singular value,
$D\sigma(A)[H]=\operatorname{Re}(u^\ast Hv)$
([[thm-directional-derivative-of-a-simple-positive-singular-value]]).

## Verification
**Proof technique:** direct.

1.1 Because $A$ is diagonal with entries $2$ and $1$, its singular values are $2$ and $1$. The largest one is simple, with $u=v=e_1$. [algebra]

2.1 Applying [L1] gives $D\sigma(A)[H]=\operatorname{Re}(e_1^\ast H e_1)=1$. [L1, step 1.1, algebra] ∎