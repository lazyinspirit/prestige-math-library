---
id: lem-complex-hermitian-realification-identities
kind: lemma
title: Realification preserves Hermitian spectra, norms, and congruence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, def-self-adjoint-and-normal-endomorphism, thm-rank-nullity, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-euclidean-inner-product, def-real-and-complex-inner-product-space, thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.1–5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

For $m,n,p\in\mathbb N$ and $Z=X+iY\in\mathbb C^{m\times n}$ with real $X,Y$, define its realification
$$
\mathcal R(Z)=\begin{pmatrix}X&-Y\\Y&X\end{pmatrix}\in\mathbb R^{2m\times2n}.
$$
Use the standard coordinate inner products $\langle z,w\rangle=\sum_j z_j\overline{w_j}$ on $\mathbb C^k$ and $\langle x,y\rangle=\sum_j x_jy_j$ on $\mathbb R^k$, with their induced 2-norms. For compatible $Z\in\mathbb C^{m\times n}$ and $W\in\mathbb C^{n\times p}$,
$$
\mathcal R(ZW)=\mathcal R(Z)\mathcal R(W).
$$
For any $Z\in\mathbb C^{m\times n}$, $\mathcal R(Z^*)=\mathcal R(Z)^{\mathsf T}$. For square $Z\in\mathbb C^{n\times n}$, $Z$ is invertible exactly when $\mathcal R(Z)$ is invertible. If $H=H^*$ is Hermitian with eigenvalues $\lambda_1,\ldots,\lambda_n$ counted with multiplicity, then $\mathcal R(H)$ is real symmetric with eigenvalue multiset $\{\lambda_j,\lambda_j:1\le j\le n\}$. For every complex matrix $E\in\mathbb C^{m\times n}$, $\|\mathcal R(E)\|_2=\|E\|_2$.

## Facts & Assumptions

**Given:** Finite complex matrices $Z,W,E$ of the shapes in the statement and a Hermitian square matrix $H$.

[F1] A complex normal endomorphism has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] Every self-adjoint endomorphism is normal ([[def-self-adjoint-and-normal-endomorphism]]).

[F3] Rank-nullity implies that an injective endomorphism of a finite-dimensional space is surjective ([[thm-rank-nullity]]).

[F4] The operator norm is induced by the vector norms on finite-dimensional real or complex inner-product spaces ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F5] The real coordinate inner product is $\langle x,y\rangle=\sum_jx_jy_j$ ([[def-euclidean-inner-product]]).

[F6] Complex inner products are linear in the first variable, conjugate-linear in the second, and induce the norm $\|z\|=\sqrt{\langle z,z\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[F7] In orthonormal coordinate bases, the matrix of the adjoint is the conjugate transpose ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]).

## Proof

1.1 Identify $z=x+iy\in\mathbb C^n$ with $(x,y)\in\mathbb R^{2n}$. For any $Z=X+iY\in\mathbb C^{m\times n}$, direct multiplication gives $\mathcal R(Z)(x,y)=(\Re(Zz),\Im(Zz))$, so realification respects every compatible product. The displayed inner products make the standard coordinate bases orthonormal, so [F7] gives $Z^*=X^{\mathsf T}-iY^{\mathsf T}$ and $\mathcal R(Z^*)=\begin{pmatrix}X^{\mathsf T}&Y^{\mathsf T}\\-Y^{\mathsf T}&X^{\mathsf T}\end{pmatrix}=\mathcal R(Z)^{\mathsf T}$. [given, F6, F7, algebra]

2.1 For $z=x+iy$, $\|z\|_2^2=\sum_j|x_j+iy_j|^2=\sum_j(x_j^2+y_j^2)=\|(x,y)\|_2^2$ by [F5, F6]. Thus for $n>0$ the identification bijects the complex and real unit spheres, so the maxima in [F4] coincide for $E$ and $\mathcal R(E)$. If $n=0$, both operator norms are zero by [F4]. If square $Z$ is invertible, $\mathcal R(Z^{-1})$ is an inverse of $\mathcal R(Z)$ by step 1.1; conversely, if $\mathcal R(Z)$ is invertible, its kernel is zero, so $Zz=0$ implies $z=0$, and [F3] makes $Z$ invertible. [F3, F4, F5, F6, step 1.1, algebra]

3.1 If $n=0$, the spectral assertion is immediate. Otherwise, [F7] identifies the Hermitian matrix $H=H^*$ with a self-adjoint endomorphism in the standard orthonormal basis; [F2] makes it normal, so [F1] gives $H=U\Lambda U^*$ with $U$ unitary and $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ real. By step 1.1, $\mathcal R(U)$ is real orthogonal and $\mathcal R(H)=\mathcal R(U)\mathcal R(\Lambda)\mathcal R(U)^{\mathsf T}$, where $\mathcal R(\Lambda)=\operatorname{diag}(\Lambda,\Lambda)$. Hence $\mathcal R(H)$ is real symmetric with each eigenvalue of $H$ repeated twice. [F1, F2, F7, step 1.1, algebra] ∎

