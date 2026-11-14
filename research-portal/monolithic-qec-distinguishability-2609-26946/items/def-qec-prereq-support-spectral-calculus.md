---
id: def-qec-prereq-support-spectral-calculus
kind: definition
domain: mathematics
title: Finite support square roots and generalized inverses
status: draft
origin: session
deps:
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-adjoint-of-a-linear-map-between-inner-product-spaces
  - math:thm-adjoint-exists-and-is-unique-in-finite-dimension
  - math:def-self-adjoint-and-normal-endomorphism
  - math:def-orthogonal-complement
  - math:def-orthogonal-projection
  - math:def-inner-product-space
  - math:def-orthogonal-vectors-sets-and-orthonormal-bases
  - math:def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - math:def-kernel-and-image-of-a-linear-map
  - math:def-dimension
  - math:def-linear-map
  - math:def-linear-subspace
  - math:def-linear-combination-and-span
dependency_roles:
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  math:thm-adjoint-exists-and-is-unique-in-finite-dimension: mathematical-premise
  math:def-self-adjoint-and-normal-endomorphism: mathematical-premise
  math:def-orthogonal-complement: mathematical-premise
  math:def-orthogonal-projection: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  math:def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  math:def-kernel-and-image-of-a-linear-map: mathematical-premise
  math:def-dimension: mathematical-premise
  math:def-linear-map: mathematical-premise
  math:def-linear-subspace: mathematical-premise
  math:def-linear-combination-and-span: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Definition

Let $H$ be a finite-dimensional complex inner-product space, and let $A:H\to H$ be a linear endomorphism that is positive semidefinite: $A=A^*$ and $\langle Ax,x\rangle\geq 0$ for every $x\in H$. Here $A^*$ denotes its adjoint. Write $A=\sum_j\lambda_j P_j$ using an orthonormal eigenbasis, where $P_j$ is orthogonal projection onto the line spanned by its $j$th basis vector. Define the support $\operatorname{supp}A=(\ker A)^\perp$, the positive square root $A^{1/2}=\sum_j\sqrt{\lambda_j}P_j$, and the support inverse square root $A^{-1/2}=\sum_{\lambda_j>0}\lambda_j^{-1/2}P_j$. Thus $A^{-1/2}$ is zero on $\ker A$. The orthogonal projector onto $\operatorname{supp}A$ is denoted $P_{\operatorname{supp}A}$, and $A^{-1/2}AA^{-1/2}=P_{\operatorname{supp}A}$. All operators here are finite-dimensional; no unbounded inverse is asserted.

## Definition references

[[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]]

[[math:thm-adjoint-exists-and-is-unique-in-finite-dimension]]

[[math:def-self-adjoint-and-normal-endomorphism]]

[[math:def-orthogonal-complement]]

[[math:def-orthogonal-projection]]

[[math:def-inner-product-space]]

[[math:def-orthogonal-vectors-sets-and-orthonormal-bases]]

[[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum]]

[[math:def-kernel-and-image-of-a-linear-map]]

[[math:def-dimension]]

[[math:def-linear-map]]

[[math:def-linear-subspace]]

[[math:def-linear-combination-and-span]]

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$ and a positive semidefinite endomorphism $A$ as in the definition.

[F1] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F2] Every linear map between finite-dimensional complex inner-product spaces has a unique adjoint, characterized by $\langle Ax,y\rangle=\langle x,A^*y\rangle$. [[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]] [[math:thm-adjoint-exists-and-is-unique-in-finite-dimension]]

[F3] Self-adjoint means $A=A^*$, normal means $AA^*=A^*A$, and every self-adjoint endomorphism is normal. [[math:def-self-adjoint-and-normal-endomorphism]]

[F4] For a subspace $W\subseteq H$, $W^\perp$ consists of the vectors orthogonal to every vector of $W$. [[math:def-orthogonal-complement]]

[F5] For a subspace $W$ of a finite-dimensional inner-product space, $P_Wx$ is the unique vector in $W$ for which $x-P_Wx\in W^\perp$. [[math:def-orthogonal-projection]]

## Justification

**Proof technique:** direct.

1.1 By [F2], $A^*$ exists uniquely. Since $A=A^*$, [F3] makes $A$ normal, so [F1] supplies an orthonormal eigenbasis. For an eigenvector $v\ne0$ with eigenvalue $\lambda$, self-adjointness makes $\lambda$ real and positivity gives $\lambda\geq0$. The kernel is the span of the eigenvectors with eigenvalue zero, and its orthogonal complement is the span of those with positive eigenvalues. [F1, F2, F3, F4, given, algebra]

2.1 For each distinct eigenvalue $\lambda$, the orthogonal projection onto its eigenspace equals $\prod_{\mu\ne\lambda}(A-\mu I)/(\lambda-\mu)$, where $\mu$ ranges over the other distinct eigenvalues; the empty product is $I$. This follows by applying the polynomial to each vector in an orthonormal eigenbasis. Hence each eigenspace projection, and therefore both sums in the definition, is independent of the choice of eigenbasis. The zero-dimensional case has only the zero endomorphism and empty sums. [F5, step 1.1, algebra]

3.1 On an eigenvector with eigenvalue $\lambda$, the square of $A^{1/2}$ acts by $\lambda$, while $A^{-1/2}AA^{-1/2}$ acts by $1$ if $\lambda>0$ and by $0$ if $\lambda=0$. Consequently $(A^{1/2})^2=A$, $A^{1/2}$ is positive semidefinite, and the latter product is the orthogonal projector onto $(\ker A)^\perp$. This establishes the stated construction and identity, including when $A=0$. [F2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎
