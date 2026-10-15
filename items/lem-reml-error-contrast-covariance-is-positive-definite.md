---
id: lem-reml-error-contrast-covariance-is-positive-definite
kind: lemma
title: "The REML error-contrast covariance is positive definite"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-error-contrast-matrix
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

Let $X\in\mathbb R^{n\times p}$ have full column rank with $p<n$, let $K\in\mathbb R^{n\times(n-p)}$ be an error-contrast matrix for $X$, and let $V\in\mathbb R^{n\times n}$ be symmetric positive definite. Then $K^TVK$ is symmetric positive definite. No Gaussian assumption is needed for this matrix claim.

## Facts & Assumptions

**Given:** $V\in\mathbb R^{n\times n}$ is symmetric positive definite and $K\in\mathbb R^{n\times(n-p)}$ has full column rank.

[F1] An error-contrast matrix has full column rank and columns spanning $\operatorname{col}(X)^\perp$. [[def-error-contrast-matrix]].

[A1] The matrix $V$ is symmetric positive definite.

## Proof

**Given:** The full-rank design, its error-contrast matrix, and a symmetric positive-definite $V$.

1.1 The matrix $K^TVK$ is symmetric because $V$ is symmetric. [A1, algebra]

1.2 Let $a\in\mathbb R^{n-p}$ be nonzero. By [F1], $K$ has full column rank, so $Ka\ne0$. Therefore $a^TK^TVKa=(Ka)^TV(Ka)>0$ by positive definiteness of $V$. Thus $K^TVK$ is positive definite. [F1, A1, algebra]

2.1 Steps 1.1 and 1.2 prove symmetry and strict positivity of the quadratic form for every nonzero $a$, which is exactly positive definiteness of $K^TVK$. [step 1.1, step 1.2] ∎