---
id: ex-sample-covariance-rank-deficiency-when-p-exceeds-n
kind: example
title: "Sample covariance is singular when dimension exceeds sample size"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-matrix-rank-nullity
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - def-sample-covariance-and-operator-norm-loss
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Chapter 4, Section 4.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

Let $X_1,\ldots,X_n\in\mathbb R^p$ be any observations and let $\widehat\Sigma^\ast$ be their sample-centered covariance from [[def-sample-covariance-and-operator-norm-loss]].

## Facts & Assumptions

**Given:** Integers $n\ge1$, $p>n$, and observations $X_1,\ldots,X_n\in\mathbb R^p$.

[F1] The sample-centered covariance is $n^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^{\mathsf T}$, with $\bar X=n^{-1}\sum_iX_i$ ([[def-sample-covariance-and-operator-norm-loss]]).

[F2] For an $m\times p$ matrix $A$, $\operatorname{rank}(A)+\dim N(A)=p$ ([[cor-matrix-rank-nullity]]).

[F3] Matrix rank is the dimension of the image and the nullspace is the set mapped to zero ([[def-row-space-column-space-nullspace-and-matrix-ranks]]).

## Proof

1.1 Let $C$ be the $n\times p$ matrix with rows $(X_i-\bar X)^{\mathsf T}$. Since $\sum_i(X_i-\bar X)=0$, every column of $C$ lies in $\ker(\mathbf1_n^{\mathsf T})$. The functional $\mathbf1_n^{\mathsf T}:\mathbb R^n\to\mathbb R$ is nonzero because $n\ge1$, so its rank is one and [F2] gives kernel dimension $n-1$. Thus $\operatorname{rank}(C)\le n-1$. [F1, F2, F3, given, algebra]

2.1 By [F1], $\widehat\Sigma^\ast=C^{\mathsf T}C/n$. If $v\in N(C)$, then $C^{\mathsf T}Cv=0$, so $N(C)\subseteq N(C^{\mathsf T}C)$. The matrices have the same $p$-dimensional domain; [F2] and this nullspace inclusion give $\operatorname{rank}(C^{\mathsf T}C)\le\operatorname{rank}(C)\le n-1<p$. Multiplication by $1/n\ne0$ does not change rank, so $\widehat\Sigma^\ast$ is singular. [F1, F2, F3, step 1.1, algebra] ∎
