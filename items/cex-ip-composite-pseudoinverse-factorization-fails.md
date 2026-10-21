---
id: cex-ip-composite-pseudoinverse-factorization-fails
kind: counterexample
title: Rank-deficient noncommuting factors break pseudoinverse composition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-composite-double-regularization
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Christina Brandt and Patrick Horn, Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems, §2.1"
      url: "https://arxiv.org/pdf/2610.13483"
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
---

## Statement refuted

For every pair of bounded linear maps $F:X\to Y$ and $G:Y\to Z$ between real or complex Hilbert spaces, the Moore–Penrose inverse of their composite satisfies $(G\circ F)^\dagger=F^\dagger G^\dagger$.

## Statement references

[[def-ip-composite-double-regularization|Composite operator order and absence of a general product identity]]

[Brandt and Horn, §2.1, pp. 2–3](https://arxiv.org/pdf/2610.13483)

## Setup

Take $X=Y=Z=\mathbb R^2$ with the Euclidean inner product and let $F=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $G=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Both maps have rank one, they do not commute, and for $A=G\circ F$ the product $F^\dagger G^\dagger$ is not $A^\dagger$.

## Setup references

[[def-moore-penrose-pseudoinverse|Finite-matrix Moore–Penrose pseudoinverse]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Existence and uniqueness of the finite-matrix pseudoinverse]]

## Facts & Assumptions

**Given:** The matrices $F=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $G=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ on Euclidean $\mathbb R^2$, with $A=G\circ F$.

[F1] [[def-ip-composite-double-regularization]]: The composite forward map has order $A=G\circ F$; a pseudoinverse product is not part of the composite definition.

[F2] [[def-moore-penrose-pseudoinverse]]: For a matrix $M$, its Moore–Penrose pseudoinverse $M^+$ satisfies $MM^+M=M$, $M^+MM^+=M^+$, and the square products $MM^+$ and $M^+M$ are self-adjoint.

[F3] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: Every finite real or complex matrix has a unique matrix satisfying the four Penrose equations.

## Verification

1.1 Direct multiplication gives $FG=\frac12\begin{pmatrix}1&1\\0&0\end{pmatrix}$ and $GF=A=\frac12\begin{pmatrix}1&0\\1&0\end{pmatrix}$, which are unequal. Each of $F,G,A$ is nonzero with a one-dimensional image, so both factors are rank deficient and noncommuting. [given, F1, algebra]

2.1 Put $B=\begin{pmatrix}1&1\\0&0\end{pmatrix}$. Multiplication gives $AB=G$ and $BA=F$. Since $F$ and $G$ are self-adjoint idempotents, $ABA=(AB)A=GA=G^2F=A$, $BAB=(BA)B=FB=B$, and both $AB$ and $BA$ are self-adjoint. Thus $B$ satisfies all four equations in [F2], so $A^+=B$ by [F3]. [given, step 1.1, F2, F3, algebra]

3.1 The same equations show $F^+=F$ and $G^+=G$, because each is a self-adjoint idempotent and hence satisfies the four Penrose equations; uniqueness in [F3] identifies them. Therefore $F^+G^+=FG=\frac12B\ne B=A^+$. This refutes the universal identity. [given, step 2.1, F2, F3, algebra] ∎
