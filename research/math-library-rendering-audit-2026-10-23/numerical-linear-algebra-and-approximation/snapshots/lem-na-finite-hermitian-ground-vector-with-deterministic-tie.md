---
id: lem-na-finite-hermitian-ground-vector-with-deterministic-tie
kind: lemma
title: "Finite Hermitian ground vectors and a deterministic tie rule"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-self-adjoint-and-normal-endomorphism
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - def-rayleigh-quotient
  - thm-courant-fischer-min-max-principle
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-finite-dimensional-orthogonal-decomposition
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§6.3–6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
dependency_level: 0
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $m\ge1$, and let $A\in\mathbb F^{m\times m}$ satisfy $A^*=A$. Define
$$q_A(x):=\frac{x^*Ax}{x^*x}\qquad(x\in\mathbb F^m\setminus\{0\}).$$
Then $q_A$ has a minimum $\lambda_{\min}$, equal to the least eigenvalue of $A$, and its minimizers are precisely the nonzero vectors in the lowest eigenspace $E_{\min}=\ker(A-\lambda_{\min}I)$. There is a deterministic choice of a unit minimizer: let $P_{\min}$ be the orthogonal projection onto $E_{\min}$, scan the standard basis $e_1,\ldots,e_m$, and take the first $j$ with $P_{\min}e_j\ne0$. Normalize $P_{\min}e_j$; over $\mathbb C$, if $z$ is its first nonzero coordinate, multiply by $\overline z/|z|$, and over $\mathbb R$ multiply by $z/|z|$.

## Facts & Assumptions

**Given:** A real symmetric or complex Hermitian matrix $A\in\mathbb F^{m\times m}$ with $m\ge1$.

[F1] [[def-self-adjoint-and-normal-endomorphism]]: self-adjoint means $T^*=T$, and every self-adjoint endomorphism is normal.

[F2] [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]: in an orthonormal basis, self-adjointness is equivalent to the matrix identity $A=A^*$.

[F3] [[def-rayleigh-quotient]]: on a finite-dimensional real inner-product space, $R_T(x)=\langle Tx,x\rangle/\langle x,x\rangle$ for $x\ne0$.

[F4] [[thm-courant-fischer-min-max-principle]]: for a self-adjoint endomorphism of an $m$-dimensional real inner-product space, the least eigenvalue is the minimum of its Rayleigh quotient over nonzero vectors.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a finite-dimensional real self-adjoint endomorphism has an orthonormal eigenbasis.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis.

[F7] [[thm-finite-dimensional-orthogonal-decomposition]]: a subspace of a finite-dimensional inner-product space has an orthogonal complement, and every vector has a unique decomposition into the subspace and its orthogonal complement.

## Proof



1.1 Suppose $\mathbb F=\mathbb R$. By [F2], $A$ represents a self-adjoint endomorphism in the standard orthonormal basis, and [F3] identifies its Rayleigh quotient with $q_A$. Taking $k=m$ in [F4] gives $\lambda_{\min}=\min_{\dim W=1}\max_{x\in W\setminus\{0\}}q_A(x)$. On each one-dimensional $W$, homogeneity gives the same quotient for every nonzero vector, and every nonzero $x$ spans such a $W$; hence this minimum is exactly $\min_{x\ne0}q_A(x)$. By [F5], write $x=\sum_j c_ju_j$ in an orthonormal eigenbasis with real eigenvalues $\lambda_j$; then $q_A(x)=\sum_j\lambda_jc_j^2/\sum_jc_j^2$, which equals $\lambda_{\min}$ exactly when every nonzero coefficient belongs to the least-eigenvalue eigenspace. [F2, F3, F4, F5, algebra]

1.2 Suppose $\mathbb F=\mathbb C$. By [F2], $A$ represents a self-adjoint endomorphism in the standard orthonormal basis; by [F1] this endomorphism is normal, so [F6] gives an orthonormal eigenbasis $u_1,\ldots,u_m$. Every eigenvalue is real because if $Au_j=\lambda_j u_j$, then $\overline{u_j^*Au_j}=u_j^*A^*u_j=u_j^*Au_j$, so $\lambda_j\|u_j\|^2$ is real and $\|u_j\|^2>0$. For $x=\sum_j c_ju_j\ne0$, the quotient is the weighted average $\sum_j\lambda_j|c_j|^2/\sum_j|c_j|^2$, so it is at least the least eigenvalue and equals it exactly when all nonzero coefficients lie in its eigenspace. [F1, F2, F6, algebra]

2.1 In either field, the least eigenspace is nonzero, so [F7] gives a unique orthogonal decomposition of each vector into its $E_{\min}$ and $E_{\min}^{\perp}$ parts; define $P_{\min}$ to be the first component. Uniqueness makes $P_{\min}$ linear, since sums and scalar multiples of decompositions are the corresponding decompositions. At least one $P_{\min}e_j$ is nonzero, since otherwise linearity and the fact that the standard vectors span $\mathbb F^m$ would imply $P_{\min}=0$, contradicting $E_{\min}\ne\{0\}$. The first such $j$ is uniquely determined by the fixed basis order. Normalize this projection. Over $\mathbb C$, its first nonzero coordinate $z$ is changed to $|z|>0$ by multiplication by $\overline z/|z|$; over $\mathbb R$, multiplication by $z/|z|$ makes that coordinate positive. These unit-modulus rescalings preserve the eigenvector and its Rayleigh quotient. The minimizer characterization in steps 1.1 and 1.2 proves the result. [F2, F4, F5, F6, F7, step 1.1, step 1.2, algebra] ∎
