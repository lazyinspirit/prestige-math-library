---
id: thm-sylvesters-law-of-inertia
kind: theorem
title: 'Sylvester''s law of inertia: every real symmetric form is congruent to $\operatorname{diag}(I_p,-I_q,0_r)$, and $(p,q,r)$ is unique'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-symmetric-matrices-are-congruent-to-diagonal-matrices, def-definiteness-inertia-and-signature-data-over-the-reals, cor-cauchy-reals-lub-complete, thm-of-square-roots, thm-dimension-formula, thm-dimension-of-a-linear-subspace, thm-rank-nullity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Every symmetric bilinear form on a finite-dimensional real vector space is congruent to exactly one normal form

$$\operatorname{diag}(I_p,-I_q,0_r),\qquad p+q+r=\dim V.$$

Equivalently, the numbers of positive, negative, and zero diagonal entries are independent of the diagonalizing basis.

## Facts & Assumptions

**Given:** A symmetric bilinear form $B$ on a finite-dimensional real vector space $V$.

[L1] Every real symmetric matrix is congruent to a diagonal matrix ([[cor-symmetric-matrices-are-congruent-to-diagonal-matrices]]).

[L2] Positive and negative definiteness and the inertia data have the meanings stated for real symmetric forms ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[L3] The constructed real field has the least-upper-bound property and hence is complete ordered ([[cor-cauchy-reals-lub-complete]]), so every positive real has a nonzero positive square root ([[thm-of-square-roots]]).

[L4] For finite-dimensional subspaces $U,W$, $\dim(U+W)+\dim(U\cap W)=\dim U+\dim W$ ([[thm-dimension-formula]]).

[L5] A subspace of a finite-dimensional $n$-dimensional space has dimension at most $n$ ([[thm-dimension-of-a-linear-subspace]], clause 1).

[L6] Rank-nullity gives the dimension of a kernel as ambient dimension minus rank ([[thm-rank-nullity]]).

## Proof

**Proof technique:** diagonal normalization and intrinsic dimension bounds.

1.1 By [L1], choose a basis in which the matrix is diagonal, say with positive entries $d_1,\ldots,d_p$, negative entries $d_{p+1},\ldots,d_{p+q}$, and $r$ zero entries. For each nonzero $d_i$, [L3] supplies $s_i=\sqrt{|d_i|}>0$; replacing the corresponding basis vector by $s_i^{-1}$ times it changes $d_i$ to $1$ or $-1$. This proves existence of the displayed normal form, including $p=q=0$ and the empty basis when $V=0$. [L1, L3, choose, algebra]

2.1 In this normal form, the positive coordinate subspace $P$ has dimension $p$ and the form is positive definite on it. Let $N_0$ be the span of the negative and zero coordinates, of dimension $q+r$. If a positive-definite subspace $U$ had $\dim U>p$, [L4] and [L5] applied to $U+N_0\le V$ would give $\dim(U\cap N_0)\ge\dim U+q+r-\dim V>0$. A nonzero vector there has form value at most $0$, a contradiction. Thus $p$ is the intrinsic maximum dimension of a positive-definite subspace. [step 1.1, L2, L4, L5, algebra]

3.1 Applying step 2.1 to $-B$ shows that $q$ is the intrinsic maximum dimension of a negative-definite subspace. The radical is the kernel of the associated map; in normal form its rank is $p+q$, so [L6] gives its dimension $r=\dim V-p-q$. [step 1.1, step 2.1, L2, L6, algebra]

4.1 Any congruent normal form represents the same bilinear form and therefore has the same two intrinsic maxima and radical dimension. Hence its triple is the same $(p,q,r)$, proving uniqueness. [step 2.1, step 3.1, L2]

5.1 Steps 1.1 and 4.1 prove existence and uniqueness for all finite dimensions and for degenerate as well as nondegenerate forms. [step 1.1, step 4.1] ∎
