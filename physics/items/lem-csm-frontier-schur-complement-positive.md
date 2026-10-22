---
id: lem-csm-frontier-schur-complement-positive
kind: lemma
title: Positive Schur complements for finite Gaussian precisions
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
dependency_roles:
  thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique: mathematical-premise
  thm-determinant-of-a-triangular-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: MIT OpenCourseWare, 2.154 Maneuvering and Control, lecture notes
      url: https://ocw.mit.edu/courses/2-154-maneuvering-and-control-of-surface-and-underwater-vehicles-13-49-fall-2004/2609f8b1bdebe4566891080afe007f51_1349_notes.pdf
      locator: §§25.1.4–25.1.5, printed pp. 135–136 / PDF pp. 141–142, block Schur complements and the congruence proof of positive-definite sign.
    - title: Nick Higham, What Is the Schur Complement of a Matrix?
      url: https://nhigham.com/2023/06/01/what-is-the-schur-complement-of-a-matrix/
      locator: Block factorization and positive-definite Schur-complement criterion; the present statement fixes the real symmetric convention used here.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $r\ge0$ and $s\ge1$ be integers. For $n\ge1$, a real matrix $M\in\mathbb R^{n\times n}$ is **symmetric positive definite** if $M^{\mathsf T}=M$ and $v^{\mathsf T}Mv>0$ for every nonzero $v\in\mathbb R^n$. Let $A\in\mathbb R^{r\times r}$, $B\in\mathbb R^{r\times s}$, and $C\in\mathbb R^{s\times s}$, and set

$$K:=\begin{pmatrix}A&B\\B^{\mathsf T}&C\end{pmatrix}\in\mathbb R^{(r+s)\times(r+s)}.$$

Assume $K$ is symmetric positive definite. Then $C$ is symmetric positive definite, $\det C>0$, and $C^{-1}$ exists. The Schur complement $S:=A-BC^{-1}B^{\mathsf T}$ is symmetric positive definite when $r\ge1$; when $r=0$, $S$ is the empty $0\times0$ matrix. For all $x\in\mathbb R^r$ and $y\in\mathbb R^s$,

$$\begin{pmatrix}x\\y\end{pmatrix}^{\mathsf T}K\begin{pmatrix}x\\y\end{pmatrix}=x^{\mathsf T}Sx+(y+C^{-1}B^{\mathsf T}x)^{\mathsf T}C(y+C^{-1}B^{\mathsf T}x).$$

For $r=0$, the first term and $S$ are interpreted on the singleton space $\mathbb R^0$.

## Statement references

[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]

## Facts & Assumptions

**Given:** A symmetric positive-definite real block matrix $K$ with block sizes $r\ge0$ and $s\ge1$ as in the Statement.

[F1] Every real symmetric positive-definite $s\times s$ matrix has a factorization $C=LL^{\mathsf T}$ with $L$ lower triangular and positive diagonal; the determinant of a triangular matrix is the product of its diagonal entries, determinants are multiplicative, and a real square matrix with nonzero determinant is invertible ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]], [[thm-determinant-of-a-triangular-matrix]], [[thm-determinant-multiplicative]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).



## Proof

1.1 For nonzero $z\in\mathbb R^s$, the vector $(0,z)$ is nonzero, so $z^{\mathsf T}Cz=(0,z)^{\mathsf T}K(0,z)>0$. Thus $C$ is symmetric positive definite. By the Cholesky statement in [F1], $C=LL^{\mathsf T}$ with positive diagonal; by the determinant laws in [F1], $\det C=(\det L)^2=(\prod_iL_{ii})^2>0$, so the invertibility criterion in [F1] gives that $C$ is invertible. [given, F1, algebra]

2.1 Since $C$ is symmetric and invertible, $C^{-1}$ is symmetric. Expanding the quadratic form on the right gives $x^{\mathsf T}(A-BC^{-1}B^{\mathsf T})x+2x^{\mathsf T}By+y^{\mathsf T}Cy$, which is the quadratic form on the left; this proves the displayed completion-of-the-square identity. [step 1.1, algebra]

3.1 If $r\ge1$ and $x\ne0$, choose $y=-C^{-1}B^{\mathsf T}x$ in step 2.1. The second term vanishes and $(x,y)\ne0$, so positive definiteness of $K$ gives $x^{\mathsf T}Sx>0$. Symmetry of $S$ follows from symmetry of $A,C^{-1}$; hence $S$ is symmetric positive definite. If $r=0$, the claimed empty-matrix convention holds by definition. [given, step 1.1, step 2.1, construct, algebra] ∎
