---
id: ex-real-conjugate-pair-schur-block
kind: example
title: "A real Schur block represents a conjugate eigenvalue pair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-real-and-complex-schur-forms
  - lem-real-francis-double-shift-polynomial
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "James W. Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Example

For real $a$ and $b>0$, let

$$T=\begin{pmatrix}a&b\\-b&a\end{pmatrix},\qquad Q=I.$$

Then $(Q,T)$ is a real Schur pair and the two eigenvalues are $a+ib$ and $a-ib$.

## Facts & Assumptions

**Given:** Real $a$, positive $b$, and the matrices $T,Q$ above.

[F1] [[def-real-and-complex-schur-forms]]: for real $A$, a real Schur pair $(Q,T)$ satisfies $Q^TQ=I$ and $A=QTQ^T$, with $T$ block upper triangular and each diagonal block either real $1\times1$ or real $2\times2$ with negative characteristic-polynomial discriminant.

[F2] [[lem-real-francis-double-shift-polynomial]]: the characteristic polynomial of a real $2\times2$ block is determined by its trace and determinant.

## Verification

1.1 Since $Q=I$, $Q^TQ=I$ and $QTQ^T=T$. The only diagonal block is $T$, and its characteristic polynomial is $(\lambda-a)^2+b^2$, with discriminant $-4b^2<0$. Thus [F1] says $(Q,T)$ is a real Schur pair. [given, F1, algebra]

2.1 The roots of $(\lambda-a)^2+b^2$ are $\lambda=a\pm ib$. Equivalently, [F2] gives trace $2a$ and determinant $a^2+b^2$, yielding the same conjugate roots. [given, F2, algebra] ∎
