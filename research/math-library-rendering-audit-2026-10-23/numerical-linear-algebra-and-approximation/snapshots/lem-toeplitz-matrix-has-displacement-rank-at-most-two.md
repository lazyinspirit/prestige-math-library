---
id: lem-toeplitz-matrix-has-displacement-rank-at-most-two
kind: lemma
title: "A Toeplitz matrix has lower-shift displacement rank at most two"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-displacement-rank-generators-and-lower-shift
  - def-matrix-product-and-identity-matrix
  - def-toeplitz-circulant-and-displacement-notation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, §2.1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.5.1"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
verification:
  precheck: pass
---

## Statement

Let $T=(t_{i-j})_{0\le i,j<n}$ be any square Toeplitz matrix, and let $Z=Z_n$ be the lower shift of [[def-displacement-rank-generators-and-lower-shift]]. With $e_0=(1,0,\ldots,0)^T$ and $t_0=T_{00}$,
$$T-ZTZ^*=e_0(e_0^*T-t_0e_0^*)+(Te_0)e_0^*.$$
Consequently, its displacement rank is at most two. A width-two generator is
$$G=[\,e_0\ \ Te_0\,],\qquad H^*=\begin{bmatrix}e_0^*T-t_0e_0^*\\ e_0^*\end{bmatrix}.$$

## Facts & Assumptions

**Given:** A square Toeplitz matrix $T=(t_{i-j})$, its first diagonal entry $t_0$, and the lower shift $Z$.

[F1] The lower-shift displacement is $\nabla_Z(T)=T-ZTZ^*$, and a generator is a factorization $\nabla_Z(T)=GH^*$. [[def-displacement-rank-generators-and-lower-shift]]

[F2] Toeplitz entries satisfy $T_{ij}=t_{i-j}$ for zero-based indices. [[def-toeplitz-circulant-and-displacement-notation]]

[F3] Matrix multiplication is defined by the finite entry sums. [[def-matrix-product-and-identity-matrix]]

## Proof

1.1 For $i,j\ge1$, $(ZTZ^*)_{ij}=T_{i-1,j-1}=t_{(i-1)-(j-1)}=t_{i-j}=T_{ij}$ by [F2]. If $i=0$ or $j=0$, the corresponding entry of $ZTZ^*$ is zero because the first row of $Z$ and the first column of $Z^*$ are zero. Thus $T-ZTZ^*$ agrees with $T$ on its first row and first column and is zero in the interior. The displayed expression has exactly these entries: its first row is $e_0^*T$, its first column is $Te_0$, and its $(0,0)$ entry is $t_0$. [F1, F2, F3, algebra]

2.1 The factorization in the statement multiplies to the displayed expression from step 1.1. It has two columns, so the rank of $T-ZTZ^*$ is at most two by the definition of rank and a product through $\mathbb C^2$. [F1, step 1.1, algebra] ∎
