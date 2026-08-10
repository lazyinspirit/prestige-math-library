---
id: thm-trace-of-ab-equals-trace-of-ba
kind: theorem
title: 'For $A\in M_{m\times n}(F)$ and $B\in M_{n\times m}(F)$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-trace-of-a-square-matrix, def-matrix-product-and-identity-matrix,
       lem-finite-sum-reindexing-and-fubini, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Theorem 8.49'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For $A\in M_{m\times n}(F)$ and $B\in M_{n\times m}(F)$,

$$\operatorname{tr}(AB)=\operatorname{tr}(BA).$$

The two products may have different sizes, and the equality includes $m=0$ or
$n=0$.

## Facts & Assumptions

**Given:** A field $F$ and the rectangular matrices in the Statement.

[L1] Trace is the sum of diagonal entries, and matrix products are row-by-column finite sums ([[def-trace-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]]).

[L2] A finite double sum may be evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Expanding by [L1] gives $\operatorname{tr}(AB)=\sum_{i<m}\sum_{j<n}a_{ij}b_{ji}$. [given, L1]

2.1 By [L2] and commutativity of multiplication in $F$, this equals $\sum_{j<n}\sum_{i<m}b_{ji}a_{ij}$. [step 1.1, L1, L2]

3.1 The final double sum is $\operatorname{tr}(BA)$ by [L1]. If $m=0$ or $n=0$, both sides are empty double sums and equal $0$. [step 2.1, L1, L2] ∎
