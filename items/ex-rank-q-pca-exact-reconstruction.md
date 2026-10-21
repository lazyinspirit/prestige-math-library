---
id: ex-rank-q-pca-exact-reconstruction
kind: example
title: "A rank-one centered data matrix is reconstructed exactly by rank-one PCA"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-rank-q-principal-component-analysis, thm-pca-frobenius-optimality]
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

## Example

Let

$$X=\begin{pmatrix}1&0\\0&0\\-1&0\end{pmatrix}\in\mathbb R^{3\times2},\qquad q=1.$$

The columns of $X$ already have mean zero and $X$ has rank one. The rank-one PCA frame $Q=(1,0)^T$ reconstructs $X$ exactly, so the minimum squared Frobenius reconstruction error is zero and the unique minimizing subspace is $\operatorname{span}\{(1,0)^T\}$.

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.5.1, printed pp. 534–541](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §§2.1–2.2, PDF pp. 2–4](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The stated $3\times2$ data matrix $X$ and target rank $q=1$.

[F1] Rank-$q$ PCA centers the data, minimizes $\|X_c-X_cQQ^T\|_F^2$ over $Q^TQ=I_q$, and reconstructs by $X_cQQ^T$ ([[def-rank-q-principal-component-analysis]]).

[F2] The global minimum error is the sum of squared singular values after index $q$, and minimizing subspaces are the top-$q$ right singular subspaces ([[thm-pca-frobenius-optimality]]).

## Verification

1.1 Each column of $X$ sums to zero, so $X_c=X$; multiplication gives $X^TX=\begin{pmatrix}2&0\\0&0\end{pmatrix}$, with singular values $\sqrt2$ and $0$. [given, F1, algebra]

2.1 The vector $Q=(1,0)^T$ satisfies $Q^TQ=1$, and $X_cQQ^T=X$. Therefore its reconstruction error is zero. [step 1.1, F1, algebra]

3.1 Every squared Frobenius error is nonnegative, so this zero error is the global minimum. Since $2>0$ separates the two eigenvalues of $X^TX$, [F2] also gives the unique minimizing one-dimensional subspace $\operatorname{span}\{(1,0)^T\}$. [step 2.1, F2, algebra] ∎
