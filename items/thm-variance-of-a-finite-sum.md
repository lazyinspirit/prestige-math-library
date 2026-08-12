---
id: thm-variance-of-a-finite-sum
kind: theorem
title: "Variance of a finite sum as the sum of all variances and covariances"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-variance-and-covariance, thm-covariance-bilinearity-and-symmetry]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 6.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For a finite family $(X_i)_{i\in I}$,
$$\operatorname{Var}\!\left(\sum_{i\in I}X_i\right)=\sum_{i\in I}\operatorname{Var}(X_i)+2\sum_{\{i,j\}\subseteq I}\operatorname{Cov}(X_i,X_j).$$
Equivalently, it is $\sum_{i,j\in I}\operatorname{Cov}(X_i,X_j)$. The empty sum has variance zero, and the singleton formula is the identity.
In the first display, the second sum is over two-element subsets of $I$.

## Facts & Assumptions

**Given:** A finite family of random variables $(X_i)_{i\in I}$.

[L1] $\operatorname{Var}(X)=\operatorname{Cov}(X,X)$ ([[def-variance-and-covariance]]).

[L2] Covariance is symmetric and bilinear in finite linear combinations ([[thm-covariance-bilinearity-and-symmetry]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and bilinearity, $\operatorname{Var}(\sum_iX_i)=\operatorname{Cov}(\sum_iX_i,\sum_jX_j)=\sum_{i,j}\operatorname{Cov}(X_i,X_j)$. [L1, L2]

2.1 Separate the diagonal terms, which are $\operatorname{Var}(X_i)$, from the off-diagonal ordered pairs. Symmetry pairs the latter into twice the sum over unordered pairs. [step 1.1, L1, L2, algebra]

3.1 For an empty family every sum in step 1.1 is zero, and for a singleton only its diagonal term remains. [step 1.1, step 2.1] ∎
