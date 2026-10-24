---
id: lem-reml-error-contrast-basis-change-is-parameter-free
kind: lemma
title: "Changing an error-contrast basis changes the REML likelihood by a constant"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-error-contrast-matrix
  - def-restricted-maximum-likelihood-error-contrasts
  - thm-rank-nullity
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
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

Let $X\in\mathbb R^{n\times p}$ have full column rank with $p<n$, and let $K,K'\in\mathbb R^{n\times(n-p)}$ be two error-contrast matrices for $X$. For every covariance parameter $\theta$ in [[def-restricted-maximum-likelihood-error-contrasts]], there is an invertible matrix $A\in\mathbb R^{(n-p)\times(n-p)}$, independent of $\theta$, such that $K'=KA$ and
$$L_R^{K'}(\theta;y)=|\det A|^{-1}L_R^K(\theta;y)$$
for every response vector $y$. Thus changing the fixed contrast basis multiplies the likelihood by a positive factor independent of the covariance parameter and leaves its maximizers unchanged.

## Facts & Assumptions

**Given:** The full-rank fixed design, two error-contrast bases for the same design, and the Gaussian REML likelihoods defined from them.

[F1] An error-contrast matrix has columns forming a basis of $\operatorname{col}(X)^\perp$. [[def-error-contrast-matrix]].

[F2] For a fixed error-contrast matrix $K$, the restricted likelihood is the Gaussian density with argument $K^Ty$ and covariance $K^TV_\theta K$. [[def-restricted-maximum-likelihood-error-contrasts]].

[F3] Determinants are multiplicative and invariant under transpose. [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]].

[F4] For a linear map on a finite-dimensional space, dimension of kernel plus rank equals the dimension of the domain. [[thm-rank-nullity]].

[F5] A real square matrix is invertible exactly when its determinant is nonzero. [[thm-real-square-matrix-invertible-iff-determinant-nonzero]].

## Proof

**Given:** $K$ and $K'$ are fixed bases of the same $(n-p)$-dimensional contrast space.

1.1 Each column of $K'$ lies in the span of the columns of $K$, so there is a matrix $A$ with $K'=KA$. If $Ac=0$, then $K'c=0$; the full column rank of $K'$ gives $c=0$. Thus $A$ is injective. By [F4], $A$ has full rank and is surjective, so it is invertible; [F5] gives $\det A\ne0$. [F1, F4, F5, algebra]

2.1 Put $q=K^Ty$ and $S_\theta=K^TV_\theta K$. Then $K'^Ty=A^Tq$ and $K'^TV_\theta K'=A^TS_\theta A$. Multiplication verifies $(A^TS_\theta A)^{-1}=A^{-1}S_\theta^{-1}A^{-T}$, so the two Gaussian quadratic forms are equal. By [F3], $\det(A^TS_\theta A)=(\det A)^2\det(S_\theta)$. [F2, F3, step 1.1, algebra]

3.1 Substitution into the two densities in [F2] leaves the exponential terms equal and changes the determinant prefactor by $|\det A|^{-1}$. The matrix $A$ depends only on the two fixed bases, not on $\theta$, so this factor is positive and parameter-independent. Therefore the likelihood maximizers are the same. [F2, step 1.1, step 2.1, algebra] ∎

## Remarks

The numerical likelihood value depends on the chosen contrast coordinates, while the maximizing covariance parameters do not. The result does not compare different fixed-effect designs.
