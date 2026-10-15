---
id: lem-full-column-rank-matrix-has-economy-qr
kind: lemma
title: "A full-column-rank real matrix has an economy QR factorization"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 0
deps:
  - thm-finite-dimensional-orthogonal-decomposition
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-dimension-of-a-linear-subspace
  - cor-dimension-of-a-direct-sum
  - thm-qr-factorisation-over-r-or-c
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Section 15: Multiple Linear Regression, PDF pp. 2–4"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Charlotte Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 3–4"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
---

## Statement

Let $n>p\ge1$ and let $X\in\mathbb R^{n\times p}$ have full column rank. Then there are matrices $Q\in\mathbb R^{n\times p}$ and $R\in\mathbb R^{p\times p}$ such that

$$X=QR,$$

where $Q^TQ=I_p$ and $R$ is upper triangular with positive diagonal. The columns of $Q$ can be completed to an orthonormal basis $[Q\ Q_0]$ of $\mathbb R^n$, with $Q_0\in\mathbb R^{n\times(n-p)}$. For $P_X:=X(X^TX)^{-1}X^T$, one has $P_X=QQ^T$.

## Facts & Assumptions

**Given:** Integers $n>p\ge1$ and a full-column-rank matrix $X\in\mathbb R^{n\times p}$.

[F1] Every subspace $W$ of a finite-dimensional inner-product space $V$ has an orthogonal decomposition $V=W\oplus W^\perp$. [[thm-finite-dimensional-orthogonal-decomposition]]

[F2] Every finite-dimensional real or complex inner-product space has an orthonormal basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[F3] Every invertible square real matrix $A$ has a factorization $A=UT$ with $U$ orthogonal and $T$ upper triangular with positive diagonal. [[thm-qr-factorisation-over-r-or-c]]

[F4] A subspace of a finite-dimensional vector space is finite-dimensional. [[thm-dimension-of-a-linear-subspace]]

[F5] The dimension of a finite direct sum of finite-dimensional subspaces is the sum of their dimensions. [[cor-dimension-of-a-direct-sum]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $W=\operatorname{col}X$. The columns of $X$ are a basis of $W$, so $\dim W=p$. By [F1], $\mathbb R^n=W\oplus W^\perp$. Since $W^\perp$ is a subspace of the finite-dimensional space $\mathbb R^n$, [F4] makes it finite-dimensional; [F5] then gives $n=\dim W+\dim W^\perp$, so $\dim W^\perp=n-p$. By [F2], choose an orthonormal basis of $W^\perp$ and index its $n-p$ vectors as $z_{p+1},\ldots,z_n$. The columns of $A=[X\ z_{p+1}\ \cdots\ z_n]$ form a basis of $\mathbb R^n$: their $X$-part spans $W$, their remaining part spans $W^\perp$, and the direct sum in [F1] makes the union linearly independent. Thus $A$ is invertible. [given, F1, F2, F4, F5, choose, algebra]

2.1 Apply [F3] to write $A=UT$, where $U$ is orthogonal and $T$ is upper triangular with positive diagonal. Let $Q$ be the first $p$ columns of $U$, let $Q_0$ be its remaining columns, and let $R$ be the leading $p\times p$ block of $T$. Because $T_{ij}=0$ when $i>j$, every entry below row $p$ in its first $p$ columns is zero. The first $p$ columns of $A$ are therefore $X=QR$. The matrix $R$ is upper triangular with positive diagonal, while $U=[Q\ Q_0]$ gives $Q^TQ=I_p$ and the required orthonormal completion. [step 1.1, F3, algebra]

3.1 Since $R$ is invertible, $X^TX=R^TR$ and $(X^TX)^{-1}=R^{-1}R^{-T}$. Hence $P_X=Q R(R^TR)^{-1}R^TQ^T=Q Q^T$, because $R(R^TR)^{-1}R^T=I_p$. [step 2.1, algebra] ∎