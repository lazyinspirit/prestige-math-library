---
id: thm-orthogonal-nonzero-vectors-are-linearly-independent
kind: theorem
title: "Every finite orthogonal list of nonzero vectors is linearly independent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-vectors-sets-and-orthonormal-bases, def-linear-independence, def-inner-product-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.25'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Theorem 5.2.6'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Every finite orthogonal list of nonzero vectors in an inner product space is linearly independent. The empty list is included.

## Facts & Assumptions

**Given:** An orthogonal list $(v_0,\ldots,v_{r-1})$ in an inner product space, with $v_j\ne0$ for every $j<r$.

[L1] Orthogonality means $\langle v_i,v_j\rangle=0$ whenever $i\ne j$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]).

[L2] Positive definiteness gives $\langle v_j,v_j\rangle>0$ for every nonzero $v_j$ ([[def-inner-product-space]]).

[L3] A finite list is linearly independent when its only vanishing linear combination has every coefficient zero ([[def-linear-independence]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, the independence condition is vacuous. Suppose $r>0$ and $\sum_{i<r}a_iv_i=0$. [given, L3]

2.1 For each $j<r$, pair the equality in step 1.1 with $v_j$. Linearity and [L1] give $0=\sum_{i<r}a_i\langle v_i,v_j\rangle=a_j\langle v_j,v_j\rangle$. [step 1.1, L1]

3.1 By [L2], $\langle v_j,v_j\rangle\ne0$, so $a_j=0$. This holds for every $j$, and [L3] proves independence. [step 2.1, L2, L3] ∎
