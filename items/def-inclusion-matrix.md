---
id: def-inclusion-matrix
kind: definition
title: "The inclusion matrix $W_{t,k}(n)$ of $t$-sets against $k$-sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binomial-coefficient, def-matrix-space, def-matrix-product-and-identity-matrix, def-finite-cardinality, thm-subset-of-a-finite-set, def-set-family-and-its-incidence-matrix, thm-sum-rule]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Definition

Let $0\le t\le k\le n$. The **inclusion matrix**

$$W_{t,k}(n)$$

is the matrix over $\mathbb{Q}$ whose rows are indexed by the $t$-element subsets
of $[n]$, whose columns are indexed by the $k$-element subsets of $[n]$, and
whose $(S,K)$ entry is

$$W_{t,k}(n)_{S,K}=\begin{cases}1,&S\subseteq K,\\[2pt]0,&S\not\subseteq K.\end{cases}$$

The rank of this matrix does not depend on the ordering of the index sets, since
changing the order only permutes rows or columns.

Two boundary cases are immediate:

$$W_{t,t}(n)=I,\qquad W_{0,k}(n)=\text{the all-ones row}.$$

The matrices compose by counting intermediate subsets:

$$W_{s,t}(n)\,W_{t,k}(n)=\binom{k-s}{t-s}\,W_{s,k}(n)\qquad(s\le t\le k\le n).$$

Indeed, the $(S,K)$ entry of the product counts the $t$-subsets $T$ with
$S\subseteq T\subseteq K$, and there are exactly $\binom{k-s}{t-s}$ of them when
$S\subseteq K$, and none otherwise.

## Remarks

- The point case $t=1$ is the only rank statement this page proves. The next
  remark records what is left open here for general $t$.
