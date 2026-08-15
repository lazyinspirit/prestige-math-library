---
id: def-symmetric-polynomial
kind: definition
title: "Symmetric polynomials as the invariants of variable permutations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-multivariate-polynomial-ring-by-iteration, def-symmetric-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Sections 7.1-7.2"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $R[x_1,\ldots,x_n]$ be the iterated polynomial ring. Every permutation $\sigma\in\operatorname{Sym}(\{1,\ldots,n\})$ acts on it by

$$\sigma\cdot f(x_1,\ldots,x_n)=f(x_{\sigma(1)},\ldots,x_{\sigma(n)}).$$

A polynomial $f\in R[x_1,\ldots,x_n]$ is **symmetric** when $\sigma\cdot f=f$ for every permutation $\sigma$. The symmetric polynomials form the fixed subset

$$R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}:=\{f:\sigma\cdot f=f\text{ for every }\sigma\in\operatorname{Sym}_n\}.$$

For $n=0$ this means the coefficient ring $R$ itself.
