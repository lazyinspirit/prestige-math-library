---
id: def-real-and-complex-schur-forms
kind: definition
title: "Real and complex Schur forms"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "James W. Demmel, Applied Numerical Linear Algebra, §4.4"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let $n\ge0$ and $A\in\mathbb F^{n\times n}$, and let $Q^*$ denote transpose over $\mathbb R$ and conjugate transpose over $\mathbb C$. A **complex Schur pair** for $A$ is a pair $(Q,T)$ with $Q^*Q=I$ and $A=QTQ^*$, where $T$ is upper triangular.

For real $A$, a **real Schur pair** is a pair $(Q,T)$ with $Q^TQ=I$ and $A=QTQ^T$, where $T$ is block upper triangular and every diagonal block is either a real $1\times1$ block or a real $2\times2$ block with negative characteristic-polynomial discriminant. Such a $2\times2$ block has one nonreal conjugate eigenvalue pair. The definition does not assert that a finite shift strategy reaches such a pair.

For $B=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathbb R^{2\times2}$, its characteristic-polynomial discriminant means the exact real number $\Delta(B)=(a+d)^2-4(ad-bc)$. “Negative discriminant” means the exact comparison $\Delta(B)<0$.
