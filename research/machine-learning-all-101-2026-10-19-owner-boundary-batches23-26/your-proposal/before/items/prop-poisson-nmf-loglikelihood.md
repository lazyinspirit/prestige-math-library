---
id: prop-poisson-nmf-loglikelihood
kind: proposition
title: "Independent Poisson counts have the stated NMF log-likelihood"
status: draft
dependency_level: 1
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-nmf-model]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.6, printed p. 553, equation (14.73)"
    - title: "Daniel D. Lee and H. Sebastian Seung, Algorithms for Non-negative Matrix Factorization, NIPS 2000"
      url: "https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf"
      locator: "§3, PDF p. 2, generalized Kullback–Leibler objective"
---

## Statement

For an admissible count matrix $X=(x_{ij})$ and a Poisson NMF parameter with rates $\lambda_{ij}=(WH)_{ij}$, the joint log-likelihood is

$$\log L(W,H)=\sum_{i=1}^n\sum_{j=1}^p\bigl[x_{ij}\log\lambda_{ij}-\lambda_{ij}-\log(x_{ij}!)\bigr].$$

After dropping the data-only term $-\sum_{i,j}\log(x_{ij}!)$, the objective is

$$\ell(W,H)=\sum_{i=1}^n\sum_{j=1}^p\bigl[x_{ij}\log\lambda_{ij}-\lambda_{ij}\bigr].$$

Use $0\log 0=0$; if $x_{ij}>0$ and $\lambda_{ij}=0$, the log-likelihood is $-\infty$.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.6](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Lee and Seung, §3](https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf)

## Facts & Assumptions

**Given:** An admissible observed count matrix, nonnegative factors $W,H$, and rates $\lambda_{ij}=(WH)_{ij}$.

[F1] [[def-poisson-nmf-model]]: the cell counts are mutually independent; a positive-rate cell has Poisson mass $e^{-\lambda}\lambda^m/m!$, and a zero-rate cell is concentrated at zero.

## Proof

1.1 When all rates are positive, [F1] and independence give joint likelihood $L(W,H)=\prod_{i,j} e^{-\lambda_{ij}}\lambda_{ij}^{x_{ij}}/x_{ij}!$. Taking logarithms and using $\log\prod a_{ij}=\sum\log a_{ij}$ gives the displayed formula. [F1, given, algebra]

2.1 If $\lambda_{ij}=0$, [F1] gives cell likelihood $1$ when $x_{ij}=0$ and $0$ when $x_{ij}>0$; their log-likelihoods are respectively $0$ and $-\infty$, exactly the stated conventions. The factorial term depends only on the fixed data, so removing it leaves the same maximizing objective in $W,H$. [F1, step 1.1, algebra] ∎
