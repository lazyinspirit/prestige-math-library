---
id: thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity
kind: theorem
title: "The reciprocal spectral condition number is the relative distance to singularity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-condition-number-of-a-nonsingular-linear-system, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value, thm-invertible-matrix-theorem, cor-rank-equals-number-of-nonzero-singular-values]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement

Let $n\ge 1$, let $A\in\operatorname{GL}_n(\mathbb{R})$, let
$\sigma_1\ge\cdots\ge\sigma_n>0$ be its singular values, and let
$\lVert\cdot\rVert_2$ be the spectral (operator) norm. Then:

1. **Smallest singular value as a minimum.**
   $\sigma_n=\min\{\lVert Ax\rVert_2:\lVert x\rVert_2=1\}$.
2. **Distance to singularity.**
   $$\min\Bigl\{\lVert E\rVert_2\;:\;E\in M_n(\mathbb{R}),\ A+E\text{ is singular}\Bigr\}=\sigma_n,$$
   and the minimum is attained.
3. **Relative distance.**
   $$\frac{\min_{A+E\text{ singular}}\lVert E\rVert_2}{\lVert A\rVert_2}=\frac{\sigma_n}{\sigma_1}=\frac{1}{\kappa_2(A)},$$
   where $\kappa_2(A)$ is the condition number of
   [[def-condition-number-of-a-nonsingular-linear-system]]. Equivalently,
   $\lVert A^{-1}\rVert_2=1/\sigma_n$.

In words: the nearest singular matrix to $A$ lies at spectral distance
$\sigma_n$, and that distance relative to the scale $\lVert A\rVert_2=\sigma_1$
is exactly $1/\kappa_2(A)$.

## Facts & Assumptions

**Given:** An invertible real matrix $A\in\operatorname{GL}_n(\mathbb{R})$ with
$n\ge 1$, its singular values $\sigma_1\ge\cdots\ge\sigma_n>0$, and a matrix
$E\in M_n(\mathbb{R})$.

[L1] There is a singular value decomposition $A=U\Sigma V^{\mathsf T}$ with
orthogonal $U,V$ and diagonal $\Sigma$ of the singular values
([[thm-singular-value-decomposition]]).

[L2] The operator norm equals the largest singular value, attained at a
right-singular vector ([[thm-operator-norm-is-the-largest-singular-value]]).

[L3] The rank of a matrix is the number of its positive singular values
([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L4] A square matrix is invertible exactly when it has rank $n$
([[thm-invertible-matrix-theorem]]).

[L5] Unitary invariance and the singular-value formulas of
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]:
for orthogonal $Q,Z$ the matrices $QAZ$ and $A$ have the same singular values,
and $\lVert A\rVert_2=\sigma_1$.

## Proof

**Proof technique:** direct.

1.1 Write $A=U\Sigma V^{\mathsf T}$ as in [L1]. For every unit vector $x$, expanding in the right-singular basis gives $\lVert Ax\rVert_2^{2}=\sum_{j<n}\sigma_j^{2}\,\lvert(V^{\mathsf T}x)_j\rvert^{2}\ge\sigma_n^{2}\sum_{j<n}\lvert(V^{\mathsf T}x)_j\rvert^{2}=\sigma_n^{2}$, the last equality because $V^{\mathsf T}$ is orthogonal. [L1, algebra]

1.2 Attainment. Let $u_n$ and $v_n$ be the last columns of $U$ and $V$ from [L1], and put $E^{\ast}:=-\sigma_n\,u_nv_n^{\mathsf T}$. Then $A+E^{\ast}=U(\Sigma-\sigma_n e_ne_n^{\mathsf T})V^{\mathsf T}$ has a zero on its last diagonal position, so its smallest singular value is $0$; by [L3] its rank is at most $n-1$, and by [L4] it is singular. [L1, L3, L4, algebra]

2.1 At the last right-singular vector, $\lVert AVe_n\rVert_2=\lVert\sigma_n Ue_n\rVert_2=\sigma_n$, so the lower bound of step 1.1 is attained and $\sigma_n=\min_{\lVert x\rVert_2=1}\lVert Ax\rVert_2$, which is claim 1. [step 1.1, L1, algebra]

3.1 Lower bound on the distance. If $E$ makes $A+E$ singular then $A+E$ has rank at most $n-1$, and by [L3] its smallest singular value is $0$. Every unit vector $x$ satisfies $\lVert(A+E)x\rVert_2\ge\lVert Ax\rVert_2-\lVert Ex\rVert_2\ge\sigma_n-\lVert E\rVert_2$, using claim 1 and the operator-norm bound $\lVert Ex\rVert_2\le\lVert E\rVert_2\lVert x\rVert_2$ of [L2]. [step 2.1, L2, L3, algebra]

4.1 If $\lVert E\rVert_2<\sigma_n$ then step 3.1 gives $\lVert(A+E)x\rVert_2>0$ for every unit $x$, so the minimum of claim 1 applied to $A+E$ is positive and every singular value of $A+E$ is positive; by [L3] its rank is $n$, and by [L4] it is invertible. Hence no $E$ with $\lVert E\rVert_2<\sigma_n$ makes $A+E$ singular: the distance is at least $\sigma_n$. [step 3.1, step 2.1, L3, L4]

5.1 The rank-one matrix $u_nv_n^{\mathsf T}$ has the singular values $1,0,\dots,0$, so [L2] gives $\lVert E^{\ast}\rVert_2=\sigma_n$; combined with step 4.1, the minimum distance is exactly $\sigma_n$ and is attained, which is claim 2. [step 1.2, L2]

6.1 By [L5], $\lVert A\rVert_2=\sigma_1$; and $A^{-1}=V\Sigma^{-1}U^{\mathsf T}$ by [L1], a matrix with singular values $1/\sigma_n\ge\cdots\ge 1/\sigma_1$, so [L2] gives $\lVert A^{-1}\rVert_2=1/\sigma_n$. Hence $\kappa_2(A)=\lVert A\rVert_2\lVert A^{-1}\rVert_2=\sigma_1/\sigma_n$ by [[def-condition-number-of-a-nonsingular-linear-system]], and claim 3 follows with claim 2. [step 5.1, L1, L2, L5, algebra]

7.1 Claims 1, 2 and 3 are steps 2.1, 5.1 and 6.1. [step 2.1, step 5.1, step 6.1] ∎
