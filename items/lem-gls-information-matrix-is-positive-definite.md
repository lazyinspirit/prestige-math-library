---
id: lem-gls-information-matrix-is-positive-definite
kind: lemma
title: "The GLS information matrix is positive definite"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-known-covariance-generalized-least-squares-estimator
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Fan Li, STA610 Lecture 2: Two Solutions—GLS and Cluster-Robust Standard Errors, PDF p. 2"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture2_GLS_and_ClusterRobustSE.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.5.1"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

If $X\in\mathbb R^{n\times p}$ has full column rank and $V\in\mathbb R^{n\times n}$ is symmetric positive definite, then $X^TV^{-1}X$ is symmetric positive definite. In particular it is invertible.

## Facts & Assumptions

**Given:** The full-column-rank design $X$ and known positive-definite covariance $V$ in [[def-known-covariance-generalized-least-squares-estimator]].

[F1] Every real symmetric positive-definite matrix has a Cholesky factorization $V=LL^T$ with $L$ invertible. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].

[A1] $X$ has full column rank, and $V$ is symmetric positive definite.

## Proof

**Given:** $X\in\mathbb R^{n\times p}$ has full column rank and $V$ is positive definite.

1.1 By [A1] and [F1], write $V=LL^T$ with $L$ invertible. Hence $V^{-1}=L^{-T}L^{-1}$ and $V^{-1}$ is symmetric. [A1, F1, algebra]

2.1 For any nonzero $c\in\mathbb R^p$, full column rank gives $Xc\ne0$, so $L^{-1}Xc\ne0$. Therefore $c^TX^TV^{-1}Xc=(L^{-1}Xc)^T(L^{-1}Xc)>0$. The matrix is symmetric by step 1.1, proving positive definiteness and invertibility. [A1, step 1.1, algebra] ∎