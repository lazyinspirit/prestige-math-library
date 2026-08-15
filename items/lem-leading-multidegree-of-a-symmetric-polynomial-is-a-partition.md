---
id: lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition
kind: lemma
title: "The leading multidegree of a symmetric polynomial is weakly decreasing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetric-polynomial, def-lexicographic-order-and-polynomial-multidegree]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

If $0\ne f\in R[x_1,\ldots,x_n]$ is symmetric and has leading multidegree $(a_1,\ldots,a_n)$ in lexicographic order, then

$$a_1\ge a_2\ge\cdots\ge a_n.$$

## Facts & Assumptions

**Given:** A nonzero symmetric polynomial $f$ with leading multidegree $a=(a_1,\ldots,a_n)$.

[L1] Every permutation of the variables fixes a symmetric polynomial ([[def-symmetric-polynomial]]).

[L2] The leading multidegree is the lexicographically greatest exponent tuple carrying a nonzero coefficient ([[def-lexicographic-order-and-polynomial-multidegree]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $a_i<a_{i+1}$ for some $i<n$. [assume-contra]

1.2 Interchanging $x_i$ and $x_{i+1}$ fixes $f$, so the tuple $a'=(a_1,\ldots,a_{i-1},a_{i+1},a_i,a_{i+2},\ldots,a_n)$ occurs in $f$ with the same nonzero coefficient as $a$. [given, L1]

2.1 The tuples agree before coordinate $i$ and $a'_i=a_{i+1}>a_i$, so $a'>_{\mathrm{lex}}a$, contradicting the maximality in [L2]. Therefore no such $i$ exists and the tuple is weakly decreasing. [step 1.1, step 1.2, L2, discharge-contradiction] ∎
