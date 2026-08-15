---
id: def-power-sum-and-complete-homogeneous-symmetric-polynomials
kind: definition
title: "Power sums $p_k$ and complete homogeneous symmetric polynomials $h_k$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-polynomial, def-group-power]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Sections 7.1-7.2"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Definition

For $k\ge1$, the **$k$-th power-sum symmetric polynomial** is

$$p_k:=x_1^k+\cdots+x_n^k.$$

For $k\ge0$, the **$k$-th complete homogeneous symmetric polynomial** is

$$h_k:=\sum_{a_1+\cdots+a_n=k}x_1^{a_1}\cdots x_n^{a_n}.$$

Thus $h_0=1$, while for $n=0$ one has $h_k=0$ when $k>0$. Both families are fixed by every permutation of the variables.
