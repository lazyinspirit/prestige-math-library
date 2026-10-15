---
id: lem-error-contrast-matrix-exists
kind: lemma
title: "A full-rank error-contrast matrix exists when n exceeds p"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-error-contrast-matrix
  - cor-double-orthogonal-complement-and-dimension
  - def-fixed-design-linear-regression-model
  - def-linear-basis
  - def-dimension
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 4: Maximum Likelihood Estimation and Inference for the Hierarchical Normal Model, PDF pp. 4–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec4-MLE-HNM.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

For every full-column-rank $X\in\mathbb R^{n\times p}$ with $p<n$, there exists an error-contrast matrix $K\in\mathbb R^{n\times(n-p)}$ as defined in [[def-error-contrast-matrix]].

## Facts & Assumptions

**Given:** $X\in\mathbb R^{n\times p}$ has full column rank and $p<n$.

[F1] For every subspace $W$ of finite-dimensional $\mathbb R^n$, $\dim W+\dim W^\perp=n$. [[cor-double-orthogonal-complement-and-dimension]].

[F2] Full column rank means the columns of $X$ are linearly independent; a basis is an independent spanning set, and finite dimension is the size of a finite basis. [[def-fixed-design-linear-regression-model]], [[def-linear-basis]], [[def-dimension]].

[F3] An error-contrast matrix has full-column-rank columns forming $\operatorname{col}(X)^\perp$. [[def-error-contrast-matrix]].

[A1] The columns of $X$ are linearly independent.

## Proof

**Given:** A full-column-rank $X\in\mathbb R^{n\times p}$ with $p<n$.

1.1 Set $W=\operatorname{col}(X)$. By [A1] and [F2], the columns of $X$ form a basis of $W$, so $\dim W=p$. Applying [F1] gives $\dim W^\perp=n-p$; by [F2], this means $W^\perp$ has a basis with $n-p$ elements. [A1, F1, F2]

2.1 Since $W^\perp$ has dimension $n-p$, [F2] gives a basis $k_1,\ldots,k_{n-p}$ of $W^\perp$. Put these vectors into the columns of $K$. The columns are independent and span $W^\perp$, so $K$ has full column rank. [F2, step 1.1, choose]

3.1 Every column $k_\ell$ is orthogonal to each column of $X$, hence $X^T k_\ell=0$. Thus $X^T K=0$ and $K$ satisfies the error-contrast definition [F3]. This proves existence. [F3, step 2.1] ∎