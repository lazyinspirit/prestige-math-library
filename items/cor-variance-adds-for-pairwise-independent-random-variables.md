---
id: cor-variance-adds-for-pairwise-independent-random-variables
kind: corollary
title: "Variance adds for every finite pairwise-independent family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-expectation-of-products-of-independent-random-variables, lem-variance-and-covariance-identities-for-random-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/mathematical-statistics-foundations-37-owner-e28-cor-variance-adds-for-pairwise-independent-random-variables-repair.json
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 6.4"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 6.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

If $(X_i)_{i\in I}$ is a finite pairwise-independent family of square-integrable real random variables on a common probability space, then
$$\operatorname{Var}\!\left(\sum_{i\in I}X_i\right)=\sum_{i\in I}\operatorname{Var}(X_i).$$
Pairwise independence, rather than mutual independence, is sufficient. In particular, the original finite-probability-space case is included, with pairwise atom independence as in the finite-valued convention. The empty sum has variance zero.

## Facts & Assumptions

**Given:** A finite pairwise-independent family $(X_i)_{i\in I}$ of square-integrable real random variables on one probability space.

[L1] Expectations of products of independent integrable real random variables factor; the finite-valued atom-independence convention is included. ([[thm-expectation-of-products-of-independent-random-variables]])

[L2] For square-integrable real random variables, covariance equals $\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$, is symmetric and bilinear on finite linear combinations, and variance equals the self-covariance. These identities agree with the original finite-space definitions. ([[lem-variance-and-covariance-identities-for-random-variables]])

## Proof

**Proof technique:** direct.

1.1 Each $X_i$ is integrable because $2|X_i|\le1+X_i^2$ and the measure has total mass one. For distinct $i,j$, pairwise independence and [L1] give $\mathbb E[X_iX_j]=\mathbb E[X_i]\mathbb E[X_j]$, so [L2] gives $\operatorname{Cov}(X_i,X_j)=0$. [given, L1, L2, algebra]

2.1 The finite sum $S=\sum_{i\in I}X_i$ is square-integrable: repeated use of $(a+b)^2\le2a^2+2b^2$ gives an integrable bound for $S^2$. By [L2], $$\operatorname{Var}(S)=\operatorname{Cov}(S,S)=\sum_{i,j\in I}\operatorname{Cov}(X_i,X_j)=\sum_{i\in I}\operatorname{Var}(X_i),$$ where step 1.1 removes all off-diagonal terms. The empty sum is the constant zero, and the singleton case is the identity. [step 1.1, L2, algebra] ∎
