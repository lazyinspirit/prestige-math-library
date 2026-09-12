---
id: def-multivariate-normal-law
kind: definition
title: Multivariate normal law, including singular covariance
deps: ["lem-characteristic-function-of-a-normal-law", "thm-non-negative-square-root-exists-and-is-unique", "cor-countable-independent-copies-exist", "lem-ac-supplies-sequential-choices-for-probability-constructions", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-uniqueness-of-a-law-from-its-characteristic-function", "thm-factorization-of-expectations-for-independent-variables", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-law-or-distribution-of-a-random-element", "def-standard-normal-and-normal-laws", "def-moments-variance-and-covariance", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Norris, Probability and Measure, Sections 8.1-8.2
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
    - title: 'Durrett, Probability: Theory and Examples, Section 3.10'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Definition

Assume AC and let $d\ge1$ be finite. For $m\in\mathbb R^d$ and a real symmetric positive semidefinite matrix $\Sigma$, a Borel probability law is denoted $N_d(m,\Sigma)$ when a vector X with that law satisfies $u\cdot X\sim N(u\cdot m,u^T\Sigma u)$ for every $u\in\mathbb R^d$. Such a law exists, has mean m and covariance Sigma, and can be realized as $m+\Sigma^{1/2}Z$ with independent standard-normal coordinates. Singular Sigma is allowed. Uniqueness will be proved in the following characteristic-function lemma.

## Facts & Assumptions

[F1] Normal laws have their specified means, variances and characteristic functions. [[lem-characteristic-function-of-a-normal-law]].

[F2] A finite-dimensional positive semidefinite symmetric operator has a positive semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]].

[F3] Independent standard-normal coordinates can be realized under DC and countable choice. [[cor-countable-independent-copies-exist]].

[F4] AC supplies DC and countable choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F5] Finite independent linear combinations have product transforms. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F6] Under AC equality of scalar characteristic functions determines scalar laws. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F7] Integrable products in distinct independent coordinates factor. [[thm-factorization-of-expectations-for-independent-variables]].

[F8] Finite linear combinations commute with expectations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F9] A law is the probability pushforward of a measurable random element. [[def-law-or-distribution-of-a-random-element]].

## Proof

**Given:** Assume AC and let $d\ge1$ be finite. For $m\in\mathbb R^d$ and a real symmetric positive semidefinite matrix $\Sigma$, a Borel probability law is denoted $N_d(m,\Sigma)$ when a vector X with that law satisfies $u\cdot X\sim N(u\cdot m,u^T\Sigma u)$ for every $u\in\mathbb R^d$. Such a law exists, has mean m and covariance Sigma, and can be realized as $m+\Sigma^{1/2}Z$ with independent standard-normal coordinates. Singular Sigma is allowed. Uniqueness will be proved in the following characteristic-function lemma.

1.1 For any square-integrable vector X, covariance entries $\Sigma_{ij}=\mathbb E[(X_i-m_i)(X_j-m_j)]$ exist because $2|ab|\le a^2+b^2$. They are symmetric. Finite linearity gives $u^T\Sigma u=\mathbb E(\sum_i u_i(X_i-m_i))^2\ge0$, so covariance matrices are positive semidefinite. Conversely let a symmetric positive semidefinite Sigma be given and take its nonnegative symmetric square root A by [F2], so $AA^T=A^2=\Sigma$. [F2, F8]

2.1 By [F3]–[F4], AC realizes d independent standard normals $Z_1,\ldots,Z_d$, each of mean zero and second moment one by [F1]. Define $X=m+AZ$. Coordinate linear combinations are measurable, so X is a Borel random vector and its pushforward is a probability by [F9]. For any u and real t, [F5] and [F1] give $\mathbb E e^{it u\cdot X}=e^{it u\cdot m}\prod_j e^{-t^2(A^Tu)_j^2/2}=e^{it u\cdot m-t^2u^T\Sigma u/2}$. This equals the characteristic function of $N(u\cdot m,u^T\Sigma u)$ by [F1]; [F6] gives equality of scalar laws. Thus the required projection condition holds, including u=0 and all null directions. [step 1.1, F1, F3, F4, F5, F6, F9]

3.1 Finite linearity gives $\mathbb EX=m$. By [F7], $\mathbb EZ_iZ_j=0$ for i different from j, and [F1] gives $\mathbb EZ_i^2=1$. Hence the covariance of AZ is $A I A^T=\Sigma$, with every product integrable by the bound in step 1.1. If Sigma=0 then A=0 and the law is the point mass at m; no inverse or density is required even when only some directions are null. For d=1 the construction agrees with the scalar affine normal. If dimension zero is admitted, use the unique law on the singleton empty tuple instead. AC is spent in the standard-normal construction, independent-copy realization and scalar uniqueness supplier. [step 1.1, step 2.1, F1, F7, F8] ∎

