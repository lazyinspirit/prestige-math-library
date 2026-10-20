---
id: thm-low-rank-adapter-factorization-ambiguity
kind: theorem
title: "Rank capacity and factorization ambiguity of a low-rank adapter"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-low-rank-adaptation-of-a-linear-layer
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Edward Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, arXiv:2106.09685v2, §4.1"
      url: "https://arxiv.org/pdf/2106.09685"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, §7E, Theorems 7.70 and 7.80"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Fix positive integers $d,k$, an integer $1\le r\le\min(d,k)$, a nonzero real number $c$, and a base matrix $W_0\in\mathbb R^{d\times k}$. For every pair $B\in\mathbb R^{d\times r}$ and $A\in\mathbb R^{r\times k}$, the adapter update $\Delta=cBA$ has matrix rank at most $r$, where rank is the dimension of the image of the associated linear map. Conversely, every target update $\Delta\in\mathbb R^{d\times k}$ of rank at most $r$ has at least one representation $\Delta=cBA$ with these factor shapes. For any such factors and any invertible matrix $M\in\mathbb R^{r\times r}$, the transformed factors $BM$ and $M^{-1}A$ represent the same update. Thus the factorization is not identifiable: every target update of rank at most $r$ has more than one factor pair. A target update of rank greater than $r$ cannot be represented.

## Statement references

[Axler, *Linear Algebra Done Right*, §7E, Theorem 7.70: singular value decomposition for finite-dimensional inner-product spaces](https://linear.axler.net/LADR4e.pdf)

[Axler, *Linear Algebra Done Right*, §7E, Theorem 7.80: matrix factorization from the singular value decomposition](https://linear.axler.net/LADR4e.pdf)

## Facts & Assumptions

**Given:** The factor dimensions and nonzero scale in the statement.

[F1] [[def-low-rank-adaptation-of-a-linear-layer]]: the update matrix is $cBA$, with $A\in\mathbb R^{r\times k}$, $B\in\mathbb R^{d\times r}$, and $c\ne0$.

[F2] [[thm-singular-value-decomposition]]: every linear map between finite-dimensional real or complex inner-product spaces has an SVD with positive singular values and orthonormal domain and range vectors; its proof shows the range vectors span the image, so their number equals the rank.

## Proof

1.1 The image of $BA$ is contained in the image of $B$, whose dimension is at most the number $r$ of columns of $B$. Multiplication by the nonzero scalar $c$ preserves image dimension, so $\operatorname{rank}(cBA)\le r$. [given, F1, algebra]

1.2 Let $\Delta\in\mathbb R^{d\times k}$ have rank $q\le r$. If $q=0$, then $\Delta=0$ and the zero factors give $\Delta=cBA$. If $q>0$, apply [F2] to the real linear map $\Delta/c:\mathbb R^k\to\mathbb R^d$. Since $c\ne0$, this map has rank $q$, so its SVD has exactly $q$ positive terms: $\Delta/c=\sum_{j=1}^q s_j u_jv_j^{\mathsf T}$, with $s_j>0$ and orthonormal vectors $u_j\in\mathbb R^d$, $v_j\in\mathbb R^k$. [given, F2, choose, algebra]

1.3 If $M\in\mathbb R^{r\times r}$ is invertible, associativity gives $(BM)(M^{-1}A)=B(MM^{-1})A=BA$, so the transformation preserves $cBA$. [F1, given, algebra]

2.1 For $j\le q$, set the $j$th column of $B$ to $\sqrt{s_j}u_j$ and the $j$th row of $A$ to $\sqrt{s_j}v_j^{\mathsf T}$; fill the remaining columns of $B$ and rows of $A$ with zero. These matrices have the required shapes and $BA=\sum_{j=1}^q s_ju_jv_j^{\mathsf T}=\Delta/c$, hence $cBA=\Delta$. [F1, step 1.2, construct, algebra]

3.1 If $\operatorname{rank}(\Delta)>r$, step 1.1 rules out a factor representation. If $\Delta\ne0$ has rank at most $r$, step 2.1 gives a representation with $B\ne0$; the matrix $M=2I_r$, where $I_r$ is the identity on $\mathbb R^r$, is invertible with inverse $\tfrac12 I_r$, and $BM=2B\ne B$, so step 1.3 gives a distinct factor pair with the same product. If $\Delta=0$, let $A'$ have entry $1$ in position $(1,1)$ and all other entries $0$; then $(B,A)=(0,0)$ and $(B,A)=(0,A')$ are distinct factor pairs for the zero update. Thus every representable target update has multiple factor pairs. [given, step 1.1, step 2.1, step 1.3, algebra] ∎
