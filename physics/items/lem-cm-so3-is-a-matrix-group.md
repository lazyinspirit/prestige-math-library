---
id: lem-cm-so3-is-a-matrix-group
kind: lemma
title: "$SO(3)$ is a subgroup of the general linear group, with $R^{-1}=R^{\\mathsf T}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-special-orthogonal-group, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, prop-transpose-laws, thm-determinant-multiplicative, def-determinant-of-a-square-matrix, def-invertible-matrix-and-general-linear-group, cor-general-linear-group-is-a-group, thm-real-square-matrix-invertible-iff-determinant-nonzero]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
  prop-transpose-laws: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-general-linear-group-is-a-group: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003), Example 8.35, printed page 196"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1, printed pages 46-48"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

In the notation of [[def-cm-special-orthogonal-group]]:

1. $I_3\in SO(3)$, and for all $R,S\in SO(3)$ the matrices $RS$ and $R^{\mathsf T}$ again lie in $SO(3)$; moreover $\det R=1$, $R$ is invertible, and its inverse is $R^{\mathsf T}$, so also $RR^{\mathsf T}=I_3$.
2. Consequently $SO(3)$ is a subgroup of the general linear group $GL_3(\mathbb R)$ ([[def-invertible-matrix-and-general-linear-group]], [[cor-general-linear-group-is-a-group]]).

## Facts & Assumptions

**Given:** Matrices $R,S\in SO(3)$, so that $R^{\mathsf T}R=I_3=S^{\mathsf T}S$ and $\det R=\det S=1$ by [[def-cm-special-orthogonal-group]].

[L1] Matrix multiplication is associative and unital, and the identity matrices act neutrally ([[thm-matrix-multiplication-laws]], [[def-matrix-product-and-identity-matrix]]).

[L2] Transposition is involutive and reverses products: $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ and $(A^{\mathsf T})^{\mathsf T}=A$ ([[prop-transpose-laws]]).

[L3] The determinant is multiplicative, $\det(AB)=\det A\det B$, and $\det I_3=1$ ([[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]]).

[L4] An $n\times n$ matrix is invertible exactly when it has a two-sided inverse, and the inverse is unique when it exists; $GL_3(\mathbb R)$ is the set of invertible $3\times3$ real matrices, and it is a group under multiplication ([[def-invertible-matrix-and-general-linear-group]], [[cor-general-linear-group-is-a-group]]). For a finite square real matrix, invertibility is equivalent to nonzero determinant ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 Since $(I_3)^{\mathsf T}I_3=I_3I_3=I_3$ and $\det I_3=1$ by [L1] and [L3], the identity matrix lies in $SO(3)$. [L1, L3, given]

1.2 For the product, $(RS)^{\mathsf T}(RS)=S^{\mathsf T}R^{\mathsf T}RS=S^{\mathsf T}(R^{\mathsf T}R)S=S^{\mathsf T}I_3S=S^{\mathsf T}S=I_3$ by [L1], [L2] and the defining relations for $R,S$; and $\det(RS)=\det R\det S=1$ by [L3]. Hence $RS\in SO(3)$. [L1, L2, L3, given, algebra]

2.1 For $R\in SO(3)$ the relation $R^{\mathsf T}R=I_3$ exhibits $R^{\mathsf T}$ as a left inverse of $R$. Since $\det R=1\ne0$, the matrix $R$ is invertible by [L4]; multiplying the relation $R^{\mathsf T}R=I_3$ on the right by the two-sided inverse $R^{-1}$ and using [L1] gives $R^{\mathsf T}=R^{-1}$; hence also $RR^{\mathsf T}=RR^{-1}=I_3$. Moreover $R^{\mathsf T}\in SO(3)$: $(R^{\mathsf T})^{\mathsf T}R^{\mathsf T}=RR^{\mathsf T}=I_3$ by [L2], and $\det R^{\mathsf T}=1$ because $\det R^{\mathsf T}\det R=\det(R^{\mathsf T}R)=\det I_3=1$ by [L2], [L3] and $\det R=1$. [step 1.2, L1, L2, L3, L4, algebra]

3.1 By steps 1.1, 1.2 and 2.1 the set $SO(3)$ contains $I_3$ and is closed under multiplication and inversion; since it is a subset of $GL_3(\mathbb R)$ by step 2.1 and $GL_3(\mathbb R)$ is a group under multiplication by [L4], $SO(3)$ is a subgroup of $GL_3(\mathbb R)$. This proves clause 2. [step 1.1, step 1.2, step 2.1, L4] ∎
