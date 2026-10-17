---
id: lem-complex-hermitian-eigenvalues-lipschitz
kind: lemma
title: "Ordered eigenvalues of Hermitian matrices are operator-norm Lipschitz"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-weyl-inequalities-for-self-adjoint-sums
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-matrix-product-and-identity-matrix
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christoph Helmberg, Guilherme Porto, Guilherme Torres, and Vilmar Trevisan, An interlacing property of the signless Laplacian of threshold graphs, §2, Theorem 2 (2023)"
      url: https://arxiv.org/pdf/2308.12654
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

For Hermitian $A,B\in\mathbb C^{n\times n}$, write their eigenvalues in
descending order with multiplicity as $\lambda_1(A)\ge\cdots\ge\lambda_n(A)$
and $\lambda_1(B)\ge\cdots\ge\lambda_n(B)$. Then, for every $j$,
$$|\lambda_j(A)-\lambda_j(B)|\le\|A-B\|_2.$$

## Facts & Assumptions

**Given:** Finite-dimensional Hermitian matrices $A,B$ and the operator $2$-norm.

[F1] A complex normal endomorphism has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] For real self-adjoint matrices, Weyl's sum inequalities bound each ordered eigenvalue of a sum ([[thm-weyl-inequalities-for-self-adjoint-sums]]).

[F3] A real self-adjoint matrix has a real orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F4] The operator $2$-norm is the supremum of $\|Ax\|_2$ over unit vectors and, for a real self-adjoint matrix, equals the largest absolute eigenvalue ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof


1.1 Write $A=R+iS$ with $R,S$ real. Hermitian symmetry gives $R^{\mathsf T}=R$ and $S^{\mathsf T}=-S$. Define $\mathcal R(A)=\begin{pmatrix}R&-S\\S&R\end{pmatrix}$ and $\Phi(x+iy)=(x,y)$. Direct multiplication gives $\Phi(Az)=\mathcal R(A)\Phi(z)$ and $\|\Phi(z)\|_2=\|z\|_2$; the transpose identities show $\mathcal R(A)$ is real symmetric. Applying the same construction to $A-B$ yields $\|\mathcal R(A)-\mathcal R(B)\|_2=\|A-B\|_2$ by the supremum definition in [F4]. [F3, F4, given, algebra]

2.1 By [F1], $A=U\operatorname{diag}(\lambda_1(A),\ldots,\lambda_n(A))U^*$ for a unitary $U$. Its realification is orthogonal, and the realification of the diagonal matrix has each $\lambda_j(A)$ twice on its diagonal. Therefore the descending eigenvalues of $\mathcal R(A)$ are $\lambda_1(A),\lambda_1(A),\ldots,\lambda_n(A),\lambda_n(A)$; the same holds for $B$. [F1, step 1.1, algebra]

3.1 Put $M=\mathcal R(B)$, $N=\mathcal R(A-B)$, and $\delta=\|A-B\|_2$. By [F3] and step 1.1, every eigenvalue of the real symmetric $N$ lies in $[-\delta,\delta]$ using [F4]. Applying [F2] with the perturbation's largest eigenvalue for the upper bound and smallest eigenvalue for the lower bound gives $|\lambda_k(M+N)-\lambda_k(M)|\le\delta$ for every $k$. Taking $k=2j-1$ and using step 2.1 proves the claimed complex-Hermitian eigenvalue bound. [F2, F3, F4, step 1.1, step 2.1, algebra] ∎

