---
id: ex-the-gradient-and-hessian-of-a-small-least-squares-functional
kind: example
title: "A small least-squares problem makes the gradient and Hessian formulas explicit"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-gradient-and-hessian-of-the-frobenius-least-squares-functional]
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Let

$$A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad b=\begin{pmatrix}1\\0\end{pmatrix}.$$

Then

$$f(x_1,x_2)=\frac12\bigl((x_1+x_2-1)^2+x_2^2\bigr).$$

Hence

$$\nabla f(x)=\begin{pmatrix}x_1+x_2-1\\x_1+2x_2-1\end{pmatrix},\qquad \nabla^2f=A^\ast A=\begin{pmatrix}1&1\\1&2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed matrix $A$ and vector $b$.

[L1] For $f(x)=\frac12\|Ax-b\|_2^2$, one has
$\nabla f(x)=A^\ast(Ax-b)$ and $\nabla^2f=A^\ast A$
([[thm-gradient-and-hessian-of-the-frobenius-least-squares-functional]]).

## Verification
**Proof technique:** direct.

1.1 Expanding the square gives the displayed scalar function. Differentiating entrywise yields $\partial_{x_1}f=x_1+x_2-1$ and $\partial_{x_2}f=x_1+2x_2-1$, so the gradient is as shown. [algebra]

2.1 Also $A^\ast(Ax-b)=\begin{pmatrix}1&0\\1&1\end{pmatrix} \begin{pmatrix}x_1+x_2-1\\x_2\end{pmatrix} =\begin{pmatrix}x_1+x_2-1\\x_1+2x_2-1\end{pmatrix}$, and $A^\ast A=\begin{pmatrix}1&1\\1&2\end{pmatrix}$. This matches [L1]. [L1, step 1.1, algebra] ∎