---
id: lem-adjugate-inverse-formula-over-a-field
kind: lemma
title: "The adjugate gives an explicit inverse formula over a field"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - thm-determinant-of-transpose
  - thm-operator-invertible-iff-determinant-nonzero
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MA1111 Linear Algebra I, Lecture 10: Determinants by Laplace Expansion and Inverses by Adjoint Matrices, Trinity College Dublin, Michaelmas 2016"
      url: https://www.maths.tcd.ie/~lrolen/LinearAlgebraNotes10.pdf
---

## Statement

Let $F$ be a field, $q\ge1$, and $M\in F^{q\times q}$. Let $\operatorname{adj}(M)$ be the adjugate defined by the cofactors of [[def-matrix-minors-cofactors-and-adjugate]]. Then

$$
M\operatorname{adj}(M)=\det(M)I_q.
$$

Consequently, when $\det(M)\ne0$, $M^{-1}=\operatorname{adj}(M)/\det(M)$; when $\det(M)=0$, $M$ is singular.

## Facts & Assumptions

**Given:** A field $F$, positive integer $q$, and matrix $M\in F^{q\times q}$.

[F1] [[def-matrix-minors-cofactors-and-adjugate]]: Rows and columns are indexed by $0,\ldots,q-1$; $C_{jk}(M)=(-1)^{j+k}\det(M^{(j,k)})$ and $\operatorname{adj}(M)=\operatorname{cof}(M)^T$, with the $0\times0$ determinant equal to $1$ when $q=1$.

[F2] [[thm-laplace-cofactor-expansion]]: With zero-based indices, expanding along row $j$ gives $\det(M)=\sum_{k=0}^{q-1}m_{jk}C_{jk}(M)$.

[F3] [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]: A determinant with two equal columns is zero. By [[thm-determinant-of-transpose]], a determinant with two equal rows is also zero.

[F4] [[thm-operator-invertible-iff-determinant-nonzero]]: A finite-dimensional linear operator over a field is invertible if and only if its determinant is nonzero.

## Proof


1.1 For $0\le i,j<q$, [F1] makes the $(i,j)$ entry of $M\operatorname{adj}(M)$ equal to $\sum_{k=0}^{q-1}m_{ik}C_{jk}(M)$. [F1, algebra]

2.1 If $i=j$, this sum is $\det(M)$ by [F2]. If $i\ne j$, let $M'$ be obtained by replacing row $j$ of $M$ with row $i$. Deleting row $j$ leaves each cofactor unchanged, so expansion of $\det(M')$ along row $j$ gives the sum in step 1.1. The matrix $M'$ has equal rows $i$ and $j$, so [F3] makes that determinant zero. Thus every diagonal entry of $M\operatorname{adj}(M)$ is $\det(M)$ and every off-diagonal entry is zero. [F2, F3, step 1.1, algebra]

3.1 If $\det(M)\ne0$, [F4] gives $M^{-1}$, and multiplying the identity in step 2.1 on the left by $M^{-1}/\det(M)$ gives $\operatorname{adj}(M)/\det(M)=M^{-1}$. If $\det(M)=0$, [F4] says $M$ is not invertible, which is exactly singularity for a square matrix. [F4, step 2.1, algebra] ∎
