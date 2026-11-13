---
id: lem-nonnegative-inverse-interface-artin-tits-prerequisites
kind: lemma
title: Nonnegative inverse matrices preserve extremal basis rays
status: draft
domain: mathematics
origin: pipeline
deps:
  - math:def-invertible-matrix-and-general-linear-group
  - math:def-matrix-product-and-identity-matrix
  - math:def-linear-basis
  - math:def-change-of-basis-matrix
  - math:thm-reals-ordered-field
  - math:def-cg-real-coxeter-form-and-reflection
  - math:def-cg-canonical-reflection-homomorphism
  - math:lem-cg-reflection-representation-descends-and-root-norms
dependency_roles:
  math:def-invertible-matrix-and-general-linear-group: mathematical-premise
  math:def-matrix-product-and-identity-matrix: mathematical-premise
  math:def-linear-basis: mathematical-premise
  math:def-change-of-basis-matrix: mathematical-premise
  math:thm-reals-ordered-field: mathematical-premise
  math:def-cg-real-coxeter-form-and-reflection: mathematical-premise
  math:def-cg-canonical-reflection-homomorphism: mathematical-premise
  math:lem-cg-reflection-representation-descends-and-root-norms: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $A$ be an invertible $n\times n$ real matrix such that $A$ and $A^{-1}$ are entrywise nonnegative. Then $A=PD$, where $P$ is a permutation matrix and $D$ is a diagonal matrix with strictly positive diagonal entries. Here a permutation matrix has exactly one entry $1$ in each row and each column and all other entries zero.

Suppose in addition that $A$ is the change-of-basis matrix from an ordered basis $\mathcal B=(b_1,\ldots,b_n)$ to an ordered basis $\mathcal C=(c_1,\ldots,c_n)$ of the canonical Coxeter representation, and that all these basis vectors are roots. Then $D=I_n$, so $A$ is a permutation matrix. The case $n=0$ is allowed.

## Statement references

[[math:def-invertible-matrix-and-general-linear-group]]

[[math:def-matrix-product-and-identity-matrix]]

[[math:def-linear-basis]]

[[math:def-change-of-basis-matrix]]

[[math:def-cg-real-coxeter-form-and-reflection]]

[[math:def-cg-canonical-reflection-homomorphism]]

[[math:lem-cg-reflection-representation-descends-and-root-norms]]

## Facts & Assumptions

[F1] Invertibility gives $AB=BA=I_n$ for $B=A^{-1}$; the entries of a matrix product are finite sums of products, and $I_n$ has diagonal entries $1$ and off-diagonal entries $0$. The unique $0\times0$ matrix is $I_0$ ([[math:def-invertible-matrix-and-general-linear-group]], [[math:def-matrix-product-and-identity-matrix]]).

[F2] In the ordered field of real numbers, products and finite sums of nonnegative numbers are nonnegative; a finite sum of nonnegative numbers equal to zero has every summand zero, and a positive factor in a zero product forces the other factor to be zero ([[math:thm-reals-ordered-field]]).

[F3] The $j$-th column of the change-of-basis matrix from $\mathcal B$ to $\mathcal C$ consists of the coefficients of $b_j$ in the basis $\mathcal C$ ([[math:def-linear-basis]], [[math:def-change-of-basis-matrix]]).

[F4] The canonical Coxeter form $Q$ is bilinear, and every root $v$ in its canonical representation satisfies $Q(v,v)=1$; no positive-definiteness of $Q$ is assumed ([[math:def-cg-real-coxeter-form-and-reflection]], [[math:def-cg-canonical-reflection-homomorphism]], [[math:lem-cg-reflection-representation-descends-and-root-norms]]).

## Proof



**Given:** $A$ and $B=A^{-1}$ are entrywise nonnegative, with the additional basis hypotheses in the second assertion.

**Goal:** Show $A=PD$ with $P$ a permutation matrix and $D$ positive diagonal, and show $D=I_n$ under the basis hypotheses.

1.1 Suppose $n>0$. For each row $i$, the diagonal equation $1=(AB)_{ii}=\sum_k a_{ik}b_{ki}$ gives an index $k$ with $a_{ik}>0$ and $b_{ki}>0$. If also $a_{i\ell}>0$ for some $\ell\ne k$, then the off-diagonal equation $0=(BA)_{k\ell}=\sum_r b_{kr}a_{r\ell}$ has the strictly positive summand $b_{ki}a_{i\ell}$, a contradiction. Thus each row of $A$ has exactly one positive entry and all its other entries are zero. [given, F1, F2]

2.1 Let $k(i)$ be the column of the positive entry in row $i$. If distinct rows $i,j$ had $k(i)=k(j)=k$, then 1.1 supplies $b_{ki}>0$, while $0=(AB)_{ji}=\sum_r a_{jr}b_{ri}$ contains the positive summand $a_{jk}b_{ki}$, a contradiction. Hence the $n$ indices $k(i)$ are distinct and cover all $n$ columns. Define $P$ to have entry $1$ at each $(i,k(i))$ and zero elsewhere, and let $D_{kk}$ be the unique positive entry of $A$ in column $k$. Then $P$ is a permutation matrix, $D$ is positive diagonal, and $A=PD$. For $n=0$, the unique empty matrices satisfy the same conclusion with $P=D=I_0$. [F1, F2, step 1.1, construct]

3.1 Under the basis hypotheses, column $j$ of $A=PD$ gives $b_j=d_jc_{\pi(j)}$ for a permutation $\pi$ and $d_j=D_{jj}>0$. By bilinearity and the unit root identities, $1=Q(b_j,b_j)=d_j^2Q(c_{\pi(j)},c_{\pi(j)})=d_j^2$. Positivity gives $d_j=1$ for every $j$; this is also vacuous for $n=0$. Therefore $D=I_n$ and $A=P$. [given, F2, F3, F4, step 2.1, algebra] ∎
