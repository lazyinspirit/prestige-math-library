---
id: thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis
kind: theorem
title: "A Hermitian-definite pencil has a real spectrum and a B-orthonormal eigenbasis"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-b-inner-product-and-dual-norm-for-definite-pencil
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-operator-invertible-iff-determinant-nonzero
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §11.4"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Symmetric Definite Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node54.html"
---

## Statement

Let $A=A^*$ and let $B=B^*$ be positive definite in
$\mathbb F^{n\times n}$, where $\mathbb F\in\{\mathbb R,\mathbb C\}$.
If $B=LL^*$ is its Cholesky factorisation, then
$$C=L^{-1}AL^{-*}$$
is self-adjoint and has an orthonormal eigenbasis with real eigenvalues
$\lambda_1,\ldots,\lambda_n$. The vectors
$$x_i=L^{-*}y_i\quad (i=1,\ldots,n)$$
form a basis satisfying $Ax_i=\lambda_iBx_i$ and
$x_i^*Bx_j=\delta_{ij}$. The generalized eigenvalues of $(A,B)$ are exactly
$[\lambda_i:1]$; none is infinite.

## Facts & Assumptions

**Given:** A real symmetric or complex Hermitian matrix $A$ and a Hermitian
positive-definite matrix $B$ of the same positive order.

[F1] [[def-b-inner-product-and-dual-norm-for-definite-pencil]]: for the unique
Cholesky factor $B=LL^*$, $\|x\|_B=\|L^*x\|_2$, and B-orthonormality means
$x_i^*Bx_j=\delta_{ij}$.

[F2] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]:
$B=LL^*$ with $L$ lower triangular and positive diagonal, and $L$ is unique.

[F3] [[thm-determinant-of-a-triangular-matrix]]: the determinant of a
triangular matrix is the product of its diagonal entries.

[F4] [[thm-operator-invertible-iff-determinant-nonzero]]: a finite-dimensional
operator over a field is invertible exactly when its determinant is nonzero.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real
self-adjoint endomorphism has an orthonormal eigenbasis.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a complex
normal endomorphism has an orthonormal eigenbasis.

[F7] [[thm-determinant-multiplicative]]: determinants multiply under matrix
products.

[F8] [[def-regular-generalized-eigenvalue-pencil]]: homogeneous roots of
$\det(\beta A-\alpha B)$ are the generalized eigenvalues.

## Proof

1.1 By [F2], $L$ is lower triangular with positive diagonal. [F3] gives $\det L\ne0$, and [F4] therefore makes $L$ invertible. Hence $C=L^{-1}AL^{-*}$ is defined. Taking adjoints and using $A=A^*$ gives $C^*=L^{-1}AL^{-*}=C$. [given, F2, F3, F4, algebra]

2.1 Regard $C$ as a real or complex endomorphism with the Euclidean inner product. In the real case [F5] applies; in the complex case $C=C^*$ implies $C$ is normal, so [F6] applies. Thus there are orthonormal $y_i$ and real $\lambda_i$ with $Cy_i=\lambda_i y_i$. [step 1.1, F5, F6, algebra]

3.1 Set $x_i=L^{-*}y_i$. Then $Ax_i=AL^{-*}y_i=L Cy_i=\lambda_iLy_i=\lambda_iBx_i,$ and $x_i^*Bx_j=y_i^*L^{-1}LL^*L^{-*}y_j=y_i^*y_j=\delta_{ij}.$ The invertible change of variables $L^{-*}$ sends the basis $(y_i)$ to a basis $(x_i)$. [F1, step 1.1, step 2.1, algebra, construct]

4.1 For every $\lambda\in\mathbb C$, $A-\lambda B=L(C-\lambda I)L^*$, so $\det(A-\lambda B)=\det(L)\det(C-\lambda I)\det(L^*).$ The diagonalisation from step 2.1 expresses $C=UDU^*$ with $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ and $U$ unitary. By [F7], $\det(C-\lambda I)=\det(U)\det(D-\lambda I)\det(U^*)$ and $\det(U)\det(U^*)=\det(UU^*)=\det I=1$. Applying [F3] to the diagonal matrix gives $\det(C-\lambda I)=\prod_i(\lambda_i-\lambda)$. Also $\det(L)$ and $\det(L^*)$ are nonzero by step 1.1, so the finite roots of $\det(A-\lambda B)$ are exactly the real $\lambda_i$. Finally $\det(B)=\det(L)\det(L^*)\ne0$, so $[1:0]$ is not a homogeneous root. [F2, F3, F7, F8, step 1.1, step 2.1, algebra] ∎
