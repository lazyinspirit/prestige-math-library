---
id: cor-variance-adds-for-pairwise-independent-random-variables
kind: corollary
title: "Variance adds for every finite pairwise-independent family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-expectation-of-products-of-independent-random-variables, thm-variance-of-a-finite-sum]
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
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 6.4"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 6.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

If $(X_i)_{i\in I}$ is a finite pairwise-independent family, then
$$\operatorname{Var}\!\left(\sum_{i\in I}X_i\right)=\sum_{i\in I}\operatorname{Var}(X_i).$$
Pairwise independence, rather than mutual independence, is sufficient.

## Facts & Assumptions

**Given:** A finite pairwise-independent family $(X_i)_{i\in I}$.

[L1] For two independent random variables, expectation of their product is the product of their expectations ([[thm-expectation-of-products-of-independent-random-variables]]).

[L2] Variance of a finite sum is the sum of variances and twice all pairwise covariances ([[thm-variance-of-a-finite-sum]]).

## Proof

**Proof technique:** direct.

1.1 For distinct $i,j$, pairwise independence and [L1] give $\mathbb E[X_iX_j]=\mathbb E[X_i]\mathbb E[X_j]$, so $\operatorname{Cov}(X_i,X_j)=0$. [L1, algebra]

2.1 Substitute step 1.1 into [L2]; every off-diagonal term vanishes, leaving the displayed formula. The empty and singleton cases are included. [step 1.1, L2, algebra] ∎
