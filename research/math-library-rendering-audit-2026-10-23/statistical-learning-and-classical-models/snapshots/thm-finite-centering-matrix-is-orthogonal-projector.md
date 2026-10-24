---
id: thm-finite-centering-matrix-is-orthogonal-projector
kind: theorem
title: "The finite centering matrix is the orthogonal projection onto the zero-sum subspace"
status: published
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-centering-matrix, prop-standard-coordinate-inner-products]
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

For $n\ge1$, let $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$. Then $H_n^T=H_n$, $H_n^2=H_n$, $H_n\mathbf1_n=0$, and for each $v\in\mathbb R^n$, $H_nv=v-(n^{-1}\mathbf1_n^Tv)\mathbf1_n$. Thus $H_n$ is the orthogonal projection onto $\{v\in\mathbb R^n:\mathbf1_n^Tv=0\}$.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.1, printed pp. 534–541](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §2.2, PDF p. 4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** An integer $n\ge1$ and $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$.

[F1] The finite centering matrix is $H_n=I_n-n^{-1}\mathbf1_n\mathbf1_n^T$, and it acts by subtracting the mean coordinate times $\mathbf1_n$ ([[def-finite-centering-matrix]]).

[F2] The standard inner product on $\mathbb R^n$ is $\langle u,v\rangle=\sum_{i<n}u_iv_i$ ([[prop-standard-coordinate-inner-products]]).

## Proof

1.1 The matrix $\mathbf1_n\mathbf1_n^T$ is symmetric, so the formula in [F1] gives $H_n^T=H_n$. Also $\mathbf1_n^T\mathbf1_n=n$, and hence $H_n\mathbf1_n=\mathbf1_n-n^{-1}\mathbf1_n n=0$. [given, F1, algebra]

2.1 Writing $J=\mathbf1_n\mathbf1_n^T$, one has $J^2=\mathbf1_n(\mathbf1_n^T\mathbf1_n)\mathbf1_n^T=nJ$, so $H_n^2=(I_n-J/n)^2=I_n-2J/n+J^2/n^2=I_n-J/n=H_n$. The formula for $H_nv$ in [F1] shows that its image is zero-sum; if $\mathbf1_n^Tv=0$, then $H_nv=v$. For any $v$, the residual $v-H_nv=(n^{-1}\mathbf1_n^Tv)\mathbf1_n$ is orthogonal to every zero-sum vector by [F2]. Hence $H_nv$ is the orthogonal projection of $v$ onto the zero-sum subspace. [step 1.1, F1, F2, algebra] ∎
