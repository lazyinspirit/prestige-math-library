---
id: thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing
kind: theorem
title: "A simple eigenvalue and a gauge-fixed right eigenvector admit local $C^1$ branches in the underlying real matrix space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       prop-simple-eigenvalues-admit-left-right-normalization,
       thm-parametrized-implicit-function-theorem-with-higher-regularity]
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
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Statement

Let $A_0$ be a square matrix with simple eigenvalue $\lambda_0$, and choose
compatible eigenvectors $x_0,y_0$ normalized by $y_0^\ast x_0=1$. Then, in a
neighborhood of $A_0$ inside the underlying real matrix space, there exist
unique $C^1$ maps $A\mapsto \lambda(A)$ and $A\mapsto x(A)$ such that

$$A\,x(A)=\lambda(A)x(A),\qquad y_0^\ast x(A)=1,$$

with $\lambda(A_0)=\lambda_0$ and $x(A_0)=x_0$.

## Facts & Assumptions

**Given:** A base matrix $A_0$, a simple eigenvalue $\lambda_0$, and normalized
compatible eigenvectors $x_0,y_0$.

[L1] For a simple eigenvalue, one may normalize compatible left and right
eigenvectors by $y_0^\ast x_0=1$
([[prop-simple-eigenvalues-admit-left-right-normalization]]).

[L2] The parametrized implicit-function theorem gives a unique local $C^1$
solution once the derivative in the solved-for variables is invertible
([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

## Proof
**Proof technique:** direct.

1.1 Consider the real map $F(A,\lambda,x)=((A-\lambda I)x,\; y_0^\ast x-1)$. Its derivative in $(\lambda,x)$ at $(A_0,\lambda_0,x_0)$ is $(\mu,h)\mapsto ((A_0-\lambda_0 I)h-\mu x_0,\; y_0^\ast h)$. If this derivative vanishes, then left-multiplying the first component by $y_0^\ast$ gives $-\mu y_0^\ast x_0=0$, hence $\mu=0$ by [L1]. Then $(A_0-\lambda_0 I)h=0$ and $y_0^\ast h=0$, so $h$ is a multiple of $x_0$ whose pairing with $y_0$ is zero; therefore $h=0$. Thus the derivative is injective. Because domain and codomain have the same real dimension, it is invertible. [L1, given, algebra]

2.1 The hypotheses of [L2] now apply to $F$ at $(A_0,\lambda_0,x_0)$. Therefore there are neighborhoods and unique $C^1$ maps $A\mapsto \lambda(A)$ and $A\mapsto x(A)$ solving $F(A,\lambda(A),x(A))=0$. Those equations are exactly $A\,x(A)=\lambda(A)x(A)$ and $y_0^\ast x(A)=1$, with the required base values. [L2, step 1.1] ∎