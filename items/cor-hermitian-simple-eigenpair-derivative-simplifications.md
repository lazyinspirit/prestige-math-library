---
id: cor-hermitian-simple-eigenpair-derivative-simplifications
kind: corollary
title: "For a Hermitian simple eigenvalue, one may take $y=x$ and the first-order formulas simplify accordingly"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x,
       thm-gauge-fixed-simple-eigenvector-derivative-formula,
       def-self-adjoint-and-normal-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

If $A(t)$ is a differentiable Hermitian matrix path, and
$\lambda(t),x(t)$ is a differentiable simple eigenpair branch with
$\|x(t)\|_2=1$, then one may choose the phase locally so that
$x(t)^\ast x'(t)=0$. With that choice,

$$\lambda'(t)=x(t)^\ast A'(t)x(t),\qquad x'(0)=-S A'(0)x(0).$$

## Facts & Assumptions

**Given:** A differentiable Hermitian matrix path $A(t)$ and a differentiable simple unit eigenvector branch $x(t)$.

[L1] For a simple eigenpair, the eigenvalue derivative is $y^\ast A'x$, and in a fixed gauge the eigenvector derivative is $-SA'x$ ([[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]], [[thm-gauge-fixed-simple-eigenvector-derivative-formula]]).

## Proof
**Proof technique:** direct.

1.1 If $A(t)=A(t)^\ast$ and $A(t)x(t)=\lambda(t)x(t)$, then taking adjoints shows $x(t)^\ast A(t)=\lambda(t)x(t)^\ast$. Thus the same unit eigenvector can serve as both left and right eigenvector. Multiplying $x(t)$ by a unit complex phase if necessary imposes the gauge $x(t)^\ast x'(t)=0$. [given, algebra]

2.1 Substitute $y=x$ into the formulas summarized in [L1]. This gives $\lambda'(t)=x(t)^\ast A'(t)x(t)$ and, in the chosen gauge, $x'(0)=-S A'(0)x(0)$. [L1, step 1.1] ∎
