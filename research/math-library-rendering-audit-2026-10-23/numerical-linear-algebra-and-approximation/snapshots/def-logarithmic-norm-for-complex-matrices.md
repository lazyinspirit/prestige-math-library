---
id: def-logarithmic-norm-for-complex-matrices
kind: definition
title: "The Euclidean logarithmic norm of a complex matrix"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-matrix-product-and-identity-matrix
  - def-matrix-space
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-self-adjoint-and-normal-endomorphism
  - prop-standard-coordinate-inner-products
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
justified_by:
  - lem-logarithmic-norm-is-real-and-variational
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Logarithmic Norm?"
      url: "https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/"
      locator: "Theorem 6, formula for mu_2(A), and the accompanying proof."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $n\ge1$ and $A\in M_n(\mathbb C)$. In the standard complex inner product from [[prop-standard-coordinate-inner-products]], the adjoint matrix is the conjugate transpose $A^*$ by [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]. The Hermitian part is $H_A:=(A+A^*)/2$. It is self-adjoint in the sense of [[def-self-adjoint-and-normal-endomorphism]].

Define the Euclidean logarithmic norm by $\mu_2(A):=\lambda_{\max}(H_A)$, where $\lambda_{\max}$ denotes the largest eigenvalue of the Hermitian matrix $H_A$. The item [[lem-logarithmic-norm-is-real-and-variational]] establishes that this eigenvalue exists, is real, and equals $\max_{\|x\|_2=1}\operatorname{Re}\langle Ax,x\rangle$. This is a real growth bound, not a matrix norm.
