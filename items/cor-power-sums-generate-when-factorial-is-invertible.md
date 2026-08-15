---
id: cor-power-sums-generate-when-factorial-is-invertible
kind: corollary
title: "If $n!$ is invertible, then $p_1,\\ldots,p_n$ freely generate the symmetric-polynomial ring"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-newtons-identities, thm-fundamental-theorem-of-symmetric-polynomials, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Section 7.1"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring in which $n!\,1_R$ is a unit. Then substitution $P_k\mapsto p_k$ is an $R$-algebra isomorphism

$$R[P_1,\ldots,P_n]\longrightarrow R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}.$$

If $R$ is a field, the unit hypothesis is equivalent to $\operatorname{char}R=0$ or $\operatorname{char}R>n$.

## Facts & Assumptions

**Given:** A commutative ring $R$ in which $n!\,1_R$ is invertible.

[L1] Newton's identities are $ke_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$ for $k\ge1$ ([[thm-newtons-identities]]).

[L2] The elementary symmetric polynomials freely generate the symmetric-polynomial ring ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[L3] The factorial satisfies $n!=1\cdot2\cdots n$, with $0!=1$ ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** direct.

1.1 For each $1\le k\le n$, the element $k\,1_R$ is a unit: the product of $k\,1_R$ with the images of all the other factors in $n!$ is the unit $n!\,1_R$, and a factor of a unit in a commutative ring is a unit. [given, L3, algebra]

2.1 Using the inverse of $k\,1_R$, [L1] recursively expresses $e_k$ as a polynomial in $p_1,\ldots,p_k$. Conversely [L1] expresses $p_k$ as $(-1)^{k-1}ke_k$ plus a polynomial in $e_1,\ldots,e_{k-1}$. [step 1.1, L1, algebra]

3.1 These mutually inverse triangular substitutions have unit diagonal coefficients, so they give an isomorphism $R[e_1,\ldots,e_n]\cong R[p_1,\ldots,p_n]$. Composing with [L2] proves free generation. [step 2.1, L2]

4.1 In a field, a positive integer image is a unit exactly when it is nonzero. Thus all of $1,\ldots,n$ are nonzero exactly in characteristic zero or characteristic greater than $n$, which is equivalent to the factorial image being nonzero and hence invertible. [step 1.1, algebra] ∎
