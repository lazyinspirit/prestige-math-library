---
id: lem-gp-regression-observed-covariance-invertibility
kind: lemma
title: Positive definiteness is exactly the inverse condition for the observed GP covariance
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-gaussian-process-regression-observation-model
  - def-singular-values-of-an-endomorphism
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 4 §4.1
      url: https://gaussianprocess.org/gpml/chapters/RW4.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
---

## Statement

In the finite observation model, let $K=K_{XX}$ and let $R$ be symmetric and
positive semidefinite. Then $A=K+R$ is symmetric and positive semidefinite.
Its ordinary inverse exists if and only if $A$ is positive definite,
equivalently if and only if all singular values of $A$ are positive. Thus the
standard inverse formulas are defined exactly under $A\succ0$; no ordinary
inverse formula applies when $A$ is singular.

## Statement references

[[def-gaussian-process-regression-observation-model|The finite Gram and observed matrices are K_XX and A_X=K_XX+R, with positive-semidefinite kernel and noise covariances.]]

[Rasmussen and Williams, GPML, Chapter 4 §4.1, printed pp. 79–80](https://gaussianprocess.org/gpml/chapters/RW4.pdf)

[Bishop, PRML, §6.4.2, printed pp. 306–309](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

## Facts & Assumptions

**Given:** A finite observation matrix $K=K_{XX}$ from a symmetric positive-semidefinite kernel and a symmetric positive-semidefinite noise covariance $R$.

[F1] Every finite Gram matrix of the kernel is positive semidefinite, and the observed matrix is $A=K_{XX}+R$. [[def-gaussian-process-regression-observation-model]]

[F2] A finite-dimensional nonnegative operator has an orthonormal eigenbasis with nonnegative eigenvalues. [[thm-non-negative-operator-characterisations]]

[F3] The singular values of an endomorphism are the eigenvalues of $|A|=\sqrt{A^*A}$. [[def-singular-values-of-an-endomorphism]]

[F4] A nonnegative finite-dimensional operator has a unique nonnegative square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F5] A finite-dimensional linear map has a singular-value decomposition with exactly its positive singular values in the nonzero diagonal block. [[thm-singular-value-decomposition]]

## Proof

**Given:** The matrices $K$ and $R$ in the Statement.

1.1 For every $z\in\mathbb R^n$, $z^TAz=z^TKz+z^TRz\ge0$ by [F1], and $A$ is symmetric. Hence $A$ is a nonnegative endomorphism of the finite-dimensional real inner-product space $\mathbb R^n$. [F1, given, algebra]

2.1 By [F2], choose an orthonormal eigenbasis $e_1,\ldots,e_n$ of $A$ with eigenvalues $\lambda_j\ge0$. In this basis, $A$ is invertible exactly when no $\lambda_j$ is zero, while $z^TAz=\sum_j\lambda_j c_j^2$ for $z=\sum_j c_je_j$ is positive for every nonzero $z$ exactly when all $\lambda_j>0$. Thus $A$ is invertible if and only if it is positive definite. [F2, step 1.1, algebra]

3.1 In the same basis, $A^*A=A^2$ has eigenvalues $\lambda_j^2$. By [F4], its unique nonnegative square root has eigenvalues $\lambda_j$, so [F3] says the singular values of $A$ are precisely these $\lambda_j$. By [F5], the SVD has full rank exactly when all $n$ singular values are positive, which is exactly the invertibility condition in step 2.1. [F3, F4, F5, step 2.1, algebra] ∎
