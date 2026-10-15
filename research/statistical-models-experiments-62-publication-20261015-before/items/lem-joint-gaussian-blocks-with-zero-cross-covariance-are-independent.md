---
id: lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent
kind: lemma
title: "Jointly Gaussian blocks with zero cross-covariance are independent, including singular blocks"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
  - cor-countable-independent-copies-exist
  - thm-grouping-independent-sigma-algebras
  - lem-measurable-functions-preserve-independence
  - def-independent-random-elements
  - def-axiom-of-choice
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
    - title: "Fan Li, STA610 Lecture 4: Maximum Likelihood Estimation and Inference for the Hierarchical Normal Model, PDF p. 3"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec4-MLE-HNM.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.3 and Appendix D"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Assume AC. Let $(U_1,U_2)$ be a jointly multivariate-normal vector with mean $(m_1,m_2)$ and covariance
$$\begin{pmatrix}S&0\\0&T\end{pmatrix},$$
where $S$ and $T$ are allowed to be singular positive-semidefinite matrices. Then the random vectors $U_1$ and $U_2$ are independent.

## Facts & Assumptions

**Given:** AC and a finite-dimensional jointly Gaussian vector with the block covariance in the Statement.

[F1] A multivariate-normal law with positive-semidefinite covariance exists, may be realized as its mean plus the covariance square root times independent standard-normal coordinates, and allows singular covariance. [[def-multivariate-normal-law]].

[F2] The nonnegative square root of a finite-dimensional nonnegative operator exists and is unique. [[thm-non-negative-square-root-exists-and-is-unique]].

[F3] Disjoint groups of an independent sigma-algebra family remain independent. [[thm-grouping-independent-sigma-algebras]].

[F4] Measurable functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]].

[F5] The multivariate-normal characteristic function uniquely determines its law, including for singular covariance. [[lem-characteristic-function-of-a-multivariate-normal-law]].

[A1] AC holds for the multivariate-normal construction. [[def-axiom-of-choice]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $S^{1/2}$ and $T^{1/2}$ be the nonnegative square roots from [F2]. The block matrix $A=\operatorname{diag}(S^{1/2},T^{1/2})$ is nonnegative and satisfies $A^2=\operatorname{diag}(S,T)$, so uniqueness in [F2] makes $A$ the nonnegative square root of the joint covariance. This argument also applies when either block is singular. [F2, algebra]

2.1 By [A1] and [F1], the joint law is the law of $(m_1,m_2)+A Z$ for a vector $Z$ with independent standard-normal coordinates. Partition those coordinates into vectors $Z_1,Z_2$ of the matching dimensions. Their sigma-algebras are independent by [F3], and the separate affine maps $m_1+S^{1/2}Z_1$ and $m_2+T^{1/2}Z_2$ remain independent by [F4]. Hence the coordinate blocks of the constructed vector are independent. [A1, F1, F3, F4, step 1.1]

3.1 Any jointly multivariate-normal vector with the stated mean and covariance has this constructed law by the uniqueness clause of [F5]. Independence is a property of the joint law, so $U_1$ and $U_2$ are independent. [A1, F5, step 2.1] ∎

## Remarks

No inverse of $S$ or $T$ is used. Positive definiteness of the full covariance is not required for this independence result.
