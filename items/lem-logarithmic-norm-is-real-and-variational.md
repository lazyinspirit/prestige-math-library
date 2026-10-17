---
id: lem-logarithmic-norm-is-real-and-variational
kind: lemma
title: "The Euclidean logarithmic norm is a real Rayleigh-quotient maximum"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-logarithmic-norm-for-complex-matrices
  - def-self-adjoint-and-normal-endomorphism
  - prop-standard-coordinate-inner-products
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Logarithmic Norm?"
      url: "https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/"
      locator: "Theorem 6 and its proof of the Euclidean formula, equations (4)."
---

## Statement

For $n\ge1$ and $A\in M_n(\mathbb C)$, $H_A=(A+A^*)/2$ is Hermitian, its eigenvalues are real, and

$$\mu_2(A)=\lambda_{\max}(H_A)=\max_{\|x\|_2=1}\operatorname{Re}\langle Ax,x\rangle.$$

## Facts & Assumptions

**Given:** $n\ge1$, $A\in M_n(\mathbb C)$, and $H_A=(A+A^*)/2$ as in [[def-logarithmic-norm-for-complex-matrices]].

[F1] [[prop-standard-coordinate-inner-products]]: $\langle x,y\rangle=\sum_{i<n}x_i\overline{y_i}$ is the standard complex inner product, linear in the first variable.

[F2] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in orthonormal coordinates, the matrix of the adjoint is the conjugate transpose.

[F3] [[def-self-adjoint-and-normal-endomorphism]]: a self-adjoint endomorphism satisfies $H^*=H$ and is normal.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F5] [[def-logarithmic-norm-for-complex-matrices]]: $\mu_2(A)=\lambda_{\max}(H_A)$ for $H_A=(A+A^*)/2$.

## Proof

**Proof technique:** direct.

1.1 By [F2], $H_A^*=(A^*+A)/2=H_A$, so $H_A$ is self-adjoint and hence normal by [F3]. [given, F2, F3, algebra]

2.1 By [F4], choose an orthonormal eigenbasis $u_1,\ldots,u_n$ for $H_A$, with $H_Au_j=\lambda_j u_j$. Since $\lambda_j=\langle H_Au_j,u_j\rangle$ and self-adjointness gives $\langle H_Au_j,u_j\rangle=\langle u_j,H_Au_j\rangle=\overline{\langle H_Au_j,u_j\rangle}$, each eigenvalue $\lambda_j$ is real; the finite set has a largest member. [step 1.1, F1, F3, F4, choose, algebra]

3.1 By [F5], $\mu_2(A)=\lambda_{\max}(H_A)=\max_j\lambda_j$. [given, step 2.1, F5]

4.1 For $x=\sum_{j=1}^n c_j u_j$, [F1] and orthonormality give $\langle H_Ax,x\rangle=\sum_j\lambda_j|c_j|^2\le\mu_2(A)\sum_j|c_j|^2=\mu_2(A)\|x\|_2^2$. Also $\langle H_Ax,x\rangle=\operatorname{Re}\langle Ax,x\rangle$ because $\langle A^*x,x\rangle=\overline{\langle Ax,x\rangle}$. A unit eigenvector for the largest $\lambda_j$ attains equality, proving the maximum formula. [step 2.1, step 3.1, F1, F2, algebra] ∎
