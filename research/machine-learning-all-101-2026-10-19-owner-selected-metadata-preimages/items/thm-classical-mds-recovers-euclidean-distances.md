---
id: thm-classical-mds-recovers-euclidean-distances
kind: theorem
title: "Double-centering Euclidean squared distances recovers their centered Gram matrix"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-classical-multidimensional-scaling, thm-finite-centering-matrix-is-orthogonal-projector, lem-equal-gram-configurations-are-isometric, prop-standard-coordinate-inner-products, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$. For every symmetric nonnegative zero-diagonal dissimilarity matrix $D$, the matrix $B=-\frac12H_nD^{\circ2}H_n$ used by classical multidimensional scaling is symmetric and has a real orthonormal eigendecomposition, though it may have negative eigenvalues. If $D_{ij}=\|z_i-z_j\|_2$ for points $z_1,\ldots,z_n\in\mathbb R^d$, where $\|v\|_2=(\sum_{a=1}^d v_a^2)^{1/2}$, then $B=Z_cZ_c^T$ for the centered row-data matrix $Z_c=H_nZ$, so $B$ is positive semidefinite. The coordinates formed from all positive eigenvalues reproduce every pairwise distance exactly; if the requested embedding dimension is at least the number of positive eigenvalues, the truncated procedure is exact. The centered configurations obtained from $Z$ and these coordinates are related by a linear isometry between their spans, so the original configurations agree up to translation and Euclidean isometry of their affine spans.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.8, printed pp. 570–572, and §18.5.2, printed pp. 670–672](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §3, PDF pp. 4–6](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** A finite symmetric nonnegative zero-diagonal matrix $D$, its classical-MDS matrix $B$, and, in the Euclidean case, points $z_i$ with $D_{ij}=\|z_i-z_j\|_2$.

[F1] Classical MDS defines $D^{\circ2}$ entrywise and $B=-\frac12H_nD^{\circ2}H_n$ for symmetric nonnegative zero-diagonal $D$ ([[alg-classical-multidimensional-scaling]]).

[F2] The centering matrix is symmetric, annihilates $\mathbf1_n$, and maps onto the zero-sum subspace ([[thm-finite-centering-matrix-is-orthogonal-projector]]).

[F3] The standard inner product on $\mathbb R^n$ is $\langle a,b\rangle=\sum_{i<n}a_ib_i$ ([[prop-standard-coordinate-inner-products]]).

[F4] In an orthonormal basis, a real matrix is self-adjoint exactly when it is symmetric ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[F5] Every finite-dimensional real self-adjoint endomorphism has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F6] Two finite point lists with equal Gram matrices have linearly isometric spans ([[lem-equal-gram-configurations-are-isometric]]).

## Proof

1.1 For any permitted $D$, $D^{\circ2}$ is symmetric and $H_n$ is symmetric by [F2], so $B^T=B$. The standard coordinate basis is orthonormal for [F3], so [F4] makes $B$ self-adjoint and [F5] gives a real orthonormal eigendecomposition; this justifies the spectral step even when some eigenvalues are negative. [F1, F2, F3, F4, F5, algebra]

1.2 Suppose $D_{ij}=\|z_i-z_j\|_2$ and let $Z$ be the matrix with rows $z_i^T$. Put $s_i=\|z_i\|_2^2$. Expanding each squared distance with the coordinate inner product [F3] gives $D^{\circ2}=s\mathbf1_n^T+\mathbf1_ns^T-2ZZ^T$, hence $B=-\frac12H_n(s\mathbf1_n^T+\mathbf1_ns^T-2ZZ^T)H_n=H_nZZ^TH_n=Z_cZ_c^T$ because $H_n\mathbf1_n=0$ and $H_n^T=H_n$ by [F2]. For every $a$, $a^TBa=\sum_r((Z_c^Ta)_r)^2\ge0$ by the coordinate formula [F3], so $B$ is positive semidefinite; also $B\mathbf1_n=Z_cZ_c^T\mathbf1_n=0$. When $n=1$, $H_1=0$, so $Z_c=0$ and $B=0$. [given, F1, F2, F3, algebra]

2.1 In the Euclidean-distance case of step 1.2, $B$ is positive semidefinite. By [F5], choose an orthonormal eigenbasis; all eigenvalues are nonnegative, so the zero-eigenvalue terms vanish and $B=U_+\Lambda_+U_+^T$, where $U_+$ contains exactly the positive-eigenvalue eigenvectors and $\Lambda_+$ is diagonal with strictly positive entries. If there are no positive eigenvalues, this is the empty decomposition and $B=0$. The classical-MDS coordinates from all positive eigenvalues are $Y=U_+\Lambda_+^{1/2}$, so $YY^T=B$. By step 1.2, $B\mathbf1_n=0$, and each column $u$ of $U_+$ with eigenvalue $\lambda>0$ satisfies $\lambda u^T\mathbf1_n=u^TB\mathbf1_n=0$; hence the rows of $Y$ are centered. [step 1.2, F1, F5, algebra]

3.1 By [F2], row $i$ of $Z_c$ is $z_i-\bar z$, where $\bar z=n^{-1}\sum_i z_i$. For each $i,j$, the coordinate Gram identity gives $\|y_i-y_j\|_2^2=B_{ii}+B_{jj}-2B_{ij}=\|z_i-\bar z-(z_j-\bar z)\|_2^2=\|z_i-z_j\|_2^2=D_{ij}^2$. Both distances are nonnegative, so $\|y_i-y_j\|_2=D_{ij}$. The procedure retaining up to the requested dimension $q$ has the same Gram matrix when $q$ is at least the number of positive eigenvalues, so these equalities then hold for its returned coordinates. [step 2.1, F1, F2, F3, algebra]

4.1 The row configurations of $Z_c$ and $Y$ have the same Gram matrix $B$ by step 1.2 and step 2.1. Applying [F6] gives an isometry between their spans. The original rows of $Z$ differ from those of $Z_c$ by the common translation $\bar z$, so the original and embedded configurations are congruent after this translation. For a non-Euclidean $D$, step 1.1 still gives a symmetric spectral problem, but step 1.2 is unavailable and no exact-distance conclusion follows. [step 1.2, step 2.1, F6, algebra] ∎
