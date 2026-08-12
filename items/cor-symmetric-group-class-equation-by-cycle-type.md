---
id: cor-symmetric-group-class-equation-by-cycle-type
kind: corollary
title: 'The class equation of $S_n$ is $n!=\sum_{\sum k c_k=n} n!/\prod_k k^{c_k}c_k!$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lagrange, cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types, thm-centralizer-cardinality-from-cycle-type, thm-conjugacy-class-cardinality, thm-class-equation, thm-number-of-bijections-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: counting
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

For every $n\ge0$,
$$n!=\sum_{\substack{c_1,\ldots,c_n\ge0\\\sum_{k=1}^n kc_k=n}} \frac{n!}{\prod_{k=1}^n k^{c_k}c_k!}.$$
When $n=0$, the one empty tuple contributes $1$.

## Facts & Assumptions

**Given:** The symmetric group $S_n$ for $n\ge0$.

[F1] Conjugacy classes of $S_n$ are indexed by the tuples with $\sum kc_k=n$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]]).

[F2] A permutation of type $(c_k)$ has centralizer cardinality $\prod k^{c_k}c_k!$ ([[thm-centralizer-cardinality-from-cycle-type]]).

[F3] A conjugacy class has cardinality $|\operatorname{Cl}_G(x)|=[G:C_G(x)]$ ([[thm-conjugacy-class-cardinality]]), and $|G|=[G:H]\,|H|$ for $H\le G$ ([[thm-lagrange]]), so the class size is $|G|/|C_G(x)|$.

[F4] If $x_1,\ldots,x_r$ represent the non-singleton conjugacy classes of a finite group $G$, then $|G|=|Z(G)|+\sum_i[G:C_G(x_i)]$ ([[thm-class-equation]]).

[F5] The symmetric group on $n$ symbols has $n!$ elements ([[thm-number-of-bijections-of-a-finite-set]]).

## Proof

**Proof technique:** counting.

1.1 By [F1], index the conjugacy classes by the displayed tuples. [F1]

2.1 For a tuple $(c_k)$, [F2], [F3], and [F5] give class size $n!/\prod k^{c_k}c_k!$. [F2, F3, F5, step 1.1]

3.1 In [F4], the central term counts the singleton conjugacy classes and the sum counts every remaining class. Thus summing the sizes from step 2.1 and using [F5] for $|S_n|$ gives the displayed identity. [F4, F5, step 1.1, step 2.1]

4.1 At $n=0$, [F1] gives the one empty type and all empty products and $0!$ equal $1$, so the same formula reads $1=1$. [F1, F2, F5] ∎
