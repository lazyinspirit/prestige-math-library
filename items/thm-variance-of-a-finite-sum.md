---
id: thm-variance-of-a-finite-sum
kind: theorem
title: "Variance of a finite sum as the sum of all variances and covariances"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moments-variance-and-covariance, thm-covariance-bilinearity-and-symmetry]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/mathematical-statistics-foundations-37-owner-r6-variance-thm-variance-of-a-finite-sum-repair.json
sources:
  scraped: []
  references:
    - title: "J. Matoušek and J. Vondrák, The Probabilistic Method, CMU 15-850 Fall 2020 course copy, Lemma 5.1.3, PDF pp. 24–25"
      url: "https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 5.3.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For a finite family $(X_i)_{i\in I}$ of square-integrable real random variables on one common probability space,
$$\operatorname{Var}\!\left(\sum_{i\in I}X_i\right)=\sum_{i\in I}\operatorname{Var}(X_i)+2\sum_{\{i,j\}\subseteq I}\operatorname{Cov}(X_i,X_j).$$
Equivalently, it is $\sum_{i,j\in I}\operatorname{Cov}(X_i,X_j)$. The empty sum has variance zero, and the singleton formula is the identity.
The original finite-probability-space case is included, since every real random variable there is square-integrable and the covariance/variance definitions agree with the finite centered-product/square formulas.
In the first display, the second sum is over two-element subsets of $I$.

## Facts & Assumptions

**Given:** A finite family of square-integrable real random variables $(X_i)_{i\in I}$ on one common probability space.

[L1] $\operatorname{Var}(X)=\operatorname{Cov}(X,X)$ ([[def-moments-variance-and-covariance]]).

[L2] Covariance is symmetric and bilinear in finite linear combinations ([[thm-covariance-bilinearity-and-symmetry]]).

## Proof

**Proof technique:** direct.

1.1 The finite sum is square-integrable by repeated use of $(a+b)^2\le2a^2+2b^2$. By [L1] and bilinearity, $\operatorname{Var}(\sum_iX_i)=\operatorname{Cov}(\sum_iX_i,\sum_jX_j)=\sum_{i,j}\operatorname{Cov}(X_i,X_j)$. [L1, L2]

2.1 Separate the diagonal terms, which are $\operatorname{Var}(X_i)$, from the off-diagonal ordered pairs. Symmetry pairs the latter into twice the sum over unordered pairs. [step 1.1, L1, L2, algebra]

3.1 For an empty family every sum in step 1.1 is zero, and for a singleton only its diagonal term remains. [step 1.1, step 2.1] ∎
