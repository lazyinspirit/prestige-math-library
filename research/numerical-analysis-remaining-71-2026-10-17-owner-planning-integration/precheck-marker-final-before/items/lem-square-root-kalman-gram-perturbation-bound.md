---
id: lem-square-root-kalman-gram-perturbation-bound
kind: lemma
title: "A factor perturbation gives an explicit Gram-matrix error"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§2, equations (3)–(7), Gram matrices of concatenated factors"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §3.3.1, factor products represent nonnegative covariance matrices"
verification:
  precheck: pending
---

## Statement

Let $G,E\in\mathbb R^{m\times n}$ and set $\widehat G=G+E$. Then
$$\|\widehat G\widehat G^T-GG^T\|_F \le 2\|G\|_F\|E\|_F+\|E\|_F^2.$$
The estimate is valid for all ranks, including $G=0$ and rank-deficient
factors.

## Facts & Assumptions

**Given:** Real matrices $G,E$ of the same finite dimensions.

[F1] The Frobenius norm is the Euclidean norm of the matrix entries, so it
is invariant under transpose. [[def-frobenius-matrix-norm]]

[F2] The operator norm is the maximum stretch of a unit vector, and the
Frobenius norm is the square root of the sum of squared singular values;
therefore $\|A\|_2\le\|A\|_F$ for every real matrix $A$.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Expanding $\widehat G\widehat G^T=(G+E)(G+E)^T$ gives $$\widehat G\widehat G^T-GG^T=GE^T+EG^T+EE^T.$$ [given, algebra]

2.1 For any compatible matrices $A,B$, applying the definition of the operator norm to each column gives $$\|AB\|_F^2=\sum_j\|ABe_j\|_2^2 \le \|A\|_2^2\sum_j\|Be_j\|_2^2 =\|A\|_2^2\|B\|_F^2 \le \|A\|_F^2\|B\|_F^2.$$ Thus $\|GE^T\|_F,\|EG^T\|_F\le\|G\|_F\|E\|_F$ and $\|EE^T\|_F\le\|E\|_F^2$. The triangle inequality applied to step 1.1 proves the stated estimate. [F1, F2, step 1.1, algebra] ∎

