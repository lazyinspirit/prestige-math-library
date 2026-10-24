---
id: thm-rank-of-the-point-inclusion-matrix
kind: theorem
title: "$\\operatorname{rank}_{\\mathbb{Q}}W_{1,k}(n)=n$ for $1\\le k\\le n-1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inclusion-matrix, def-row-space-column-space-nullspace-and-matrix-ranks, thm-row-rank-equals-column-rank, def-linear-independence, def-binomial-coefficient, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $1\le k\le n-1$. Then

$$\operatorname{rank}_{\mathbb{Q}}W_{1,k}(n)=n.$$

## Facts & Assumptions

**Given:** a natural number $n$ and an index $k$ with $1\le k\le n-1$.

[F1] The row of $W_{1,k}(n)$ indexed by $\{i\}$ records membership of the point $i$ in each $k$-set ([[def-inclusion-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sum_{i<n}c_iR_i=0$, where $R_i$ is the row indexed by $\{i\}$. Looking at the column indexed by a $k$-set $K$ gives the equation $\sum_{i\in K}c_i=0$. [F1, assume-contra]

2.1 Let $i\ne j$. Because $1\le k\le n-1$, there is a $k$-set containing $i$ but not $j$; replacing $i$ by $j$ gives another $k$-set. Subtracting the two equations from step 1.1 yields $c_i=c_j$. [F1, step 1.1]

3.1 All coefficients are therefore equal to some common value $c$. Choosing any $k$-set $K$ in step 1.1 gives $kc=0$, and since $k\ge1$ in $\mathbb{Q}$ this forces $c=0$. So the rows are linearly independent, and there are $n$ of them. [step 1.1, step 2.1, algebra, discharge-contradiction] ∎

## Remarks

- The range is sharp. At $k=n$ the matrix has one column and rank $1$, while at $k=0$ there is no point row at all.
