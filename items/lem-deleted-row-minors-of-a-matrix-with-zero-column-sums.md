---
id: lem-deleted-row-minors-of-a-matrix-with-zero-column-sums
kind: lemma
title: Deleted-row minors of a zero-column-sum matrix agree up to sign
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-determinant-vanishes-with-a-zero-or-repeated-column
  - cor-matrix-rank-nullity
  - def-determinant-of-a-square-matrix
  - def-matrix-minors-cofactors-and-adjugate
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - def-submatrix-minors-of-a-rectangular-matrix
  - def-transpose-of-a-matrix
  - lem-matrix-rank-detected-by-nonzero-minors
  - thm-laplace-cofactor-expansion
  - thm-row-rank-equals-column-rank
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.94: the regulator is computed from any one of the deleted coordinates, the choice of coordinate being immaterial."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Definition 15.16 p.9: every (r+s-1)x(r+s-1) minor of the log matrix has the same absolute value."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $m\ge1$ and let $A=(a_{kj})$ be an $(m+1)\times m$ real matrix of rank $m$
([[def-row-space-column-space-nullspace-and-matrix-ranks]]) each of whose columns has
coordinate sum zero, that is $\sum_{k=1}^{m+1}a_{kj}=0$ for every column index
$j$. For $k=1,\dots,m+1$ let $\Delta_k$ be the determinant
([[def-determinant-of-a-square-matrix]]) of the $m\times m$ matrix obtained by
deleting row $k$. Then $\Delta_k\ne0$ for every $k$ and

$$\Delta_k=(-1)^{k-1}\Delta_1\qquad(k=1,\dots,m+1);$$

in particular all $|\Delta_k|$ are equal.

## Facts & Assumptions

**Given:** An integer $m\ge1$ and an $(m+1)\times m$ real matrix $A=(a_{kj})$ of
rank $m$ whose columns each have coordinate sum zero.

[F1] Expanding a determinant along its last column, with $M_{km}$ the determinant
of the matrix obtained by deleting row $k$ and the last column and
$C_{km}=(-1)^{k-1+m}M_{km}$ the corresponding cofactor, gives
$\det B=\sum_{k=1}^{m+1}b_{k,m+1}C_{k,m+1}$; a matrix with two equal columns has
determinant zero ([[thm-laplace-cofactor-expansion]],
[[def-matrix-minors-cofactors-and-adjugate]],
[[cor-determinant-vanishes-with-a-zero-or-repeated-column]]).

[F2] For a real $m\times(m+1)$ matrix the rank and the dimension of the kernel
satisfy $\operatorname{rank}+\dim N=m+1$; transposition does not change the
rank ([[cor-matrix-rank-nullity]], [[thm-row-rank-equals-column-rank]],
[[def-transpose-of-a-matrix]]).

[F3] If $A$ is $(m+1)\times m$ of rank $m$, then some $m$-rowed minor of $A$ is
nonzero ([[lem-matrix-rank-detected-by-nonzero-minors]]).

## Proof

**Proof technique:** build a linear relation among the minors from the
equality of two columns of an augmented matrix, then identify the resulting
kernel with the all-ones line.

1.1 Fix a column index $j$ and let $B$ be the $(m+1)\times(m+1)$ real matrix whose first $m$ columns are the columns of $A$ and whose last column is the $j$-th column of $A$; its entries in the last column are $b_{k,m+1}=a_{kj}$. The last column of $B$ equals column $j$, so $\det B=0$, and expanding along the last column as in [F1] gives $\sum_{k=1}^{m+1}(-1)^{k-1+m}a_{kj}\Delta_k=0$, because deleting row $k$ and the last column of $B$ leaves exactly the matrix whose determinant is $\Delta_k$. [F1, given]

2.1 Define $c_k:=(-1)^{k-1+m}\Delta_k$ for $k=1,\dots,m+1$. Step 1.1 says $\sum_{k=1}^{m+1}a_{kj}c_k=0$ for every column index $j$, that is $A^{\mathsf T}c=0$ for the transpose $A^{\mathsf T}$; and the column-sum hypothesis says $\sum_{k=1}^{m+1}a_{kj}\cdot1=0$ for every $j$, that is $A^{\mathsf T}\mathbf 1=0$ with $\mathbf 1=(1,\dots,1)\ne0$. [F2, step 1.1]

3.1 Since $A$ has rank $m$, its transpose $A^{\mathsf T}$ has rank $m$, so by rank-nullity its kernel has dimension $(m+1)-m=1$ and is therefore a line. Both $c$ and $\mathbf 1$ lie in that kernel and $\mathbf 1\ne0$, so $c=\lambda\mathbf 1$ for some $\lambda\in\mathbb R$. [F2, step 2.1]

4.1 By [F3] some $m$-rowed minor of $A$ is nonzero, and the $m$-rowed minors of $A$ are exactly the determinants $\Delta_1,\dots,\Delta_{m+1}$; since $c_k=\pm\Delta_k$, this makes $c\ne0$, hence $\lambda\ne0$ and $\Delta_k=(-1)^{k-1+m}\lambda\ne0$ for every $k$. In particular $\Delta_1=(-1)^{m}\lambda$, so $\Delta_k=(-1)^{k-1+m}\lambda=(-1)^{k-1}\cdot(-1)^{m}\lambda=(-1)^{k-1}\Delta_1$, which is the claimed sign pattern and nonvanishing. [F3, step 3.1] ∎
