---
id: prop-poisson-nmf-factorization-invariances
kind: proposition
title: "Positive component rescaling and permutation preserve an NMF rate matrix"
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
      locator: "§14.6, printed pp. 553–555"
    - title: "Daniel D. Lee and H. Sebastian Seung, Algorithms for Non-negative Matrix Factorization, NIPS 2000"
      url: "https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf"
      locator: "§2, PDF pp. 1–2"
---

## Statement

Let $W\in[0,\infty)^{n\times r}$ and $H\in[0,\infty)^{r\times p}$. For any positive scalars $c_1,\ldots,c_r$, replacing column $k$ of $W$ by $c_kW_{\cdot k}$ and row $k$ of $H$ by $c_k^{-1}H_{k\cdot}$ leaves $WH$ unchanged. For any permutation $\pi$ of $\{1,\ldots,r\}$, replacing $W_{\cdot k}$ by $W_{\cdot\pi(k)}$ and $H_{k\cdot}$ by $H_{\pi(k)\cdot}$ also leaves $WH$ unchanged. Therefore both transformations preserve every Poisson rate and the corresponding likelihood.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.6](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Lee and Seung, §2](https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf)

## Facts & Assumptions

**Given:** Nonnegative factor matrices $W,H$ and positive component scales $c_1,\ldots,c_r$ or a permutation $\pi$.

[F1] [[def-poisson-nmf-model]]: the rate matrix is the matrix product $WH$.

## Proof

1.1 For the rescaled factors, each entry is $(W'H')_{ij}=\sum_{k=1}^r(c_kW_{ik})(c_k^{-1}H_{kj})=\sum_{k=1}^rW_{ik}H_{kj}=(WH)_{ij}$. Thus every rate is unchanged. [F1, given, algebra]

2.1 For the permuted factors, $(W''H'')_{ij}=\sum_{k=1}^rW_{i,\pi(k)}H_{\pi(k),j}=(WH)_{ij}$ because $\pi$ reorders the finite sum. Equal rate matrices give the same independent Poisson law and likelihood by [F1]. [F1, step 1.1, algebra] ∎
