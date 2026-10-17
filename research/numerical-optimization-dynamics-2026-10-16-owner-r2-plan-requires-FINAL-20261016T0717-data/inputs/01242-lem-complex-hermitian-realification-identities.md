---
id: lem-complex-hermitian-realification-identities
kind: lemma
title: Realification preserves Hermitian spectra, norms, and congruence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, def-self-adjoint-and-normal-endomorphism, thm-rank-nullity, def-operator-norm-on-a-finite-dimensional-inner-product-space]
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

For $Z=X+iY\in\mathbb C^{n\times n}$ with real $X,Y$, define its realification
$$
\mathcal R(Z)=\begin{pmatrix}X&-Y\\Y&X\end{pmatrix}\in\mathbb R^{2n\times2n}.
$$
Then $\mathcal R(ZW)=\mathcal R(Z)\mathcal R(W)$, $\mathcal R(Z^*)=\mathcal R(Z)^{\mathsf T}$, and $Z$ is invertible exactly when $\mathcal R(Z)$ is invertible. If $H=H^*$ is Hermitian with eigenvalues $\lambda_1,\ldots,\lambda_n$ counted with multiplicity, then $\mathcal R(H)$ is real symmetric with eigenvalues $\lambda_1,\lambda_1,\ldots,\lambda_n,\lambda_n$. For any complex matrix $E$, $\|\mathcal R(E)\|_2=\|E\|_2$.

## Facts & Assumptions

**Given:** Finite complex square matrices $Z,W,E$ and a Hermitian $H$.

[F1] A complex normal endomorphism has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The adjoint convention is $H=H^*$ for a self-adjoint matrix ([[def-self-adjoint-and-normal-endomorphism]]).

[F3] Rank-nullity implies that an injective endomorphism of a finite-dimensional space is surjective ([[thm-rank-nullity]]).

[F4] The operator 2-norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Identify $z=x+iy\in\mathbb C^n$ with $(x,y)\in\mathbb R^{2n}$. Direct multiplication gives $\mathcal R(Z)(x,y)=(\Re(Zz),\Im(Zz))$; this identity shows that realification respects composition. Writing $Z=X+iY$ gives $\mathcal R(Z^*)=\begin{pmatrix}X^{\mathsf T}&Y^{\mathsf T}\\-Y^{\mathsf T}&X^{\mathsf T}\end{pmatrix}=\mathcal R(Z)^{\mathsf T}$. [given, F2, algebra]

2.1 The identification preserves Euclidean norms. Hence, by [F4], the suprema of $\|Ez\|_2$ over complex unit vectors and of $\|\mathcal R(E)u\|_2$ over real unit vectors agree, proving the operator-norm identity. If $Z$ is invertible, $\mathcal R(Z^{-1})$ is an inverse of $\mathcal R(Z)$ by step 1.1; conversely, if $\mathcal R(Z)$ is invertible, its kernel is zero, so $Zz=0$ implies $z=0$, and [F3] makes the square matrix $Z$ invertible. [F3, F4, step 1.1, algebra]

3.1 Since $H$ is Hermitian it is normal, so [F1] gives $H=U\Lambda U^*$ with $U$ unitary and $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ real. By step 1.1, $\mathcal R(U)$ is real orthogonal and $\mathcal R(H)=\mathcal R(U)\mathcal R(\Lambda)\mathcal R(U)^{\mathsf T}$, where $\mathcal R(\Lambda)$ has each $\lambda_j$ twice on its diagonal. Thus $\mathcal R(H)$ is real symmetric with the asserted duplicated spectrum. [F1, step 1.1, algebra] ∎

