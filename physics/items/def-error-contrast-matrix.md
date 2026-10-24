---
id: def-error-contrast-matrix
kind: definition
title: "Error-contrast matrix for a full-rank fixed design"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-fixed-design-linear-regression-model
  - def-orthogonal-complement
justified_by:
  - lem-error-contrast-matrix-exists
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
---

## Definition

Let $X\in\mathbb R^{n\times p}$ have full column rank, with $p<n$, and let $\operatorname{col}(X)^\perp$ denote the orthogonal complement of its column space in Euclidean $\mathbb R^n$ ([[def-orthogonal-complement]]). An **error-contrast matrix** for $X$ is a matrix $K\in\mathbb R^{n\times(n-p)}$ whose columns form a basis of $\operatorname{col}(X)^\perp$. Thus $K$ has full column rank and $X^TK=0$, so $K^TY$ is an $(n-p)$-dimensional vector of linear contrasts that annihilate $X\beta$. Such a matrix exists by [[lem-error-contrast-matrix-exists]].

This column-basis convention makes the product $K^TY$ dimensionally defined. The Gaussian restricted-likelihood definition below fixes one such $K$ independently of the covariance parameter.

## Remarks

The condition $p<n$ is needed for a nonzero error-contrast space. When $p=n$, the orthogonal complement has dimension zero and this page makes no variance-likelihood claim from contrasts.
