---
id: ex-mass-stiffness-pencil-has-two-b-orthogonal-modes
kind: example
title: "A mass-stiffness pencil has real B-orthogonal modes and a residual enclosure"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-regular-generalized-eigenvalue-pencil
  - thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
  - thm-b-metric-residual-encloses-definite-pencil-eigenvalue
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "LAPACK Users' Guide, Generalized Symmetric Definite Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node54.html"
---

## Example

Let the stiffness and mass matrices be
$$K=\begin{pmatrix}4&-2\\-2&3\end{pmatrix},\qquad M=\begin{pmatrix}2&0\\0&1\end{pmatrix}.$$
The generalized eigenvalues are $1$ and $4$, with $M$-orthogonal modes. The
trial pair $(x,\mu)=(e_1,2)$ also illustrates a B-metric residual enclosure.

## Facts & Assumptions

**Given:** The displayed real symmetric stiffness and mass matrices.

[F1] [[thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis]]:
a symmetric $K$ and positive-definite $M$ have real generalized eigenvalues
and an $M$-orthonormal eigenbasis.

[F2] [[thm-b-metric-residual-encloses-definite-pencil-eigenvalue]]: a nonzero
trial vector and real trial value have spectral distance bounded by the
$M$-dual residual norm divided by the $M$-norm of the vector.

[F3] [[def-regular-generalized-eigenvalue-pencil]]: the pencil is regular when
its determinant polynomial is nonzero.

## Verification

1.1 The matrix $M$ is positive definite because $u^TMu=2u_1^2+u_2^2>0$ for $u\ne0$. Also $u^TKu=2u_1^2+2(u_1-u_2)^2+u_2^2>0$ for $u\ne0$. The determinant polynomial is $\det(K-\lambda M)=(4-2\lambda)(3-\lambda)-4 =2(\lambda-1)(\lambda-4),$ so the pencil is regular and its eigenvalues are $1,4$. [given, F3, algebra]

2.1 For $x_1=(1,1)^T$, $Kx_1=(2,1)^T=Mx_1$. For $x_2=(1,-2)^T$, $Kx_2=(8,-8)^T=4Mx_2$. Their mass inner product is $x_1^TMx_2=2-2=0$. Thus they are distinct generalized eigenmodes and are $M$-orthogonal; [F1] gives the general real-spectrum and orthogonal-basis conclusion for this pencil. [step 1.1, F1, algebra]

3.1 For $x=e_1$ and $\mu=2$, the residual is $r=Kx-\mu Mx=(0,-2)^T$. Hence $\|x\|_M=\sqrt2$ and, since $M^{-1}=\operatorname{diag}(1/2,1)$, $\|r\|_{M^{-1}}=2$. The theorem [F2] therefore bounds the distance from $2$ to $\{1,4\}$ by $2/\sqrt2=\sqrt2$; indeed that distance is $1$. [F2, step 1.1, algebra] ∎
