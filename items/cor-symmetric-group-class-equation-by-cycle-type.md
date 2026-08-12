---
id: cor-symmetric-group-class-equation-by-cycle-type
kind: corollary
title: 'The class equation of $S_n$ is $n!=\sum_{\sum k c_k=n} n!/\prod_k k^{c_k}c_k!$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types, thm-centralizer-cardinality-from-cycle-type, thm-conjugacy-class-cardinality, thm-class-equation, thm-number-of-bijections-of-a-finite-set]
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

[F3] A conjugacy class has cardinality equal to the group order divided by the centralizer order ([[thm-conjugacy-class-cardinality]]).

[F4] A finite group is the disjoint union of its conjugacy classes ([[thm-class-equation]]).

[F5] The symmetric group on $n$ symbols has $n!$ elements ([[thm-number-of-bijections-of-a-finite-set]]).

## Proof

**Proof technique:** counting.

1.1 By [F1], index the conjugacy classes by the displayed tuples. [F1]

2.1 For a tuple $(c_k)$, [F2], [F3], and [F5] give class size $n!/\prod k^{c_k}c_k!$. [F2, F3, F5, step 1.1]

3.1 Sum these disjoint class sizes using [F4] and use [F5] for the order of $S_n$; this is the displayed identity. [F4, F5, step 1.1, step 2.1]

4.1 At $n=0$, [F1] gives the one empty type and all empty products and $0!$ equal $1$, so the same formula reads $1=1$. [F1, F2, F5] ∎
