---
id: thm-real-normal-endomorphism-classification
kind: theorem
title: "A real normal endomorphism is orthogonally block-diagonalisable with 1x1 real blocks and 2x2 rotation-scaling blocks"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-self-adjoint-and-normal-endomorphism, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, thm-complex-spectral-theorem-for-normal-endomorphisms, prop-standard-coordinate-inner-products, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Hu, The Schur decomposition"
      url: "https://math.ucla.edu/~njhu/notes/nla/eig/schur/"
---

## Statement

Let $V$ be a finite-dimensional real inner product space and let $T:V\to V$ be
normal. Then $V$ has an orthonormal basis in which the matrix of $T$ is block
diagonal with blocks of the two forms

$$[a] \qquad\text{and}\qquad \begin{pmatrix}a&b\\-b&a\end{pmatrix} \text{ with } b\ne 0,$$

where $a,b\in\mathbb R$.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$ and a normal endomorphism $T:V\to V$.

[L1] In an orthonormal basis, a real operator is normal exactly when its matrix commutes with its transpose ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[L2] Over a complex inner product space, a normal operator has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[L3] The standard pairings on $\mathbb R^n$ and $\mathbb C^n$ are inner products ([[prop-standard-coordinate-inner-products]]).

[L4] Complex conjugation satisfies the usual algebraic laws ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Choose an orthonormal basis of $V$ and let $A\in M_n(\mathbb R)$ be the matrix of $T$. By [L1], $AA^{\mathsf T}=A^{\mathsf T}A$. Because $A$ has real entries, its conjugate transpose over $\mathbb C$ is still $A^{\mathsf T}$, so $A$ is a normal complex matrix on $\mathbb C^n$ with the standard Hermitian inner product from [L3]. Therefore [L2] gives an orthonormal eigenbasis of $\mathbb C^n$ for $A$. [L1, L2, L3]

1.2 If $\lambda\in\mathbb R$ is an eigenvalue and $v=u+iw$ is a corresponding complex eigenvector, then $Au+iAw=Av=\lambda v=\lambda u+i\lambda w$, so $Au=\lambda u$ and $Aw=\lambda w$; hence one of $u,w$ is a nonzero real eigenvector, and repeating inside each real eigenspace yields orthonormal real eigenvectors for the real eigenvalues. [L4, algebra]

2.1 If $\lambda=a+ib$ with $b\ne0$ and $v=u+iw$ is a unit eigenvector, then $A\overline v=\overline\lambda\,\overline v$ because $A$ is real; since $\lambda\ne\overline\lambda$, the vectors $v$ and $\overline v$ are orthogonal in the orthonormal eigenbasis from step 1.1, so writing out $\langle v,\overline v\rangle=0$ and using [L4] gives $\|u\|^2-\|w\|^2+2i\langle u,w\rangle=0$, hence $\|u\|=\|w\|$ and $\langle u,w\rangle=0$. Also $A(u+iw)=(a+ib)(u+iw)=(au-bw)+i(bu+aw)$, so $Au=au-bw$ and $Aw=bu+aw$; after normalising $e_1=u/\|u\|$ and $e_2=w/\|w\|$, the matrix of $A$ on $\operatorname{span}(e_1,e_2)$ is $\begin{pmatrix}a&b\\-b&a\end{pmatrix}$. [L4, step 1.1, algebra]

3.1 The orthonormal complex eigenbasis from step 1.1 splits into real eigenvectors and conjugate pairs. Step 1.2 replaces each real eigenvector by a real one, and step 2.1 replaces each conjugate pair by an orthonormal real pair spanning the same real invariant plane. Collecting these mutually orthogonal pieces yields an orthonormal real basis with the stated block-diagonal matrix. [step 1.2, step 2.1] ∎
