---
id: ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction
kind: example
title: "For a Hermitian family, the first derivative of a simple eigenvalue is the corresponding Rayleigh quotient direction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-hermitian-simple-eigenpair-derivative-simplifications]
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

## Example

Let

$$A(t)=\begin{pmatrix}1&0\\0&3\end{pmatrix} +t\begin{pmatrix}2&1\\1&0\end{pmatrix}.$$

At $t=0$, the simple eigenvalue $\lambda=1$ has unit eigenvector $x=e_1$, so

$$\lambda'(0)=x^\ast A'(0)x=e_1^\ast \begin{pmatrix}2&1\\1&0\end{pmatrix}e_1=2.$$

## Facts & Assumptions

**Given:** The Hermitian family $A(t)$ above.

[L1] For a Hermitian simple eigenvalue, the derivative simplifies to
$x^\ast A' x$ ([[cor-hermitian-simple-eigenpair-derivative-simplifications]]).

## Verification
**Proof technique:** direct.

1.1 The base matrix $A(0)=\operatorname{diag}(1,3)$ is Hermitian, and its simple eigenvalue $1$ has unit eigenvector $e_1$. [algebra]

2.1 Applying [L1] gives $\lambda'(0)=e_1^\ast A'(0)e_1=2$. This is exactly the Rayleigh quotient of the perturbation in the eigenvector direction. [L1, step 1.1, algebra] ∎