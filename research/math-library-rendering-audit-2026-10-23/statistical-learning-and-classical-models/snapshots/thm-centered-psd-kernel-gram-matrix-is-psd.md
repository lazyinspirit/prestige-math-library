---
id: thm-centered-psd-kernel-gram-matrix-is-psd
kind: theorem
title: "Double-centering a finite positive-semidefinite Gram matrix preserves positive semidefiniteness"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-kernel-principal-component-analysis, thm-finite-centering-matrix-is-orthogonal-projector, prop-standard-coordinate-inner-products, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $n\ge1$ and let $K\in\mathbb R^{n\times n}$ be symmetric and satisfy $a^TKa\ge0$ for every $a\in\mathbb R^n$. With $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$, the centered matrix $K_c=H_nKH_n$ is symmetric and positive semidefinite. Consequently it has an orthonormal eigenbasis and all its eigenvalues are nonnegative.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.4, printed pp. 547–550, and §18.5.2, printed pp. 670–672](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §2.2, PDF pp. 3–4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** A symmetric positive-semidefinite matrix $K\in\mathbb R^{n\times n}$ and its centering matrix $H_n$.

[F1] Kernel PCA takes a symmetric matrix $K$ with $a^TKa\ge0$ for every $a$ and centers it as $K_c=H_nKH_n$ ([[alg-kernel-principal-component-analysis]]).

[F2] The finite centering matrix is symmetric ([[thm-finite-centering-matrix-is-orthogonal-projector]]).

[F3] The standard inner product on $\mathbb R^n$ is $\langle a,b\rangle=\sum_{i<n}a_ib_i$ ([[prop-standard-coordinate-inner-products]]).

[F4] In an orthonormal basis, a real matrix is self-adjoint exactly when it is symmetric ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[F5] Every finite-dimensional real self-adjoint endomorphism has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

1.1 Since $K^T=K$ and $H_n^T=H_n$ by [F1] and [F2], $K_c^T=(H_nKH_n)^T=H_nKH_n=K_c$. [F1, F2, algebra]

1.2 For every $a\in\mathbb R^n$, $a^TK_ca=(H_na)^TK(H_na)\ge0$ by the input hypothesis on $K$. Thus $K_c$ is positive semidefinite. [given, F1, F2, algebra]

2.1 The standard coordinate basis is orthonormal for [F3], so [F4] makes the symmetric matrix $K_c$ self-adjoint and [F5] gives an orthonormal eigenbasis. If $u$ is a unit eigenvector with eigenvalue $\lambda$, then $\lambda=u^TK_cu\ge0$ by step 1.2. Hence every eigenvalue is nonnegative, which makes the stated kernel-PCA eigenprocedure well-defined. [step 1.1, step 1.2, F3, F4, F5] ∎

