---
id: lem-euclidean-linear-maps-have-matrices-and-are-bounded
kind: lemma
title: "Every Euclidean linear map has a unique matrix and satisfies $\\|Lh\\|_2\\le K\\|h\\|_2$ for some $K\\ge0$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-linear-map, lem-standard-basis-of-f-n, def-euclidean-inner-product, def-norm-and-normed-space, def-finite-sum, lem-finite-sum-laws, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

For every linear $L:\mathbb R^m\to\mathbb R^n$ there is a unique matrix $A=(a_{ij})_{i<n,j<m}$ such that $(Lh)_i=\sum_{j<m}a_{ij}h_j$. Moreover there is $K\ge0$ with $\|Lh\|_2\le K\|h\|_2$ for every $h$.

## Facts & Assumptions

**Given:** A Euclidean linear map $L:\mathbb R^m\to\mathbb R^n$.

[L1] The coordinate list of $x\in F^n$ with respect to the ordered basis $e$ is its ordinary coordinate list, and $x=\sum_{j<n}x_je_j$ ([[lem-standard-basis-of-f-n]]).

[L2] The Euclidean norm of $x$ is $\|x\|_2=\sqrt{\sum_{i<n}x_i^2}$, and it is a norm ([[def-euclidean-inner-product]]).

[L3] Cauchy--Schwarz gives $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** direct.

1.1 Put $a_{ij}:=(L e_j)_i$. By [L1] and linearity, $Lh=L(\sum_{j<m}h_je_j)=\sum_{j<m}h_jLe_j$, so $(Lh)_i=\sum_{j<m}a_{ij}h_j$. [L1, L2]

2.1 The columns $Le_j$ determine every value in step 1.1, and evaluating the displayed formula at $e_j$ shows that every representing matrix has exactly these entries; thus the matrix is unique. [step 1.1, L2, algebra]

3.1 Let $K=(\sum_{i<n,j<m}a_{ij}^2)^{1/2}$. Cauchy--Schwarz [L3] in each row and summing gives $\|Lh\|_2^2\le K^2\|h\|_2^2$, hence $\|Lh\|_2\le K\|h\|_2$. [step 1.1, step 2.1, L3] ∎
