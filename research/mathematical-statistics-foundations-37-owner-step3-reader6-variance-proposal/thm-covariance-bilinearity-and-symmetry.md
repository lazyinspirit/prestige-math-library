---
id: thm-covariance-bilinearity-and-symmetry
kind: theorem
title: "Covariance is symmetric and bilinear in finite linear combinations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-expectation-linearity-monotonicity-and-modulus-bound, lem-variance-and-covariance-identities-for-random-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Let $(X_i)_{i\in I}$ and $(Y_j)_{j\in J}$ be finite families of square-integrable real random variables on one common probability space. Then covariance is symmetric, and for real scalars $a_i,b_j$,
$$\operatorname{Cov}\!\left(\sum_{i\in I}a_iX_i,\sum_{j\in J}b_jY_j\right)=\sum_{i\in I}\sum_{j\in J}a_ib_j\operatorname{Cov}(X_i,Y_j).$$
This includes empty sums and constant summands. On a finite probability space all real random variables are square-integrable, so the original finite-space case is included with the same centered-product covariance.

## Facts & Assumptions

**Given:** The square-integrable families on one common probability space and real scalars in the Statement.

[L1] Expectation is linear on finite linear combinations ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[L2] $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ ([[lem-variance-and-covariance-identities-for-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Each variable is integrable because $2|X|\le1+X^2$ on a probability space, and every product of two such variables is integrable because $2|XY|\le X^2+Y^2$. Finite real linear combinations remain square-integrable by repeated use of $(a+b)^2\le2a^2+2b^2$. Thus all covariances and expectations below are defined and finite. Commutativity of real multiplication in [L2] gives $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$. [L2, algebra]

2.1 The finite linear combinations and their product have the required integrability by step 1.1. Substitute them into [L2] and distribute their pointwise product. [step 1.1, L2, algebra]

3.1 Applying [L1] to step 2.1 and collecting the $a_ib_j$ terms gives the displayed double sum. [step 2.1, L1, L2, algebra]

4.1 If either index set is empty, both sides are zero; covariance with a constant is zero by [L1] and [L2]. [step 3.1, L1, L2] ∎
