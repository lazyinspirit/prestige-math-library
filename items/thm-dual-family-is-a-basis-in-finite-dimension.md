---
id: thm-dual-family-is-a-basis-in-finite-dimension
kind: theorem
title: 'The dual family of a finite basis is a basis of the dual space, with the same dimension'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dual-family-associated-to-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-dimension]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapter 6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

If $B=(b_1,\ldots,b_n)$ is a basis of a finite-dimensional $F$-vector space $V$, then its dual family $B^*=(b_1^*,\ldots,b_n^*)$ is a basis of $V^*$. Consequently $\dim V^*=\dim V=n$.

## Facts & Assumptions

**Given:** A finite basis $B=(b_1,\ldots,b_n)$ of $V$ and its dual family.

[L1] The dual functionals satisfy $b_i^*(b_j)=\delta_{ij}$ ([[def-dual-family-associated-to-a-basis]]).

[L2] Every $v\in V$ has unique coordinates $v=\sum_{j=1}^n a_jb_j$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L3] The dimension of a finite-dimensional space is the cardinality of any finite basis ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 If $\sum_{i=1}^n c_ib_i^*=0$, evaluation at $b_j$ and [L1] give $c_j=0$ for every $j$; hence the dual family is linearly independent. [L1, algebra]

1.2 For $f\in V^*$, set $g=\sum_{i=1}^n f(b_i)b_i^*$. If $v=\sum_j a_jb_j$ as in [L2], then $g(v)=\sum_j a_jf(b_j)=f(v)$, so $f=g$ and the dual family spans $V^*$. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 make $B^*$ a basis, and [L3] gives $\dim V^*=n=\dim V$. For $n=0$, both sums are empty and the unique functional on the zero space is zero, so the same proof applies. [step 1.1, step 1.2, L3] ∎
