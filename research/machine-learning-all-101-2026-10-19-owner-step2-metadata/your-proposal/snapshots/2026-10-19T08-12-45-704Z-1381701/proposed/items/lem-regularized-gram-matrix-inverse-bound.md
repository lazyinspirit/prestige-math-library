---
id: lem-regularized-gram-matrix-inverse-bound
kind: lemma
title: Inverse norm bound for a regularized Gram matrix
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-non-negative-operator-characterisations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§7B–7C'
      url: https://linear.axler.net/LADR4e.pdf
      locator: Theorem 7.29 and Theorem 7.38, printed pp. 244–252; a real symmetric positive-semidefinite matrix is orthogonally diagonalizable with nonnegative eigenvalues.
---

## Statement

Let $M,N\in\mathbb R^{n\times n}$ be symmetric matrices such that $x^TMx\ge0$ and $x^TNx\ge0$ for every $x\in\mathbb R^n$, where $n\ge1$, and let $\tau>0$. Write $I_n$ for the identity matrix, $A=M+\tau I_n$, and $B=N+\tau I_n$. For vectors use $\lVert x\rVert_2=(\sum_i x_i^2)^{1/2}$, and for a matrix $T$ use the induced Euclidean norm $\lVert T\rVert_2=\sup_{\lVert x\rVert_2=1}\lVert Tx\rVert_2$. Positive definite means $x^TAx>0$ for every nonzero $x$, and analogously for $B$. Then $A$ and $B$ are positive definite and invertible, $\lVert A^{-1}\rVert_2,\lVert B^{-1}\rVert_2\le1/\tau$, and

$$A^{-1}-B^{-1}=A^{-1}(N-M)B^{-1},\qquad \lVert A^{-1}-B^{-1}\rVert_2\le\frac{\lVert M-N\rVert_2}{\tau^2}. $$

## Statement references

[[thm-non-negative-operator-characterisations|A finite-dimensional real symmetric positive-semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues.]]

## Facts & Assumptions

**Given:** Symmetric positive-semidefinite matrices $M,N\in\mathbb R^{n\times n}$ and $\tau>0$.

[F1] [[thm-non-negative-operator-characterisations]]: every finite-dimensional real symmetric positive-semidefinite operator has an orthonormal eigenbasis and nonnegative eigenvalues.

## Proof

1.1 Since $\tau>0$ and $M,N$ are positive semidefinite, every nonzero $x$ satisfies $x^TAx=x^TMx+\tau\lVert x\rVert_2^2\ge\tau\lVert x\rVert_2^2>0$ and $x^TBx=x^TNx+\tau\lVert x\rVert_2^2\ge\tau\lVert x\rVert_2^2>0$. Thus $A$ and $B$ are positive definite and invertible. By [F1], write $M=U\operatorname{diag}(\mu_1,\ldots,\mu_n)U^T$ with $U$ orthogonal and each $\mu_i\ge0$. Then $A=U\operatorname{diag}(\mu_i+\tau)U^T$ and $A^{-1}=U\operatorname{diag}((\mu_i+\tau)^{-1})U^T$; applying the same diagonalization argument to $N$ gives the corresponding formula for $B^{-1}$. [given, F1, algebra]

2.1 Orthogonality of $U$ gives $\lVert A^{-1}x\rVert_2^2=\sum_i (U^Tx)_i^2(\mu_i+\tau)^{-2}\le\tau^{-2}\lVert x\rVert_2^2$ for every $x$. Taking the supremum over unit vectors gives $\lVert A^{-1}\rVert_2\le1/\tau$; the identical calculation for $N$ gives $\lVert B^{-1}\rVert_2\le1/\tau$. [given, step 1.1, algebra]

3.1 Since $B-A=N-M$, multiplying out yields $A^{-1}(B-A)B^{-1}=A^{-1}-B^{-1}$. For every unit vector $x$, the definition of the induced norm gives $\lVert A^{-1}(N-M)B^{-1}x\rVert_2\le\lVert A^{-1}\rVert_2\lVert N-M\rVert_2\lVert B^{-1}\rVert_2$. Taking the supremum and using step 2.1 proves the asserted resolvent bound. [given, step 2.1, algebra] ∎
