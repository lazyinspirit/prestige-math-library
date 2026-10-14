---
id: thm-covariance-bilinearity-and-symmetry
kind: theorem
title: "Covariance is symmetric and bilinear in finite linear combinations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-linearity-of-expectation, lem-variance-and-covariance-identities]
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

Covariance is symmetric, and for finite families $(X_i)_{i\in I}$ and $(Y_j)_{j\in J}$ and real scalars $a_i,b_j$,
$$\operatorname{Cov}\!\left(\sum_{i\in I}a_iX_i,\sum_{j\in J}b_jY_j\right)=\sum_{i\in I}\sum_{j\in J}a_ib_j\operatorname{Cov}(X_i,Y_j).$$
This includes empty sums and constant summands.

## Facts & Assumptions

**Given:** Finite families and scalars as in the Statement.

[L1] Expectation is linear on finite linear combinations ([[thm-linearity-of-expectation]]).

[L2] $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ ([[lem-variance-and-covariance-identities]]).

## Proof

**Proof technique:** direct.

1.1 Commutativity of real multiplication in [L2] gives $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$. [L2, algebra]

1.2 Substitute the two finite linear combinations into [L2] and distribute their pointwise product. [L2, algebra]

2.1 Applying [L1] to step 1.2 and collecting the $a_ib_j$ terms gives the displayed double sum. [step 1.2, L1, L2, algebra]

3.1 If either index set is empty, both sides are zero; covariance with a constant is zero by [L1] and [L2]. [step 2.1, L1, L2] ∎
