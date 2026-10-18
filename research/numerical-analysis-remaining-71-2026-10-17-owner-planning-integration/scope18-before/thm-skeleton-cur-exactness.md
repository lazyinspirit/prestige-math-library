---
id: thm-skeleton-cur-exactness
kind: theorem
title: "Skeleton CUR is exact for a full-rank cross"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-cur-reconstruction-cores
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-rank-and-nullity
  - thm-rank-nullity
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §13.1"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Nathan Halko, Per-Gunnar Martinsson, and Joel A. Tropp, Finding Structure with Randomness, §3.2.3"
      url: "https://arxiv.org/pdf/0909.4061"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $m,n\ge1$, and let $A\in\mathbb F^{m\times n}$. Choose an integer $0\le k\le\min(m,n)$ and ordered lists $I$ and $J$ of $k$ distinct valid row and column indices, respectively. Let $C=A(:,J)$, $R=A(I,:)$, and $W=A(I,J)\in\mathbb F^{k\times k}$ as in [[def-cur-reconstruction-cores]]. If $\operatorname{rank}(A)=\operatorname{rank}(W)=k$, then the skeleton CUR reconstruction satisfies
$C W^\dagger R=A$.
For $k=0$, use the empty-matrix convention: a rank-zero $A$ is zero and the empty product reconstructs the zero $m\times n$ matrix.

## Facts & Assumptions

**Given:** A finite matrix $A$, ordered row and column selections of common size $k$, and $\operatorname{rank}(A)=\operatorname{rank}(W)=k$.

[F1] [[def-cur-reconstruction-cores]]: $C=A(:,J)$, $R=A(I,:)$, $W=A(I,J)$, and the skeleton reconstruction is $CW^\dagger R$.

[F2] [[def-moore-penrose-pseudoinverse]]: a Moore-Penrose inverse satisfies $WW^\dagger W=W$, $W^\dagger W W^\dagger=W^\dagger$, and both square products are self-adjoint.

[F3] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite real or complex matrix has a unique Moore-Penrose inverse.

[F4] [[def-rank-and-nullity]]: the rank of a finite-dimensional linear map is the dimension of its image.

[F5] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, dimension of the domain is nullity plus rank.
 
## Proof

1.1 If $k=0$, the hypothesis $\operatorname{rank}(A)=0$ and [F4] imply $\operatorname{Ran}(A)=\{0\}$, so $A=0$. The stated empty product is also zero. Assume henceforth $k>0$. [given, F4, algebra]

1.2 The square matrix $W$ has rank $k$ in a $k$-dimensional domain and codomain. By [F4] and [F5] its kernel has dimension zero and its image has dimension $k$, so it is both injective and surjective and has an inverse $W^{-1}$. [given, F4, F5]

1.3 The matrix $W^{-1}$ satisfies all four equations in [F2]: $WW^{-1}W=W$, $W^{-1}WW^{-1}=W^{-1}$, and $WW^{-1}=W^{-1}W=I_k$ are self-adjoint. By uniqueness [F3], $W^\dagger=W^{-1}$. [F2, F3, algebra]

2.1 If $Cx=0$, restricting to rows $I$ gives $Wx=0$, and invertibility of $W$ from step 1.2 gives $x=0$. Hence $C$ is injective and has rank $k$ by [F4] and [F5]. Since the columns of $C$ are columns of $A$, $\operatorname{Ran}(C)\subseteq\operatorname{Ran}(A)$; both spaces have dimension $k$, so they are equal: if the inclusion were proper, a basis of $\operatorname{Ran}(C)$ together with a vector in $\operatorname{Ran}(A)\setminus\operatorname{Ran}(C)$ would give $k+1$ linearly independent vectors in a $k$-dimensional space. [given, F4, F5, step 1.2, algebra]

3.1 Equality of these column spaces supplies a matrix $X$ with $A=CX$. Restricting to rows $I$ yields $R=WX$, so $X=W^{-1}R$. Therefore $A=CW^{-1}R=CW^\dagger R$ by step 1.3 and [F1]. [F1, step 1.3, step 2.1, construct, algebra] ∎
