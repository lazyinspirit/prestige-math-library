---
id: prop-vandermonde-square-is-symmetric
kind: proposition
title: "The square of the Vandermonde polynomial is symmetric"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vandermonde-polynomial, def-symmetric-polynomial, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 4.35 through Example 4.37"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

For every commutative ring $R$ and every $n$, the polynomial

$$\Delta_n^2=\prod_{1\le i<j\le n}(x_i-x_j)^2$$

is symmetric. This includes characteristic two and the empty products for $n=0,1$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and variables $x_1,\ldots,x_n$.

[L1] The Vandermonde polynomial is $\Delta_n=\prod_{i<j}(x_i-x_j)$ ([[def-vandermonde-polynomial]]).

[L2] A polynomial is symmetric when every permutation of the variables fixes it ([[def-symmetric-polynomial]]).

[L3] A permutation is a bijection of the index set ([[def-symmetric-group]]).

## Proof

**Proof technique:** direct.

1.1 A variable permutation bijects the unordered pairs $\{i,j\}$ with themselves. For each pair, it sends $(x_i-x_j)^2$ to either $(x_{\sigma(i)}-x_{\sigma(j)})^2$ or the same factor with its two terms reversed. [L1, L3]

2.1 Reversing a difference has no effect after squaring, since $(u-v)^2=(v-u)^2$ in every commutative ring, including characteristic two. Hence the permutation merely reorders the factors of $\Delta_n^2$. [step 1.1, algebra]

3.1 Every variable permutation fixes $\Delta_n^2$, so it is symmetric by [L2]. For $n=0,1$, the product is $1$ and the same conclusion holds. [step 2.1, L1, L2] ∎
